// ============================================================
// SSCSS — Contact Page Content
// Single source of truth for the Contact page copy.
// All text, labels, placeholders, and messages come from here.
// ============================================================

import { ROUTES } from "@/lib/routes";
import { CONTACT } from "./site";
import type { SeoMeta } from "@/types";

// ─── Types ──────────────────────────────────────────────────

export interface BusinessHoursEntry {
  days: string;
  hours: string;
}

export interface OfficeInfo {
  label: string;
  icon: string;
  value: string;
  href?: string;
}

export interface ServiceArea {
  icon: string;
  label: string;
  description: string;
}

export interface ContactPageContent {
  seo: SeoMeta;
  hero: {
    title: string;
    subtitle: string;
  };
  contactInfo: {
    title: string;
    subtitle: string;
    items: OfficeInfo[];
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: { label: string; placeholder: string; required: boolean };
      company: { label: string; placeholder: string; required: boolean };
      phone: { label: string; placeholder: string; required: boolean };
      email: { label: string; placeholder: string; required: boolean };
      service: { label: string; placeholder: string; required: boolean; notSureLabel: string };
      message: { label: string; placeholder: string; required: boolean };
    };
    submitLabel: string;
    submittingLabel: string;
    successHeading: string;
    successMessage: string;
    errorMessage: string;
    retryLabel: string;
    resetLabel: string;
  };
  office: {
    title: string;
    subtitle: string;
    placeholder: {
      title: string;
      description: string;
      note: string;
    };
    address: OfficeInfo;
  };
  businessHours: {
    title: string;
    subtitle: string;
    schedule: BusinessHoursEntry[];
    note: string;
  };
  faqPreview: {
    title: string;
    subtitle: string;
    count: number;
  };
  cta: {
    heading: string;
    supportingText: string;
    primaryCta: { label: string; href: string };
  };
}

// ─── Content ────────────────────────────────────────────────

export const CONTACT_PAGE: ContactPageContent = {
  seo: {
    title: "Contact SSCSS | Request a Security Quote",
    description:
      "Get in touch with S South Coorg Security Services for a free consultation. Call, email, or fill out our inquiry form for security and manpower solutions in Bengaluru.",
    canonicalPath: ROUTES.contact,
    schemaType: "LocalBusiness",
  },

  hero: {
    title: "Contact Us",
    subtitle:
      "Ready to discuss your security or manpower needs? Reach out to our team and we'll get back to you promptly.",
  },

  contactInfo: {
    title: "Our Contact Details",
    subtitle:
      "Use any of the following channels to get in touch with us. We're available during business hours and respond to inquiries promptly.",
    items: [],
  },

  form: {
    title: "Send Us a Message",
    subtitle:
      "Fill out the form below and our team will respond within 24 hours. All fields marked with an asterisk (*) are required.",
    fields: {
      name: {
        label: "Full Name *",
        placeholder: "Enter your full name",
        required: true,
      },
      company: {
        label: "Company / Organization",
        placeholder: "Enter your company or organization name",
        required: false,
      },
      phone: {
        label: "Phone Number *",
        placeholder: "Enter your 10-digit phone number",
        required: true,
      },
      email: {
        label: "Email Address *",
        placeholder: "Enter your email address",
        required: true,
      },
      service: {
        label: "Service Required",
        placeholder: "Select a service",
        required: false,
        notSureLabel: "Not sure yet — discuss with team",
      },
      message: {
        label: "Message *",
        placeholder: "Tell us about your requirements, property type, number of guards needed, etc.",
        required: true,
      },
    },
    submitLabel: "Submit Inquiry",
    submittingLabel: "Submitting…",
    successHeading: "Thank You!",
    successMessage:
      "Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours. You can also reach us directly by phone for urgent requirements.",
    errorMessage:
      "Something went wrong while submitting your request. Please try again or contact us directly by phone.",
    retryLabel: "Try Again",
    resetLabel: "Send Another Inquiry",
  },

  office: {
    title: "Our Office & Service Coverage",
    subtitle:
      "We are based in South Bengaluru and serve clients across the city and surrounding areas.",
    placeholder: {
      title: "Map Location",
      description:
        "An interactive map will be available here soon. In the meantime, use the contact details above to reach us.",
      note: "Map integration coming soon",
    },
    address: {
      label: "Office Address",
      icon: "MapPin",
      value: "", // Populated from CONTACT.address at runtime
      href: "", // Populated from CONTACT.googleBusinessProfile at runtime
    },
  },

  businessHours: {
    title: "Business Hours",
    subtitle:
      "Our office hours for general inquiries and support. Emergency contact is available 24/7 for existing clients.",
    schedule: [
      { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 2:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
    note: "For existing clients with urgent needs, our emergency contact line is available 24/7. Please use the contact details provided during onboarding.",
  },

  faqPreview: {
    title: "Quick Answers",
    subtitle:
      "Find answers to commonly asked questions before reaching out.",
    count: 3,
  },

  cta: {
    heading: "Not Ready to Submit a Form?",
    supportingText:
      "You can also reach us directly by phone or WhatsApp. Our team is available during business hours to discuss your requirements.",
    primaryCta: {
      label: "Call Us Now",
      href: `tel:${CONTACT.phone}`,
    },
  },
};

