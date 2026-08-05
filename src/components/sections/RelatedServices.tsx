// ============================================================
// SSCSS — RelatedServices Component
// Displays 3–4 related service cards for a service detail page.
// Content-driven: uses getRelatedServices() from the content layer.
// Excludes the current service automatically.
// Responsive grid: 3 cols desktop, 2 cols tablet, 1 col mobile.
// Uses staggerContainer, fadeUp animations.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ServiceCard from "@/components/sections/ServiceCard";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Service } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface RelatedServicesProps {
  title?: string;
  subtitle?: string;
  services: Pick<Service, "slug" | "name" | "shortTagline" | "icon">[];
  className?: string;
}

// ─── RelatedServices ──────────────────────────────────────────
export default function RelatedServices({
  title,
  subtitle,
  services,
  className,
}: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Related Services"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Section Heading */}
          {title && (
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
          )}

          {/* Section Subtitle */}
          {subtitle && (
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
          )}

          {/* Related Services Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

