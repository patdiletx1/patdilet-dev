"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore, useHydration } from "@/lib/store";
import { getTranslations } from "@/lib/i18n";

const steps = [
  {
    id: "role",
    question: "q1",
    options: [
      { value: "ceo", label: "q1a1", icon: "👔" },
      { value: "cto", label: "q1a2", icon: "💻" },
      { value: "pm", label: "q1a3", icon: "📋" },
      { value: "other", label: "q1a4", icon: "🎯" },
    ],
  },
  {
    id: "challenge",
    question: "q2",
    options: [
      { value: "ai", label: "q2a1", icon: "🤖" },
      { value: "infrastructure", label: "q2a2", icon: "☁️" },
      { value: "legacy", label: "q2a3", icon: "🔄" },
      { value: "advisory", label: "q2a4", icon: "💡" },
    ],
  },
  {
    id: "companySize",
    question: "q3",
    options: [
      { value: "startup", label: "q3a1", icon: "🚀" },
      { value: "sme", label: "q3a2", icon: "🏢" },
      { value: "enterprise", label: "q3a3", icon: "🏛️" },
    ],
  },
];

export function OnboardingFlow() {
  const {
    language,
    showOnboarding,
    setShowOnboarding,
    onboardingComplete,
    setOnboardingComplete,
    preferences,
    setPreferences,
  } = useAppStore();

  const isHydrated = useHydration();
  const t = getTranslations(language);
  const onboarding = t.onboarding;

  const [currentStep, setCurrentStep] = useState(0);
  const [localPrefs, setLocalPrefs] = useState({
    role: null as string | null,
    challenge: null as string | null,
    companySize: null as string | null,
  });

  useEffect(() => {
    // Show onboarding if not completed AND after hydration
    if (isHydrated && !onboardingComplete) {
      const timer = setTimeout(() => {
        setShowOnboarding(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isHydrated, onboardingComplete, setShowOnboarding]);

  const handleSelect = (stepId: string, value: string) => {
    setLocalPrefs((prev) => ({ ...prev, [stepId]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Complete onboarding
      setPreferences({
        role: localPrefs.role as "ceo" | "cto" | "pm" | "other" | null,
        challenge: localPrefs.challenge as "ai" | "infrastructure" | "legacy" | "advisory" | null,
        companySize: localPrefs.companySize as "startup" | "sme" | "enterprise" | null,
      });
      setOnboardingComplete(true);
      setShowOnboarding(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    setShowOnboarding(false);
  };

  const currentStepData = steps[currentStep];
  const currentValue = localPrefs[currentStepData.id as keyof typeof localPrefs];
  const canProceed = currentValue !== null;

  if (!showOnboarding) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-lg glass border border-border/50 rounded-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 transition-colors text-muted-foreground"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="p-6 pb-4 text-center border-b border-border/30">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                {onboarding.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {onboarding.subtitle}
              </p>
            </motion.div>

            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "w-8 bg-primary"
                      : index < currentStep
                      ? "w-4 bg-primary/50"
                      : "w-4 bg-secondary"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-medium text-foreground mb-4 text-center">
                  {onboarding[currentStepData.question as keyof typeof onboarding] as string}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {currentStepData.options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelect(currentStepData.id, option.value)}
                      className={`p-4 rounded-xl border transition-all text-left ${
                        currentValue === option.value
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border/50 bg-secondary/30 hover:border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{option.icon}</span>
                      <span className="text-sm font-medium">
                        {onboarding[option.label as keyof typeof onboarding] as string}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="p-6 pt-0 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleSkip}
              className="text-muted-foreground hover:text-foreground"
            >
              {onboarding.skip}
            </Button>

            <div className="flex items-center gap-3">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-border"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {onboarding.next}
                </Button>
              )}

              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                {currentStep === steps.length - 1
                  ? onboarding.finish
                  : onboarding.next}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
