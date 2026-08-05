// ============================================================
// SSCSS — Timeline Component
// Vertical timeline with year markers, connecting line,
// and content cards for each CompanyHistoryEntry.
// Content-driven: all data from content layer.
// Responsive: alternating left/right on desktop, all left on mobile.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { CompanyHistoryEntry } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface TimelineProps {
  title: string;
  entries: CompanyHistoryEntry[];
  className?: string;
}

// ─── Timeline ─────────────────────────────────────────────────
export default function Timeline({
  title,
  entries,
  className,
}: TimelineProps) {
  if (entries.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Company History Timeline"
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

          {/* Timeline */}
          <div className="relative mt-14">
            {/* Vertical center line (desktop) — hidden on mobile */}
            <div
              className={cn(
                "absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2",
                "md:block",
                "bg-border",
              )}
              aria-hidden="true"
            />

            {/* Mobile left line */}
            <div
              className={cn(
                "absolute left-[19px] top-0 h-full w-px",
                "md:hidden",
                "bg-border",
              )}
              aria-hidden="true"
            />

            {/* Timeline entries */}
            <div className="relative space-y-10 md:space-y-16">
              {entries.map((entry, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={entry.year}
                    variants={fadeUp}
                    className={cn(
                      "relative flex flex-col md:flex-row",
                      "items-start",
                    )}
                  >
                    {/* ─── Desktop layout: alternating ───── */}
                    {/* Content Card */}
                    <div
                      className={cn(
                        "w-full md:w-[calc(50%-2rem)]",
                        isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12",
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-lg border border-border bg-card p-6",
                          "transition-all duration-300 ease-premium-out",
                          "hover:border-primary/20 hover:shadow-md",
                          "md:p-8",
                        )}
                      >
                        {/* Year badge */}
                        <span
                          className={cn(
                            "mb-2 inline-block rounded-full bg-primary-50 px-3 py-1",
                            "font-heading text-sm font-semibold",
                            "text-primary",
                          )}
                        >
                          {entry.year}
                        </span>

                        {/* Entry title */}
                        <h3
                          className={cn(
                            "font-heading text-lg font-semibold leading-snug tracking-tight",
                            "text-ink",
                          )}
                        >
                          {entry.title}
                        </h3>

                        {/* Entry description */}
                        <p
                          className={cn(
                            "mt-2 text-sm leading-relaxed",
                            "text-muted-foreground",
                          )}
                        >
                          {entry.description}
                        </p>
                      </div>
                    </div>

                    {/* ─── Timeline dot ──────────────────── */}
                    <div
                      className={cn(
                        "absolute left-[11px] top-6 z-10",
                        "md:left-1/2 md:-translate-x-1/2",
                        "flex items-center justify-center",
                      )}
                      aria-hidden="true"
                    >
                      <div
                        className={cn(
                          "size-[16px] rounded-full",
                          "border-2 border-primary bg-background",
                        )}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

