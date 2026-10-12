/**
 * Business Configuration for Invisible Grill Net Business
 * All brand information, phone numbers, WhatsApp, service areas, and pricing are centrally editable here.
 * Users can also override these values at runtime using the "Customize Brand Info" modal.
 */

export interface BusinessConfig {
  brandName: string;
  tagline: string;
  phoneDisplay: string;
  phoneRaw: string; // Indian mobile without '+' or spaces, e.g. 919876543210
  whatsappNumber: string; // e.g. 919876543210
  email: string;
  cities: string[];
  serviceAreasText: string;
  addressPlaceholder: string;
  startingPricePerSqFt: number; // in INR
  premiumPricePerSqFt: number; // in INR for 316 grade 3mm
  warrantyYears: number;
}

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  brandName: "AeroShield Invisible Grills",
  tagline: "Enjoy the View. Keep Your Balcony Open.",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "919876543210",
  whatsappNumber: "919876543210",
  email: "enquiry@aeroshieldgrills.in",
  cities: [
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Delhi NCR",
    "Chennai",
    "Kolkata",
    "Ahmedabad"
  ],
  serviceAreasText: "Serving major apartment complexes & high-rises across Bengaluru, Mumbai, Pune, Hyderabad, Delhi NCR & Chennai",
  addressPlaceholder: "Regional hubs & authorized technicians across all major metro cities",
  startingPricePerSqFt: 140,
  premiumPricePerSqFt: 180,
  warrantyYears: 5
};

export const STORAGE_KEY = "aeroshield_business_config_v1";

export function getStoredBusinessConfig(): BusinessConfig {
  if (typeof window === "undefined") return DEFAULT_BUSINESS_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_BUSINESS_CONFIG;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_BUSINESS_CONFIG, ...parsed };
  } catch {
    return DEFAULT_BUSINESS_CONFIG;
  }
}

export function saveStoredBusinessConfig(config: BusinessConfig): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error("Failed to save business config", e);
  }
}

export function createWhatsAppUrl(phoneNumber: string, message: string): string {
  // Strip non-digits
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
