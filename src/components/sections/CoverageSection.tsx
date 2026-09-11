// ============================================================
// SSCSS — CoverageSection Component
// Displays service coverage areas and deployment capabilities.
// Content-driven: all data from content layer.
// Two sections: regions served and operational capabilities.
// Responsive grid layout with stagger/fadeUp animations.
// ============================================================

import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import SectionBackground from "@/components/common/SectionBackground";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

// ─── Coverage Item Shape ──────────────────────────────────────
export interface CoverageItem {
  icon: string;
  label: string;
  description: string;
}

// ─── Props ────────────────────────────────────────────────────
interface CoverageSectionProps {
  title: string;
  subtitle: string;
  regions: CoverageItem[];
  capabilities: CoverageItem[];
  className?: string;
}

// ─── CoverageSection ──────────────────────────────────────────
export default function CoverageSection({
  title,
  subtitle,
  regions,
  capabilities,
  className,
}: CoverageSectionProps) {
  if (regions.length === 0 && capabilities.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
aria-label="Coverage and Deployment"
    >
      <SectionBackground />
      <div className="section-container section-padding relative z-10">
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

          {/* Regions Served */}
          {regions.length > 0 && (
            <motion.div variants={fadeUp} className="mt-12">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {regions.map((region, index) => (
                  <Card
                    key={`region-${index}`}
                    className={cn(
                      "flex flex-col p-6 sm:p-8",
                      "border border-border bg-card",
                      "transition-all duration-300 ease-premium-out",
                      "hover:border-primary/20 hover:shadow-md",
                    )}
                  >
                    <div
                      className={cn(
                        "mb-4 flex size-12 items-center justify-center rounded-full",
                        "bg-primary-50 text-primary",
                      )}
                      aria-hidden="true"
                    >
                      {createElement(getIcon(region.icon), {
                        size: 22,
                        strokeWidth: 1.5,
                      })}
                    </div>
                    <h3
                      className={cn(
                        "font-heading text-lg font-semibold leading-snug tracking-tight",
                        "text-ink",
                      )}
                    >
                      {region.label}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        "text-muted-foreground",
                      )}
                    >
                      {region.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* Deployment Capabilities */}
          {capabilities.length > 0 && (
            <motion.div variants={fadeUp} className="mt-12">
              <h3
                className={cn(
                  "mb-8 text-center font-heading text-xl font-semibold tracking-tight",
                  "text-ink",
                )}
              >
                Deployment Capabilities
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((capability, index) => (
                  <Card
                    key={`capability-${index}`}
                    className={cn(
                      "flex flex-col items-center p-6 text-center",
                      "border border-border bg-card",
                      "transition-all duration-300 ease-premium-out",
                      "hover:border-primary/20 hover:shadow-md",
                    )}
                  >
                    <div
                      className={cn(
                        "mb-3 flex size-10 items-center justify-center rounded-full",
                        "bg-primary-50 text-primary",
                      )}
                      aria-hidden="true"
                    >
                      {createElement(getIcon(capability.icon), {
                        size: 20,
                        strokeWidth: 1.5,
                      })}
                    </div>
                    <h4
                      className={cn(
                        "font-heading text-sm font-semibold tracking-tight",
                        "text-ink",
                      )}
                    >
                      {capability.label}
                    </h4>
                    <p
                      className={cn(
                        "mt-1.5 text-xs leading-relaxed",
                        "text-muted-foreground",
                      )}
                    >
                      {capability.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

