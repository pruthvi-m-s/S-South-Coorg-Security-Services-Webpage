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

            <div className="absolute bottom-0 left-0 bg-[#10100f] px-5 py-4 text-[#f5f1e8]">
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
              className="mt-3 max-w-2xl font-heading text-4xl font-semibold tracking-tight text-ink sm:text-6xl"
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
              <p className="max-w-xl font-heading text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
                “{content.quote}”
              </p>
            </blockquote>

            <div className="mt-8 grid gap-3 border-t border-border pt-7 sm:grid-cols-2">
              {content.achievements.slice(0, 4).map((item) => (
                <div
                  key={item.title}
                  className="border-b border-border pb-3"
                >
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