import type { Metadata } from "next";
import { Beaker, Compass, FlaskConical, Target } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { workExperience } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Biography, career journey, and philosophy.",
};

const values = [
  {
    icon: Beaker,
    title: "Precision in practice",
    description:
      "Reliable data starts with rigorous method and well-maintained instruments — accuracy isn't optional in analytical chemistry.",
  },
  {
    icon: Target,
    title: "Continuous improvement",
    description:
      "From updating SOPs to refining lab procedures, small process improvements compound into real efficiency gains.",
  },
  {
    icon: Compass,
    title: "Bridging academia and industry",
    description:
      "Research training from two universities, applied daily in a regulated pharmaceutical laboratory.",
  },
  {
    icon: FlaskConical,
    title: "Teaching what I know",
    description:
      "Years spent teaching and mentoring students shape how I document, train, and share knowledge with junior chemists today.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Profile"
        title="About"
        description="From laboratory demonstrator to analytical chemist — a career built across two countries and two degrees in chemistry."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Biography</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I&apos;m a forward-thinking analytical chemist with hands-on experience in
                analytical techniques, data collection, equipment maintenance, and research
                across both academic and industry settings.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                My path has taken me from teaching secondary school chemistry in Sri Lanka, to
                a Master&apos;s in Chemistry at Flinders University researching energy storage
                materials, to my current role as an Analytical Chemist at BJP Laboratories in
                Queensland — running LC, LC-MS, FTIR, and UV-Vis analysis under GMP and TGA
                compliance.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Vision &amp; mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Applying innovative analytical techniques and continuous improvement
                methodologies to enhance laboratory efficiency, data accuracy, and regulatory
                compliance — while continuing research into practical, low-cost materials for
                energy storage.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Career timeline
            </h2>
            <ol className="mt-6 space-y-0">
              {[...workExperience]
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                <li
                  key={`${item.role}-${item.org}`}
                  className="relative border-l border-border pb-8 pl-6 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary" />
                  <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                  <p className="mt-1 font-medium text-foreground">{item.role}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.org} · {item.location}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
        <Container>
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Values &amp; philosophy
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="flex gap-4 pt-6">
                  <value.icon className="size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{value.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
