"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { getTranslations } from "@/lib/i18n";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contacto@patdilet.dev", label: "Email" },
];

export function Footer() {
  const { language, t } = useAppStore();
  const footer = getTranslations(language).footer;
  const nav = getTranslations(language).nav;

  const footerLinks = [
    {
      title: footer.services,
      links: [
        { label: language === "es" ? "IA Generativa" : "Generative AI", href: "#servicios" },
        { label: language === "es" ? "Cloud Architecture" : "Cloud Architecture", href: "#servicios" },
        { label: language === "es" ? "Modernización" : "Modernization", href: "#servicios" },
      ],
    },
    {
      title: footer.company,
      links: [
        { label: nav.about, href: "#nosotros" },
        { label: nav.cases, href: "#casos" },
        { label: nav.contact, href: "#contacto" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 group mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">P</span>
                </div>
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-foreground">Pat</span>
                <span className="gradient-text">Dilet</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              {footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PatDilet. {footer.rights}
          </p>
          <p className="text-sm text-muted-foreground/60">
            {footer.made}
          </p>
        </div>
      </div>
    </footer>
  );
}
