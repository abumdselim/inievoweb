import { NextResponse } from "next/server";
import { hasStudioSecrets } from "@/lib/env";
import { getSessionFromCookies } from "@/lib/studio/session";

export async function requireStudioSession(): Promise<NextResponse | null> {
  if (!(await getSessionFromCookies())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function requireStudioService(): Promise<NextResponse | null> {
  const sessionError = await requireStudioSession();
  if (sessionError) {
    return sessionError;
  }

  if (!hasStudioSecrets()) {
    return NextResponse.json(
      { error: "Studio is not fully configured." },
      { status: 503 },
    );
  }

  return null;
}
