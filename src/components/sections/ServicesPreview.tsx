// ============================================================
// SSCSS — ServicesPreview Section
// Homepage services preview grid rendered below TrustStats.
// Content-driven: all copy from the content layer (SERVICES).
// Responsive: 4 cols desktop, 2 cols tablet, 1 col mobile.
// ============================================================

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/sections/ServiceCard";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import { ROUTES } from "@/lib/routes";
import type { Service } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface ServicesPreviewProps {
  services: Service[];
  className?: string;
}

// ─── Content (editable heading / intro) ───────────────────────
const SECTION_HEADING = "Our Security & Facility Services";
const SECTION_INTRO =
  "From trained security personnel to professional housekeeping and investigative services, we offer comprehensive solutions to protect and manage your premises.";

// ─── ServicesPreview ──────────────────────────────────────────
export default function ServicesPreview({
  services,
  className,
}: ServicesPreviewProps) {
  if (services.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Our Services"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Section Heading */}
          <motion.h2
            variants={fadeUp}
            className={cn(
              "font-heading text-3xl font-semibold leading-tight tracking-tight",
              "sm:text-4xl",
              "text-ink text-center",
            )}
          >
            {SECTION_HEADING}
          </motion.h2>

          {/* Section Intro */}
          <motion.p
            variants={fadeUp}
            className={cn(
              "mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed",
              "sm:text-lg",
              "text-muted-foreground",
            )}
          >
            {SECTION_INTRO}
          </motion.p>

          {/* Services Grid — responsive: 4/2/1 columns */}
          <motion.div
            variants={fadeUp}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </motion.div>

          {/* View All Services CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex justify-center"
          >
            <Link to={ROUTES.services}>
              <Button
                variant="outline"
                size="lg"
                className="group/cta"
              >
                View All Services
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="ml-1.5 transition-transform duration-300 ease-premium-out group-hover/cta:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

