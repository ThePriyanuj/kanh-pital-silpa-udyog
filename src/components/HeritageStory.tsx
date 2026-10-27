import React from 'react';
import { Sparkles, Shield, HeartHandshake } from 'lucide-react';

interface HeritageStoryProps {
  isAssamese: boolean;
}

export const HeritageStory: React.FC<HeritageStoryProps> = ({ isAssamese }) => {
  return (
    <section id="heritage" className="py-12 sm:py-16 bg-[#F3EFE6]/40 border-t border-[#E6DEC8] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <span className="text-xs font-bold gold-gradient-text uppercase tracking-wider block">
            {isAssamese ? 'অসমৰ প্ৰাচীন ধাতুশিল্প' : 'The Legacy of Sarthebari & Hajo'}
          </span>
          <h2 className="font-serif-heritage text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1C1917] tracking-tight text-balance">
            {isAssamese
              ? 'সৰ্থেবাৰীৰ কাঁহ আৰু হাজোৰ পিতলৰ গৌৰৱোজ্জ্বল ঐতিহ্য'
              : 'Centuries of Metallurgical Mastery in Assam'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed">
            {isAssamese
              ? 'অসমীয়া সমাজত কাঁহ-পিতল কেৱল সাজ-বাচনেই নহয়, ই আমাৰ সংস্কৃতি, আতিথ্য আৰু আভিজাত্যৰ জীৱন্ত পৰিচায়ক। আহোম স্বৰ্গদেউসকলৰ পৃষ্ঠপোষকতাত বিকশিত হোৱা এই শিল্পই আজিও প্ৰতিখন অসমীয়া ঘৰৰ মৰ্যাদা বৃদ্ধি কৰি আহিছে।'
              : 'In Assamese tradition, bell metal (Kanh) and brassware (Pital) are not merely cookware—they embody reverence, sacred rituals, and generational well-being. From royal Ahom banquets to the village Namghar, these hand-forged metals endure through generations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {/* Sarthebari Bell Metal */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#9e6c13] via-[#f2d06b] to-[#cca02b] shadow-xs" />
              <h3 className="font-serif-heritage text-lg font-bold text-[#1C1917]">
                {isAssamese ? 'সৰ্থেবাৰীৰ কাঁহ (GI Tagged Bell Metal)' : 'Sarthebari Bell Metal (GI Tagged)'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed">
              {isAssamese
                ? '৭৮% তাম আৰু ২২% ৰাং (Tin)ৰ নিৰ্দিষ্ট অনুপাতত কঁহাৰসকলৰ নিপুণ হাতুৰীৰ কোবত গঢ় লৈ উঠে বিশুদ্ধ কাঁহ। আয়ুৰ্বেদৰ মতে কাঁহৰ কাঁহী-বাতিত গৰম ভাত আৰু ব্যঞ্জন খালে শৰীৰৰ পিত্ত আৰু অম্লতা সন্তুলিত থাকে।'
                : 'Forged from a precise 78:22 alloy of copper and pure tin, Sarthebari bell metal produces an unmistakable musical resonance. Traditional Ayurvedic texts praise bell metal for natural water purification and balancing stomach acidity.'}
            </p>
          </div>

          {/* Hajo Brassware */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E6DEC8] space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#9e6c13] via-[#f2d06b] to-[#cca02b] shadow-xs" />
              <h3 className="font-serif-heritage text-lg font-bold text-[#1C1917]">
                {isAssamese ? 'হাজোৰ পিতল (Hajo Brassware)' : 'Hajo Brass & Ritual Sacredware'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed">
              {isAssamese
                ? 'কামৰূপৰ হাজো অঞ্চল শ শ বছৰ ধৰি পিতলৰ নক্সাদার কামৰ বাবে বিখ্যাত। শৰাই, কলহ, লোটা, গছা আৰু ধূপধানীৰ জটিল খোদাই কাৰ্যত হাজোৰ শিল্পীসকলৰ পাৰদৰ্শিতা অতুলনীয়।'
                : 'Centuries of metalsmithing tradition in Hajo produce the state’s finest hand-engraved Xorais, oil lamp Gosas, and ceremonial vessels. Each piece is hand-chiseled without mechanical molds, guaranteeing uniqueness.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
