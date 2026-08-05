// ============================================================
// SSCSS — ServiceCard Component
// Displays a single service card for the Services Preview grid.
// Content-driven: all copy comes from the content layer.
// Hover: subtle border color transition, elevation, icon color.
// No scaling.
// ============================================================

import { createElement, memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { servicePath } from "@/lib/routes";
import { fadeUp } from "@/lib/motion";
import type { Service } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface ServiceCardProps {
  service: Pick<Service, "slug" | "name" | "shortTagline" | "icon">;
  className?: string;
}

// ─── ServiceCard ──────────────────────────────────────────────
const ServiceCard = memo(function ServiceCard({ service, className }: ServiceCardProps) {
  const { slug, name, shortTagline, icon } = service;

  return (
    <motion.div variants={fadeUp}>
      <Link
        to={servicePath(slug)}
        className="block"
        aria-label={`Learn more about ${name}`}
      >
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
              "bg-primary-50 text-muted-foreground",
              "transition-colors duration-300 ease-premium-out",
              "group-hover/card:text-primary",
            )}
            aria-hidden="true"
          >
            {createElement(getIcon(icon), { size: 22, strokeWidth: 1.5 })}
          </div>

          {/* Service Title */}
          <h3
            className={cn(
              "font-heading text-lg font-semibold leading-snug tracking-tight",
              "text-ink",
            )}
          >
            {name}
          </h3>

          {/* Short Description */}
          <p
            className={cn(
              "mt-2 flex-1 text-sm leading-relaxed",
              "text-muted-foreground",
            )}
          >
            {shortTagline}
          </p>

          {/* Learn More Link */}
          <div
            className={cn(
              "mt-4 inline-flex items-center gap-1.5 text-sm font-medium",
              "text-primary",
              "transition-all duration-300 ease-premium-out",
            )}
          >
            <span>Learn More</span>
            <ArrowRight
              size={14}
              strokeWidth={2}
              className={cn(
                "transition-transform duration-300 ease-premium-out",
                "group-hover/card:translate-x-0.5",
              )}
              aria-hidden="true"
            />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
});

export default ServiceCard;

