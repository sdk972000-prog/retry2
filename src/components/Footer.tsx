import React from 'react';
import { ShieldCheck, MessageCircle, Phone, Mail, MapPin, SlidersHorizontal, ArrowUp } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/businessConfig';

interface FooterProps {
  config: BusinessConfig;
  onOpenSettings: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSettings, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappHref = createWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.brandName}, I would like to enquire about invisible grill installation.`
  );

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {config.brandName}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Marine-grade 316 stainless steel invisible grills engineered for high-rise balconies, modern windows, and family safety across India. Enjoy the view while keeping your home open.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={onOpenSettings}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                title="Edit business placeholders and phone numbers"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Edit Site Info</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  Product Benefits
                </a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-white transition-colors">
                  316 SS Specifications
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  Before vs After Comparison
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  3-Step Installation
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-white transition-colors">
                  Balconies & Windows
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas (Editable Placeholders) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Service Metro Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {config.cities.map((city) => (
                <li key={city} className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>{city} Metro Region</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500">Phone Consultation:</div>
                  <a href={`tel:${config.phoneRaw}`} className="text-white hover:underline">
                    {config.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500">WhatsApp Desk:</div>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                    +{config.whatsappNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-500">Email:</div>
                  <a href={`mailto:${config.email}`} className="text-white hover:underline">
                    {config.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {config.brandName}. All rights reserved. Built for high-rise residential properties in India.
          </div>
          
          <div className="flex items-center gap-6">
            <span>Non-destructive installation</span>
            <span aria-hidden="true">·</span>
            <span>AISI 316 Stainless Steel</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
