import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://patdilet.dev"),
  title: "PatDilet | Consultoría Tecnológica - IA & Cloud Solutions",
  description: "Especialistas en transformar procesos manuales en flujos inteligentes. Soluciones Cloud e Inteligencia Artificial diseñadas para empresas que no pueden permitirse fallar.",
  keywords: ["Inteligencia Artificial", "Cloud Architecture", "Transformación Digital", "Consultoría Tecnológica", "IA Generativa", "Modernización Legacy", "Arquitectura de Software"],
  authors: [{ name: "Patricio - PatDilet" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PatDilet | Ingeniería de Software que impulsa su crecimiento",
    description: "Construimos el futuro de su empresa sobre bases sólidas: Inteligencia Artificial aplicada y Arquitectura Cloud escalable.",
    url: "https://patdilet.dev",
    siteName: "PatDilet",
    type: "website",
    images: [
      {
        url: "/hero-bg.png",
        width: 1344,
        height: 768,
        alt: "PatDilet - Consultoría Tecnológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PatDilet | Consultoría Tecnológica - IA & Cloud Solutions",
    description: "Ingeniería de Software que impulsa su crecimiento. Especialistas en IA y Cloud.",
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
