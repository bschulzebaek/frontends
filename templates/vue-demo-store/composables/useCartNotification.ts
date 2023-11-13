import type { Cart } from "#shopware";
import type { CartError } from "@shopware-pwa/types";

const successCodes = ["promotion-discount-added"];

export type useCartNotificationReturn = {
  codeErrorsNotification(): void;
  getErrorsCodes(): CartError[];
};

/**
 * UI composable
 *
 * @returns
 */
export function useCartNotification(): useCartNotificationReturn {
  const { pushError, pushSuccess } = useNotifications();
  const { consumeCartErrors } = useCart();

  /**
   * Get cart error and display
   *
   * @returns {void}
   */
  const codeErrorsNotification = () => {
    const errors: Cart["errors"] = consumeCartErrors();
    if (!errors || Array.isArray(errors)) return; // TODO: [OpenAPI][Cart] - Cart errors should be object, not array, for now, when empty - returns array

    Object.keys(errors).forEach((element) => {
      if (successCodes.includes(errors[element].messageKey)) {
        pushSuccess(errors[element].message);
      } else {
        pushError(errors[element].message);
      }
    });
  };

  /**
   * Get errors codes without displaying
   *
   * @returns CartError[] | undefined
   */
  const getErrorsCodes = () => {
    const errors: Cart["errors"] = consumeCartErrors();
    if (!errors || Array.isArray(errors)) return []; // TODO: [OpenAPI][Cart] - Cart errors should be object, not array, for now, when empty - returns array

    return Object.keys(errors).reduce((acc, element) => {
      if (!successCodes.includes(errors[element].messageKey))
        acc.push(errors[element]);

      return acc;
    }, [] as CartError[]);
  };

  return {
    codeErrorsNotification,
    getErrorsCodes,
  };
}
