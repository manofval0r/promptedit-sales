"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });

  // Parallax Masonry Column Transformations
  const col1Y = useTransform(scrollYProgress, [0, 1], [40, -10]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [120, 0]);

  // Split testimonials into 3 columns for independent parallax glide
  const col1 = TESTIMONIALS.filter((_, i) => i % 3 === 0);
  const col2 = TESTIMONIALS.filter((_, i) => i % 3 === 1);
  const col3 = TESTIMONIALS.filter((_, i) => i % 3 === 2);

  return (
    <section
      ref={containerRef}
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative overflow-hidden"
    >
      <div className="flex flex-col items-center text-center gap-4 mb-16 relative z-10">
        <ScrollReveal>
          <SectionLabel>Social Proof</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary max-w-2xl mx-auto">
            From the sellers.
          </h2>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
        {/* Column 1 Parallax */}
        <motion.div style={{ y: col1Y }} className="flex flex-col gap-8">
          {col1.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <GlowCard className="flex flex-col gap-6 p-8 bg-bg-surface/90 backdrop-blur-xl border-border-subtle shadow-lg hover:shadow-[0_0_30px_rgba(124,109,250,0.15)] hover:border-border-glow transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/10 rounded-full blur-2xl pointer-events-none" />

                <blockquote className="font-display italic text-lg md:text-xl text-text-primary leading-relaxed">
                  &quot;{t.quote}&quot;
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
        </motion.div>

        {/* Column 2 Parallax */}
        <motion.div style={{ y: col2Y }} className="flex flex-col gap-8 md:mt-6">
          {col2.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <GlowCard className="flex flex-col gap-6 p-8 bg-bg-surface/90 backdrop-blur-xl border-border-subtle shadow-lg hover:shadow-[0_0_30px_rgba(124,109,250,0.15)] hover:border-border-glow transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-success/10 rounded-full blur-2xl pointer-events-none" />

                <blockquote className="font-display italic text-lg md:text-xl text-text-primary leading-relaxed">
                  &quot;{t.quote}&quot;
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
        </motion.div>

        {/* Column 3 Parallax */}
        <motion.div style={{ y: col3Y }} className="flex flex-col gap-8 md:mt-12">
          {col3.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <GlowCard className="flex flex-col gap-6 p-8 bg-bg-surface/90 backdrop-blur-xl border-border-subtle shadow-lg hover:shadow-[0_0_30px_rgba(124,109,250,0.15)] hover:border-border-glow transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-secondary/10 rounded-full blur-2xl pointer-events-none" />

                <blockquote className="font-display italic text-lg md:text-xl text-text-primary leading-relaxed">
                  &quot;{t.quote}&quot;
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
        </motion.div>
      </div>
    </section>
  );
}
