"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Earnings", href: "#earnings" },
  { name: "Examples", href: "#examples" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for Navbar floating pill transformation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer / Scroll position tracking for Active Section highlight
  useEffect(() => {
    const sections = [
      { id: "how-it-works", name: "How It Works" },
      { id: "earnings", name: "Earnings" },
      { id: "examples", name: "Examples" },
      { id: "faq", name: "FAQ" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = "Home";

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = section.name;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 w-full ${
        isScrolled
          ? "top-4 left-0 right-0 px-4 flex justify-center"
          : "top-0 left-0 right-0 pt-6 pb-6 px-5 md:px-8 lg:px-16 bg-transparent"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 flex items-center justify-between ${
          isScrolled
            ? "max-w-[1100px] bg-[#0d0d1f]/90 backdrop-blur-2xl border border-border-subtle/80 rounded-full px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            : "max-w-[1200px] mx-auto bg-transparent border-transparent"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link
          href="/"
          onClick={() => setActiveSection("Home")}
          className="hover:opacity-90 transition-opacity flex items-center z-10"
        >
          <img src="/logo.png" alt="PromptEdit Logo" className="h-8 md:h-9 w-auto" />
        </Link>

        {/* Center: Desktop Navigation Links with Gliding Active Pill Highlight */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 relative z-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <div key={link.name} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-accent-primary/20 border border-accent-primary/40 z-0 shadow-[0_0_15px_rgba(124,109,250,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Link
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`relative block px-5 py-2.5 rounded-full text-sm font-display tracking-wider uppercase transition-colors duration-300 z-10 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-text-secondary hover:text-text-primary font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right: Desktop CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 z-10">
          <Link href="https://www.contentcreator.com/prompt-edit" className="hidden sm:inline-flex btn-3d text-sm px-6 py-2.5">
            Start Selling →
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Glassmorphic Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-3 mx-4 bg-[#0d0d1f]/95 backdrop-blur-3xl border border-border-subtle rounded-3xl p-6 flex flex-col gap-4 shadow-2xl z-50 md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.name;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-2xl text-base font-display tracking-wide flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-accent-primary/20 border border-accent-primary/40 text-white font-bold"
                          : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated font-medium"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />}
                    </Link>
                  );
                })}
              </nav>
              <div className="pt-2 border-t border-border-subtle/50 flex flex-col sm:hidden">
                <Link
                  href="https://www.contentcreator.com/prompt-edit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full btn-3d text-center py-4 text-sm"
                >
                  Start Selling →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
