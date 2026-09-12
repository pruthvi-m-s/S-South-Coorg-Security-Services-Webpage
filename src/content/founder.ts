// ============================================================
// SSCSS — Founder Highlight Content
// Single source of truth for the "Meet Our Founder" section
// on the Home page. All copy and the portrait live here.
// To swap the portrait later, update only the `image` field.
// ============================================================

import type { ImageRef } from "../types";
import { companyOwner } from "@/lib/site-images";

// ─── Founder-specific Types (co-located) ─────────────────────

export interface FounderAchievement {
  title: string;
  icon: string;    // Lucide icon name — mapped in UI layer
}

export interface FounderContent {
  eyebrow: string;
  heading: string;
  name: string;
  designation: string;
  experienceBadge: string;
  experienceCaption: string;
  message: string;
  quote: string;
  image: ImageRef;
  achievements: FounderAchievement[];
}

// ─── Founder Content ─────────────────────────────────────────

export const FOUNDER: FounderContent = {
  eyebrow: "Meet Our Founder",
  heading: "An Experienced Professional Leading SSCSS",
  name: "Machettira Subramani",
  designation: "Founder • Proprietor • Managing Director",
  experienceBadge: "18+ Years",
  experienceCaption: "Building trust since 2008",
  message:
    "Our commitment has remained unchanged since 2008 — to deliver disciplined, dependable, and professional security solutions built on integrity, accountability, and long-term client relationships. Every deployment reflects our promise to protect what matters most.",
  quote:
    "Security isn't just about guarding property—it's about earning trust every single day.",
  image: {
    src: companyOwner,
    alt: "Machettira Subramani, Founder, Proprietor and Managing Director of S South Coorg Security Services",
    isPlaceholder: false,
  },
  achievements: [
    {
      title: "Established in 2008, serving Bengaluru",
      icon: "Award",
    },
    {
      title: "50+ clients across Bengaluru",
      icon: "Building2",
    },
  ],
};
