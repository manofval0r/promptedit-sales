"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-5 md:px-8 lg:px-16 max-w-[800px] mx-auto relative"
    >
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <ScrollReveal>
          <SectionLabel>Clarification</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            Common questions.
          </h2>
        </ScrollReveal>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const id = `faq-${idx}`;

          return (
            <ScrollReveal key={idx} delay={idx * 100} className="w-full">
              <div className="border border-border-subtle bg-bg-surface/60 backdrop-blur-sm rounded-2xl overflow-hidden transition-colors duration-300 hover:border-border-glow">
                <button
                  onClick={() => toggleOpen(idx)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-4 cursor-pointer focus:outline-none focus:bg-bg-elevated/50 transition-colors"
                >
                  <span className="font-display text-lg md:text-xl font-bold text-text-primary">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-6 h-6 rounded-full bg-bg-elevated flex items-center justify-center text-text-secondary shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-base text-text-secondary leading-relaxed font-normal border-t border-border-subtle/50 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
