// ============================================================
// SSCSS — Gallery Page Content
// Single source of truth for the Gallery page.
// All copy comes from this file — no hardcoded text on the page.
// Types are co-located since they are domain-specific to Gallery.
// ============================================================

import { ROUTES } from "@/lib/routes";
import type { SeoMeta, WhyChooseUsItem } from "../types";

// ─── Gallery-specific Types (co-located) ─────────────────────

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category: string;          // matches a GalleryCategory.slug
  isPlaceholder: boolean;    // true until real photos supplied
  width?: number;
  height?: number;
}

export interface GalleryVideo {
  id: string;
  src: string;
  poster?: string;
  title?: string;
  description?: string;
  category: string;
  isPlaceholder: boolean;
  duration?: string;         // e.g. "2:30"
}

export interface GalleryCategory {
  slug: string;
  label: string;
  description?: string;
}

export interface GalleryContent {
  seo: SeoMeta;
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    title: string;
    subtitle: string;
  };
  categories: GalleryCategory[];
  images: GalleryImage[];
  videos: GalleryVideo[];
  trustHighlights: {
    title: string;
    subtitle: string;
    items: WhyChooseUsItem[];
  };
}

// ─── Gallery Categories ──────────────────────────────────────

// ─── Gallery Images (Placeholder) ────────────────────────────
// When real photos are supplied, update images array with
// real paths under /images/gallery/ and set isPlaceholder: false.
//
// For now, we use a few placeholder images from public/images/gallery/.
// The folder exists at public/images/gallery/ ready for real assets.
//
// We generate diverse placeholder images using placeholder divs
// with descriptive backgrounds and overlay text.

const PLACEHOLDER_BASE = "/images/gallery";

// ─── Gallery Content ─────────────────────────────────────────

