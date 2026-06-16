import Link from "next/link";
import {
  ArrowRightIcon,
  MessageSquareIcon,
  DatabaseIcon,
  ShoppingCartIcon,
  BotIcon,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquareIcon className="size-8 text-cyan-400" />,
  Database: <DatabaseIcon className="size-8 text-violet-400" />,
  ShoppingCart: <ShoppingCartIcon className="size-8 text-emerald-400" />,
  Bot: <BotIcon className="size-8 text-orange-400" />,
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 border-border/50">
        <div
          className={`flex h-40 items-center justify-center rounded-t-xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo}`}
        >
          {iconMap[project.icon] ?? (
            <BotIcon className="size-8 text-muted-foreground" />
          )}
        </div>

        <CardContent className="flex flex-col gap-3 pt-4">
          <CardTitle className="text-base font-semibold">
            {project.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px]">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-[10px]">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="border-t border-border/40 pt-3">
          <span className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
            Ver proyecto
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
