"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HERO } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Brain,
  Sparkles,
  Cpu,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  Play,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [stage, setStage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through the 4 animation stages every 4 seconds
  useEffect(() => {
    if (isHovered) return; // pause auto-cycle on hover

    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const stagesData = [
    {
      title: "1. The Creator's Mind",
      description: "A prompt is engineered from pure creative vision.",
      badge: "Prompt Crafted",
      icon: <Brain className="w-10 h-10 text-accent-primary" />,
    },
    {
      title: "2. AI Video Generation",
      description: "Sora, Runway, and Kling process the parameters.",
      badge: "AI Video Rendered",
      icon: <Cpu className="w-10 h-10 text-success" />,
    },
    {
      title: "3. Marketplace Listing",
      description: "Instantly listed on PromptEdit's storefront.",
      badge: "Listed for $35",
      icon: <ShoppingBag className="w-10 h-10 text-accent-secondary" />,
    },
    {
      title: "4. Passive Monetization",
      description: "Earn 80% revenue share on every single download.",
      badge: "Passive Income Unlocked",
      icon: <TrendingUp className="w-10 h-10 text-earnings-gold" />,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-5 md:px-8 lg:px-16 overflow-visible">
      {/* Absolute radial violet glow flowing seamlessly across the background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] h-[900px] bg-[radial-gradient(ellipse_1000px_600px_at_50%_50%,rgba(124,109,250,0.18),transparent)] -z-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>{HERO.label}</SectionLabel>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]">
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
            className="text-lg md:text-xl text-text-secondary max-w-xl font-normal leading-relaxed"
          >
            {HERO.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2"
          >
            <Link
              href="#cta"
              className="w-full sm:w-auto btn-3d text-base px-8 py-4 text-center"
            >
              {HERO.ctaPrimary} →
            </Link>
            <Link
              href="#browse"
              className="w-full sm:w-auto btn-3d-secondary text-base px-8 py-4 text-center"
            >
              {HERO.ctaSecondary}
            </Link>
          </motion.div>

          {/* Stats Belt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-6 md:gap-12 w-full pt-8 mt-4 border-t border-border-subtle"
          >
            {HERO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start gap-1">
                <div className="font-display text-3xl md:text-4xl font-bold text-text-primary flex items-center">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    duration={1500 + idx * 200}
                  />
                </div>
                <div className="text-[11px] md:text-xs font-mono tracking-wider text-text-tertiary uppercase">
                  {stat.suffix}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Creation to Monetization Thick Line Animation directly on background */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setStage((prev) => (prev + 1) % 4)}
            className="relative w-full aspect-[4/3] max-w-[550px] group cursor-pointer flex flex-col items-center justify-center p-4"
          >
            {/* Background glowing orb */}
            <motion.div
              animate={{
                scale: isHovered ? 1.3 : 1,
                opacity: isHovered ? 0.7 : 0.4,
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent-primary/20 blur-3xl pointer-events-none"
            />

            {/* Interactive Stage Tracker Dots */}
            <div className="absolute top-0 left-4 right-4 flex items-center justify-between z-30">
              <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                Interactive Journey (Click to cycle)
              </span>
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setStage(idx);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      stage === idx
                        ? "bg-accent-primary w-6 shadow-[0_0_10px_var(--accent-primary)]"
                        : "bg-border-glow hover:bg-text-tertiary"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Central Animation Canvas */}
            <div className="relative w-full h-48 flex items-center justify-center my-auto z-20">
              {/* Dynamic SVG Thick Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {/* Connecting Line 1: Emerges from left */}
                <motion.path
                  d="M 50,100 C 120,100 150,30 250,100"
                  fill="none"
                  stroke="#7c6dfa"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                  animate={{
                    strokeDashoffset: stage >= 0 ? -100 : 0,
                    opacity: stage === 0 ? 1 : 0.3,
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Connecting Line 2: Flows to Center Hub */}
                <motion.path
                  d="M 250,100 C 350,170 380,40 450,100"
                  fill="none"
                  stroke={stage >= 1 ? "#34d399" : "#7c6dfa"}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 8"
                  animate={{
                    strokeDashoffset: stage >= 1 ? -100 : 0,
                    opacity: stage === 1 ? 1 : 0.3,
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Connecting Line 3: Culminates in Earnings Graph */}
                <motion.path
                  d="M 100,160 Q 250,220 400,140"
                  fill="none"
                  stroke={stage >= 2 ? "#fbbf24" : "#a78bfa"}
                  strokeWidth="5"
                  strokeLinecap="round"
                  animate={{
                    pathLength: stage === 3 ? [0, 1] : 1,
                    opacity: stage >= 2 ? 1 : 0.2,
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>

              {/* Central Stage Animated Icon */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage}
                  initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-28 h-28 rounded-3xl bg-bg-elevated/90 border-2 border-accent-primary/60 shadow-[0_0_40px_var(--accent-glow)] flex items-center justify-center backdrop-blur-xl relative z-20"
                >
                  {stagesData[stage].icon}

                  {/* Absolute pinging status dot */}
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-bg-base flex items-center justify-center border border-border-subtle">
                    <div className="w-2.5 h-2.5 rounded-full bg-success animate-ping absolute" />
                    <div className="w-2.5 h-2.5 rounded-full bg-success" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stage 4 Cascade of Currency Symbols */}
              <AnimatePresence>
                {stage === 3 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 0, x: -40 }}
                      animate={{ opacity: [0, 1, 0], y: -60, x: -60 }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                      className="absolute font-display text-2xl font-bold text-earnings-gold z-10 pointer-events-none"
                    >
                      $$$
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 0, x: 40 }}
                      animate={{ opacity: [0, 1, 0], y: -80, x: 50 }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      className="absolute font-display text-2xl font-bold text-success z-10 pointer-events-none"
                    >
                      €€€
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 0, x: 0 }}
                      animate={{ opacity: [0, 1, 0], y: -100, x: 10 }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="absolute font-display text-2xl font-bold text-accent-secondary z-10 pointer-events-none"
                    >
                      ¥¥¥
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Stage Details Card */}
            <div className="w-full mt-auto pt-6 border-t border-border-subtle flex flex-col gap-2 z-20 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg font-bold text-text-primary">
                      {stagesData[stage].title}
                    </span>
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-accent-primary/20 text-accent-secondary border border-accent-primary/30">
                      {stagesData[stage].badge}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary max-w-sm font-normal">
                    {stagesData[stage].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
