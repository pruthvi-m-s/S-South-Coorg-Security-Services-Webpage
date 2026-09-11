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
  title: string;   // e.g. "27+ Years of Industry Experience"
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
  experienceBadge: "27+ Years",
  experienceCaption: "in the Security Industry • 18+ Years Building SSCSS",
  message:
    "For over two decades, our commitment has remained unchanged — to deliver disciplined, dependable, and professional security solutions built on integrity, accountability, and long-term client relationships. Every deployment reflects our promise to protect what matters most.",
  quote:
    "Security isn't just about guarding property—it's about earning trust every single day.",
  image: {
    src: companyOwner,
    alt: "Machettira Subramani, Founder, Proprietor and Managing Director of S South Coorg Security Services",
    isPlaceholder: false,
  },
  achievements: [
    {
      title: "27+ Years of Industry Experience",
      icon: "Calendar",
    },
    {
      title: "Founder of SSCSS",
      icon: "Award",
    },
    {
      title: "100+ Trained Personnel",
      icon: "Users",
    },
    {
      title: "50+ Satisfied Clients",
      icon: "HeartHandshake",
    },
    {
      title: "SSCSS Serving Bengaluru Since 2008",
      icon: "MapPin",
    },
  ],
};
