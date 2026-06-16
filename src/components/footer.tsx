import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:py-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Patricio Díaz. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/patdilet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLinkIcon className="size-3.5" />
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/patricio-diaz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLinkIcon className="size-3.5" />
            LinkedIn
          </Link>
        </div>

        <p className="text-xs text-muted-foreground/60">
          Hecho con Next.js y ☕
        </p>
      </div>
    </footer>
  );
}
