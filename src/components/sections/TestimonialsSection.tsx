// ============================================================
// SSCSS — Testimonials Section
// Homepage testimonials grid.
// No carousel. No slider. Renders all testimonials from content.
// Responsive: 3 cols desktop, 2 cols tablet, 1 col mobile.
// Content-driven: all copy from the content layer.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TestimonialCard from "@/components/sections/TestimonialCard";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Testimonial } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

// ─── Default content (editable) ───────────────────────────────
const DEFAULT_TITLE = "What Our Clients Say";
const DEFAULT_SUBTITLE =
  "Hear from the organizations that trust SSCSS for their security and manpower needs.";

// ─── TestimonialsSection ──────────────────────────────────────
export default function TestimonialsSection({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const publishedTestimonials = testimonials.filter((testimonial) => !testimonial.isPlaceholder);
  if (publishedTestimonials.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Testimonials"
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
            {title}
          </motion.h2>

          {/* Section Intro */}
          <motion.p
            variants={fadeUp}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed",
              "sm:text-lg",
              "text-muted-foreground",
            )}
          >
            {subtitle}
          </motion.p>

          {/* Testimonials Grid — responsive: 3/2/1 columns */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publishedTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

