# IMAGE REUSE MATRIX — S South Coorg Security Services (SSCSS)

> **Consolidation model.** Shows which master captures get re-cropped and reused across many pages/surfaces, so the entire website can run on a **small, coherent library** rather than ~120 individually-shot files. Reuse across pages also reinforces brand consistency (same guards, same uniforms, same sites = trust).

Keys — **S**: Still (photo) · **V**: Video · **E**: Either. Master capture numbers `M-##` are logical asset IDs (see `IMAGE_ACQUISITION_GUIDE.md` for file naming).

---

## Master capture library (deduplicated)

| Master | Capture | Media | Shoot session |
|--------|---------|-------|---------------|
| M-01 | Home hero — guard at Bengaluru corporate lobby | S/V | Site 1 (corporate) |
| M-02 | About/team — disciplined line of guards at client property | S/V | Site 1 |
| M-03 | Corporate — visitor check-in at glass lobby reception | S/V | Site 1 |
| M-04 | Front office — receptionist at branded corporate desk | S/V | Site 1 |
| M-05 | Security guards — guard at office/community gate salute | S/V | Site 1 |
| M-06 | Industrial — guard inspecting inbound truck at factory gate | S/V | Site 2 (industrial) |
| M-07 | Residential — guard greeting resident at gated community | S/V | Site 3 (residential) |
| M-08 | Housekeeping — cleaner in a modern office corridor | S/V | Site 1 |
| M-09 | Skilled labour — technician with tools at facility panel | S | Site 2 |
| M-10 | Unskilled labour — team unloading at clean warehouse | S | Site 2 |
| M-11 | Corporate staffing — admin staff at bright office | S/V | Site 1 |
| M-12 | Ex-army guard — distinguished upright serviceman | S/V | Site 1 |
| M-13 | Event security — guards managing conference entry | S/V | Site 1 |
| M-14 | BG verification — investigator reviewing documents | S | Studio |
| M-15 | Private detective — discreet investigator, notepad | S | Studio |
| M-16 | IFMS / integrated team — guard+housekeeper+reception+supervisor in lobby | S/V | Site 1 |
| M-17 | Founder portrait (head-and-shoulders 4:5) | S | Studio / site 1 |
| M-18 | Certification scans (PSARA/GST/PF/ESI — 4 separate) | S (scan) | Docs |
| M-19 | Sector thumbnails (apartment/factory/warehouse/IT/hospital/school/hotel/mall/business park/construction/govt) | S | Multiple / stock |
| M-20 | Client logo wall / client-reception (permission-gated) | S/V | Site 1 |
| M-21 | Final-CTA atmosphere — dusk lobby | S/V | Site 1 |
| M-22 | WhyChoose / line-up low-angle wide | S/V | Site 1 |
| M-23 | Process / site-assessment supervisor clip | S/V | Site 1 |
| M-24 | Training & fire-drill clips + stills | S/V | Session 2 (training) |
| M-25 | Control-room / monitoring still + clip | S/V | Session 2 |
| M-26 | Patrol / corridor walkthrough clip | V | Site 1/3 |
| M-27 | Company story / HQ exterior (or founding-era candid) | S | Site / archive |

---

## Page → Master reuse matrix

| Page / Section | Primary master(s) | Secondary / reuse |
|----------------|-------------------|-------------------|
| **Home** hero | M-01 (S/V) | — |
| Home trust ribbon | — (icons) | texture optional |
| Home TrustStats | — | — |
| Home emergency hotline | — (icon) | — |
| Home ServicesPreview (13 cards) | M-05, M-03, M-06, M-07, M-08, M-04, M-09, M-10, M-11, M-12, M-13, M-14, M-15, M-16 | crops of service heroes |
| Home WhyChooseUs | M-22 (frame) | — |
| Home Process | M-23 | — |
| Home Testimonials | — | M-20 logo wall (optional backdrop) |
| Home FounderSection | **M-17** | — |
| Home FinalCta | M-21 | — |
| **About** hero | M-02 | M-01 crop |
| About CompanyStory | M-27 | M-02 |
| About Timeline (per era) | M-27 variants | archive M-02/M-16 |
| About Certs block | **M-18** scans | — |
| About stats | — | — |
| **Services** hub hero | M-16 (IFMS montage) | M-01/M-03 |
| Services hub grid | § service crops | — |
| **Service pages** (13) | **M-05…M-15, M-16** (each its own hero) | crops to card |
| Service Industries Served | M-19 sector crops | — |
| Service Process | M-23 | — |
| Service Key Features | M-14/M-15 details | equipment M-24 |
| Related Services | crops of related service heroes | — |
| **Industries** hero | M-19 collage / montage | M-01 |
| Industries grid (12) | M-19 (sector crops) | — |
| Industries coverage | M-01 / M-02 wide | drone optional |
| **Clients** hero | M-20 logo wall / M-02 | — |
| Clients categories (8) | M-03/M-07/M-08/M-11/M-06/M-12/M-13 crops | M-19 |
| Clients testimonials | — | M-17 avatar concept |
| **Gallery**: Team | M-17, M-12, M-22 | M-02 |
| Gallery: Deployments | M-01/M-03/M-06/M-07/M-13 | M-05/M-16 |
| Gallery: Training | **M-24** (drills) | M-25 |
| Gallery: Equipment | M-25, radios/metal detector | M-14 detail |
| Gallery: Events | M-27, team event candids | M-20 |
| **Compliance** hero/cards | **M-18** scans + M-02 desk | — |
| **FAQs** | — | — |
| **Contact** office + map | M-02 / M-27 + live map embed | M-08 |
| **Thank You** | M-21 (calm) | — |
| **404** | M-01 (calm) | — |

---

## Reuse benefit rules

1. **One capture, many crops.** M-01 drives Home hero, About hero (crop), Contact backdrop, CTA band — coherence without extra shoots.
2. **Service hero = card thumbnail.** Each § service shot (M-05…M-16) is the card thumbnail *and* industry-category crop, halving the file count.
3. **Video masters get poster stills.** Every 🎬 master also exports a poster frame that becomes the `isPlaceholder=false` `<img>` fallback (keeps the site fast and SEO-present).
4. **Sector archive does double duty.** M-19 crops feed Industries grid, Clients categories, and each service's "Industries Served."

## What must NOT be reused

- **Founder portrait** — unique to Founder section/privacy; never as a card thumbnail.
- **Certificate scans** — unique to Compliance/About; never decorative.
- **Client logos** — permission-gated and one-per-brand; never repurposed.
- **Sensitive operational moments** (control-room data, guarded VIP scenes) — restricted to relevant pages; protect client confidentiality with releases.

## Resulting library size

~27 master captures (including 4 scans) → ~75–90 rendered crops/variants → covers every surface in `IMAGE_SHOTLIST.md`. A significant reduction versus ~120 one-off files, with far stronger visual consistency.

