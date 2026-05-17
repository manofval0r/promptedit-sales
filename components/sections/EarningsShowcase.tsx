"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EARNINGS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function EarningsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });

  // Parallax Depth & Apple-Style Scrub Transformations
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const cardParallaxY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rightGridParallaxY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent border-y border-border-subtle relative overflow-hidden"
    >
      {/* Parallax Background Ambient Glow */}
      <motion.div
        style={{ y: bgParallaxY }}
        className="absolute top-0 right-0 w-full max-w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.12),transparent_70%)] pointer-events-none -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16 flex flex-col gap-16 relative z-10">
        <div className="flex flex-col items-start gap-4">
          <ScrollReveal>
            <SectionLabel>{EARNINGS.label}</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary max-w-3xl">
              {EARNINGS.heading}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Featured Stat with Parallax Float */}
          <motion.div style={{ y: cardParallaxY }} className="lg:col-span-5 flex">
            <ScrollReveal delay={150} className="w-full h-full">
              <GlowCard className="w-full h-full flex flex-col justify-center gap-6 bg-bg-surface/90 backdrop-blur-xl border-border-glow shadow-[0_0_40px_rgba(251,191,36,0.1)] hover:shadow-[0_0_50px_rgba(251,191,36,0.2)] hover:border-[#fbbf24]/50 transition-all duration-300 p-8 md:p-10">
                <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#fbbf24] tracking-tight flex items-baseline">
                  <AnimatedCounter
                    value={EARNINGS.featured.value}
                    prefix={EARNINGS.featured.prefix}
                  />
                  <span className="text-2xl md:text-3xl font-mono font-normal text-text-tertiary ml-1">
                    {EARNINGS.featured.suffix}
                  </span>
                </div>
                <p className="text-base md:text-lg text-text-primary font-medium leading-relaxed max-w-sm">
                  {EARNINGS.featured.label}
                </p>
              </GlowCard>
            </ScrollReveal>
          </motion.div>

          {/* Right Grid (2x2) with Delayed Parallax Scrub */}
          <motion.div
            style={{ y: rightGridParallaxY }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {EARNINGS.stats.map((stat, idx) => (
              <ScrollReveal
                key={idx}
                delay={250 + idx * 100}
                className="h-full"
              >
                <GlowCard className="h-full flex flex-col justify-center gap-3 p-8 bg-bg-surface/60 backdrop-blur-md border-border-subtle hover:border-border-glow transition-all duration-300 hover:shadow-xl">
                  <div className="text-xs md:text-sm font-mono tracking-wider text-text-tertiary uppercase">
                    {stat.label}
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-text-primary">
                    {stat.value}
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
