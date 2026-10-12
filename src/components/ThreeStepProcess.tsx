import React from 'react';
import { MessageSquareText, Ruler, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/businessConfig';

interface ThreeStepProcessProps {
  config: BusinessConfig;
  onOpenQuote: () => void;
}

export const ThreeStepProcess: React.FC<ThreeStepProcessProps> = ({ config, onOpenQuote }) => {
  const whatsappHref = createWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.brandName}, I would like to book a free doorstep measurement for invisible grills.`
  );

  const steps = [
    {
      number: '01',
      title: 'Enquire & Instant Estimate',
      tagline: 'Minutes via WhatsApp or Form',
      description:
        'Share your approximate balcony or window dimensions or simply send a balcony photo via WhatsApp. We calculate the required square footage and provide an immediate upfront estimate.',
      icon: MessageSquareText,
      points: [
        'Instant cost calculation based on square feet',
        'Choose between 2" or 3" spacing',
        'Transparent per-sq.ft rates with no hidden fees',
      ],
    },
    {
      number: '02',
      title: 'Precision Measure & Free Demo',
      tagline: 'Convenient Doorstep Visit',
      description:
        'An experienced site technician visits your apartment at your preferred time. We take exact laser measurements, inspect wall/ceiling anchoring substrates, and demonstrate genuine SS 316 cable samples.',
      icon: Ruler,
      points: [
        'Laser-accurate structural measurements',
        'Physical sample touch & feel demonstration',
        'Custom track color matching for your balcony',
      ],
    },
    {
      number: '03',
      title: 'Professional Installation',
      tagline: 'Clean 4–6 Hour Completion',
      description:
        'Our trained installation crew arrives with specialized tensioning equipment. Tracks are anchored into solid RCC, cables are individually calibrated, dust is cleaned up, and your view is transformed.',
      icon: Wrench,
      points: [
        'Completed in 4 to 6 hours with zero mess',
        'Individual tension calibration on every strand',
        'Post-installation inspection and maintenance guide',
      ],
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Seamless Experience</span>
            <span aria-hidden="true">·</span>
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            From enquiry to an unobstructed balcony in three simple steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We handle everything from initial consultation and laser measurements to certified installation with zero hassle for your society.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Step Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {step.tagline}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    {step.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-900 flex items-center justify-between">
                  <span>Step {idx + 1} of 3</span>
                  <span className="text-slate-400">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Action Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h4 className="text-lg font-bold">Ready to book a free doorstep measurement?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Available in {config.cities.slice(0, 4).join(', ')} and surrounding regions.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap"
            >
              Get Instant Quote
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors whitespace-nowrap text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
