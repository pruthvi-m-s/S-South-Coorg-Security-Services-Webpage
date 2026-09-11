import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";
import type { FounderContent } from "@/content/founder";

interface FounderSectionProps {
  content: FounderContent;
  className?: string;
}

export default function FounderSection({
  content,
  className,
}: FounderSectionProps) {
  return (
    <section
      className={cn(
        "overflow-hidden bg-background",
        className,
      )}
      aria-labelledby="founder-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20"
        >
          <motion.figure
            variants={scaleIn}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-xl overflow-hidden bg-muted">
              <ImageWithSkeleton
                src={content.image.src}
                alt={content.image.alt}
                skeleton={
                  <HeroSkeleton className="size-full rounded-none" />
                }
                containerClassName="size-full"
                className="size-full object-cover"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>

            <div className="absolute bottom-0 left-0 border-l-2 border-primary bg-[#10100f]/90 px-5 py-4 text-[#f5f1e8] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b4aea5]">
                {content.designation}
              </p>
              <p className="mt-1 font-heading text-2xl font-semibold">
                {content.name}
              </p>
            </div>
          </motion.figure>

          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {content.eyebrow}
            </p>

            <h2
              id="founder-title"
              className="mt-3 max-w-2xl font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
            >
              {content.heading}
            </h2>

            <div className="mt-6 inline-flex items-center gap-3 border-y border-border py-4">
              <span className="font-heading text-3xl font-semibold text-primary">
                {content.experienceBadge}
              </span>

              <span className="max-w-xs text-xs leading-5 text-muted-foreground">
                {content.experienceCaption}
              </span>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground">
              {content.message}
            </p>

            <blockquote className="mt-8 border-l-2 border-primary pl-6">
              <p className="max-w-xl font-heading text-xl font-semibold leading-tight tracking-tight text-ink sm:text-2xl">
                &ldquo;{content.quote}&rdquo;
              </p>
            </blockquote>

            <div className="mt-8 grid gap-4 border-t border-border pt-7 sm:grid-cols-3">
              {content.achievements.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary">
                    <span className="sr-only">{item.icon}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {item.icon === "Calendar" && (
                        <>
                          <path d="M8 2v4" /><path d="M16 2v4" />
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M3 10h18" />
                        </>
                      )}
                      {item.icon === "Award" && (
                        <>
                          <circle cx="12" cy="8" r="6" />
                          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                        </>
                      )}
                      {item.icon === "MapPin" && (
                        <>
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </>
                      )}
                    </svg>
                  </div>
                  <p className="text-sm font-medium leading-6 text-ink">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to={ROUTES.about}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-800"
            >
              Learn about SSCSS
              <ArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}