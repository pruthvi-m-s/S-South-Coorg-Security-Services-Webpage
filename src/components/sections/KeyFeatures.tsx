import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ServiceBenefit } from "@/types";

interface KeyFeaturesProps {
  title?: string;
  subtitle?: string;
  features: ServiceBenefit[];
  className?: string;
}

export default function KeyFeatures({
  title,
  subtitle,
  features,
  className,
}: KeyFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="service-features-title"
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
                  id="service-features-title"
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
              className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
            >
              {features.map((feature, index) => (
                <article
                  key={`${feature.title}-${index}`}
                  className="relative bg-[#191918] p-6 sm:p-7"
                >
                  <span className="absolute right-5 top-5 text-xs font-semibold tracking-[0.14em] text-[#c45a52]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="mb-6 flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#d45a51]"
                    aria-hidden="true"
                  >
                    {createElement(getIcon(feature.icon), {
                      size: 20,
                      strokeWidth: 1.5,
                    })}
                  </div>

                  <h3 className="font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#a7a19a]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}