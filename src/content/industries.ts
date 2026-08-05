// ============================================================
// SSCSS — Industries Served
// All 12 industries as defined in appflow.md
// ============================================================

import type { Industry } from "../types";

export const INDUSTRIES: Industry[] = [
  {
    slug: "apartment-associations",
    name: "Apartment Associations",
    icon: "Building2",
    description:
      "Comprehensive security and manpower solutions for apartment complexes and residential associations, including guard deployment, visitor management, and community safety.",
    relevantServiceSlugs: [
      "security-guards",
      "residential-security",
      "housekeeping",
      "background-verification",
    ],
  },
  {
    slug: "factories",
    name: "Factories",
    icon: "Factory",
    description:
      "Industrial security and manpower for manufacturing facilities, focusing on perimeter control, material movement monitoring, and shift-based guard deployment.",
    relevantServiceSlugs: [
      "industrial-security",
      "security-guards",
      "skilled-labour",
      "unskilled-labour",
    ],
  },
  {
    slug: "warehouses",
    name: "Warehouses",
    icon: "Warehouse",
    description:
      "Security and labour solutions for warehouses and logistics hubs, including goods movement monitoring, inventory protection, and general labour support.",
    relevantServiceSlugs: [
      "industrial-security",
      "security-guards",
      "unskilled-labour",
      "skilled-labour",
    ],
  },
  {
    slug: "it-companies",
    name: "IT Companies",
    icon: "Monitor",
    description:
      "Corporate security and staffing solutions for IT companies, technology parks, and software development firms requiring professional security and front office management.",
    relevantServiceSlugs: [
      "corporate-security",
      "front-office-management",
      "corporate-staffing",
      "ex-army-security-guards",
    ],
  },
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    icon: "Building",
    description:
      "Complete security, front office, and staffing services for corporate offices, ensuring professional representation and comprehensive security coverage.",
    relevantServiceSlugs: [
      "corporate-security",
      "security-guards",
      "front-office-management",
      "corporate-staffing",
    ],
  },
  {
    slug: "hospitals",
    name: "Hospitals",
    icon: "Hospital",
    description:
      "Specialized security and housekeeping services for healthcare facilities, with trained personnel who understand the unique requirements of medical environments.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
      "front-office-management",
      "background-verification",
    ],
  },
  {
    slug: "schools",
    name: "Schools",
    icon: "GraduationCap",
    description:
      "Security services for educational institutions including schools and colleges, with guards trained in campus safety and child protection protocols.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
    ],
  },
  {
    slug: "hotels",
    name: "Hotels",
    icon: "Hotel",
    description:
      "Security, front office, and housekeeping services for hotels and hospitality establishments, maintaining guest safety and property standards.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
      "front-office-management",
      "event-security",
    ],
  },
  {
    slug: "commercial-buildings",
    name: "Commercial Buildings",
    icon: "Store",
    description:
      "Integrated security and facility management for commercial buildings, shopping centers, and mixed-use properties.",
    relevantServiceSlugs: [
      "security-guards",
      "housekeeping",
      "corporate-security",
      "event-security",
    ],
  },
  {
    slug: "business-parks",
    name: "Business Parks",
    icon: "Trees",
    description:
      "Comprehensive security solutions for business parks and SEZs, including perimeter security, access control, and multi-client coordination.",
    relevantServiceSlugs: [
      "corporate-security",
      "security-guards",
      "ex-army-security-guards",
    ],
  },
  {
    slug: "construction-sites",
    name: "Construction Sites",
    icon: "HardHat",
    description:
      "Security and labour solutions for construction sites, including material protection, access control, and skilled/unskilled worker deployment.",
    relevantServiceSlugs: [
      "security-guards",
      "industrial-security",
      "skilled-labour",
      "unskilled-labour",
    ],
  },
  {
    slug: "government-institutions",
    name: "Government Institutions",
    icon: "Landmark",
    description:
      "Security services for government buildings and institutions, with personnel meeting government security standards and protocols.",
    relevantServiceSlugs: [
      "security-guards",
      "ex-army-security-guards",
      "corporate-security",
    ],
  },
];

/** Utility: get industries relevant to a specific service */
export function getIndustriesForService(
  serviceSlug: string,
): Industry[] {
  return INDUSTRIES.filter((ind) =>
    ind.relevantServiceSlugs.includes(serviceSlug),
  );
}

