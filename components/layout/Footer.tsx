import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border-subtle py-12 px-5 md:px-8 lg:px-16 mt-auto">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-tight text-text-primary hover:opacity-90 transition-opacity"
          >
            Prompt<span className="text-accent-primary">Edit</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-text-secondary">
            <Link
              href="#browse"
              className="hover:text-text-primary transition-colors"
            >
              Browse
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-text-primary transition-colors"
            >
              Sell
            </Link>
            <Link
              href="#faq"
              className="hover:text-text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#cta"
              className="hover:text-text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="h-[1px] w-full bg-border-subtle" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-tertiary">
          <p>© {new Date().getFullYear()} PromptEdit. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://contentcreator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
            >
              ContentCreator.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
