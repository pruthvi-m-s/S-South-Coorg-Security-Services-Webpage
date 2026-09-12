import {
  useCallback,
  useRef,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  openItem: string | null;
  onOpenChange: (id: string | null) => void;
  className?: string;
}

export default function Accordion({
  items,
  openItem,
  onOpenChange,
  className,
}: AccordionProps) {
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const setButtonRef = useCallback(
    (id: string, element: HTMLButtonElement | null) => {
      if (element) {
        buttonRefs.current.set(id, element);
      } else {
        buttonRefs.current.delete(id);
      }
    },
    [],
  );

  const toggleItem = useCallback(
    (id: string) => {
      onOpenChange(openItem === id ? null : id);
    },
    [openItem, onOpenChange],
  );

  const handleKeyDown = useCallback(
    (
      event: KeyboardEvent<HTMLButtonElement>,
      currentId: string,
    ) => {
      if (items.length === 0) return;

      const currentIndex = items.findIndex(
        (item) => item.id === currentId,
      );

      if (currentIndex === -1) return;

      const nextIndex = (() => {
        switch (event.key) {
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
      })();

      if (nextIndex === null) return;

      event.preventDefault();

      const nextItem = items[nextIndex];

      if (!nextItem) return;

      buttonRefs.current.get(nextItem.id)?.focus();
    },
    [items],
  );

  if (items.length === 0) return null;

  return (
    <div
      className={cn(className)}
      role="region"
      aria-label="Frequently Asked Questions"
    >
      {items.map((item, index) => {
        const isOpen = openItem === item.id;
        const buttonId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="border-b border-[#2b2927]"
          >
            <h3 className="mb-0">
              <button
                ref={(element) => setButtonRef(item.id, element)}
                id={buttonId}
                type="button"
                className={cn(
                  "group flex w-full items-start gap-5 px-0 py-6 text-left sm:py-7",
                  "focus-visible:outline-2 focus-visible:outline-[#b52b22] focus-visible:outline-offset-4",
                )}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(event) =>
                  handleKeyDown(event, item.id)
                }
              >
                <span className="pt-1 text-xs font-semibold tracking-[0.14em] text-[#c45a52]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1 font-heading text-lg font-semibold leading-snug tracking-tight text-[#f5f1e8] transition-colors group-hover:text-white sm:text-xl">
                  {item.trigger}
                </span>

                <ChevronDown
                  size={19}
                  strokeWidth={1.8}
                  className={cn(
                    "mt-0.5 shrink-0 text-[#9a9590] transition-transform duration-300",
                    isOpen && "rotate-180 text-[#c45a52]",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>

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
                    height: {
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-[2.1rem] text-sm leading-7 text-[#8f8981] sm:pl-[2.35rem] sm:text-base">
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