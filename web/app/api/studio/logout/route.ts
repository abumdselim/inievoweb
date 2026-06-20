import { NextResponse } from "next/server";
import { STUDIO_SESSION_COOKIE } from "@/lib/studio/session";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(STUDIO_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
