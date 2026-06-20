import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  STUDIO_SESSION_COOKIE,
  verifySessionToken,
} from "@/lib/studio/session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(STUDIO_SESSION_COOKIE)?.value;
  const isAuthenticated = Boolean(token && (await verifySessionToken(token)));

  if (pathname === "/studio/login") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/studio", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/studio")) {
    if (!isAuthenticated) {
      const loginUrl = new URL("/studio/login", request.url);
      if (pathname !== "/studio") {
        loginUrl.searchParams.set("from", pathname);
      }
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio", "/studio/:path*"],
};
