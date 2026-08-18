// ============================================================
// SSCSS — IndustryCard Component
// Displays a single industry with icon, description, service
// badges, and a "View Services" action.
// Content-driven: all data from content layer.
// Hover: subtle border color transition, elevation, icon color.
// No scaling.
// Navigates to /services?industry={slug} for future-proof routing.
// ============================================================

import { createElement, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/lib/icons";
import { servicePath } from "@/lib/routes";
import { fadeUp } from "@/lib/motion";
import { getServiceBySlug } from "@/content/services";
import type { Industry } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface IndustryCardProps {
  industry: Industry;
  className?: string;
}

// ─── IndustryCard ─────────────────────────────────────────────
const IndustryCard = memo(function IndustryCard({
  industry,
  className,
}: IndustryCardProps) {
  const { name, icon, description, relevantServiceSlugs } = industry;

  // Resolve service names from slugs
  const services = useMemo(() => {
    return relevantServiceSlugs
      .map((s) => getServiceBySlug(s))
      .filter((s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => s !== undefined)
      .slice(0, 4); // Max 4 badges to keep card tidy
  }, [relevantServiceSlugs]);

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

        {/* Industry Name */}
        <h3
          className={cn(
            "font-heading text-lg font-semibold leading-snug tracking-tight",
            "text-ink",
          )}
        >
          {name}
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
        {services.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Available services">
            {services.map((service) => (
              <Badge key={service.slug} variant="secondary" className="text-xs font-normal">
                <Link to={servicePath(service.slug)}>{service.name}</Link>
              </Badge>
            ))}
          </div>
        )}

        {/* View Services Link */}
        <div
          className={cn(
            "mt-4 inline-flex items-center gap-1.5 text-sm font-medium",
            "text-primary",
            "transition-all duration-300 ease-premium-out",
          )}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5"
            aria-label={`View services for ${name}`}
          >
            <span>View Services</span>
            <ArrowRight
              size={14}
              strokeWidth={2}
              className={cn(
                "transition-transform duration-300 ease-premium-out",
                "group-hover/card:translate-x-0.5",
              )}
              aria-hidden="true"
            />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
});

export default IndustryCard;


