import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import {
  getSupabaseAnonKey,
  getSupabaseServiceRoleKey,
  getSupabaseUrl,
} from "./env";

/** Cliente servidor con rol de servicio (bypassa RLS). Solo en server functions / loaders. */
export function createServiceSupabaseClient(): SupabaseClient {
  return createClient(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/** Cliente servidor con anon key (respeta RLS). Útil si pasas el JWT del usuario. */
export function createServerSupabaseClient(accessToken?: string): SupabaseClient {
  return createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    ...(accessToken
      ? { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
      : {}),
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
