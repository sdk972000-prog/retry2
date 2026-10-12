import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, Eye, Wind, CheckCircle2, Sparkles } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/businessConfig';

interface HeroProps {
  config: BusinessConfig;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenQuote }) => {
  const [cableSpacing, setCableSpacing] = useState<'2inch' | '3inch'>('2inch');
  const [isHovered, setIsHovered] = useState(false);

  const whatsappHref = createWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.brandName}, I'm interested in a free quote and site measurement for invisible grill installation.`
  );

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-white border-b border-slate-100">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-50/80 via-white to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Architectural Category Tag (No Pill Enclosure) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
              <span>Next-Gen Balcony Architecture</span>
              <span aria-hidden="true">·</span>
              <span>SS 316 Marine Grade</span>
              <span aria-hidden="true">·</span>
              <span>Pan-India Service</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance">
              Enjoy the View.{' '}
              <span className="text-slate-700 block mt-1 sm:inline sm:mt-0 font-normal">
                Keep Your Balcony Open.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              Replace bulky, rusting iron cages with ultra-slim, high-tensile 316 marine-grade invisible grill cables. Experience unobstructed panoramic city vistas, fresh natural ventilation, and uncompromising everyday balcony safety.
            </p>

            {/* Dual CTAs: Primary Quote + Secondary WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-slate-100 w-full text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>316 Marine Stainless Steel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Blocked Sightlines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free Doorstep Measurement</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architectural Balcony Simulation */}
          <div className="lg:col-span-5">
            <div 
              className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5 shadow-sm transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Balcony Visual Simulator Frame */}
              <div className="relative h-[380px] sm:h-[420px] rounded-xl overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-amber-50/30 border border-slate-200 shadow-inner flex flex-col justify-between">
                
                {/* Simulated Sky & High-Rise Horizon */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Subtle distant skyline silhouettes */}
                  <div className="absolute bottom-28 inset-x-0 h-32 opacity-25 flex items-end justify-around px-4">
                    <div className="w-12 h-24 bg-slate-600 rounded-t-sm" />
                    <div className="w-16 h-32 bg-slate-700 rounded-t-sm" />
                    <div className="w-10 h-20 bg-slate-600 rounded-t-sm" />
                    <div className="w-20 h-28 bg-slate-700 rounded-t-sm" />
                    <div className="w-14 h-36 bg-slate-800 rounded-t-sm" />
                    <div className="w-12 h-22 bg-slate-600 rounded-t-sm" />
                  </div>
                  {/* Warm natural sunbeam */}
                  <div className="absolute top-4 right-6 w-24 h-24 rounded-full bg-amber-200/40 blur-xl" />
                </div>

                {/* Top Track: Aluminum Anodized Channel */}
                <div className="relative z-10 w-full h-5 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 border-b border-slate-400 shadow-sm flex items-center justify-between px-3">
                  <span className="text-[9px] font-mono font-medium text-slate-500 uppercase tracking-widest">
                    Top Anchor Track (Extruded Aluminium)
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                </div>

                {/* Cable Grid Area: High-Tensile Stainless Steel Cables */}
                <div className="relative z-10 flex-1 flex items-stretch justify-evenly px-4 py-1">
                  {Array.from({ length: cableSpacing === '2inch' ? 14 : 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative h-full flex flex-col items-center group cursor-pointer"
                      title="SS 316 2.5mm Tension Cable with Clear Nylon Casing"
                    >
                      {/* Top Tension Anchor Bolt */}
                      <div className="w-1.5 h-2 bg-slate-400 rounded-b-xs shadow-xs" />
                      
                      {/* Vertical Cable Line */}
                      <div
                        className={`w-[2px] h-full transition-all duration-300 ${
                          isHovered
                            ? 'bg-gradient-to-b from-sky-400 via-slate-300 to-sky-400 shadow-[0_0_4px_rgba(56,189,248,0.6)]'
                            : 'bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300'
                        }`}
                      />

                      {/* Bottom Anchor Bolt */}
                      <div className="w-1.5 h-2 bg-slate-400 rounded-t-xs shadow-xs" />
                    </div>
                  ))}
                </div>

                {/* Bottom Rail & Glass / Parapet Barrier */}
                <div className="relative z-10 w-full bg-white/95 border-t border-slate-300 backdrop-blur-sm p-3.5 flex flex-col gap-1.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-xs font-semibold text-slate-800">
                        High-Rise Balcony Simulation
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-500">
                      {cableSpacing === '2inch' ? '2" Spacing (Recommended)' : '3" Spacing (Standard)'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-slate-400" /> 100% Clear Sightline
                    </span>
                    <span className="flex items-center gap-1">
                      <Wind className="w-3.5 h-3.5 text-slate-400" /> Zero Wind Resistance
                    </span>
                  </div>
                </div>

              </div>

              {/* Interactive Density Switcher */}
              <div className="mt-4 flex items-center justify-between pt-2">
                <span className="text-xs font-medium text-slate-600">
                  Select Cable Spacing:
                </span>
                <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
                  <button
                    onClick={() => setCableSpacing('2inch')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      cableSpacing === '2inch'
                        ? 'bg-white text-slate-900 shadow-sm font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    2" Gap (Child/Pet Safe)
                  </button>
                  <button
                    onClick={() => setCableSpacing('3inch')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      cableSpacing === '3inch'
                        ? 'bg-white text-slate-900 shadow-sm font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    3" Gap (Standard)
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
