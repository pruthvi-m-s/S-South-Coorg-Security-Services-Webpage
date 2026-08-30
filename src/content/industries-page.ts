// ============================================================
// SSCSS — Industries Page Content
// Single source of truth for the Industries page.
// All copy comes from this file — no hardcoded text on the page.
// ============================================================
import type { WhyChooseUsItem, SeoMeta } from "../types";
import { ROUTES } from "@/lib/routes";

export interface IndustriesPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    title: string;
    description: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: WhyChooseUsItem[];
  };
  coverage: {
    title: string;
    subtitle: string;
    regions: {
      icon: string;
      label: string;
      description: string;
    }[];
    capabilities: {
      icon: string;
      label: string;
      description: string;
    }[];
  };
  faqPreview: {
    title: string;
    subtitle: string;
  };
  seo: SeoMeta;
}

export const INDUSTRIES_PAGE: IndustriesPageContent = {
  hero: {
    title: "Industries We Serve",
    subtitle:
      "From apartment associations to government institutions — SSCSS provides tailored security and manpower solutions across diverse sectors in Bengaluru.",
  },
  intro: {
    title: "Tailored Solutions for Every Sector",
    description:
      "Every industry has unique security and manpower needs. At SSCSS, we understand the specific challenges of each sector we serve. Our 18+ years of company operations across Bengaluru's diverse industries means we bring proven expertise and industry-specific best practices to every engagement.",
  },
  whyChooseUs: {
    title: "Why Industries Choose SSCSS",
    subtitle:
      "What makes SSCSS the preferred partner for security and manpower across diverse industries.",
    items: [
      {
        title: "Industry-Specific Expertise",
        description:
          "We understand the unique security, compliance, and operational requirements of each industry we serve — from apartment associations to government institutions.",
        icon: "Briefcase",
      },
      {
        title: "Proven Cross-Sector Track Record",
        description:
          "With 50+ clients across residential, corporate, industrial, healthcare, education, hospitality, and government sectors, we bring broad experience to every engagement.",
        icon: "Award",
      },
      {
        title: "Scalable Solutions",
        description:
          "Whether you need a single guard for a small office or a multi-team deployment for a large facility, we scale to match your requirements.",
        icon: "Layers",
      },
      {
        title: "Local Knowledge",
        description:
          "Based in South Bengaluru with 18+ years of local operations, we understand the security landscape, regulations, and challenges specific to the region.",
        icon: "MapPin",
      },
      {
        title: "Integrated Service Model",
        description:
          "Security, housekeeping, staffing, and facility management — get all your manpower needs from a single trusted provider with streamlined coordination.",
        icon: "Shield",
      },
      {
        title: "Responsive Support",
        description:
          "24/7 coordination, dedicated account management, and rapid response to any operational requirement or concern.",
        icon: "Phone",
      },
    ],
  },
  coverage: {
    title: "Coverage & Deployment",
    subtitle:
      "We deliver reliable security and manpower services across Bengaluru with proven deployment capabilities.",
    regions: [
      {
        icon: "MapPin",
        label: "Primary Service Area",
        description:
          "South Bengaluru — including Electronic City, JP Nagar, Banashankari, Jayanagar, BTM Layout, Koramangala, HSR Layout, and surrounding areas.",
      },
      {
        icon: "Globe",
        label: "Secondary Coverage",
        description:
          "All of Bengaluru (on request). We can extend services to other parts of the city based on client requirements and feasibility.",
      },
    ],
    capabilities: [
      {
        icon: "Clock",
        label: "Rapid Deployment",
        description:
          "Standard deployments within 3–7 days. Urgent requirements fulfilled within 24–48 hours subject to personnel availability.",
      },
      {
        icon: "Users",
        label: "Scalable Workforce",
        description:
          "From 1 to 100+ personnel deployed across single or multiple shifts. We maintain a standby pool for quick scaling.",
      },
      {
        icon: "Zap",
        label: "24/7 Coordination",
        description:
          "Round-the-clock supervisory support, incident reporting, and management coordination for all deployed personnel.",
      },
      {
        icon: "Award",
        label: "Quality Assurance",
        description:
          "Regular supervisory visits, performance reviews, and client feedback loops ensure consistent service quality across all deployments.",
      },
    ],
  },
  faqPreview: {
    title: "Frequently Asked Questions",
    subtitle:
      "Common questions about our industry coverage, deployment process, and service capabilities.",
  },
  seo: {
    title: "Industries We Serve | SSCSS",
    description:
      "Security guards, housekeeping, facility management and manpower solutions for apartments, industries, hospitals, offices and commercial establishments across Bengaluru.",
    canonicalPath: ROUTES.industries,
    schemaType: "WebPage",
  },
};

