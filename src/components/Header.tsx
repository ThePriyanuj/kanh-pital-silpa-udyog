import React from 'react';
import { MessageCircle, Phone, Sparkles, Lock, ShieldCheck } from 'lucide-react';
import { buildWhatsAppLink, PHONE_NUMBER } from '../utils/storeHours';
import { useAdmin } from '../context/AdminContext';

interface HeaderProps {
  isAssamese: boolean;
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isAssamese, onToggleLanguage }) => {
  const { isAdmin, openAuthModal } = useAdmin();
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8E2D2] transition-colors shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone: 1-line clean wordmark */}
        <a href="#" className="flex items-center gap-2.5 min-w-0 shrink">
          <div className="btn-gold-metallic w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg shrink-0 shadow-xs select-none">
            ক
          </div>
          <div className="min-w-0">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#0F172A] truncate block leading-tight">
              Kanh Pital Silpa Udyog
            </span>
            <span className="text-[10px] sm:text-xs text-[#475569] font-assamese truncate block leading-tight">
              কাঁহ পিতল শিল্প উদ্যোগ প্ৰতিষ্ঠান
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#475569]">
          <a href="#catalog" className="hover:text-[#B8860B] transition-colors whitespace-nowrap">
            {isAssamese ? 'সামগ্ৰী সম্ভাৰ' : 'Collection'}
          </a>
          <a href="#store-visit" className="hover:text-[#B8860B] transition-colors whitespace-nowrap">
            {isAssamese ? 'দোকান আৰু প্ৰকৃত ছবি' : 'Store & Photos'}
          </a>
          <a href="#services" className="hover:text-[#B8860B] transition-colors whitespace-nowrap">
            {isAssamese ? 'সেৱাসমূহ' : 'Services'}
          </a>
          <a href="#heritage" className="hover:text-[#B8860B] transition-colors whitespace-nowrap">
            {isAssamese ? 'ঐতিহ্য' : 'Heritage'}
          </a>
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Subtle Since 1979 Badge (Desktop) */}
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold badge-gold-metallic px-2.5 py-1 rounded-md">
            <Sparkles className="w-3 h-3 text-[#9e6c13]" />
            <span>{isAssamese ? 'স্থাপিত ১৯৭৯' : 'Est. 1979'}</span>
          </span>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            type="button"
            className="h-9 px-2.5 sm:px-3 text-xs font-semibold rounded-lg border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] hover:border-amber-400 hover:bg-white active:scale-95 transition-all flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-amber-500"
            aria-label="Toggle language between English and Assamese"
            title="Toggle Language"
          >
            <span className={!isAssamese ? 'font-bold gold-gradient-text' : 'text-[#475569]'}>EN</span>
            <span className="text-[#E8E2D2]">/</span>
            <span className={isAssamese ? 'font-bold gold-gradient-text font-assamese' : 'text-[#475569] font-assamese'}>অসমীয়া</span>
          </button>

          {/* Discreet Admin Portal Button */}
          {isAdmin ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">Admin</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={openAuthModal}
              className="h-9 w-9 rounded-lg border border-[#E8E2D2] bg-[#FAF8F5] text-slate-500 hover:text-[#B8860B] hover:border-[#B8860B] hover:bg-white active:scale-95 transition-all flex items-center justify-center shrink-0"
              aria-label="Admin Login"
              title="Admin Access (Store Owner)"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Quick WhatsApp Inquiry CTA (Desktop & Tablet) */}
          <a
            href={buildWhatsAppLink({ isAssamese })}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-3.5 text-xs font-semibold rounded-lg bg-[#16A34A] text-white hover:bg-[#15803D] active:scale-95 transition-all shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isAssamese ? 'হোৱাটছএপত সোধক' : 'WhatsApp Us'}</span>
          </a>

          {/* Mobile Direct Call Trigger */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="sm:hidden w-9 h-9 rounded-lg border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] flex items-center justify-center hover:bg-white active:scale-95 transition-all"
            aria-label="Call Store"
            title="Call Store"
          >
            <Phone className="w-4 h-4 text-[#B8860B]" />
          </a>
        </div>
      </div>
    </header>
  );
};
