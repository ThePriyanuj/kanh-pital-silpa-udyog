import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { buildWhatsAppLink, PHONE_NUMBER, GOOGLE_MAPS_URL } from '../utils/storeHours';

interface MobileBottomBarProps {
  isAssamese: boolean;
  isHidden?: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ isAssamese, isHidden }) => {
  if (isHidden) return null;

  return (
    <div
      role="region"
      aria-label="Quick mobile contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D2] p-2.5 px-3.5 shadow-lg pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="min-h-[48px] px-3.5 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] flex items-center justify-center gap-1.5 text-xs font-bold active:scale-95 transition-all shrink-0 hover:bg-white"
          aria-label="Call Kanh Pital store directly"
        >
          <Phone className="w-4 h-4 text-[#B8860B]" />
          <span>{isAssamese ? 'কল' : 'Call'}</span>
        </a>

        {/* Quick Maps Direction */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] px-3.5 rounded-xl border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] flex items-center justify-center gap-1.5 text-xs font-bold active:scale-95 transition-all shrink-0 hover:bg-white"
          aria-label="Directions in Google Maps"
          title="Google Maps"
        >
          <Navigation className="w-4 h-4 text-[#B8860B]" />
          <span>{isAssamese ? 'দিশ' : 'Maps'}</span>
        </a>

        {/* Primary WhatsApp Order / Inquiry Action (Vibrant Green CTA) */}
        <a
          href={buildWhatsAppLink({ isAssamese })}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] flex-1 rounded-xl bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-sm"
          aria-label="Open WhatsApp to order or inquire"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span className="truncate">
            {isAssamese ? 'হোৱাটছএপত অৰ্ডাৰ' : 'WhatsApp Order'}
          </span>
        </a>
      </div>
    </div>
  );
};
