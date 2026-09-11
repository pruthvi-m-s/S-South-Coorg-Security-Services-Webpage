import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface ServicePageWhySectionProps {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}

export default function ServicePageWhySection({
  items,
  className,
}: ServicePageWhySectionProps) {
  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="service-why-title"
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
                Why SSCSS
              </motion.p>

              <motion.h2
                id="service-why-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                The service is only part of the job.
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp}
              className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
            >
              {items.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="bg-[#191918] p-6 sm:p-7"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#c45a52]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-[#f5f1e8] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#b4aea5]">
                    {item.description}
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
