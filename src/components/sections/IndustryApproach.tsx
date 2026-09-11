import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";

interface IndustryApproachProps {
  title?: string;
  approach: string;
  className?: string;
}

export default function IndustryApproach({
  title,
  approach,
  className,
}: IndustryApproachProps) {
  const paragraphs = approach
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="industry-approach-title"
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
              Our approach
            </motion.p>

            {title && (
              <motion.h2
                id="industry-approach-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {title}
              </motion.h2>
            )}
          </div>

          <motion.div
            variants={fadeUp}
            className="border-t border-[#2b2927]"
          >
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={cn(
                  "border-b border-[#2b2927] py-6 text-base leading-7",
                  index === 0
                    ? "text-[#ded8cf] sm:text-lg"
                    : "text-[#9f9991] sm:text-base",
                )}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
