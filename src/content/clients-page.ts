// ============================================================
// SSCSS — Clients Page Content
// Single source of truth for the Clients page.
// All copy comes from this file — no hardcoded text on the page.
// ============================================================

import type { WhyChooseUsItem, ProcessStep } from "../types";
import type { SeoMeta } from "../types";
import { ROUTES } from "@/lib/routes";

export interface ClientCategory {
  icon: string;       // Lucide icon name
  title: string;
  description: string;
  services: string[]; // service slugs commonly used by this category
}

export interface ClientsPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    title: string;
    description: string;
  };
  categories: ClientCategory[];
  successStories: {
    title: string;
    subtitle: string;
  };
  whyClientsStay: {
    title: string;
    subtitle: string;
    items: WhyChooseUsItem[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  seo: SeoMeta;
}

export const CLIENTS_PAGE: ClientsPageContent = {
  hero: {
    title: "Our Clients",
    subtitle:
      "Over 50 organizations across Bengaluru trust SSCSS for their security and manpower needs. From apartment associations to Fortune 500 companies — we serve them all.",
  },
  intro: {
    title: "Trusted by Leading Organizations",
    description:
      "Since 2008, SSCSS has been the preferred security and manpower partner for over 50 clients across diverse industries in Bengaluru. Our client roster includes apartment associations, corporate offices, hospitals, educational institutions, industrial facilities, hotels, and government establishments. We are proud of the long-term relationships we have built through consistent service quality, reliability, and professional integrity.",
  },
  categories: [
    {
      icon: "Building2",
      title: "Corporate",
      description:
        "IT companies, corporate offices, and business parks that require professional security, front office management, and staffing solutions.",
      services: ["corporate-security", "security-guards", "front-office-management", "corporate-staffing"],
    },
    {
      icon: "Home",
      title: "Residential",
      description:
        "Apartment associations, gated communities, and residential complexes that trust SSCSS for community safety and visitor management.",
      services: ["residential-security", "security-guards", "housekeeping", "background-verification"],
    },
    {
      icon: "GraduationCap",
      title: "Educational",
      description:
        "Schools, colleges, and educational institutions that require campus security, access control, and a safe learning environment.",
      services: ["security-guards", "housekeeping"],
    },
    {
      icon: "Hospital",
      title: "Healthcare",
      description:
        "Hospitals, clinics, and healthcare facilities that need specialized security, housekeeping, and front office management.",
      services: ["security-guards", "housekeeping", "front-office-management", "background-verification"],
    },
    {
      icon: "Landmark",
      title: "Banking & Finance",
      description:
        "Banks, ATMs, and financial institutions that require vigilant security, cash management support, and access control.",
      services: ["security-guards", "ex-army-security-guards", "corporate-security"],
    },
    {
      icon: "Hotel",
      title: "Hospitality",
      description:
        "Hotels, resorts, and hospitality establishments that rely on SSCSS for guest safety, event security, and facility management.",
      services: ["security-guards", "housekeeping", "front-office-management", "event-security"],
    },
    {
      icon: "Factory",
      title: "Industrial",
      description:
        "Factories, warehouses, logistics hubs, and manufacturing plants that need industrial security, labour, and material movement monitoring.",
      services: ["industrial-security", "security-guards", "skilled-labour", "unskilled-labour"],
    },
    {
      icon: "Shield",
      title: "Government",
      description:
        "Government institutions, public sector offices, and civic bodies that require security personnel meeting stringent government standards.",
      services: ["security-guards", "ex-army-security-guards", "corporate-security"],
    },
  ],
  successStories: {
    title: "Client Success Stories",
    subtitle:
      "Hear from the organizations that have partnered with SSCSS for their security and manpower needs.",
  },
  whyClientsStay: {
    title: "Why Clients Stay With SSCSS",
    subtitle:
      "Long-term partnerships built on trust, reliability, and consistent service excellence.",
    items: [
      {
        title: "Proven Reliability",
        description:
          "Our clients trust us because we deliver — day in and day out. With over 15 years of uninterrupted service, SSCSS has never missed a deployment commitment.",
        icon: "ShieldCheck",
      },
      {
        title: "Responsive Support",
        description:
          "When issues arise, we respond. Our 24/7 coordination team ensures that every client concern is addressed promptly, with dedicated account management for long-term partners.",
        icon: "Phone",
      },
      {
        title: "Consistent Quality",
        description:
          "We maintain uniform service quality across all deployments through regular supervisory visits, performance reviews, and structured training programs.",
        icon: "Award",
      },
      {
        title: "Full Compliance",
        description:
          "All SSCSS personnel are fully verified, insured, and compliant with statutory requirements. Our clients never have to worry about regulatory gaps.",
        icon: "FileCheck",
      },
      {
        title: "True Partnership",
        description:
          "We treat every client as a partner, not a contract. Regular review meetings, open communication channels, and a genuine commitment to your success define our approach.",
        icon: "HeartHandshake",
      },
      {
        title: "Scalable & Flexible",
        description:
          "As your needs grow, we grow with you. Our flexible engagement models and scalable workforce ensure we can adapt to changing requirements without disruption.",
        icon: "Layers",
      },
    ],
  },
  process: {
    title: "How We Engage With Clients",
    subtitle:
      "From first conversation to ongoing partnership — a transparent, structured engagement process.",
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We begin with a no-obligation conversation to understand your security or manpower requirements, facility type, and operational challenges.",
      },
      {
        step: 2,
        title: "Custom Proposal",
        description:
          "Based on our consultation, we prepare a tailored proposal with detailed service scope, personnel profiles, pricing, and SLA commitments.",
      },
      {
        step: 3,
        title: "Agreement & Onboarding",
        description:
          "Once the proposal is approved, we formalize the agreement and begin onboarding — background verification, training, and deployment planning.",
      },
      {
        step: 4,
        title: "Deployment & Setup",
        description:
          "Trained personnel are deployed to your site with proper uniforms, equipment, post orders, and integration with your existing systems.",
      },
      {
        step: 5,
        title: "Performance Monitoring",
        description:
          "We actively monitor service quality through supervisory visits, incident reporting, client feedback, and regular performance reviews.",
      },
      {
        step: 6,
        title: "Ongoing Partnership",
        description:
          "Long-term clients benefit from dedicated account management, periodic business reviews, and priority support for evolving needs.",
      },
    ],
  },
  seo: {
    title: "Our Clients | SSCSS Security Services",
    description:
      "Over 50 organizations across Bengaluru trust SSCSS for security and manpower services. See the clients we serve across corporate, residential, healthcare, and industrial sectors.",
    canonicalPath: ROUTES.clients,
    ogImage: undefined,
    schemaType: "WebPage",
  },
};

