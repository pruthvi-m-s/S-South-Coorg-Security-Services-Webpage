import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sources = [
  {
    inputDir: "Images",
    outputDir: path.join("public", "images", "responsive", "site"),
    files: [
      "Company owner.webp",
      "Entrance Office Guards.webp",
      "Gate Security.webp",
      "Solo Guard.webp",
      "Tech park Guards.webp",
      "Tech park.webp",
      "Corporate Event.webp",
      "Reception Guard.webp",
      "Office front.webp",
      "Entrance dark.webp",
    ],
  },
  {
    inputDir: "public/images/real",
    outputDir: path.join("public", "images", "responsive", "real"),
    files: [
      "sscss-guards-team-2.webp",
      "sscss-guards-team-1.webp",
      "sscss-guards-team-3.webp",
      "sscss-bodyguard-3.webp",
      "sscss-security-at-entrance.webp",
      "sscss-security-rear.webp",
      "sscss-event-cfee1924.webp",
      "sscss-event-emmr4893.webp",
      "sscss-bodyguard-1.webp",
      "sscss-housekeeping-1.webp",
    ],
  },
];

const widths = [480, 768, 1024, 1400];

for (const source of sources) {
  if (!fs.existsSync(source.inputDir)) continue;

  fs.mkdirSync(source.outputDir, { recursive: true });

  for (const file of source.files) {
    const input = path.join(source.inputDir, file);

    if (!fs.existsSync(input)) {
      console.warn(`Skipped missing: ${input}`);
      continue;
    }

    const ext = path.extname(file);
    const name = path.basename(file, ext);

    for (const width of widths) {
      const output = path.join(
        source.outputDir,
        `${name}-${width}.webp`,
      );

      await sharp(input)
        .resize({
          width,
          withoutEnlargement: true,
        })
        .webp({ quality: 78 })
        .toFile(output);
    }

    console.log(`Generated: ${file}`);
  }
}