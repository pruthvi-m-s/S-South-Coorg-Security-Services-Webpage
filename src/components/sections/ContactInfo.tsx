import { createElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { ContactPageContent } from "@/content/contact-page";

interface ContactInfoProps {
  content: ContactPageContent["contactInfo"];
  className?: string;
}

export default function ContactInfo({
  content,
  className,
}: ContactInfoProps) {
  const { title, subtitle, items } = content;

  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "bg-[#191918] text-[#f5f1e8]",
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
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <motion.p
                variants={fadeUp}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
              >
                Contact SSCSS
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
              >
                {title}
              </motion.h2>

              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>

            <motion.div
              variants={fadeUp}
              className="grid gap-px border border-[#2b2927] bg-[#2b2927] sm:grid-cols-2"
            >
              {items.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                const isLink = Boolean(item.href);

                const card = (
                  <div className="group h-full bg-[#10100f] p-6 transition-colors duration-300 hover:bg-[#151514] sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-full border border-[#b52b22]/25 bg-[#3a211f] text-[#c45a52]">
                        {createElement(
                          IconComponent,
                          {
                            size: 20,
                            strokeWidth: 1.5,
                            "aria-hidden": true,
                          },
                        )}
                      </div>

                      {isLink && (
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#77716a] transition-colors group-hover:text-[#c45a52]">
                          Open
                        </span>
                      )}
                    </div>

                    <h3 className="mt-7 font-heading text-lg font-semibold tracking-tight text-[#ded8cf]">
                      {item.label}
                    </h3>

                    <p className="mt-2 break-words text-sm leading-6 text-[#99938c]">
                      {item.value}
                    </p>
                  </div>
                );

                if (isLink && item.href) {
                  const isPhoneLink =
                    item.href.startsWith("tel:");
                  const isWhatsAppLink =
                    item.href.startsWith(
                      "https://wa.me",
                    );

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
                      {card}
                    </a>
                  );
                }

                return (
                  <div
                    key={`contact-${index}`}
                  >
                    {card}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}