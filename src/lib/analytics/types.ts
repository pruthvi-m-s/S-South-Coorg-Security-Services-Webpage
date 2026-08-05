// ============================================================
// SSCSS — Analytics Event Types
//
// Event taxonomy mirrors 07_ANALYTICS.md §1 plus the additional
// events required for this milestone (scroll depth, gallery,
// FAQ, outbound links, file downloads).
//
// Privacy rule: NEVER pass personal data (name, phone, email)
// as event parameters. Only structural data is allowed.
// ============================================================

// ─── Event Names ─────────────────────────────────────────────
// Single source of truth for every analytics event name.
// Components reference these constants — never raw strings.

export const EVENTS = {
  /** GA4 default page view — fired on every route change (SPA-aware). */
  pageView: "page_view",

  /** "Get a Quote" / "Enquire" button click on any page. */
  ctaQuoteClick: "cta_quote_click",

  /** Deprecated alias for cta_quote_click — kept for taxonomy stability. */
  ctaClick: "cta_click",

  /** tel: link click (header, sticky button, footer, contact page). */
  phoneClick: "phone_click",

  /** WhatsApp link/button click. */
  whatsappClick: "whatsapp_click",

  /** Inquiry form successfully submitted (Formspree 200). */
  formSubmitSuccess: "form_submit_success",

  /** Inquiry form submission failed. */
  formSubmitError: "form_submit_error",

  /** Form validation failed client-side before submission. */
  formValidationError: "form_validation_error",

  /** Any /services/{slug} route view. */
  servicePageView: "service_page_view",

  /** Scroll depth milestones reached (25/50/75/100). */
  scrollDepth: "scroll_depth",

  /** External link clicked (different origin). */
  outboundLinkClick: "outbound_link_click",

  /** File download link clicked (pdf, doc, zip, xls, etc.). */
  fileDownloadClick: "file_download_click",

  /** Gallery interaction — filter, lightbox open/navigate/close. */
  galleryInteraction: "gallery_interaction",

  /** FAQ accordion expand/collapse. */
  faqInteraction: "faq_interaction",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

// ─── Event Parameter Types ───────────────────────────────────
// Structural parameters only — no PII.

export interface PageViewParams {
  page_path: string;
  page_title?: string;
}

export interface CtaClickParams {
  source_page: string;
  cta_label: string;
}

export interface PhoneClickParams {
  source_page: string;
  component: string;
}

export interface WhatsAppClickParams {
  source_page: string;
  component: string;
}

export interface FormSubmitSuccessParams {
  source_page: string;
  service_interested: string;
}

export interface FormSubmitErrorParams {
  source_page: string;
  error_type: string;
}

export interface FormValidationErrorParams {
  source_page: string;
  error_fields: string;
}

export interface ServicePageViewParams {
  service_slug: string;
}

export interface ScrollDepthParams {
  source_page: string;
  percent: number;
}

export interface OutboundLinkClickParams {
  source_page: string;
  link_url: string;
  link_domain: string;
}

export interface FileDownloadClickParams {
  source_page: string;
  file_name: string;
  file_extension: string;
}

export interface GalleryInteractionParams {
  source_page: string;
  action: string;
  category?: string;
  media_id?: string;
}

export interface FaqInteractionParams {
  source_page: string;
  action: "expand" | "collapse";
  faq_id: string;
  faq_category?: string;
}

// ─── Union of all event params ───────────────────────────────
export type AnalyticsEventParams =
  | PageViewParams
  | CtaClickParams
  | PhoneClickParams
  | WhatsAppClickParams
  | FormSubmitSuccessParams
  | FormSubmitErrorParams
  | FormValidationErrorParams
  | ServicePageViewParams
  | ScrollDepthParams
  | OutboundLinkClickParams
  | FileDownloadClickParams
  | GalleryInteractionParams
  | FaqInteractionParams;

// ─── Global typings (window.dataLayer / window.gtag) ─────────
export type DataLayerEntry = {
  event?: EventName;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
    gtag?: (...args: unknown[]) => void;
  }
}

