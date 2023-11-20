import { Locale } from "../../system/locale/Locale";
import { Customer } from "../../checkout/customer/Customer";
import { CategoryTranslation } from "../../content/category/CategoryTranslation";
import { CountryStateTranslation } from "../../system/country/CountryStateTranslation";
import { CurrencyTranslation } from "../../system/currency/CurrencyTranslation";
import { CustomerGroupTranslation } from "../../checkout/customer/CustomerGroupTranslation";
import { LocaleTranslation } from "../../system/locale/LocaleTranslation";
import { MediaTranslation } from "../../content/media/MediaTranslation";
import { PaymentMethodTranslation } from "../../checkout/payment/PaymentMethodTranslation";
import { ProductManufacturerTranslation } from "../../content/product/ProductManufacturerTranslation";
import { ProductTranslation } from "../../content/product/ProductTranslation";
import { ShippingMethodTranslation } from "../../checkout/shipping/ShippingMethodTranslation";
import { PropertyGroupTranslation } from "../../content/property/PropertyGroupTranslation";
import { SalutationTranslation } from "../../system/salutation/SalutationTranslation";
import { PluginTranslation } from "../plugin/PluginTranslation";
import { ProductStreamTranslation } from "../../content/product-stream/ProductStreamTranslation";
import { MailTemplate } from "../../content/mail-template/MailTemplate";
import { MailHeaderFooter } from "../../content/mail-template/MailHeaderFooter";
import { DocumentTypeTranslation } from "../../checkout/document/DocumentTypeTranslation";
import { DeliveryTime } from "../../checkout/delivery/DeliveryTime";
import { NewsletterRecipient } from "../../content/newsletter/NewsletterRecipient";
import { Order } from "../../checkout/order/Order";
import { ProductSearchKeyword } from "../../content/product/ProductSearchKeyword";
import { ProductKeywordDictionary } from "../../content/product/ProductKeywordDictionary";
import { MailTemplateTypeTranslation } from "../../content/mail-template/MailTemplateTypeTranslation";
import { PromotionTranslation } from "../../checkout/promotion/PromotionTranslation";
import { NumberRangeTranslation } from "../../system/number-range/NumberRangeTranslation";
import { ProductReview } from "../../content/product/ProductReview";
import { SalesChannel } from "../../system/sales-channel/SalesChannel";
import { UnitTranslation } from "../../system/unit/UnitTranslation";
import { PropertyGroupOptionTranslation } from "../../content/property/PropertyGroupOptionTranslation";
import { SalesChannelTranslation } from "../../system/sales-channel/SalesChannelTranslation";
import { SalesChannelTypeTranslation } from "../../system/sales-channel/SalesChannelTypeTranslation";
import { SalesChannelDomain } from "../../system/sales-channel/SalesChannelDomain";
import { NumberRangeTypeTranslation } from "../../system/number-range/NumberRangeTypeTranslation";
import { CustomFields } from "../../common/CustomField";
import { Collection } from "../../common/Collection";
import { Schemas } from "#shopware";

/**
 * @deprecated use {@link Schemas['Language']} from "#shopware" import instead
 */
export type Language = Schemas["Language"];
// export type Language = {
//   translated: any[];
//   createdAt: Date | string;
//   updatedAt: Date | string | null;
//   parentId: string | null;
//   localeId: string;
//   translationCodeId: string | null;
//   translationCode: LanguageLocale | null;
//   name: string;
//   locale: Locale | null;
//   parent: Language | null;
//   children: Language[] | null;
//   id: string;
//   apiAlias: string;
//   customFields: CustomFields | null;
//   salesChannels?: SalesChannel[] | null;
//   customers?: Customer[] | null;
//   salesChannelDefaultAssignments?: SalesChannel[] | null;
//   categoryTranslations?: CategoryTranslation[] | null;
//   countryStateTranslations?: CountryStateTranslation[] | null;
//   countryTranslations?: CategoryTranslation[] | null;
//   currencyTranslations?: CurrencyTranslation[] | null;
//   customerGroupTranslations?: CustomerGroupTranslation[] | null;
//   localeTranslations?: LocaleTranslation[] | null;
//   mediaTranslations?: MediaTranslation[] | null;
//   paymentMethodTranslations?: PaymentMethodTranslation[] | null;
//   productManufacturerTranslations?: ProductManufacturerTranslation[] | null;
//   productTranslations?: ProductTranslation[] | null;
//   shippingMethodTranslations?: ShippingMethodTranslation[] | null;
//   unitTranslations?: UnitTranslation[] | null;
//   propertyGroupTranslations?: PropertyGroupTranslation[] | null;
//   propertyGroupOptionTranslations?: PropertyGroupOptionTranslation[] | null;
//   salesChannelTranslations?: SalesChannelTranslation[] | null;
//   salesChannelTypeTranslations?: SalesChannelTypeTranslation[] | null;
//   salutationTranslations?: SalutationTranslation[] | null;
//   salesChannelDomains?: SalesChannelDomain[] | null;
//   pluginTranslations?: PluginTranslation[] | null;
//   productStreamTranslations?: ProductStreamTranslation[] | null;
//   stateMachineTranslations?: Collection[] | null;
//   stateMachineStateTranslations?: Collection[] | null;
//   cmsPageTranslations?: Collection[] | null;
//   cmsSlotTranslations?: Collection[] | null;
//   mailTemplateTranslations?: MailTemplate[] | null;
//   mailHeaderFooterTranslation?: MailHeaderFooter[] | null;
//   documentTypeTranslations?: DocumentTypeTranslation[] | null;
//   deliveryTimeTranslations?: DeliveryTime[] | null;
//   newsletterRecipients?: NewsletterRecipient[] | null;
//   orders?: Order[] | null;
//   numberRangeTypeTranslations?: NumberRangeTypeTranslation[] | null;
//   productSearchKeywords?: ProductSearchKeyword[] | null;
//   productKeywordDictionaries?: ProductKeywordDictionary[] | null;
//   mailTemplateTypeTranslations?: MailTemplateTypeTranslation[] | null;
//   promotionTranslations?: PromotionTranslation[] | null;
//   numberRangeTranslations?: NumberRangeTranslation[] | null;
//   productReviews?: ProductReview[] | null;
// };

/**
 * @public
 */
export type LanguageLocale = {
  translated: LanguageLocaleTranslated;
  createdAt: Date | string;
  updatedAt: Date | string | null;
  code: string;
  name: string | null;
  territory: string | null;
  id: string;
  customFields: CustomFields | null;
  apiAlias: "locale";
};

/**
 * @public
 */
export type LanguageLocaleTranslated = {
  name: string;
  territory: string;
  customFields: CustomFields | null;
};
