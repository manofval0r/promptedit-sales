"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HERO } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Code2,
  Cpu,
  ShoppingBag,
  TrendingUp,
  Play,
  CheckCircle2,
  Eye,
  ArrowUpRight,
  Terminal,
  Activity,
  DollarSign,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [stage, setStage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [simulatedEarnings, setSimulatedEarnings] = useState(14850);

  // Auto-cycle through the 4 animation stages every 5 seconds
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Simulate live earnings ticking up in Stage 4
  useEffect(() => {
    if (stage !== 3) return;

    const interval = setInterval(() => {
      setSimulatedEarnings((prev) => prev + Math.floor(Math.random() * 35) + 15);
    }, 2000);

    return () => clearInterval(interval);
  }, [stage]);

  const stagesData = [
    { id: 0, title: "1. IDE", label: "The Creator's Mind" },
    { id: 1, title: "2. Render", label: "AI Video Generation" },
    { id: 2, title: "3. Store", label: "Marketplace Listing" },
    { id: 3, title: "4. Earn", label: "Passive Monetization" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-5 md:px-8 lg:px-16 overflow-visible">
      {/* Absolute radial violet glow flowing seamlessly across the background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] h-[900px] bg-[radial-gradient(ellipse_1000px_600px_at_50%_50%,rgba(124,109,250,0.18),transparent)] -z-10 pointer-events-none" />

      <div className="max-w-[1250px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-5 flex flex-col items-start text-left gap-8">
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
              className="w-full sm:w-auto btn-3d text-base px-8 py-4 text-center inline-block"
            >
              {HERO.ctaPrimary} →
            </Link>
            <Link
              href="#browse"
              className="w-full sm:w-auto btn-3d-secondary text-base px-8 py-4 text-center inline-block"
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

        {/* Right Column: Breathtaking Interactive Prompt Engineering & Monetization Engine */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full bg-[#0d0d1f]/90 backdrop-blur-2xl border border-border-subtle rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative"
          >
            {/* Mac-style Window Title Bar */}
            <div className="bg-bg-elevated/80 backdrop-blur-md border-b border-border-subtle px-6 py-4 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              </div>

              <div className="flex items-center gap-2 bg-bg-base/80 px-4 py-1.5 rounded-full border border-border-subtle">
                <Terminal className="w-3.5 h-3.5 text-accent-primary" />
                <span className="font-mono text-xs text-text-secondary font-medium tracking-wide">
                  prompt_engine_v2.4.ts
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-[10px] text-success tracking-wider uppercase font-bold">
                  CONNECTED
                </span>
              </div>
            </div>

            {/* Interactive Workspace Canvas */}
            <div className="p-6 md:p-8 flex-grow min-h-[380px] md:min-h-[420px] flex flex-col justify-center relative overflow-hidden">
              {/* Background ambient mesh glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,109,250,0.08),transparent_70%)] pointer-events-none" />

              <AnimatePresence mode="wait">
                {/* STAGE 1: THE PROMPT IDE (The Creator's Mind) */}
                {stage === 0 && (
                  <motion.div
                    key="stage-0"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 w-full"
                  >
                    <div className="flex items-center justify-between border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-accent-primary/20 border border-accent-primary/40 text-accent-primary">
                          <Code2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-text-primary">
                            Prompt IDE Editor
                          </h3>
                          <p className="text-xs text-text-tertiary font-mono">
                            Targeting Sora, Runway Gen-3 & Kling 1.5
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-bg-elevated border border-border-subtle text-text-secondary">
                        UTF-8
                      </span>
                    </div>

                    {/* Simulated Code Editor */}
                    <div className="bg-[#060612]/90 border border-border-subtle rounded-2xl p-5 font-mono text-sm shadow-inner relative overflow-hidden group">
                      <div className="absolute top-0 left-0 bottom-0 w-12 bg-bg-elevated/40 border-r border-border-subtle/50 flex flex-col items-center py-5 text-xs text-text-tertiary select-none gap-2.5 font-mono">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                      </div>

                      <div className="pl-12 flex flex-col gap-2.5 overflow-x-auto text-left leading-relaxed">
                        <div className="text-text-tertiary">
                          <span className="text-accent-primary">// Target:</span> Sora Engine v3 (Photorealistic)
                        </div>
                        <div>
                          <span className="text-accent-primary font-bold">const</span>{" "}
                          <span className="text-white font-bold">videoPrompt</span> = {"{"}
                        </div>
                        <div className="pl-4">
                          <span className="text-accent-secondary">subject:</span>{" "}
                          <span className="text-success">&quot;Cinematic drone shot of a neon cyberpunk city&quot;</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-accent-secondary">lighting:</span>{" "}
                          <span className="text-success">&quot;Volumetric fog, ray-traced reflections, 8k&quot;</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-accent-secondary">motion:</span>{" "}
                          <span className="text-success">&quot;Slow fluid pan across skyscraper rooftops&quot;</span>
                        </div>
                        <div>{"};"}</div>
                      </div>

                      {/* Pulsing cursor */}
                      <div className="absolute bottom-6 left-[380px] w-2 h-4 bg-accent-primary animate-pulse hidden md:block" />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-text-tertiary font-mono">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                        <span>Syntax Validated (0 errors)</span>
                      </div>
                      <button
                        onClick={() => setStage(1)}
                        className="btn-3d text-xs px-6 py-2.5 flex items-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Run Prompt Analysis</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 2: AI VIDEO RENDER ENGINE */}
                {stage === 1 && (
                  <motion.div
                    key="stage-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 w-full"
                  >
                    <div className="flex items-center justify-between border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-success/20 border border-success/40 text-success">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-text-primary">
                            AI Video Render Engine
                          </h3>
                          <p className="text-xs text-text-tertiary font-mono">
                            Multi-model processing telemetry
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs text-success bg-success/10 border border-success/30 px-3 py-1 rounded-full animate-pulse">
                        <Activity className="w-3.5 h-3.5" />
                        <span>RENDERING (94%)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Left: Render Preview Simulation */}
                      <div className="md:col-span-6 bg-[#060612]/90 border border-border-subtle rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden group aspect-video shadow-inner">
                        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,var(--accent-primary),#34d399,#a78bfa)] opacity-30 animate-pulse pointer-events-none" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(6,6,18,0.8))] pointer-events-none" />

                        <Sparkles className="w-12 h-12 text-success animate-spin absolute" style={{ animationDuration: "8s" }} />
                        <span className="font-mono text-xs text-white font-bold z-10 mt-16 bg-bg-base/80 px-3 py-1 rounded-full border border-border-subtle">
                          8K_RENDER_PREVIEW.mp4
                        </span>
                      </div>

                      {/* Right: Live Telemetry */}
                      <div className="md:col-span-6 flex flex-col gap-4 font-mono text-xs">
                        <div className="bg-bg-elevated/60 border border-border-subtle rounded-xl p-3.5 flex flex-col gap-1.5">
                          <div className="flex justify-between text-text-tertiary">
                            <span>GPU ALLOCATION</span>
                            <span className="text-success font-bold">98.4%</span>
                          </div>
                          <div className="w-full bg-bg-base rounded-full h-1.5 overflow-hidden border border-border-subtle">
                            <div className="bg-success h-full w-[98%] rounded-full animate-pulse" />
                          </div>
                        </div>

                        <div className="bg-bg-elevated/60 border border-border-subtle rounded-xl p-3.5 flex flex-col gap-1.5">
                          <div className="flex justify-between text-text-tertiary">
                            <span>TENSOR CORES</span>
                            <span className="text-accent-primary font-bold">4,096 ACTIVE</span>
                          </div>
                          <div className="w-full bg-bg-base rounded-full h-1.5 overflow-hidden border border-border-subtle">
                            <div className="bg-accent-primary h-full w-[85%] rounded-full" />
                          </div>
                        </div>

                        <div className="bg-bg-elevated/60 border border-border-subtle rounded-xl p-3.5 flex flex-col gap-1.5">
                          <div className="flex justify-between text-text-tertiary">
                            <span>ESTIMATED VALUE</span>
                            <span className="text-earnings-gold font-bold">$35.00 / LICENSE</span>
                          </div>
                          <div className="w-full bg-bg-base rounded-full h-1.5 overflow-hidden border border-border-subtle">
                            <div className="bg-earnings-gold h-full w-[100%] rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-text-tertiary font-mono">
                        <Cpu className="w-4 h-4 text-accent-primary" />
                        <span>Parameters Optimized for Sora</span>
                      </div>
                      <button
                        onClick={() => setStage(2)}
                        className="btn-3d text-xs px-6 py-2.5 flex items-center gap-2"
                      >
                        <span>Package Listing</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 3: INSTANT MARKETPLACE STOREFRONT */}
                {stage === 2 && (
                  <motion.div
                    key="stage-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 w-full"
                  >
                    <div className="flex items-center justify-between border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-accent-secondary/20 border border-accent-secondary/40 text-accent-secondary">
                          <ShoppingBag className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-text-primary">
                            Marketplace Storefront
                          </h3>
                          <p className="text-xs text-text-tertiary font-mono">
                            Instant global creator distribution
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/30 text-accent-secondary font-bold">
                        READY TO PUBLISH
                      </span>
                    </div>

                    {/* Simulated Marketplace Product Card */}
                    <div className="bg-[#060612]/90 border border-border-subtle rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner">
                      <div className="flex flex-col items-start text-left gap-3 w-full md:w-auto">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-accent-primary/20 border border-accent-primary/40 text-white">
                            Sora v3
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-success/20 border border-success/40 text-success">
                            Runway Gen-3
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-accent-secondary/20 border border-accent-secondary/40 text-accent-secondary">
                            Kling 1.5
                          </span>
                        </div>

                        <h4 className="font-display text-2xl font-bold text-white tracking-tight">
                          Cyberpunk Cityscape — Pro Prompt Pack
                        </h4>

                        <p className="text-sm text-text-secondary max-w-md font-normal leading-relaxed">
                          Complete production-ready prompt package including camera movement parameters, volumetric lighting configs, and negative prompt constraints.
                        </p>
                      </div>

                      {/* Pricing Tag & Action */}
                      <div className="bg-bg-elevated border border-border-subtle rounded-2xl p-6 flex flex-col items-center justify-center gap-4 min-w-[200px] w-full md:w-auto shadow-lg">
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-text-tertiary font-mono uppercase tracking-wider">
                            License Price
                          </span>
                          <span className="font-display text-4xl font-bold text-earnings-gold mt-1">
                            $35.00
                          </span>
                        </div>
                        <button
                          onClick={() => setStage(3)}
                          className="w-full btn-3d text-xs py-3 text-center flex items-center justify-center gap-2"
                        >
                          <span>Publish Asset</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-text-tertiary font-mono">
                        <Eye className="w-4 h-4 text-accent-secondary" />
                        <span>1,420 creators browsing this category</span>
                      </div>
                      <span className="text-xs font-mono text-text-tertiary">
                        80% Creator Royalty Share
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 4: LIVE ROYALTIES & PASSIVE MONETIZATION ENGINE */}
                {stage === 3 && (
                  <motion.div
                    key="stage-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 w-full"
                  >
                    <div className="flex items-center justify-between border-b border-border-subtle/50 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-earnings-gold/20 border border-earnings-gold/40 text-earnings-gold">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-text-primary">
                            Live Royalties Dashboard
                          </h3>
                          <p className="text-xs text-text-tertiary font-mono">
                            Real-time passive income ledger
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-full bg-earnings-gold/10 border border-earnings-gold/30 text-earnings-gold font-bold animate-pulse">
                        LIVE PAYOUTS
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Left: Massive Earnings Display */}
                      <div className="md:col-span-6 bg-[#060612]/90 border border-border-subtle rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden shadow-inner min-h-[180px]">
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                          <DollarSign className="w-32 h-32 text-earnings-gold" />
                        </div>

                        <span className="text-xs text-text-tertiary font-mono uppercase tracking-wider mb-2">
                          TOTAL GENERATED REVENUE
                        </span>

                        <div className="font-display text-4xl md:text-5xl font-bold text-earnings-gold tracking-tight flex items-center">
                          <span>$</span>
                          <AnimatedCounter value={simulatedEarnings} duration={500} />
                          <span className="text-2xl ml-1 text-text-tertiary font-normal">.00</span>
                        </div>

                        {/* Simulated SVG Growth Graph */}
                        <div className="w-full h-16 mt-6 relative overflow-hidden">
                          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path
                              d="M 0,100 L 0,80 Q 20,70 40,50 T 80,20 L 100,10 L 100,100 Z"
                              fill="url(#goldGradient)"
                              opacity="0.3"
                            />
                            <path
                              d="M 0,80 Q 20,70 40,50 T 80,20 L 100,10"
                              fill="none"
                              stroke="#fbbf24"
                              strokeWidth="3"
                            />
                            <defs>
                              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#fbbf24" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Right: Live Transaction Feed */}
                      <div className="md:col-span-6 flex flex-col gap-2.5 font-mono text-xs overflow-hidden">
                        <span className="text-text-tertiary uppercase tracking-wider mb-1">
                          RECENT ROYALTY PAYOUTS
                        </span>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-bg-elevated/80 border border-border-subtle rounded-xl p-3 flex items-center justify-between shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="text-white font-medium">Sora Cyberpunk Pack</span>
                          </div>
                          <span className="text-success font-bold">+ $28.00</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="bg-bg-elevated/80 border border-border-subtle rounded-xl p-3 flex items-center justify-between shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="text-white font-medium">Runway Drone Shot</span>
                          </div>
                          <span className="text-success font-bold">+ $35.00</span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="bg-bg-elevated/80 border border-border-subtle rounded-xl p-3 flex items-center justify-between shadow-sm"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="text-white font-medium">Kling Cinematic Set</span>
                          </div>
                          <span className="text-success font-bold">+ $140.00</span>
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-text-tertiary font-mono">
                        <TrendingUp className="w-4 h-4 text-earnings-gold" />
                        <span>Stripe Connect Instant Payouts Active</span>
                      </div>
                      <button
                        onClick={() => setStage(0)}
                        className="btn-3d-secondary text-xs px-6 py-2.5 flex items-center gap-2"
                      >
                        <span>Restart Cycle</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Glassmorphic Stage Controller Bar */}
            <div className="bg-bg-elevated/50 backdrop-blur-2xl border-t border-border-subtle p-6 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
              <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                Interactive Engine (Click to switch)
              </span>

              <div className="grid grid-cols-4 gap-2 w-full sm:w-auto">
                {stagesData.map((s) => {
                  const isActive = stage === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setStage(s.id)}
                      className={`px-4 py-2.5 rounded-2xl text-xs font-display tracking-wider uppercase transition-all duration-300 flex flex-col items-center gap-1 border ${
                        isActive
                          ? "bg-accent-primary/20 border-accent-primary/40 text-white font-bold shadow-[0_0_20px_rgba(124,109,250,0.3)]"
                          : "bg-bg-base/60 border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-glow"
                      }`}
                    >
                      <span>{s.title}</span>
                      {isActive && <span className="w-1 h-1 rounded-full bg-accent-primary animate-pulse" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
