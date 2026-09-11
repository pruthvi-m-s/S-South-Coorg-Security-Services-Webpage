// ============================================================
// SSCSS — TrustStats Section
// Homepage trust indicators section combining:
//   1. Trust strip (certification badges)
//   2. Statistics grid (company stats)
// Renders directly below Hero on the Home page.
// All content driven entirely from the content layer.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/sections/TrustStrip";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Certification, Stat } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface TrustStatsProps {
  certifications: Certification[];
  stats: Stat[];
  pendingLabel?: string;
  className?: string;
}

// ─── TrustStats ───────────────────────────────────────────────
export default function TrustStats({
  certifications,
  stats,
  pendingLabel,
  className,
}: TrustStatsProps) {
  const hasContent = certifications.length > 0 || stats.length > 0;
  if (!hasContent) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Trust Indicators"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-col items-center"
        >
          {/* Section heading (visually hidden — for structure only) */}
          <motion.h2
            variants={fadeUp}
            className="sr-only"
          >
            Trust Indicators &amp; Company Statistics
          </motion.h2>

          {/* 1. Trust strip — certification badges */}
          {certifications.length > 0 && (
            <motion.div
              variants={fadeUp}
              className="mb-12 w-full md:mb-16"
            >
              <TrustStrip
                certifications={certifications}
                heading="Registered &amp; Licensed"
                pendingLabel={pendingLabel}
              />
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
}

