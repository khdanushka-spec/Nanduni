import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,var(--color-primary)_0%,transparent_100%)] opacity-[0.06]"
      />
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Badge
            variant="outline"
            className="mb-6 border-accent/40 bg-accent/10 font-mono text-xs font-medium tracking-wide text-accent-foreground"
          >
            {siteConfig.status}
          </Badge>

          <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-balance text-xl font-medium text-primary">
            {siteConfig.tagline}
          </p>

          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            {siteConfig.mission}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/research" className={cn(buttonVariants({ size: "lg" }))}>
              Explore my research
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-2xl" />
          <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-border bg-card shadow-xl shadow-black/5">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <FlaskConical className="size-16" strokeWidth={1.25} />
              <p className="font-mono text-xs uppercase tracking-wide">Photo coming soon</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
