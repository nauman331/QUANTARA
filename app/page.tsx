import React from 'react'
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { StakingFeatures } from "@/components/sections/StakingFeatures";
import { StakingCalculator } from "@/components/sections/StakingCalculator";
import { TechnicalIntegrations } from "@/components/sections/TechnicalIntegrations";
import { QuantaraZone } from "@/components/sections/QuantaraZone";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";

const Home = () => {
  return (
    <main className="min-h-screen bg-black quantum-bg">
      <Navbar />
      <HeroSection />
      <Features />
      <UseCases />
      <StakingFeatures />
      <StakingCalculator />
      <TechnicalIntegrations />
      <QuantaraZone />
      <Pricing />
      <FAQ />
    </main>
  );
}

export default Home