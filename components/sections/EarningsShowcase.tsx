import React from "react";
import { EARNINGS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function EarningsShowcase() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent border-y border-border-subtle relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16 flex flex-col gap-16">
        <div className="flex flex-col items-start gap-4">
          <ScrollReveal>
            <SectionLabel>{EARNINGS.label}</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
              {EARNINGS.heading}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Featured Stat */}
          <div className="lg:col-span-5 flex">
            <ScrollReveal delay={200} className="w-full">
              <GlowCard className="w-full h-full flex flex-col justify-center gap-6 bg-bg-surface/80 border-border-glow/50 shadow-[0_0_30px_rgba(251,191,36,0.08)] hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] hover:border-[#fbbf24]/40">
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#fbbf24] tracking-tight flex items-baseline">
                  <AnimatedCounter
                    value={EARNINGS.featured.value}
                    prefix={EARNINGS.featured.prefix}
                  />
                  <span className="text-2xl md:text-3xl font-mono font-normal text-text-tertiary ml-1">
                    {EARNINGS.featured.suffix}
                  </span>
                </div>
                <p className="text-base md:text-lg text-text-primary font-medium leading-relaxed">
                  {EARNINGS.featured.label}
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>

          {/* Right Grid (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EARNINGS.stats.map((stat, idx) => (
              <ScrollReveal
                key={idx}
                delay={300 + idx * 100}
                className="h-full"
              >
                <GlowCard className="h-full flex flex-col justify-center gap-3 p-6 bg-bg-surface/60 backdrop-blur-sm">
                  <div className="text-xs md:text-sm font-mono tracking-wider text-text-tertiary uppercase">
                    {stat.label}
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
