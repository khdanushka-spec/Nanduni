import { Hero } from "@/components/home/hero";
import { QuickStats } from "@/components/home/quick-stats";
import { Highlights } from "@/components/home/highlights";
import { HomeCta } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStats />
      <Highlights />
      <HomeCta />
    </>
  );
}
