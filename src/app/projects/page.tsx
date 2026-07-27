import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Analytical chemistry, materials research, and R&D projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects"
        description="Analytical chemistry, materials research, and product development work."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {featuredProjects.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
                <FlaskConical className="size-8 text-muted-foreground" />
                <p className="font-medium text-foreground">No projects listed yet</p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Analytical chemistry, materials research, and R&amp;D projects will appear
                  here as they&apos;re added.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <Card key={project.slug}>
                  <CardContent className="pt-6">
                    <p className="font-mono text-xs text-muted-foreground">{project.period}</p>
                    <p className="mt-2 font-heading text-xl font-semibold text-foreground">
                      {project.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
