// Central SEO defaults and metadata for routes without a dedicated page record.
import { HERO } from "./hero";
import { ABOUT } from "./about";
import { SERVICES_HUB } from "./services-hub";
import { ROUTES } from "@/lib/routes";
import type { SeoMeta } from "@/types";

export const SEO_DEFAULTS = {
  author: "S South Coorg Security Services",
themeColor: "#2A2828",
  keywords: ["security services Bengaluru", "security guards Bengaluru", "manpower services Bengaluru", "South Bengaluru security agency"],
  ogImage: "/og/sscss-default.png",
} as const;

export const HOME_SEO: SeoMeta = { title: "Security Services in Bengaluru | SSCSS", description: HERO.description, canonicalPath: ROUTES.home, schemaType: "LocalBusiness" };
export const ABOUT_SEO: SeoMeta = { title: "About SSCSS | 18+ Years in Bengaluru", description: ABOUT.heroSubtitle, canonicalPath: ROUTES.about, schemaType: "WebPage" };
export const SERVICES_SEO: SeoMeta = { title: "Security & Manpower Services | SSCSS", description: SERVICES_HUB.intro.description, canonicalPath: ROUTES.services, schemaType: "WebPage" };
