import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import type { HeroContent } from "@/types";
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
    tertiaryCta,
    heroImage,
  } = content;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const desktopSrcSet = [
    "/images/responsive/site/entrance-office-guards-480.webp 480w",
    "/images/responsive/site/entrance-office-guards-768.webp 768w",
    "/images/responsive/site/entrance-office-guards-1024.webp 1024w",
    "/images/responsive/site/entrance-office-guards-1400.webp 1400w",
  ].join(", ");

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
              className="mt-4 max-w-2xl font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.25rem]"
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

              {secondaryCta.href.startsWith("tel:") ? (
                <a
                  href={secondaryCta.href}
                  className="w-full sm:w-auto"
                  data-analytics-cta="hero_call"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Phone size={16} className="mr-1" aria-hidden="true" />
                    {secondaryCta.label}
                  </Button>
                </a>
              ) : (
                <Link to={secondaryCta.href} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    data-analytics-cta="hero_secondary"
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}

              {tertiaryCta && (
                <a
                  href={tertiaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                  data-analytics-cta="hero_whatsapp"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full gap-2 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] sm:w-auto"
                  >
                    <WhatsAppIcon className="size-4.5" />
                    {tertiaryCta.label}
                  </Button>
                </a>
              )}
            </motion.div>
          </div>

          <figure className="order-1 lg:order-2">
            <div className="relative overflow-hidden bg-card shadow-xl">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={
                    isMobile
                      ? "/images/hero/entrance-office-guards-mobile.webp"
                      : "/images/site/entrance-office-guards.webp"
                  }
                  srcSet={isMobile ? undefined : desktopSrcSet}
                  sizes={
                    isMobile
                      ? undefined
                      : "(min-width: 1024px) 58vw, 100vw"
                  }
                  alt={heroImage.alt}
                  width={isMobile ? 900 : 1400}
                  height={isMobile ? 563 : 875}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative size-full object-cover object-center"
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
          </figure>
        </div>
      </div>
    </section>
  );
}