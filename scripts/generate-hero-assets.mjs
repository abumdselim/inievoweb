/**
 * Generate hero-section raster assets (mesh + dashboard mockups).
 * Python/Pillow unavailable — ports inievo_web.tools.generate_assets hero functions via sharp.
 *
 * Run: npm run generate:hero-assets
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "generated");

function heroMeshSvg(w = 1920, h = 1080) {
  const fine = 24;
  const major = 96;
  const grid = [];
  for (let x = 0; x <= w; x += fine) {
    const strong = x % major === 0;
    grid.push(
      `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="#94a3b8" stroke-opacity="${strong ? "0.18" : "0.10"}" stroke-width="1"/>`
    );
  }
  for (let y = 0; y <= h; y += fine) {
    const strong = y % major === 0;
    grid.push(
      `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="#94a3b8" stroke-opacity="${strong ? "0.18" : "0.10"}" stroke-width="1"/>`
    );
  }
  for (let x = 0; x <= w; x += major) {
    for (let y = 0; y <= h; y += major) {
      grid.push(`<circle cx="${x}" cy="${y}" r="1.25" fill="#94a3b8" fill-opacity="0.28"/>`);
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" fill="#f8fafc"/>
  <g>${grid.join("")}</g>
</svg>`;
}

function chartPath(w, ox, oy) {
  const points = [];
  for (let i = 0; i < 20; i++) {
    const x = ox + 160 + i * 14;
    const y = oy + 180 - Math.round(60 * Math.sin(i * 0.5) + 30);
    points.push(`${x},${y}`);
  }
  const first = points[0].split(",");
  const last = points[points.length - 1].split(",");
  return `
    <polyline points="${points.join(" ")}" fill="none" stroke="#137ece" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <polygon points="${first[0]},${oy + 190} ${points.join(" ")} ${last[0]},${oy + 190}" fill="#137ece" fill-opacity="0.12"/>
  `;
}

function dashboardSvg(w, h, title) {
  const stats = [
    ["99.9%", "Uptime"],
    ["18.2k", "Req/s"],
    ["12", "Regions"],
  ];
  const statCards = stats
    .map(([val, lbl], i) => {
      const sx = 146 + i * 108;
      return `
        <rect x="${sx}" y="214" width="96" height="66" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
        <text x="${sx + 10}" y="236" fill="#137ece" font-family="Segoe UI, system-ui, sans-serif" font-size="16" font-weight="700">${val}</text>
        <text x="${sx + 10}" y="256" fill="#64748b" font-family="Segoe UI, system-ui, sans-serif" font-size="11">${lbl}</text>
      `;
    })
    .join("");

  const sidebarItems = Array.from({ length: 5 }, (_, i) => {
    const fill = i === 0 ? "#137ece" : "#e2e8f0";
    return `<rect x="28" y="${100 + i * 28}" width="90" height="18" rx="4" fill="${fill}"/>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#f8fafc"/>
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${w > 500 ? 30 : 24}"/>
    </filter>
  </defs>
  <ellipse cx="${w / 2}" cy="${h - 40}" rx="${w * 0.38}" ry="${h * 0.22}" fill="rgba(19,126,206,0.16)" filter="url(#glow)"/>
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" rx="16" fill="#ffffff" stroke="#e2e8f0"/>
  <rect x="0" y="0" width="${w}" height="44" fill="#f8fafc"/>
  <circle cx="22" cy="22" r="6" fill="#ff5f57"/>
  <circle cx="44" cy="22" r="6" fill="#ffbd2e"/>
  <circle cx="66" cy="22" r="6" fill="#27c93f"/>
  <text x="16" y="72" fill="#0f172a" font-family="Segoe UI, system-ui, sans-serif" font-size="14" font-weight="700">${title}</text>
  <rect x="16" y="88" width="114" height="232" rx="10" fill="#f1f5f9"/>
  ${sidebarItems}
  <rect x="146" y="88" width="314" height="112" rx="10" fill="#f1f5f9"/>
  ${chartPath(w, 0, 0)}
  ${statCards}
</svg>`;
}

async function writeSvgAsset(name, svg, format, options = {}) {
  const outPath = path.join(OUT, name);
  let pipeline = sharp(Buffer.from(svg));
  if (format === "webp") pipeline = pipeline.webp({ quality: 90, ...options });
  else pipeline = pipeline.png({ compressionLevel: 9, ...options });
  await pipeline.toFile(outPath);
  console.log("wrote", name);
}

async function main() {
  await mkdir(OUT, { recursive: true });
  await writeSvgAsset("hero-mesh.webp", heroMeshSvg(), "webp");
  await writeSvgAsset("hero-dashboard.png", dashboardSvg(640, 480, "core-api · production"), "png");
  await writeSvgAsset("hero-dashboard-mobile.png", dashboardSvg(480, 340, "core-api · prod"), "png");
  console.log("Done — hero assets in public/generated/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
