import { ROUTES } from "@/lib/routes";
import type { Certification, SeoMeta } from "@/types";

type CertificationDetail = {
  title: string;
  description: string;
};

export interface CompliancePageContent {
  seo: SeoMeta;
  hero: { title: string; subtitle: string };
  introduction: { title: string; description: string };
  certificationDetails: Partial<Record<Certification["type"], CertificationDetail>>;
  statusLabels: { verified: string; pending: string };
  psaraBadge: { verified: string; pending: string };
}

export const COMPLIANCE_PAGE: CompliancePageContent = {
  seo: {
    title: "Compliance & Documentation | SSCSS",
    description: "Review SSCSS compliance and documentation information for security and manpower procurement in Bengaluru.",
    canonicalPath: ROUTES.compliance,
    schemaType: "WebPage",
  },
  hero: {
    title: "Compliance & Documentation",
    subtitle: "A clear overview of the registrations and employment documentation procurement teams may request from SSCSS.",
  },
  introduction: {
    title: "Documentation for Procurement Review",
    description: "SSCSS maintains a structured approach to compliance documentation. The status below reflects only records available for publication; documentation marked pending is available on request when supplied for the relevant engagement.",
  },
  certificationDetails: {
    PSARA: {
      title: "Private Security Agency Licensing",
      description: "PSARA licensing is the regulatory framework that applies to private security agencies. Ask SSCSS for the documentation relevant to your security requirement.",
    },
    GST: {
      title: "GST Registration",
      description: "GST documentation may be requested as part of vendor onboarding and commercial due diligence.",
    },
    PF: {
      title: "Provident Fund Registration",
      description: "PF documentation may be relevant when reviewing employment and payroll compliance for deployed personnel.",
    },
    ESI: {
      title: "Employee State Insurance Registration",
      description: "ESI documentation may be relevant when reviewing workforce-related statutory records.",
    },
  },
  statusLabels: {
    verified: "Verified documentation",
    pending: "Documentation available on request",
  },
  psaraBadge: {
    verified: "PSARA documentation verified",
    pending: "Licensing details available on request",
  },
};
