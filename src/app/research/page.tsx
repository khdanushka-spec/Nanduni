import type { Metadata } from "next";
import { Compass, FlaskConical, Microscope } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { researchInterests, skillGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description: "Research interests, analytical techniques, and areas of focus.",
};

export default function ResearchPage() {
  const techniques = skillGroups.find((g) => g.title === "Analytical Techniques");

  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research"
        description="Research spanning energy storage materials, analytical method development, and pharmaceutical quality control."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Interests" title="Research interests" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterests.map((topic) => (
              <Card key={topic.title}>
                <CardContent className="pt-6">
                  <FlaskConical className="size-5 text-primary" />
                  <p className="mt-3 font-medium text-foreground">{topic.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Methods"
            title="Analytical techniques"
            description="Core instrumentation used across research and industry work."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {techniques?.items.map((technique) => (
              <Badge key={technique} variant="secondary" className="px-3 py-1.5 text-sm font-normal">
                {technique}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <Microscope className="size-5 text-primary" />
              <p className="mt-3 font-medium text-foreground">Current focus</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Applying analytical chemistry to pharmaceutical quality control at BJP
                Laboratories, alongside continued interest in low-cost materials for aqueous
                battery systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Compass className="size-5 text-primary" />
              <p className="mt-3 font-medium text-foreground">Collaboration</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Open to research collaboration — see the Contact page to get in touch.
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
