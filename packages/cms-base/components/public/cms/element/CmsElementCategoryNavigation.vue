<script setup lang="ts">
import SwCategoryNavigation from "../../../SwCategoryNavigation.vue";
import deepMerge from "../../../../helpers/deepMerge";
import getTranslations from "../../../../helpers/getTranslations";
import { useCategory, useNavigation } from "#imports";
import { onMounted, computed } from "vue";
import type { Schemas } from "#shopware";

type Translations = {
  listing: {
    category: string;
    categories: string;
  };
};

let translations: Translations = {
  listing: {
    category: "Category",
    categories: "Categories",
  },
};

const globalTranslations = getTranslations();
translations = deepMerge(translations, globalTranslations) as Translations;

const { category: activeCategory } = useCategory();
const { loadNavigationElements, navigationElements } = useNavigation();
const navigations = computed(() => {
  const navigation: Schemas["Category"][] = JSON.parse(
    JSON.stringify(navigationElements.value),
  );
  return navigation?.map((navigationElement) => {
    navigationElement.children =
      activeCategory.value?.id === navigationElement.id
        ? navigationElement.children
        : [];
    return navigationElement;
  });
});

onMounted(async () => {
  try {
    await loadNavigationElements({ depth: 2 });
  } catch (e) {
    console.error("[SwBottomMenu]", e);
  }
});
</script>
<template>
  <div
    v-if="navigations && navigations.length"
    class="cms-element-category-navigation max-w-screen-xl mx-auto"
  >
    <h2
      v-if="navigations.length > 0"
      class="text-3xl font-bold tracking-tight text-gray-900 m-0 px-5"
    >
      {{
        navigations.length > 1
          ? translations.listing.categories
          : translations.listing.category
      }}
    </h2>
    <SwCategoryNavigation
      :level="0"
      :elements="navigations"
      :activeCategory="activeCategory"
    />
  </div>
</template>
