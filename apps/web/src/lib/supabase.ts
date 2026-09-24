/**
 * Reexport del cliente Supabase del monorepo.
 * Uso en componentes: createBrowserSupabaseClient()
 * Uso en server functions: createServiceSupabaseClient()
 */
export {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
  createServiceSupabaseClient,
  hasSupabasePublicConfig,
} from "@sitio/supabase";
