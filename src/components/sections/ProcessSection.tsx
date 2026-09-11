import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ProcessStep } from "@/types";

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessSection({
  title,
  subtitle,
  steps,
  className,
}: ProcessSectionProps) {
  if (steps.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#f3efe6] text-[#171615]",
        className,
      )}
      aria-labelledby="services-process-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]"
              >
                How engagement works
              </motion.p>

              <motion.h2
                id="services-process-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#171615] sm:text-5xl"
              >
                {title}
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-sm leading-7 text-[#6a655e] sm:text-base"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-12 border-t border-[#d9d1c5]"
          >
            <div className="grid lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={`${step.step}-${index}`}
                  className={cn(
                    "border-b border-[#d9d1c5] py-7",
                    "lg:min-h-[14rem] lg:border-b-0 lg:px-8",
                    "lg:border-r lg:border-[#d9d1c5]",
                    "lg:first:pl-0",
                    "lg:last:border-r-0 lg:last:pr-0",
                    index >= 3 &&
                      "lg:border-t lg:border-[#d9d1c5]",
                  )}
                >
                  <p className="font-heading text-3xl font-semibold text-[#ad241c]">
                    {String(step.step).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-[#171615]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#6a655e]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}