import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { fadeUp } from "@/lib/motion";
import type { WhyChooseUsItem } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface WhyChooseCardProps {
  item: WhyChooseUsItem;
  className?: string;
}

// ─── WhyChooseCard ────────────────────────────────────────────
export default function WhyChooseCard({
  item,
  className,
}: WhyChooseCardProps) {
  const { title, description, icon } = item;

  return (
    <motion.div variants={fadeUp}>
      <Card
        className={cn(
          "group/card flex flex-col p-6 sm:p-8",
          "border border-border bg-card",
          "transition-all duration-300 ease-premium-out",
          "hover:border-primary/20 hover:shadow-md",
          "h-full",
          className,
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "mb-4 flex size-12 items-center justify-center rounded-full",
            "bg-primary-50 text-primary",
          )}
          aria-hidden="true"
        >
          {createElement(getIcon(icon), { size: 22, strokeWidth: 1.5 })}
        </div>

        {/* Feature Title */}
        <h3
          className={cn(
            "font-heading text-lg font-semibold leading-snug tracking-tight",
            "text-ink",
          )}
        >
          {title}
        </h3>

        {/* Feature Description */}
        <p
          className={cn(
            "mt-2 flex-1 text-sm leading-relaxed",
            "text-muted-foreground",
          )}
        >
          {description}
        </p>
      </Card>
    </motion.div>
  );
}

