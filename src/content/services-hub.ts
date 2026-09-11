// ============================================================
// SSCSS — Services Hub Page Content
// Phase 3 — Problem-led service architecture
// ============================================================

import type { Service } from "../types";

export const SERVICES_HUB = {
  hero: {
    eyebrow: "SECURITY • MANPOWER • FACILITY SUPPORT",
    title: "Security and manpower built around how your property operates.",
    subtitle:
      "From security personnel and access control to staffing, housekeeping and investigation support, SSCSS helps businesses, communities and institutions manage the people and processes behind their premises.",
  },

  intro: {
    eyebrow: "What we handle",
    title: "Four areas. One accountable service partner.",
    description:
      "Most property and facility requirements fall into a few practical categories. Start with the problem you need to solve, then move into the specific service that fits your site.",
  },

  showcase: {
    title: "Browse every service in detail",
    description:
      "Select a service to preview it — each offering links to its full engagement detail.",
  },

  groups: {
    security: {
      title: "Security",
      description:
        "Personnel, supervision and access control for properties where security presence and discipline matter every day.",
      serviceSlugs: [
        "security-guards",
        "corporate-security",
        "industrial-security",
        "residential-security",
        "ex-army-security-guards",
        "event-security",
      ],
    },

    facility: {
      title: "Facility & Front-of-House",
      description:
        "Housekeeping and front-office support that helps your property operate professionally from the moment people arrive.",
      serviceSlugs: [
        "housekeeping",
        "front-office-management",
        "integrated-facility-management-services",
      ],
    },

    manpower: {
      title: "Manpower",
      description:
        "Skilled, unskilled and corporate staffing support when recruiting and managing the workforce should not become your core task.",
      serviceSlugs: [
        "skilled-labour",
        "unskilled-labour",
        "corporate-staffing",
      ],
    },

    verification: {
      title: "Verification & Investigation",
      description:
        "Background verification and investigation services when you need greater confidence in people, information or circumstances.",
      serviceSlugs: [
        "background-verification",
        "private-detective-services",
      ],
    },
  },

  whyChoose: {
    eyebrow: "Why SSCSS",
    title: "The service is only part of the job.",
    subtitle:
      "The real value comes from how requirements are understood, personnel are deployed, standards are maintained and issues are handled after deployment.",
  },

  process: {
    eyebrow: "How engagement works",
    title: "A clear path from requirement to deployment.",
    subtitle:
      "We start by understanding the site and requirement, then build the deployment around it and remain accountable after the first day.",
  },

  faqPreview: {
    eyebrow: "Common questions",
    title: "Before you engage a service partner.",
    subtitle:
      "Straight answers to the practical questions buyers usually have before deployment.",
  },

  cta: {
    eyebrow: "Start with the requirement",
    title: "Not sure which service fits?",
    description:
      "Tell us about your property, workforce or operational requirement and we’ll help you identify the appropriate service.",
  },
} as const;

// ─── Problem-led service groups ──────────────────────────────
export interface ServiceGroupDefinition {
  id: string;
  title: string;
  description: string;
  serviceSlugs: readonly string[];
}

export interface ResolvedServiceGroup extends ServiceGroupDefinition {
  services: Service[];
}

export const SERVICE_GROUPS: ServiceGroupDefinition[] = [
  {
    id: "security",
    ...SERVICES_HUB.groups.security,
  },
  {
    id: "facility",
    ...SERVICES_HUB.groups.facility,
  },
  {
    id: "manpower",
    ...SERVICES_HUB.groups.manpower,
  },
  {
    id: "verification",
    ...SERVICES_HUB.groups.verification,
  },
];

export function getServiceGroups(
  services: Service[] = [],
): ResolvedServiceGroup[] {
  const servicesBySlug = new Map(
    services.map((service) => [service.slug, service]),
  );

  return SERVICE_GROUPS.map((group) => ({
    ...group,
    services: group.serviceSlugs
      .map((slug) => servicesBySlug.get(slug))
      .filter((service): service is Service => Boolean(service)),
  }));
}