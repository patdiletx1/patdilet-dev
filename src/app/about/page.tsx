import { Badge } from "@/components/ui/badge";
import { techStack } from "@/lib/data";

const timeline = [
  {
    year: "2016",
    title: "Autodidacta",
    description:
      "Empecé programando por mi cuenta, aprendiendo C# y .NET con proyectos personales y cursos online.",
  },
  {
    year: "2018",
    title: ".NET Developer",
    description:
      "Primer trabajo formal como desarrollador .NET. Arquitectura de sistemas empresariales y APIs REST.",
  },
  {
    year: "2021",
    title: "Emprendedor",
    description:
      "Fundé mi primer proyecto tecnológico. Pasé de empleado a construir soluciones para clientes.",
  },
  {
    year: "2023",
    title: "Automatización",
    description:
      "Me especialicé en automatización de procesos con IA, bots y scraping. Ayudo a empresas a escalar.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Sobre{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pat
            </span>
          </h1>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="flex size-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold text-white shadow-lg shadow-cyan-500/20">
              PD
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold">Patricio Díaz</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                .NET developer, emprendedor, automatizador. Chileno.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Llevo más de 8 años construyendo software. Empecé como autodidacta
                con C# y .NET, trabajé en empresas desarrollando sistemas empresariales,
                y hoy ayudo a negocios a automatizar sus procesos con tecnología inteligente.
                Creo en la automatización como herramienta para liberar tiempo y
                potenciar lo que realmente importa: hacer crecer tu negocio.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Mi stack principal es .NET / C# para backend, Python para automatización
                y scraping, y TypeScript con React/Next.js para frontend. Todo corre en Azure
                con Docker.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-card/30 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Experiencia &amp; Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-2xl font-bold">Trayectoria</h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 h-full w-px bg-border" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative flex items-start gap-6">
                  <div className="relative z-10 mt-1.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-card shadow-sm shadow-cyan-500/10">
                    <div className="size-2 rounded-full bg-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <span className="mb-1 inline-block text-xs font-medium text-cyan-400">
                      {item.year}
                    </span>
                    <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
