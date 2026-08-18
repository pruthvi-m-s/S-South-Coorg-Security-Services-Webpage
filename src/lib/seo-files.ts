import {
  DEFAULT_SEO_SITE,
  SEO_INDUSTRIES,
  SEO_SERVICES,
  STATIC_INDEXABLE_ROUTES,
  type SeoSiteMetadata,
} from "./seo-static.js";

const normalizedSiteUrl = (siteUrl: string) => siteUrl.replace(/\/$/, "");

export function getIndexableRoutes(): string[] {
  return [...STATIC_INDEXABLE_ROUTES, ...SEO_SERVICES.map(([, path]) => path)];
}

export function generateSitemapXml(siteUrl: string): string {
  const baseUrl = normalizedSiteUrl(siteUrl);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${getIndexableRoutes().map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`).join("\n")}\n</urlset>\n`;
}

export function generateRobotsTxt(siteUrl: string): string {
  return `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${normalizedSiteUrl(siteUrl)}/sitemap.xml\n`;
}

export function generateLlmsTxt(siteOverrides: Partial<SeoSiteMetadata> = {}): string {
  // Optional environment values must not replace a valid default with undefined.
  const definedOverrides = Object.fromEntries(
    Object.entries(siteOverrides).filter(([, value]) => value !== undefined),
  ) as Partial<SeoSiteMetadata>;
  const site = { ...DEFAULT_SEO_SITE, ...definedOverrides };
  const services = SEO_SERVICES.map(
    ([name, path, tagline]) => `- [${name}](${path}): ${tagline}`,
  ).join("\n");
  const industries = SEO_INDUSTRIES.join(", ");

  return `# ${site.shortName} — ${site.name}\n\n> Private security and manpower services company based in Bengaluru, India. Established ${site.established}. ${site.yearsInBusiness}+ years, ${site.guardsCount}+ guards, ${site.clientsCount}+ clients. Serves ${site.primaryServiceArea} primarily and ${site.secondaryServiceArea.toLowerCase()}.\n\n## Services\n${services}\n\n## Company\n- [About](/about): company history, service approach, and company information.\n- [Contact](/contact): enquiry form and available contact details.\n\n## Industries served\n- [Industries](/industries): ${industries}.\n`;
}
