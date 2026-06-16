import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { getServiceIcon } from "@/components/icons";
import { projects, services, techStack } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern" />
        <div className="animate-float pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="animate-float pointer-events-none animation-delay-200 absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400">
            <SparklesIcon className="size-3.5" />
            Ingeniería .NET + Automatización
          </div>

          <h1 className="animate-slide-up mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Automatización que
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}funciona.
            </span>
          </h1>

          <p className="animate-slide-up animation-delay-200 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Soy Patricio Díaz, ingeniero .NET y emprendedor. Construyo sistemas
            automáticos que hacen crecer tu negocio mientras tú duermes.
          </p>

          <div className="animate-slide-up animation-delay-400 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#proyectos">
              <Button size="lg" className="h-12 px-8 text-base font-medium">
                Ver proyectos
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium">
                Contactar
              </Button>
            </a>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-600 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground/50">
            <span>Desliza para conocer más</span>
            <div className="h-8 w-5 rounded-full border border-muted-foreground/20 p-1">
              <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section id="proyectos" className="border-t border-border/40 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Proyectos Destacados
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Una selección de los sistemas y plataformas que he construido para
              automatizar procesos y escalar negocios.
            </p>
          </div>

          <div className="card-stagger grid gap-6 sm:grid-cols-2">
            {projects.filter(p => p.isFeatured).map((project) => (
              <div key={project.slug} className="animate-slide-up">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="/projects/boleta-sii">
              <Button variant="outline">
                Ver todos los proyectos
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="border-t border-border/40 bg-card/30 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Servicios</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Soluciones de automatización y desarrollo a medida para tu negocio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <div
                  key={service.title}
                  className="animate-slide-up group rounded-xl border border-border/40 bg-card p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border/40 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Tech Stack</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Tecnologías con las que trabajo día a día para construir sistemas robustos y escalables.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="animate-fade-in px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:text-cyan-400"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contacto" className="relative border-t border-border/40 px-4 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Listo para{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              automatizar
            </span>
            ?
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Contame sobre tu proyecto y te cuento cómo puedo ayudarte a hacerlo
            crecer con automatización inteligente.
          </p>
          <a href="mailto:patdiletx@gmail.com">
            <Button size="lg" className="h-12 px-10 text-base font-medium">
              Conversemos
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
