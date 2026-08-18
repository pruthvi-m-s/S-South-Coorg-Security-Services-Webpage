// ============================================================
// SSCSS — ClientCategoryCard Component
// Displays a client category with icon, description, and
// service badges resolved from the content layer.
// Content-driven: all data from content layer.
// Hover: subtle border color transition, elevation, icon color.
// No scaling.
// ============================================================

import { createElement, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/lib/icons";
import { fadeUp } from "@/lib/motion";
import { getServiceBySlug } from "@/content/services";
import type { ClientCategory } from "@/content/clients-page";

// ─── Props ────────────────────────────────────────────────────
interface ClientCategoryCardProps {
  category: ClientCategory;
  className?: string;
}

// ─── ClientCategoryCard ───────────────────────────────────────
export default function ClientCategoryCard({
  category,
  className,
}: ClientCategoryCardProps) {
  const { icon, title, description, services } = category;

  // Resolve service names from slugs
  const resolvedServices = useMemo(() => {
    return services
      .map((s) => getServiceBySlug(s))
      .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => s !== undefined)
      .slice(0, 4); // Max 4 badges to keep card tidy
  }, [services]);

  return (
    <motion.div variants={fadeUp}>
      <Card
        className={cn(
"group/card flex flex-col p-6 sm:p-8",
          "border border-border bg-card",
          "transition-all duration-300 ease-premium-out",
          "hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg",
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

        {/* Category Title */}
        <h3
          className={cn(
            "font-heading text-lg font-semibold leading-snug tracking-tight",
            "text-ink",
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "mt-2 flex-1 text-sm leading-relaxed",
            "text-muted-foreground",
          )}
        >
          {description}
        </p>

        {/* Service Badges */}
        {resolvedServices.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Commonly used services">
            {resolvedServices.map((service) => (
              <Badge
                key={service.slug}
                variant="secondary"
                className="text-xs font-normal"
              >
                {service.name}
              </Badge>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

