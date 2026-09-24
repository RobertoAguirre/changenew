type ViteEnv = { env?: Record<string, string | undefined> };

function fromVite(name: string): string | undefined {
  try {
    const meta = import.meta as ImportMeta & ViteEnv;
    return meta.env?.[name];
  } catch {
    return undefined;
  }
}

function fromProcess(name: string): string | undefined {
  return typeof process !== "undefined" ? process.env[name] : undefined;
}

function read(name: string, fallbacks: string[] = []): string | undefined {
  for (const key of [name, ...fallbacks]) {
    const value = fromVite(key) ?? fromProcess(key);
    if (value) return value;
  }
  return undefined;
}

/** Variables públicas (cliente + servidor). */
export function getSupabaseUrl(): string {
  const url = read("VITE_SUPABASE_URL", ["SUPABASE_URL"]);
  if (!url) {
    throw new Error(
      "Falta SUPABASE_URL o VITE_SUPABASE_URL. Configúrala en .env o en Render.",
    );
  }
  return url;
}

/** Clave anónima (segura para el navegador con RLS). */
export function getSupabaseAnonKey(): string {
  const key = read("VITE_SUPABASE_ANON_KEY", ["SUPABASE_ANON_KEY"]);
  if (!key) {
    throw new Error(
      "Falta SUPABASE_ANON_KEY o VITE_SUPABASE_ANON_KEY. Configúrala en .env o en Render.",
    );
  }
  return key;
}

/** Solo servidor — nunca exponer al cliente. */
export function getSupabaseServiceRoleKey(): string {
  const key = fromProcess("SUPABASE_SERVICE_ROLE_KEY");
  if (!key) {
    throw new Error(
      "Falta SUPABASE_SERVICE_ROLE_KEY. Solo debe vivir en el servidor (Render).",
    );
  }
  return key;
}

export function hasSupabasePublicConfig(): boolean {
  try {
    getSupabaseUrl();
    getSupabaseAnonKey();
    return true;
  } catch {
    return false;
  }
}
