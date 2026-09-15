import { useState, useMemo, useCallback, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import DriftWall from "@/components/DriftWall";
import type { DriftWallItem } from "@/components/DriftWall";
import type { GalleryImage } from "@/content/gallery";
import { staggerContainer, fadeUp, viewportOptions } from "@/lib/motion";

const MediaLightbox = lazy(
  () => import("@/components/sections/MediaLightbox"),
);

interface GalleryDriftWallProps {
  images: GalleryImage[];
  className?: string;
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export default function GalleryDriftWall({
  images,
  className,
}: GalleryDriftWallProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const isVerySmall = useMediaQuery("(max-width: 429px)");
  const isMobile = useMediaQuery("(max-width: 639px)");
  const columns = isVerySmall ? 2 : isMobile ? 3 : 5;

  const driftWallItems = useMemo<DriftWallItem[]>(() => {
    return images.map((image) => ({
      image: image.src,
      title: image.title || image.alt,
      href: undefined,
    }));
  }, [images]);

  const lightboxItems = useMemo(() => {
    return images.map((image) => ({
      id: image.id,
      src: image.src,
      alt: image.alt,
      title: image.title,
      description: image.description,
      type: "image" as const,
    }));
  }, [images]);

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

  return (
    <>
      <section
        className={cn(
          "relative overflow-hidden bg-[#10100f] py-12 sm:py-16 lg:py-20",
          className,
        )}
        aria-label="Security operations gallery"
      >
        <div className="section-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c45a52]"
            >
              Real Presence
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-md font-heading text-3xl font-semibold tracking-tight text-[#f5f1e8] sm:text-4xl"
            >
              Our Security in Action
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-7 text-[#b4aea5] sm:text-base"
            >
              Explore our deployments, team, and operations through this dynamic gallery.
            </motion.p>
          </motion.div>
        </div>

        <DriftWall
          items={driftWallItems}
          columns={columns}
          tileWidth={isVerySmall ? 110 : isMobile ? 140 : 200}
          tileHeight={isVerySmall ? 73 : isMobile ? 93 : 132}
          gap={isVerySmall ? 8 : isMobile ? 12 : 18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#10100f"
          radius={14}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />

        <div className="section-container mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-[#3a3835] bg-[#191918] px-6 py-3 text-sm font-semibold text-[#f5f1e8] transition-all duration-200",
              "hover:border-[#b52b22] hover:bg-[#b52b22]/10",
              "focus-visible:outline-2 focus-visible:outline-[#b52b22] focus-visible:outline-offset-2",
            )}
            data-analytics-cta="gallery_driftwall_view_all"
          >
            <Eye size={16} aria-hidden="true" />
            View Full Gallery
          </button>
        </div>
      </section>

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