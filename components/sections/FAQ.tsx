"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FAQS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  HelpCircle,
  DollarSign,
  RefreshCw,
  Sliders,
  BarChart,
  Lock,
  Plus,
  X,
} from "lucide-react";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 1"],
  });

  // 3D Spatial Zoom & Sticky Context Parallax Transformations
  const leftColY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rightColScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const categories = ["All", "General", "Pricing", "Process", "Support"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className={className} />;
      case "HelpCircle":
        return <HelpCircle className={className} />;
      case "RefreshCw":
        return <RefreshCw className={className} />;
      case "Sliders":
        return <Sliders className={className} />;
      case "BarChart":
        return <BarChart className={className} />;
      case "Lock":
        return <Lock className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[1200px] mx-auto relative border-t border-border-subtle overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column: Context & Information with Parallax Glide */}
        <motion.div style={{ y: leftColY }} className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
          <ScrollReveal>
            <SectionLabel>FAQ</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">
              Got Questions? We&apos;ve Got Answers.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed font-normal">
              We believe in complete transparency and creator-first monetization. Browse through our FAQs to find answers about our 80% revenue share, instant Stripe payouts, prompt licensing, and marketplace mechanics. Need further assistance? Our creator support team is always here to help.
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Right Column: Category Tabs & Accordion List with 3D Spatial Zoom */}
        <motion.div
          style={{ scale: rightColScale, y: rightColY }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Category Tabs */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap items-center gap-3 border-b border-border-subtle pb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null); // reset open index on category change
                  }}
                  className={`px-6 py-2.5 rounded-full font-mono text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-text-primary text-bg-base shadow-[0_0_20px_var(--accent-glow)]"
                      : "bg-bg-surface hover:bg-bg-elevated text-text-secondary hover:text-text-primary border border-border-subtle"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                const id = `faq-${idx}`;

                return (
                  <ScrollReveal key={faq.question} delay={idx * 50} className="w-full">
                    <div
                      className={`border bg-bg-surface/60 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "border-accent-primary/40 shadow-[0_0_30px_var(--accent-glow)] bg-bg-elevated/40"
                          : "border-border-subtle hover:border-border-glow"
                      }`}
                    >
                      <button
                        onClick={() => toggleOpen(idx)}
                        aria-expanded={isOpen}
                        aria-controls={id}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-6 cursor-pointer focus:outline-none transition-colors group"
                      >
                        <div className="flex items-center gap-4 md:gap-6">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isOpen
                                ? "bg-accent-primary text-white shadow-[0_0_15px_var(--accent-primary)]"
                                : "bg-bg-elevated text-accent-secondary border border-border-subtle group-hover:border-accent-primary/30"
                            }`}
                          >
                            {getIcon(faq.icon, "w-5 h-5")}
                          </div>
                          <span className="font-display text-lg md:text-xl font-bold text-text-primary">
                            {faq.question}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="w-8 h-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-secondary shrink-0 group-hover:text-text-primary transition-colors border border-border-subtle"
                        >
                          {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={id}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 pl-[4.5rem] md:pl-[5.5rem] text-base text-text-secondary leading-relaxed font-normal border-t border-border-subtle/30 mt-2">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
