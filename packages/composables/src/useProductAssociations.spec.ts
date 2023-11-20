import { describe, expect, it, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { useProductAssociations } from "./useProductAssociations";
import { computed, defineComponent } from "vue";
import * as apiExports from "@shopware-pwa/api-client";
import mockedProduct from "./mocks/Product";
import mockedCrossSelling from "./mocks/CrossSellingResponse";
import type { Product, ShopwareSearchParams } from "@shopware-pwa/types";

const getMockProvide = () => ({
  global: {
    provide: {
      shopware: {
        apiInstance: {
          config: {},
        },
      },
      apiClient: { invoke: vi.fn() },
    },
  },
});

// const getLoadAssociationsParams = (method?: 'get' | 'post', searchParams?: ShopwareSearchParams) => {
//   return {
//     method: method,
//     searchParams: searchParams ,
//   };
// };

const Component = (mockedProductData: Product) =>
  defineComponent({
    template: "<div/>",
    props: {},
    setup() {
      const { isLoading, productAssociations, loadAssociations } =
        useProductAssociations(
          computed(() => mockedProductData),
          {
            associationContext: "cross-selling",
          },
        );
      return { isLoading, productAssociations, loadAssociations };
    },
  });

describe("useProductAssociations", () => {
  const provideMock = getMockProvide();
  provideMock.global.provide.apiClient.invoke.mockResolvedValue(
    mockedCrossSelling,
  );

  const wrapper = shallowMount(Component(mockedProduct), provideMock);

  it("productAssociations should be empty", () => {
    expect(wrapper.vm.productAssociations).toStrictEqual([]);
  });

  it("load productAssociations - POST", async () => {
    await wrapper.vm.loadAssociations({
      method: "post",
      searchParams: {
        associations: {
          media: {},
          cover: {
            associations: {
              media: {},
            },
          },
        },
      },
    });

    expect(wrapper.vm.productAssociations).toStrictEqual(mockedCrossSelling);
  });

  it("load productAssociations - POST - no search params", async () => {
    await wrapper.vm.loadAssociations({
      method: "post",
      searchParams: {},
    });

    expect(wrapper.vm.productAssociations).toStrictEqual(mockedCrossSelling);
  });

  it("load productAssociations - GET", async () => {
    await wrapper.vm.loadAssociations({
      method: "get",
      searchParams: {},
    });

    expect(wrapper.vm.productAssociations).toStrictEqual(mockedCrossSelling);
  });

  // TODO test only types
  // it("no product was provided", async () => {
  //   expect(() =>
  //     shallowMount(Component(null), getMockProvide())
  //   ).toThrowError();
  // });
});
