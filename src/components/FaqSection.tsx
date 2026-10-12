import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/businessConfig';

interface FaqSectionProps {
  config: BusinessConfig;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Pricing',
      question: 'How is the price of invisible grills calculated in India?',
      answer:
        `Pricing is calculated on a per-square-foot basis (Total Square Feet = Length in feet × Height in feet). The total depends on the cable core gauge (2.5mm vs 3.0mm) and spacing (2-inch vs 3-inch gap). Rates typically range between ₹${config.startingPricePerSqFt} to ₹${config.premiumPricePerSqFt} per sq. ft., inclusive of anodized aluminium track channels, stainless steel fasteners, and professional installation.`,
    },
    {
      category: 'Installation',
      question: 'How long does installation take and does it damage balcony tiles or walls?',
      answer:
        'A standard balcony (60 to 100 sq. ft.) takes roughly 4 to 6 hours for a complete, calibrated installation. Certified installers use rotary hammer drills with depth stops and dust extractors, anchoring securely into concrete beams without cracking floor tiles or damaging wall plaster.',
    },
    {
      category: 'Maintenance',
      question: 'What maintenance is needed and will I ever need to repaint the cables?',
      answer:
        'Zero painting is needed. Unlike traditional iron grills that need periodic rust scraping, primer, and enamel paint every monsoon, 316 stainless steel with transparent nylon coating never rusts or flakes. A quick wipe with a damp microfiber cloth every few months is all that is required to remove dust.',
    },
    {
      category: 'Durability',
      question: 'Will Grade 316 stainless steel rust in coastal cities like Mumbai or Chennai?',
      answer:
        'Genuine AISI 316 marine-grade stainless steel contains molybdenum, which specifically protects against chloride pitting and saltwater moisture. It is the international standard for marine environments and performs reliably against heavy monsoons, smog, and coastal humidity.',
    },
    {
      category: 'Society Approvals',
      question: 'Do apartment associations (RWAs) and builders approve invisible grills?',
      answer:
        'Yes. In fact, most modern high-rise societies in cities like Bengaluru, Mumbai, Pune, and Hyderabad actively forbid heavy iron cages because they spoil the exterior elevation. Invisible grills maintain the original architectural look of the building and are widely approved by societies.',
    },
    {
      category: 'Safety & Emergencies',
      question: 'Can emergency services cut through the cables during a fire escape?',
      answer:
        'Yes. Welded traditional iron grills can create deadly traps during building fires. Invisible grill cables can be severed quickly by fire rescue personnel using standard portable wire cutters, satisfying critical building safety and escape considerations.',
    },
    {
      category: 'Pigeon Prevention',
      question: 'Does the 2-inch spacing stop pigeons from entering the balcony?',
      answer:
        'Yes. Selecting a 2-inch (50mm) vertical gap effectively blocks pigeons and crows from flying through or perching on balcony railings, offering an elegant alternative to dark green plastic anti-bird nets.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappHref = createWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.brandName}, I have a question about invisible grill installation that wasn't in the FAQ.`
  );

  return (
    <section id="faqs" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true">·</span>
            <span>Honest Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Everything you need to know before installing invisible grills.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Detailed details on pricing calculations, installation procedures, maintenance, and society guidelines.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-150"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`p-1.5 rounded-lg text-slate-500 bg-slate-100 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-slate-900 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80 bg-slate-50/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question about your balcony?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Send us your floor plan or dimensions for direct guidance.</p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
