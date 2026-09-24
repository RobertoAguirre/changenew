import { createFileRoute } from "@tanstack/react-router";
import codeEditor from "@/assets/code-editor.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectSaas from "@/assets/project-saas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SYNTAX_ — Estudio de Desarrollo de Software" },
      {
        name: "description",
        content:
          "Estudio especializado de desarrollo de software: sistemas distribuidos, infraestructura cloud e ingeniería de alto rendimiento.",
      },
      { property: "og:title", content: "SYNTAX_ — Estudio de Desarrollo de Software" },
      {
        property: "og:description",
        content:
          "Construimos sistemas resilientes: desarrollo a medida, arquitectura cloud y productos digitales de alto rendimiento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SYNTAX_ — Estudio de Desarrollo de Software" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="SYNTAX_ logo"
              className="size-9 shrink-0 rounded-lg"
              width={36}
              height={36}
            />
            <span className="font-display text-lg font-extrabold tracking-tight">
              SYNTAX<span className="text-accent">_</span>
            </span>
          </a>
          <a
            href="#contacto"
            className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            [ Contacto ]
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-6 md:pt-32">
        {/* Hero Bento Grid */}
        <div className="mb-20 grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Large Main Cell */}
          <div className="animate-in flex min-h-[360px] flex-col justify-end rounded-3xl border border-border bg-surface p-8 md:col-span-8 md:min-h-[400px] md:p-12">
            <h1 className="mb-6 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter text-balance sm:text-6xl md:text-7xl">
              CONSTRUIMOS <br />
              <span className="text-accent">SISTEMAS</span> <br />
              RESILENTES.
            </h1>
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Un estudio especializado de software enfocado en excelencia técnica, integridad
              arquitectónica e ingeniería de alto rendimiento.
            </p>
          </div>

          {/* Side Cell 1 — Status */}
          <div className="animate-in flex flex-col justify-between rounded-3xl bg-accent p-8 md:col-span-4 [animation-delay:100ms]">
            <div className="font-mono text-sm uppercase tracking-tighter text-accent-foreground">
              Estado // Disponible
            </div>
            <div className="text-accent-foreground">
              <p className="mb-4 text-xl font-extrabold leading-tight">
                Entrega más rápido sin romper nada.
              </p>
              <a
                href="#contacto"
                aria-label="Ir a contacto"
                className="flex size-12 items-center justify-center rounded-full border-2 border-accent-foreground transition-transform hover:translate-x-1"
              >
                <div className="ml-1 h-0 w-0 border-b-[6px] border-l-[10px] border-t-[6px] border-b-transparent border-l-accent-foreground border-t-transparent" />
              </a>
            </div>
          </div>

          {/* Side Cell 2 — Core Tech */}
          <div className="animate-in flex flex-col justify-between rounded-3xl border border-border bg-surface p-8 md:col-span-4 [animation-delay:200ms]">
            <span className="font-mono text-sm text-accent">01 — Tecnología</span>
            <ul className="mt-8 space-y-2 font-mono text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="size-1 bg-accent" /> Sistemas distribuidos
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 bg-accent" /> Infraestructura cloud
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1 bg-accent" /> Motores en tiempo real
              </li>
            </ul>
          </div>

          {/* Middle Cell 3 — Engineering View */}
          <div className="group animate-in relative overflow-hidden rounded-3xl border border-border bg-surface md:col-span-8 [animation-delay:300ms]">
            <img
              src={codeEditor}
              alt="Editor de código con proyecto en Rust"
              className="h-full min-h-[240px] w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-70"
              width={1200}
              height={600}
              loading="lazy"
            />
            <div className="absolute bottom-8 left-8">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                Último lanzamiento
              </span>
              <p className="text-lg font-bold text-foreground">Forge Engine v2.4</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="mb-32">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Capacidades
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <div className="group">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-accent">
                <span className="font-mono text-accent">A</span>
              </div>
              <h3 className="mb-3 text-xl font-bold italic">Estrategia de producto</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Definimos la hoja de ruta técnica antes de escribir una sola línea de código,
                asegurando que la escala esté integrada desde el inicio.
              </p>
            </div>
            <div className="group">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-accent">
                <span className="font-mono text-accent">B</span>
              </div>
              <h3 className="mb-3 text-xl font-bold italic">Desarrollo a medida</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Software hecho a la medida con frameworks modernos, enfocado en mantenibilidad,
                velocidad y calidad de código.
              </p>
            </div>
            <div className="group">
              <div className="mb-6 flex size-10 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-accent">
                <span className="font-mono text-accent">C</span>
              </div>
              <h3 className="mb-3 text-xl font-bold italic">Cloud Ops</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Despliegues sin tiempo de inactividad y gestión robusta de infraestructura para
                aplicaciones globales.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-32">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-surface p-6 transition-all hover:border-accent/30 md:p-8">
              <div className="mb-8 overflow-hidden rounded-2xl">
                <img
                  src={projectFintech}
                  alt="Grafo de nodos del proyecto Aion Ledger"
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  width={800}
                  height={800}
                  loading="lazy"
                />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="mb-2 block font-mono text-xs text-accent">FinTech</span>
                  <h4 className="text-2xl font-bold">Aion Ledger</h4>
                </div>
                <span className="font-mono text-xs text-muted-foreground">2024</span>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6 transition-all hover:border-accent/30 md:p-8">
              <div className="mb-8 overflow-hidden rounded-2xl">
                <img
                  src={projectSaas}
                  alt="Panel de analytics del proyecto Vectra Analytics"
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  width={800}
                  height={800}
                  loading="lazy"
                />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <span className="mb-2 block font-mono text-xs text-accent">SaaS</span>
                  <h4 className="text-2xl font-bold">Vectra Analytics</h4>
                </div>
                <span className="font-mono text-xs text-muted-foreground">2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="contacto"
          className="rounded-[2rem] bg-accent p-10 text-center md:p-24"
        >
          <h2 className="mb-8 font-display text-4xl font-extrabold tracking-tighter text-accent-foreground md:text-6xl">
            ¿LISTO PARA CONSTRUIR EL <br className="hidden md:block" />
            FUTURO DE TU STACK?
          </h2>
          <a
            href="mailto:hello@syntax.dev"
            className="inline-block rounded-full bg-background px-10 py-5 text-lg font-bold text-accent transition-transform hover:scale-105"
          >
            Iniciar una conversación
          </a>
          <div className="mt-16 flex justify-center gap-8 font-mono text-xs uppercase tracking-widest text-accent-foreground/60">
            <a href="#" className="transition-colors hover:text-accent-foreground">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-accent-foreground">
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-accent-foreground">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-12 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            &copy; 2026 SYNTAX Software Studio
          </span>
          <div className="flex items-center gap-4">
            <div className="size-2 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Sistemas operativos
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/526141731455?text=Hola%2C%20me%20interesa%20un%20proyecto%20de%20software"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-7 fill-accent-foreground"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
