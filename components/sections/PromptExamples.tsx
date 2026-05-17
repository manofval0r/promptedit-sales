"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROMPT_EXAMPLES } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PromptExamples() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });

  // 3D Perspective Shift & Spatial Zoom Transformations
  const gridScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const gridRotateX = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section
      ref={containerRef}
      id="examples"
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative overflow-visible"
      style={{ perspective: "1000px", position: "relative" }}
    >
      <div className="flex flex-col items-center text-center gap-4 mb-16 relative z-10">
        <ScrollReveal>
          <SectionLabel>Marketplace Demand</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary max-w-2xl mx-auto">
            What sells on PromptEdit.
          </h2>
        </ScrollReveal>
      </div>

      {/* 3D Perspective Grid Container */}
      <motion.div
        style={{
          scale: gridScale,
          rotateX: gridRotateX,
          y: gridY,
          transformStyle: "preserve-3d",
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {PROMPT_EXAMPLES.map((prompt, idx) => (
          <ScrollReveal key={idx} delay={idx * 150} className="h-full">
            <GlowCard className="h-full flex flex-col p-6 gap-6 bg-bg-surface/90 backdrop-blur-xl border-border-subtle shadow-xl hover:shadow-[0_0_40px_rgba(124,109,250,0.2)] hover:border-border-glow transition-all duration-300 group cursor-pointer">
              {/* Preview image placeholder gradient */}
              <div
                className={`w-full aspect-video rounded-xl bg-gradient-to-br ${prompt.gradient} relative flex items-center justify-center overflow-hidden border border-border-subtle group-hover:scale-[1.03] transition-transform duration-300 shadow-inner`}
              >
                <div className="absolute top-3 left-3 bg-bg-base/80 backdrop-blur-md px-3 py-1 rounded-full border border-border-subtle text-xs font-mono font-medium text-accent-secondary">
                  {prompt.tool}
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
                <div className="w-12 h-12 rounded-full bg-bg-base/80 backdrop-blur-md flex items-center justify-center border border-border-subtle opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl scale-90 group-hover:scale-100">
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
                <h3 className="font-display text-lg md:text-xl font-bold text-text-primary group-hover:text-accent-secondary transition-colors line-clamp-2 tracking-tight">
                  {prompt.title}
                </h3>

                <div className="flex items-center justify-between pt-4 mt-auto border-t border-border-subtle">
                  <div className="font-display text-2xl font-bold text-[#fbbf24]">
                    ${prompt.price}
                  </div>
                  <div className="text-xs font-mono text-text-secondary bg-bg-elevated px-3 py-1 rounded-full border border-border-subtle font-medium">
                    {prompt.sales} sales
                  </div>
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        ))}
      </motion.div>
    </section>
  );
}
