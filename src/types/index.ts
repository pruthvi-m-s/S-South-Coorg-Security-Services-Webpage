// ============================================================
// SSCSS — Shared Type Definitions
// Schema source: schema.md (Single Source of Truth)
// ============================================================

// ─── Image Reference ─────────────────────────────────────────
export interface ImageRef {
  src: string;
  alt: string;
  isPlaceholder: boolean; // true = stock/placeholder, false = real company asset
  credit?: string;        // stock source attribution if required by license
}

// ─── SEO Meta ────────────────────────────────────────────────
export interface SeoMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: ImageRef;
  schemaType: "LocalBusiness" | "Service" | "FAQPage" | "WebPage";
}

// ─── Service ─────────────────────────────────────────────────
export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceWhyChooseUsItem {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;                  // "industrial-security"
  name: string;                  // "Industrial Security"
  shortTagline: string;          // one-liner for cards/nav
  icon?: string;                 // Lucide icon name for card representation
  heroImage: ImageRef;
  overview: string;              // 2-4 paragraphs
  industriesServed: string[];    // industry slugs/names relevant to this service
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  whyChooseUs: ServiceWhyChooseUsItem[];
  faqs: ServiceFaq[];
  relatedServices: string[];     // 2-3 other service slugs
  seo: SeoMeta;
}

// ─── Industry ────────────────────────────────────────────────
export interface Industry {
  slug: string;
  name: string;                  // "Apartment Associations"
  icon: string;                  // Lucide icon name
  description: string;
  relevantServiceSlugs: string[];
}

// ─── Testimonial ─────────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole?: string;
  organization?: string;
  isPlaceholder: boolean;        // true until real testimonial supplied
}

// ─── Client (logo) ───────────────────────────────────────────
export interface Client {
  id: string;
  name: string;
  logo: ImageRef;
  permissionConfirmed: boolean;  // must be true before logo is rendered publicly
}

// ─── Certification / Registration ────────────────────────────
export interface Certification {
  id: string;
  type: "GST" | "PSARA" | "PF" | "ESI" | "Award" | "Other";
  label: string;
  icon?: string;                 // Lucide icon name — mapped in UI layer
  documentImage?: ImageRef;      // absent while pending upload
  status: "verified" | "pending-upload";
}

// ─── Stat (Home page counters) ───────────────────────────────
export interface Stat {
  id: string;
  value: number;                 // 15, 100, 50
  suffix: string;                // "+ Years", "+ Guards", "+ Clients"
  label: string;
  icon?: string;                 // Lucide icon name — mapped in UI layer
  description?: string;          // Optional short description for future use
}

// ─── FAQ (site-wide, distinct from per-service FAQs) ─────────
export interface Faq {
  id: string;
  category: string;              // e.g. "General", "Coverage"
  question: string;
  answer: string;
}

// ─── About Page Content ──────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CompanyHistoryEntry {
  year: string;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon?: string;                 // Lucide icon name — mapped in UI layer
}

// ─── Hero Section Content ────────────────────────────────────
export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  description: string;
  primaryCta: HeroCTA;
  secondaryCta: HeroCTA;
  heroImage: ImageRef;
  /** Optional trust badges / metrics — reserved for future use */
  trustElements?: {
    stats?: { value: string; label: string }[];
  };
  /** Optional background / overlay settings — reserved for future use */
  background?: {
    type: "none" | "image" | "color";
    overlayOpacity?: number;
  };
}

// ─── Inquiry Form Payload (Formspree contract) ───────────────
export interface InquiryFormPayload {
  name: string;
  phone: string;                 // required, validated format
  email: string;                 // required, validated format
  organizationName?: string;
  organizationType?: string;     // e.g. "Apartment Association", "Corporate", etc.
  serviceInterested: string;     // service slug, or "not-sure" from general Contact form
  message?: string;
  sourcePage: string;            // path the form was submitted from, for attribution
}

