import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ServiceCard from "@/components/sections/ServiceCard";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Service } from "@/types";

interface RelatedServicesProps {
  title?: string;
  subtitle?: string;
  services: Pick<
    Service,
    "slug" | "name" | "shortTagline" | "icon"
  >[];
  className?: string;
}

export default function RelatedServices({
  title,
  subtitle,
  services,
  className,
}: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="related-services-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              {title && (
                <motion.h2
                  id="related-services-title"
                  variants={fadeUp}
                  className="max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
                >
                  {title}
                </motion.h2>
              )}

              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {services.slice(0, 4).map((service) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}