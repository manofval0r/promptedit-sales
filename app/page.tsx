import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProofBelt from "@/components/sections/SocialProofBelt";
import HowItWorks from "@/components/sections/HowItWorks";
import EarningsShowcase from "@/components/sections/EarningsShowcase";
import PromptExamples from "@/components/sections/PromptExamples";
import WhyPromptEdit from "@/components/sections/WhyPromptEdit";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full grow relative z-10 bg-bg-base shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
        {/* Sticky Hero Container for 3D Curtain Reveal */}
        <div className="sticky top-0 left-0 right-0 z-0 overflow-hidden">
          <Hero />
        </div>

        {/* Content below Hero that slides up OVER the sticky Hero like a rising curtain */}
        <div className="relative z-10 bg-bg-base shadow-[0_-30px_100px_rgba(0,0,0,0.9)] flex flex-col w-full grow border-t border-border-subtle/50">
          <SocialProofBelt />
          <HowItWorks />
          <EarningsShowcase />
          <PromptExamples />
          <WhyPromptEdit />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
