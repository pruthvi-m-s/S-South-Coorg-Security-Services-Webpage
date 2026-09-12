import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface ServicesHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function ServicesHero({
  title,
  subtitle,
  className,
}: ServicesHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="services-hero-title"
    >
      <div className="section-container py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
            >
              Security · Manpower · Facility Support
            </motion.p>

            <HeadlineReveal
              as="h1"
              delay={0.12}
              className="mt-4 max-w-3xl font-heading text-5xl font-semibold leading-[1] tracking-[-0.045em] text-[#f5f1e8] sm:text-6xl lg:text-[4.5rem]"
            >
              {title}
            </HeadlineReveal>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to={`${ROUTES.contact}#contact-form`}
                data-analytics-cta="services_hero_contact"
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
                to={`${ROUTES.services}#service-groups`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore services
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="border-l-2 border-[#b52b22] pl-6 sm:pl-8"
          >
            <p className="max-w-2xl text-base leading-7 text-[#b4aea5] sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 grid gap-6 border-t border-[#2b2927] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Security
                </p>
                <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                  Guards, corporate, industrial, residential and event
                  security.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Facility &amp; Front-of-House
                </p>
                <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                  Housekeeping and front-office management.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Manpower
                </p>
                <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                  Skilled, unskilled and corporate staffing support.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a9590]">
                  Verification &amp; Investigation
                </p>
                <p className="mt-2 text-sm leading-6 text-[#ded8cf]">
                  Background verification and investigation services.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}