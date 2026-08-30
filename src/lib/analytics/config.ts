// ============================================================
// SSCSS — Analytics Configuration
// ============================================================

function env(name: string): string {
  const value = import.meta.env[name];

  return typeof value === "string"
    ? value.trim()
    : "";
}

export const ANALYTICS_CONFIG = {
  ga4MeasurementId: env(
    "VITE_GA4_MEASUREMENT_ID",
  ),

  gtmId: env("VITE_GTM_ID"),

  debug:
    env("VITE_ANALYTICS_DEBUG") ===
    "true",

  googleSiteVerification: env(
    "VITE_GOOGLE_SITE_VERIFICATION",
  ),

  bingSiteVerification: env(
    "VITE_BING_SITE_VERIFICATION",
  ),
} as const;

export function isAnalyticsEnabled(): boolean {
  return Boolean(
    ANALYTICS_CONFIG.ga4MeasurementId ||
      ANALYTICS_CONFIG.gtmId,
  );
}