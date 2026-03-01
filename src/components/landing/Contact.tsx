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

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {contact.cardTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {contact.cardDesc}
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    >
                      <a
                        href="https://calendly.com"
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

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{contact.email}</p>
                  <a
                    href="mailto:contacto@patdilet.dev"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    contacto@patdilet.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{contact.availability}</p>
                  <p className="text-foreground">{contact.availabilityValue}</p>
                </div>
              </div>
            </div>

            {/* Trust Note */}
            <div className="glass border border-border/50 rounded-xl p-4 space-y-1">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">✓</span> {contact.trust1}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">✓</span> {contact.trust2}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {contact.formSuccess}
                    </h3>
                    <p className="text-muted-foreground">
                      {contact.formSuccessDesc}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          {contact.formName}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={contact.formNamePlaceholder}
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          {contact.formEmail}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={contact.formEmailPlaceholder}
                          required
                          className="bg-secondary/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        {contact.formCompany}
                        <span className="text-muted-foreground">{contact.formCompanyOptional}</span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder={contact.formCompanyPlaceholder}
                        className="bg-secondary/50 border-border/50 focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        {contact.formSubject}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={contact.formSubjectPlaceholder}
                        defaultValue={getPrefilledSubject()}
                        required
                        className="bg-secondary/50 border-border/50 focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        {contact.formMessage}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={contact.formMessagePlaceholder}
                        required
                        rows={5}
                        className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-6"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {contact.formSubmitting}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          {contact.formSubmit}
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
