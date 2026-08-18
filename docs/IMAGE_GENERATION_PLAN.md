# IMAGE GENERATION PLAN — S South Coorg Security Services (SSCSS)

> **Status:** Proposed for approval — NOT yet implemented. No images have been generated or wired in.
>
> **Purpose:** A locked asset list for the small set of generated visuals that should eventually replace the remaining obvious placeholders / empty visual areas on the site. This plan is deliberately restrained (≈17 generated assets, not dozens) and follows the Apple / Linear / Vercel / Raycast visual language already in use: cinematic, premium, restrained, dark, spacious, highly composed.

## Guardrails (non-negotiable)

1. **No AI-generated people as SSCSS employees.** Generated visuals may contain *no* identifiable personnel. Where a human element is unavoidable, it must be absent, abstract, or far-away and unidentifiable (never presented as SSCSS staff).
2. **Use real SSCSS photography first.** Any surface already served by a real approved photo in `public/images/real/` stays real. Generated visuals are used **only** for environments/concepts where real SSCSS photography does not exist (service environments, training/equipment concepts, control-room ambience).
3. **No fabricated certificates.** Certification surfaces remain request-only evidence. We may refine the *presentation* (premium document-frame treatment) but never generate a fake certificate scan.
4. **Founder portrait is never invented.** No AI person for the founder. If a real authorized portrait is supplied later, it replaces the refined placeholder directly.
5. **No redesign of existing sections, no new animations, no new dependencies, no route/business-claim changes.** These assets drop into existing frames/content slots only.

---

## Proposed generated assets

