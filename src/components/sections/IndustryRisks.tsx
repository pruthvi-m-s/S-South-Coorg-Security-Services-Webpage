import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface IndustryRisksProps {
  title?: string;
  subtitle?: string;
  risks: { title: string; description: string }[];
  className?: string;
}

export default function IndustryRisks({
  title,
  subtitle,
  risks,
  className,
}: IndustryRisksProps) {
  if (risks.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="industry-risks-title"
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
              Typical challenges
            </motion.p>

            {title && (
              <motion.h2
                id="industry-risks-title"
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
            {risks.map((risk, index) => (
              <article
                key={`${risk.title}-${index}`}
                className="relative bg-[#191918] p-6 sm:p-7"
              >
                <span className="absolute right-5 top-5 text-xs font-semibold tracking-[0.14em] text-[#c45a52]/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="mb-6 flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#d45a51]"
                  aria-hidden="true"
                >
                  <span className="text-lg font-semibold text-[#c45a52]">
                    {String(index + 1)}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                  {risk.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#a7a19a]">
                  {risk.description}
                </p>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
