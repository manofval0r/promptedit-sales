import React from "react";
import { PROMPT_EXAMPLES } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PromptExamples() {
  return (
    <section
      id="browse"
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative"
    >
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <ScrollReveal>
          <SectionLabel>Marketplace Demand</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            What sells on PromptEdit.
          </h2>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROMPT_EXAMPLES.map((prompt, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            <GlowCard className="h-full flex flex-col p-6 gap-6 bg-bg-surface/90 backdrop-blur-sm group cursor-pointer">
              {/* Preview image placeholder gradient */}
              <div
                className={`w-full aspect-video rounded-xl bg-gradient-to-br ${prompt.gradient} relative flex items-center justify-center overflow-hidden border border-border-subtle group-hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className="absolute top-3 left-3 bg-bg-base/80 backdrop-blur-md px-3 py-1 rounded-full border border-border-subtle text-xs font-mono font-medium text-accent-secondary">
                  {prompt.tool}
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-bg-base/60 backdrop-blur-md flex items-center justify-center border border-border-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <span className="text-accent-primary font-bold text-sm">
                    ▶
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="flex flex-col gap-3 grow">
                <div className="text-xs font-mono text-text-tertiary tracking-wider uppercase">
                  {prompt.category}
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors line-clamp-2">
                  {prompt.title}
                </h3>

                <div className="flex items-center justify-between pt-4 mt-auto border-t border-border-subtle">
                  <div className="font-display text-2xl font-bold text-[#fbbf24]">
                    ${prompt.price}
                  </div>
                  <div className="text-xs font-mono text-text-secondary bg-bg-elevated px-3 py-1 rounded-full border border-border-subtle">
                    {prompt.sales} sales
                  </div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
