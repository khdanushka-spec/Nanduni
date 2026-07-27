import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for research collaboration, consulting, or speaking requests.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Correspondence"
        title="Get in touch"
        description="Open to research collaboration, consulting inquiries, and speaking requests."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 sm:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col gap-3 pt-6">
              <Mail className="size-5 text-primary" />
              <p className="font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">Best for research and consulting inquiries.</p>
              {siteConfig.email.startsWith("[") ? (
                <p className="mt-2 text-sm text-muted-foreground">[Email to be added]</p>
              ) : (
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className={cn(buttonVariants({ variant: "outline" }), "mt-2 w-fit")}
                >
                  {siteConfig.email}
                </Link>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col gap-3 pt-6">
              <ExternalLink className="size-5 text-primary" />
              <p className="font-medium text-foreground">LinkedIn</p>
              <p className="text-sm text-muted-foreground">Professional background and network.</p>
              {siteConfig.social.linkedin ? (
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "mt-2 w-fit")}
                >
                  View profile
                </Link>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">[LinkedIn link to be added]</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col gap-3 pt-6">
              <MapPin className="size-5 text-primary" />
              <p className="font-medium text-foreground">Location</p>
              <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Available for remote collaboration across time zones.
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
