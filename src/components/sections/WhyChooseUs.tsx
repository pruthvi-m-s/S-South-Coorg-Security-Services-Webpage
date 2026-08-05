// ============================================================
// SSCSS — WhyChooseUs Section
// Homepage "Why Choose SSCSS" section.
// Content-driven: all copy from the content layer (ABOUT).
// Responsive: 2 cols desktop, 2 cols tablet, 1 col mobile.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import WhyChooseCard from "@/components/sections/WhyChooseCard";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { WhyChooseUsItem } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface WhyChooseUsProps {
  title: string;
  subtitle: string;
  items: WhyChooseUsItem[];
  className?: string;
}

// ─── WhyChooseUs ──────────────────────────────────────────────
export default function WhyChooseUs({
  title,
  subtitle,
  items,
  className,
}: WhyChooseUsProps) {
  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Why Choose Us"
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

          {/* Features Grid — responsive: 2/2/1 columns */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {items.map((item, index) => (
                <WhyChooseCard
                  key={`${item.title}-${index}`}
                  item={item}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

