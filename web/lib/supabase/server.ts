import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import {
  getPublicSupabaseConfig,
  getServerSecrets,
  hasPublicSupabaseConfig,
} from "@/lib/env";

/** Server-side client using anon key — suitable for public reads with RLS. */
export function createAnonClient() {
  const { url, anonKey } = getPublicSupabaseConfig();

  if (!hasPublicSupabaseConfig()) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  return createSupabaseClient(url, anonKey);
}

/** Server-side client with service role — Studio CRUD only. Never import in client components. */
export function createServiceClient() {
  const { url } = getPublicSupabaseConfig();
  const { supabaseServiceRoleKey } = getServerSecrets();

  if (!url || !supabaseServiceRoleKey) {
    throw new Error(
      "Service client requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return createSupabaseClient(url, supabaseServiceRoleKey);
}
