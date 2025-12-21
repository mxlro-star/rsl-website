import { AnimatedHeroProps } from "@/lib/types";
import GridBackground from "./GridBackground";

export default function AnimatedHero({
  headline,
  subheadline,
}: AnimatedHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      <GridBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] text-zinc-50 animate-fade-in-up">
          {headline}
        </h1>
        <p className="mt-8 text-xl md:text-2xl leading-relaxed text-zinc-400 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
          {subheadline}
        </p>
      </div>
    </section>
  );
}
