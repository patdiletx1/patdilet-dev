import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { getServiceIcon } from "@/components/icons";

const servicePrices: Record<string, string> = {
  "whatsapp-automation": "Desde $499 USD",
  "custom-bot": "Desde $799 USD",
  scraper: "Desde $999 USD",
  "web-app": "Desde $2,499 USD",
  consulting: "$80 USD/hora",
  devops: "Desde $1,499 USD",
};

const serviceDescriptions: Record<string, string> = {
  "whatsapp-automation":
    "Integro tu negocio con WhatsApp Business API para que puedas automatizar la atención al cliente, enviar notificaciones, campañas de marketing y seguimiento de leads. Todo con IA que entiende el contexto de tu negocio.",
  "custom-bot":
    "Construyo bots inteligentes que conectan tus herramientas favoritas (Slack, Telegram, CRM, ERP) en flujos automáticos. Con IA generativa para respuestas naturales y precisas.",
  scraper:
    "Diseño extractores de datos web robustos con Playwright y Selenium. Incluyo limpieza, transformación y almacenamiento automatizado. Ideal para inteligencia de mercado y generación de leads.",
  "web-app":
    "Desarrollo aplicaciones web modernas con React, Next.js y TypeScript. Rápidas, accesibles, escalables y con las mejores prácticas de UX/UI desde el día uno.",
  consulting:
    "Asesoría en arquitectura de software, automatización de procesos, optimización de sistemas .NET y cloud. Revisión de código, diseño de sistemas y mentoría técnica.",
  devops:
    "Implemento pipelines de integración y despliegue continuo con Docker, Azure DevOps y GitHub Actions. Infraestructura como código con Terraform y monitoreo automatizado.",
};

export default function ServiciosPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Servicios de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Automatización
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Soluciones a medida para automatizar procesos, escalar tu negocio y
            liberar tu tiempo.
          </p>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            const price = servicePrices[service.id] ?? "";
            const desc =
              serviceDescriptions[service.id] ?? service.description;

            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-xl border border-border/40 bg-card p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="border-cyan-500/30 text-cyan-400"
                  >
                    {price}
                  </Badge>
                </div>
                <Link href="/contact" className="mt-auto">
                  <Button variant="outline" className="w-full gap-2">
                    Solicitar cotización
                    <ArrowRightIcon className="size-4" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative border-t border-border/40 px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Cada negocio es único. Hablemos y encontremos la solución que mejor
            se adapte a tus necesidades.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-10 text-base font-medium">
              Conversemos
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
