"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"], // Triggers as section enters viewport
  });

  // 3D Spatial Zoom & Window Frame Transformations
  const windowScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const windowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const windowY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  // Parallax depth for the connecting dashed line
  const lineScaleX = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative overflow-hidden"
    >
      {/* 3D Spatial Zoom Window Frame Background */}
      <motion.div
        style={{
          scale: windowScale,
          opacity: windowOpacity,
          y: windowY,
        }}
        className="absolute inset-0 bg-bg-elevated/20 backdrop-blur-3xl border border-border-subtle rounded-[48px] -z-20 pointer-events-none shadow-2xl"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,109,250,0.08),transparent_70%)] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center gap-4 mb-16 relative z-10 pt-8">
        <ScrollReveal>
          <SectionLabel>{HOW_IT_WORKS.label}</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary max-w-2xl mx-auto">
            {HOW_IT_WORKS.heading}
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-8 px-4 md:px-8 z-10">
        {/* Connecting dashed line for desktop with Parallax scrub */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-1/2 -z-10 overflow-hidden">
          <motion.div
            style={{ scaleX: lineScaleX, transformOrigin: "left" }}
            className="w-full h-full border-t-2 border-dashed border-accent-primary/60"
          />
        </div>

        {HOW_IT_WORKS.steps.map((step, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            <GlowCard className="h-full flex flex-col gap-6 relative bg-bg-surface/90 backdrop-blur-md border-border-subtle shadow-xl hover:shadow-[0_0_30px_rgba(124,109,250,0.2)] transition-all duration-300">
              <div className="font-mono text-3xl md:text-4xl font-bold text-accent-primary">
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
