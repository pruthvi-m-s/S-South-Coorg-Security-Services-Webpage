// ============================================================
// SSCSS — GalleryGrid Component
// Reusable image gallery with category filtering, lazy loading,
// responsive masonry/grid layout, and lightbox integration.
// Content-driven: all data from the content layer.
// ============================================================

import { useState, useMemo, useCallback, lazy } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";
import type { LightboxMedia } from "@/components/sections/MediaLightbox";
import { trackGalleryInteraction, getSourcePage } from "@/lib/analytics";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type { GalleryImage, GalleryVideo, GalleryCategory } from "@/content/gallery";

const MediaLightbox = lazy(() => import("@/components/sections/MediaLightbox"));

// ─── Props ────────────────────────────────────────────────────
interface GalleryGridProps {
  title: string;
  subtitle: string;
  categories: GalleryCategory[];
  images: GalleryImage[];
  videos: GalleryVideo[];
  className?: string;
}

// ─── GalleryGrid ──────────────────────────────────────────────
export default function GalleryGrid({
  title,
  subtitle,
  categories,
  images,
  videos,
  className,
}: GalleryGridProps) {
  const { pathname } = useLocation();
  const sourcePage = getSourcePage(pathname);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter images by active category
  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  // Build lightbox media items from filtered images
  const lightboxItems: LightboxMedia[] = useMemo(
    () =>
      filteredImages.map((img) => ({
        id: img.id,
        src: img.src,
        alt: img.alt,
        title: img.title,
        description: img.description,
        type: "image" as const,
      })),
    [filteredImages],
  );

  // Open lightbox for a specific image
  const openLightbox = useCallback(
    (index: number) => {
      setLightboxIndex(index);
      setLightboxOpen(true);
    },
    [],
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const navigateLightbox = useCallback(
    (index: number) => {
      setLightboxIndex(index);
    },
    [],
  );

  const hasVideos = videos.length > 0;

  return (
    <>
      <section
        className={cn(
          "relative bg-background",
          className,
        )}
        aria-label="Image Gallery"
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

            {/* Section Intro */}
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
          </motion.div>

          {/* Category Filters */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mt-10"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-2"
              role="tablist"
              aria-label="Filter gallery by category"
            >
              {categories.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category.slug}
                  aria-label={
                    category.description
                      ? `Show ${category.description}`
                      : `Show ${category.label}`
                  }
onClick={() => {
                    trackGalleryInteraction({
                      source_page: sourcePage,
                      action: "filter",
                      category: category.slug,
                    });
                    setActiveCategory(category.slug);
                  }}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium min-h-[44px]",
                    "transition-all duration-300 ease-premium-out",
                    "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                    activeCategory === category.slug
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-ink",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
            <div role="status" aria-live="polite" className="sr-only">
              {`Showing ${filteredImages.length} images for category ${activeCategory}`}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mt-10"
          >
            {filteredImages.length > 0 ? (
              <motion.div variants={fadeUp}>
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                  {filteredImages.map((image, index) => (
                    <motion.button
                      key={image.id}
                      variants={fadeUp}
                      layout
onClick={() => {
                        trackGalleryInteraction({
                          source_page: sourcePage,
                          action: "open",
                          category: image.category,
                          media_id: image.id,
                        });
                        openLightbox(index);
                      }}
                      className={cn(
                        "group relative mb-4 block w-full overflow-hidden rounded-lg",
                        "border border-border",
                        "transition-all duration-300 ease-premium-out",
                        "hover:shadow-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
                        "text-left",
                      )}
                      aria-haspopup="dialog"
                      aria-label={`Open media lightbox for ${image.title ?? image.alt}`}
                    >
                      {/* Placeholder handling */}
                      <div
                        className={cn(
                          "relative aspect-[4/3] w-full overflow-hidden",
                          "bg-muted",
                        )}
                      >
                        {/* Placeholder background with category color */}
                        <div
                          className={cn(
                            "absolute inset-0 flex flex-col items-center justify-center p-4 text-center",
                            getPlaceholderBg(image.category),
                          )}
                          aria-hidden="true"
                        >
                          <span className="text-3xl font-bold text-primary-100/60">
                            {getCategoryInitial(image.category)}
                          </span>
                          <span className="mt-2 text-xs font-medium text-primary-100/40">
                            {getPlaceholderLabel(image.category)}
                          </span>
                        </div>

                        {/* Actual image (hidden/transparent until real src loads) */}
                        {!image.isPlaceholder && (
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            className={cn(
                              "absolute inset-0 h-full w-full object-cover",
                              "transition-all duration-500 ease-premium-out",
                              "group-hover:scale-105",
                            )}
                          />
                        )}

                        {/* Overlay on hover */}
                        <div
                          className={cn(
                            "absolute inset-0 flex items-center justify-center",
                            "bg-black/0 group-hover:bg-black/30",
                            "transition-all duration-300 ease-premium-out",
                          )}
                        >
                          <div
                            className={cn(
                              "flex size-10 items-center justify-center rounded-full",
                              "bg-white/90 text-ink opacity-0 group-hover:opacity-100",
                              "transition-all duration-300 ease-premium-out",
                            )}
                          >
                            <Maximize2 size={16} aria-hidden="true" />
                          </div>
                        </div>

                        {/* Image info at bottom */}
                        <div
                          className={cn(
                            "absolute bottom-0 left-0 right-0",
                            "bg-gradient-to-t from-black/60 to-transparent",
                            "p-4 pt-8",
                          )}
                        >
                          {image.title && (
                            <h3 className="text-sm font-semibold text-white">
                              {image.title}
                            </h3>
                          )}
                          {image.description && (
                            <p className="mt-0.5 text-xs text-white/70 line-clamp-1">
                              {image.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.p
                variants={fadeUp}
                className="text-center text-muted-foreground"
              >
                No images found in this category.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Video Section — conditionally rendered */}
      {hasVideos && (
        <section
          className="relative bg-muted"
          aria-label="Video Gallery"
        >
          <div className="section-container section-padding">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.h2
                variants={fadeUp}
                className={cn(
                  "font-heading text-3xl font-semibold leading-tight tracking-tight",
                  "sm:text-4xl",
                  "text-ink text-center",
                )}
              >
                Videos
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className={cn(
                      "overflow-hidden rounded-lg border border-border bg-card",
                      "transition-all duration-300 ease-premium-out",
                      "hover:shadow-md",
                    )}
                  >
                    <div className="aspect-video w-full bg-muted">
                      {video.isPlaceholder ? (
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                            <div
                              className={cn(
                                "mx-auto flex size-12 items-center justify-center rounded-full",
                                "bg-primary-50 text-primary",
                              )}
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">
                              {video.duration ?? "Video"}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <video
                          src={video.src}
                          poster={video.poster}
                          controls
                          className="h-full w-full object-cover"
                          aria-label={video.title ?? video.description ?? "Video"}
                        />
                      )}
                    </div>
                    {(video.title || video.description) && (
                      <div className="p-4">
                        {video.title && (
                          <h3 className="text-sm font-semibold text-ink">
                            {video.title}
                          </h3>
                        )}
                        {video.description && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            {video.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <MediaLightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </>
  );
}

// ─── Helper Functions ─────────────────────────────────────────

/** Get placeholder background color class based on category */
function getPlaceholderBg(category: string): string {
  const backgrounds: Record<string, string> = {
    team: "bg-gradient-to-br from-primary-100/30 to-primary-50/20",
    deployments: "bg-gradient-to-br from-primary-50/30 to-muted",
    training: "bg-gradient-to-br from-primary-100/20 to-primary-50/30",
    equipment: "bg-gradient-to-br from-muted to-primary-50/20",
    events: "bg-gradient-to-br from-primary-50/30 to-muted",
  };
  return backgrounds[category] ?? "bg-muted";
}

/** Get first letter of category for placeholder display */
function getCategoryInitial(category: string): string {
  const initials: Record<string, string> = {
    team: "T",
    deployments: "D",
    training: "Tr",
    equipment: "E",
    events: "Ev",
  };
  return initials[category] ?? "P";
}

/** Get placeholder label for category */
function getPlaceholderLabel(category: string): string {
  const labels: Record<string, string> = {
    team: "Team Photo",
    deployments: "Deployment",
    training: "Training",
    equipment: "Equipment",
    events: "Event",
  };
  return labels[category] ?? "Photo";
}

