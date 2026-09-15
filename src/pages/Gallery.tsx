import GalleryHero from "@/components/sections/GalleryHero";
import GalleryDriftWall from "@/components/sections/GalleryDriftWall";
import GalleryGrid from "@/components/sections/GalleryGrid";
import TrustHighlights from "@/components/sections/TrustHighlights";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import {
  GALLERY,
  FINAL_CTA,
  getRealImages,
  getRealVideos,
  getPopulatedCategories,
} from "@/content";

export default function GalleryPage() {
  const realImages = getRealImages(GALLERY.images);
  const realVideos = getRealVideos(GALLERY.videos);
  const populatedCategories = getPopulatedCategories(
    GALLERY.categories,
    GALLERY.images,
  );

  return (
    <div className="bg-[#10100f] text-[#f5f1e8]">
      <GalleryHero
        title={GALLERY.hero.title}
        subtitle={GALLERY.hero.subtitle}
      />

      <section
        className="bg-[#f3efe6] text-[#171615]"
        aria-labelledby="gallery-intro-title"
      >
        <div className="section-container section-padding">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ad241c]">
                Inside SSCSS
              </p>

              <h2
                id="gallery-intro-title"
                className="mt-3 max-w-md font-heading text-4xl font-semibold tracking-tight text-[#171615] sm:text-5xl"
              >
                {GALLERY.intro.title}
              </h2>
            </div>

            <p className="max-w-2xl border-t border-[#d9d1c5] pt-6 text-base leading-7 text-[#6a655e] sm:text-lg">
              {GALLERY.intro.subtitle}
            </p>
          </div>
        </div>
      </section>

      <GalleryDriftWall images={realImages} />

      <GalleryGrid
        title="Our Photo Collection"
        subtitle="Browse through images of SSCSS people, deployments, and events."
        categories={populatedCategories}
        images={realImages}
        videos={realVideos}
      />

      <TrustHighlights
        title={GALLERY.trustHighlights.title}
        subtitle={GALLERY.trustHighlights.subtitle}
        items={GALLERY.trustHighlights.items}
        className="bg-[#191918] text-[#f5f1e8]"
      />

      <FinalCtaSection content={FINAL_CTA} />
    </div>
  );
}