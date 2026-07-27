import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeCta() {
  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-xl text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Open to research collaboration, consulting, and conversation
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-balance text-muted-foreground">
          Whether it&apos;s analytical chemistry, materials research, or laboratory
          consulting — I&apos;d welcome the chance to talk.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
            Get in touch
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
