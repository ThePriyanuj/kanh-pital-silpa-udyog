import React from 'react';
import { Award, Clock, RefreshCw } from 'lucide-react';

interface TrustStripProps {
  isAssamese: boolean;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ isAssamese }) => {
  const items = [
    {
      icon: Award,
      titleEn: '100% Authentic Origins',
      titleAs: '১০০% খাঁটি কাৰিকৰী ঐতিহ্য',
      descEn: 'Authentic GI-Tagged Sarthebari bell metal and pure brass from Hajo metalsmiths.',
      descAs: 'সৰ্থেবাৰীৰ পৰম্পৰাগত কঁহাৰ শালৰ কাঁহ আৰু হাজোৰ খাঁটি পিতলৰ প্ৰতিশ্ৰুতি।',
    },
    {
      icon: Clock,
      titleEn: 'Since 1979 in Nagaon',
      titleAs: '১৯৭৯ চনৰ পৰা নগাঁৱত সেৱা',
      descEn: 'Over 45 years of continuous trusted service at M.B. Road, Alphiniston Chariali.',
      descAs: 'চাৰি দশকৰো অধিক কাল নগাঁৱৰ এম.বি. ৰোডত সমগ্ৰ অসমবাসীক সেৱা আগবঢ়াই আহিছোঁ।',
    },
    {
      icon: RefreshCw,
      titleEn: 'Exchange & Custom Engraving',
      titleAs: 'পুৰণি সলনি আৰু নাম খোদাই',
      descEn: 'Exchange old utensils by weight, traditional mirror polishing, and event mementos.',
      descAs: 'পুৰণি কাঁহ-পিতলৰ সলনি, সোণালী পলিচ আৰু প্ৰশস্তি-পত্ৰ খোদাইৰ বিশেষ ব্যৱস্থা।',
    },
  ];

  return (
    <section className="border-y border-[#E8E2D2] bg-[#FAF8F5] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-[#E8E2D2] shadow-2xs hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-xl badge-gold-metallic flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-5 h-5 text-[#9e6c13]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                    {isAssamese ? item.titleAs : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {isAssamese ? item.descAs : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
