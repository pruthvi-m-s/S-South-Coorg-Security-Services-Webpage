// ============================================================
// SSCSS — ClientsHero Component
// Page-level hero for the Clients page.
// Content-driven: title (h1) and subtitle from content layer.
// Two-column layout on desktop, stacked on mobile.
// Uses staggerContainer, fadeUp, scaleIn animations.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import OperationalImageSlider from "@/components/common/OperationalImageSlider";
import {
  entranceOfficeGuards,
  gateSecurity,
  techPark,
  techParkGuards,
} from "@/lib/site-images";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

// ─── Props ────────────────────────────────────────────────────
interface ClientsHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

// ─── ClientsHero ──────────────────────────────────────────────
export default function ClientsHero({
  title,
  subtitle,
  className,
}: ClientsHeroProps) {
  return (
    <section
      className={cn(
        "relative bg-muted",
        className,
      )}
      aria-label="Clients Hero"
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
            <HeadlineReveal
              as="h1"
              delay={0.1}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl",
                "text-ink",
              )}
            >
              {title}
            </HeadlineReveal>

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

          {/* Operational image showcase */}
          <motion.div
            variants={scaleIn}
            className="w-full"
          >
            <OperationalImageSlider
              label="SSCSS client-site security operations"
              slides={[
  {
    src: techPark,
    alt: "Corporate technology park",
  },
  {
    src: entranceOfficeGuards,
    alt: "Security personnel at a corporate office",
  },
  {
    src: gateSecurity,
    alt: "Security officer managing a corporate entrance",
  },
  {
    src: techParkGuards,
    alt: "Security personnel at a technology park",
  },
]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

