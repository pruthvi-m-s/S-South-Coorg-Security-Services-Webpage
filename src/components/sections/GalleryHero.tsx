import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import OperationalImageSlider from "@/components/common/OperationalImageSlider";
import {
  corporateEvent,
  receptionGuard,
  officeFront,
  entranceDark,
} from "@/lib/site-images";
import { ROUTES } from "@/lib/routes";
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
      className={cn(
        "overflow-hidden bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="gallery-hero-title"
    >
      <div className="section-container py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
            >
              Visual record
            </motion.p>

            <div className="mt-4">
              <HeadlineReveal
                as="h1"
                delay={0.1}
                className="max-w-3xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.5rem]"
              >
                {title}
              </HeadlineReveal>
            </div>

            <motion.p
              id="gallery-hero-title"
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-7 text-[#b4aea5] sm:text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to={`${ROUTES.contact}#contact-form`}
                data-analytics-cta="gallery_hero_contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#b52b22] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8f1912]"
              >
                Discuss your requirement
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to={ROUTES.services}
                className="inline-flex min-h-12 items-center justify-center border border-[#3a3835] px-5 text-sm font-semibold text-[#f5f1e8] transition-colors hover:border-[#b52b22]"
              >
                Explore services
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            className="w-full"
          >
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