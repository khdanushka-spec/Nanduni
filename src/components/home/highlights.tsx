import Link from "next/link";
import { ArrowUpRight, FileText, FlaskConical, Microscope } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchInterests, featuredProjects, publications } from "@/lib/content";

export function Highlights() {
  const featuredProject = featuredProjects[0];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Focus Areas"
          title="Where chemistry meets materials research"
          description="A snapshot of the analytical work and research shaping this path."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <FlaskConical className="size-5 text-primary" />
              <p className="mt-3 font-heading text-lg font-semibold">Research Interests</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {researchInterests.slice(0, 4).map((topic) => (
                  <li key={topic.title} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{topic.title}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/research"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                See all research interests
                <ArrowUpRight className="size-3.5" />
              </Link>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <Microscope className="size-5 text-primary" />
              <p className="mt-3 font-heading text-lg font-semibold">Featured Project</p>
            </CardHeader>
            <CardContent>
              {featuredProject ? (
                <>
                  <p className="font-medium text-foreground">{featuredProject.title}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {featuredProject.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {featuredProject.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {featuredProject.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  No projects listed yet.
                </p>
              )}
              <Link
                href="/projects"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                View all projects
                <ArrowUpRight className="size-3.5" />
              </Link>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <FileText className="size-5 text-primary" />
              <p className="mt-3 font-heading text-lg font-semibold">Publications</p>
            </CardHeader>
            <CardContent>
              {publications.length === 0 ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  No formal publications yet — the first working papers and articles will
                  appear here as this research path develops.
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">{publications[0].title}</p>
              )}
              <Link
                href="/publications"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                View publications
                <ArrowUpRight className="size-3.5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
