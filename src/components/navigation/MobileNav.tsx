// ============================================================
// SSCSS — Mobile Navigation
// Dark editorial mobile navigation.
// ============================================================

import {
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ROUTES,
  servicePath,
} from "@/lib/routes";
import {
  getPrimaryServiceCategories,
  MAIN_NAVIGATION,
  SERVICES,
  type NavItem,
} from "@/content";
import { useFocusTrap } from "@/hooks/useFocusTrap";

const PRIMARY_CATEGORIES =
  getPrimaryServiceCategories(SERVICES);

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    scaleY: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scaleY: 0.98,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function MobileNavLink({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      to={item.href}
      onClick={onClick}
      className={cn(
        "flex min-h-[44px] items-center rounded-md px-4 py-3 text-base font-medium",
        "tracking-[0.005em] transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
        "hover:bg-[#191918] hover:text-[#f5f1e8]",
        isActive
          ? "bg-[#191918] text-[#f5f1e8]"
          : "text-[#8f8981]",
      )}
      aria-current={
        isActive ? "page" : undefined
      }
    >
      {item.title}
    </Link>
  );
}

export default function MobileNav({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const { pathname } = useLocation();
  const panelRef =
    useRef<HTMLDivElement>(null);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  useFocusTrap(panelRef, isOpen);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (isOpen) {
      onClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "inline-flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-2 lg:hidden",
          "text-[#ded8cf] transition-all duration-200",
          "hover:bg-[#191918] hover:text-white",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
        )}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={
          isOpen ? "Close menu" : "Open menu"
        }
      >
        {isOpen ? (
          <X
            size={22}
            aria-hidden="true"
          />
        ) : (
          <Menu
            size={22}
            aria-hidden="true"
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
              aria-hidden="true"
              onClick={onClose}
            />

            <motion.div
              ref={panelRef}
              id="mobile-menu"
              key="mobile-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onKeyDown={handleKeyDown}
              className={cn(
                "fixed left-0 right-0 top-[var(--header-height)] z-50",
                "mx-auto w-full max-w-3xl px-4 lg:hidden",
              )}
            >
              <div className="max-h-[calc(100dvh-var(--header-height)-1rem)] overflow-y-auto border border-[#3a3835] bg-[#191918] shadow-2xl">
                <nav
                  aria-label="Mobile navigation"
                  className="py-2"
                >
                  {MAIN_NAVIGATION.map((item) =>
                    item.href ===
                    ROUTES.services ? (
                      <div
                        key={item.href}
                        className="px-1"
                      >
                        <button
                          type="button"
                          className={cn(
                            "flex min-h-[44px] w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium",
                            "transition-colors",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
                            "hover:bg-[#10100f] hover:text-white",
                            isActivePath(item.href)
                              ? "bg-[#10100f] text-[#f5f1e8]"
                              : "text-[#8f8981]",
                          )}
                          aria-expanded={servicesOpen}
                          aria-controls="mobile-services-menu"
                          onClick={() =>
                            setServicesOpen(
                              (value) => !value,
                            )
                          }
                        >
                          Services

                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-200",
                              servicesOpen &&
                                "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        <AnimatePresence
                          initial={false}
                        >
                          {servicesOpen && (
                            <motion.div
                              id="mobile-services-menu"
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: [
                                  0.16,
                                  1,
                                  0.3,
                                  1,
                                ],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-3 border-t border-[#2b2927] px-2 pb-3 pt-3">
                                <Link
                                  to={
                                    ROUTES.services
                                  }
                                  onClick={onClose}
                                  className="flex min-h-[44px] items-center rounded-md px-2 py-2 text-sm font-semibold text-[#c45a52] hover:bg-[#10100f] focus-visible:outline-2 focus-visible:outline-[#c45a52]"
                                >
                                  All services
                                </Link>

                                {PRIMARY_CATEGORIES.map(
                                  (
                                    category,
                                    index,
                                  ) => (
                                    <section
                                      key={category.id}
                                      aria-label={
                                        category.name
                                      }
                                      className="border-t border-[#2b2927] pt-3 first:border-t-0 first:pt-0"
                                    >
                                      <Link
                                        to={servicePath(
                                          category.primarySlug,
                                        )}
                                        onClick={
                                          onClose
                                        }
                                        className="flex min-h-[44px] items-center gap-2 rounded-md px-2 text-sm font-semibold text-[#ded8cf] hover:bg-[#10100f] hover:text-[#c45a52] focus-visible:outline-2 focus-visible:outline-[#c45a52]"
                                      >
                                        <span className="w-5 text-[0.68rem] tabular-nums text-[#77716a]">
                                          {String(
                                            index +
                                              1,
                                          ).padStart(
                                            2,
                                            "0",
                                          )}
                                        </span>

                                        {category.name}
                                      </Link>

                                      <div className="mt-1 grid grid-cols-2 gap-2 pl-7">
                                        {category.services.map(
                                          (
                                            service,
                                          ) => (
                                            <Link
                                              key={
                                                service.slug
                                              }
                                              to={servicePath(
                                                service.slug,
                                              )}
                                              onClick={
                                                onClose
                                              }
                                              className="flex min-h-[44px] items-center rounded-md px-2 py-2 text-sm text-[#77716a] hover:bg-[#10100f] hover:text-[#c45a52] focus-visible:outline-2 focus-visible:outline-[#c45a52]"
                                            >
                                              {
                                                service.name
                                              }
                                            </Link>
                                          ),
                                        )}
                                      </div>
                                    </section>
                                  ),
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <MobileNavLink
                        key={item.href}
                        item={item}
                        isActive={isActivePath(
                          item.href,
                        )}
                        onClick={onClose}
                      />
                    ),
                  )}
                </nav>

                <div className="border-t border-[#2b2927]" />

                <div className="px-4 py-4">
                  <Link
                    to={`${ROUTES.contact}#contact-form`}
                    onClick={onClose}
                    data-analytics-cta="mobile_menu_get_quote"
                    className={cn(
                      "inline-flex min-h-[48px] w-full items-center justify-center gap-2",
                      "bg-[#b52b22] px-5 py-3 text-sm font-semibold text-white",
                      "transition-colors duration-200 hover:bg-[#8f1912]",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c45a52]",
                    )}
                  >
                    Get a Free Quote

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}