| # | Asset | Appears in | Aspect ratio | Visual concept | Type | Priority | Use real SSCSS instead? |
|---|-------|-----------|-------------|----------------|------|----------|--------------------------|
| 1 | **Home hero — corporate security atmosphere** (`hero-main`) | `Hero` (Home, LCP) — replaces `src/assets/placeholder/hero.svg` | 4:3 (matches current 800×600 frame) | A premium, cinematic glass-and-steel corporate tower lobby at dusk. Warm security lighting, subtle blue accent glow, polished floor reflections, a single uniformed silhouette far in the background (≤1% of frame, unidentifiable). Empty, spacious, highly composed — no faces, no brand signage. | Photorealistic | **P0** | No — hero is an environment, and real SSCSS team photos are already used by ImageWheel/HomeProof. A distinct cinematic environment gives the Home page a premium first impression without repeating a guard photo. |
| 2 | **Corporate security environment** (`service-corporate-security`) | `ServiceDetailHero` / `ServiceShowcase` for `corporate-security` | 4:3 | Minimalist IT-park entrance / corporate office lobby with glass partitions, access-control turnstile (empty), soft daylight, dark premium grade. No people. | Photorealistic | **P0** | No |
| 3 | **Industrial security environment** (`service-industrial-security`) | `ServiceDetailHero` / `ServiceShowcase` for `industrial-security` | 4:3 | Sprawling warehouse/factory interior at a wide angle — racking, loading dock, perimeter fencing, low-key industrial lighting, deep shadows, one distant unidentifiable figure in a hi-vis vest (≤2% of frame). | Photorealistic | **P0** | No |
| 4 | **Background verification — integrity concept** (`service-background-verification`) | `ServiceDetailHero` / `ServiceShowcase` for `background-verification` | 4:3 | Abstract UI-illustration of layered document cards, a green verification check-path, and a subtle fingerprint motif on a deep navy gradient. Clean, geometric, restrained — pure UI/illustration, not a photo. | UI illustration | **P0** | No |
| 5 | **Front office environment** (`service-front-office-management`) | `ServiceDetailHero` / `ServiceShowcase` for `front-office-management` | 4:3 | Premium corporate reception / front-desk environment — elegant desk, soft ambient light, brandless backdrop, empty chair implying welcome. No person. | Photorealistic | **P1** | No |
| 6 | **Skilled labour environment** (`service-skilled-labour`) | `ServiceDetailHero` / `ServiceShowcase` for `skilled-labour` | 4:3 | Composed workshop / facility-maintenance scene — neatly arranged tools, PPE on hooks, pipes, switchgear, warm task lighting. No people. | Photorealistic | **P1** | No |
| 7 | **Unskilled/general labour environment** (`service-unskilled-labour`) | `ServiceDetailHero` / `ServiceShowcase` for `unskilled-labour` | 4:3 | Warehouse logistics bay — pallets, loading dock, safety-yellow markings, stacked goods, dramatic depth. No people. | Photorealistic | **P1** | No |
| 8 | **Corporate staffing environment** (`service-corporate-staffing`) | `ServiceDetailHero` / `ServiceShowcase` for `corporate-staffing` | 4:3 | Modern open-plan office at dawn — rows of unoccupied desks (or entirely empty floor), warm/cool contrast, cinematic haze. No people. | Photorealistic | **P1** | No |
| 9 | **Private detective — discretion concept** (`service-private-detective`) | `ServiceDetailHero` / `ServiceShowcase` for `private-detective-services` | 4:3 | Abstract 3D concept — magnifying glass over layered documents, a dark city-skyline gradient, subtle fingerprint texture, deep shadow. Dark, mysterious, premium; no person. | 3D / abstract | **P1** | No |
| 10 | **Facility management environment** (`service-facility-management`) | `ServiceDetailHero` / `ServiceShowcase` for `facility-management` | 4:3 | Integrated facilities concept — a modern commercial building exterior at dusk with illuminated floors, a clean service corridor, and subtle multi-service iconography overlay (SSSC-muted). No people. | Photorealistic (with restrained brand overlay) | **P1** | No |
| 11 | **Training room environment** (`gallery-train-room`) | `GalleryGrid` → `train-02` (equipment training) | 4:3 | Empty training room with a projector screen, rolled-up posters, chairs in a neat arc, and a metal-detector on a table — implies training without any attendee faces. | Photorealistic | **P1** | No |
| 12 | **Security equipment still** (`gallery-equip-kit`) | `GalleryGrid` → `equip-01` | 4:3 | Premium flat-lay of SSCSS-style operational kit — walkie-talkie, torch, handcuffs, ID lanyard, whistle — on a matte dark surface, single soft key light, no logos. | Photorealistic (product style) | **P1** | No |
| 13 | **Surveillance/scanning equipment still** (`gallery-equip-scan`) | `GalleryGrid` → `equip-02` | 4:3 | Dark studio shot of a handheld metal-detector scanner and a document scanner, minimalist product photography on deep navy, gentle rim light. | Photorealistic (product style) | **P1** | No |
| 14 | **Control-room ambience** (`image-wheel-ai-slot`) | `ImageWheel` "Future visual" slot | 4:3 | Cinematic empty security control room — wall of monitor screens with soft abstract city/CCTV feeds (blurred, no identifiable data), dark room, blue glow. Swaps the dashed "Image placeholder" tile. | Photorealistic | **P1** | No |
| 15 | **School campus environment** (`gallery-deploy-school`) | `GalleryGrid` → `deploy-04` | 4:3 | Empty school entrance / campus gate at golden hour — gate, pathway, safety markings; no children, no staff. | Photorealistic | **P2** | No |
| 16 | **Healthcare facility environment** (`gallery-deploy-hospital`) | `GalleryGrid` → `deploy-05` | 4:3 | Empty modern hospital entrance / reception corridor — clean lines, soft medical lighting, no people, no signage. | Photorealistic | **P2** | No |
| 17 | **Hotel entrance environment** (`gallery-deploy-hotel`) | `GalleryGrid` → `deploy-06` | 4:3 | Premium hotel porte-cochère at night — warm canopy lighting, empty driveway, no people, no hotel brand. | Photorealistic | **P2** | No |

---

## Surfaces intentionally NOT generated (and why)

