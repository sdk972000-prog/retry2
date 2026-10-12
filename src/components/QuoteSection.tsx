import React, { useState, useMemo } from 'react';
import { Calculator, MessageCircle, Send, CheckCircle2, Info, ArrowRight, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/businessConfig';

interface QuoteSectionProps {
  config: BusinessConfig;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ config }) => {
  // Calculator State
  const [appType, setAppType] = useState<'balcony' | 'window' | 'staircase'>('balcony');
  const [lengthFeet, setLengthFeet] = useState<number>(12);
  const [heightFeet, setHeightFeet] = useState<number>(6);
  const [spacing, setSpacing] = useState<'2inch' | '3inch'>('2inch');

  // Contact Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCity, setSelectedCity] = useState(config.cities[0] || 'Bengaluru');
  const [societyName, setSocietyName] = useState('');
  const [preferredTime, setPreferredTime] = useState('Anytime');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Submission Status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showIntegrationGuide, setShowIntegrationGuide] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculated Dimensions & Estimated Price
  const squareFeet = useMemo(() => {
    const l = Math.max(1, Number(lengthFeet) || 0);
    const h = Math.max(1, Number(heightFeet) || 0);
    return Math.round(l * h);
  }, [lengthFeet, heightFeet]);

  const estimatedMin = useMemo(() => {
    const rate = spacing === '2inch' ? config.startingPricePerSqFt + 20 : config.startingPricePerSqFt;
    return squareFeet * rate;
  }, [squareFeet, spacing, config]);

  const estimatedMax = useMemo(() => {
    const rate = spacing === '2inch' ? config.premiumPricePerSqFt : config.premiumPricePerSqFt - 15;
    return squareFeet * rate;
  }, [squareFeet, spacing, config]);

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const lines = [
      `*New Invisible Grill Enquiry - ${config.brandName}*`,
      `*Name:* ${fullName.trim() || 'Homeowner'}`,
      `*Phone:* ${phoneNumber.trim() || 'Not specified'}`,
      `*City:* ${selectedCity}`,
      societyName.trim() ? `*Society/Building:* ${societyName.trim()}` : '',
      `*Space Type:* ${appType.toUpperCase()}`,
      `*Dimensions:* ${lengthFeet} ft length x ${heightFeet} ft height (~${squareFeet} sq.ft)`,
      `*Preferred Spacing:* ${spacing === '2inch' ? '2-inch (Toddler/Pet Safe)' : '3-inch (Standard)'}`,
      `*Estimated Range:* ₹${estimatedMin.toLocaleString('en-IN')} - ₹${estimatedMax.toLocaleString('en-IN')}`,
      preferredTime ? `*Preferred Callback:* ${preferredTime}` : '',
      additionalNotes.trim() ? `*Notes:* ${additionalNotes.trim()}` : '',
      `\nPlease let me know when your technician can visit for laser measurement.`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit Indian phone number.');
      return;
    }
    setErrorMessage('');
    const message = generateWhatsAppMessage();
    const url = createWhatsAppUrl(config.whatsappNumber, message);
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number for callback.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
  };

  const copySetupCode = () => {
    const sampleSetup = `// Example: Hooking this form to Formspree or EmailJS
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "${fullName || 'Client'}",
    phone: "${phoneNumber || '9876543210'}",
    city: "${selectedCity}",
    squareFeet: ${squareFeet},
    estimatedPrice: "₹${estimatedMin} - ₹${estimatedMax}",
  }),
});`;
    navigator.clipboard.writeText(sampleSetup);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="quote-calculator" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            <span>Instant Cost Estimator</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Calculate your balcony estimate & book a free site inspection.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Enter your approximate balcony or window dimensions below to get an instant cost range, then submit your request or connect directly on WhatsApp.
          </p>
        </div>

        {/* Main Grid: Calculator on Left + Enquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Live Interactive Cost Estimator */}
          <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-slate-800" />
                <h3 className="font-bold text-base text-slate-900">
                  Step 1: Size & Specification
                </h3>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                Live Calculator
              </span>
            </div>

            <div className="space-y-5">
              {/* Space Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Space Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['balcony', 'window', 'staircase'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAppType(type)}
                      className={`py-2 text-xs font-medium rounded-lg border capitalize transition-all ${
                        appType === type
                          ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dimensions Sliders / Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">Length (ft)</label>
                    <span className="text-xs font-mono font-bold text-slate-900">{lengthFeet} ft</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={30}
                    step={1}
                    value={lengthFeet}
                    onChange={(e) => setLengthFeet(Number(e.target.value))}
                    className="w-full accent-slate-900 cursor-pointer"
                  />
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={lengthFeet}
                    onChange={(e) => setLengthFeet(Math.max(1, Number(e.target.value)))}
                    className="mt-1.5 w-full px-2.5 py-1 text-xs border border-slate-200 rounded bg-white text-slate-800 text-center"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-slate-700">Height (ft)</label>
                    <span className="text-xs font-mono font-bold text-slate-900">{heightFeet} ft</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={15}
                    step={0.5}
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(Number(e.target.value))}
                    className="w-full accent-slate-900 cursor-pointer"
                  />
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(Math.max(1, Number(e.target.value)))}
                    className="mt-1.5 w-full px-2.5 py-1 text-xs border border-slate-200 rounded bg-white text-slate-800 text-center"
                  />
                </div>
              </div>

              {/* Cable Spacing Radio */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Cable Gap Spacing
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSpacing('2inch')}
                    className={`p-3 text-left rounded-lg border text-xs transition-all ${
                      spacing === '2inch'
                        ? 'bg-white border-slate-900 text-slate-900 shadow-xs'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <div className="font-bold">2.0 Inch Spacing</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Kids & pet safe, anti-pigeon</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpacing('3inch')}
                    className={`p-3 text-left rounded-lg border text-xs transition-all ${
                      spacing === '3inch'
                        ? 'bg-white border-slate-900 text-slate-900 shadow-xs'
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <div className="font-bold">3.0 Inch Spacing</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Standard open residential view</div>
                  </button>
                </div>
              </div>

              {/* Live Cost Output Box */}
              <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-xs mt-4">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Total Calculated Area:</span>
                  <span className="font-mono font-bold text-slate-900 text-sm">
                    {squareFeet} sq. ft.
                  </span>
                </div>
                <div className="flex items-baseline justify-between pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700">Estimated Price Range:</span>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">
                      ₹{estimatedMin.toLocaleString('en-IN')} – ₹{estimatedMax.toLocaleString('en-IN')}*
                    </span>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  *Includes 316 Marine SS cables, extruded aluminum track channels, SS anchors, and professional installation labour. Final price confirmed upon laser site measurement.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Working Lead Form / WhatsApp Handoff */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Step 2: Book Free Inspection & Demo
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  No payment required. Free physical cable sample demo at your doorstep.
                </p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Inspection Request Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Our site engineer for{' '}
                  <strong className="text-slate-900">{selectedCity}</strong> has received your estimate request for{' '}
                  <strong className="text-slate-900">~{squareFeet} sq. ft.</strong> and will call you on{' '}
                  <strong className="text-slate-900">{phoneNumber}</strong> ({preferredTime}) to confirm your preferred inspection slot.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSubmit}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Connect on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold"
                  >
                    Submit Another Balcony
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-xs text-slate-400">
                  Reference ID: <span className="font-mono text-slate-600">IG-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-medium">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        className="w-full pl-11 pr-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      City / Metro Region <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900 bg-white"
                    >
                      {config.cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Apartment Society Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sobha Windfall, Flat 1204"
                      value={societyName}
                      onChange={(e) => setSocietyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Preferred Callback Time
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900 bg-white"
                    >
                      <option value="Anytime">Anytime during day</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Special Requirements (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Need pet safety, high wind floor"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                {/* Primary Dual Actions: Form Submit & WhatsApp Quick Chat */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Free Doorstep Site Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Estimate via WhatsApp</span>
                  </button>
                </div>

                {/* Privacy and Verification Note */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2">
                  <span>🔒 We respect your privacy. No spam or unsolicited marketing calls.</span>
                  <button
                    type="button"
                    onClick={() => setShowIntegrationGuide(!showIntegrationGuide)}
                    className="text-slate-400 hover:text-slate-700 underline"
                  >
                    {showIntegrationGuide ? 'Hide Setup Info' : 'Backend Setup Guide'}
                  </button>
                </div>

                {/* Backend Setup Explanation Banner for Deployment */}
                {showIntegrationGuide && (
                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">
                        Developer Integration Guide for Vercel Deployment:
                      </span>
                      <button
                        type="button"
                        onClick={copySetupCode}
                        className="inline-flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-900 bg-white px-2 py-1 rounded border border-slate-200"
                      >
                        {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedCode ? 'Copied' : 'Copy Sample API Snippet'}</span>
                      </button>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      This form is 100% functional and delivers immediate quotes via WhatsApp. To route submissions to your email or CRM upon Vercel deployment:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-1">
                      <li>Option A (Zero-Code): Connect to <strong>Formspree</strong> or <strong>Web3Forms</strong> by setting your form endpoint.</li>
                      <li>Option B: Use <strong>EmailJS</strong> for client-side automated email alerts to your sales team.</li>
                      <li>Option C: Connect to a serverless API route (<code className="bg-slate-200 px-1 py-0.5 rounded">/api/quote</code>) to pipe into Google Sheets or WhatsApp Cloud API.</li>
                    </ol>
                  </div>
                )}

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
