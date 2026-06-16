import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Sin título",
    date: data.date
      ? new Date(data.date).toLocaleDateString("es-CL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    content,
  };
}

function getBlogSlugs(): string[] {
  const contentDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

function renderMarkdown(md: string): string {
  let html = md;

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="overflow-x-auto rounded-lg border border-border/40 bg-card p-4 text-sm leading-relaxed"><code class="text-cyan-300">${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-muted px-1.5 py-0.5 text-sm text-cyan-400">$1</code>'
  );

  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="my-6 rounded-lg" />'
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-cyan-400 underline-offset-4 hover:underline">$1</a>'
  );

  // Tables
  html = html.replace(/\|(.+)\|/g, (match) => {
    if (match.includes("---")) return "";
    const cells = match
      .split("|")
      .filter(Boolean)
      .map((c) => c.trim());
    const cellHtml = cells
      .map(
        (c) => `<td class="border border-border/40 px-3 py-2 text-sm">${c}</td>`
      )
      .join("");
    return `<tr>${cellHtml}</tr>`;
  });
  html = html.replace(
    /(<tr>.*<\/tr>)\s*(<tr>.*<\/tr>)/gs,
    '<table class="my-4 w-full border-collapse rounded-lg">$1$2</table>'
  );

  // Headers
  html = html.replace(
    /^#### (.+)$/gm,
    '<h4 class="mt-6 mb-3 text-base font-semibold">$1</h4>'
  );
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="mt-8 mb-3 text-lg font-semibold">$1</h3>'
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="mt-10 mb-4 text-2xl font-bold">$1</h2>'
  );
  html = html.replace(
    /^# (.+)$/gm,
    '<h1 class="mb-6 text-3xl font-bold">$1</h1>'
  );

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Lists
  html = html.replace(
    /^- (.+)$/gm,
    '<li class="ml-6 list-disc text-muted-foreground">$1</li>'
  );
  html = html.replace(
    /(<li.*<\/li>\n?)+/g,
    '<ul class="my-4 space-y-1.5">$&</ul>'
  );
  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="ml-6 list-decimal text-muted-foreground">$1</li>'
  );

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-border/40" />');

  // Paragraphs
  const lines = html.split("\n");
  let inTag = false;
  const processed = lines.map((line) => {
    if (line.startsWith("<")) inTag = true;
    if (line.endsWith(">") && !line.startsWith("<")) inTag = false;

    if (
      inTag ||
      line.trim() === "" ||
      line.startsWith("<")
    ) {
      return line;
    }

    return `<p class="mb-4 leading-relaxed text-muted-foreground">${line.trim()}</p>`;
  });

  return processed.join("\n");
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = renderMarkdown(post.content);

  return (
    <div className="flex flex-col">
      <section className="relative px-4 py-16">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyan-400"
          >
            <ArrowRightIcon className="size-3.5 rotate-180" />
            Volver al blog
          </Link>

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              {post.date}
            </span>
          </div>

          {post.tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-12">
        <div
          className="prose-custom mx-auto max-w-3xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>

      <section className="border-t border-border/40 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">¿Te gustó el artículo?</h2>
          <p className="mb-8 text-muted-foreground">
            Si quieres implementar algo similar en tu negocio, hablemos.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-10 text-base font-medium">
              Conversemos
              <ArrowRightIcon className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
