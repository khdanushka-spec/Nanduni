import { Container } from "@/components/container";
import { quickStats } from "@/lib/site-config";

export function QuickStats() {
  return (
    <section className="border-b border-border bg-muted/40">
      <Container>
        <dl className="grid grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
          {quickStats.map((stat) => (
            <div key={stat.label} className="px-2 py-8 text-center first:pl-0 last:pr-0 sm:px-8">
              <dd className="font-mono text-3xl font-semibold tabular-nums text-primary sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
