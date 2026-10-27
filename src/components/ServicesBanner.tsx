import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/products';
import { buildWhatsAppLink } from '../utils/storeHours';

interface ServicesBannerProps {
  isAssamese: boolean;
}

export const ServicesBanner: React.FC<ServicesBannerProps> = ({ isAssamese }) => {
  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FAFAF9] border-y border-[#E8E2D2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold gold-gradient-text uppercase tracking-wider block">
            {isAssamese ? 'পৰম্পৰাগত কাৰিকৰী সেৱা' : 'Store Craft Services'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {isAssamese ? 'কাঁহ আৰু পিতলৰ বিশেষ সেৱাসমূহ' : 'Heirloom Care & Custom Metal Services'}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569]">
            {isAssamese
              ? 'পুৰণি ধাতুৰ উপযুক্ত মূল্যৰ পৰা আৰম্ভ কৰি শিক্ষানুষ্ঠানৰ স্মাৰক শৰাইলৈকে সকলো সুবিধা আমাৰ নগাঁও দোকানত উপলব্ধ।'
              : 'Preserving generations of metallurgical craftsmanship through authentic exchange, institutional supply, and restoration.'}
          </p>
        </div>

        {/* 3 Services Minimal Bordered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((srv) => {
            const serviceWhatsAppUrl = buildWhatsAppLink({
              serviceType: isAssamese ? srv.titleAs : srv.titleEn,
              isAssamese,
            });

            return (
              <div
                key={srv.id}
                className="flex flex-col justify-between bg-white p-6 rounded-3xl border border-[#E8E2D2] hover:border-amber-400/80 transition-all shadow-2xs hover:shadow-sm"
              >
                <div className="space-y-4">
                  {/* Clean Editorial Numbering */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black gold-gradient-text font-mono">
                      {srv.number}.
                    </span>
                    <span className="text-[11px] font-bold badge-gold-metallic px-2.5 py-1 rounded-md">
                      {isAssamese ? srv.tagAs : srv.tagEn}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-tight">
                      {isAssamese ? srv.titleAs : srv.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {isAssamese ? srv.descriptionAs : srv.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E8E2D2]">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#16A34A] hover:text-[#15803D] transition-colors group"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{isAssamese ? 'এই সেৱাৰ বাবে সোধক' : 'Inquire for this Service'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
