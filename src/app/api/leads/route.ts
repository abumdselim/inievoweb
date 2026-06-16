import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(LEADS_FILE);
  } catch {
    await fs.writeFile(LEADS_FILE, "[]", "utf8");
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  await ensureDataFile();
  const raw = await fs.readFile(LEADS_FILE, "utf8");
  const leads = JSON.parse(raw) as unknown[];
  leads.push({ ...body, created_at: new Date().toISOString() });
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
  await new Promise((r) => setTimeout(r, 800));
  return NextResponse.json({ ok: true });
}
