import { createElement } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { fadeUp } from "@/lib/motion";
import {
  Disclosure,
  DisclosureTrigger,
  DisclosureContent,
} from "../../../components/motion-primitives/disclosure";
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
      <Disclosure
        className={cn(
          "group/card flex h-full flex-col p-6 sm:p-8",
          "border border-border bg-card",
          "transition-all duration-300 ease-premium-out",
          "hover:border-primary/20 hover:shadow-md",
          className,
        )}
      >
        {/* Trigger — Icon + Title + chevron */}
<DisclosureTrigger
          className={cn(
            "group flex w-full cursor-pointer items-center gap-4 text-left",
            "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
        >
          {/* Icon */}
          <span
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-full",
              "bg-primary-50 text-primary",
            )}
            aria-hidden="true"
          >
            {createElement(getIcon(icon), { size: 22, strokeWidth: 1.5 })}
          </span>

          {/* Title */}
          <h3
            className={cn(
              "flex-1 font-heading text-lg font-semibold leading-snug tracking-tight",
              "text-ink",
            )}
          >
            {title}
          </h3>

          {/* Chevron indicator */}
          <ChevronDown
            size={18}
className="shrink-0 text-muted-foreground transition-transform duration-300 ease-premium-out group-aria-expanded:rotate-180"
            aria-hidden="true"
          />
        </DisclosureTrigger>

{/* Content — description */}
        <DisclosureContent
          className="mt-3"
        >
          <div className="pr-8">
            <p
              className={cn(
                "text-sm leading-relaxed",
                "text-muted-foreground",
              )}
            >
              {description}
            </p>
          </div>
        </DisclosureContent>
      </Disclosure>
    </motion.div>
  );
}
