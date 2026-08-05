// ============================================================
// SSCSS — Clients Page
// 7 sections in order:
//   1. Clients Hero
//   2. Introduction (Trusted By)
//   3. Client Categories Grid
//   4. Success Stories / Testimonials
//   5. Why Clients Stay With SSCSS
//   6. Engagement Process
//   7. Final CTA
// Content-driven: all copy from content layer. No hardcoded text.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ClientsHero from "@/components/sections/ClientsHero";
import ClientCategoryCard from "@/components/sections/ClientCategoryCard";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import {
  CLIENTS_PAGE,
  TESTIMONIALS,
  FINAL_CTA,
} from "@/content";

export default function ClientsPage() {
  return (
    <>
      {/* 1. Clients Hero */}
      <ClientsHero
        title={CLIENTS_PAGE.hero.title}
        subtitle={CLIENTS_PAGE.hero.subtitle}
      />

      {/* 2. Introduction */}
      <section
        className="relative bg-background"
        aria-label="Trusted By Introduction"
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
              {CLIENTS_PAGE.intro.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-4 text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {CLIENTS_PAGE.intro.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. Client Categories Grid */}
      <section
        className="relative bg-muted"
        aria-label="Client Categories Grid"
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
                {CLIENTS_PAGE.categories.map((category) => (
                  <ClientCategoryCard
                    key={category.title}
                    category={category}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Success Stories / Testimonials */}
      <TestimonialsSection
        title={CLIENTS_PAGE.successStories.title}
        subtitle={CLIENTS_PAGE.successStories.subtitle}
        testimonials={TESTIMONIALS}
      />

      {/* 5. Why Clients Stay With SSCSS */}
      <WhyChooseUs
        title={CLIENTS_PAGE.whyClientsStay.title}
        subtitle={CLIENTS_PAGE.whyClientsStay.subtitle}
        items={CLIENTS_PAGE.whyClientsStay.items}
      />

      {/* 6. Engagement Process */}
      <ProcessSection
        title={CLIENTS_PAGE.process.title}
        subtitle={CLIENTS_PAGE.process.subtitle}
        steps={CLIENTS_PAGE.process.steps}
      />

      {/* 7. Final CTA */}
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}

