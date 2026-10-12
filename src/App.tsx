import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductSpecs } from './components/ProductSpecs';
import { BeforeAfter } from './components/BeforeAfter';
import { ThreeStepProcess } from './components/ThreeStepProcess';
import { Applications } from './components/Applications';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { SiteSettingsModal } from './components/SiteSettingsModal';
import {
  BusinessConfig,
  DEFAULT_BUSINESS_CONFIG,
  getStoredBusinessConfig,
} from './config/businessConfig';

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(DEFAULT_BUSINESS_CONFIG);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Load persisted business configuration if available
    const stored = getStoredBusinessConfig();
    setConfig(stored);
  }, []);

  const handleOpenQuote = () => {
    const el = document.getElementById('quote-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Top Navigation Bar */}
      <Header
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Landing Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero config={config} onOpenQuote={handleOpenQuote} />

        {/* 2. Product Benefits */}
        <Benefits />

        {/* 3. Product Close-ups & Technical Specs */}
        <ProductSpecs />

        {/* 4. Before-and-After Balcony Section */}
        <BeforeAfter />

        {/* 5. Three-Step Process: Enquire, Measure, Install */}
        <ThreeStepProcess config={config} onOpenQuote={handleOpenQuote} />

        {/* 6. Applications for Balconies and Windows */}
        <Applications />

        {/* 7. Customer Testimonials Section (Placeholders until genuine reviews) */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FaqSection config={config} />

        {/* 9. Final Enquiry CTA & Interactive Quote Calculator */}
        <QuoteSection config={config} />
      </main>

      {/* 10. Quiet Footer */}
      <Footer
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Floating Sticky WhatsApp Button */}
      <WhatsAppFloatingButton config={config} />

      {/* Configurable Brand & WhatsApp Number Settings Modal */}
      <SiteSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={(newConfig) => setConfig(newConfig)}
      />
    </div>
  );
}
