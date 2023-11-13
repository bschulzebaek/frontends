import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";
import { getProductReviews, addProductReview } from "@shopware-pwa/api-client";
import type {
  Product,
  ProductReview,
  ShopwareSearchParams,
} from "@shopware-pwa/types";
import { useShopwareContext } from "#imports";

export type UseProductReviewsReturn = {
  /**
   * All reviews added to the product
   */
  productReviews: ComputedRef<ProductReview[]>;
  /**
   * Adds a review to the product
   * @param data `title` - review title, `content` - review content, `points` - review points (range of 1-5)
   * @returns
   */
  addReview(data: {
    title: string;
    content: string;
    points: number;
  }): Promise<void>;
  /**
   * Fetches the reviews list and assigns the result to the `productReviews` property
   * @param parameters {@link ShopwareSearchParams}
   * @returns
   */
  loadProductReviews(parameters?: ShopwareSearchParams): Promise<void>;
};

/**
 * Composable for listing customer orders.
 * @public
 * @category Product
 */
export function useProductReviews(
  product: Ref<Product>,
): UseProductReviewsReturn {
  const { apiInstance } = useShopwareContext();

  const productReviews: Ref<ProductReview[]> = ref([]);

  const loadProductReviews = async (
    parameters: ShopwareSearchParams = {},
  ): Promise<void> => {
    const fetchedReviews = await getProductReviews(
      product.value.id as string, // TODO: [OpenAPI][Product] - `id` should be required field in Product schema
      undefined,
      // Object.assign({}, getDefaults(), parameters),
      apiInstance,
    );
    productReviews.value = fetchedReviews.elements ?? [];
  };

  const addReview = async (data: {
    title: string;
    content: string;
    points: number;
  }) => {
    await addProductReview(product.value.id as string, data, apiInstance); // TODO: [OpenAPI][Product] - `id` should be required field in Product schema
  };

  return {
    productReviews: computed(() => productReviews.value),
    loadProductReviews,
    addReview,
  };
}
