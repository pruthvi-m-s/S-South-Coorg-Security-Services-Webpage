// ============================================================
// SSCSS — Not Found Page Content
// Single source of truth for the production 404 experience.
// ============================================================

import { FINAL_CTA, type CtaContent } from "@/content/cta";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";
import { ROUTES, servicePath } from "@/lib/routes";
import type { SeoMeta } from "@/types";

export interface NotFoundPageContent {
  seo: SeoMeta & { robots: string };
  openGraph: { type: "website" };
  hero: { errorCode: string; title: string; description: string; primaryCta: { label: string; href: string }; secondaryCta: { label: string; href: string } };
  helpfulNavigation: { title: string; subtitle: string; items: Array<{ title: string; description: string; href: string; icon: string }> };
  popularDestinations: { title: string; subtitle: string; items: Array<{ title: string; description: string; href: string; icon: string }> };
  contactAssistance: { title: string; subtitle: string; phoneLabel: string; emailLabel: string; businessHoursLabel: string; phoneIcon: string; emailIcon: string; businessHoursIcon: string };
  finalCta: CtaContent;
}

const popularServices = ["security-guards", "corporate-security", "industrial-security"]
  .map((slug) => SERVICES.find((service) => service.slug === slug))
  .filter((service): service is (typeof SERVICES)[number] => Boolean(service))
  .map((service) => ({ title: service.name, description: service.shortTagline, href: servicePath(service.slug), icon: service.icon ?? "Shield" }));

export const NOT_FOUND: NotFoundPageContent = {
  seo: { title: `Page Not Found | ${SITE.shortName}`, description: `The page you requested could not be found. Return to ${SITE.name} to explore security and manpower services in Bengaluru.`, canonicalPath: ROUTES.home, schemaType: "WebPage", robots: "noindex, nofollow" },
  openGraph: { type: "website" },
  hero: {
    errorCode: "404",
    title: "We Could Not Find That Page",
    description: "The link may be outdated, or the page may have moved. Use the options below to continue exploring SSCSS.",
    primaryCta: { label: "Go to Home", href: ROUTES.home },
    secondaryCta: { label: "Contact Us", href: ROUTES.contact },
  },
  helpfulNavigation: {
    title: "Helpful Navigation",
    subtitle: "Find the information you need using these key areas of our website.",
    items: [
      { title: "Home", description: "Start from the SSCSS homepage and explore our core service offering.", href: ROUTES.home, icon: "Home" },
      { title: "About", description: "Learn about our company, experience, approach, and values.", href: ROUTES.about, icon: "Building2" },
      { title: "Services", description: "Explore security and manpower solutions tailored to your requirements.", href: ROUTES.services, icon: "Shield" },
      { title: "Industries", description: "See the industries and operating environments we support.", href: ROUTES.industries, icon: "Factory" },
      { title: "Frequently Asked Questions", description: "Find answers to common questions about our services and process.", href: ROUTES.faqs, icon: "HelpCircle" },
      { title: "Contact", description: "Reach out to our team to discuss your requirements directly.", href: ROUTES.contact, icon: "MessageCircle" },
    ],
  },
  popularDestinations: {
    title: "Popular Destinations",
    subtitle: "Explore commonly requested services and learn more about SSCSS.",
    items: [...popularServices, { title: "Clients", description: "See the types of organizations that trust SSCSS for dependable support.", href: ROUTES.clients, icon: "Users" }, { title: "Gallery", description: "View a selection of SSCSS service environments and team activity.", href: ROUTES.gallery, icon: "Image" }],
  },
  contactAssistance: { title: "Need Assistance?", subtitle: "Our team is available during business hours to help you find the right information or discuss your requirements.", phoneLabel: "Phone", emailLabel: "Email", businessHoursLabel: "Business Hours", phoneIcon: "Phone", emailIcon: "Mail", businessHoursIcon: "Clock" },
  finalCta: FINAL_CTA,
};
