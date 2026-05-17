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
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Changelog
                    </a>
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
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Support
                    </a>
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
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="https://promptedit.com" className="hover:text-text-primary transition-colors">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section: Divider, Copyright, Legal Links & Personal Branding */}
          <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-tertiary font-mono font-medium">
            <p>© 2025 PromptEdit · <a href="https://promptedit.com" className="hover:text-accent-primary transition-colors">promptedit.com</a></p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://promptedit.com" className="hover:text-text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="https://promptedit.com" className="hover:text-text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="https://promptedit.com" className="hover:text-text-secondary transition-colors">
                Cookies Settings
              </a>
            </div>
            <p className="font-mono text-xs tracking-wider text-text-secondary">
              Designed by <a href="https://www.davidowu.tech" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:text-accent-secondary font-bold underline decoration-accent-primary/40 underline-offset-4 transition-colors">Valor</a>
            </p>
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
