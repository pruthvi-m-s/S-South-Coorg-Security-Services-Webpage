// ============================================================
// SSCSS — Site-wide FAQs
// These are distinct from per-service FAQs.
// Categories: General, Coverage, Process, Careers
// ============================================================

import type { Faq } from "../types";

export const FAQS: Faq[] = [
  // ── General ──────────────────────────────────────────────
  {
    id: "faq-general-1",
    category: "General",
    question: "What services does SSCSS offer?",
    answer:
      "SSCSS offers a comprehensive range of security and manpower services including security guards, corporate security, industrial security, residential security, housekeeping, front office management, skilled and unskilled labour, corporate staffing, ex-army security guards, event security, background verification, and private detective services.",
  },
  {
    id: "faq-general-2",
    category: "General",
    question: "How long has SSCSS been in business?",
    answer:
      "SSCSS has been serving Bengaluru since 2008, with over 15 years of experience in the security and manpower industry.",
  },
  {
    id: "faq-general-3",
    category: "General",
    question: "How can I confirm SSCSS registrations and documentation?",
    answer:
      "Contact SSCSS to discuss the registrations and documentation relevant to your requirement. Supporting records will be shared when they are available for your procurement process.",
  },
  // ── Coverage ─────────────────────────────────────────────
  {
    id: "faq-coverage-1",
    category: "Coverage",
    question: "What areas do you serve?",
    answer:
      "Our primary service area is South Bengaluru. We can also serve other parts of Bengaluru on request.",
  },
  {
    id: "faq-coverage-2",
    category: "Coverage",
    question: "Do you provide services outside Bengaluru?",
    answer:
      "Currently, we primarily operate in Bengaluru. For requirements outside the city, please contact us and we will assess feasibility.",
  },
  // ── Process ──────────────────────────────────────────────
  {
    id: "faq-process-1",
    category: "Process",
    question: "How do I engage SSCSS for security services?",
    answer:
      "Simply contact us via phone, WhatsApp, or our inquiry form. We'll discuss your requirements, conduct a site assessment, provide a proposal, and deploy trained personnel upon your approval.",
  },
  {
    id: "faq-process-2",
    category: "Process",
    question: "What is the typical deployment timeline?",
    answer:
      "Deployment timing depends on the service scope, site assessment, staffing requirements, and availability. SSCSS will confirm a practical timeline after reviewing your requirement.",
  },
  {
    id: "faq-process-3",
    category: "Process",
    question: "What is the minimum contract period?",
    answer:
      "Contract periods are flexible and depend on the service type and scope. We offer both short-term and long-term engagement options. Contact us for a customized proposal.",
  },
  // ── Careers ──────────────────────────────────────────────
  {
    id: "faq-careers-1",
    category: "Careers",
    question: "Is SSCSS hiring security guards?",
    answer:
      "Yes, we are always looking for dedicated, physically fit individuals to join our team. Please contact us for current openings and application process.",
  },
  {
    id: "faq-careers-2",
    category: "Careers",
    question: "What are the requirements to work as a security guard at SSCSS?",
    answer:
      "Candidates must be physically fit, have valid identity documents, clear background verification, and complete our training program. Prior experience is preferred but not mandatory.",
  },
];

/** Get FAQs filtered by category */
export function getFaqsByCategory(category: string): Faq[] {
  return FAQS.filter((faq) => faq.category === category);
}

/** Get all unique FAQ categories */
export function getFaqCategories(): string[] {
  return [...new Set(FAQS.map((faq) => faq.category))];
}

