import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeadlineReveal from "@/components/common/HeadlineReveal";
import OperationalImageSlider from "@/components/common/OperationalImageSlider";
import {
  entranceOfficeGuards,
  gateSecurity,
  techPark,
  techParkGuards,
} from "@/lib/site-images";
import { ROUTES } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOptions,
} from "@/lib/motion";

interface ClientsHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function ClientsHero({
  title,
  subtitle,
  className,
}: ClientsHeroProps) {
  return (
    <section
      className={cn(
        "overflow-hidden bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="clients-hero-title"
    >
      <div className="section-container py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOptions}
          className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c45a52]"
            >
              Client relationships
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
              id="clients-hero-title"
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
                data-analytics-cta="clients_hero_contact"
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
              className="mt-8 grid max-w-xl border-t border-[#2b2927] pt-6 sm:grid-cols-3"
            >
              <div className="pb-4 sm:pb-0 sm:pr-5">
                <p className="font-heading text-3xl font-semibold text-[#f5f1e8]">
                  50+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.13em] text-[#9a9590]">
                  Clients
                </p>
              </div>

              <div className="border-[#2b2927] py-4 sm:border-l sm:border-r sm:px-5 sm:py-0">
                <p className="font-heading text-3xl font-semibold text-[#f5f1e8]">
                  2008
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.13em] text-[#9a9590]">
                  Since
                </p>
              </div>

              <div className="pt-4 sm:pl-5 sm:pt-0">
                <p className="font-heading text-3xl font-semibold text-[#f5f1e8]">
                  100+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.13em] text-[#9a9590]">
                  Personnel
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            className="w-full"
          >
            <OperationalImageSlider
              label="SSCSS client-site security operations"
              slides={[
                {
                  src: techPark,
                  alt: "Corporate technology park",
                },
                {
                  src: entranceOfficeGuards,
                  alt: "Security personnel at a corporate office",
                },
                {
                  src: gateSecurity,
                  alt: "Security officer managing a corporate entrance",
                },
                {
                  src: techParkGuards,
                  alt: "Security personnel at a technology park",
                },
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}