import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import WhyChooseCard from "@/components/sections/WhyChooseCard";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { WhyChooseUsItem } from "@/types";

interface WhyChooseUsProps {
  title: string;
  subtitle: string;
  items: WhyChooseUsItem[];
  className?: string;
}

export default function WhyChooseUs({
  title,
  subtitle,
  items,
  className,
}: WhyChooseUsProps) {
  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
        className,
      )}
      aria-labelledby="why-choose-title"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
              >
                Why SSCSS
              </motion.p>

              <motion.h2
                id="why-choose-title"
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {title}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-lg text-sm leading-7 text-[#b4aea5] sm:text-base"
              >
                {subtitle}
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
            >
              {items.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  variants={fadeUp}
                  className="bg-[#191918] p-6 sm:p-7"
                >
                  <WhyChooseCard
                    item={item}
                    className="border-0 bg-transparent p-0 shadow-none hover:translate-y-0 hover:border-0 hover:shadow-none"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}