// ============================================================
// SSCSS — Content Barrel Export
// All content/data layer exports in one place.
// ============================================================

export { SITE, CONTACT, SOCIAL, EMERGENCY_HOTLINE } from "./site";

export {
  MAIN_NAVIGATION,
  FOOTER_COMPANY_LINKS,
} from "./navigation";
export type { NavItem } from "./navigation";

export {
  SERVICES,
  PRIMARY_SERVICE_CATEGORIES,
  getServiceBySlug,
  getPrimaryServiceCategories,
  getRelatedServices,
} from "./services";
export type {
  PrimaryServiceCategory,
  ResolvedPrimaryServiceCategory,
} from "./services";

export {
  INDUSTRIES,
  getIndustriesForService,
} from "./industries";

export {
  TESTIMONIALS,
} from "./testimonials";

export {
  CLIENTS,
} from "./clients";

export {
  CERTIFICATIONS,
} from "./certifications";

export { STATS } from "./stats";

export {
  FAQS,
  getFaqsByCategory,
  getFaqCategories,
} from "./faqs";

export { ABOUT } from "./about";

export { COMPLIANCE_PAGE } from "./compliance";
export type { CompliancePageContent } from "./compliance";

export { HERO } from "./hero";

export { FINAL_CTA } from "./cta";
export type { CtaContent } from "./cta";

export { FOUNDER } from "./founder";
export type { FounderContent, FounderAchievement } from "./founder";

export { SERVICES_HUB } from "./services-hub";

export { INDUSTRIES_PAGE } from "./industries-page";
export type { IndustriesPageContent } from "./industries-page";

export { CLIENTS_PAGE } from "./clients-page";
export type { ClientsPageContent, ClientCategory } from "./clients-page";

export { GALLERY } from "./gallery";
export type {
  GalleryImage,
  GalleryVideo,
  GalleryCategory,
  GalleryContent,
} from "./gallery";

export { FAQ_PAGE } from "./faq-page";
export type { FaqPageContent } from "./faq-page";

export { CONTACT_PAGE } from "./contact-page";
export type { ContactPageContent, BusinessHoursEntry, OfficeInfo, ServiceArea } from "./contact-page";

export { THANK_YOU } from "./thank-you";
export type { ThankYouPageContent } from "./thank-you";

export { PRICING_DISCLAIMER } from "./pricing";
export type { PricingDisclaimerContent } from "./pricing";

export { NOT_FOUND } from "./not-found";
export type { NotFoundPageContent } from "./not-found";

export { SEO_DEFAULTS, HOME_SEO, ABOUT_SEO, SERVICES_SEO } from "./seo";
