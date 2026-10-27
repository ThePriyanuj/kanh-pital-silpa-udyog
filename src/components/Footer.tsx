import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Sparkles, Lock } from 'lucide-react';
import { buildWhatsAppLink, PHONE_NUMBER, STORE_EMAIL, STORE_ADDRESS } from '../utils/storeHours';
import { useAdmin } from '../context/AdminContext';

interface FooterProps {
  isAssamese: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isAssamese }) => {
  const { isAdmin, openAuthModal } = useAdmin();
  return (
    <footer className="border-t border-[#E6DEC8] bg-[#F3EFE6] pt-12 pb-24 md:pb-12 text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Lineage */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="btn-gold-metallic w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg shrink-0 shadow-xs select-none">
                ক
              </span>
              <div>
                <h3 className="font-serif-heritage text-lg font-bold text-[#1C1917] leading-tight">
                  Kanh Pital Silpa Udyog Pratisthan
                </h3>
                <span className="text-xs text-[#6B635B] font-assamese block">
                  কাঁহ পিতল শিল্প উদ্যোগ প্ৰতিষ্ঠান
                </span>
              </div>
            </div>
            <p className="text-xs text-[#6B635B] max-w-md leading-relaxed">
              {isAssamese
                ? 'সৰ্থেবাৰীৰ খাঁটি কাঁহ আৰু হাজোৰ পিতলৰ নিপুণ হাতে গঢ়া সাজ-বাচনৰ নিৰ্ভৰযোগ্য প্ৰতিষ্ঠান। ১৯৭৯ চনৰ পৰা নগাঁও চহৰৰ এম.বি. ৰোডত সততা আৰু গুণগত মানদণ্ডেৰে সেৱাত নিয়োজিত।'
                : 'Authentic handmade Sarthebari bell metal and Hajo brassware store established in 1979 in Nagaon, Assam. Preserving traditional craftsmanship across generations.'}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold pt-1">
              <Sparkles className="w-3.5 h-3.5 text-[#9e6c13]" />
              <span className="gold-gradient-text">{isAssamese ? 'স্থাপিত ১৯৭৯ • ৪+ দশকৰ ঐতিহ্য' : 'Established 1979 • 45+ Years of Trust'}</span>
            </div>
          </div>

          {/* Quick Contact & Details */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-semibold text-[#1C1917] uppercase tracking-wider block">
              {isAssamese ? 'যোগাযোগৰ তথ্য' : 'Direct Contacts'}
            </span>
            <ul className="space-y-2 text-[#6B635B]">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-[#9A6F28] flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9A6F28] shrink-0" />
                  <span>+91 60022 43870</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink({ isAssamese })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9A6F28] flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#9A6F28] shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STORE_EMAIL}`}
                  className="hover:text-[#9A6F28] flex items-start gap-2 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9A6F28] shrink-0 mt-0.5" />
                  <span>{STORE_EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Navigation */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-semibold text-[#1C1917] uppercase tracking-wider block">
              {isAssamese ? 'দোকানৰ অৱস্থান' : 'Store Location'}
            </span>
            <p className="text-[#6B635B] leading-relaxed">
              {STORE_ADDRESS}
            </p>
            <span className="text-[11px] text-[#9A6F28] block pt-1">
              {isAssamese
                ? 'সোম–শনি: পুৱা ১০:০০ – নিশা ৮:০০ | দেওবাৰ: পুৱা ১১:০০ – আবেলি ৩:০০'
                : 'Mon–Sat: 10 AM – 8 PM | Sun: 11 AM – 3 PM'}
            </span>
          </div>
        </div>

        {/* Bottom Hairline & Legal */}
        <div className="pt-6 border-t border-[#E6DEC8] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#6B635B]">
          <p>© 1979–{new Date().getFullYear()} Kanh Pital Silpa Udyog Pratisthan. All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            <span>Sarthebari Bell Metal</span>
            <span aria-hidden="true">·</span>
            <span>Hajo Brassware</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={openAuthModal}
              className="text-[#9A6F28] hover:underline font-semibold flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>{isAdmin ? 'Admin (Active)' : 'Admin Portal'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
