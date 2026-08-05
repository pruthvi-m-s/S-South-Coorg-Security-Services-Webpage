// ============================================================
// SSCSS — GalleryHero Component
// Page-level hero for the Gallery page.
// Content-driven: title (h1) and subtitle from content layer.
// Two-column layout on desktop, stacked on mobile.
// Uses staggerContainer, fadeUp, scaleIn animations.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface GalleryHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

// ─── GalleryHero ──────────────────────────────────────────────
export default function GalleryHero({
  title,
  subtitle,
  className,
}: GalleryHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Gallery Hero"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          {/* Text Content */}
          <div>
            {/* Page Title */}
            <motion.h1
              variants={fadeUp}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl",
                "text-ink",
              )}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-5 text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Decorative Visual */}
          <motion.div
            variants={scaleIn}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div
              className={cn(
                "flex items-center justify-center",
                "rounded-2xl bg-primary-50 p-12",
              )}
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Image, label: "Team" },
                  { icon: Image, label: "Deploy" },
                  { icon: Image, label: "Train" },
                  { icon: Image, label: "Equip" },
                  { icon: Image, label: "Events" },
                  { icon: Image, label: "More" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={cn(
                      "flex size-14 flex-col items-center justify-center rounded-xl",
                      "bg-background text-primary",
                    )}
                    aria-hidden="true"
                  >
                    <item.icon size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span className="mt-0.5 text-[10px] font-medium leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

