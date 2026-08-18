// ============================================================
// SSCSS — GalleryHero Component
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import OperationalImageSlider from "@/components/common/OperationalImageSlider";
import {
  corporateEvent,
  receptionGuard,
  officeFront,
  entranceDark,
} from "@/lib/site-images";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

interface GalleryHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function GalleryHero({
  title,
  subtitle,
  className,
}: GalleryHeroProps) {
  return (
    <section
      className={cn("relative bg-muted", className)}
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
          <div>
            <HeadlineReveal
              as="h1"
              delay={0.1}
              className={cn(
                "font-heading text-4xl font-semibold leading-tight tracking-tight",
                "sm:text-5xl",
                "text-ink"
              )}
            >
              {title}
            </HeadlineReveal>

            <motion.p
              variants={fadeUp}
              className={cn(
                "mt-5 text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground"
              )}
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div variants={scaleIn} className="w-full">
            <OperationalImageSlider
              label="SSCSS operations gallery showcase"
              slides={[
                {
                  src: corporateEvent,
                  alt: "Corporate event security operations",
                },
                {
                  src: receptionGuard,
                  alt: "Security officer at a reception desk",
                },
                {
                  src: officeFront,
                  alt: "Corporate office entrance",
                },
                {
                  src: entranceDark,
                  alt: "Corporate property entrance at night",
                },
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}