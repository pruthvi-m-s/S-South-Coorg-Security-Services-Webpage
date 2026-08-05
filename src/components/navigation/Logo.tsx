// ============================================================
// SSCSS — Logo Component
// Renders the company logo from the content layer.
// Falls back to a text logo when no asset path is set.
// ============================================================

import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/routes";
import { SITE } from "@/content";

export default function Logo() {
  const hasLogo = Boolean(SITE.logo);

  return (
    <Link
      to={ROUTES.home}
      className="flex shrink-0 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`${SITE.name} — Home`}
    >
      {hasLogo ? (
        <img
          src={SITE.logo!}
          alt={`${SITE.shortName} logo`}
          className="h-8 w-auto md:h-9"
          width="auto"
          height="auto"
        />
      ) : (
        <span className="font-heading text-lg font-bold text-ink tracking-tight md:text-xl">
          {SITE.shortName}
        </span>
      )}
    </Link>
  );
}

