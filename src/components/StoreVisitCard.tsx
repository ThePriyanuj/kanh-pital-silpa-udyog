import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  CreditCard,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  getStoreStatus,
  StoreStatus,
  PHONE_NUMBER,
  STORE_EMAIL,
  STORE_ADDRESS,
  GOOGLE_MAPS_URL,
} from '../utils/storeHours';
import { AUTHENTIC_STORE_PHOTOS } from '../data/storePhotos';

interface StoreVisitCardProps {
  isAssamese: boolean;
}

export const StoreVisitCard: React.FC<StoreVisitCardProps> = ({ isAssamese }) => {
  const [status, setStatus] = useState<StoreStatus>(() => getStoreStatus());
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Re-evaluate store open status every minute
    const interval = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // 4-second auto-cycle for authentic store photography carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % AUTHENTIC_STORE_PHOTOS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev - 1 + AUTHENTIC_STORE_PHOTOS.length) % AUTHENTIC_STORE_PHOTOS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev + 1) % AUTHENTIC_STORE_PHOTOS.length);
  };

  const scheduleList = [
    {
      daysEn: 'Monday – Saturday',
      daysAs: 'সোমবাৰ – শনিবাৰ',
      hoursEn: '10:00 AM – 8:00 PM',
      hoursAs: 'পুৱা ১০:০০ – নিশা ৮:০০',
    },
    {
      daysEn: 'Sunday',
      daysAs: 'দেওবাৰ',
      hoursEn: '11:00 AM – 3:00 PM',
      hoursAs: 'পুৱা ১১:০০ – আবেলি ৩:০০',
    },
  ];

  const paymentModes = ['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI', 'Cash'];

  return (
    <section id="store-visit" className="py-12 sm:py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E8E2D2] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left 7 Cols: Store Address & Live Hours & Photo Transition Section */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              {/* Live Status Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${status.isOpen
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-50 text-amber-900 border border-amber-200'
                    }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-600' : 'bg-amber-600'
                      }`}
                  />
                  <span>{isAssamese ? status.statusTextAs : status.statusTextEn}</span>
                </div>

                <span className="text-xs text-[#475569]">
                  {isAssamese
                    ? `আজিৰ সময়: ${status.todayScheduleAs}`
                    : `Today's Hours: ${status.todayScheduleEn}`}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  {isAssamese ? 'নগাঁৱৰ দোকানলৈ আহক' : 'Visit Our Heritage Store in Nagaon'}
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-1.5 leading-relaxed">
                  {isAssamese
                    ? '১৯৭৯ চনৰ পৰা নগাঁৱৰ এলফিনষ্টন কমপ্লেক্সৰ সমীপত অসমীয়া পৰম্পৰাৰ বিশ্বাসযোগ্য প্ৰতিষ্ঠান।'
                    : 'Serving Assam since 1979 near Elphiniston Complex, Alphiniston Chariali, Nagaon.'}
                </p>
              </div>

              {/* Seamless 4-Second Auto-Cycling Store Photos Carousel */}
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E8E2D2] bg-slate-950 shadow-sm select-none group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setTimeout(() => setIsPaused(false), 2500)}
              >
                {/* Crossfade Slides */}
                {AUTHENTIC_STORE_PHOTOS.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                  >
                    <img
                      src={slide.src}
                      alt={isAssamese ? slide.altAs : slide.altEn}
                      className="w-full h-full object-cover object-center"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}

                {/* Prev & Next Chevrons */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous store photo"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition-all active:scale-90 border border-white/10 opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next store photo"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-xs transition-all active:scale-90 border border-white/10 opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Minimal 4-Bar Dots at Bottom */}
                <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-auto">
                  {AUTHENTIC_STORE_PHOTOS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlideIndex(i);
                      }}
                      aria-label={`Slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlideIndex ? 'w-6 bg-white shadow-xs' : 'w-2 bg-white/50 hover:bg-white/75'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Address Box */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D2] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#0F172A] block">
                    {isAssamese ? 'দোকানৰ সম্পূৰ্ণ ঠিকনা:' : 'Physical Store Address:'}
                  </span>
                  <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                    {STORE_ADDRESS}
                  </p>
                  <span className="text-[11px] text-[#475569] block pt-0.5">
                    {isAssamese
                      ? 'এম.বি. ৰোড, এলফিনষ্টন চাৰিআলি, নগাঁও, অসম - ৭৮২০০৩'
                      : 'Landmark: Near Elphiniston Complex, Alphiniston Chariali'}
                  </span>
                </div>
              </div>

              {/* Direct Actions: Google Maps, Call, Email */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-metallic min-h-[44px] px-5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{isAssamese ? 'গুগল মেপছত দিশ চাওক' : 'Open in Google Maps'}</span>
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="min-h-[44px] px-4 rounded-xl bg-[#FAF8F5] hover:bg-white border border-[#E8E2D2] text-[#0F172A] text-xs font-bold flex items-center gap-2 active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#B8860B]" />
                  <span>+91 60022 43870</span>
                </a>

                <a
                  href={`mailto:${STORE_EMAIL}`}
                  className="min-h-[44px] px-4 rounded-xl bg-[#FAF8F5] hover:bg-white border border-[#E8E2D2] text-[#0F172A] text-xs font-bold flex items-center gap-2 active:scale-95 transition-all"
                  title={STORE_EMAIL}
                >
                  <Mail className="w-4 h-4 text-[#B8860B]" />
                  <span>{isAssamese ? 'ই-মেইল কৰক' : 'Email Store'}</span>
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Weekly Schedule, Payment Methods & Interactive Location Map */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-[#E8E2D2] flex flex-col space-y-6">
              {/* Weekly Store Hours */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A] uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-[#B8860B]" />
                  <span>{isAssamese ? 'সপ্তাহৰ সময়সূচী' : 'Weekly Store Hours'}</span>
                </div>

                <div className="space-y-2">
                  {scheduleList.map((row, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-[#E8E2D2] flex items-center justify-between text-xs sm:text-sm shadow-2xs"
                    >
                      <span className="font-medium text-[#0F172A]">
                        {isAssamese ? row.daysAs : row.daysEn}
                      </span>
                      <span className="font-semibold text-[#B8860B]">
                        {isAssamese ? row.hoursAs : row.hoursEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accepted Payments */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <CreditCard className="w-4 h-4 text-[#B8860B]" />
                  <span>{isAssamese ? 'গৃহীত ধন পৰিশোধৰ মাধ্যমসমূহ:' : 'Accepted Payment Modes:'}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {paymentModes.map((mode, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white border border-[#E8E2D2] text-[#0F172A] font-medium shadow-2xs"
                    >
                      {mode}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-[#475569]">
                  {isAssamese
                    ? 'দোকানত QR কোড বা পোনপটীয়া বেংক হস্তান্তৰৰ সুবিধা আছে।'
                    : 'Instant QR code scan & cash receipt provided on store premises.'}
                </p>
              </div>

              {/* Map & Actual Address Display (Fills the blank space on PC mode and completes the layout) */}
              <div className="pt-2 flex-1 flex flex-col space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B8860B]" />
                    <span>{isAssamese ? 'দোকানৰ মেপ অৱস্থান:' : 'Shop Location Map:'}</span>
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#B8860B] hover:text-[#9A6F28] flex items-center gap-1 transition-colors"
                  >
                    <span>{isAssamese ? 'ডাঙৰকৈ চাওক' : 'View Full Map'}</span>
                    <Navigation className="w-3 h-3" />
                  </a>
                </div>

                {/* Embedded Interactive Map Card */}
                <div className="relative flex-1 min-h-[220px] rounded-2xl overflow-hidden border border-[#E8E2D2] bg-white shadow-xs group">
                  <iframe
                    title={isAssamese ? 'দোকানৰ ঠিকনা মেপ' : 'Shop Address Map'}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=92.6800%2C26.3370%2C92.6960%2C26.3475&layer=mapnik&marker=26.3422%2C92.6881"
                    className="w-full h-full min-h-[200px] border-0"
                    loading="lazy"
                  />

                  {/* Address Badge Overlay at bottom of Map */}
                  <div className="absolute bottom-2.5 inset-x-2.5 z-10 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-[#E8E2D2] shadow-sm flex items-center justify-between gap-2 text-left">
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold text-[#0F172A] block truncate">
                        {isAssamese ? 'কাঁহ পিতল শিল্প উদ্যোগ প্ৰতিষ্ঠান' : 'Kanh Pital Silpa Udyog Pratisthan'}
                      </span>
                      <span className="text-[10px] text-[#475569] block truncate">
                        M.B. Road, Alphiniston Chariali, Nagaon
                      </span>
                    </div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold-metallic shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-xs"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>{isAssamese ? 'দিশ' : 'Directions'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
