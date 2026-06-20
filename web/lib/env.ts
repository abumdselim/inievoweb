/**
 * Environment helpers. Public vars may be empty during local scaffold;
 * Supabase features activate once .env.local is configured.
 */

const DEFAULT_SITE_URL = "https://selimc.tech";

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!url) {
    return DEFAULT_SITE_URL;
  }
  return url.replace(/\/$/, "");
}

export type PublicSupabaseConfig = {
  url: string;
  anonKey: string;
};

export type ServerSecrets = {
  supabaseServiceRoleKey?: string;
  studioSecret?: string;
  studioSessionSecret?: string;
};

export function getPublicSupabaseConfig(): PublicSupabaseConfig {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  };
}

export function hasPublicSupabaseConfig(): boolean {
  const { url, anonKey } = getPublicSupabaseConfig();
  return Boolean(url && anonKey);
}

/** Call only from server contexts (Route Handlers, Server Components, actions). */
export function getServerSecrets(): ServerSecrets {
  return {
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    studioSecret: process.env.STUDIO_SECRET,
    studioSessionSecret: process.env.STUDIO_SESSION_SECRET,
  };
}

export function hasStudioSecrets(): boolean {
  const { supabaseServiceRoleKey, studioSecret, studioSessionSecret } =
    getServerSecrets();
  return Boolean(
    supabaseServiceRoleKey && studioSecret && studioSessionSecret,
  );
}
