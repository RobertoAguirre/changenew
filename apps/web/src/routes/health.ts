import { createFileRoute } from "@tanstack/react-router";

import { hasSupabasePublicConfig } from "@sitio/supabase";

export const Route = createFileRoute("/health")({
  server: {
    handlers: {
      GET: async () => {
        const supabaseConfigured = hasSupabasePublicConfig();

        return Response.json(
          {
            status: "ok",
            supabase: supabaseConfigured ? "configured" : "missing_env",
            timestamp: new Date().toISOString(),
          },
          {
            headers: {
              "cache-control": "no-store",
            },
          },
        );
      },
    },
  },
});
