import { motion } from "framer-motion";
import { ArrowRight, FileCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import ComplianceSection from "@/components/sections/ComplianceSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { CERTIFICATIONS, COMPLIANCE_PAGE, FINAL_CTA } from "@/content";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

export default function CompliancePage() {
  return (
    <div className="bg-[#10100f] text-[#f5f1e8]">
      {/* ============================================================
          HERO — DARK
          ============================================================ */}
      <section
        className="overflow-hidden bg-[#10100f]"
        aria-labelledby="compliance-hero-title"
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
                Compliance & documentation
              </motion.p>

              <div className="mt-4">
                <HeadlineReveal
                  as="h1"
                  delay={0.1}
                  className="max-w-3xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.5rem]"
                >
                  {COMPLIANCE_PAGE.hero.title}
                </HeadlineReveal>
              </div>
            </div>

            <div>
              <motion.p
                id="compliance-hero-title"
                variants={fadeUp}
                className="max-w-2xl border-l-2 border-[#b52b22] pl-6 text-base leading-7 text-[#b4aea5] sm:text-lg"
              >
                {COMPLIANCE_PAGE.hero.subtitle}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-7"
              >
                <Link
                  to={`${ROUTES.contact}#contact-form`}
                  data-analytics-cta="compliance_hero_contact"
                  className="inline-flex min-h-12 items-center gap-2 bg-[#b52b22] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8f1912]"
                >
                  Discuss procurement requirements
                  <ArrowRight
                    className="size-4"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          INTRO — CREAM HIGHLIGHT
          ============================================================ */}
      <section
        className="bg-[#f3efe6] text-[#171615]"
        aria-labelledby="compliance-intro-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]">
                Procurement review
              </p>

              <h2
                id="compliance-intro-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#171615] sm:text-5xl"
              >
                {COMPLIANCE_PAGE.introduction.title}
              </h2>
            </div>

            <p className="max-w-2xl border-t border-[#d9d1c5] pt-6 text-base leading-7 text-[#6a655e] sm:text-lg">
              {COMPLIANCE_PAGE.introduction.description}
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-[#d9d1c5] bg-[#d9d1c5] sm:grid-cols-3">
            <div className="bg-[#f3efe6] p-6 sm:p-7">
              <FileCheck
                className="size-5 text-[#ad241c]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-heading text-xl font-semibold text-[#171615]">
                Published clearly
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6a655e]">
                Only documentation status supported by the current records is
                presented.
              </p>
            </div>

            <div className="bg-[#f3efe6] p-6 sm:p-7">
              <ShieldCheck
                className="size-5 text-[#ad241c]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-heading text-xl font-semibold text-[#171615]">
                Procurement focused
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6a655e]">
                The information is structured around common vendor review
                requirements.
              </p>
            </div>

            <div className="bg-[#f3efe6] p-6 sm:p-7">
              <ArrowRight
                className="size-5 text-[#ad241c]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-5 font-heading text-xl font-semibold text-[#171615]">
                Available on request
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6a655e]">
                Pending documentation can be discussed directly with the
                SSCSS team for the relevant engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DOCUMENTATION — DARK
          ============================================================ */}
      <div className="bg-[#10100f]">
        <ComplianceSection
          certifications={CERTIFICATIONS}
          details={COMPLIANCE_PAGE.certificationDetails}
          statusLabels={COMPLIANCE_PAGE.statusLabels}
        />
      </div>

      {/* ============================================================
          CTA — DARK
          ============================================================ */}
      <FinalCtaSection content={FINAL_CTA} />
    </div>
  );
}