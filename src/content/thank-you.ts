// ============================================================
// SSCSS — Thank You Page Content
// Single source of truth for post-enquiry confirmation content.
// ============================================================

import { FINAL_CTA, type CtaContent } from "@/content/cta";
import { SERVICES } from "@/content/services";
import { ROUTES } from "@/lib/routes";
import type { ProcessStep, SeoMeta } from "@/types";

export interface ThankYouPageContent {
  seo: SeoMeta;
  openGraph: { type: "website" };
  hero: {
    icon: string;
    title: string;
    description: string;
    /**
     * Response-time expectation sentence.
     * Rendered only when non-empty — never fabricate expectations.
     */
    responseTimeNote: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  nextSteps: { title: string; subtitle: string; steps: ProcessStep[] };
  quickLinks: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string; href: string; icon: string }>;
  };
  contactReminder: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    businessHoursLabel: string;
    phoneIcon: string;
    emailIcon: string;
    businessHoursIcon: string;
  };
  finalCta: CtaContent;
}

export const THANK_YOU: ThankYouPageContent = {
  seo: {
    title: "Thank You | SSCSS — S South Coorg Security Services",
    description: "Thank you for contacting S South Coorg Security Services. Our team will review your enquiry and get in touch to discuss your security or manpower requirements.",
    canonicalPath: ROUTES.thankYou,
    schemaType: "WebPage",
  },
  openGraph: { type: "website" },
  hero: {
    icon: "ShieldCheck",
    title: "Thank You for Your Enquiry",
    description: "Your request has been received. Our team will review your requirements and reach out to discuss the right security or manpower solution for your organization.",
    responseTimeNote: "Our team typically responds within one business day.",
    primaryCta: { label: "Explore Our Services", href: ROUTES.services },
    secondaryCta: { label: "Return to Home", href: ROUTES.home },
  },
  nextSteps: {
    title: "What Happens Next",
    subtitle: "Here is how we move your enquiry forward, from initial review to a planned deployment.",
    steps: [
      { step: 1, title: "We Review Your Enquiry", description: "Our team reviews the details you shared and identifies the information needed to guide the next conversation." },
      { step: 2, title: "Our Team Contacts You", description: "A member of our team will get in touch using the contact details in your enquiry." },
      { step: 3, title: "We Discuss Your Requirements", description: "Together, we discuss your premises, staffing needs, operating priorities, and preferred service approach." },
      { step: 4, title: "We Plan the Deployment", description: "Once the requirements are clear, we outline a practical plan for the appropriate security or manpower deployment." },
    ],
  },
  quickLinks: {
    title: "Continue Exploring",
    subtitle: "While our team prepares to connect with you, explore the information that can help you plan with confidence.",
    items: [
      { title: "Services", description: `Review our complete range of ${SERVICES.length} security and manpower services.`, href: ROUTES.services, icon: "Shield" },
      { title: "Industries", description: "See how our approach supports different premises, teams, and operating environments.", href: ROUTES.industries, icon: "Building2" },
      { title: "Frequently Asked Questions", description: "Find clear answers to common questions about our services and engagement process.", href: ROUTES.faqs, icon: "HelpCircle" },
      { title: "Contact", description: "View our contact options if you would like to share anything further with our team.", href: ROUTES.contact, icon: "MessageCircle" },
    ],
  },
  contactReminder: {
    title: "Need to Reach Us Sooner?",
    subtitle: "You can also contact our team directly during business hours using the details below.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    businessHoursLabel: "Business Hours",
    phoneIcon: "Phone",
    emailIcon: "Mail",
    businessHoursIcon: "Clock",
  },
  finalCta: FINAL_CTA,
};
