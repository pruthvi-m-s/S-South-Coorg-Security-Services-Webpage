// ============================================================
// SSCSS — FAQ Page Content
// Single source of truth for the FAQ page copy.
// ============================================================

import { ROUTES } from "@/lib/routes";
import type { SeoMeta } from "@/types";

// ─── Types ──────────────────────────────────────────────────

export interface FaqPageContent {
  seo: SeoMeta;
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    title: string;
    description: string;
  };
  search: {
    placeholder: string;
    emptyStateTitle: string;
    emptyStateDescription: string;
  };
  contactCta: {
    heading: string;
    supportingText: string;
    phoneLabel: string;
    emailLabel: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

// ─── Content ────────────────────────────────────────────────

export const FAQ_PAGE: FaqPageContent = {
  seo: {
    title: "FAQs | SSCSS Security Services",
    description:
      "Find answers to commonly asked questions about SSCSS security services, coverage area in Bengaluru, engagement process, pricing, and careers.",
    canonicalPath: ROUTES.faqs,
    schemaType: "FAQPage",
  },

  hero: {
    title: "Frequently Asked Questions",
    subtitle:
      "Quick answers to the most common questions about our services, coverage, process, and more.",
  },

  intro: {
    title: "Everything You Need to Know",
    description:
      "Browse through our frequently asked questions below. You can filter by category or search by keyword to find the information you need quickly.",
  },

  search: {
    placeholder: "Search questions, answers, or categories…",
    emptyStateTitle: "No results found",
    emptyStateDescription:
      "We couldn't find any FAQs matching your search. Try a different keyword or browse by category above. You can also reach out to our team directly.",
  },

  contactCta: {
    heading: "Still Have Questions?",
    supportingText:
      "We're here to help. Reach out to our team directly and we'll get back to you as soon as possible.",
    phoneLabel: "Call Us",
    emailLabel: "Email Us",
    buttonLabel: "Contact Us",
    buttonHref: ROUTES.contact,
  },
};

