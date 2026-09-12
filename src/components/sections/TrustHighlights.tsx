import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { WhyChooseUsItem } from "@/types";

interface TrustHighlightsProps {
  title: string;
  subtitle: string;
  items: WhyChooseUsItem[];
  className?: string;
}

export default function TrustHighlights({
  title,
  subtitle,
  items,
  className,
}: TrustHighlightsProps) {
  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="gallery-trust-title"
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
                Why it matters
              </motion.p>

              <motion.h2
                id="gallery-trust-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base"
              >
                {subtitle}
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
            >
              {items.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  variants={fadeUp}
                  className="bg-[#10100f] p-6 transition-colors duration-300 hover:bg-[#151514] sm:p-7"
                >
                  <div className="flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
                    {createElement(getIcon(item.icon), {
                      size: 20,
                      strokeWidth: 1.5,
                      "aria-hidden": true,
                    })}
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-semibold tracking-tight text-[#f5f1e8]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#9a9590]">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-10 text-center text-xs text-[#9a9590]"
          >
            All imagery reflects actual SSCSS deployments, training, and operations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}