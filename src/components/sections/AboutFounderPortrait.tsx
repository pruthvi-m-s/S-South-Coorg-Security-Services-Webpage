import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import HeroSkeleton from "@/components/common/HeroSkeleton";
import { ROUTES } from "@/lib/routes";
import type { FounderContent } from "@/content/founder";

interface AboutFounderPortraitProps {
  content: FounderContent;
  className?: string;
}

const ICONS = {
  Calendar,
  Award,
  Users,
  HeartHandshake,
  MapPin,
} as const;

export default function AboutFounderPortrait({
  content,
  className,
}: AboutFounderPortraitProps) {
  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="about-founder-title"
    >
      <div className="section-container section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-xl overflow-hidden bg-[#191918]">
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
              />
            </div>

            <figcaption className="absolute bottom-0 left-0 max-w-[85%] border-l-2 border-[#b52b22] bg-black/75 px-5 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-[#b4aea5]">
                {content.designation}
              </p>
              <p className="mt-1 font-heading text-2xl font-semibold text-[#f5f1e8]">
                {content.name}
              </p>
            </figcaption>
          </motion.figure>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              {content.eyebrow}
            </p>

            <h2
              id="about-founder-title"
              className="mt-3 max-w-2xl font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-6xl"
            >
              {content.heading}
            </h2>

            <div className="mt-7 inline-flex items-center gap-4 border-y border-[#2b2927] py-5">
              <span className="font-heading text-4xl font-semibold text-[#c45a52]">
                {content.experienceBadge}
              </span>

              <span className="max-w-xs text-xs leading-5 text-[#8f8981]">
                {content.experienceCaption}
              </span>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#b4aea5]">
              {content.message}
            </p>

            <blockquote className="mt-8 border-l-2 border-[#b52b22] pl-6">
              <p className="max-w-xl font-heading text-2xl font-semibold leading-tight tracking-tight text-[#f5f1e8] sm:text-3xl">
                “{content.quote}”
              </p>
            </blockquote>

            <div className="mt-8 grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2">
              {content.achievements.slice(0, 4).map((achievement) => {
                const Icon =
                  ICONS[
                    achievement.icon as keyof typeof ICONS
                  ] ?? Award;

                return (
                  <div
                    key={achievement.title}
                    className="bg-[#10100f] p-5"
                  >
                    <Icon
                      className="size-5 text-[#c45a52]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />

                    <p className="mt-4 text-sm leading-6 text-[#ded8cf]">
                      {achievement.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              to={ROUTES.contact}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c45a52] transition-colors hover:text-white"
            >
              Speak with the team
              <ArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}