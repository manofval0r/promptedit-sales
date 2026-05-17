import React from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={`bg-bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-border-glow hover:shadow-[0_0_32px_var(--accent-glow)] hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
