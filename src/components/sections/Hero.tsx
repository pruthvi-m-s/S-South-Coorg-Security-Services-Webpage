import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import type { HeroContent } from "@/types";
import { CONTACT } from "@/content";
import { fadeUp } from "@/lib/motion";

interface HeroProps {
  content: HeroContent;
  className?: string;
}

export default function Hero({ content, className }: HeroProps) {
  const {
    eyebrow,
    headline,
    description,
    primaryCta,
    secondaryCta,
    heroImage,
  } = content;

  const [loaded, setLoaded] = useState(false);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100vh-var(--header-height))] items-center overflow-hidden bg-background",
        className,
      )}
      aria-label="Hero"
    >
      <div className="section-container w-full py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-primary"
            >
              {eyebrow}
            </motion.p>

            <HeadlineReveal
              as="h1"
              delay={0.32}
              className="mt-4 max-w-2xl font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.35rem]"
            >
              {headline}
            </HeadlineReveal>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.65 }}
              className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.82 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link to={primaryCta.href} className="w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                  data-analytics-cta="hero_primary"
                >
                  {primaryCta.label}
                  <ArrowRight
                    size={18}
                    className="ml-1"
                    aria-hidden="true"
                  />
                </Button>
              </Link>

              <Link to={secondaryCta.href} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  data-analytics-cta="hero_services"
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            </motion.div>

            {CONTACT.phone && (
              <motion.a
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.96 }}
                href={`tel:${CONTACT.phone}`}
                data-analytics-component="hero_phone"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-border">
                  <Phone size={14} aria-hidden="true" />
                </span>
                <span>Prefer to talk now? {CONTACT.phone}</span>
              </motion.a>
            )}
          </div>

          <motion.figure
            initial={{ opacity: 0, scale: 1.025, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden bg-card shadow-xl">
              <div className="relative aspect-[16/10] w-full">
                {!loaded && (
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                  >
                    <HeroSkeleton className="size-full rounded-none" />
                  </div>
                )}

                <img
                  src={
                    isMobile
                      ? "/images/hero/entrance-office-guards-mobile.webp"
                      : heroImage.src
                  }
                  alt={heroImage.alt}
                  width={isMobile ? 900 : 1400}
                  height={isMobile ? 563 : 875}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onLoad={() => setLoaded(true)}
                  className={cn(
                    "relative size-full object-cover object-center transition-opacity duration-500 ease-premium-out",
                    loaded ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="absolute bottom-0 left-0 max-w-sm border-l-2 border-primary bg-black/70 px-5 py-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                  Security • Manpower • Facility Support
                </p>
              </div>
            </div>

            {heroImage.isPlaceholder && heroImage.credit && (
              <figcaption className="sr-only">
                {heroImage.credit}
              </figcaption>
            )}
          </motion.figure>
        </div>
      </div>
    </section>
  );
}