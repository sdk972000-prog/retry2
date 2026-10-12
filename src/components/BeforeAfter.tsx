import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Eye, Wind, ShieldAlert, Sparkles, Check, X, ArrowLeftRight } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const comparisonPoints = [
    {
      feature: 'Balcony View & Sightline',
      traditional: 'Blocked by bulky square iron bars (~45% visual obstruction)',
      invisible: '100% panoramic vista; cables virtually disappear from 5 feet',
    },
    {
      feature: 'Natural Sunlight & Air Circulation',
      traditional: 'Restricted airflow and creates heavy shadows inside room',
      invisible: 'Full natural cross-breeze and warm daylight throughout your flat',
    },
    {
      feature: 'Corrosion & Monsoon Weathering',
      traditional: 'Rusts quickly in rain; flaking paint stains walls & balcony tiles',
      invisible: 'Marine-grade AISI 316 stainless steel resists rust permanently',
    },
    {
      feature: 'Annual Maintenance & Upkeep',
      traditional: 'Requires sanding, primer, and enamel paint every 1–2 years',
      invisible: 'Zero repainting; simple wipe-down with a damp microfiber cloth',
    },
    {
      feature: 'Apartment Society (RWA) Approval',
      traditional: 'Frequently disallowed due to exterior elevation restrictions',
      invisible: 'Widely accepted by modern builders and high-rise resident associations',
    },
    {
      feature: 'Emergency Fire Evacuation',
      traditional: 'Welded rigid cages can become hazardous traps during emergencies',
      invisible: 'Can be severed in seconds using standard wire cutters by rescue teams',
    },
  ];

  return (
    <section id="before-after" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Balcony Transformation</span>
            <span aria-hidden="true">·</span>
            <span>Real Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            See the dramatic difference an open view makes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Drag the interactive slider below to compare a traditional heavy iron cage grill against our modern invisible grill net installation.
          </p>
        </div>

        {/* Interactive Before / After Comparison Slider */}
        <div className="mb-16">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className="relative h-[380px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200 shadow-sm"
          >
            {/* RIGHT SIDE: AFTER (Invisible Grill Net - Bright, Airy, Open) */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-50 to-amber-50/20 flex flex-col justify-between">
              
              {/* Balcony Skyline Background */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Natural sun flare */}
                <div className="absolute top-8 right-16 w-32 h-32 rounded-full bg-amber-200/50 blur-2xl" />
                {/* Skyline outlines */}
                <div className="absolute bottom-24 inset-x-0 h-40 opacity-30 flex items-end justify-around px-8">
                  <div className="w-16 h-32 bg-slate-500 rounded-t" />
                  <div className="w-20 h-40 bg-slate-600 rounded-t" />
                  <div className="w-12 h-28 bg-slate-500 rounded-t" />
                  <div className="w-24 h-48 bg-slate-700 rounded-t" />
                  <div className="w-16 h-36 bg-slate-600 rounded-t" />
                </div>
              </div>

              {/* Top Rail */}
              <div className="relative z-10 w-full h-6 bg-slate-200 border-b border-slate-300 flex items-center px-4">
                <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                  CEILING TRACK // CONCEALED FIXING
                </span>
              </div>

              {/* Invisible Grill Stainless Steel Cables (Thin, vertical, sleek) */}
              <div className="relative z-10 flex-1 flex justify-evenly items-stretch px-8">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="h-full flex flex-col items-center">
                    <div className="w-[1.5px] h-full bg-slate-300/80 shadow-[0_0_2px_rgba(255,255,255,0.8)]" />
                  </div>
                ))}
              </div>

              {/* Bottom Balcony Railing */}
              <div className="relative z-10 w-full bg-white/95 border-t border-slate-200 p-4 flex items-center justify-between backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-900">AFTER: AeroShield Invisible Grill</span>
                </div>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  Crystal-Clear View · 100% Natural Light & Breeze
                </span>
              </div>

              {/* "AFTER" Floating Stamp Label */}
              <div className="absolute top-8 right-8 z-20 px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                After: Invisible Grill
              </div>
            </div>

            {/* LEFT SIDE: BEFORE (Traditional Heavy Iron Cage Grill) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-b from-slate-400 via-slate-300 to-slate-400 border-r border-slate-900"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-full h-full relative flex flex-col justify-between">
                
                {/* Murky cloudy backdrop */}
                <div className="absolute inset-0 bg-slate-500/40 pointer-events-none" />

                {/* Top Heavy Iron Beam */}
                <div className="relative z-10 w-full h-8 bg-slate-800 border-b-2 border-slate-950 flex items-center px-4">
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                    HEAVY WELDED IRON BOX
                  </span>
                </div>

                {/* Bulky Square Cage Grid with Rust Accents */}
                <div className="relative z-10 flex-1 grid grid-cols-6 grid-rows-4 p-4 gap-2">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="border-2 border-slate-800 bg-slate-700/20 rounded-xs flex items-center justify-center relative"
                    >
                      {/* Fake rust spots on corners */}
                      {i % 3 === 0 && (
                        <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-amber-800/60 blur-xs" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Rusting Balcony Floor */}
                <div className="relative z-10 w-full bg-slate-900 text-slate-200 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-xs font-bold text-white">BEFORE: Heavy Iron Cage Grill</span>
                  </div>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    Boxed-In Feeling · Prone to Monsoon Rust
                  </span>
                </div>

                {/* "BEFORE" Floating Stamp Label */}
                <div className="absolute top-8 left-8 z-20 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                  Before: Iron Cage
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-slate-900 border-2 border-slate-900 shadow-xl flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Quick Slider Helpers */}
          <div className="flex items-center justify-between mt-3 px-1 text-xs text-slate-500">
            <button
              onClick={() => setSliderPos(20)}
              className="hover:text-slate-900 transition-colors font-medium"
            >
              ← View More "Before"
            </button>
            <span className="text-slate-400">
              Drag slider to compare the view
            </span>
            <button
              onClick={() => setSliderPos(80)}
              className="hover:text-slate-900 transition-colors font-medium"
            >
              View More "After" →
            </button>
          </div>
        </div>

        {/* Side-by-Side Feature Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="px-6 py-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Side-by-Side Feature Comparison
            </h3>
            <span className="text-xs text-slate-500">
              Standard Iron Grill vs AeroShield Invisible Grill
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisonPoints.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 items-center hover:bg-slate-50/50 transition-colors"
              >
                <div className="md:col-span-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                    Parameter
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {item.feature}
                  </div>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-rose-700 md:hidden">Traditional Iron:</div>
                    <div className="text-xs sm:text-sm text-slate-600">{item.traditional}</div>
                  </div>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-emerald-700 md:hidden">Invisible Grill:</div>
                    <div className="text-xs sm:text-sm text-slate-900 font-medium">{item.invisible}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
