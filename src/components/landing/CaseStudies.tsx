"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingDown, TrendingUp, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore, useHydration } from "@/lib/store";
import { getTranslations } from "@/lib/i18n";

const caseIcons = [TrendingDown, Shield, TrendingUp, Clock];
const caseGradients = [
  "from-emerald-500/10 to-teal-500/10",
  "from-cyan-500/10 to-blue-500/10",
  "from-violet-500/10 to-purple-500/10",
  "from-amber-500/10 to-orange-500/10",
];
const caseColors = ["text-emerald-400", "text-cyan-400", "text-violet-400", "text-amber-400"];
const caseImpacts = ["60%", "99.9%", "3x", "85%"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function CaseStudies() {
  const { language, preferences } = useAppStore();
  const isHydrated = useHydration();
  const cases = getTranslations(language).cases;

  const caseData = [
    { key: "case1", category: cases.case1.category, problem: cases.case1.problem, solution: cases.case1.solution, impact: cases.case1.impact },
    { key: "case2", category: cases.case2.category, problem: cases.case2.problem, solution: cases.case2.solution, impact: cases.case2.impact },
    { key: "case3", category: cases.case3.category, problem: cases.case3.problem, solution: cases.case3.solution, impact: cases.case3.impact },
    { key: "case4", category: cases.case4.category, problem: cases.case4.problem, solution: cases.case4.solution, impact: cases.case4.impact },
  ];

  // Determine which case to highlight based on user's challenge - only after hydration
  const getHighlightedCase = () => {
    if (!isHydrated || !preferences.challenge) return -1;
    switch (preferences.challenge) {
      case "ai":
        return 2; // IA Generativa case
      case "infrastructure":
        return 1; // Cloud Architecture case
      case "legacy":
        return 0; // Vision computacional (modernization related)
      default:
        return -1;
    }
  };

  const highlightedCase = getHighlightedCase();

  return (
    <section id="casos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
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
            {cases.label}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">{cases.title}</span>
            <span className="gradient-text">{cases.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {cases.subtitle}
          </p>

          {/* Personalized Recommendation */}
          {highlightedCase >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
            >
              <span className="text-sm text-primary font-medium">
                {language === "es"
                  ? "Caso relacionado con su desafío"
                  : "Case related to your challenge"}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {caseData.map((study, index) => {
            const Icon = caseIcons[index];
            const isHighlighted = highlightedCase === index;

            return (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  className={`group h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden ${
                    isHighlighted ? "ring-2 ring-primary/50 ring-offset-2 ring-offset-background" : ""
                  }`}
                >
                  {/* Highlighted Badge */}
                  {isHighlighted && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium py-1.5 text-center flex items-center justify-center gap-1.5 z-10">
                      ✨ {language === "es" ? "Destacado para usted" : "Highlighted for you"}
                    </div>
                  )}

                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${caseGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className={`relative p-6 ${isHighlighted ? "pt-10" : ""}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-secondary/80 text-xs font-medium text-muted-foreground">
                        {study.category}
                      </span>
                      <Icon className={`w-5 h-5 ${caseColors[index]}`} />
                    </div>

                    {/* Problem */}
                    <div className="mb-4">
                      <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">
                        {language === "es" ? "Problema" : "Problem"}
                      </span>
                      <p className="text-foreground/80 text-sm mt-1">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">
                        {language === "es" ? "Solución" : "Solution"}
                      </span>
                      <p className="text-foreground text-sm mt-1">
                        {study.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-end gap-2">
                        <span className={`text-3xl font-bold ${caseColors[index]}`}>
                          {caseImpacts[index]}
                        </span>
                        <ArrowUpRight className={`w-4 h-4 mb-1 ${caseColors[index]}`} />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {study.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            {cases.cta}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            {cases.ctaLink}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
