import { createElement } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { servicePath } from "@/lib/routes";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface IndustryServiceBundleProps {
  title?: string;
  subtitle?: string;
  services: { slug: string; name: string; shortTagline?: string; icon?: string }[];
  className?: string;
}

export default function IndustryServiceBundle({
  title,
  subtitle,
  services,
  className,
}: IndustryServiceBundleProps) {
  if (services.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="industry-services-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
            >
              Recommended services
            </motion.p>

            {title && (
              <motion.h2
                id="industry-services-title"
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
            {services.map((service) => (
              <article
                key={service.slug}
                className="bg-[#191918] p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#3a3835] bg-[#10100f] text-[#c45a52]"
                    aria-hidden="true"
                  >
                    {service.icon &&
                      createElement(getIcon(service.icon), {
                        size: 18,
                        strokeWidth: 1.5,
                      })}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-[#f5f1e8]">
                      {service.name}
                    </h3>

                    {service.shortTagline && (
                      <p className="mt-1 text-sm leading-6 text-[#99938c]">
                        {service.shortTagline}
                      </p>
                    )}

                    <Link
                      to={servicePath(service.slug)}
                      className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-[#c45a52] transition-colors hover:text-white"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
