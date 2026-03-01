"use client";

import { motion } from "framer-motion";
import { useAppStore, useHydration } from "@/lib/store";
import { getTranslations } from "@/lib/i18n";

export function About() {
  const { language, preferences } = useAppStore();
  const isHydrated = useHydration();
  const about = getTranslations(language).about;

  // Personalized greeting based on role - only after hydration
  const getPersonalizedMessage = () => {
    if (!isHydrated || !preferences.role) return null;
    switch (preferences.role) {
      case "ceo":
        return language === "es"
          ? "Entendemos que como CEO, necesitas resultados medibles y ROI claro."
          : "We understand that as a CEO, you need measurable results and clear ROI.";
      case "cto":
        return language === "es"
          ? "Como CTO, valoramos la excelencia técnica y la arquitectura sólida."
          : "As a CTO, we value technical excellence and solid architecture.";
      case "pm":
        return language === "es"
          ? "Sabemos que los PM necesitan comunicación clara y entregas a tiempo."
          : "We know PMs need clear communication and on-time delivery.";
      default:
        return null;
    }
  };

  const personalizedMessage = getPersonalizedMessage();

  return (
    <section id="nosotros" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass border border-border/50 text-sm text-muted-foreground mb-6">
              {about.label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">{about.title}</span>
              <span className="gradient-text">{about.titleHighlight}</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                {about.p1}
              </p>
              <p>
                {about.p2}
                <strong className="text-foreground"> {about.p2Highlight}</strong>.
              </p>

              {/* Personalized Message */}
              {personalizedMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-primary/10 border border-primary/20"
                >
                  <p className="text-primary text-base font-medium">
                    ✨ {personalizedMessage}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-card/80 border border-border/50 rounded-2xl p-8 lg:p-10">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-full" />

                {/* Quote */}
                <blockquote className="relative z-10">
                  <p className="text-xl sm:text-2xl text-foreground leading-relaxed mb-6">
                    {about.quote}
                    <span className="gradient-text font-semibold">
                      {about.quoteHighlight}
                    </span>{" "}
                    {about.quoteEnd}
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">P</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Patricio</p>
                      <p className="text-sm text-muted-foreground">
                        {about.label === "The Human Factor" ? "Senior Solutions Architect" : "Arquitecto de Soluciones Senior"}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 glass border border-border/50 rounded-xl px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">
                    {about.available}
                  </span>
                </div>
              </motion.div>

              {/* Decorative Dots */}
              <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary/20"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
