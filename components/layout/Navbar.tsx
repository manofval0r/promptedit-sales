"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  const paddingY = useTransform(scrollY, [0, 100], ["1.5rem", "1rem"]);

  return (
    <motion.header
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        isScrolled
          ? "bg-[#060612]/80 border-b border-border-subtle shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl font-bold tracking-tight text-text-primary hover:opacity-90 transition-opacity"
        >
          Prompt<span className="text-accent-primary">Edit</span>
        </Link>
        <Link
          href="#cta"
          className="bg-accent-primary hover:bg-accent-primary/90 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:shadow-[0_0_25px_var(--accent-primary)] hover:-translate-y-0.5"
        >
          Start Selling →
        </Link>
      </div>
    </motion.header>
  );
}
