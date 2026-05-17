"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHY } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Percent, Zap, Globe, BarChart2, Shield } from "lucide-react";

export default function WhyPromptEdit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });

  // Parallax Asymmetric Float Transformations
  const leftColY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const bgGridY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Percent":
        return <Percent className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Globe":
        return <Globe className={className} />;
      case "BarChart2":
        return <BarChart2 className={className} />;
      case "Shield":
        return <Shield className={className} />;
      default:
        return <Zap className={className} />;
    }
  };

  const largeFeature = WHY.features.find((f) => f.large);
  const smallFeatures = WHY.features.filter((f) => !f.large);

  return (
    <section
      ref={containerRef}
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Parallax Background Grid Texture */}
      <motion.div
        style={{ y: bgGridY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,109,250,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,109,250,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10"
      />

      <div className="flex flex-col items-center text-center gap-4 mb-16 relative z-10">
        <ScrollReveal>
          <SectionLabel>{WHY.label}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary max-w-2xl mx-auto">
            {WHY.heading}
          </h2>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left Column: Large Feature with Parallax Float */}
        {largeFeature && (
          <motion.div style={{ y: leftColY }} className="lg:col-span-5 flex">
            <ScrollReveal delay={150} className="w-full h-full">
              <GlowCard className="w-full h-full flex flex-col justify-center gap-8 bg-bg-surface/90 backdrop-blur-xl border-accent-primary/30 shadow-[0_0_30px_var(--accent-glow)] hover:border-accent-primary/60 transition-all duration-300 p-8 md:p-10">
                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shadow-[0_0_20px_var(--accent-glow)]">
                  {getIcon(largeFeature.icon, "w-8 h-8")}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                    {largeFeature.title}
                  </h3>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed font-normal max-w-sm">
                    {largeFeature.body}
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>
          </motion.div>
        )}

        {/* Right Column: Stacked Smaller Features with Delayed Parallax Float */}
        <motion.div
          style={{ y: rightColY }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {smallFeatures.map((feature, idx) => (
            <ScrollReveal key={idx} delay={250 + idx * 100} className="h-full">
              <GlowCard className="h-full flex flex-col gap-4 p-8 bg-bg-surface/60 backdrop-blur-md border-border-subtle hover:border-border-glow transition-all duration-300 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-center text-accent-secondary">
                  {getIcon(feature.icon, "w-6 h-6")}
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-normal mt-auto">
                  {feature.body}
                </p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
