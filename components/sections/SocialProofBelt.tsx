"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOOLS = [
  "Sora",
  "Runway Gen-3",
  "Kling AI",
  "Pika Labs",
  "Luma Dream Machine",
  "Higgsfield",
  "Midjourney v6",
  "Stable Video Diffusion",
];

export default function SocialProofBelt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });

  // Parallax Perspective Shift Transformations
  const beltScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const beltY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <section
      ref={containerRef}
      className="w-full py-10 bg-bg-surface/50 border-y border-border-subtle overflow-hidden relative"
      style={{ position: "relative" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />

      <motion.div
        style={{ scale: beltScale, y: beltY }}
        className="flex w-[200%] animate-marquee items-center gap-12"
      >
        {[...TOOLS, ...TOOLS].map((tool, idx) => (
          <div key={idx} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-sm md:text-base tracking-widest text-text-tertiary font-semibold uppercase hover:text-text-secondary transition-colors cursor-default">
              {tool}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-glow" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
