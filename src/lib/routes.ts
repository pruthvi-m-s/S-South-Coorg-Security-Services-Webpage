// ============================================================
// SSCSS — Route Path Constants
// Single source of truth for all route paths.
// Import these instead of hardcoding strings.
// ============================================================

export const ROUTES = {
  home: "/",
  about: "/about",
  compliance: "/compliance",
  services: "/services",
  serviceDetail: "/services/:slug",
  industries: "/industries",
  industryDetail: "/industries/:slug",
  clients: "/clients",
  gallery: "/gallery",
  faqs: "/faqs",
  contact: "/contact",
  thankYou: "/thank-you",
} as const;

/** Build a concrete path to a service detail page */
export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

/** Build a concrete path to an industry detail page */
export function industryPath(slug: string): string {
  return `/industries/${slug}`;
}
