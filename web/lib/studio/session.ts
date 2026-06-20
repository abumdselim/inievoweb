import { cookies } from "next/headers";
import { getServerSecrets } from "@/lib/env";

export const STUDIO_SESSION_COOKIE = "studio_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

type SessionPayload = {
  iat: number;
  exp: number;
};

function getSessionSigningSecret(): string | undefined {
  return getServerSecrets().studioSessionSecret;
}

function timingSafeEqualStrings(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let index = 0; index < a.length; index += 1) {
    result |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return result === 0;
}

async function signPayload(payloadB64: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payloadB64),
  );
  return Buffer.from(signature).toString("base64url");
}

export async function createSessionToken(): Promise<string> {
  const secret = getSessionSigningSecret();
  if (!secret) {
    throw new Error("STUDIO_SESSION_SECRET is not configured.");
  }

  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = {
    iat: now,
    exp: now + SESSION_MAX_AGE_SECONDS,
  };
  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${payloadB64}.${await signPayload(payloadB64, secret)}`;
}

export async function verifySessionToken(token: string): Promise<boolean> {
  const secret = getSessionSigningSecret();
  if (!secret) {
    return false;
  }

  try {
    const dotIndex = token.indexOf(".");
    if (dotIndex <= 0) {
      return false;
    }

    const payloadB64 = token.slice(0, dotIndex);
    const signature = token.slice(dotIndex + 1);
    if (!payloadB64 || !signature) {
      return false;
    }

    const expectedSignature = await signPayload(payloadB64, secret);
    if (!timingSafeEqualStrings(signature, expectedSignature)) {
      return false;
    }

    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString("utf8"),
    ) as SessionPayload;

    return payload.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export async function hasValidStudioSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(STUDIO_SESSION_COOKIE)?.value;
  if (!token) {
    return false;
  }
  return verifySessionToken(token);
}

/** Verify studio session from httpOnly cookie — use in Route Handlers. */
export async function getSessionFromCookies(): Promise<boolean> {
  return hasValidStudioSession();
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  };
}

export function verifyStudioSecret(input: string): boolean {
  const { studioSecret } = getServerSecrets();
  if (!studioSecret) {
    return false;
  }

  return timingSafeEqualStrings(input, studioSecret);
}

export function hasStudioAuthSecrets(): boolean {
  const { studioSecret, studioSessionSecret } = getServerSecrets();
  return Boolean(studioSecret && studioSessionSecret);
}
