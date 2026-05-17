import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <ScrollReveal>
          <SectionLabel>Social Proof</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            From the sellers.
          </h2>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {TESTIMONIALS.map((t, idx) => (
          <ScrollReveal key={idx} delay={idx * 150}>
            <GlowCard className="flex flex-col gap-6 bg-bg-surface/90 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 rounded-full blur-xl pointer-events-none" />

              <blockquote className="font-display italic text-lg md:text-xl text-text-primary leading-relaxed">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-border-subtle mt-auto gap-4">
                <div className="flex flex-col">
                  <cite className="font-display font-bold text-base text-text-primary not-italic">
                    {t.name}
                  </cite>
                  <span className="text-xs font-mono text-text-tertiary">
                    {t.handle} · {t.tool}
                  </span>
                </div>
                <div className="text-xs font-mono font-semibold text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 px-3 py-1.5 rounded-full shrink-0">
                  {t.earnings}
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
