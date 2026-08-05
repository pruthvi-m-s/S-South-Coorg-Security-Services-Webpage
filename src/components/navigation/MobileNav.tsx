// ============================================================
// SSCSS — Mobile Navigation
// Accessible hamburger menu with Framer Motion slide-down panel.
// ============================================================

import { useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { MAIN_NAVIGATION, type NavItem } from "@/content";
import { useFocusTrap } from "@/hooks/useFocusTrap";

// ─── Props ────────────────────────────────────────────────────
interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

// ─── Animation Variants ──────────────────────────────────────
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { opacity: 0, y: -12, scaleY: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    scaleY: 0.98,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ─── Nav Link ─────────────────────────────────────────────────
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
        "flex min-h-[44px] items-center rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        "hover:bg-primary-50 hover:text-primary",
        isActive
          ? "bg-primary-50 text-primary"
          : "text-ink",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.title}
    </Link>
  );
}

// ─── MobileNav ────────────────────────────────────────────────
export default function MobileNav({ isOpen, onToggle, onClose }: MobileNavProps) {
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);

  // Focus trap inside open mobile menu dialog
  useFocusTrap(panelRef, isOpen);

  const isActivePath = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // ─── Close on route change (including browser back/forward) ─
  useEffect(() => {
    if (isOpen) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // ─── Lock / unlock body scroll ─────────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ─── Escape key handler ────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <>
      {/* ─── Hamburger Button ─────────────────────────────── */}
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "inline-flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 md:hidden",
          "text-muted-foreground hover:text-ink hover:bg-muted",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "transition-colors duration-200",
        )}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {/* ─── Mobile Menu Panel ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
              aria-hidden="true"
              onClick={onClose}
            />

            {/* Panel */}
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
                "mx-auto w-full max-w-3xl px-4 md:hidden",
              )}
            >
              <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                {/* Navigation Links */}
                <nav aria-label="Mobile navigation" className="py-2">
                  {MAIN_NAVIGATION.map((item) => (
                    <MobileNavLink
                      key={item.href}
                      item={item}
                      isActive={isActivePath(item.href)}
                      onClick={onClose}
                    />
                  ))}
                </nav>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Primary CTA */}
                <div className="px-4 py-4">
                  <Link
                    to={ROUTES.contact}
                    onClick={onClose}
                    data-analytics-cta="mobile_menu_get_quote"
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2",
                      "rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground",
                      "hover:bg-primary-700 transition-colors duration-200",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    )}
                  >
                    Get a Quote
                    <ArrowRight size={16} aria-hidden="true" />
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

