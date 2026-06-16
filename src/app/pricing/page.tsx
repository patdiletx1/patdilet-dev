import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const plans = [
  {
    title: "Automatización WhatsApp",
    price: "Desde $499 USD",
    description:
      "Integración completa con WhatsApp Business API para automatizar atención al cliente.",
    features: [
      "Bot con IA para respuestas automáticas",
      "Campañas de marketing",
      "Dashboard de métricas",
      "Soporte técnico 30 días",
    ],
    highlighted: false,
  },
  {
    title: "Bot Personalizado",
    price: "Desde $799 USD",
    description:
      "Bot inteligente a medida que se integra con tus herramientas y flujos de trabajo.",
    features: [
      "IA entrenada con tus datos",
      "Integración con CRM/ERP",
      "Multiplataforma (WhatsApp, Slack, Web)",
      "Soporte técnico 60 días",
    ],
    highlighted: true,
  },
  {
    title: "Scraper / Data Pipeline",
    price: "Desde $999 USD",
    description:
      "Extracción automatizada de datos web con limpieza y almacenamiento estructurado.",
    features: [
      "Scraping distribuido",
      "Rotación de proxies",
      "Exportación a múltiples formatos",
      "Programación recurrente",
    ],
    highlighted: false,
  },
  {
    title: "App Web Full Stack",
    price: "Desde $2,499 USD",
    description:
      "Aplicación web moderna y escalable con React, Next.js y TypeScript.",
    features: [
      "UI/UX responsiva",
      "API REST o GraphQL",
      "Base de datos y autenticación",
      "Deploy en producción incluido",
    ],
    highlighted: false,
  },
  {
    title: "Consultoría",
    price: "$80 USD / hora",
    description:
      "Asesoría técnica en arquitectura de software, automatización y cloud.",
    features: [
      "Revisión de arquitectura",
      "Optimización de procesos",
      "Code review",
      "Sesión por hora o paquete",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Inversión
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Precios referenciales. Cada proyecto es único y se cotiza según
            requerimientos específicos.
          </p>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={`flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                  : "border-border/50"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {plan.title}
                </CardTitle>
                <CardDescription className="mt-1">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-cyan-400">
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/40 pt-4">
                <Link href="/contact" className="w-full">
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full gap-2"
                  >
                    Contratar →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Los precios son referenciales. Cada proyecto se cotiza según
            alcance, complejidad y requerimientos específicos. Contáctame
            para recibir una cotización personalizada.
          </p>
        </div>
      </section>
    </div>
  );
}
