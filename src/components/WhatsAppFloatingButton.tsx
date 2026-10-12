import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BusinessConfig, createWhatsAppUrl } from '../config/businessConfig';

interface WhatsAppFloatingButtonProps {
  config: BusinessConfig;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ config }) => {
  const whatsappHref = createWhatsAppUrl(
    config.whatsappNumber,
    `Hello ${config.brandName}, I'm interested in an invisible grill net installation for my balcony. Please share pricing and measurement details.`
  );

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-600/30 active:scale-95 transition-all duration-200"
        title="Chat with us on WhatsApp"
        aria-label="Enquire on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap hidden sm:inline">
          WhatsApp Enquiry
        </span>
      </a>
    </aside>
  );
};
