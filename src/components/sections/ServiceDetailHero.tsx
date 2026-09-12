import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import type { ImageRef } from "@/types";
import { ROUTES } from "@/lib/routes";
import { CONTACT } from "@/content";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

interface ServiceDetailHeroProps {
  name: string;
  tagline: string;
  image?: ImageRef;
  ctaLabel?: string;
  className?: string;
}

export default function ServiceDetailHero({
  name,
  tagline,
  image,
  ctaLabel = "Discuss your requirement",
  className,
}: ServiceDetailHeroProps) {
  const whatsappNumber = CONTACT.whatsapp?.replace(/\D/g, "");

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="service-detail-title"
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
              SSCSS Service
            </motion.p>

            <div className="mt-4">
              <HeadlineReveal
                as="h1"
                delay={0.12}
                className="max-w-2xl font-heading text-5xl font-semibold leading-[0.99] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.25rem]"
              >
                {name}
              </HeadlineReveal>
            </div>

            <motion.p
              id="service-detail-title"
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-7 text-[#b4aea5] sm:text-lg"
            >
              {tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                to={`${ROUTES.contact}#contact-form`}
                data-analytics-cta="service_detail_contact"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {ctaLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </Link>

              {CONTACT.phone && (
                <a
                  href={`tel:${CONTACT.phone}`}
                  data-analytics-cta="service_detail_call"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call Us Now
                  </Button>
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-cta="service_detail_whatsapp"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full gap-2 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] sm:w-auto"
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp Us
                  </Button>
                </a>
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid max-w-xl gap-4 border-t border-[#2b2927] pt-6 sm:grid-cols-3"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Requirement
                </p>
                <p className="mt-1 text-sm text-[#ded8cf]">
                  Tailored to your site
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Deployment
                </p>
                <p className="mt-1 text-sm text-[#ded8cf]">
                  Structured and planned
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Support
                </p>
                <p className="mt-1 text-sm text-[#ded8cf]">
                  Ongoing coordination
                </p>
              </div>
            </motion.div>
          </div>

          {image && (
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

              <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/65 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 backdrop-blur-sm">
                {name}
              </figcaption>

              {image.isPlaceholder && image.credit && (
                <span className="sr-only">
                  {image.credit}
                </span>
              )}
            </motion.figure>
          )}
        </motion.div>
      </div>
    </section>
  );
}