| Surface | Current state | Decision / treatment instead |
|---------|--------------|------------------------------|
| Founder portrait | `founder.jpg` missing → bare skeleton | **No AI person.** Improve presentation with a sophisticated placeholder (refined monogram "MS", double-line frame, subtle brand pattern) until a real authorized portrait is supplied. Real portrait is the only swap accepted. |
| Certifications / evidence | "Preview on request" FileText cards (honest) | **No fabricated certificates.** Optionally refine presentation with a premium document-frame aesthetic (paper texture + "Request evidence" affordance) — presentation only, never a fake scan. |
| Deployment `deploy-01` / `deploy-02` | Real SSCSS entrance/rear photos | **Keep real.** No generation. |
| Deployment `deploy-03` (residential) | Placeholder letter-tile | **Reuse real** `images/real/sscss-security-at-entrance.png` (cropped) — real residential SSCSS photo exists. |
| Gallery team tiles (team-01…04) | Real SSCSS photos | **Keep real.** No generation. |
| Gallery events (event-01…03) | Real SSCSS photos | **Keep real.** No generation. |
| About hero / CompanyStory | Real `sscss-guards-team-1.jpg` | **Keep real.** No generation. |
| HomeProof / ImageWheel real tiles | Real SSCSS photos | **Keep real.** No generation. |
| ServicesPreview / IndustryCard grids | Icon cards (no image slot) | **No generation.** Cards stay icon-led; generated service environments serve the detail pages/showcase stage instead. |
| IndustryExplorer stage | Icon-in-box (12 industries) | **Optional P3 (deferred):** if the icon-box looks bare after the above, a single reusable abstract "site coverage" backdrop could be shared across all 12 industries — added only with approval. |
| Client logos / testimonials avatars | Text / initials | **No generation.** Permission-gated real assets only. |

---

## Summary counts

- **Generated assets proposed: 17** (within the 15–20 target)
- **Photorealistic environments:** 11 (#1–3, 5–8, 10–11, 15–17)
- **Photorealistic product stills:** 2 (#12–13)
- **Photorealistic ambience (control room):** 1 (#14)
- **UI illustration:** 1 (#4)
- **3D / abstract concept:** 1 (#9)
- **Existing real SSCSS images preferred over generation:** 10+ surfaces (hero-adjacent trust sections, team/event gallery, About hero, residential deployment)

## Priority rationale

- **P0 (4):** Home hero + the three highest-traffic service environments (Corporate, Industrial, Background Verification). These are the most-visited surfaces after Home and the most visible placeholders today.
- **P1 (9):** Remaining service environments (Front Office, Skilled Labour, Unskilled Labour, Corporate Staffing, Private Detective, Facility Management) + the most visible gallery gaps (Training room, Equipment stills, Control room for ImageWheel).
- **P2 (4):** Lower-traffic gallery deployment environments (School, Hospital, Hotel) that can wait until the P0/P1 set is confirmed and shipped.

## Notes on style

- All photorealistic assets: **dark, restrained, cinematic**, matching the existing `bg-[#09111f]` console and primary-navy palette. No bright stock-photo smiles, no handshakes, no "generic smiling guard" shots.
- All generated imagery must be **visually distinct from real SSCSS personnel photos** so no one mistakes a generated scene for an actual company operation.
- Aspect ratios are chosen to match existing frames exactly so no layout code changes are required (**4:3** hero/detail/gallery tiles, **4:3** ImageWheel slot, **4:5** founder placeholder if ever swapped).

## Next steps (after approval)

1. Generate assets per this list (external tool or AI image service) at 2× size for retina (e.g., 1600×1200 for 4:3).
2. Deliver under `public/images/generated/` with the suggested filenames.
3. Wire in via the content layer only (`hero.ts`, `services.ts`, `gallery.ts`, `founder.ts`) — no component, route, or layout changes.
4. Swap `isPlaceholder: false` only for the surfaces now served by real or generated assets.