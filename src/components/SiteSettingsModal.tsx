import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Sparkles, Building2, Phone, MessageCircle, Mail } from 'lucide-react';
import { BusinessConfig, DEFAULT_BUSINESS_CONFIG, saveStoredBusinessConfig } from '../config/businessConfig';

interface SiteSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onSave: (newConfig: BusinessConfig) => void;
}

export const SiteSettingsModal: React.FC<SiteSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [form, setForm] = useState<BusinessConfig>({ ...config });
  const [citiesInput, setCitiesInput] = useState<string>(config.cities.join(', '));
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedCities = citiesInput
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean);

    const updatedConfig: BusinessConfig = {
      ...form,
      cities: parsedCities.length > 0 ? parsedCities : DEFAULT_BUSINESS_CONFIG.cities,
      phoneRaw: form.phoneRaw.replace(/\D/g, ''),
      whatsappNumber: form.whatsappNumber.replace(/\D/g, ''),
    };

    saveStoredBusinessConfig(updatedConfig);
    onSave(updatedConfig);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setForm({ ...DEFAULT_BUSINESS_CONFIG });
    setCitiesInput(DEFAULT_BUSINESS_CONFIG.cities.join(', '));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Configure Brand & WhatsApp Number</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Customize editable placeholders for your Invisible Grill business.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedSuccess ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Settings Saved Successfully!</h4>
            <p className="text-xs text-slate-500">Your brand name, WhatsApp number, and cities have been updated.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Brand Name */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Business / Brand Name
              </label>
              <input
                type="text"
                required
                value={form.brandName}
                onChange={(e) => setForm({ ...form, brandName: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                placeholder="e.g. AeroShield Invisible Grills"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Number (with Country Code, no '+' or spaces)</span>
              </label>
              <input
                type="text"
                required
                value={form.whatsappNumber}
                onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900 font-mono"
                placeholder="e.g. 919876543210 (India is 91 followed by 10 digits)"
              />
              <span className="text-[11px] text-slate-400 block mt-1">
                All WhatsApp buttons on the site will instantly open chat with this number.
              </span>
            </div>

            {/* Phone Display & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Display Phone Number
                </label>
                <input
                  type="text"
                  required
                  value={form.phoneDisplay}
                  onChange={(e) => setForm({ ...form, phoneDisplay: e.target.value, phoneRaw: e.target.value.replace(/\D/g, '') })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                  placeholder="e.g. +91 98765 43210"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                  placeholder="e.g. enquiry@aeroshieldgrills.in"
                />
              </div>
            </div>

            {/* Pricing Rates */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Base Price (₹ / sq. ft.)
                </label>
                <input
                  type="number"
                  min={50}
                  max={500}
                  value={form.startingPricePerSqFt}
                  onChange={(e) => setForm({ ...form, startingPricePerSqFt: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900 font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Premium 3mm Price (₹ / sq. ft.)
                </label>
                <input
                  type="number"
                  min={50}
                  max={500}
                  value={form.premiumPricePerSqFt}
                  onChange={(e) => setForm({ ...form, premiumPricePerSqFt: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900 font-mono"
                />
              </div>
            </div>

            {/* Service Cities */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Service Cities (comma-separated)
              </label>
              <textarea
                rows={2}
                value={citiesInput}
                onChange={(e) => setCitiesInput(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-900"
                placeholder="Bengaluru, Mumbai, Pune, Hyderabad, Delhi NCR, Chennai, Kolkata, Ahmedabad"
              />
              <span className="text-[11px] text-slate-400 block mt-1">
                These will populate the quote city dropdown and footer service areas.
              </span>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-500 hover:text-slate-900 text-xs font-semibold hover:bg-slate-100 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Configuration</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
