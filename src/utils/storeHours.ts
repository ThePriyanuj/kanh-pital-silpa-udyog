/**
 * Store hours and WhatsApp communication utilities for Kanh Pital Silpa Udyog Pratisthan
 */

export interface StoreStatus {
  isOpen: boolean;
  statusTextEn: string;
  statusTextAs: string;
  currentDay: string;
  todayScheduleEn: string;
  todayScheduleAs: string;
  nextOpenEn?: string;
  nextOpenAs?: string;
}

/**
 * Converts a given Date into Indian Standard Time (IST, UTC+5:30)
 */
export function getISTDate(date: Date = new Date()): Date {
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 60 * 60000; // IST is UTC+5:30
  return new Date(utcTime + istOffset);
}

/**
 * Calculates current open/closed status for Kanh Pital Silpa Udyog Pratisthan
 * Monday - Saturday: 10:00 AM - 8:00 PM (10:00 to 20:00)
 * Sunday: 11:00 AM - 3:00 PM (11:00 to 15:00)
 */
export function getStoreStatus(inputDate: Date = new Date()): StoreStatus {
  const ist = getISTDate(inputDate);
  const day = ist.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hour = ist.getHours();
  const minute = ist.getMinutes();
  const currentTimeInMinutes = hour * 60 + minute;

  const isSunday = day === 0;
  const openTimeInMinutes = isSunday ? 11 * 60 : 10 * 60; // 11:00 AM on Sun, 10:00 AM Mon-Sat
  const closeTimeInMinutes = isSunday ? 15 * 60 : 20 * 60; // 3:00 PM on Sun, 8:00 PM Mon-Sat

  const dayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayNamesAs = ['দেওবাৰ', 'সোমবাৰ', 'মঙ্গলবাৰ', 'বুধবাৰ', 'বৃহস্পতিবাৰ', 'শুক্ৰবাৰ', 'শনিবাৰ'];

  const currentDay = dayNamesEn[day];
  const todayScheduleEn = isSunday ? '11:00 AM – 3:00 PM' : '10:00 AM – 8:00 PM';
  const todayScheduleAs = isSunday ? 'পুৱা ১১:০০ – আবেলি ৩:০০' : 'পুৱা ১০:০০ – নিশা ৮:০০';

  const isOpen = currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes;

  let statusTextEn = '';
  let statusTextAs = '';

  if (isOpen) {
    const closeHourFormatted = isSunday ? '3:00 PM' : '8:00 PM';
    const closeHourFormattedAs = isSunday ? 'আবেলি ৩:০০ বজাত' : 'নিশা ৮:০০ বজাত';
    statusTextEn = `Open Now · Closes at ${closeHourFormatted}`;
    statusTextAs = `এতিয়া খোলা আছে · ${closeHourFormattedAs} বন্ধ হ'ব`;
  } else {
    if (currentTimeInMinutes < openTimeInMinutes) {
      const openHour = isSunday ? '11:00 AM' : '10:00 AM';
      const openHourAs = isSunday ? 'পুৱা ১১:০০ বজাত' : 'পুৱা ১০:০০ বজাত';
      statusTextEn = `Closed · Opens Today at ${openHour}`;
      statusTextAs = `এতিয়া বন্ধ আছে · আজি ${openHourAs} খোল খাব`;
    } else {
      const nextDayName = dayNamesEn[(day + 1) % 7];
      const nextDayNameAs = dayNamesAs[(day + 1) % 7];
      const nextOpenHour = (day + 1) % 7 === 0 ? '11:00 AM' : '10:00 AM';
      const nextOpenHourAs = (day + 1) % 7 === 0 ? 'পুৱা ১১:০০ বজাত' : 'পুৱা ১০:০০ বজাত';
      statusTextEn = `Closed · Opens ${nextDayName} at ${nextOpenHour}`;
      statusTextAs = `এতিয়া বন্ধ আছে · ${nextDayNameAs} ${nextOpenHourAs} খোল খাব`;
    }
  }

  return {
    isOpen,
    statusTextEn,
    statusTextAs,
    currentDay,
    todayScheduleEn,
    todayScheduleAs,
  };
}

export const PHONE_NUMBER = '+916002243870';
export const WHATSAPP_NUMBER = '916002243870';
export const STORE_EMAIL = 'kahpitalkhilpoudyogpratisthan@gmail.com';
export const STORE_ADDRESS = 'M.B. Road, Near Elphiniston Complex, Alphiniston Chariali, Nagaon, Assam 782003, India';
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Kanh+Pital+Silpa+Udyog+Pratisthan+MB+Road+Nagaon+Assam';

/**
 * Builds a direct WhatsApp message URL with pre-filled context
 */
export function buildWhatsAppLink(options: {
  productName?: string;
  category?: string;
  isAssamese?: boolean;
  serviceType?: string;
  customMessage?: string;
} = {}): string {
  let message = '';

  if (options.customMessage) {
    message = options.customMessage;
  } else if (options.productName) {
    if (options.isAssamese) {
      message = `নমস্কাৰ, মই কাঁহ পিতল শিল্প উদ্যোগ প্ৰতিষ্ঠানৰ "${options.productName}" সম্পৰ্কে বিতংকৈ জানিব বিচাৰোঁ। ইয়াৰ ওজন আৰু মূল্য কিমান হ'ব জনাবনে?`;
    } else {
      message = `Hello, I would like to inquire about "${options.productName}" from Kanh Pital Silpa Udyog Pratisthan, Nagaon. Could you please share the available weights, craftsmanship details, and current price?`;
    }
  } else if (options.serviceType) {
    if (options.isAssamese) {
      message = `নমস্কাৰ, মই কাঁহ পিতলৰ "${options.serviceType}" সেৱাৰ বিষয়ে যোগাযোগ কৰিছোঁ।`;
    } else {
      message = `Hello, I am inquiring regarding the "${options.serviceType}" service at Kanh Pital Silpa Udyog Pratisthan, Nagaon.`;
    }
  } else {
    if (options.isAssamese) {
      message = `নমস্কাৰ, মই সৰ্থেবাৰীৰ কাঁহ আৰু হাজোৰ পিতলৰ সামগ্ৰীৰ বিষয়ে জানিবলৈ যোগাযোগ কৰিছোঁ।`;
    } else {
      message = `Hello, I would like to inquire about authentic Sarthebari Kanh (Bell Metal) and Hajo Pital (Brassware) items from Kanh Pital Silpa Udyog Pratisthan, Nagaon.`;
    }
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
