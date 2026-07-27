import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { educationHistory, certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic history, coursework, and professional development.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic History"
        title="Education"
        description="Two degrees in Chemistry, across two countries."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {educationHistory.map((item) => (
              <Card key={item.degree}>
                <CardContent className="pt-6">
                  <GraduationCap className="size-5 shrink-0 text-primary" />
                  <p className="mt-3 font-medium text-foreground">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{item.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Certifications &amp; memberships
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <Badge key={cert} variant="secondary" className="px-3 py-1.5 text-xs font-normal">
                {cert}
              </Badge>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
