import {
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Maximize2 } from "lucide-react";
import ImageWithSkeleton from "@/components/common/ImageWithSkeleton";
import Skeleton from "@/components/common/Skeleton";
import type { LightboxMedia } from "@/components/sections/MediaLightbox";
import {
  trackGalleryInteraction,
  getSourcePage,
} from "@/lib/analytics";
import {
  staggerContainer,
  fadeUp,
  viewportOptions,
} from "@/lib/motion";
import type {
  GalleryImage,
  GalleryVideo,
  GalleryCategory,
} from "@/content/gallery";
import {
  entranceOfficeGuards,
  gateSecurity,
  soloGuard,
  techPark,
  techParkGuards,
} from "@/lib/site-images";

const MediaLightbox = lazy(
  () => import("@/components/sections/MediaLightbox"),
);

const galleryAssets = [
  entranceOfficeGuards,
  gateSecurity,
  soloGuard,
  techParkGuards,
  techPark,
];

interface GalleryGridProps {
  title: string;
  subtitle: string;
  categories: GalleryCategory[];
  images: GalleryImage[];
  videos: GalleryVideo[];
  className?: string;
}

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

  const [activeCategory, setActiveCategory] =
    useState("all");

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const [lightboxIndex, setLightboxIndex] =
    useState(0);

  const availableImages = useMemo(
    () =>
      images.map((image, index) =>
        image.isPlaceholder
          ? {
              ...image,
              src:
                galleryAssets[
                  index % galleryAssets.length
                ],
              isPlaceholder: false,
            }
          : image,
      ),
    [images],
  );

  const availableCategories = useMemo(
    () =>
      categories.filter(
        (category) =>
          category.slug === "all" ||
          availableImages.some(
            (image) =>
              image.category === category.slug,
          ),
      ),
    [availableImages, categories],
  );

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return availableImages;
    }

    return availableImages.filter(
      (image) =>
        image.category === activeCategory,
    );
  }, [availableImages, activeCategory]);

  const lightboxItems: LightboxMedia[] = useMemo(
    () =>
      filteredImages.map((image) => ({
        id: image.id,
        src: image.src,
        alt: image.alt,
        title: image.title,
        description: image.description,
        type: "image",
      })),
    [filteredImages],
  );

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
          "bg-[#10100f] text-[#f5f1e8]",
          className,
        )}
        aria-labelledby="gallery-grid-title"
      >
        <div className="section-container section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
                >
                  Photo collection
                </motion.p>

                <motion.h2
                  id="gallery-grid-title"
                  variants={fadeUp}
                  className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#f5f1e8] sm:text-5xl"
                >
                  {title}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-md text-sm leading-7 text-[#b4aea5] sm:text-base"
                >
                  {subtitle}
                </motion.p>
              </div>

              <div>
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap gap-2"
                  aria-label="Filter gallery by category"
                >
                  {availableCategories.map(
                    (category) => {
                      const active =
                        activeCategory ===
                        category.slug;

                      return (
                        <button
                          key={category.slug}
                          type="button"
                          aria-pressed={active}
                          onClick={() => {
                            trackGalleryInteraction({
                              source_page: sourcePage,
                              action: "filter",
                              category:
                                category.slug,
                            });

                            setActiveCategory(
                              category.slug,
                            );
                            setLightboxOpen(false);
                          }}
                          className={cn(
                            "min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                            "focus-visible:outline-2 focus-visible:outline-[#b52b22] focus-visible:outline-offset-2",
                            active
                              ? "border-[#b52b22] bg-[#b52b22] text-white"
                              : "border-[#3a3835] bg-transparent text-[#99938c] hover:border-[#77716a] hover:text-[#f5f1e8]",
                          )}
                        >
                          {category.label}
                        </button>
                      );
                    },
                  )}
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  role="status"
                  aria-live="polite"
                  className="mt-5 text-xs uppercase tracking-[0.12em] text-[#77716a]"
                >
                  Showing {filteredImages.length}{" "}
                  {filteredImages.length === 1
                    ? "image"
                    : "images"}
                </motion.p>
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-12"
            >
              {filteredImages.length > 0 ? (
                <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                  {filteredImages.map(
                    (image, index) => (
                      <motion.button
                        key={image.id}
                        type="button"
                        variants={fadeUp}
                        onClick={() => {
                          trackGalleryInteraction({
                            source_page:
                              sourcePage,
                            action: "open",
                            category:
                              image.category,
                            media_id: image.id,
                          });

                          openLightbox(index);
                        }}
                        className={cn(
                          "group relative mb-4 block w-full overflow-hidden border border-[#2b2927] bg-[#191918] text-left",
                          "transition-all duration-300 ease-premium-out",
                          "hover:-translate-y-0.5 hover:border-[#3a3835] hover:shadow-lg",
                          "focus-visible:outline-2 focus-visible:outline-[#b52b22] focus-visible:outline-offset-2",
                        )}
                        aria-haspopup="dialog"
                        aria-label={`Open ${image.title ?? image.alt}`}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <ImageWithSkeleton
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            skeleton={
                              <Skeleton className="h-full w-full rounded-none bg-[#2b2927]" />
                            }
                            containerClassName="absolute inset-0"
                            className={cn(
                              "absolute inset-0 h-full w-full object-cover",
                              "transition-transform duration-500 ease-premium-out",
                              "group-hover:scale-105",
                            )}
                          />

                          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

                          <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <Maximize2
                              size={15}
                              aria-hidden="true"
                            />
                          </div>

                          {(image.title ||
                            image.description) && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 pt-12">
                              {image.title && (
                                <h3 className="text-sm font-semibold text-white">
                                  {image.title}
                                </h3>
                              )}

                              {image.description && (
                                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/70">
                                  {
                                    image.description
                                  }
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.button>
                    ),
                  )}
                </div>
              ) : (
                <div className="border border-[#2b2927] bg-[#191918] px-6 py-14 text-center">
                  <p className="text-sm text-[#77716a]">
                    No images found in this
                    category.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {hasVideos && (
        <section
          className="bg-[#f3efe6] text-[#171615]"
          aria-label="Video Gallery"
        >
          <div className="section-container section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]">
                Video gallery
              </p>

              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Watch SSCSS in action.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <article
                  key={video.id}
                  className="overflow-hidden border border-[#d9d1c5] bg-[#ebe5da]"
                >
                  <div className="aspect-video bg-[#ded8cf]">
                    {video.isPlaceholder ? (
                      <div className="flex h-full items-center justify-center text-center">
                        <div>
                          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#f3efe6] text-[#ad241c]">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>

                          <p className="mt-2 text-xs text-[#77716a]">
                            {video.duration ??
                              "Video"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <video
                        src={video.src}
                        poster={video.poster}
                        controls
                        className="h-full w-full object-cover"
                        aria-label={
                          video.title ??
                          video.description ??
                          "Video"
                        }
                      />
                    )}
                  </div>

                  {(video.title ||
                    video.description) && (
                    <div className="p-5">
                      {video.title && (
                        <h3 className="font-heading text-lg font-semibold text-[#171615]">
                          {video.title}
                        </h3>
                      )}

                      {video.description && (
                        <p className="mt-2 text-sm leading-6 text-[#6a655e]">
                          {video.description}
                        </p>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Suspense fallback={null}>
        <MediaLightbox
          items={lightboxItems}
          currentIndex={lightboxIndex}
          open={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      </Suspense>
    </>
  );
}