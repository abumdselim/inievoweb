import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, "../../_source_inievo/inievo_web/constants.py");
let src = fs.readFileSync(srcPath, "utf8");

// Strip comments
src = src.replace(/#.*$/gm, "");

// Resolve simple variable references used in f-strings
const EMAIL = "hello@inievo.com";
const PHONE = "+880 9678 791213";
const HQ_ADDRESS = "Chattogram, Bangladesh";
const FOUNDED_YEAR = 2025;
const COMPANY_ORIGIN = "Chattogram";

function resolveFString(s) {
  return s
    .replace(/\{EMAIL\}/g, EMAIL)
    .replace(/\{PHONE\}/g, PHONE)
    .replace(/\{HQ_ADDRESS\}/g, HQ_ADDRESS)
    .replace(/\{FOUNDED_YEAR\}/g, String(FOUNDED_YEAR))
    .replace(/\{COMPANY_ORIGIN\}/g, COMPANY_ORIGIN)
    .replace(/\{year\}/g, String(FOUNDED_YEAR))
    .replace(/\{location\}/g, HQ_ADDRESS);
}

// Join parenthesized string concatenations: ("a" "b") -> "ab"
function joinStringConcats(text) {
  return text.replace(/\(\s*((?:"(?:\\.|[^"\\])*"\s*)+)\)/g, (_, inner) => {
    const parts = inner.match(/"(?:\\.|[^"\\])*"/g) || [];
    const joined = parts.map((p) => JSON.parse(p)).join("");
    return JSON.stringify(joined);
  });
}

src = joinStringConcats(src);

// Convert f-strings and regular strings to JSON strings
src = src.replace(/f"((?:\\.|[^"\\])*)"/g, (_, content) =>
  JSON.stringify(resolveFString(content))
);
src = src.replace(/f'((?:\\.|[^'\\])*)'/g, (_, content) =>
  JSON.stringify(resolveFString(content))
);

// Python True/False/None
src = src.replace(/\bTrue\b/g, "true").replace(/\bFalse\b/g, "false").replace(/\bNone\b/g, "null");

// Tuples -> arrays (simple heuristic for top-level assignments)
src = src.replace(/\(\s*\n/g, "[\n").replace(/\),\s*\n/g, "],\n");
src = src.replace(/\(\s*"/g, '["').replace(/",\s*\n\s*"/g, '",\n    "');

// Dict keys: name: -> "name":
src = src.replace(/(\n\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)/g, '$1"$2"$3');

// Extract uppercase assignments
const exports = [];
const re = /^([A-Z][A-Z0-9_]*)\s*=\s*/gm;
let match;
const assignments = [];
while ((match = re.exec(src)) !== null) {
  assignments.push({ name: match[1], start: match.index + match[0].length });
}

for (let i = 0; i < assignments.length; i++) {
  const { name, start } = assignments[i];
  const end = i + 1 < assignments.length ? assignments[i + 1].start - assignments[i + 1].name.length - 4 : src.length;
  let value = src.slice(start, end).trim();
  if (value.endsWith(",")) value = value.slice(0, -1);
  // Skip derived/computed lines
  if (name === "DETAILED_SERVICES" || name === "PROJECTS_BY_SLUG" || name === "CONTACT_INDUSTRIES") continue;
  try {
    const parsed = new Function(`return (${value});`)();
    exports.push({ name, value: parsed });
  } catch (e) {
    console.warn(`Skip ${name}:`, e.message);
  }
}

// Add derived exports
const coreOfferings = exports.find((e) => e.name === "CORE_OFFERINGS")?.value ?? [];
const projects = exports.find((e) => e.name === "PROJECTS")?.value ?? [];
const industries = exports.find((e) => e.name === "INDUSTRIES")?.value ?? [];

exports.push({ name: "DETAILED_SERVICES", value: coreOfferings.filter((s) => "summary" in s) });
exports.push({ name: "PROJECTS_BY_SLUG", value: Object.fromEntries(projects.map((p) => [p.slug, p])) });
exports.push({ name: "CONTACT_INDUSTRIES", value: industries.map((i) => i.name) });

const outPath = path.resolve(__dirname, "../src/lib/constants.ts");
const body = exports
  .map(({ name, value }) => `export const ${name} = ${JSON.stringify(value, null, 2)} as const;\n`)
  .join("\n");

fs.writeFileSync(
  outPath,
  `/** Auto-converted from inievo_web/constants.py — do not edit by hand unless syncing from source */\n\n${body}`,
  "utf8"
);

console.log(`Wrote ${exports.length} exports to ${outPath}`);
