import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Publications",
  description: "Journal papers, working papers, and technical reports.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Publications"
        description="Journal papers, conference papers, technical reports, and working papers will be listed here as they're published."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {publications.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
                <FileText className="size-8 text-muted-foreground" />
                <p className="font-medium text-foreground">No publications yet</p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  This page will list journal papers, working papers, technical reports,
                  and conference proceedings — complete with citation formats and DOI links
                  — as they&apos;re published.
                </p>
              </CardContent>
            </Card>
          ) : (
            <ul className="divide-y divide-border">
              {publications.map((pub) => (
                <li key={pub.title} className="py-6">
                  <Badge variant="secondary" className="mb-2 text-xs font-normal">
                    {pub.type}
                  </Badge>
                  <p className="font-medium text-foreground">{pub.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.venue} &middot; {pub.year}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
