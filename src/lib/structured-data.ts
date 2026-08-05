import { CONTACT, FAQS, SITE, SOCIAL, getServiceBySlug } from "@/content";
import { absoluteUrl, buildBreadcrumbs, normalizePath, type BreadcrumbItem } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import type { Faq, Service } from "@/types";

type JsonLd = Record<string, unknown>;
const context = { "@context": "https://schema.org" };
const organizationId = `${absoluteUrl(ROUTES.home)}#organization`;

function verifiedProfileUrls(): string[] {
  return [CONTACT.googleBusinessProfile, ...Object.values(SOCIAL)].filter(
    (url): url is string => Boolean(url),
  );
}

export function organizationSchema(): JsonLd { const sameAs = verifiedProfileUrls(); return { ...context, "@type": "Organization", "@id": organizationId, name: SITE.name, alternateName: SITE.shortName, url: absoluteUrl(ROUTES.home), foundingDate: String(SITE.established), description: `${SITE.name} provides security and manpower solutions across Bengaluru.`, ...(sameAs.length ? { sameAs } : {}) }; }
export function localBusinessSchema(): JsonLd { const sameAs = verifiedProfileUrls(); return { ...context, "@type": "SecurityService", "@id": `${absoluteUrl(ROUTES.home)}#localbusiness`, name: SITE.name, url: absoluteUrl(ROUTES.home), description: `${SITE.name} provides security and manpower solutions in ${SITE.primaryServiceArea} and Bengaluru.`, foundingDate: String(SITE.established), areaServed: [SITE.primaryServiceArea, SITE.secondaryServiceArea], priceRange: "$$", parentOrganization: { "@id": organizationId }, ...(CONTACT.phone ? { telephone: CONTACT.phone } : {}), ...(CONTACT.email ? { email: CONTACT.email } : {}), ...(CONTACT.address ? { address: { "@type": "PostalAddress", streetAddress: CONTACT.address, addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" } } : {}), ...(sameAs.length ? { sameAs } : {}) }; }
export function websiteSchema(): JsonLd { return { ...context, "@type": "WebSite", name: SITE.name, alternateName: SITE.shortName, url: absoluteUrl(ROUTES.home) }; }
export function serviceSchema(service: Service): JsonLd { return { ...context, "@type": "Service", name: service.name, description: service.overview, url: absoluteUrl(service.seo.canonicalPath), image: absoluteUrl(service.heroImage.src), provider: { "@id": organizationId }, areaServed: [SITE.primaryServiceArea, SITE.secondaryServiceArea], serviceType: service.name }; }
export function faqPageSchema(faqs: Faq[] | Service["faqs"]): JsonLd { return { ...context, "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }; }
export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd | null { return items.length < 2 ? null : { ...context, "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) }; }

export function schemasForPath(pathname: string): JsonLd[] {
  const normalizedPath = normalizePath(pathname);
  if (normalizedPath === ROUTES.home) return [organizationSchema(), localBusinessSchema(), websiteSchema()];
  const serviceMatch = normalizedPath.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) { const service = getServiceBySlug(serviceMatch[1]); if (service) { const crumbs = breadcrumbSchema(buildBreadcrumbs(pathname)); return [serviceSchema(service), faqPageSchema(service.faqs), ...(crumbs ? [crumbs] : [])]; } }
  if (normalizedPath === ROUTES.contact) { const crumbs = breadcrumbSchema(buildBreadcrumbs(normalizedPath)); return [localBusinessSchema(), ...(crumbs ? [crumbs] : [])]; }
  if (normalizedPath === ROUTES.faqs) { const crumbs = breadcrumbSchema(buildBreadcrumbs(normalizedPath)); return [faqPageSchema(FAQS), ...(crumbs ? [crumbs] : [])]; }
  const crumbs = breadcrumbSchema(buildBreadcrumbs(normalizedPath));
  return crumbs ? [crumbs] : [];
}
