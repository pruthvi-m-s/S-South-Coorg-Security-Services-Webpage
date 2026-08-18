/**
 * Config-safe metadata used solely to generate static SEO files.
 * It must not import application modules or use the `@/` alias.
 */
export const STATIC_INDEXABLE_ROUTES = [
  "/",
  "/about",
  "/compliance",
  "/services",
  "/industries",
  "/clients",
  "/gallery",
  "/faqs",
  "/contact",
] as const;

export const SEO_SERVICES = [
  ["Security Guards", "/services/security-guards", "Trained, disciplined security personnel for your premises."],
  ["Corporate Security", "/services/corporate-security", "Professional security management for corporate offices and IT parks."],
  ["Industrial Security", "/services/industrial-security", "Robust security solutions for factories, warehouses, and industrial facilities."],
  ["Residential Security", "/services/residential-security", "Trusted security for apartments, gated communities, and residential complexes."],
  ["Housekeeping", "/services/housekeeping", "Professional housekeeping and cleaning services for commercial and residential spaces."],
  ["Front Office Management", "/services/front-office-management", "Professional front desk and reception management for your business."],
  ["Skilled Labour", "/services/skilled-labour", "Qualified skilled workers for your operational and project needs."],
  ["Unskilled Labour", "/services/unskilled-labour", "Reliable general labour support for your operations and projects."],
  ["Corporate Staffing", "/services/corporate-staffing", "End-to-end staffing solutions for corporate and administrative roles."],
  ["Ex-Army Security Guards", "/services/ex-army-security-guards", "Disciplined, experienced ex-servicemen for premium security needs."],
  ["Event Security", "/services/event-security", "Comprehensive security management for events, conferences, and gatherings."],
  ["Background Verification", "/services/background-verification", "Thorough background checks for individuals and organizations."],
  ["Private Detective Services", "/services/private-detective-services", "Discreet, professional investigative services for individuals and businesses."],
  ["Integrated Facility Management Services", "/services/facility-management", "Complete facility operations management — security, housekeeping, staffing, and more."],
] as const;

export const SEO_INDUSTRIES = [
  "Apartment Associations", "Factories", "Warehouses", "IT Companies",
  "Corporate Offices", "Hospitals", "Schools", "Hotels",
  "Commercial Buildings", "Business Parks", "Construction Sites",
  "Government Institutions",
] as const;

export interface SeoSiteMetadata {
  name: string;
  shortName: string;
  established: number;
  yearsInBusiness: number;
  guardsCount: number;
  clientsCount: number;
  primaryServiceArea: string;
  secondaryServiceArea: string;
}

export const DEFAULT_SEO_SITE: SeoSiteMetadata = {
  name: "S South Coorg Security Services",
  shortName: "SSCSS",
  established: 2008,
  yearsInBusiness: 15,
  guardsCount: 100,
  clientsCount: 50,
  primaryServiceArea: "South Bengaluru",
  secondaryServiceArea: "All of Bengaluru (on request)",
};
