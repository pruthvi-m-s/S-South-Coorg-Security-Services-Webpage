import { ABOUT_SEO, CLIENTS_PAGE, COMPLIANCE_PAGE, CONTACT_PAGE, FAQ_PAGE, GALLERY, HOME_SEO, INDUSTRIES_PAGE, NOT_FOUND, SERVICES_SEO, THANK_YOU, getServiceBySlug } from "@/content";
import { ROUTES } from "@/lib/routes";
import type { SeoMeta } from "@/types";

export interface ResolvedSeoMeta extends SeoMeta { robots?: string }

const staticPages: Record<string, SeoMeta> = {
  [ROUTES.home]: HOME_SEO, [ROUTES.about]: ABOUT_SEO, [ROUTES.services]: SERVICES_SEO,
  [ROUTES.industries]: INDUSTRIES_PAGE.seo, [ROUTES.clients]: CLIENTS_PAGE.seo,
  [ROUTES.gallery]: GALLERY.seo, [ROUTES.faqs]: FAQ_PAGE.seo, [ROUTES.contact]: CONTACT_PAGE.seo,
  [ROUTES.thankYou]: THANK_YOU.seo, [ROUTES.compliance]: COMPLIANCE_PAGE.seo,
};

export function getSiteUrl(): string {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();
  const origin = configuredUrl || (typeof window !== "undefined" ? window.location.origin : "");
  return origin.replace(/\/$/, "");
}

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === ROUTES.home) return ROUTES.home;
  return pathname.replace(/\/+$/, "");
}

export function absoluteUrl(path: string): string {
  return new URL(normalizePath(path), `${getSiteUrl()}/`).href;
}

export function resolveSeoMeta(pathname: string): ResolvedSeoMeta {
  const normalizedPath = normalizePath(pathname);
  const serviceMatch = normalizedPath.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = getServiceBySlug(serviceMatch[1]);
    if (service) return service.seo;
  }
  if (staticPages[normalizedPath]) return normalizedPath === ROUTES.thankYou ? { ...staticPages[normalizedPath], robots: "noindex, nofollow" } : staticPages[normalizedPath];
  return { ...NOT_FOUND.seo, canonicalPath: normalizedPath, robots: "noindex, nofollow" };
}

export interface BreadcrumbItem { name: string; path: string }
const pageLabels: Record<string, string> = { [ROUTES.about]: "About", [ROUTES.compliance]: "Compliance", [ROUTES.services]: "Services", [ROUTES.industries]: "Industries", [ROUTES.clients]: "Clients", [ROUTES.gallery]: "Gallery", [ROUTES.faqs]: "FAQ", [ROUTES.contact]: "Contact" };

export function buildBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const normalizedPath = normalizePath(pathname);
  const serviceMatch = normalizedPath.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = getServiceBySlug(serviceMatch[1]);
    if (service) return [{ name: "Home", path: ROUTES.home }, { name: "Services", path: ROUTES.services }, { name: service.name, path: service.seo.canonicalPath }];
  }
  const label = pageLabels[normalizedPath];
  return label ? [{ name: "Home", path: ROUTES.home }, { name: label, path: normalizedPath }] : [];
}
