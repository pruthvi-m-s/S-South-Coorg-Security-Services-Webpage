import fs from "fs";
import path from "path";
import sharp from "sharp";

const folders = [
  "public/images/services",
  "public/images/real",
];

for (const folder of folders) {
  if (!fs.existsSync(folder)) continue;

  const files = fs.readdirSync(folder);

  for (const file of files) {
    if (!/\.(png|jpg|jpeg)$/i.test(file)) continue;

    const input = path.join(folder, file);
    const output = input.replace(/\.(png|jpg|jpeg)$/i, ".webp");

    await sharp(input)
      .webp({ quality: 78 })
      .toFile(output);

    console.log(`${input} -> ${output}`);
  }
}
