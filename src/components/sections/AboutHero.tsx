// ============================================================
// SSCSS — About Hero Section
// Page-level hero for the About page.
// Content-driven: heading, subtitle, and image from content layer.
// Simpler than the homepage hero — no CTAs, just introduces the page.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ImageRef } from "@/types";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface AboutHeroProps {
  title: string;
  subtitle: string;
  image: ImageRef;
  className?: string;
}

// ─── AboutHero ────────────────────────────────────────────────
export default function AboutHero({
  title,
  subtitle,
  image,
  className,
}: AboutHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background",
        "pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24",
        className,
      )}
      aria-label="About Hero"
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* ─── Left Content ──────────────────────────── */}
          <div>
            {/* Page label */}
            <motion.span
              variants={fadeUp}
              className={cn(
                "mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em]",
                "text-primary",
              )}
            >
              About Us
            </motion.span>

            {/* Heading — H1 for the About page */}
            <motion.h1
              variants={fadeUp}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl lg:text-6xl",
                "text-ink",
              )}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-5 max-w-xl text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* ─── Right Visual ──────────────────────────── */}
          <motion.div
            variants={scaleIn}
            className="flex justify-center"
          >
            <figure className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className={cn(
                  "h-auto w-full max-w-lg rounded-lg object-cover",
                  "shadow-lg",
                )}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              {image.isPlaceholder && image.credit && (
                <figcaption className="sr-only">{image.credit}</figcaption>
              )}
            </figure>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

