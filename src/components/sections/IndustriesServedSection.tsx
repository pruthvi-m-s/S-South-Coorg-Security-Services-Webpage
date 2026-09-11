import { createElement } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { Industry } from "@/types";

interface IndustriesServedSectionProps {
  title?: string;
  subtitle?: string;
  industries: Industry[];
  className?: string;
}

export default function IndustriesServedSection({
  title,
  subtitle,
  industries,
  className,
}: IndustriesServedSectionProps) {
  if (industries.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="service-industries-title"
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
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
              >
                Where it fits
              </motion.p>

              {title && (
                <motion.h2
                  id="service-industries-title"
                  variants={fadeUp}
                  className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
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
              {industries.map((industry) => (
                <article
                  key={industry.slug}
                  className="bg-[#191918] p-6 transition-colors duration-300 hover:bg-[#211f1d]"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#3a3835] bg-[#10100f] text-[#c45a52]"
                      aria-hidden="true"
                    >
                      {createElement(getIcon(industry.icon), {
                        size: 18,
                        strokeWidth: 1.5,
                      })}
                    </span>

                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                        {industry.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#99938c]">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={ROUTES.industries}
                    className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-[#c45a52] transition-colors hover:text-white"
                  >
                    Explore industries
                  </Link>
                </article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}