// ============================================================
// SSCSS — ContactInfo Section Component
// Displays contact details (phone, email, address, WhatsApp,
// emergency contact, service regions, office notes) from the
// content layer.
//
// Future-proof: supports any combination of fields.
// Items are rendered dynamically from an array — add new
// item types to CONTACT_PAGE.contactInfo.items to extend.
// ============================================================

import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ContactPageContent } from "@/content/contact-page";

// ─── Props ──────────────────────────────────────────────────

interface ContactInfoProps {
  content: ContactPageContent["contactInfo"];
  className?: string;
}

// ─── ContactInfo ────────────────────────────────────────────

export default function ContactInfo({
  content,
  className,
}: ContactInfoProps) {
  const { title, subtitle, items } = content;

  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "relative bg-background",
        className,
      )}
      aria-label="Contact Information"
    >
      <div className="section-container section-padding">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Section Heading */}
          <motion.h2
            variants={fadeUp}
            className={cn(
              "font-heading text-3xl font-semibold leading-tight tracking-tight",
              "sm:text-4xl",
              "text-ink text-center",
            )}
          >
            {title}
          </motion.h2>

          {/* Section Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className={cn(
                "mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed",
                "sm:text-lg",
                "text-muted-foreground",
              )}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Contact Items Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              const isLink = Boolean(item.href);

              const cardContent = (
                <Card
                  key={`contact-${index}`}
                  className={cn(
                    "flex items-start gap-4 p-6 sm:p-8",
                    "border border-border bg-card",
                    "transition-all duration-300 ease-premium-out",
                    isLink && "hover:border-primary/20 hover:shadow-md",
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-full",
                      "bg-primary-50 text-primary",
                    )}
                    aria-hidden="true"
                  >
                    {createElement(IconComponent, {
                      size: 22,
                      strokeWidth: 1.5,
                    })}
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3
                      className={cn(
                        "font-heading text-sm font-semibold tracking-tight",
                        "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-base leading-relaxed",
                        "text-ink break-words",
                      )}
                    >
                      {item.value}
                    </p>
                  </div>
                </Card>
              );

              // If href exists, wrap in anchor
              if (isLink && item.href) {
                const isPhoneLink = item.href.startsWith("tel:");
                const isWhatsAppLink = item.href.startsWith("https://wa.me");
                return (
                  <a
                    key={`contact-${index}`}
                    href={item.href}
                    data-analytics-component={
                      isPhoneLink
                        ? "contact_info_phone"
                        : isWhatsAppLink
                          ? "contact_info_whatsapp"
                          : undefined
                    }
                    className="block no-underline"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    {cardContent}
                  </a>
                );
              }

              return cardContent;
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

