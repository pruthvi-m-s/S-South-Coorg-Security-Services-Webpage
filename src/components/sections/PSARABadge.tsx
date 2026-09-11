import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types";

interface PSARABadgeProps {
  certification?: Certification;
  labels: { verified: string; pending: string };
  href?: string;
  className?: string;
}

export default function PSARABadge({ certification, labels, href, className }: PSARABadgeProps) {
  const isVerified = certification?.status === "verified";
  const label = isVerified ? labels.verified : labels.pending;
  const badge = (
    <Badge variant="outline" className={cn("h-auto gap-1.5 whitespace-normal border-border px-3 py-1.5 text-left text-xs transition-all duration-200", !isVerified && "text-muted-foreground", className)}>
      <ShieldCheck size={14} strokeWidth={1.5} aria-hidden="true" />
      <span>{label}</span>
    </Badge>
  );

  return href ? (
    <Link
      to={href}
      aria-label={label}
      className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
    >
      {badge}
    </Link>
  ) : (
    badge
  );
}
