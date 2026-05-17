import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-tertiary ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse-glow" />
      <span>{children}</span>
    </div>
  );
}
