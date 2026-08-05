// ============================================================
// SSCSS — Analytics Event Helpers
//
// Privacy-friendly, typed wrappers around the analytics core.
// Components import these helpers — they NEVER touch
// window.dataLayer / window.gtag directly.
//
// Structural data only. No PII (name, phone, email) is ever
// passed to analytics.
// ============================================================

import { trackEvent } from "./core";
import { EVENTS } from "./types";
import type {
  CtaClickParams,
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

// ─── Route helpers ───────────────────────────────────────────
/** Current pathname with trailing slash normalized (same convention as seo.ts). */
export function getSourcePage(pathname?: string): string {
  if (typeof window === "undefined") return "/";
  const path = pathname ?? window.location.pathname;
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

/** Title for the current document. */
export function getPageTitle(): string {
  if (typeof document === "undefined") return "";
  return document.title || "";
}

// ─── Page tracking ───────────────────────────────────────────
/** Fire a SPA page view. Call on every route change. */
export function trackPageView(params: PageViewParams): void {
  trackEvent(EVENTS.pageView, params as unknown as Record<string, unknown>);
}

/** Fire a service page view for funnel analysis. */
export function trackServicePageView(params: ServicePageViewParams): void {
  trackEvent(EVENTS.servicePageView, params as unknown as Record<string, unknown>);
}

// ─── Conversion tracking ─────────────────────────────────────
/** CTA click — "Get a Quote" / "Enquire". */
export function trackCtaClick(params: CtaClickParams): void {
  trackEvent(EVENTS.ctaQuoteClick, params as unknown as Record<string, unknown>);
}

/** Phone (tel:) click. */
export function trackPhoneClick(params: PhoneClickParams): void {
  trackEvent(EVENTS.phoneClick, params as unknown as Record<string, unknown>);
}

/** WhatsApp click. */
export function trackWhatsAppClick(params: WhatsAppClickParams): void {
  trackEvent(EVENTS.whatsappClick, params as unknown as Record<string, unknown>);
}

/** Form submitted successfully. */
export function trackFormSubmitSuccess(params: FormSubmitSuccessParams): void {
  trackEvent(EVENTS.formSubmitSuccess, params as unknown as Record<string, unknown>);
}

/** Form submission failed. */
export function trackFormSubmitError(params: FormSubmitErrorParams): void {
  trackEvent(EVENTS.formSubmitError, params as unknown as Record<string, unknown>);
}

/** Form validation failed client-side. */
export function trackFormValidationError(params: FormValidationErrorParams): void {
  trackEvent(EVENTS.formValidationError, params as unknown as Record<string, unknown>);
}

// ─── Engagement tracking ─────────────────────────────────────
/** Scroll depth milestone reached (25/50/75/100). */
export function trackScrollDepth(params: ScrollDepthParams): void {
  trackEvent(EVENTS.scrollDepth, params as unknown as Record<string, unknown>);
}

/** Outbound link clicked. */
export function trackOutboundLinkClick(params: OutboundLinkClickParams): void {
  trackEvent(EVENTS.outboundLinkClick, params as unknown as Record<string, unknown>);
}

/** File download clicked. */
export function trackFileDownloadClick(params: FileDownloadClickParams): void {
  trackEvent(EVENTS.fileDownloadClick, params as unknown as Record<string, unknown>);
}

// ─── Interaction tracking ────────────────────────────────────
/** Gallery interaction (filter, lightbox open/navigate/close). */
export function trackGalleryInteraction(params: GalleryInteractionParams): void {
  trackEvent(EVENTS.galleryInteraction, params as unknown as Record<string, unknown>);
}

/** FAQ accordion expand/collapse. */
export function trackFaqInteraction(params: FaqInteractionParams): void {
  trackEvent(EVENTS.faqInteraction, params as unknown as Record<string, unknown>);
}

// ─── Generic helper (opt-in, structural params only) ─────────
/**
 * Low-level generic event helper for custom structural events.
 * Callers must never pass PII. Prefer the typed helpers above.
 */
export function trackCustomEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  trackEvent(eventName as never, params as unknown as Record<string, unknown>);
}

