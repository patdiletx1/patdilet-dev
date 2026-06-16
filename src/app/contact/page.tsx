"use client";

import { useState } from "react";
import {
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  SendIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const reasons = [
  { value: "automatizacion", label: "Automatización" },
  { value: "desarrollo-web", label: "Desarrollo Web" },
  { value: "consultoria", label: "Consultoría" },
  { value: "otro", label: "Otro" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, email, reason, message });
    setSent(true);
    setName("");
    setEmail("");
    setReason(null);
    setMessage("");
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Contacto
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Cuéntame sobre tu proyecto y te responderé a la brevedad.
          </p>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Nombre
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="reason"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Motivo
                </label>
                <Select value={reason} onValueChange={setReason}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    {reasons.map((r) => (
                      <SelectItem key={r.value} value={r.value}>
                        {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-32 w-full"
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <SendIcon className="size-4" />
                Enviar mensaje
              </Button>
            </form>

            {sent && (
              <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-400">
                Gracias por tu mensaje. Te responderé a la brevedad.
              </div>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-border/40 bg-card p-6">
              <h3 className="mb-4 text-lg font-semibold">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MailIcon className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a
                      href="mailto:patdiletx@gmail.com"
                      className="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      patdiletx@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPinIcon className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ubicación</p>
                    <p className="text-sm font-medium">Chile, GMT-3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">
                También puedes escribirme directo a WhatsApp
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Respondo mensajes en menos de 24 horas.
              </p>
              <a
                href="https://wa.me/56928207086"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full gap-2 bg-green-600 hover:bg-green-500">
                  <MessageSquareIcon className="size-4" />
                  Escribir a WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
