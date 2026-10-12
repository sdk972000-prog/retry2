import React, { useState } from 'react';
import { Home, Maximize2, Shield, Building2, Trees, Sparkles } from 'lucide-react';

interface ApplicationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  recommendedSpacing: string;
  keyBenefits: string[];
}

export const Applications: React.FC = () => {
  const [activeApp, setActiveApp] = useState<string>('balcony');

  const applications: ApplicationItem[] = [
    {
      id: 'balcony',
      title: 'High-Rise Apartment Balconies',
      category: 'Primary Residential',
      description:
        'The gold standard application. Replaces heavy iron box cages or green pigeon nets with sleek vertical cables anchored from ceiling to parapet wall, maximizing city views and breeze.',
      recommendedSpacing: '2.0" to 3.0" Spacing',
      keyBenefits: [
        'Maintains uniform facade approved by high-rise apartment associations',
        'Protects curious children and pets from accidental edge falls',
        'Leaves floor space 100% usable for coffee tables and plants',
      ],
    },
    {
      id: 'windows',
      title: 'Large Living & Bedroom Windows',
      category: 'Windows & Facades',
      description:
        'Modern sliding and openable aluminium/UPVC windows often lack security grills due to modern aesthetics. Invisible grills mount flush without interfering with window tracks or mosquito nets.',
      recommendedSpacing: '2.0" or 3.0" Spacing',
      keyBenefits: [
        'Preserves floor-to-ceiling glass clarity and natural morning light',
        'Fits seamlessly alongside existing mosquito mesh and curtains',
        'Can be installed on internal or external window reveals',
      ],
    },
    {
      id: 'french',
      title: 'French Windows & Glass Balustrades',
      category: 'Architectural Glazing',
      description:
        'Low glass railings in high-end developments can feel intimidating for families with small kids. Invisible grills add vertical containment above the glass without spoiling the designer aesthetic.',
      recommendedSpacing: '2.0" Spacing',
      keyBenefits: [
        'Adds height extension above standard 3-foot glass balustrades',
        'Maintains the luxurious frameless look of modern architectural glass',
        'Withstands high wind gust pressure on upper floors',
      ],
    },
    {
      id: 'staircase',
      title: 'Stairwell Voids & Duplex Atriums',
      category: 'Interior Voids',
      description:
        'Multi-level duplex apartments and villas feature dramatic central stair voids that pose severe fall risks. Floor-to-ceiling invisible cables create an ethereal, transparent safety wall.',
      recommendedSpacing: '2.0" Spacing',
      keyBenefits: [
        'Invisible architectural barrier that does not darken internal stairwells',
        'Eliminates climbing hazards for toddlers on banister rails',
        'Custom heights up to 20+ feet continuous vertical spans',
      ],
    },
    {
      id: 'utility',
      title: 'Utility Balconies & Drying Areas',
      category: 'Service Areas',
      description:
        'Prevent clothes and laundry from blowing away in high-altitude winds while keeping pigeons out of air conditioner outdoor compressors and washing machine areas.',
      recommendedSpacing: '2.0" Spacing',
      keyBenefits: [
        'Deters pigeons from nesting behind AC outdoor units',
        'Ensures continuous cross-ventilation for clothes drying',
        'Robust rust resistance even when exposed to water splashes',
      ],
    },
  ];

  const current = applications.find((a) => a.id === activeApp) || applications[0];

  return (
    <section id="applications" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Versatile Applications</span>
            <span aria-hidden="true">·</span>
            <span>Where It Fits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Engineered for balconies, windows, and architectural spaces.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From high-rise apartment terraces to floor-to-ceiling bedroom windows, invisible grills adapt seamlessly to any architectural layout.
          </p>
        </div>

        {/* Applications Selector + Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Application List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {applications.map((app) => {
              const isActive = app.id === activeApp;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base">
                      {app.title}
                    </span>
                    <span
                      className={`text-xs ${
                        isActive ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {app.category}
                    </span>
                  </div>
                  <div className="text-xs mt-1.5 opacity-80">
                    Recommended: {app.recommendedSpacing}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Application Detail Card */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl border border-slate-200 p-7 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {current.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {current.title}
                </h3>
              </div>
              <div className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800">
                {current.recommendedSpacing}
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed mb-6">
              {current.description}
            </p>

            <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3.5">
                Key Architectural Benefits:
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {current.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-500 pt-2">
              <span>Custom color tracks available to match wall and window frames.</span>
              <a href="#quote-calculator" className="font-semibold text-slate-900 hover:underline">
                Get quote for this space →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
