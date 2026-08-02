import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = new URL(".", import.meta.url);
const apps = [
  { id: "redo", source: "redo-master.svg", color: "#087F82" },
  { id: "cgr", source: "cgr-master.svg", color: "#256B8F" },
  { id: "puzzle-notebook", source: "puzzle-notebook-master.svg", color: "#7145A8" },
];

async function renderStandard(svg, size, output) {
  await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "cover" })
    .png()
    .toFile(output);
}

async function renderMaskable(svg, size, color, output) {
  const inner = Math.round(size * 0.78);
  const horizontal = size - inner;
  const top = Math.floor(horizontal / 2);
  const bottom = horizontal - top;

  await sharp(svg, { density: 384 })
    .resize(inner, inner, { fit: "contain", background: color })
    .extend({ top, bottom, left: top, right: bottom, background: color })
    .png()
    .toFile(output);
}

for (const app of apps) {
  const sourceUrl = new URL(app.source, root);
  const svg = await readFile(sourceUrl);
  const outputDir = path.resolve(new URL(`output/${app.id}/`, root).pathname);
  await mkdir(outputDir, { recursive: true });

  await Promise.all([
    renderStandard(svg, 1024, path.join(outputDir, "master-1024.png")),
    renderStandard(svg, 512, path.join(outputDir, "icon-512.png")),
    renderStandard(svg, 192, path.join(outputDir, "icon-192.png")),
    renderStandard(svg, 180, path.join(outputDir, "apple-touch-icon.png")),
    renderMaskable(svg, 512, app.color, path.join(outputDir, "icon-maskable-512.png")),
    renderMaskable(svg, 192, app.color, path.join(outputDir, "icon-maskable-192.png")),
  ]);

  await sharp(svg, { density: 384 })
    .resize(64, 64, { fit: "cover" })
    .png()
    .toFile(path.join(outputDir, "favicon-64.png"));

  console.log(`Generated ${app.id} icon pack in ${outputDir}`);
}

console.log("PNG exports complete. Convert favicon-64.png to favicon.ico in each app repository if ICO is required by its current tooling.");
