"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, RefreshCw, ArrowUpRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore, useHydration } from "@/lib/store";
import { getTranslations } from "@/lib/i18n";

const serviceIcons = [Brain, Cloud, RefreshCw];
const serviceKeys = ["card1", "card2", "card3"] as const;
const serviceIds = ["ai", "cloud", "modernization"];
const serviceGradients = [
  "from-violet-500/20 to-purple-500/20",
  "from-cyan-500/20 to-blue-500/20",
  "from-emerald-500/20 to-teal-500/20",
];
const serviceColors = ["text-violet-400", "text-cyan-400", "text-emerald-400"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Services() {
  const { language, getRecommendedService } = useAppStore();
  const isHydrated = useHydration();
  const services = getTranslations(language).services;
  
  // Only show personalization after hydration to avoid SSR mismatch
  const recommendedId = isHydrated ? getRecommendedService() : null;

  return (
    <section id="servicios" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

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
            {services.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">{services.title}</span>
            <span className="gradient-text">{services.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {services.subtitle}
          </p>

          {/* Personalized Recommendation */}
          {recommendedId && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                {language === "es"
                  ? "Servicio recomendado para usted"
                  : "Recommended service for you"}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {serviceKeys.map((key, index) => {
            const service = services[key];
            const Icon = serviceIcons[index];
            const isRecommended = recommendedId === serviceIds[index];

            return (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  className={`group relative h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden ${
                    isRecommended ? "ring-2 ring-primary/50 ring-offset-2 ring-offset-background" : ""
                  }`}
                >
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium py-1.5 text-center flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      {language === "es" ? "Recomendado para usted" : "Recommended for you"}
                    </div>
                  )}

                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${serviceGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className={`relative p-6 lg:p-8 ${isRecommended ? "pt-10" : ""}`}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary/80 border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className={`w-7 h-7 ${serviceColors[index]}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${serviceColors[index].replace('text-', 'bg-')}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Arrow */}
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                      <span>{service.cta}</span>
                      <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
