// ============================================================
// SSCSS — Gallery Page
// 7 sections in order:
//   1. Gallery Hero
//   2. Introduction (A Glimpse Into SSCSS)
//   3. Gallery Categories + Image Grid (with lightbox)
//   4. Video Gallery (conditionally rendered if videos exist)
//   5. Trust / Company Highlights
//   6. Final CTA
// Content-driven: all copy from content layer. No hardcoded text.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import GalleryHero from "@/components/sections/GalleryHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import TrustHighlights from "@/components/sections/TrustHighlights";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import {
  GALLERY,
  FINAL_CTA,
} from "@/content";

export default function GalleryPage() {
  return (
    <>
      {/* 1. Gallery Hero */}
      <GalleryHero
        title={GALLERY.hero.title}
        subtitle={GALLERY.hero.subtitle}
      />

      {/* 2. Introduction */}
      <section
        className="relative bg-background"
        aria-label="Gallery Introduction"
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
              {GALLERY.intro.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-4 text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {GALLERY.intro.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. Gallery Categories + Image Grid with Lightbox */}
      <GalleryGrid
        title="Our Photo Collection"
        subtitle="Browse through images organized by category."
        categories={GALLERY.categories}
        images={GALLERY.images}
        videos={GALLERY.videos}
      />

      {/* 5. Trust / Company Highlights */}
      <TrustHighlights
        title={GALLERY.trustHighlights.title}
        subtitle={GALLERY.trustHighlights.subtitle}
        items={GALLERY.trustHighlights.items}
      />

      {/* 6. Final CTA */}
      <FinalCtaSection content={FINAL_CTA} />
    </>
  );
}

