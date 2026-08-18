// ============================================================
// SSCSS — Generic Reusable Accordion Component
//
// Fully compliant with WAI-ARIA Authoring Practices.
// Single open item at a time.
// Keyboard navigation: Enter/Space toggle, Arrow Up/Down,
// Home/End.
//
// NOT FAQ-aware — purely presentational.
// Deep-link logic is owned by the consuming page.
// ============================================================

import {
  useCallback,
  useRef,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────

export interface AccordionItem {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  /** Array of accordion items to render */
  items: AccordionItem[];
  /** Currently open item ID, or null for none open */
  openItem: string | null;
  /** Callback when the open item changes */
  onOpenChange: (id: string | null) => void;
  /** Optional CSS class name */
  className?: string;
}

// ─── Accordion Component ────────────────────────────────────

export default function Accordion({
  items,
  openItem,
  onOpenChange,
  className,
}: AccordionProps) {
  // Refs for managing focus among accordion buttons
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Set a ref for a button
  const setButtonRef = useCallback(
    (id: string, el: HTMLButtonElement | null) => {
      if (el) {
        buttonRefs.current.set(id, el);
      } else {
        buttonRefs.current.delete(id);
      }
    },
    [],
  );

  // Get the index of an item by its id
  const getItemIndex = useCallback(
    (id: string) => items.findIndex((item) => item.id === id),
    [items],
  );

  // Toggle open state for an item
  const toggleItem = useCallback(
    (id: string) => {
      onOpenChange(openItem === id ? null : id);
    },
    [openItem, onOpenChange],
  );

  // ─── Keyboard Navigation ─────────────────────────────────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, currentId: string) => {
      const currentIndex = getItemIndex(currentId);
      if (currentIndex === -1) return;

      const getNextIndex = (): number | null => {
        switch (e.key) {
          case "ArrowDown":
            return (currentIndex + 1) % items.length;
          case "ArrowUp":
            return (currentIndex - 1 + items.length) % items.length;
          case "Home":
            return 0;
          case "End":
            return items.length - 1;
          default:
            return null;
        }
      };

      const nextIndex = getNextIndex();
      if (nextIndex === null) return;

      e.preventDefault();

      // Focus the next button
      const nextId = items[nextIndex]?.id;
      if (nextId) {
        const nextButton = buttonRefs.current.get(nextId);
        nextButton?.focus();
      }
    },
    [items, getItemIndex],
  );

  if (items.length === 0) return null;

  return (
    <div
      className={cn("divide-y divide-border", className)}
      role="region"
      aria-label="Accordion"
    >
      {items.map((item) => {
        const isOpen = openItem === item.id;
        const buttonId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id}>
            {/* Trigger Button */}
            <h3 className="mb-0">
              <button
                ref={(el) => setButtonRef(item.id, el)}
                id={buttonId}
                type="button"
                className={cn(
                  "group flex w-full items-center justify-between gap-4 px-0 py-5 text-left",
                  "font-heading text-base font-medium leading-snug tracking-tight",
                  "sm:text-lg",
                  "text-ink",
                  "transition-all duration-300 ease-premium-out",
                  "rounded-md hover:bg-muted/70 hover:text-primary active:translate-y-[1px]",
                  "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
              >
                <span>{item.trigger}</span>

                {/* Chevron Icon */}
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className={cn(
                    "shrink-0 text-muted-foreground transition-transform duration-300 ease-premium-out",
                    "group-hover:text-primary",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>

            {/* Content Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.25, ease: [0, 0, 0.2, 1] },
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "pb-6 text-base leading-relaxed",
                      "text-muted-foreground",
                    )}
                  >
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
