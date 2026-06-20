import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getPublicSupabaseConfig, hasPublicSupabaseConfig } from "@/lib/env";

export function createClient() {
  const { url, anonKey } = getPublicSupabaseConfig();

  if (!hasPublicSupabaseConfig()) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  return createSupabaseClient(url, anonKey);
}
