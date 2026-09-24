# Deploy GitHub → Render + Supabase

## 1. GitHub

```sh
git init
git add .
git commit -m "Monorepo listo para Render y Supabase"
gh repo create SitioComercial1 --private --source=. --remote=origin --push
```

(O crea el repo en github.com y haz `git remote add origin …` + `git push -u origin main`.)

## 2. Supabase

1. Crea un proyecto en https://supabase.com/dashboard (región cercana a México: p. ej. `us-east-1` / `us-west-1`).
2. Settings → **API**: copia Project URL, `anon` public y `service_role`.
3. (Opcional) Settings → **Database** → Connection string → **Transaction** pooler para `DATABASE_URL`.
4. Activa **RLS** en tus tablas antes de usar la anon key en el front.

## 3. Render (Blueprint)

1. https://dashboard.render.com → **New** → **Blueprint**.
2. Conecta el repo de GitHub y confirma que detecta `render.yaml`.
3. Completa las variables marcadas `sync: false`:

| Variable | Origen |
|---|---|
| `VITE_SUPABASE_URL` | Project URL |
| `SUPABASE_URL` | Project URL (igual) |
| `VITE_SUPABASE_ANON_KEY` | anon public |
| `SUPABASE_ANON_KEY` | anon public (igual) |
| `SUPABASE_SERVICE_ROLE_KEY` | service_role (secreto) |
| `DATABASE_URL` | opcional, pooler |

4. Apply → espera el primer deploy.
5. Prueba `https://<servicio>.onrender.com/health` → debe responder `{"status":"ok",...}`.

## Notas

- Plan `free` en el Blueprint; súbelo en el dashboard si necesitas más recursos.
- `NITRO_PRESET=render_com` hace que Nitro genere el servidor Node que Render ejecuta.
- **Start Command** debe ser `node apps/web/.output/server/index.mjs` (no uses `bun run --filter … start`: sale con código 0 y Render marca “Application exited early”).
- El `buildFilter` evita redespliegues si solo cambias docs u otros paths fuera de `apps/web` y `packages`.
