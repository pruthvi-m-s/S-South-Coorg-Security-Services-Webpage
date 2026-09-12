import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import type { ImageRef } from "@/types";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  image: ImageRef;
  className?: string;
}

export default function AboutHero({
  title,
  subtitle,
  image,
  className,
}: AboutHeroProps) {
  return (
    <section
      className={cn(
        "overflow-hidden bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="about-hero-title"
    >
      <div className="section-container py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c45a52]"
            >
              About SSCSS
            </motion.p>

            <div className="mt-4">
              <HeadlineReveal
                as="h1"
                delay={0.12}
                className="max-w-2xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.25rem]"
              >
                {title}
              </HeadlineReveal>
            </div>

            <motion.p
              id="about-hero-title"
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
                data-analytics-cta="about_hero_contact"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Discuss your requirement
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </Link>

              <Link
                to={ROUTES.services}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore our services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid max-w-xl gap-4 border-t border-[#2b2927] pt-6 sm:grid-cols-3"
            >
              <div>
                <p className="text-2xl font-semibold text-[#f5f1e8]">
                  2008
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#9a9590]">
                  Founded
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#f5f1e8]">
                  100+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#9a9590]">
                  Personnel
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[#f5f1e8]">
                  50+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#9a9590]">
                  Clients
                </p>
              </div>
            </motion.div>
          </div>

          <motion.figure
            variants={scaleIn}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[#191918]">
              <ImageWithSkeleton
                src={image.src}
                alt={image.alt}
                skeleton={
                  <HeroSkeleton className="size-full rounded-none" />
                }
                containerClassName="size-full"
                className="size-full object-cover"
                width={1200}
                height={900}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
              aria-hidden="true"
            />

            <figcaption className="absolute bottom-0 left-0 border-l-2 border-[#b52b22] bg-black/70 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 backdrop-blur-sm">
              S South Coorg Security Services
            </figcaption>

            {image.isPlaceholder && image.credit && (
              <span className="sr-only">{image.credit}</span>
            )}
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}