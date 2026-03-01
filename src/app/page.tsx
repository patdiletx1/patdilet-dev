"use client";

import {
  Navbar,
  Hero,
  Services,
  About,
  CaseStudies,
  Contact,
  Footer,
  OnboardingFlow,
  AIAssistant,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background noise">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />

      {/* Intelligent Components */}
      <OnboardingFlow />
      <AIAssistant />
    </div>
  );
}
