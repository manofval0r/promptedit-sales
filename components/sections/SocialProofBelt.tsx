import React from "react";

const TOOLS = [
  "Sora",
  "Runway Gen-3",
  "Kling AI",
  "Pika Labs",
  "Luma Dream Machine",
  "Higgsfield",
  "Midjourney v6",
  "Stable Video Diffusion",
];

export default function SocialProofBelt() {
  return (
    <section className="w-full py-10 bg-bg-surface/50 border-y border-border-subtle overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-base to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-base to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] animate-marquee items-center gap-12">
        {[...TOOLS, ...TOOLS].map((tool, idx) => (
          <div key={idx} className="flex items-center gap-12 shrink-0">
            <span className="font-mono text-sm md:text-base tracking-widest text-text-tertiary font-semibold uppercase hover:text-text-secondary transition-colors cursor-default">
              {tool}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-glow" />
          </div>
        ))}
      </div>
    </section>
  );
}
