import React from "react";
import { HOW_IT_WORKS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative"
    >
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <ScrollReveal>
          <SectionLabel>{HOW_IT_WORKS.label}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            {HOW_IT_WORKS.heading}
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Connecting dashed line for desktop */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-border-subtle -translate-y-1/2 -z-10" />

        {HOW_IT_WORKS.steps.map((step, idx) => (
          <ScrollReveal key={idx} delay={idx * 200} className="h-full">
            <GlowCard className="h-full flex flex-col gap-6 relative bg-bg-surface/90 backdrop-blur-sm">
              <div className="font-mono text-3xl md:text-4xl font-bold text-text-tertiary">
                {step.number}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-normal mt-auto">
                {step.body}
              </p>
            </GlowCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
