import React, { useState } from 'react';
import { X, MessageCircle, Scale, Check, MapPin } from 'lucide-react';
import { Product } from '../data/products';
import { buildWhatsAppLink } from '../utils/storeHours';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isAssamese: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isAssamese,
}) => {
  const [includeEngraving, setIncludeEngraving] = useState(false);
  const [approxWeight, setApproxWeight] = useState('');

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    let customText = '';
    if (isAssamese) {
      customText = `নমস্কাৰ, মই কাঁহ পিতল শিল্প উদ্যোগ প্ৰতিষ্ঠানৰ "${product.nameAs}" সম্পৰ্কে যোগাযোগ কৰিছোঁ।`;
      if (approxWeight) customText += ` প্ৰয়োজনীয় ওজন: ${approxWeight}।`;
      if (includeEngraving) customText += ` মোক নাম/প্ৰশস্তি খোদাইৰ প্ৰয়োজন।`;
      customText += ` অনুগ্ৰহ কৰি উপলব্ধতা আৰু বৰ্তমান মূল্য জনাবনে?`;
    } else {
      customText = `Hello, I am inquiring with Kanh Pital Silpa Udyog Pratisthan regarding "${product.nameEn}".`;
      if (approxWeight) customText += ` Preferred Weight/Size: ${approxWeight}.`;
      if (includeEngraving) customText += ` I require custom name/text engraving.`;
      customText += ` Could you please let me know current availability and price estimate?`;
    }

    const url = buildWhatsAppLink({ customMessage: customText });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white border border-[#E8E2D2] rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/95 border border-[#E8E2D2] text-[#0F172A] flex items-center justify-center hover:bg-slate-100 active:scale-95 transition-all shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Product Image Frame */}
          <div className="relative bg-slate-100 aspect-[4/3] sm:aspect-auto sm:h-full border-b sm:border-b-0 sm:border-r border-[#E8E2D2]">
            <img
              src={product.image}
              alt={product.nameEn}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-[#E8E2D2] text-[11px] text-[#475569] flex items-center justify-between shadow-2xs">
              <span className="flex items-center gap-1 font-semibold text-[#0F172A]">
                <MapPin className="w-3 h-3 text-[#B8860B]" />
                {isAssamese ? product.originAs : product.originEn}
              </span>
              <span className="font-bold gold-gradient-text">{product.categoryLabelEn}</span>
            </div>
          </div>

          {/* Product Specs & Inquiry Options */}
          <div className="p-5 sm:p-6 pb-24 sm:pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div>
              <span className="text-[11px] font-bold gold-gradient-text tracking-wider block">
                {isAssamese ? product.materialAs : product.materialEn}
              </span>
              <h2
                id="modal-product-title"
                className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-0.5 leading-tight"
              >
                {isAssamese ? product.nameAs : product.nameEn}
              </h2>
              <p className="text-xs gold-gradient-text font-semibold mt-1">
                {isAssamese ? product.priceNoteAs : product.priceNoteEn}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isAssamese ? product.descriptionAs : product.descriptionEn}
            </p>

            {/* Features List */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-bold text-[#0F172A] block">
                {isAssamese ? 'প্ৰধান বৈশিষ্ট্যসমূহ:' : 'Key Specifications:'}
              </span>
              <ul className="space-y-1 text-xs text-[#475569]">
                {(isAssamese ? product.featuresAs : product.featuresEn).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weight Range Indicator */}
            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E2D2] flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-[#0F172A] font-semibold">
                <Scale className="w-3.5 h-3.5 text-[#B8860B]" />
                {isAssamese ? 'উপলব্ধ ওজনৰ জোখ:' : 'Available Weight Range:'}
              </span>
              <span className="font-bold gold-gradient-text">
                {isAssamese ? product.weightRangeAs : product.weightRangeEn}
              </span>
            </div>

            {/* Inquiry Customization Options */}
            <div className="space-y-2 pt-1 border-t border-[#E8E2D2]">
              <label className="text-xs font-semibold text-[#0F172A] block">
                {isAssamese ? 'আপোনাৰ প্ৰয়োজনীয় ওজন/আকাৰ (ঐচ্ছিক):' : 'Desired Weight or Size (Optional):'}
              </label>
              <input
                type="text"
                placeholder={isAssamese ? 'উদাহৰণ: ১.৫ কেজি বা ৮ ইঞ্চি...' : 'e.g. 1.5 kg plate or 10-inch Xorai...'}
                value={approxWeight}
                onChange={(e) => setApproxWeight(e.target.value)}
                className="w-full h-9 px-3 text-xs rounded-lg border border-[#E8E2D2] bg-[#FAF8F5] text-[#0F172A] placeholder-[#475569]/60 focus:outline-none focus:border-[#B8860B] focus:bg-white"
              />

              <label className="flex items-center gap-2 cursor-pointer pt-1 text-xs text-[#0F172A]">
                <input
                  type="checkbox"
                  checked={includeEngraving}
                  onChange={(e) => setIncludeEngraving(e.target.checked)}
                  className="rounded border-[#E8E2D2] text-[#B8860B] focus:ring-[#B8860B]"
                />
                <span className="font-semibold">
                  {isAssamese ? 'দৰা-কইনা/অনুষ্ঠানৰ নাম খোদাই প্ৰয়োজন' : 'Require custom name or plaque engraving'}
                </span>
              </label>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full h-11 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAssamese ? 'হোৱাটছএপত মূল্য আৰু অৰ্ডাৰ সুধক' : 'Inquire & Order on WhatsApp'}</span>
              </button>
              <p className="text-[11px] text-[#475569] text-center mt-1.5">
                {isAssamese
                  ? 'সরাসৰি আমাৰ নগাঁও দোকানৰ সৈতে হোৱাটছএপ সংযোগ হ’ব'
                  : 'Directly connects with our Nagaon store team'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
