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
const REAL_BASE = "/images/real";

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
      "Real images from our operations — guard deployments, team activities, and client sites across Bengaluru. These are not stock photos; they reflect the actual presence and people behind SSCSS.",
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
      src: `${REAL_BASE}/sscss-guards-team-2.webp`,
      alt: "SSCSS security guards in uniform standing at attention",
      title: "Professional Security Team",
      description: "Our professionally trained SSCSS guards in full uniform, demonstrating discipline and readiness.",
      category: "team",
      isPlaceholder: false,
    },
    {
      id: "team-02",
      src: `${REAL_BASE}/sscss-guards-team-1.webp`,
      alt: "SSCSS team of security guards assembled at a client premises",
      title: "SSCSS Field Team",
      description: "A deployed team of our security personnel at a client premises, standing ready to serve.",
      category: "team",
      isPlaceholder: false,
    },
    {
      id: "team-03",
      src: `${REAL_BASE}/sscss-guards-team-3.webp`,
      alt: "SSCSS security guards in uniform in front of our service equipment",
      title: "Guards on Duty",
      description: "SSCSS promotes discipline and professionalism across every guard we deploy.",
      category: "team",
      isPlaceholder: false,
    },
    {
      id: "team-04",
      src: `${REAL_BASE}/sscss-bodyguard-3.webp`,
      alt: "SSCSS ex-army security guard in professional uniform",
      title: "Ex-Army Personnel",
      description: "Military-trained ex-army personnel bring unmatched discipline and experience to premium assignments.",
      category: "team",
      isPlaceholder: false,
    },

    // ─── Deployments ────────────────────────────────────────
    {
      id: "deploy-01",
      src: `${REAL_BASE}/sscss-security-at-entrance.webp`,
      alt: "SSCSS security guard at the entrance of a client premises in Bengaluru",
      title: "Site Security Deployment",
      description: "A guard stationed at a premises entrance, managing access control and visitor verification.",
      category: "deployments",
      isPlaceholder: false,
    },
    {
      id: "deploy-02",
      src: `${REAL_BASE}/sscss-security-rear.webp`,
      alt: "SSCSS security guard monitoring the rear access point of a facility",
      title: "Perimeter Deployment",
      description: "Security personnel monitoring a facility's rear access point to maintain complete site coverage.",
      category: "deployments",
      isPlaceholder: false,
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
      src: `${REAL_BASE}/sscss-event-cfee1924.webp`,
      alt: "SSCSS team at a company event in Bengaluru",
      title: "Company Celebration",
      description: "Our team celebrating milestones and achievements, fostering a strong team culture.",
      category: "events",
      isPlaceholder: false,
    },
    {
      id: "event-02",
      src: `${REAL_BASE}/sscss-event-emmr4893.webp`,
      alt: "SSCSS staff at a company function",
      title: "Staff Meet & Function",
      description: "Recognizing outstanding performance and dedication of our security personnel during our company functions.",
      category: "events",
      isPlaceholder: false,
    },
    {
      id: "event-03",
      src: `${REAL_BASE}/sscss-bodyguard-1.webp`,
      alt: "SSCSS security personnel at an event deployment",
      title: "Event Security Team",
      description: "Our event security team deployed at a client gathering, ensuring a safe and smooth experience.",
      category: "events",
      isPlaceholder: false,
    },
  ],

  // ─── Videos (empty — gracefully omitted from page) ────────
  videos: [],

  trustHighlights: {
    title: "Real Presence. Real Deployments.",
    subtitle:
      "These images reflect genuine operational activity — guards on site, team deployments, and company events across Bengaluru.",
    items: [
      {
        title: "Personnel on Ground",
        description:
          "Our guards are deployed across client sites in South Bengaluru and greater Bengaluru, maintaining visible, professional presence.",
        icon: "Shield",
      },
      {
        title: "Team Coordination",
        description:
          "Deployments are managed with clear chains of command, supervisory oversight, and structured communication protocols.",
        icon: "ClipboardCheck",
      },
      {
        title: "Verified Operations",
        description:
          "All personnel undergo background verification and are deployed under full regulatory compliance — PSARA, PF, ESI, and GST.",
        icon: "FileCheck",
      },
      {
        title: "Company Culture",
        description:
          "Regular team events and functions build cohesion and reinforce the professional standards SSCSS expects from every deployment.",
        icon: "Award",
      },
    ],
  },
};

