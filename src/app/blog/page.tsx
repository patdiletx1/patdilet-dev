import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    posts.push({
      slug: file.replace(".md", ""),
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
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 bg-glow" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Artículos sobre automatización, .NET, emprendimiento tech y
            tecnología aplicada a negocios.
          </p>
        </div>
      </section>

      <section className="border-t border-border/40 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">
                No hay artículos aún. Vuelve pronto.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <CalendarIcon className="size-3.5" />
                          {post.date}
                        </span>
                      </div>
                      <CardTitle className="mt-3 text-xl font-semibold transition-colors group-hover:text-cyan-400">
                        {post.title}
                      </CardTitle>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-[10px]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t border-border/40 pt-3">
                      <span className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
                        Leer artículo
                        <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
