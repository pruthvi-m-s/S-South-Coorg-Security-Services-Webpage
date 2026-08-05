# TODO — Global Color Palette Redesign ✅ COMPLETE

Migrate the SSCSS design system from the current light/maroon theme to the new premium dark palette.

**New Palette**
- Background: `#080806`
- Text (foreground): `#EAECE4`
- Primary: `#C3C8B2` (sage)
- Secondary: `#474662` (indigo)
- Accent: `#A381A5` (mauve)

## Steps

- [x] Step 1: Compute exact oklch values for all new palette colors and derived shades.
- [x] Step 2: Rewrite `:root` semantic color tokens in `src/index.css` to the new dark palette.
- [x] Step 3: Update `.dark` theme tokens in `src/index.css` to match the new palette.
- [x] Step 4: Update `::selection` background in base styles.
- [x] Step 5: Replace hardcoded maroon `#8B1E1E` in `FounderSection.tsx` with a semantic token.
- [x] Step 6: Update `themeColor` in `src/content/seo.ts` to the new palette (`#080806`).
- [x] Step 7: Restore 8 deleted infrastructure files (routes, icons, motion, seo, structured-data, seo-files, routes.tsx, ReusableAccordion).
- [x] Step 8: Update hero placeholder SVG + OG social image to the new palette.
- [x] Step 9: Verify all pages/components for contrast & consistency.

## Build Status
✅ `npm run build` passes — production build succeeded (✓ built in 1.36s).
