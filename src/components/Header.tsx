import React, { useState } from 'react';
import { MessageCircle, Menu, X, SlidersHorizontal, ShieldCheck, Phone } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/businessConfig';

interface HeaderProps {
  config: BusinessConfig;
  onOpenSettings: () => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenSettings, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'Specifications', href: '#specifications' },
    { label: 'Before & After', href: '#before-after' },
    { label: 'Process', href: '#process' },
    { label: 'Applications', href: '#applications' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const whatsappHref = createWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.brandName}, I would like to enquire about Invisible Grill installation for my home.`
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3-Zone Bar */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                {config.brandName}
              </span>
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & WhatsApp Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSettings}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              title="Edit Business Placeholders & WhatsApp Number"
              aria-label="Edit Site Settings"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            <a
              href={`tel:${config.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>{config.phoneDisplay}</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all shadow-sm shadow-emerald-600/20 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Get Free Instant Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSettings();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Configure WhatsApp & Brand Details</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
