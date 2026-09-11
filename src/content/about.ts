// ============================================================
// SSCSS — About Page Content
// Company History, Why Choose Us, Process
// ============================================================

import type {
  CompanyHistoryEntry,
  WhyChooseUsItem,
  ProcessStep,
} from "../types";
import { ROUTES } from "@/lib/routes";
import { entranceOfficeGuards } from "@/lib/site-images";

export const ABOUT = {
  heroTitle: "About S South Coorg Security Services",
heroSubtitle:
    "Over 18 years of trusted security and manpower solutions in Bengaluru.",
  heroImage: {
    src: entranceOfficeGuards,
    alt: "SSCSS security personnel at a modern corporate entrance",
    isPlaceholder: false,
  },

  story: {
    title: "Our Story",
    videoSrc: undefined,
    paragraphs: [
      "S South Coorg Security Services (SSCSS) was founded in 2008 with a clear mission: to provide reliable, professional security and manpower solutions to Bengaluru's growing residential and commercial sectors. What started as a small team of dedicated professionals has grown into a trusted partner for over 50 clients across multiple industries.",
      "Our journey has been built on a foundation of discipline, integrity, and an unwavering commitment to service quality. Every guard we deploy, every facility we manage, and every client we serve reflects the values that have guided us for over 18 years.",
      "Today, SSCSS employs over 100 trained personnel serving apartment associations, corporate offices, industrial facilities, hospitals, schools, and institutions across South Bengaluru. We continue to grow — but our focus remains the same: delivering enterprise-grade security and manpower solutions with a personal touch.",
    ],
  },

  certificationsSection: {
    title: "Registrations & Compliance",
    subtitle:
      "Review the compliance documentation information relevant to your procurement process.",
    complianceCta: {
      label: "View compliance details",
      href: ROUTES.compliance,
    },
  },

  history: {
    title: "Our Journey",
    entries: [
      {
        year: "2008",
        title: "Founded in Bengaluru",
        description:
          "S South Coorg Security Services was established with a vision to provide reliable, professional security services to Bengaluru's growing residential and commercial sectors.",
      },
      {
        year: "2012",
        title: "Expansion into Corporate Security",
        description:
          "We expanded our services to include corporate security, serving IT companies and corporate offices across South Bengaluru.",
      },
      {
        year: "2015",
        title: "Manpower Services Launch",
        description:
          "Recognizing the need for integrated facility management, we launched housekeeping, front office management, and labour supply services.",
      },
      {
        year: "2018",
        title: "10 Years of Trust",
        description:
          "Marked a decade of service with over 100 guards deployed and 50+ satisfied clients across multiple sectors.",
      },
      {
        year: "2023",
        title: "Continued Growth",
        description:
          "Today, SSCSS continues to grow, serving apartments, corporates, industries, and institutions across Bengaluru with a team of dedicated professionals.",
      },
    ] satisfies CompanyHistoryEntry[],
  },

  whyChooseUs: {
    title: "Why Choose SSCSS",
    subtitle:
      "What sets us apart from other security and manpower providers.",
    items: [
      {
        title: "18+ Years of Company Operations",
        description:
          "We've been protecting Bengaluru properties since 2008 — we understand the local security landscape and challenges.",
        icon: "Calendar",
      },
      {
        title: "Enterprise-Grade Processes",
        description:
          "Structured reporting, supervisory checks, incident management, and responsive 24/7 coordination.",
        icon: "ClipboardCheck",
      },
      {
        title: "Verified Personnel",
        description:
          "All our guards and staff undergo rigorous background verification, physical fitness tests, and ongoing training.",
        icon: "UserCheck",
      },
      {
        title: "Flexible & Scalable",
        description:
          "From a single guard to a full security team — we scale to your requirements with flexible engagement terms.",
        icon: "Layers",
      },
      {
        title: "Client-Centric Approach",
        description:
          "We treat every client as a partner, with dedicated account management and regular performance reviews.",
        icon: "HeartHandshake",
      },
      {
        title: "Integrated Services",
        description:
          "Security, housekeeping, staffing — get all your facility management needs from a single trusted provider.",
        icon: "Briefcase",
      },
    ] satisfies WhyChooseUsItem[],
  },

  process: {
    title: "Our Engagement Process",
    subtitle:
      "A proven six-step process that ensures smooth deployment and ongoing service excellence.",
    steps: [
      {
        step: 1,
        title: "Requirement Discussion",
        description:
          "We discuss your needs, property type, headcount, shifts, and any special requirements.",
      },
      {
        step: 2,
        title: "Site Assessment",
        description:
          "Our team visits your premises to assess access points, vulnerable areas, and security infrastructure.",
      },
      {
        step: 3,
        title: "Proposal Submission",
        description:
          "We provide a detailed proposal including personnel profiles, deployment plan, pricing, and reporting structure.",
      },
      {
        step: 4,
        title: "Client Approval",
        description:
          "You review and approve the proposal. We finalize deployment schedules and protocols.",
      },
      {
        step: 5,
        title: "Deployment",
        description:
          "Trained personnel are deployed with proper uniforms, equipment, and site-specific post orders.",
      },
      {
        step: 6,
        title: "Ongoing Support",
        description:
          "Regular supervisory visits, incident reports, performance reviews, and 24/7 coordination ensure consistent quality.",
      },
    ] satisfies ProcessStep[],
  },
};

