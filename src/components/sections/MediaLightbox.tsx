// ============================================================
// SSCSS — MediaLightbox Component
// Reusable media lightbox with keyboard navigation, focus
// trapping, and accessibility support.
// Supports images today, videos can be added later.
// ============================================================

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import Skeleton from "@/components/common/Skeleton";
import { useFocusTrap } from "@/hooks/useFocusTrap";

// ─── Media Item Interface ─────────────────────────────────────
export interface LightboxMedia {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  type?: "image" | "video";
  poster?: string;
}

// ─── Props ────────────────────────────────────────────────────
interface MediaLightboxProps {
  items: LightboxMedia[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  className?: string;
}

// ─── MediaLightbox ────────────────────────────────────────────
export default function MediaLightbox({
  items,
  currentIndex,
  open,
  onClose,
  onNavigate,
  className,
}: MediaLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentItem = items[currentIndex];

  // Focus trap with focus restoration
  useFocusTrap(containerRef, open);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (currentIndex > 0) onNavigate(currentIndex - 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          if (currentIndex < items.length - 1) onNavigate(currentIndex + 1);
          break;
      }
    },
    [open, currentIndex, items.length, onClose, onNavigate],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Navigation handlers
  const goPrevious = () => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < items.length - 1) onNavigate(currentIndex + 1);
  };

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  return (
    <AnimatePresence>
      {open && currentItem && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed inset-0 z-modal flex items-center justify-center",
            "bg-black/90",
            className,
          )}
          role="dialog"
          aria-modal="true"
          aria-label={`Media viewer: ${currentItem.title ?? currentItem.alt}`}
          onClick={handleBackdropClick}
        >
          {/* Screen reader live announcement */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {`Viewing item ${currentIndex + 1} of ${items.length}: ${currentItem.title || currentItem.alt}`}
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "absolute right-4 top-4 z-10",
              "flex size-11 items-center justify-center rounded-full min-h-[44px] min-w-[44px]",
              "bg-white/10 text-white hover:bg-white/20",
              "transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
            )}
            aria-label="Close lightbox"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {/* Previous Button */}
          {hasPrevious && (
            <button
              type="button"
              onClick={goPrevious}
              className={cn(
                "absolute left-4 top-1/2 z-10 -translate-y-1/2",
                "flex size-12 items-center justify-center rounded-full min-h-[44px] min-w-[44px]",
                "bg-white/10 text-white hover:bg-white/20",
                "transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
              )}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
          )}

          {/* Next Button */}
          {hasNext && (
            <button
              type="button"
              onClick={goNext}
              className={cn(
                "absolute right-4 top-1/2 z-10 -translate-y-1/2",
                "flex size-12 items-center justify-center rounded-full min-h-[44px] min-w-[44px]",
                "bg-white/10 text-white hover:bg-white/20",
                "transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
              )}
              aria-label="Next image"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          )}

{/* Media Content */}
          <div className="flex max-h-[90vh] max-w-[90vw] flex-col items-center">
            {/* Image */}
            <div className="relative flex items-center justify-center">
              {currentItem.type === "video" ? (
                <video
                  src={currentItem.src}
                  poster={currentItem.poster}
                  controls
                  className="max-h-[75vh] max-w-full rounded-lg object-contain"
                  aria-label={currentItem.alt}
                />
              ) : (
<ImageWithSkeleton
                  key={currentItem.id}
                  src={currentItem.src}
                  alt={currentItem.alt}
                  skeleton={
                    <Skeleton className="h-64 w-full max-w-3xl rounded-lg sm:h-96" />
                  }
                  containerClassName="max-h-[75vh] max-w-full"
                  className="max-h-[75vh] max-w-full rounded-lg object-contain"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              )}
            </div>

            {/* Caption */}
            {(currentItem.title || currentItem.description) && (
              <div className="mt-4 max-w-2xl text-center">
                {currentItem.title && (
                  <h3 className="text-lg font-semibold text-white">
                    {currentItem.title}
                  </h3>
                )}
                {currentItem.description && (
                  <p className="mt-1 text-sm text-white/70">
                    {currentItem.description}
                  </p>
                )}
              </div>
            )}

            {/* Counter */}
            <p className="mt-3 text-sm text-white/50" aria-hidden="true">
              {currentIndex + 1} / {items.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

