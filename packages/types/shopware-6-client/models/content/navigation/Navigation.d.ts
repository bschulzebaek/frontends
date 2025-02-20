import { Product } from "../product/Product";
import { Media } from "../media/Media";
import { Category } from "../category/Category";
import { RouteName } from "../cms/CmsPage";
import { CustomFields } from "../../common/CustomField";
import type { Schemas } from "#shopware";

/**
 * Navigation type to display on page.
 *
 * Source: https://github.com/shopware/platform/blob/trunk/src/Core/Content/Category/SalesChannel/NavigationRoute.php#L285
 *
 * @deprecated - use Schema["NavigationType"] instead from import "#shopware"
 */
export type StoreNavigationType = Schemas["NavigationType"];
// export type StoreNavigationType =
//   | "main-navigation"
//   | "footer-navigation"
//   | "service-navigation";

/**
 * @deprecated - use Schema["NavigationElement"] instead from import "#shopware"
 */
export type SeoUrl = Schemas["SeoUrl"];
// export type SeoUrl = {
//   salesChannelId: string;
//   languageId: string;
//   routeName: RouteName;
//   foreignKey: string;
//   pathInfo: string;
//   seoPathInfo: string;
//   isCanonical: boolean;
//   isModified: boolean;
//   isDeleted: boolean;
//   /**
//    * @deprecated removed from 6.5.0
//    */
//   isValid: null | boolean;
//   language?: null | boolean;
//   url: null | string;
//   customFields: CustomFields | null;
//   /**
//    * @deprecated removed from 6.5.0
//    */
//   error?: null | any;
//   _uniqueIdentifier?: string;
//   versionId?: null | string;
//   translated: [];
//   createdAt: Date | string;
//   updatedAt: Date | string | null;
//   extensions?: unknown;
//   id: string;
//   apiAlias: string;
// };

/**
 * @deprecated use {@link Schemas['Category']} from "#shopware" import instead
 */
export type StoreNavigationElement = Category;
//   {
//   seoUrls: SeoUrl[];
//   parentId: string | null;
//   autoIncrement: number;
//   mediaId: string | null;
//   name: string;
//   breadcrumb: string[];
//   path: string;
//   level: number;
//   active: boolean;
//   childCount: number;
//   displayNestedProducts: boolean;
//   parent: StoreNavigationElement;
//   children: null | StoreNavigationElement[];
//   translations: unknown;
//   media: Media | null;
//   products: null | Product[];
//   nestedProducts: null | Product[];
//   afterCategoryId: null | string;
//   customFields: null;
//   tags: null;
//   cmsPageId: string;
//   cmsPage: null;
//   slotConfig: null;
//   externalLink: null;
//   visible: true;
//   type: string;
//   description: string;
//   metaTitle: string | null;
//   metaDescription: string | null;
//   keywords: string | null;
//   _uniqueIdentifier: string;
//   versionId: string;
//   translated: {
//     name: string;
//     description: string;
//   };
//   createdAt: Date;
//   updatedAt: Date;
//   extensions: unknown;
//   id: string;
//   parentVersionId: string | null;
//   afterCategoryVersionId: string | null;
//   apiAlias: string;
// };
