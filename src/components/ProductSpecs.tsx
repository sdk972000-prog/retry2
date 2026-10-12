import React, { useState } from 'react';
import { Layers, Check, ShieldAlert, Cpu, Hammer, Crosshair } from 'lucide-react';

interface ComponentDetail {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  specs: string[];
}

export const ProductSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cable');

  const components: ComponentDetail[] = [
    {
      id: 'cable',
      name: 'Marine-Grade 316 SS Cable',
      subtitle: 'Corrosion-Resistant Core with Nylon Coating',
      description:
        'The backbone of the system consists of genuine AISI 316 austenitic stainless steel with molybdenum addition. It is specially crafted into a 7x7 multi-strand core that delivers exceptional tensile resilience without rigidity.',
      specs: [
        'Material Grade: Genuine AISI 316 Marine Grade Stainless Steel',
        'Available Core Diameters: 2.5 mm and 3.0 mm',
        'Outer Membrane: Transparent DuPont Nylon casing to eliminate finger abrasions',
        'Anti-Corrosion: Resilient against heavy rain, industrial smog, and coastal humidity',
        'Tensile Design: Rated for high pulling loads per individual tension strand',
      ],
    },
    {
      id: 'track',
      name: 'Extruded Aluminium Base Track',
      subtitle: 'Concealed Heavy-Duty Mounting Channel',
      description:
        'The cables are anchored into rigid 6063-T6 architectural aluminium channels. Designed with a clean snap-on aesthetic cover that conceals all anchor bolts, keeping the installation sleek and tamper-resistant.',
      specs: [
        'Alloy: Architectural 6063-T6 Extruded Aluminium',
        'Finish: UV-resistant powder-coated in White, Charcoal, or Anodized Silver',
        'Concealed Fixings: Snap-on cover locks out rainwater and hides fasteners',
        'Mounting Substrate: Anchors directly to concrete ceilings, floors, and side RCC pillars',
      ],
    },
    {
      id: 'tensioner',
      name: 'Independent Tension Locking System',
      subtitle: 'Precision Mechanical Anchoring',
      description:
        'Each cable is individually pulled and calibrated with mechanical tensioning hardware. Because cables are independently locked, the entire system never becomes loose if one section is disturbed.',
      specs: [
        'Mechanism: Individual threaded tension pins inside the aluminium channel',
        'Uniform Tension: Calibrated tension prevents vibration noise and slack',
        'Orientation Options: Vertical orientation (prevents ladder climbing by kids) or Horizontal',
        'Anti-Rattle Cushions: Internal nylon grommets prevent metal-on-metal friction',
      ],
    },
    {
      id: 'fasteners',
      name: 'Heavy-Duty Anchor Hardware',
      subtitle: 'Structural Solid-Wall Anchoring',
      description:
        'Secure mounting is only as good as its wall anchors. We use heavy-duty stainless steel fasteners driven deep into structural reinforced concrete (RCC) for permanent grip.',
      specs: [
        'Fastener Material: Stainless steel expansion sleeve anchors',
        'Anchor Depth: Minimum 45mm to 60mm penetration into solid masonry or concrete',
        'Spacing: Fasteners spaced at close intervals along every running track',
        'Dust-Controlled Drilling: Drilled with depth stops to protect balcony tiles and plaster',
      ],
    },
  ];

  const currentComponent = components.find((c) => c.id === activeTab) || components[0];

  return (
    <section id="specifications" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Engineering Precision</span>
            <span aria-hidden="true">·</span>
            <span>Material Anatomy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Every millimeter engineered for durability and quiet elegance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a closer look at the four precision components that make up a certified invisible grill installation.
          </p>
        </div>

        {/* Interactive Spec Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Component Selector Tabs (No static pills) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {components.map((comp) => {
              const isActive = comp.id === activeTab;
              return (
                <button
                  key={comp.id}
                  onClick={() => setActiveTab(comp.id)}
                  className={`text-left p-5 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-white border-slate-900 shadow-sm text-slate-900'
                      : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-slate-900">
                      {comp.name}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isActive ? 'text-slate-900' : 'text-slate-400'
                      }`}
                    >
                      {isActive ? 'Selected' : 'View Details'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {comp.subtitle}
                  </p>
                </button>
              );
            })}

            {/* Quick Dimension Comparison Card */}
            <div className="mt-4 p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Standard Spacing Recommendations
              </h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">2.0 Inch (50mm) Gap</span>
                  <span className="text-slate-500">Highest safety for toddlers & pets</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">3.0 Inch (75mm) Gap</span>
                  <span className="text-slate-500">Recommended standard for high-rise balconies</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-800">Vertical Alignment</span>
                  <span className="text-slate-500">Non-climbable design prevents laddering</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Component View Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-sm">
            
            {/* Visual SVG Diagram for the Selected Component */}
            <div className="h-56 sm:h-64 rounded-xl bg-slate-900 text-white p-6 relative overflow-hidden flex flex-col justify-between mb-8">
              
              {/* Background Engineering Blueprint Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

              {/* Blueprint Title */}
              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>COMPONENT SPEC // {currentComponent.id.toUpperCase()}</span>
                <span className="text-emerald-400 font-semibold">TOLERANCE ±0.1mm</span>
              </div>

              {/* Center Schematic Art */}
              <div className="relative z-10 flex items-center justify-center py-4">
                {activeTab === 'cable' && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-4">
                      {/* Cross section wire bundle visualization */}
                      <div className="w-20 h-20 rounded-full border-2 border-sky-400 bg-sky-950/70 p-2 flex items-center justify-center relative shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                        <div className="grid grid-cols-3 gap-1">
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-left space-y-1">
                        <div className="text-sky-300 font-bold">7x7 Multi-Strand Wire</div>
                        <div className="text-slate-400">Outer Clear DuPont Casing</div>
                        <div className="text-slate-400">Diameter: 2.5mm / 3.0mm</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'track' && (
                  <div className="flex items-center gap-6">
                    <div className="w-44 h-16 bg-slate-800 border-2 border-slate-600 rounded-md p-2 flex flex-col justify-between shadow-inner">
                      <div className="w-full h-2 bg-slate-700 rounded-xs" />
                      <div className="flex justify-between px-2">
                        <div className="w-3 h-3 rounded-full border border-sky-400 bg-sky-900" />
                        <div className="w-3 h-3 rounded-full border border-sky-400 bg-sky-900" />
                        <div className="w-3 h-3 rounded-full border border-sky-400 bg-sky-900" />
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-xs" />
                    </div>
                    <div className="text-xs font-mono space-y-1">
                      <div className="text-sky-300 font-bold">6063-T6 Extrusion</div>
                      <div className="text-slate-400">Concealed Snap Track</div>
                      <div className="text-slate-400">Powder Coated / Anodized</div>
                    </div>
                  </div>
                )}

                {activeTab === 'tensioner' && (
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-14 bg-gradient-to-b from-slate-400 via-slate-200 to-slate-400 rounded-sm border border-slate-300 shadow-sm flex flex-col justify-around py-1">
                        <div className="w-6 h-0.5 bg-slate-600 mx-auto" />
                        <div className="w-6 h-0.5 bg-slate-600 mx-auto" />
                        <div className="w-6 h-0.5 bg-slate-600 mx-auto" />
                      </div>
                    </div>
                    <div className="text-xs font-mono space-y-1">
                      <div className="text-sky-300 font-bold">Individual Threaded Pins</div>
                      <div className="text-slate-400">Independent Cable Lock</div>
                      <div className="text-slate-400">Anti-Vibration Nylon Ring</div>
                    </div>
                  </div>
                )}

                {activeTab === 'fasteners' && (
                  <div className="flex items-center gap-6">
                    <div className="flex items-center">
                      <div className="w-20 h-4 bg-gradient-to-r from-slate-400 to-slate-300 rounded-r-sm border border-slate-500 shadow-sm" />
                      <div className="w-4 h-6 bg-slate-200 border border-slate-400 rounded-xs -ml-1" />
                    </div>
                    <div className="text-xs font-mono space-y-1">
                      <div className="text-sky-300 font-bold">Solid RCC Expansion Anchor</div>
                      <div className="text-slate-400">Stainless Steel Fastener</div>
                      <div className="text-slate-400">Non-Shatter Tile Installation</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Note */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2">
                <span>Architectural Hardware Specification</span>
                <span className="text-slate-300">Grade 316 / 6063-T6</span>
              </div>
            </div>

            {/* Component Detail Prose */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {currentComponent.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {currentComponent.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentComponent.description}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Technical Characteristics:
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  {currentComponent.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
