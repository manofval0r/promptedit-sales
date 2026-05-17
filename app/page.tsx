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
      <main className="flex flex-col w-full grow">
        <Hero />
        <SocialProofBelt />
        <HowItWorks />
        <EarningsShowcase />
        <PromptExamples />
        <WhyPromptEdit />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
