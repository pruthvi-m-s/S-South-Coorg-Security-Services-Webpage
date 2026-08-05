// ============================================================
// SSCSS — Footer
// Global footer with company branding, navigation, contact info,
// social links, and copyright.
// Content-driven: all data from the content layer.
// No newsletter, no map, no contact form.
// ============================================================

import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import type { NavItem } from "@/content/navigation";
import type { Service } from "@/types";

// ─── Props ────────────────────────────────────────────────────
interface FooterProps {
  siteName: string;
  description?: string;
  quickLinks: NavItem[];
  services: Pick<Service, "slug" | "name">[];
  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    address?: string;
    officeHours?: string;
  };
  social?: Record<string, string>;
  trustSignal?: ReactNode;
  className?: string;
}

// ─── Footer ───────────────────────────────────────────────────
export default function Footer({
  siteName,
  description,
  quickLinks,
  services,
  contact,
  social,
  trustSignal,
  className,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const hasContactInfo =
    contact.phone || contact.whatsapp || contact.email || contact.address;

  const socialEntries = social
    ? Object.entries(social).filter(([, url]) => url)
    : [];

  return (
    <footer
      className={cn(
        "border-t border-border bg-background",
        className,
      )}
      role="contentinfo"
    >
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ─── Company Branding ────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-block"
              aria-label={`${siteName} — Home`}
            >
              <span
                className={cn(
                  "font-heading text-xl font-bold leading-tight tracking-tight",
                  "text-ink",
                )}
              >
                {siteName}
              </span>
            </Link>

            {description && (
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  "text-muted-foreground",
                )}
              >
                {description}
              </p>
            )}
            {trustSignal && <div className="mt-4">{trustSignal}</div>}
          </div>

          {/* ─── Quick Links ───────────────────────────── */}

          <nav aria-label="Quick Links">
            <h3
              className={cn(
                "mb-4 font-heading text-sm font-semibold uppercase tracking-wider",
                "text-ink",
              )}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      "text-sm transition-colors duration-200 ease-premium-out",
                      "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ─── Services Links ────────────────────────── */}

          <nav aria-label="Services">
            <h3
              className={cn(
                "mb-4 font-heading text-sm font-semibold uppercase tracking-wider",
                "text-ink",
              )}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className={cn(
                      "text-sm transition-colors duration-200 ease-premium-out",
                      "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ─── Contact Information ───────────────────── */}

          <div>
            {hasContactInfo && (
              <>
                <h3
                  className={cn(
                    "mb-4 font-heading text-sm font-semibold uppercase tracking-wider",
                    "text-ink",
                  )}
                >
                  Contact
                </h3>
                <ul className="space-y-3">
                  {contact.phone && (
                    <li>
                      <a
                        href={`tel:${contact.phone}`}
                        data-analytics-component="footer_phone"
                        className={cn(
                          "text-sm transition-colors duration-200 ease-premium-out",
                          "text-muted-foreground hover:text-primary",
                        )}
                      >
                        {contact.phone}
                      </a>
                    </li>
                  )}
                  {contact.whatsapp && (
                    <li>
                      <a
                        href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                        data-analytics-component="footer_whatsapp"
                        className={cn(
                          "text-sm transition-colors duration-200 ease-premium-out",
                          "text-muted-foreground hover:text-primary",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </li>
                  )}
                  {contact.email && (
                    <li>
                      <a
                        href={`mailto:${contact.email}`}
                        className={cn(
                          "text-sm transition-colors duration-200 ease-premium-out",
                          "text-muted-foreground hover:text-primary",
                        )}
                      >
                        {contact.email}
                      </a>
                    </li>
                  )}
                  {contact.address && (
                    <li>
                      <p
                        className={cn(
                          "text-sm leading-relaxed",
                          "text-muted-foreground",
                        )}
                      >
                        {contact.address}
                      </p>
                    </li>
                  )}
                  {contact.officeHours && (
                    <li>
                      <p
                        className={cn(
                          "text-xs leading-relaxed",
                          "text-muted-foreground/70",
                        )}
                      >
                        {contact.officeHours}
                      </p>
                    </li>
                  )}
                </ul>
              </>
            )}

            {/* ─── Social Links ─────────────────────────── */}

            {socialEntries.length > 0 && (
              <div className="mt-6">
                <h3
                  className={cn(
                    "mb-3 font-heading text-sm font-semibold uppercase tracking-wider",
                    "text-ink",
                  )}
                >
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialEntries.map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className={cn(
                        "text-sm capitalize transition-colors duration-200 ease-premium-out",
                        "text-muted-foreground hover:text-primary",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${platform}`}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ─── Copyright ───────────────────────────────── */}

        <Separator className="my-8" />

        <div
          className={cn(
            "flex flex-col items-center justify-between gap-2 sm:flex-row",
            "text-xs leading-relaxed",
            "text-muted-foreground/70",
          )}
        >
          <p>
            &copy; {currentYear} {siteName}. All rights reserved.
          </p>
          <p>
            Reliable &middot; Professional &middot; Disciplined &middot;
            Trusted
          </p>
        </div>
      </div>
    </footer>
  );
}

