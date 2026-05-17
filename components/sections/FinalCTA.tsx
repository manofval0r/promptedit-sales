import React from "react";
import { FINAL_CTA } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="cta" className="w-full px-5 md:px-8 lg:px-16 py-12 relative z-10">
      <div className="max-w-[1200px] mx-auto w-full bg-bg-surface/60 backdrop-blur-2xl border border-border-subtle rounded-[40px] py-24 px-8 md:px-16 relative overflow-hidden shadow-[0_0_80px_var(--accent-glow)] flex flex-col items-center justify-center text-center">
        {/* Strong violet radial glow inside the card */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_50%_50%,rgba(124,109,250,0.25),transparent)] pointer-events-none" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,109,250,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,109,250,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

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
              className="w-full sm:w-auto btn-3d text-lg px-10 py-5 text-center inline-block"
            >
              {FINAL_CTA.cta} →
            </a>
            <span className="text-xs md:text-sm font-mono text-text-tertiary tracking-wide uppercase">
              {FINAL_CTA.fine}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
