import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

const iconMap: Record<string, string> = {
  MessageSquare: "💬",
  Database: "🗄️",
  ShoppingCart: "🛒",
  Bot: "🤖",
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <section
        className={`relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 py-20 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 text-6xl">{iconMap[project.icon] ?? "🚀"}</div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            {project.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="h-10 gap-2 bg-white/20 text-white hover:bg-white/30"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Ver código
                </Button>
              </a>
            )}
            <Link href="/contact">
              <Button className="h-10 gap-2 bg-white text-black hover:bg-white/90">
                Quiero esto para mi negocio
                <ArrowRightIcon className="size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">Descripción</h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>

            <h2 className="mb-6 text-2xl font-bold">Features</h2>
            <ul className="mb-8 space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-cyan-400" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">Resultados</h3>
              <ul className="space-y-3">
                {project.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">¿Te interesa?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Este proyecto puede adaptarse a las necesidades específicas de
                tu negocio.
              </p>
              <Link href="/contact">
                <Button className="w-full gap-2">
                  Quiero esto para mi negocio
                  <ArrowRightIcon className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#proyectos"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyan-400"
          >
            <ArrowRightIcon className="size-3.5 rotate-180" />
            Volver a proyectos
          </Link>
        </div>
      </section>
    </div>
  );
}
