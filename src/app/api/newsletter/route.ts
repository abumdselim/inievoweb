import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SUBS_FILE = path.join(DATA_DIR, "subscribers.json");

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(SUBS_FILE);
  } catch {
    await fs.writeFile(SUBS_FILE, "[]", "utf8");
  }
}

export async function POST(request: Request) {
  const { email } = await request.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
  await ensureDataFile();
  const raw = await fs.readFile(SUBS_FILE, "utf8");
  const subs = JSON.parse(raw) as unknown[];
  subs.push({ email, created_at: new Date().toISOString() });
  await fs.writeFile(SUBS_FILE, JSON.stringify(subs, null, 2), "utf8");
  await new Promise((r) => setTimeout(r, 500));
  return NextResponse.json({ ok: true });
}
