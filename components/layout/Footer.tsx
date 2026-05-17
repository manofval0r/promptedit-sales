"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.getBoundingClientRect().height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      {/* Transparent spacer div in normal document flow that pushes the page height to allow scrolling over the fixed footer */}
      <div style={{ height: footerHeight }} className="w-full pointer-events-none" />

      {/* Fixed Footer resting underneath the main page content */}
      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 right-0 z-0 w-full px-4 md:px-8 lg:px-16 pb-8 pt-4 md:pb-12 md:pt-6 overflow-hidden bg-bg-base"
      >
        {/* Main Footer Rounded Card Container */}
        <div className="max-w-[1200px] mx-auto bg-bg-surface/80 backdrop-blur-xl border border-border-subtle rounded-[40px] p-6 md:p-12 lg:p-16 relative z-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column: Brand & Socials */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link href="/" className="hover:opacity-90 transition-opacity hidden md:inline-block">
                <img src="/logo.png" alt="PromptEdit Logo" className="h-8 md:h-9 w-auto" />
              </Link>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-normal max-w-sm">
                PromptEdit empowers creators to monetize AI video prompts — turning raw prompt engineering into passive income. Built for Sora, Runway, Kling, Pika, and Luma.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v:5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Columns: Navigation Links */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 w-full">
              {/* Column 1: Product */}
              <div className="flex flex-col gap-4">
                <span className="font-display text-sm font-bold text-text-primary tracking-wider uppercase">
                  Product
                </span>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary font-medium">
                  <li>
                    <Link href="#how-it-works" className="hover:text-text-primary transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#earnings" className="hover:text-text-primary transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#examples" className="hover:text-text-primary transition-colors">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#changelog" className="hover:text-text-primary transition-colors">
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Resources */}
              <div className="flex flex-col gap-4">
                <span className="font-display text-sm font-bold text-text-primary tracking-wider uppercase">
                  Resources
                </span>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary font-medium">
                  <li>
                    <Link href="#docs" className="hover:text-text-primary transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#tutorials" className="hover:text-text-primary transition-colors">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="#blog" className="hover:text-text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="hover:text-text-primary transition-colors">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Company */}
              <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                <span className="font-display text-sm font-bold text-text-primary tracking-wider uppercase">
                  Company
                </span>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary font-medium">
                  <li>
                    <Link href="#about" className="hover:text-text-primary transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#careers" className="hover:text-text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#partners" className="hover:text-text-primary transition-colors">
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section: Divider, Copyright & Legal Links */}
          <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-tertiary font-medium">
            <p>© {new Date().getFullYear()} PromptEdit. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#privacy" className="hover:text-text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="hover:text-text-secondary transition-colors">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>

        {/* Giant Background Watermark Text at the bottom of the page */}
        <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden flex items-end justify-center pointer-events-none select-none -mb-6 md:-mb-10 opacity-20">
          <span className="font-display text-[12vw] font-black text-text-tertiary leading-none tracking-tighter">
            PROMPTEDIT
          </span>
        </div>
      </footer>
    </>
  );
}
