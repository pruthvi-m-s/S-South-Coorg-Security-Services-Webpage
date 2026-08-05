// ============================================================
// SSCSS — KeyFeatures Component
// Displays the key benefits / features of a service.
// Content-driven: title, subtitle, and feature items from content layer.
// Responsive grid: 2 cols desktop, 1 col mobile.
// Each feature card has an icon, title, and description.
// Uses staggerContainer, fadeUp animations.
// ============================================================

import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ServiceBenefit } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface KeyFeaturesProps {
  title?: string;
  subtitle?: string;
  features: ServiceBenefit[];
  className?: string;
}

// ─── KeyFeatures ──────────────────────────────────────────────
export default function KeyFeatures({
  title,
  subtitle,
  features,
  className,
}: KeyFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Key Features"
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

          {/* Features Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Card
                  key={`${feature.title}-${index}`}
                  className={cn(
                    "flex flex-col p-6 sm:p-8",
                    "border border-border bg-card",
                    "transition-all duration-300 ease-premium-out",
                    "hover:border-primary/20 hover:shadow-md",
                  )}
                >
                  {/* Feature Icon */}
                  <div
                    className={cn(
                      "mb-4 flex size-12 items-center justify-center rounded-full",
                      "bg-primary-50 text-primary",
                    )}
                    aria-hidden="true"
                  >
                    {createElement(getIcon(feature.icon), {
                      size: 22,
                      strokeWidth: 1.5,
                    })}
                  </div>

                  {/* Feature Title */}
                  <h3
                    className={cn(
                      "font-heading text-lg font-semibold leading-snug tracking-tight",
                      "text-ink",
                    )}
                  >
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p
                    className={cn(
                      "mt-2 flex-1 text-sm leading-relaxed",
                      "text-muted-foreground",
                    )}
                  >
                    {feature.description}
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

