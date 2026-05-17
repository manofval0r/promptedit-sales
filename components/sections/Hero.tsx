"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HERO } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-5 md:px-8 lg:px-16 overflow-hidden">
      {/* Top gradient border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-60" />

      {/* Radial violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-[radial-gradient(ellipse_800px_400px_at_50%_40%,rgba(124,109,250,0.12),transparent)] -z-10 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto w-full flex flex-col items-center text-center gap-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>{HERO.label}</SectionLabel>
        </motion.div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.1] max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {HERO.headline1}
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block mt-2"
          >
            <GradientText>{HERO.headline2}</GradientText>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed"
        >
          {HERO.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4"
        >
          <Link
            href="#cta"
            className="w-full sm:w-auto bg-accent-primary hover:bg-accent-primary/90 text-white font-semibold text-base px-8 py-4 rounded-full shadow-[0_0_25px_var(--accent-glow)] transition-all duration-300 hover:shadow-[0_0_35px_var(--accent-primary)] hover:-translate-y-0.5 text-center"
          >
            {HERO.ctaPrimary} →
          </Link>
          <Link
            href="#browse"
            className="w-full sm:w-auto bg-transparent hover:bg-bg-surface text-text-primary font-semibold text-base px-8 py-4 rounded-full border border-border-subtle hover:border-border-glow transition-all duration-300 text-center"
          >
            {HERO.ctaSecondary}
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl pt-16 mt-8 border-t border-border-subtle"
        >
          {HERO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="font-display text-4xl md:text-5xl font-bold text-text-primary flex items-center">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  duration={1500 + idx * 200}
                />
              </div>
              <div className="text-xs md:text-sm font-mono tracking-wider text-text-tertiary uppercase">
                {stat.suffix}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
