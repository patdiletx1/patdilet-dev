import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
  title: "Patricio Díaz | Automatización que funciona",
  description:
    "Soy Patricio Díaz, ingeniero .NET y emprendedor. Construyo sistemas automáticos que hacen crecer tu negocio mientras tú duermes.",
  keywords: [
    "automatización",
    ".NET",
    "desarrollo web",
    "bots",
    "chatbots",
    "scraping",
    "DevOps",
    "Inteligencia Artificial",
    "Cloud Architecture",
    "Transformación Digital",
  ],
  authors: [{ name: "Patricio Díaz" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Patricio Díaz | Automatización que funciona",
    description:
      "Construyo sistemas automáticos que hacen crecer tu negocio mientras tú duermes. Ingeniería .NET + Automatización Inteligente.",
    url: "https://patdilet.dev",
    siteName: "Patricio Díaz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patricio Díaz | Automatización que funciona",
    description:
      "Ingeniería .NET + Automatización Inteligente. Construyo sistemas que hacen crecer tu negocio.",
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
