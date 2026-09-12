// ============================================================
// SSCSS — Footer
// Dark editorial footer matching the global visual system.
// ============================================================

import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/content/navigation";
import type { Service } from "@/types";

interface FooterProps {
  siteName: string;
  description?: string;
  quickLinks: NavItem[];
  services: Pick<
    Service,
    "slug" | "name"
  >[];
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
  const currentYear =
    new Date().getFullYear();

  const socialEntries = social
    ? Object.entries(social).filter(
        ([, url]) => url,
      )
    : [];

  return (
    <footer
      className={cn(
        "border-t border-[#2b2927] bg-[#10100f] text-[#f5f1e8]",
        className,
      )}
      role="contentinfo"
    >
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1fr_1.1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]"
              aria-label={`${siteName} — Home`}
            >
              <span className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[#f5f1e8]">
                {siteName}
              </span>
            </Link>

            {description && (
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#9a9590]">
                {description}
              </p>
            )}

            {trustSignal && (
              <div className="mt-6">
                {trustSignal}
              </div>
            )}
          </div>

          {/* Company */}
          <nav aria-label="Footer company links">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex min-h-[44px] items-center text-sm text-[#8f8981] transition-colors duration-200 hover:text-[#f5f1e8] focus-visible:outline-2 focus-visible:outline-[#c45a52]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services
                .slice(0, 8)
                .map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex min-h-[44px] items-center text-sm text-[#8f8981] transition-colors duration-200 hover:text-[#f5f1e8] focus-visible:outline-2 focus-visible:outline-[#c45a52]"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
            </ul>

            {services.length > 8 && (
              <Link
                to="/services"
                className="mt-5 flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#c45a52] hover:text-white"
              >
                View all services
                <ArrowUpRight
                  className="size-4"
                  aria-hidden="true"
                />
              </Link>
            )}
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
              Contact
            </h3>

            <div className="mt-5 space-y-5">
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  data-analytics-component="footer_phone"
                  className="group flex min-h-[44px] items-center gap-3 py-1"
                >
                  <Phone
                    className="size-4 shrink-0 text-[#c45a52]"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#8f8981] group-hover:text-[#f5f1e8]">
                    {contact.phone}
                  </span>
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex min-h-[44px] items-center gap-3 py-1"
                >
                  <Mail
                    className="size-4 shrink-0 text-[#c45a52]"
                    aria-hidden="true"
                  />
                  <span className="break-words text-sm text-[#8f8981] group-hover:text-[#f5f1e8]">
                    {contact.email}
                  </span>
                </a>
              )}

              {contact.whatsapp && (
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  data-analytics-component="footer_whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center text-sm font-semibold text-[#c45a52] hover:text-white"
                >
                  WhatsApp
                </a>
              )}

              {contact.address && (
                <p className="text-sm leading-7 text-[#9a9590]">
                  {contact.address}
                </p>
              )}

              {contact.officeHours && (
                <p className="text-xs leading-6 text-[#9a9590]">
                  {contact.officeHours}
                </p>
              )}
            </div>

            {socialEntries.length > 0 && (
              <div className="mt-7 border-t border-[#2b2927] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]">
                  Follow Us
                </p>

                <div className="mt-3 flex flex-wrap gap-4">
                  {socialEntries.map(
                    ([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[44px] items-center text-sm capitalize text-[#9a9590] hover:text-[#f5f1e8]"
                        aria-label={`Follow us on ${platform}`}
                      >
                        {platform}
                      </a>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-[#2b2927] pt-6">
          <div className="flex flex-col gap-3 text-xs text-[#9a9590] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {siteName}. All
              rights reserved.
            </p>

            <p className="tracking-[0.08em]">
              Reliable · Professional · Disciplined ·
              Trusted
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}