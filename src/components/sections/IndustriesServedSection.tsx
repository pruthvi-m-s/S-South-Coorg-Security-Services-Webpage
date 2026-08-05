// ============================================================
// SSCSS — IndustriesServedSection Component
// Displays the industries relevant to a specific service.
// Resolves industry slugs from the content layer to full
// Industry objects and renders them as styled cards.
// Content-driven: all data from content layer.
// Responsive grid: 3 cols desktop, 2 cols tablet, 1 col mobile.
// Uses staggerContainer, fadeUp animations.
// ============================================================

import { createElement } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Industry } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface IndustriesServedSectionProps {
  title?: string;
  subtitle?: string;
  industries: Industry[];
  className?: string;
}

// ─── IndustriesServedSection ──────────────────────────────────
export default function IndustriesServedSection({
  title,
  subtitle,
  industries,
  className,
}: IndustriesServedSectionProps) {
  if (industries.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Industries Served"
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

          {/* Industries Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <Card
                  key={industry.slug}
                  className={cn(
                    "flex flex-col p-6",
                    "border border-border bg-card",
                    "transition-all duration-300 ease-premium-out",
                    "hover:border-primary/20 hover:shadow-md",
                  )}
                >
                  {/* Industry Icon */}
                  <div
                    className={cn(
                      "mb-3 flex size-10 items-center justify-center rounded-full",
                      "bg-primary-50 text-primary",
                    )}
                    aria-hidden="true"
                  >
                    {createElement(getIcon(industry.icon), {
                      size: 20,
                      strokeWidth: 1.5,
                    })}
                  </div>

                  {/* Industry Name */}
                  <h3
                    className={cn(
                      "font-heading text-base font-semibold leading-snug tracking-tight",
                      "text-ink",
                    )}
                  >
                    <Link to={ROUTES.industries} className="transition-colors hover:text-primary">
                      {industry.name}
                    </Link>
                  </h3>

                  {/* Industry Description */}
                  <p
                    className={cn(
                      "mt-1.5 text-sm leading-relaxed",
                      "text-muted-foreground",
                    )}
                  >
                    {industry.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

