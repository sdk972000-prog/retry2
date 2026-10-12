import React from 'react';
import { Eye, Wind, Sparkles, Wrench, Shield, Bird, SunMedium, Flame } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Eye,
      title: 'Uncompromised Open Views',
      description:
        'Enjoy 180-degree panoramic sightlines from your balcony. Slender 2.5mm marine-grade cables become virtually imperceptible from just a few steps back, preserving the open, spacious feel of your home.',
      kicker: 'Visual Freedom',
    },
    {
      icon: Wind,
      title: 'Free Flowing Ventilation',
      description:
        'Unlike heavy glass enclosures or bulky mesh that trap heat, invisible grills allow continuous natural cross-breeze and sunlight to circulate through your rooms without any airflow drag.',
      kicker: 'Natural Airflow',
    },
    {
      icon: Sparkles,
      title: 'Modern Architectural Elevation',
      description:
        'Enhance the exterior aesthetics of modern apartments. Invisible grills harmonize with premium facade designs and comply with strict residential society (RWA) elevation guidelines.',
      kicker: 'Society Approved',
    },
    {
      icon: Wrench,
      title: 'Zero Rust & Maintenance-Free',
      description:
        'Never worry about rust, flaking paint, or annual repaint costs. 316 marine-grade stainless steel with transparent protective casing resists rain, humidity, and coastal weather for years.',
      kicker: 'Everyday Practicality',
    },
    {
      icon: Bird,
      title: 'Effective Bird Deterrent',
      description:
        'Tight 2-inch vertical spacing prevents pigeons and large birds from flying into your balcony, nesting, or dirtying your outdoor floor, eliminating the need for ugly green nylon nets.',
      kicker: 'Pigeon Prevention',
    },
    {
      icon: Flame,
      title: 'Crucial Emergency Evacuation',
      description:
        'Heavy welded iron grills can become hazardous traps during building fire emergencies. Invisible grill cables can be quickly severed using standard wire cutters by rescue teams.',
      kicker: 'Fire Safety Compliant',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Engineered For High-Rise Living</span>
            <span aria-hidden="true">·</span>
            <span>Why Switch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Designed for unobstructed living. Engineered for uncompromised peace of mind.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Traditional iron grills turn balconies into dark, rusty enclosures. AeroShield Invisible Grills give you the openness your high-rise was meant to have.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {benefit.kicker}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-700">
                  <span>Explore specifications</span>
                  <span className="ml-1 text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
