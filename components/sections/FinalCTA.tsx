import React from "react";
import { FINAL_CTA } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative w-full py-32 px-5 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-t border-border-subtle"
    >
      {/* Top gradient border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-60" />

      {/* Strong violet radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[700px] bg-[radial-gradient(ellipse_1000px_600px_at_50%_50%,rgba(124,109,250,0.18),transparent)] -z-10 pointer-events-none" />

      <ScrollReveal className="max-w-[800px] mx-auto flex flex-col items-center gap-8 z-10">
        <SectionLabel>{FINAL_CTA.eyebrow}</SectionLabel>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
          <span className="block">{FINAL_CTA.headline1}</span>{" "}
          <span className="block mt-2">
            <GradientText>{FINAL_CTA.headline2}</GradientText>
          </span>
        </h2>

        <p className="text-lg md:text-xl text-text-secondary max-w-xl font-normal leading-relaxed">
          {FINAL_CTA.body}
        </p>

        <div className="flex flex-col items-center gap-4 mt-4 w-full sm:w-auto">
          <a
            href="#apply"
            className="w-full sm:w-auto bg-accent-primary hover:bg-accent-primary/90 text-white font-semibold text-lg px-10 py-5 rounded-full animate-pulse-glow transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-primary)] hover:-translate-y-0.5 text-center inline-block"
          >
            {FINAL_CTA.cta} →
          </a>
          <span className="text-xs md:text-sm font-mono text-text-tertiary tracking-wide uppercase">
            {FINAL_CTA.fine}
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
