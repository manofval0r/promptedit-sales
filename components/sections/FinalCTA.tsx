"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FINAL_CTA } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"], // Triggers as the section enters the viewport
  });

  // 3D Card Stack Transformations
  // Card 1 (Back Layer - Deepest)
  const scale1 = useTransform(scrollYProgress, [0, 1], [0.8, 0.92]);
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const rotateX1 = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [0, 0.3]);

  // Card 2 (Middle Layer)
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.85, 0.96]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -15]);
  const rotateX2 = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  // Card 3 (Main Top CTA Card)
  const scale3 = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const rotateX3 = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="cta"
      className="w-full px-5 md:px-8 lg:px-16 py-20 relative z-10 overflow-visible"
      style={{ perspective: "1000px", position: "relative" }}
    >
      <div className="max-w-[1200px] mx-auto w-full relative flex flex-col items-center justify-center min-h-[550px]">
        {/* Card 1: Back Layer */}
        <motion.div
          style={{
            scale: scale1,
            y: y1,
            rotateX: rotateX1,
            opacity: opacity1,
          }}
          className="absolute inset-0 w-full h-full bg-accent-primary/10 backdrop-blur-md border border-accent-primary/20 rounded-[48px] -z-20 pointer-events-none"
        />

        {/* Card 2: Middle Layer */}
        <motion.div
          style={{
            scale: scale2,
            y: y2,
            rotateX: rotateX2,
            opacity: opacity2,
          }}
          className="absolute inset-0 w-full h-full bg-bg-elevated/50 backdrop-blur-xl border border-border-glow rounded-[48px] -z-10 pointer-events-none"
        />

        {/* Card 3: Main Top CTA Card */}
        <motion.div
          style={{
            scale: scale3,
            y: y3,
            rotateX: rotateX3,
            opacity: opacity3,
          }}
          className="w-full bg-[#060612]/90 backdrop-blur-2xl border border-border-subtle/80 rounded-[48px] py-28 px-8 md:px-16 relative overflow-hidden shadow-[0_0_100px_var(--accent-glow)] flex flex-col items-center justify-center text-center z-10"
        >
          {/* SPECTACULAR RISING ECLIPSE HORIZON / GLOWING DOME (Subtle Cinematic Dark Adaptation) */}
          {/* Layer 1: Subtle violet core highlight line at top border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-[600px] h-[2px] bg-gradient-to-r from-transparent via-accent-primary/60 to-transparent opacity-60 pointer-events-none" />

          {/* Layer 2: Faint violet core glow rising from top border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[280px] bg-[radial-gradient(ellipse_at_top,rgba(124,109,250,0.15),transparent_80%)] pointer-events-none" />

          {/* Layer 3: Wider subtle atmospheric violet dome spreading across upper half */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(124,109,250,0.12),transparent_75%)] pointer-events-none" />

          {/* Subtle grid texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,109,250,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,109,250,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Content Container */}
          <div className="max-w-[800px] mx-auto flex flex-col items-center z-10 relative">
            <div className="mb-6">
              <SectionLabel>{FINAL_CTA.eyebrow}</SectionLabel>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-2xl mx-auto">
              <span className="block">{FINAL_CTA.headline1}</span>{" "}
              <span className="block mt-2">
                <GradientText>{FINAL_CTA.headline2}</GradientText>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-normal leading-relaxed mt-6">
              {FINAL_CTA.body}
            </p>

            <div className="flex flex-col items-center gap-4 mt-10 w-full sm:w-auto">
              <a
                href="https://www.contentcreator.com/prompt-edit"
                className="w-full sm:w-auto btn-3d text-lg px-12 py-5 text-center inline-block"
              >
                {FINAL_CTA.cta} →
              </a>
              <span className="text-xs md:text-sm font-mono text-text-tertiary tracking-wide uppercase mt-2 block">
                {FINAL_CTA.fine}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
