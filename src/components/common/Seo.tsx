import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO_DEFAULTS } from "@/content/seo";
import { absoluteUrl, resolveSeoMeta } from "@/lib/seo";
import { schemasForPath } from "@/lib/structured-data";

function upsertMeta(attribute: "name" | "property", key: string, content?: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const current = document.head.querySelector<HTMLMetaElement>(selector);
  if (!content) { current?.remove(); return; }
  const element = current ?? document.createElement("meta");
  element.setAttribute(attribute, key); element.content = content;
  if (!current) document.head.appendChild(element);
}

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = resolveSeoMeta(pathname);
    const canonicalUrl = absoluteUrl(meta.canonicalPath);
    const imageUrl = absoluteUrl(meta.ogImage?.src ?? SEO_DEFAULTS.ogImage);
    document.title = meta.title;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = canonicalUrl;
    upsertMeta("name", "description", meta.description); upsertMeta("name", "robots", meta.robots ?? "index, follow"); upsertMeta("name", "author", SEO_DEFAULTS.author); upsertMeta("name", "keywords", SEO_DEFAULTS.keywords.join(", ")); upsertMeta("name", "theme-color", SEO_DEFAULTS.themeColor);
    upsertMeta("property", "og:title", meta.title); upsertMeta("property", "og:description", meta.description); upsertMeta("property", "og:url", canonicalUrl); upsertMeta("property", "og:type", "website"); upsertMeta("property", "og:site_name", "S South Coorg Security Services"); upsertMeta("property", "og:image", imageUrl); upsertMeta("property", "og:image:alt", meta.ogImage?.alt ?? "S South Coorg Security Services");
    upsertMeta("name", "twitter:card", "summary_large_image"); upsertMeta("name", "twitter:title", meta.title); upsertMeta("name", "twitter:description", meta.description); upsertMeta("name", "twitter:image", imageUrl);
    document.head.querySelectorAll('script[data-sscss-schema="true"]').forEach((element) => element.remove());
    schemasForPath(pathname).forEach((schema, index) => { const script = document.createElement("script"); script.type = "application/ld+json"; script.dataset.sscssSchema = "true"; script.id = `sscss-schema-${index}`; script.text = JSON.stringify(schema); document.head.appendChild(script); });
  }, [pathname]);
  return null;
}
