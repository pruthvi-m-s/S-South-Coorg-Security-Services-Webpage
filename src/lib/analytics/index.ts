// ============================================================
// SSCSS — Analytics Module Barrel
//
// Public API for the analytics module.
//
// Business components import ONLY from this file — they never
// import from core.ts, never touch window.dataLayer, and never
// call window.gtag directly.
//
// To remove analytics entirely: delete this directory and remove
// <AnalyticsProvider /> from Layout.tsx.
// ============================================================

export {
  ANALYTICS_CONFIG,
  isAnalyticsEnabled,
} from "./config";
export type {
  AnalyticsEventParams,
  CtaClickParams,
  DataLayerEntry,
  EventName,
  FaqInteractionParams,
  FileDownloadClickParams,
  FormSubmitErrorParams,
  FormSubmitSuccessParams,
  FormValidationErrorParams,
  GalleryInteractionParams,
  OutboundLinkClickParams,
  PageViewParams,
  PhoneClickParams,
  ScrollDepthParams,
  ServicePageViewParams,
  WhatsAppClickParams,
} from "./types";
export { EVENTS } from "./types";
export {
  getPageTitle,
  getSourcePage,
  trackCtaClick,
  trackCustomEvent,
  trackFaqInteraction,
  trackFileDownloadClick,
  trackFormSubmitError,
  trackFormSubmitSuccess,
  trackFormValidationError,
  trackGalleryInteraction,
  trackOutboundLinkClick,
  trackPageView,
  trackPhoneClick,
  trackScrollDepth,
  trackServicePageView,
  trackWhatsAppClick,
} from "./events";
export {
  useInteractionTracking,
  usePageViewTracking,
  useScrollDepthTracking,
} from "./hooks";
export { default as AnalyticsProvider } from "./AnalyticsProvider";

