/**
 * Generate branded SVG placeholder assets for local dev when Python/Pillow is unavailable.
 * Run: node scripts/generate-placeholder-assets.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "generated");

const BLUE = "#137ece";
const BLUE_DARK = "#0f6db8";
const INK = "#0f172a";
const SLATE = "#64748b";

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function heroMeshSvg(w = 1920, h = 1080) {
  const gridLines = [];
  const step = 64;
  for (let x = 0; x <= w; x += step) {
    gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${BLUE}" stroke-opacity="0.08" stroke-width="1"/>`);
  }
  for (let y = 0; y <= h; y += step) {
    gridLines.push(`<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${BLUE}" stroke-opacity="0.08" stroke-width="1"/>`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" fill="#f8fafc"/>
  <circle cx="200" cy="150" r="520" fill="${BLUE}" opacity="0.22"/>
  <circle cx="1400" cy="100" r="480" fill="${BLUE_DARK}" opacity="0.18"/>
  <circle cx="900" cy="500" r="600" fill="#facc15" opacity="0.10"/>
  <circle cx="1600" cy="700" r="400" fill="#f97316" opacity="0.08"/>
  <circle cx="-100" cy="700" r="500" fill="${SLATE}" opacity="0.12"/>
  <g opacity="0.9">${gridLines.join("")}</g>
</svg>`;
}

function heroSvg(label, w = 1920, h = 1080) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${INK}"/>
      <stop offset="55%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="${BLUE_DARK}"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="30%" r="45%">
      <stop offset="0%" stop-color="${BLUE}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${BLUE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <circle cx="320" cy="820" r="220" fill="${BLUE}" opacity="0.12"/>
  <circle cx="1580" cy="180" r="180" fill="#facc15" opacity="0.08"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
    fill="white" font-family="Segoe UI, system-ui, sans-serif" font-size="42" font-weight="700" opacity="0.35">
    ${escapeXml(label)}
  </text>
</svg>`;
}

function cardSvg(label, accent = BLUE, w = 800, h = 520) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" rx="24" fill="url(#card)"/>
  <rect x="48" y="48" width="120" height="120" rx="24" fill="${accent}" opacity="0.15"/>
  <rect x="48" y="200" width="520" height="20" rx="10" fill="${SLATE}" opacity="0.25"/>
  <rect x="48" y="240" width="680" height="14" rx="7" fill="${SLATE}" opacity="0.18"/>
  <rect x="48" y="268" width="620" height="14" rx="7" fill="${SLATE}" opacity="0.18"/>
  <text x="48" y="420" fill="${INK}" font-family="Segoe UI, system-ui, sans-serif" font-size="28" font-weight="800">${escapeXml(label)}</text>
</svg>`;
}

function iconTile(label, w = 256, h = 256) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="100%" height="100%" rx="32" fill="${BLUE}" opacity="0.12"/>
  <rect x="24" y="24" width="208" height="208" rx="28" fill="white" stroke="#e2e8f0"/>
  <circle cx="128" cy="108" r="36" fill="${BLUE}" opacity="0.85"/>
  <text x="128" y="188" text-anchor="middle" fill="${INK}" font-family="Segoe UI, system-ui, sans-serif" font-size="16" font-weight="700">${escapeXml(label)}</text>
</svg>`;
}

const ASSETS = {
  "hero-mesh.svg": heroMeshSvg(),
  "hero-dashboard.svg": cardSvg("Product Dashboard", BLUE, 1200, 720),
  "hero-dashboard-mobile.svg": cardSvg("Mobile App", BLUE, 600, 900),
  "logo.svg": iconTile("Inievo", 320, 96),
  "favicon.svg": iconTile("I", 64, 64),
  "hero-services.svg": heroSvg("Services"),
  "hero-company.svg": heroSvg("Company"),
  "hero-contact.svg": heroSvg("Contact"),
  "hero-projects.svg": heroSvg("Portfolio"),
  "company-story.svg": cardSvg("Our Story", "#334155"),
  "contact-illustration.svg": cardSvg("Contact", BLUE),
  "project-chattala.svg": cardSvg("The Chattala", "#f97316"),
  "project-pucpro.svg": cardSvg("PUC PRO", BLUE),
  "project-bengaldesk.svg": cardSvg("Bengal Desk", "#059669"),
  "case-chattala.svg": cardSvg("The Chattala Case Study", "#f97316", 960, 600),
  "case-pucpro.svg": cardSvg("PUC PRO Case Study", BLUE, 960, 600),
  "case-bengaldesk.svg": cardSvg("Bengal Desk Case Study", "#059669", 960, 600),
  "icon-custom.svg": iconTile("Custom"),
  "icon-cloud-tile.svg": iconTile("Cloud"),
  "icon-ai-tile.svg": iconTile("AI"),
  "icon-design-tile.svg": iconTile("Design"),
  "offering-custom.svg": cardSvg("Custom Software", BLUE, 800, 176),
  "offering-cloud.svg": cardSvg("Cloud & DevOps", BLUE_DARK, 800, 176),
  "offering-ai.svg": cardSvg("AI Automation", "#7c3aed", 800, 176),
  "offering-design.svg": cardSvg("UI/UX Design", "#f97316", 800, 176),
  "icon-process-discovery.svg": iconTile("Discovery"),
  "icon-process-engineering.svg": iconTile("Build"),
  "icon-process-deploy.svg": iconTile("Deploy"),
  "icon-contact-mail.svg": iconTile("Email"),
  "icon-contact-phone.svg": iconTile("Phone"),
  "icon-contact-map.svg": iconTile("Map"),
  "badge-iso-ready.svg": iconTile("ISO Ready"),
  "badge-agile.svg": iconTile("Agile"),
  "badge-ip.svg": iconTile("IP"),
};

await mkdir(OUT, { recursive: true });
for (const [name, svg] of Object.entries(ASSETS)) {
  await writeFile(path.join(OUT, name), svg, "utf8");
  console.log("wrote", name);
}
console.log(`Done — ${Object.keys(ASSETS).length} placeholder SVGs in public/generated/`);
