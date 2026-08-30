import {
  DEFAULT_SEO_SITE,
  SEO_INDUSTRIES,
  SEO_SERVICES,
  STATIC_INDEXABLE_ROUTES,
  type SeoSiteMetadata,
} from "./seo-static.js";

const normalizedSiteUrl = (
  siteUrl: string,
) => siteUrl.replace(/\/+$/, "");

export function getIndexableRoutes(): string[] {
  return [
    ...STATIC_INDEXABLE_ROUTES,
    ...SEO_SERVICES.map(
      ([, path]) => path,
    ),
  ];
}

export function generateSitemapXml(
  siteUrl: string,
): string {
  const baseUrl =
    normalizedSiteUrl(siteUrl);

  const urls = getIndexableRoutes()
    .map(
      (route) =>
        `  <url><loc>${baseUrl}${route}</loc></url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function generateRobotsTxt(
  siteUrl: string,
): string {
  const baseUrl =
    normalizedSiteUrl(siteUrl);

  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
}

export function generateLlmsTxt(
  siteOverrides: Partial<SeoSiteMetadata> = {},
): string {
  const definedOverrides =
    Object.fromEntries(
      Object.entries(
        siteOverrides,
      ).filter(
        ([, value]) =>
          value !== undefined,
      ),
    ) as Partial<SeoSiteMetadata>;

  const site = {
    ...DEFAULT_SEO_SITE,
    ...definedOverrides,
  };

  const services =
    SEO_SERVICES.map(
      ([name, path, tagline]) =>
        `- [${name}](${path}): ${tagline}`,
    ).join("\n");

  const industries =
    SEO_INDUSTRIES.join(", ");

  return `# ${site.shortName} — ${site.name}

> Private security and manpower services company based in Bengaluru, India. Established ${site.established}. ${site.yearsInBusiness}+ years, ${site.guardsCount}+ guards, ${site.clientsCount}+ clients. Serves ${site.primaryServiceArea} primarily and ${site.secondaryServiceArea.toLowerCase()}.

## Services
${services}

## Company
- [About](/about): company history, service approach, and company information.
- [Contact](/contact): enquiry form and available contact details.

## Industries served
- [Industries](/industries): ${industries}.
`;
}