export const GALLERY: GalleryContent = {
  seo: {
    title: "Gallery | SSCSS Security Services",
    description:
      "Browse through our visual portfolio showcasing our security personnel, deployments, equipment, training sessions, and company events across Bengaluru.",
    canonicalPath: ROUTES.gallery,
    schemaType: "WebPage",
  },

  hero: {
    title: "Our Gallery",
    subtitle:
      "A visual portfolio of our operations, team, equipment, and deployments. See the professionalism and reach of SSCSS across Bengaluru.",
  },

  intro: {
    title: "A Glimpse Into SSCSS",
    subtitle:
      "From guard deployment and training sessions to client sites and company events — explore the people, places, and operations that define S South Coorg Security Services.",
  },

  categories: [
    { slug: "all", label: "All Photos" },
    { slug: "team", label: "Our Team", description: "Our trained security personnel and management team" },
    { slug: "deployments", label: "Deployments", description: "Guard deployments across client sites" },
    { slug: "training", label: "Training", description: "Regular training and skill development sessions" },
    { slug: "equipment", label: "Equipment", description: "Security equipment and infrastructure" },
    { slug: "events", label: "Events", description: "Company events and team activities" },
  ],

  images: [
    // ─── Team ──────────────────────────────────────────────
    {
      id: "team-01",
      src: `${PLACEHOLDER_BASE}/team-01.svg`,
      alt: "SSCSS security guard in uniform standing at attention",
      title: "Professional Security Guard",
      description: "A professionally trained SSCSS guard in full uniform, demonstrating discipline and readiness.",
      category: "team",
      isPlaceholder: true,
    },
    {
      id: "team-02",
      src: `${PLACEHOLDER_BASE}/team-02.svg`,
      alt: "SSCSS management team in a meeting",
      title: "Management Team",
      description: "Our leadership team during a strategic planning session to ensure service excellence.",
      category: "team",
      isPlaceholder: true,
    },
    {
      id: "team-03",
      src: `${PLACEHOLDER_BASE}/team-03.svg`,
      alt: "SSCSS female security guard at a corporate facility",
      title: "Female Security Personnel",
      description: "SSCSS promotes inclusive security with professionally trained female guards for diverse client needs.",
      category: "team",
      isPlaceholder: true,
    },
    {
      id: "team-04",
      src: `${PLACEHOLDER_BASE}/team-04.svg`,
      alt: "SSCSS guard patrol duty at a residential complex",
      title: "Patrol Duty",
      description: "A guard performing regular patrol rounds at a residential complex to ensure round-the-clock safety.",
      category: "team",
      isPlaceholder: true,
    },

    // ─── Deployments ────────────────────────────────────────
    {
      id: "deploy-01",
      src: `${PLACEHOLDER_BASE}/deploy-01.svg`,
      alt: "Security guard at the entrance of a corporate office",
      title: "Corporate Security Deployment",
      description: "A guard stationed at a corporate office entrance, managing access control and visitor verification.",
      category: "deployments",
      isPlaceholder: true,
    },
    {
      id: "deploy-02",
      src: `${PLACEHOLDER_BASE}/deploy-02.svg`,
      alt: "Industrial security guards at a factory gate",
      title: "Industrial Security Deployment",
      description: "Security personnel managing entry and exit at an industrial facility with strict access protocols.",
      category: "deployments",
      isPlaceholder: true,
    },
    {
      id: "deploy-03",
      src: `${PLACEHOLDER_BASE}/deploy-03.svg`,
      alt: "Residential security guard at an apartment gate",
      title: "Residential Deployment",
      description: "A trusted guard providing security services at a gated community apartment complex.",
      category: "deployments",
      isPlaceholder: true,
    },
    {
      id: "deploy-04",
      src: `${PLACEHOLDER_BASE}/deploy-04.svg`,
      alt: "School security deployment with guard at entrance",
      title: "Educational Institution Deployment",
      description: "SSCSS guards ensure the safety of students and staff at educational institutions across Bengaluru.",
      category: "deployments",
      isPlaceholder: true,
    },
    {
      id: "deploy-05",
      src: `${PLACEHOLDER_BASE}/deploy-05.svg`,
      alt: "Hospital security guards at a medical facility",
      title: "Healthcare Security Deployment",
      description: "Security personnel maintaining order and safety at a busy healthcare facility.",
      category: "deployments",
      isPlaceholder: true,
    },
    {
      id: "deploy-06",
      src: `${PLACEHOLDER_BASE}/deploy-06.svg`,
      alt: "Hotel security guarding the main entrance",
      title: "Hospitality Security",
      description: "A professional guard ensuring guest safety and access control at a premium hotel.",
      category: "deployments",
      isPlaceholder: true,
    },

    // ─── Training ───────────────────────────────────────────
    {
      id: "train-01",
      src: `${PLACEHOLDER_BASE}/train-01.svg`,
      alt: "SSCSS guards undergoing training session",
      title: "Guard Training Session",
      description: "Regular training sessions ensure our guards stay updated on the latest security protocols and customer service standards.",
      category: "training",
      isPlaceholder: true,
    },
    {
      id: "train-02",
      src: `${PLACEHOLDER_BASE}/train-02.svg`,
      alt: "Training on security equipment usage",
      title: "Equipment Training",
      description: "Guards being trained on the proper use of security equipment including metal detectors and communication devices.",
      category: "training",
      isPlaceholder: true,
    },
    {
      id: "train-03",
      src: `${PLACEHOLDER_BASE}/train-03.svg`,
      alt: "Fire safety training for SSCSS personnel",
      title: "Fire Safety Training",
      description: "Hands-on fire safety and emergency response training to ensure guards can handle critical situations.",
      category: "training",
      isPlaceholder: true,
    },
    {
      id: "train-04",
      src: `${PLACEHOLDER_BASE}/train-04.svg`,
      alt: "Physical fitness training for security guards",
      title: "Physical Fitness Session",
      description: "Regular fitness and drill sessions to maintain the physical readiness of our security personnel.",
      category: "training",
      isPlaceholder: true,
    },

    // ─── Equipment ──────────────────────────────────────────
    {
      id: "equip-01",
      src: `${PLACEHOLDER_BASE}/equip-01.svg`,
      alt: "Security equipment including walkie-talkies and flashlights",
      title: "Security Equipment",
      description: "Standard-issue equipment carried by SSCSS guards including communication devices and safety gear.",
      category: "equipment",
      isPlaceholder: true,
    },
    {
      id: "equip-02",
      src: `${PLACEHOLDER_BASE}/equip-02.svg`,
      alt: "Metal detectors and security scanners",
      title: "Surveillance Equipment",
      description: "Advanced surveillance and scanning equipment used at high-security client sites.",
      category: "equipment",
      isPlaceholder: true,
    },
    {
      id: "equip-03",
      src: `${PLACEHOLDER_BASE}/equip-03.svg`,
      alt: "SSCSS patrol vehicle",
      title: "Patrol Vehicle",
      description: "Our mobile patrol unit providing enhanced security coverage for large campuses and industrial facilities.",
      category: "equipment",
      isPlaceholder: true,
    },

    // ─── Events ─────────────────────────────────────────────
    {
      id: "event-01",
      src: `${PLACEHOLDER_BASE}/event-01.svg`,
      alt: "SSCSS team at a company event",
      title: "Company Celebration",
      description: "Our team celebrating milestones and achievements, fostering a strong team culture.",
      category: "events",
      isPlaceholder: true,
    },
    {
      id: "event-02",
      src: `${PLACEHOLDER_BASE}/event-02.svg`,
      alt: "SSCSS appreciation ceremony for staff",
      title: "Staff Appreciation Event",
      description: "Recognizing outstanding performance and dedication of our security personnel during our annual appreciation ceremony.",
      category: "events",
      isPlaceholder: true,
    },
    {
      id: "event-03",
      src: `${PLACEHOLDER_BASE}/event-03.svg`,
      alt: "SSCSS team building activity",
      title: "Team Building Activity",
      description: "Team building exercises designed to strengthen communication, coordination, and camaraderie among our staff.",
      category: "events",
      isPlaceholder: true,
    },
  ],

  // ─── Videos (empty — gracefully omitted from page) ────────
  videos: [],

  trustHighlights: {
    title: "Built on Trust & Professionalism",
    subtitle:
      "Every deployment reflects our commitment to quality, compliance, and operational excellence.",
    items: [
      {
        title: "Professionalism First",
        description:
          "Every SSCSS guard is trained to represent your organization with the highest standards of professionalism, discipline, and courtesy.",
        icon: "Award",
      },
      {
        title: "Trained & Certified Staff",
        description:
          "All personnel undergo structured training programs covering security protocols, customer service, emergency response, and fire safety.",
        icon: "ClipboardCheck",
      },
      {
        title: "Full Regulatory Compliance",
        description:
          "We maintain strict compliance with all statutory requirements — background verification, insurance coverage, and labour law adherence.",
        icon: "FileCheck",
      },
      {
        title: "Operational Excellence",
        description:
          "Our proven operational systems ensure consistent service delivery, proactive supervision, and rapid issue resolution across all deployments.",
        icon: "Shield",
      },
    ],
  },
};

