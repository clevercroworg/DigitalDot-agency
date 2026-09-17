'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { PartnershipFramework } from '../components/PartnershipFramework';
import { CorePillars } from '../components/CorePillars';
import { CaseStudies } from '../components/CaseStudies';
import { MarginCalculator } from '../components/MarginCalculator';
import { CapabilitiesGrid } from '../components/CapabilitiesGrid';
import { FAQSection } from '../components/FAQSection';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';
import { Footer } from '../components/Footer';
import { PartnerDeckModal } from '../components/PartnerDeckModal';

export default function HomePage() {
  const [currentMode, setMode] = useState<'agency' | 'enterprise'>('agency');
  const [deckModalOpen, setDeckModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-900 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Real-time Status Ribbon */}
      <AnnouncementBar />

      {/* 2. Header & Navigation */}
      <Header onOpenDeckModal={() => setDeckModalOpen(true)} />

      <main className="flex-grow">
        {/* 3. Hero with Dual-Audience Controller */}
        <Hero
          currentMode={currentMode}
          setMode={setMode}
          onOpenDeckModal={() => setDeckModalOpen(true)}
        />

        {/* 4. Social Proof & Public Referenceable Clients */}
        <SocialProof />

        {/* 5. 3-Step White-Label Partnership Framework */}
        <PartnershipFramework />

        {/* 6. 4 Core Value Propositions & Technical Pillars */}
        <CorePillars />

        {/* 7. Case Studies & Verified Testimonials */}
        <CaseStudies />

        {/* Interactive Agency Margin Arbitrage Calculator */}
        <MarginCalculator onOpenDeckModal={() => setDeckModalOpen(true)} />

        {/* 8. Full Service Capabilities Grid */}
        <CapabilitiesGrid />

        {/* 9. Strategic FAQ Accordion */}
        <FAQSection />

        {/* 10. High-Converting Bottom CTA & Lead Magnet Form */}
        <LeadMagnetCTA onOpenDeckModal={() => setDeckModalOpen(true)} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Confidential Partner Deck Modal */}
      <PartnerDeckModal
        isOpen={deckModalOpen}
        onClose={() => setDeckModalOpen(false)}
      />
    </div>
  );
}
