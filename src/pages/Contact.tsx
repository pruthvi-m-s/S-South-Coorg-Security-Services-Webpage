import { useMemo, useState, useCallback, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import ContactForm from "@/components/forms/ContactForm";
import type { SubmissionState } from "@/components/forms/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import TrustRibbon from "@/components/sections/TrustRibbon";
import ResponseTimePromise from "@/components/sections/ResponseTimePromise";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import {
  CONTACT_PAGE,
  CONTACT,
  FAQS,
  SERVICES,
  STATS,
  CERTIFICATIONS,
  COMPLIANCE_PAGE,
} from "@/content";
import {
  validateContactForm,
  hasErrors,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact/validation";
import { submitContactForm } from "@/lib/contact/submit";
import {
  trackFormSubmitSuccess,
  trackFormSubmitError,
  getSourcePage,
} from "@/lib/analytics";
import { ROUTES } from "@/lib/routes";

// ─── Initial form state ─────────────────────────────────────

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

// WhatsApp number (digits only) for click-to-chat links.
// String() cast handles the `as const` empty-string literal type.
const WA_NUMBER = String(CONTACT.whatsapp).replace(/\D/g, "");

// ─── ContactPage ────────────────────────────────────────────

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // ─── Deep-link support: /contact#contact-form ─────────────
  // React Router does not perform native fragment navigation, so smoothly
  // scroll to the inquiry form when the hash is present (same pattern as Faqs.tsx).
  useEffect(() => {
    if (location.hash === "#contact-form") {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location.hash]);

  // Pre-select a service from the query param (?service=slug) so visitors
  // arriving from a service page never have to re-select what they clicked into.
  const serviceOptions = useMemo(() => {
    return SERVICES.map((s) => ({
      slug: s.slug,
      name: s.name,
    }));
  }, []);

  const initialService = useMemo(() => {
    const fromQuery = searchParams.get("service");
    if (!fromQuery) return "";
    return serviceOptions.some((s) => s.slug === fromQuery) ? fromQuery : "";
  }, [searchParams, serviceOptions]);

  const [formData, setFormData] = useState<ContactFormData>(() => ({
    ...INITIAL_FORM_DATA,
    service: initialService,
  }));
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
  });

  const contactInfoContent = useMemo(() => {
    const enrichedItems: Array<{
      label: string;
      icon: string;
      value: string;
      href?: string;
    }> = [];

    if (CONTACT.phone) {
      enrichedItems.push({
        label: "Phone",
        icon: "Phone",
        value: CONTACT.phone,
        href: `tel:${CONTACT.phone}`,
      });
    }

    if (CONTACT.email) {
      enrichedItems.push({
        label: "Email",
        icon: "Mail",
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
      });
    }

    if (CONTACT.address) {
      enrichedItems.push({
        label: "Office Address",
        icon: "MapPin",
        value: CONTACT.address,
        href: CONTACT.googleBusinessProfile || undefined,
      });
    }

    return {
      ...CONTACT_PAGE.contactInfo,
      items: enrichedItems,
    };
  }, []);

  const relevantFaqs = useMemo(() => {
    const priority: Record<string, number> = {
      General: 1,
      Coverage: 2,
      Process: 3,
    };

    const sorted = [...FAQS].sort((a, b) => {
      const pa = priority[a.category] ?? 99;
      const pb = priority[b.category] ?? 99;
      return pa - pb;
    });

    return sorted.slice(0, CONTACT_PAGE.faqPreview.count);
  }, []);

  const handleFieldChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (field === "name" || field === "phone" || field === "email" || field === "message") {
        setErrors((prev) => {
          const current = prev[field];
          if (current === undefined) return prev;
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validationErrors = validateContactForm(formData);
      setErrors(validationErrors);

      if (hasErrors(validationErrors)) {
        return;
      }

      setSubmissionState({ status: "submitting" });

try {
        const result = await submitContactForm(formData);
        if (result.success) {
          trackFormSubmitSuccess({
            source_page: getSourcePage(),
            service_interested: formData.service || "not-sure",
          });
          setSubmissionState({ status: "success", message: result.message });
        } else {
          trackFormSubmitError({
            source_page: getSourcePage(),
            error_type: "submission_failed",
          });
          setSubmissionState({ status: "error", message: result.message });
        }
      } catch {
        trackFormSubmitError({
          source_page: getSourcePage(),
          error_type: "unexpected_error",
        });
        setSubmissionState({
          status: "error",
          message: "An unexpected error occurred. Please try again or contact us directly.",
        });
      }
    },
    [formData],
  );

  const handleReset = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setSubmissionState({ status: "idle" });
  }, []);
