// ============================================================
// SSCSS — TrustStrip Component
// Displays certification/registration badges as a compact
// horizontal trust indicator strip.
// Content-driven — all data from the content layer.
// Reusable across pages (Home, About, etc.).
// ============================================================

import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { getIcon } from "@/lib/icons";
import { fadeUp, viewportOptions } from "@/lib/motion";
import type { Certification } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface TrustStripProps {
  certifications: Certification[];
  className?: string;
  /** Optional heading rendered above the strip */
  heading?: string;
  pendingLabel?: string;
}

// ─── TrustStrip ───────────────────────────────────────────────
export default function TrustStrip({
  certifications,
  className,
  heading,
  pendingLabel = "Documentation available on request",
}: TrustStripProps) {
  if (certifications.length === 0) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={cn("flex flex-col items-center", className)}
    >
      {/* Optional heading */}
      {heading && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.12em]",
            "text-muted-foreground",
          )}
        >
          {heading}
        </motion.p>
      )}

      {/* Certification badges */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {certifications.map((cert) => (
          <Badge
            key={cert.id}
            variant="outline"
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium",
              "border-border",
              cert.status === "pending-upload" && "opacity-70",
            )}
          >
            {cert.icon &&
              createElement(getIcon(cert.icon), {
                size: 14,
                strokeWidth: 1.5,
                "aria-hidden": true,
              })}
            <span>{cert.label}</span>
            {cert.status === "pending-upload" && (
              <span className="ml-0.5 text-[10px] text-muted-foreground">
                ({pendingLabel})
              </span>
            )}
          </Badge>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-4 text-center text-xs text-muted-foreground"
      >
        All documentation available for review upon request.
      </motion.p>
    </motion.div>
  );
}

