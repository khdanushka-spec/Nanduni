import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-muted/30 py-16 sm:py-20">
      <Container>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent-foreground/70">
          <span className="text-accent">◆</span> {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
