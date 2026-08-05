// ============================================================
// SSCSS — Analytics Configuration
//
// Single source of truth for analytics settings.
//
// All identifiers come from environment variables ONLY:
//   VITE_GA4_MEASUREMENT_ID        — GA4 Measurement ID (G-XXXXXXX)
//   VITE_GTM_ID                    — Google Tag Manager Container ID (GTM-XXXXXXX)
//   VITE_ANALYTICS_DEBUG           — "true" enables debug logging
//
// Webmaster verification tokens:
//   VITE_GOOGLE_SITE_VERIFICATION  — Google Search Console meta token
//   VITE_BING_SITE_VERIFICATION    — Bing Webmaster meta token
//
// When no IDs are configured, analytics is fully disabled and the
// website functions identically without any tracking.
// ============================================================

// ─── Environment access (with safe fallbacks) ────────────────
function env(name: string): string {
  const value = import.meta.env[name];
  return typeof value === "string" ? value.trim() : "";
}

// ─── Public configuration ────────────────────────────────────
export const ANALYTICS_CONFIG = {
  /** GA4 Measurement ID (e.g. G-ABC123XYZ). Empty string disables GA4. */
  ga4MeasurementId: env("VITE_GA4_MEASUREMENT_ID"),

  /** GTM Container ID (e.g. GTM-ABC1234). Empty string disables GTM. */
  gtmId: env("VITE_GTM_ID"),

  /** Enable console.debug logging of analytics events in development. */
  debug: env("VITE_ANALYTICS_DEBUG") === "true",

  /** Google Search Console verification token. Empty string omits the meta tag. */
  googleSiteVerification: env("VITE_GOOGLE_SITE_VERIFICATION"),

  /** Bing Webmaster verification token. Empty string omits the meta tag. */
  bingSiteVerification: env("VITE_BING_SITE_VERIFICATION"),
} as const;

/** True when either GA4 or GTM is configured. */
export function isAnalyticsEnabled(): boolean {
  return Boolean(ANALYTICS_CONFIG.ga4MeasurementId || ANALYTICS_CONFIG.gtmId);
}

