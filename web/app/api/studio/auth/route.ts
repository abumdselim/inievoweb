import { NextResponse } from "next/server";
import {
  STUDIO_SESSION_COOKIE,
  createSessionToken,
  getSessionCookieOptions,
  hasStudioAuthSecrets,
  verifyStudioSecret,
} from "@/lib/studio/session";

type AuthBody = {
  password?: string;
};

export async function POST(request: Request) {
  if (!hasStudioAuthSecrets()) {
    return NextResponse.json(
      { error: "Studio authentication is not configured." },
      { status: 503 },
    );
  }

  let body: AuthBody;
  try {
    body = (await request.json()) as AuthBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const password = body.password?.trim();
  if (!password) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  if (!verifyStudioSecret(password)) {
    return NextResponse.json(
      { error: "Incorrect passphrase. Try again." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(
    STUDIO_SESSION_COOKIE,
    await createSessionToken(),
    getSessionCookieOptions(),
  );
  return response;
}
