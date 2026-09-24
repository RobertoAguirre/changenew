# SYNTAX_ — Sitio comercial (monorepo)

Monorepo listo para desplegar en [Render](https://render.com) desde GitHub, con base de datos en [Supabase](https://supabase.com).

## Estructura

```
apps/web          → Sitio TanStack Start (SSR)
packages/supabase → Cliente compartido de Supabase
render.yaml       → Blueprint de Render (IaC)
```

## Desarrollo local

```sh
bun install
cp .env.example apps/web/.env   # completa con tu proyecto Supabase
bun run dev
```

## Publicar en Render (GitHub)

1. Crea un repo en GitHub y sube este monorepo (`main`).
2. En [Supabase](https://supabase.com/dashboard): crea el proyecto y copia URL, `anon` y `service_role` (Settings → API).
3. En Render → **New → Blueprint** → conecta el repo de GitHub (lee `render.yaml`).
4. Cuando pida las variables (`sync: false`), pega:
   - `VITE_SUPABASE_URL` / `SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY` / `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (solo servidor)
   - `DATABASE_URL` (opcional, connection string del pooler)
5. Despliega. Health check: `https://TU-SERVICIO.onrender.com/health`

Cada push a `main` vuelve a desplegar el servicio `sitio-web` (filtro monorepo: solo cambios en `apps/web`, `packages`, lockfile).

## Uso de Supabase en el código

```ts
// Cliente (navegador)
import { createBrowserSupabaseClient } from "@sitio/supabase/browser";

// Servidor / server functions (service role)
import { createServiceSupabaseClient } from "@sitio/supabase/server";
```

Activa **RLS** en todas las tablas si usas la anon key en el cliente.

## Stack

- TanStack Start + React + TypeScript + Tailwind
- Bun workspaces
- Nitro preset `render_com` en Render
- Supabase (Postgres gestionado, externo a Render)

> Este proyecto nació en Lovable. Al pasar a monorepo (`apps/web`), el editor de Lovable puede dejar de sincronizar la ruta antigua; el flujo principal de deploy queda en GitHub → Render.
