// ============================================================
// SSCSS — Services Hub Page
// 7 sections in order:
//   1. Services Hero
//   2. Services Grid (all 13 services)
//   3. Why Choose Our Services (reused component)
//   4. Service Process (reused component)
//   5. FAQ Preview (first 5 FAQs)
//   6. Final CTA (reused component)
// Content-driven: all copy from content layer. No hardcoded text.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ServicesHero from "@/components/sections/ServicesHero";
import ServiceCard from "@/components/sections/ServiceCard";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import {
  SERVICES,
  SERVICES_HUB,
  ABOUT,
  FAQS,
  FINAL_CTA,
} from "@/content";
import { ROUTES } from "@/lib/routes";

export default function ServicesHubPage() {
  // First 5 FAQs for preview
  const faqPreviewItems = FAQS.slice(0, 5);

  return (
    <>
      {/* 1. Services Hero */}
      <ServicesHero
        title={SERVICES_HUB.hero.title}
        subtitle={SERVICES_HUB.hero.subtitle}
      />

      {/* 2. Complete Services Grid (all 13 services) */}
      <section
        className="relative bg-background"
        aria-label="Complete Range of Services"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {/* Section Heading */}
            <motion.h2
              variants={fadeUp}
              className={cn(
                "font-heading text-3xl font-semibold leading-tight tracking-tight",
                "sm:text-4xl",
                "text-ink text-center",
              )}
            >
              {SERVICES_HUB.intro.title}
            </motion.h2>

            {/* Section Description */}
            <motion.p
              variants={fadeUp}
              className={cn(
                "mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {SERVICES_HUB.intro.description}
            </motion.p>

            {/* Services Grid — responsive: 3/2/1 columns */}
            <motion.div
              variants={fadeUp}
              className="mt-12"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Our Services */}
      <WhyChooseUs
        title={ABOUT.whyChooseUs.title}
        subtitle={ABOUT.whyChooseUs.subtitle}
        items={ABOUT.whyChooseUs.items}
      />

      {/* 4. Service Process */}
      <ProcessSection
        title={ABOUT.process.title}
        subtitle={ABOUT.process.subtitle}
        steps={ABOUT.process.steps}
      />

      {/* 5. FAQ Preview (first 5 FAQs) */}
      <FaqPreview
        title={SERVICES_HUB.faqPreview.title}
        subtitle={SERVICES_HUB.faqPreview.subtitle}
        faqs={faqPreviewItems}
        count={5}
        viewAllHref={ROUTES.faqs}
      />

      {/* 6. Final CTA */}
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}

