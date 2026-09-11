import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface IndustriesHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function IndustriesHero({
  title,
  subtitle,
  className,
}: IndustriesHeroProps) {
  return (
    <section
      className={cn(
        "overflow-hidden bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="industries-hero-title"
    >
      <div className="section-container py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
            >
              INDUSTRIES WE SUPPORT
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
          </div>

          <div>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl border-l-2 border-[#b52b22] pl-6 text-base leading-7 text-[#b4aea5] sm:text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7"
            >
              <Link
                to={`${ROUTES.contact}#contact-form`}
                data-analytics-cta="industries_hero_contact"
                className="inline-flex min-h-12 items-center gap-2 bg-[#b52b22] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#8f1912]"
              >
                Discuss your requirement
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}