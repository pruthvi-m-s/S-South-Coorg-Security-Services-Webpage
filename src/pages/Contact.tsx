import { useMemo, useState, useCallback, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import { MapPin, Clock, Phone } from "lucide-react";
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

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const WA_NUMBER = String(CONTACT.whatsapp).replace(/\D/g, "");

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact-form") {
      requestAnimationFrame(() => {
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.hash]);

  const serviceOptions = useMemo(
    () =>
      SERVICES.map((service) => ({
        slug: service.slug,
        name: service.name,
      })),
    [],
  );

  const initialService = useMemo(() => {
    const fromQuery = searchParams
      .get("service")
      ?.trim()
      .toLowerCase();

    if (!fromQuery || !/^[a-z0-9-]{1,80}$/.test(fromQuery)) {
      return "";
    }

    return serviceOptions.some(
      (service) => service.slug === fromQuery,
    )
      ? fromQuery
      : "";
  }, [searchParams, serviceOptions]);

  const [formData, setFormData] =
    useState<ContactFormData>(() => ({
      ...INITIAL_FORM_DATA,
      service: initialService,
    }));

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [submissionState, setSubmissionState] =
    useState<SubmissionState>({
      status: "idle",
    });

  const contactInfoContent = useMemo(() => {
    const items: Array<{
      label: string;
      icon: string;
      value: string;
      href?: string;
    }> = [];

    if (CONTACT.phone) {
      items.push({
        label: "Phone",
        icon: "Phone",
        value: CONTACT.phone,
        href: `tel:${CONTACT.phone}`,
      });
    }

    if (CONTACT.email) {
      items.push({
        label: "Email",
        icon: "Mail",
        value: CONTACT.email,
        href: `mailto:${CONTACT.email}`,
      });
    }

    if (CONTACT.address) {
      items.push({
        label: "Office Address",
        icon: "MapPin",
        value: CONTACT.address,
        href: CONTACT.googleBusinessProfile || undefined,
      });
    }

    return {
      ...CONTACT_PAGE.contactInfo,
      items,
    };
  }, []);

  const relevantFaqs = useMemo(() => {
    const priority: Record<string, number> = {
      General: 1,
      Coverage: 2,
      Process: 3,
    };

    return [...FAQS]
      .sort(
        (a, b) =>
          (priority[a.category] ?? 99) -
          (priority[b.category] ?? 99),
      )
      .slice(0, CONTACT_PAGE.faqPreview.count);
  }, []);

  const handleFieldChange = useCallback(
    (
      field: keyof ContactFormData,
      value: string,
    ) => {
      const normalized =
        field === "email"
          ? value.trim().toLowerCase()
          : value.replace(/\s+/g, " ");

      setFormData((previous) => ({
        ...previous,
        [field]: normalized,
      }));

      if (submissionState.status !== "idle") {
        setSubmissionState({ status: "idle" });
      }

      setErrors((previous) => {
        if (!previous[field]) return previous;

        const next = { ...previous };
        delete next[field];
        return next;
      });
    },
    [submissionState.status],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const sanitized: ContactFormData = {
        name: formData.name.trim().replace(/\s+/g, " "),
        company: formData.company
          .trim()
          .replace(/\s+/g, " "),
        phone: formData.phone
          .trim()
          .replace(/\s+/g, " "),
        email: formData.email.trim().toLowerCase(),
        service: formData.service.trim(),
        message: formData.message
          .trim()
          .replace(/\s+/g, " "),
      };

      const validationErrors =
        validateContactForm(sanitized);

      setErrors(validationErrors);

      if (hasErrors(validationErrors)) {
        const firstField = (
          [
            "name",
            "phone",
            "email",
            "service",
            "message",
          ] as const
        ).find((field) => Boolean(validationErrors[field]));

        if (firstField) {
          const element = document.getElementById(
            `field-${firstField}`,
          );

          requestAnimationFrame(() => {
            element?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });

            element?.focus({
              preventScroll: true,
            });
          });
        }

        return;
      }

      setSubmissionState({
        status: "submitting",
      });

      const result = await submitContactForm(sanitized);

      if (result.success) {
        trackFormSubmitSuccess({
          source_page: getSourcePage(),
          service_interested:
            sanitized.service || "not-sure",
        });

        setSubmissionState({
          status: "success",
          message: result.message,
        });
      } else {
        trackFormSubmitError({
          source_page: getSourcePage(),
          error_type: "submission_failed",
        });

        setSubmissionState({
          status: "error",
          message: result.message,
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

  const ctaContent = useMemo(
    () => ({
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
    }),
    [],
  );

  return (
    <div className="bg-[#10100f] text-[#f5f1e8]">
      {/* HERO */}
      <section
        className="overflow-hidden bg-[#10100f]"
        aria-labelledby="contact-hero-title"
      >
        <div className="section-container py-20 sm:py-24 lg:py-28">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
              >
                Start a conversation
              </motion.p>

              <div className="mt-4">
                <HeadlineReveal
                  as="h1"
                  delay={0.1}
                  className="max-w-3xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.5rem]"
                >
                  {CONTACT_PAGE.hero.title}
                </HeadlineReveal>
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              className="border-l-2 border-[#b52b22] pl-6 sm:pl-8"
            >
              <p
                id="contact-hero-title"
                className="max-w-2xl text-base leading-7 text-[#b4aea5] sm:text-lg"
              >
                {CONTACT_PAGE.hero.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                <span>Security</span>
                <span>Manpower</span>
                <span>Facility Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <ContactInfo content={contactInfoContent} />

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="scroll-mt-[var(--header-height)] bg-[#f3efe6] text-[#171615]"
        aria-labelledby="contact-form-title"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]"
                >
                  Tell us what you need
                </motion.p>

                <motion.h2
                  id="contact-form-title"
                  variants={fadeUp}
                  className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#171615] sm:text-5xl"
                >
                  {CONTACT_PAGE.form.title}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-md text-sm leading-7 text-[#6a655e] sm:text-base"
                >
                  {CONTACT_PAGE.form.subtitle}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 border-t border-[#d9d1c5] pt-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77716a]">
                    What happens next
                  </p>

                  <div className="mt-4 space-y-4 text-sm leading-6 text-[#6a655e]">
                    <p>
                      <span className="mr-2 font-semibold text-[#ad241c]">
                        01
                      </span>
                      We review your requirement.
                    </p>
                    <p>
                      <span className="mr-2 font-semibold text-[#ad241c]">
                        02
                      </span>
                      We discuss the site and staffing needs.
                    </p>
                    <p>
                      <span className="mr-2 font-semibold text-[#ad241c]">
                        03
                      </span>
                      We work out the appropriate next step.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-8"
                >
                  <TrustRibbon
                    stats={STATS}
                    certifications={CERTIFICATIONS}
                    psaraLabels={COMPLIANCE_PAGE.psaraBadge}
                  />

                  <div className="mt-4">
                    <ResponseTimePromise className="text-[#6a655e]" />
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                className="border border-[#d9d1c5] bg-[#ebe5da] p-6 sm:p-8 lg:p-10"
              >
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

                {(CONTACT.phone || WA_NUMBER) && (
                  <div className="mt-8 border-t border-[#d9d1c5] pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77716a]">
                      Prefer to speak directly?
                    </p>

                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      {CONTACT.phone && (
                        <a
                          href={`tel:${CONTACT.phone}`}
                          data-analytics-component="contact_page_call"
                          className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#cfc7bb] px-4 text-sm font-semibold text-[#171615] transition-colors hover:border-[#ad241c] hover:text-[#ad241c]"
                        >
                          <Phone className="size-4" />
                          Call Now
                        </a>
                      )}

                      {WA_NUMBER && (
                        <a
                          href={`https://wa.me/${WA_NUMBER}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-analytics-component="contact_page_whatsapp"
                          className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#cfc7bb] px-4 text-sm font-semibold text-[#171615] transition-colors hover:border-[#25D366] hover:text-[#168c45]"
                        >
                          <WhatsAppIcon className="size-4" />
                          WhatsApp Us
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFFICE / COVERAGE */}
      <section
        className="bg-[#191918] text-[#f5f1e8]"
        aria-label="Office and Coverage"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
                >
                  Office & coverage
                </motion.p>

                <motion.h2
                  variants={fadeUp}
                  className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
                >
                  {CONTACT_PAGE.office.title}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base"
                >
                  {CONTACT_PAGE.office.subtitle}
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="border border-[#2b2927] bg-[#10100f]"
              >
                {CONTACT.address ? (
                  <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                    <iframe
                      title="S South Coorg Security Services office location"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                ) : (
                  <div className="flex min-h-[280px] flex-col items-center justify-center p-8 text-center sm:p-10">
                    <MapPin
                      size={38}
                      strokeWidth={1.5}
                      className="text-[#c45a52]"
                      aria-hidden="true"
                    />
                    <p className="mt-5 font-heading text-2xl font-semibold text-[#f5f1e8]">
                      {CONTACT_PAGE.office.placeholder.title}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#77716a]">
                      {CONTACT_PAGE.office.placeholder.description}
                    </p>
                  </div>
                )}

                {CONTACT.address && (
                  <div className="border-t border-[#2b2927] p-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#77716a]">
                      {CONTACT_PAGE.office.address.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                      {CONTACT.address}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUSINESS HOURS */}
      <section
        className="bg-[#10100f] text-[#f5f1e8]"
        aria-label="Business Hours"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
            >
              Availability
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-3 text-center font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
            >
              {CONTACT_PAGE.businessHours.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-[#b4aea5] sm:text-base"
            >
              {CONTACT_PAGE.businessHours.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-10 max-w-xl border border-[#2b2927] bg-[#191918]"
            >
              {CONTACT_PAGE.businessHours.schedule.map(
                (entry, index) => (
                  <div
                    key={`hours-${index}`}
                    className={
                      index <
                      CONTACT_PAGE.businessHours.schedule
                        .length -
                        1
                        ? "flex items-center justify-between gap-6 border-b border-[#2b2927] px-6 py-4 sm:px-8"
                        : "flex items-center justify-between gap-6 px-6 py-4 sm:px-8"
                    }
                  >
                    <span className="text-sm font-medium text-[#ded8cf]">
                      {entry.days}
                    </span>

                    <span className="text-sm text-[#99938c]">
                      {entry.hours}
                    </span>
                  </div>
                ),
              )}
            </motion.div>

            {CONTACT_PAGE.businessHours.note && (
              <motion.div
                variants={fadeUp}
                className="mx-auto mt-4 flex max-w-xl items-start gap-3 border-l-2 border-[#b52b22] bg-[#191918] p-4"
              >
                <Clock
                  size={17}
                  className="mt-0.5 shrink-0 text-[#c45a52]"
                  aria-hidden="true"
                />

                <p className="text-xs leading-6 text-[#99938c]">
                  {CONTACT_PAGE.businessHours.note}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FaqPreview
        title={CONTACT_PAGE.faqPreview.title}
        subtitle={CONTACT_PAGE.faqPreview.subtitle}
        faqs={relevantFaqs}
        count={CONTACT_PAGE.faqPreview.count}
        viewAllHref={ROUTES.faqs}
      />

      {/* FINAL CTA */}
      <FinalCtaSection content={ctaContent} />
    </div>
  );
}