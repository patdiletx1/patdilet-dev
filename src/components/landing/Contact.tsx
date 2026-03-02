"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore, useHydration } from "@/lib/store";
import { getTranslations } from "@/lib/i18n";

export function Contact() {
  const { language, preferences } = useAppStore();
  const isHydrated = useHydration();
  const contact = getTranslations(language).contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill subject based on user's challenge - only after hydration
  const getPrefilledSubject = () => {
    if (!isHydrated || !preferences.challenge) return "";
    switch (preferences.challenge) {
      case "ai":
        return language === "es"
          ? "Consultoría sobre IA Generativa"
          : "Consultation about Generative AI";
      case "infrastructure":
        return language === "es"
          ? "Consultoría sobre Arquitectura Cloud"
          : "Consultation about Cloud Architecture";
      case "legacy":
        return language === "es"
          ? "Consultoría sobre Modernización de Sistemas"
          : "Consultation about System Modernization";
      case "advisory":
        return language === "es"
          ? "Asesoría Estratégica"
          : "Strategic Advisory";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-card/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-4">
            {contact.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">{contact.title}</span>
            <span className="gradient-text">{contact.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Centered */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 overflow-hidden">
              <CardContent className="p-8 sm:p-12 text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {contact.cardTitle}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      {contact.cardDesc}
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg px-8 py-6 h-auto"
                    >
                      <a
                        href="https://calendly.com/patdiletx/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.cardCta}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">{contact.email}</p>
                  <a
                    href="mailto:patdiletx@gmail.com"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    patdiletx@gmail.com
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">{contact.availability}</p>
                  <p className="text-lg font-semibold text-foreground">{contact.availabilityValue}</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">{contact.trust1}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground font-medium">{contact.trust2}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