const ctaContent = useMemo(() => {
  return {
    heading: CONTACT_PAGE.cta.heading,
    supportingText: CONTACT_PAGE.cta.supportingText,
    primaryCta: {
      label: CONTACT_PAGE.cta.primaryCta.label,
      href: `${ROUTES.contact}#contact-form`,
    },
    secondaryCta: CONTACT.email
      ? {
          label: "Email Us",
          href: `mailto:${CONTACT.email}`,
        }
      : undefined,
  };
}, []);
  return (
    <>
      <section className="relative bg-muted" aria-label="Contact Hero">
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-ink"
            >
              {CONTACT_PAGE.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg text-muted-foreground"
            >
              {CONTACT_PAGE.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <ContactInfo content={contactInfoContent} />

      <section
        id="contact-form"
        className="relative scroll-mt-[var(--header-height)] bg-muted"
        aria-label="Contact Form Section"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink text-center"
            >
              {CONTACT_PAGE.form.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 mb-10 max-w-2xl text-center text-base leading-relaxed sm:text-lg text-muted-foreground"
            >
              {CONTACT_PAGE.form.subtitle}
            </motion.p>

            {/* Trust signal directly above the form (trust-at-decision-point) */}
            <motion.div variants={fadeUp} className="mb-8">
              <TrustRibbon
                stats={STATS}
                certifications={CERTIFICATIONS}
                psaraLabels={COMPLIANCE_PAGE.psaraBadge}
              />
              <div className="mt-4 flex justify-center">
                <ResponseTimePromise />
              </div>
            </motion.div>

            <div className="mx-auto max-w-2xl">
              <ContactForm
                content={CONTACT_PAGE.form}
                services={serviceOptions}
                formData={formData}
                errors={errors}
                submissionState={submissionState}
                onFieldChange={handleFieldChange}
                onSubmit={handleSubmit}
                onReset={handleReset}
              />

{/* Parallel contact channels — visitors who prefer calling/messaging */}
              {(CONTACT.phone || WA_NUMBER) && (
                <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-5 sm:flex-row sm:gap-6">
                  {CONTACT.phone && (
                    <a
                      href={`tel:${CONTACT.phone}`}
                      data-analytics-component="contact_page_call"
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 ease-premium-out hover:text-primary"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
                        <Phone size={16} />
                      </span>
                      Call Now
                    </a>
                  )}
                  {WA_NUMBER && (
                    <a
                      href={`https://wa.me/${WA_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-component="contact_page_whatsapp"
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 ease-premium-out hover:text-primary"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]" aria-hidden="true">
                        <WhatsAppIcon className="size-4" />
                      </span>
                      WhatsApp Us
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-background" aria-label="Office and Coverage">
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink text-center"
            >
              {CONTACT_PAGE.office.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed sm:text-lg text-muted-foreground"
            >
              {CONTACT_PAGE.office.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12">
              <Card className="mx-auto flex max-w-lg flex-col items-center justify-center p-10 text-center border border-dashed border-muted-foreground/30 bg-muted/50 min-h-[280px]">
                <MapPin
                  size={40}
                  strokeWidth={1.5}
                  className="text-muted-foreground/50"
                  aria-hidden="true"
                />
                <p className="mt-4 font-heading text-lg font-semibold text-ink">
                  {CONTACT_PAGE.office.placeholder.title}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {CONTACT_PAGE.office.placeholder.description}
                </p>
                <span className="mt-4 inline-flex items-center rounded-full bg-muted-foreground/10 px-3 py-1 text-xs font-medium text-muted-foreground">
                  {CONTACT_PAGE.office.placeholder.note}
                </span>
              </Card>

              {CONTACT.address && (
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    {CONTACT_PAGE.office.address.label}
                  </p>
                  <p className="mt-1 text-base text-ink">{CONTACT.address}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-muted" aria-label="Business Hours">
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl"
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl text-ink text-center"
            >
              {CONTACT_PAGE.businessHours.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed sm:text-lg text-muted-foreground"
            >
              {CONTACT_PAGE.businessHours.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10">
              <div className="mx-auto max-w-xl">
                <div className="overflow-hidden rounded-xl border border-border bg-card">
                  {CONTACT_PAGE.businessHours.schedule.map((entry, index) => (
                    <div
                      key={`hours-${index}`}
                      className={`flex items-center justify-between px-6 py-4 sm:px-8 ${
                        index < CONTACT_PAGE.businessHours.schedule.length - 1
                          ? "border-b border-border"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-medium text-ink">{entry.days}</span>
                      <span className="text-sm text-muted-foreground">{entry.hours}</span>
                    </div>
                  ))}
                </div>

                {CONTACT_PAGE.businessHours.note && (
                  <div className="mt-4 flex items-start gap-2 rounded-lg bg-primary-50 p-4">
                    <Clock
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {CONTACT_PAGE.businessHours.note}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FaqPreview
        title={CONTACT_PAGE.faqPreview.title}
        subtitle={CONTACT_PAGE.faqPreview.subtitle}
        faqs={relevantFaqs}
        count={CONTACT_PAGE.faqPreview.count}
        viewAllHref={ROUTES.faqs}
      />

      <FinalCtaSection content={ctaContent} />
    </>
  );
}
