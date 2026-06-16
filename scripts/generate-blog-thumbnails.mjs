/**
 * Generate editorial blog thumbnail SVGs for Insights section.
 * Run: npm run generate:blog-thumbnails
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "generated");

function blogSmeWebsiteSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff7ed"/>
      <stop offset="0.55" stop-color="#ffedd5"/>
      <stop offset="1" stop-color="#fed7aa"/>
    </linearGradient>
    <linearGradient id="screen" x1="180" y1="90" x2="520" y2="340" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/>
      <stop offset="1" stop-color="#f8fafc"/>
    </linearGradient>
  </defs>
  <rect width="800" height="440" fill="url(#bg)"/>
  <circle cx="680" cy="80" r="120" fill="#fb923c" opacity="0.18"/>
  <circle cx="90" cy="360" r="90" fill="#f97316" opacity="0.12"/>
  <g opacity="0.35" stroke="#ea580c" stroke-width="1">
    <line x1="0" y1="60" x2="800" y2="60"/>
    <line x1="0" y1="120" x2="800" y2="120"/>
    <line x1="0" y1="180" x2="800" y2="180"/>
  </g>
  <rect x="150" y="72" width="430" height="280" rx="18" fill="url(#screen)" stroke="#fdba74" stroke-width="2"/>
  <rect x="150" y="72" width="430" height="42" rx="18" fill="#fff7ed"/>
  <circle cx="176" cy="93" r="6" fill="#ff5f57"/>
  <circle cx="198" cy="93" r="6" fill="#ffbd2e"/>
  <circle cx="220" cy="93" r="6" fill="#27c93f"/>
  <rect x="176" y="132" width="160" height="14" rx="7" fill="#137ece" opacity="0.85"/>
  <rect x="176" y="158" width="110" height="10" rx="5" fill="#94a3b8" opacity="0.45"/>
  <rect x="176" y="188" width="118" height="88" rx="10" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.25"/>
  <rect x="306" y="188" width="118" height="88" rx="10" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.25"/>
  <rect x="436" y="188" width="118" height="88" rx="10" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.25"/>
  <rect x="176" y="290" width="378" height="38" rx="10" fill="#137ece" opacity="0.12"/>
  <rect x="560" y="132" width="88" height="34" rx="17" fill="#137ece" opacity="0.18"/>
  <rect x="610" y="118" width="130" height="250" rx="22" fill="#ffffff" stroke="#fdba74" stroke-width="2"/>
  <rect x="626" y="142" width="98" height="62" rx="8" fill="#fef3c7"/>
  <rect x="626" y="214" width="98" height="10" rx="5" fill="#cbd5e1"/>
  <rect x="626" y="232" width="72" height="10" rx="5" fill="#cbd5e1"/>
  <rect x="626" y="258" width="98" height="28" rx="8" fill="#137ece" opacity="0.15"/>
  <path d="M552 300 L590 262 L628 286 L676 230 L710 260" stroke="#137ece" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>
  <circle cx="590" cy="262" r="5" fill="#137ece"/>
  <circle cx="676" cy="230" r="5" fill="#137ece"/>
  <rect x="176" y="188" width="118" height="88" rx="10" fill="#ffffff" opacity="0.65"/>
  <path d="M214 236h42M214 252h28" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
  <rect x="248" y="224" width="28" height="28" rx="6" fill="#137ece" opacity="0.2"/>
</svg>`;
}

function blogCustomSoftwareSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#eef2ff"/>
      <stop offset="0.55" stop-color="#e0e7ff"/>
      <stop offset="1" stop-color="#c7d2fe"/>
    </linearGradient>
  </defs>
  <rect width="800" height="440" fill="url(#bg)"/>
  <circle cx="120" cy="90" r="100" fill="#6366f1" opacity="0.16"/>
  <circle cx="700" cy="340" r="130" fill="#4f46e5" opacity="0.12"/>
  <rect x="88" y="88" width="250" height="264" rx="16" fill="#ffffff" stroke="#c7d2fe" stroke-width="2" opacity="0.85"/>
  <rect x="108" y="112" width="88" height="12" rx="6" fill="#94a3b8" opacity="0.35"/>
  <rect x="108" y="136" width="210" height="10" rx="5" fill="#cbd5e1"/>
  <rect x="108" y="156" width="190" height="10" rx="5" fill="#cbd5e1"/>
  <rect x="108" y="176" width="200" height="10" rx="5" fill="#cbd5e1"/>
  <rect x="108" y="206" width="210" height="10" rx="5" fill="#cbd5e1" opacity="0.55"/>
  <rect x="108" y="226" width="180" height="10" rx="5" fill="#cbd5e1" opacity="0.45"/>
  <rect x="108" y="246" width="195" height="10" rx="5" fill="#cbd5e1" opacity="0.35"/>
  <path d="M108 286h210M108 306h170M108 326h190" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round"/>
  <rect x="380" y="96" width="332" height="248" rx="18" fill="#ffffff" stroke="#137ece" stroke-opacity="0.35" stroke-width="2"/>
  <rect x="404" y="120" width="120" height="14" rx="7" fill="#137ece" opacity="0.85"/>
  <rect x="404" y="146" width="84" height="10" rx="5" fill="#94a3b8" opacity="0.45"/>
  <rect x="404" y="176" width="284" height="56" rx="10" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.2"/>
  <rect x="404" y="244" width="136" height="72" rx="10" fill="#137ece" opacity="0.1"/>
  <rect x="552" y="244" width="136" height="72" rx="10" fill="#137ece" opacity="0.1"/>
  <path d="M430 206h232M430 224h180" stroke="#64748b" stroke-width="3" stroke-linecap="round" opacity="0.45"/>
  <circle cx="612" cy="118" r="24" fill="#fef08a" opacity="0.9"/>
  <path d="M612 106v12M612 130v2" stroke="#854d0e" stroke-width="3" stroke-linecap="round"/>
  <circle cx="612" cy="118" r="10" stroke="#854d0e" stroke-width="2.5"/>
  <g stroke="#137ece" stroke-width="2.5" stroke-linecap="round">
    <path d="M338 170 L362 170 L374 182 L404 182" opacity="0.7"/>
    <path d="M338 220 L356 220 L368 208 L404 208" opacity="0.55"/>
    <path d="M338 270 L350 270 L362 258 L404 258" opacity="0.4"/>
  </g>
  <circle cx="350" cy="170" r="5" fill="#137ece"/>
  <circle cx="350" cy="220" r="5" fill="#137ece"/>
  <circle cx="350" cy="270" r="5" fill="#137ece"/>
  <rect x="404" y="176" width="18" height="18" rx="4" fill="#137ece" opacity="0.25"/>
  <path d="M410 185l3 3 6-7" stroke="#137ece" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
}

function blogHyperlocalSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ecfeff"/>
      <stop offset="0.55" stop-color="#e0f2fe"/>
      <stop offset="1" stop-color="#bae6fd"/>
    </linearGradient>
  </defs>
  <rect width="800" height="440" fill="url(#bg)"/>
  <circle cx="640" cy="96" r="110" fill="#0ea5e9" opacity="0.16"/>
  <circle cx="120" cy="350" r="100" fill="#137ece" opacity="0.12"/>
  <path d="M120 320 C220 260, 320 300, 420 240 S620 280, 700 220" stroke="#137ece" stroke-width="2" opacity="0.25"/>
  <path d="M80 360 C180 300, 280 340, 380 280 S580 320, 760 260" stroke="#64748b" stroke-width="1.5" opacity="0.2"/>
  <circle cx="280" cy="210" r="120" fill="#ffffff" opacity="0.55" stroke="#7dd3fc" stroke-width="2"/>
  <circle cx="280" cy="210" r="86" fill="#ffffff" opacity="0.65" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="280" cy="210" r="52" fill="#ffffff" opacity="0.75" stroke="#0ea5e9" stroke-width="1.5"/>
  <path d="M280 132 C252 168, 248 208, 280 268 C312 208, 308 168, 280 132 Z" fill="#137ece" opacity="0.85"/>
  <circle cx="280" cy="206" r="16" fill="#ffffff"/>
  <circle cx="280" cy="206" r="7" fill="#137ece"/>
  <circle cx="220" cy="180" r="8" fill="#137ece" opacity="0.35"/>
  <circle cx="340" cy="170" r="8" fill="#137ece" opacity="0.35"/>
  <circle cx="350" cy="250" r="8" fill="#137ece" opacity="0.35"/>
  <circle cx="210" cy="245" r="8" fill="#137ece" opacity="0.35"/>
  <line x1="280" y1="206" x2="220" y2="180" stroke="#137ece" stroke-width="1.5" opacity="0.35"/>
  <line x1="280" y1="206" x2="340" y2="170" stroke="#137ece" stroke-width="1.5" opacity="0.35"/>
  <line x1="280" y1="206" x2="350" y2="250" stroke="#137ece" stroke-width="1.5" opacity="0.35"/>
  <line x1="280" y1="206" x2="210" y2="245" stroke="#137ece" stroke-width="1.5" opacity="0.35"/>
  <rect x="470" y="98" width="250" height="244" rx="18" fill="#ffffff" stroke="#7dd3fc" stroke-width="2"/>
  <rect x="494" y="122" width="120" height="14" rx="7" fill="#137ece" opacity="0.85"/>
  <rect x="494" y="148" width="202" height="10" rx="5" fill="#94a3b8" opacity="0.45"/>
  <rect x="494" y="176" width="202" height="56" rx="10" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.2"/>
  <rect x="494" y="244" width="94" height="74" rx="10" fill="#137ece" opacity="0.1"/>
  <rect x="602" y="244" width="94" height="74" rx="10" fill="#137ece" opacity="0.1"/>
  <rect x="494" y="176" width="202" height="56" rx="10" fill="#ffffff" opacity="0.55"/>
  <rect x="510" y="192" width="56" height="24" rx="6" fill="#137ece" opacity="0.15"/>
  <rect x="574" y="192" width="56" height="24" rx="6" fill="#137ece" opacity="0.15"/>
  <rect x="638" y="192" width="42" height="24" rx="6" fill="#137ece" opacity="0.15"/>
  <path d="M508 318h170" stroke="#64748b" stroke-width="3" stroke-linecap="round" opacity="0.35"/>
</svg>`;
}

function blogAiAutomationSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#f5f3ff"/>
      <stop offset="0.55" stop-color="#ede9fe"/>
      <stop offset="1" stop-color="#ddd6fe"/>
    </linearGradient>
  </defs>
  <rect width="800" height="440" fill="url(#bg)"/>
  <circle cx="680" cy="90" r="110" fill="#8b5cf6" opacity="0.16"/>
  <circle cx="100" cy="340" r="95" fill="#137ece" opacity="0.12"/>
  <rect x="120" y="88" width="360" height="264" rx="20" fill="#ffffff" stroke="#c4b5fd" stroke-width="2"/>
  <rect x="148" y="116" width="140" height="14" rx="7" fill="#137ece" opacity="0.85"/>
  <rect x="148" y="142" width="220" height="10" rx="5" fill="#94a3b8" opacity="0.45"/>
  <rect x="148" y="176" width="304" height="48" rx="10" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.2"/>
  <rect x="148" y="240" width="304" height="48" rx="10" fill="#8b5cf6" opacity="0.08" stroke="#8b5cf6" stroke-opacity="0.25"/>
  <rect x="148" y="304" width="304" height="16" rx="8" fill="#94a3b8" opacity="0.25"/>
  <circle cx="520" cy="220" r="88" fill="#ffffff" stroke="#8b5cf6" stroke-width="2"/>
  <circle cx="520" cy="220" r="56" fill="#137ece" opacity="0.12"/>
  <path d="M520 176v88M476 220h88" stroke="#137ece" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
  <circle cx="520" cy="220" r="22" fill="#137ece" opacity="0.85"/>
  <path d="M512 220l6 6 12-14" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="580" y="118" width="140" height="36" rx="10" fill="#137ece" opacity="0.12"/>
  <rect x="580" y="166" width="110" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>
  <rect x="580" y="186" width="140" height="36" rx="10" fill="#8b5cf6" opacity="0.12"/>
  <rect x="580" y="234" width="96" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>
</svg>`;
}

function blogEdtechMobileSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ecfdf5"/>
      <stop offset="0.55" stop-color="#d1fae5"/>
      <stop offset="1" stop-color="#a7f3d0"/>
    </linearGradient>
  </defs>
  <rect width="800" height="440" fill="url(#bg)"/>
  <circle cx="660" cy="88" r="105" fill="#10b981" opacity="0.16"/>
  <circle cx="110" cy="350" r="92" fill="#137ece" opacity="0.12"/>
  <rect x="280" y="56" width="200" height="328" rx="28" fill="#0f172a"/>
  <rect x="292" y="78" width="176" height="284" rx="18" fill="#ffffff"/>
  <rect x="308" y="98" width="120" height="12" rx="6" fill="#137ece" opacity="0.85"/>
  <rect x="308" y="122" width="144" height="8" rx="4" fill="#94a3b8" opacity="0.4"/>
  <rect x="308" y="148" width="144" height="72" rx="10" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.2"/>
  <rect x="308" y="232" width="68" height="56" rx="8" fill="#10b981" opacity="0.12"/>
  <rect x="384" y="232" width="68" height="56" rx="8" fill="#137ece" opacity="0.12"/>
  <rect x="308" y="300" width="144" height="10" rx="5" fill="#94a3b8" opacity="0.35"/>
  <rect x="308" y="318" width="96" height="10" rx="5" fill="#94a3b8" opacity="0.25"/>
  <path d="M120 140h96" stroke="#64748b" stroke-width="2" stroke-linecap="round" opacity="0.35"/>
  <path d="M120 170h120" stroke="#64748b" stroke-width="2" stroke-linecap="round" opacity="0.25"/>
  <path d="M120 200h80" stroke="#64748b" stroke-width="2" stroke-linecap="round" opacity="0.25"/>
  <circle cx="160" cy="260" r="36" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
  <path d="M148 260l8 8 16-18" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="520" y="120" width="220" height="200" rx="16" fill="#ffffff" stroke="#6ee7b7" stroke-width="2"/>
  <rect x="544" y="144" width="100" height="12" rx="6" fill="#137ece" opacity="0.85"/>
  <rect x="544" y="168" width="172" height="8" rx="4" fill="#94a3b8" opacity="0.4"/>
  <rect x="544" y="192" width="172" height="48" rx="8" fill="#137ece" opacity="0.08"/>
  <rect x="544" y="252" width="80" height="48" rx="8" fill="#10b981" opacity="0.15"/>
  <rect x="636" y="252" width="80" height="48" rx="8" fill="#137ece" opacity="0.12"/>
</svg>`;
}

function blogDevopsScalingSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="800" y2="440" gradientUnits="userSpaceOnUse">
      <stop stop-color="#eff6ff"/>
      <stop offset="0.55" stop-color="#dbeafe"/>
      <stop offset="1" stop-color="#bfdbfe"/>
    </linearGradient>
  </defs>
  <rect width="800" height="440" fill="url(#bg)"/>
  <circle cx="690" cy="78" r="100" fill="#137ece" opacity="0.14"/>
  <circle cx="90" cy="360" r="88" fill="#0ea5e9" opacity="0.12"/>
  <rect x="100" y="88" width="600" height="264" rx="20" fill="#ffffff" stroke="#93c5fd" stroke-width="2"/>
  <rect x="128" y="116" width="160" height="14" rx="7" fill="#137ece" opacity="0.85"/>
  <rect x="128" y="142" width="240" height="10" rx="5" fill="#94a3b8" opacity="0.45"/>
  <rect x="128" y="176" width="120" height="140" rx="12" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.2"/>
  <rect x="264" y="176" width="120" height="140" rx="12" fill="#0ea5e9" opacity="0.08" stroke="#0ea5e9" stroke-opacity="0.25"/>
  <rect x="400" y="176" width="120" height="140" rx="12" fill="#137ece" opacity="0.08" stroke="#137ece" stroke-opacity="0.2"/>
  <rect x="536" y="176" width="136" height="140" rx="12" fill="#10b981" opacity="0.1" stroke="#10b981" stroke-opacity="0.25"/>
  <circle cx="188" cy="220" r="22" fill="#137ece" opacity="0.85"/>
  <circle cx="324" cy="220" r="22" fill="#0ea5e9" opacity="0.85"/>
  <circle cx="460" cy="220" r="22" fill="#137ece" opacity="0.85"/>
  <path d="M210 220h92M346 220h92" stroke="#64748b" stroke-width="2" stroke-linecap="round" opacity="0.35"/>
  <path d="M482 220h32" stroke="#64748b" stroke-width="2" stroke-linecap="round" opacity="0.35"/>
  <path d="M592 220l-8 8 8 8" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="148" y="268" width="72" height="8" rx="4" fill="#94a3b8" opacity="0.35"/>
  <rect x="284" y="268" width="72" height="8" rx="4" fill="#94a3b8" opacity="0.35"/>
  <rect x="420" y="268" width="72" height="8" rx="4" fill="#94a3b8" opacity="0.35"/>
  <rect x="564" y="268" width="80" height="8" rx="4" fill="#10b981" opacity="0.5"/>
  <path d="M128 340h544" stroke="#137ece" stroke-width="2" opacity="0.2"/>
  <rect x="128" y="356" width="420" height="12" rx="6" fill="#137ece" opacity="0.15"/>
  <rect x="128" y="356" width="280" height="12" rx="6" fill="#137ece" opacity="0.65"/>
</svg>`;
}

const assets = [
  ["blog-sme-website.svg", blogSmeWebsiteSvg()],
  ["blog-custom-software.svg", blogCustomSoftwareSvg()],
  ["blog-hyperlocal-chattogram.svg", blogHyperlocalSvg()],
  ["blog-ai-automation.svg", blogAiAutomationSvg()],
  ["blog-edtech-mobile.svg", blogEdtechMobileSvg()],
  ["blog-devops-scaling.svg", blogDevopsScalingSvg()],
];

async function main() {
  await mkdir(OUT, { recursive: true });
  for (const [name, svg] of assets) {
    await writeFile(path.join(OUT, name), svg, "utf8");
    console.log("wrote", name);
  }
  console.log("Done — blog thumbnails in public/generated/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
