// ============================================================
// SSCSS — Industries Page
// 7 sections in order:
//   1. Industries Hero
//   2. Introduction
//   3. Industries Grid (all 12 industries)
//   4. Why Industries Choose SSCSS
//   5. Coverage & Deployment
//   6. FAQ Preview (industry-related FAQs)
//   7. Final CTA
// Content-driven: all copy from content layer. No hardcoded text.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IndustriesHero from "@/components/sections/IndustriesHero";
import IndustryCard from "@/components/sections/IndustryCard";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoverageSection from "@/components/sections/CoverageSection";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import { ROUTES } from "@/lib/routes";
import {
  INDUSTRIES,
  INDUSTRIES_PAGE,
  FAQS,
  FINAL_CTA,
} from "@/content";

export default function IndustriesPage() {
  // Filter industry-related FAQs: Coverage category + first 2 General FAQs about services
  const industryFaqs = FAQS.filter(
    (faq) =>
      faq.category === "Coverage" ||
      faq.id === "faq-general-1" ||
      faq.id === "faq-process-1" ||
      faq.id === "faq-process-2",
  );

  return (
    <>
      {/* 1. Industries Hero */}
      <IndustriesHero
        title={INDUSTRIES_PAGE.hero.title}
        subtitle={INDUSTRIES_PAGE.hero.subtitle}
      />

      {/* 2. Introduction */}
      <section
        className="relative bg-background"
        aria-label="Industries Introduction"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h2
              variants={fadeUp}
              className={cn(
                "font-heading text-3xl font-semibold leading-tight tracking-tight",
                "sm:text-4xl",
                "text-ink",
              )}
            >
              {INDUSTRIES_PAGE.intro.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-4 text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {INDUSTRIES_PAGE.intro.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. Industries Grid (all 12 industries) */}
      <section
        className="relative bg-muted"
        aria-label="Industries We Serve Grid"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {INDUSTRIES.map((industry) => (
                  <IndustryCard
                    key={industry.slug}
                    industry={industry}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Industries Choose SSCSS */}
      <WhyChooseUs
        title={INDUSTRIES_PAGE.whyChooseUs.title}
        subtitle={INDUSTRIES_PAGE.whyChooseUs.subtitle}
        items={INDUSTRIES_PAGE.whyChooseUs.items}
      />

      {/* 5. Coverage & Deployment */}
      <CoverageSection
        title={INDUSTRIES_PAGE.coverage.title}
        subtitle={INDUSTRIES_PAGE.coverage.subtitle}
        regions={INDUSTRIES_PAGE.coverage.regions}
        capabilities={INDUSTRIES_PAGE.coverage.capabilities}
      />

      {/* 6. FAQ Preview — industry-related FAQs */}
      <FaqPreview
        title={INDUSTRIES_PAGE.faqPreview.title}
        subtitle={INDUSTRIES_PAGE.faqPreview.subtitle}
        faqs={industryFaqs}
        count={4}
        viewAllHref={ROUTES.faqs}
      />

      {/* 7. Final CTA */}
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}

