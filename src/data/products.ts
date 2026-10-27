export interface Product {
  id: string;
  nameEn: string;
  nameAs: string;
  category: 'cultural' | 'dining' | 'puja' | 'wedding';
  categoryLabelEn: string;
  categoryLabelAs: string;
  originEn: string;
  originAs: string;
  materialEn: string;
  materialAs: string;
  image: string;
  priceNoteEn: string;
  priceNoteAs: string;
  descriptionEn: string;
  descriptionAs: string;
  featuresEn: string[];
  featuresAs: string[];
  weightRangeEn: string;
  weightRangeAs: string;
  popularForEn: string;
  popularForAs: string;
}

export const CATEGORIES = [
  { id: 'all', labelEn: 'All Items', labelAs: 'সকলো সামগ্ৰী' },
  { id: 'cultural', labelEn: 'Cultural & Xorai', labelAs: 'শৰাই আৰু সাংস্কৃতিক' },
  { id: 'dining', labelEn: 'Dining (Kahi-Bati)', labelAs: 'কাঁহী-বাতি (আহাৰ)' },
  { id: 'puja', labelEn: 'Puja & Rituals', labelAs: 'পূজা আৰু ধৰ্মীয়' },
  { id: 'wedding', labelEn: 'Wedding (Biya) Sets', labelAs: 'বিয়া আৰু উপহাৰ' },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'traditional-xorai',
    nameEn: 'Traditional Assamese Xorai (শৰাই)',
    nameAs: 'পৰম্পৰাগত অসমীয়া শৰাই',
    category: 'cultural',
    categoryLabelEn: 'Cultural & Xorai',
    categoryLabelAs: 'শৰাই আৰু সাংস্কৃতিক',
    originEn: 'Handcrafted in Hajo, Assam',
    originAs: 'হাজোৰ নিপুণ কাৰিকৰৰ দ্বাৰা নিৰ্মিত',
    materialEn: 'Pure Hajo Brass (পিতল)',
    materialAs: 'বিশুদ্ধ পিতল (হাজো)',
    image: '/assets/aistudio/image_803311ff.png',
    priceNoteEn: 'Price by weight & size (₹1,200 – ₹8,500+)',
    priceNoteAs: 'ওজন আৰু আকাৰ অনুসৰি মূল্য (আনুমানিক ₹১,২০০ – ₹৮,৫০০+)',
    descriptionEn: 'The supreme symbol of Assamese hospitality and devotion. Intricately carved with traditional floral motifs, stepped circular pedestal, and classical conical cover lid.',
    descriptionAs: 'অসমীয়া সমাজ জীৱনৰ অপৰিহাৰ্য প্ৰতীক। আতিথ্য, সন্মান আৰু নামঘৰৰ থাপনাৰ বাবে উপযোগী হাতে কটা নক্সাযুক্ত বিশুদ্ধ পিতলৰ শৰাই।',
    featuresEn: [
      'Available in 6", 8", 10", 12", 15", and 18" heights',
      'Hand-chiseled traditional lotus rim & finial',
      'Ideal for felicitation, Bihu gifts, and altar offerings',
      'Custom plaque engraving available for institutions'
    ],
    featuresAs: [
      '৬", ৮", ১০", ১২", ১৫", আৰু ১৮" বিভিন্ন উচ্চতাত উপলব্ধ',
      'হাতে খোদাই কৰা পদুম নক্সা আৰু ঐতিহ্যবাহী চূড়া',
      'সন্মান প্ৰদৰ্শন, বিহুৰ উপহাৰ আৰু থাপনাৰ বাবে উৎকৃষ্ট',
      'অনুষ্ঠান-প্ৰতিষ্ঠানৰ বাবে নাম খোদাইৰ বিশেষ সুবিধা'
    ],
    weightRangeEn: '500g – 4.5kg+',
    weightRangeAs: '৫০০ গ্ৰাম – ৪.৫ কেজি+',
    popularForEn: 'Felicitation, Namghar Thapona & Altar Offerings',
    popularForAs: 'সন্মাননা, নামঘৰৰ থাপনা আৰু বৰঙণি'
  },
  {
    id: 'sarthebari-kahi-bati',
    nameEn: 'Pure Sarthebari Kahi & Bati Set (কাঁহী-বাতি ছেট)',
    nameAs: 'সৰ্থেবাৰীৰ খাঁটি কাঁহী আৰু বাতি ছেট',
    category: 'dining',
    categoryLabelEn: 'Dining (Kahi-Bati)',
    categoryLabelAs: 'কাঁহী-বাতি (আহাৰ)',
    originEn: 'GI Tagged Sarthebari, Barpeta',
    originAs: 'ভৌগোলিক স্বীকৃতিপ্ৰাপ্ত (GI) সৰ্থেবাৰী',
    materialEn: 'Pure Sarthebari Bell Metal (কাঁহ - 78% Cu, 22% Sn)',
    materialAs: 'বিশুদ্ধ কাঁহ (৭৮% তাম আৰু ২২% ৰাং মিশ্ৰণ)',
    image: '/src/assets/images/sarthebari_kahi_bati_set_1792933569486.jpg',
    priceNoteEn: 'Price by weight (₹3,400 – ₹9,800 per set)',
    priceNoteAs: 'ওজন অনুসৰি মূল্য (প্ৰতি ছেট ₹৩,৪০০ – ₹৯,৮০০)',
    descriptionEn: 'Heavy-gauge authentic Sarthebari bell metal dining set. Hand-beaten by master Kansaris with acoustic golden resonance and proven Ayurvedic digestive health benefits.',
    descriptionAs: 'সৰ্থেবাৰীৰ পৰম্পৰাগত কঁহাৰৰ হাতে গঢ়া গধুৰ কাঁহী-বাতিৰ ছেট। কাঁহৰ পাত্ৰত ভোজন কৰাটো স্বাস্থ্যৰ পক্ষে অত্যন্ত উপকাৰী।',
    featuresEn: [
      'Heavy thick-gauge rim with signature hand-hammered finish',
      'Complete set: 1 Kahi (plate), 2-3 Bati (curry bowls), 1 Tumbler',
      'Naturally antibacterial and balances Tridosha in Ayurveda',
      'Heirloom metal longevity lasting generations'
    ],
    featuresAs: [
      'গধুৰ কাঁহী, ২-৩ খন বাতি আৰু এটা পানী খোৱা গিলাচ বা মাইহাং',
      'হাতে মৰা কঁহাৰৰ হাতুৰীৰ বৈশিষ্ট্যপূৰ্ণ উজ্জ্বল ছাপ',
      'আয়ুৰ্বেদিক গুণসম্পন্ন আৰু স্বাস্থ্যসন্মত ভোজনৰ বাবে উৎকৃষ্ট',
      'পুৰুষানুক্ৰমে ব্যৱহাৰ কৰিব পৰা চিৰস্থায়ী ধাতু'
    ],
    weightRangeEn: '1.2kg – 3.8kg per set',
    weightRangeAs: '১.২ কেজি – ৩.৮ কেজি প্ৰতি ছেট',
    popularForEn: 'Daily Healthy Dining & Assamese Feasts',
    popularForAs: 'দৈনন্দিন আহাৰ আৰু পৰম্পৰাগত ভোজ'
  },
  {
    id: 'sarthebari-banbati-bota',
    nameEn: 'Sarthebari Banbati & Bota (বানবাতি আৰু বটা)',
    nameAs: 'সৰ্থেবাৰীৰ ঐতিহ্যবাহী বানবাতি আৰু বটা',
    category: 'cultural',
    categoryLabelEn: 'Cultural & Xorai',
    categoryLabelAs: 'শৰাই আৰু সাংস্কৃতিক',
    originEn: 'Hand-forged in Sarthebari',
    originAs: 'সৰ্থেবাৰীৰ কঁহাৰৰ হাতে গঢ়া',
    materialEn: 'Pure Bell Metal (কাঁহ)',
    materialAs: 'বিশুদ্ধ কাঁহ (Bell Metal)',
    image: '/src/assets/images/hero_assamese_bell_metal_1792933568291.jpg',
    priceNoteEn: 'Price by weight (₹1,800 – ₹5,200)',
    priceNoteAs: 'ওজন অনুসৰি মূল্য (আনুমানিক ₹১,৮০০ – ₹৫,২০০)',
    descriptionEn: 'Aristocratic stemmed bell metal Banbati with fitted lid and ceremonial Bota (tray) for offering betel nuts (Tamul-Paan) to revered elders and wedding guests.',
    descriptionAs: 'অভিজাত্যপূৰ্ণ ঢাকনিযুক্ত খুৰা থকা বানবাতি আৰু তামোল-পান সজাই দিব পৰা ঐতিহ্যমণ্ডিত বটা। গুৰুজন আৰু অভ্যাগতক সন্মান জনাবলৈ অপৰিহাৰ্য।',
    featuresEn: [
      'Stemmed elevated pedestal base with hand-buffed gold shine',
      'Deep bell-tone chime when struck gently',
      'Classic betel nut presentation for formal gatherings',
      'Traditional Assamese lineage heirloom item'
    ],
    featuresAs: [
      'খুৰাযুক্ত সুন্দৰ ভিত্তি আৰু চিকমিকীয়া সোণালী ৰং',
      'তামোল-পান আৰু গুৱা-পাণ যাঁচিবলৈ ব্যৱহৃত পৰম্পৰাগত পাত্ৰ',
      'স্পৰ্শ কৰিলে ওলোৱা মিঠা ধাতৱ ঝংকাৰ',
      'অসমীয়া ঘৰুৱা সংস্কৰণৰ গৌৰৱ'
    ],
    weightRangeEn: '650g – 2.2kg',
    weightRangeAs: '৬৫০ গ্ৰাম – ২.২ কেজি',
    popularForEn: 'Tamul-Paan Offering & Aristocratic Hospitality',
    popularForAs: 'তামোল-পান পৰিবেশন আৰু আতিথ্য'
  },
  {
    id: 'biya-gift-trousseau',
    nameEn: 'Biya & Annaprashan Gift Trousseau (বিয়া আৰু অন্নপ্ৰাশনৰ উপহাৰ)',
    nameAs: 'বিবাহ আৰু অন্নপ্ৰাশনৰ সম্পূৰ্ণ উপহাৰ সংগ্ৰহ',
    category: 'wedding',
    categoryLabelEn: 'Wedding (Biya) Sets',
    categoryLabelAs: 'বিয়া আৰু উপহাৰ',
    originEn: 'Curated Sarthebari Kanh & Hajo Pital',
    originAs: 'সৰ্থেবাৰীৰ কাঁহ আৰু হাজোৰ পিতলৰ বিশেষ সংগ্ৰহ',
    materialEn: 'Hallmarked Kanh & Pital',
    materialAs: 'বিশুদ্ধ কাঁহ আৰু পিতলৰ সন্মিলিত ছেট',
    image: '/assets/aistudio/image_ad4266df.png',
    priceNoteEn: 'Customized to order (Starting ₹6,500+)',
    priceNoteAs: 'অৰ্ডাৰ অনুসৰি প্ৰস্তুত (আৰম্ভণি ₹৬,৫০০+)',
    descriptionEn: 'Custom curated bridal trousseau and baby feeding (Bhat-Mukh / Annaprashan) ceremonial sets. Includes engraved Kahi, Bati, Bota, Xorai, mirror stand, and lota.',
    descriptionAs: 'অসমীয়া বিবাহৰ যৌতুক আৰু কেঁচুৱাৰ ভাতমুখ (অন্নপ্ৰাশন)ৰ বাবে বিশেষভাৱে সজোৱা কাঁহ-পিতলৰ সম্পূৰ্ণ উপহাৰ ছেট। দৰা-কইনাৰ নাম খোদাইৰ বিশেষ সুবিধা।',
    featuresEn: [
      'Custom set assembly based on family tradition & budget',
      'Permanent diamond-point engraving of bride & groom names',
      'Includes bridal ceremonial Kahi, Bati, tumbler, and Bota',
      'Annaprashan miniature baby sets available with soft rounded edges'
    ],
    featuresAs: [
      'পৰিয়ালৰ বাজেট আৰু পৰম্পৰা অনুসৰি বাছনিৰ সুবিধা',
      'দৰা-কইনা বা নৱজাতকৰ নাম আৰু তাৰিখ খোদাই কৰাৰ ব্যৱস্থা',
      'বিবাহৰ জোৰোণ আৰু বিদায় পৰ্বৰ বাবে অপৰিহাৰ্য',
      'অন্নপ্ৰাশনৰ বাবে সুৰক্ষিত মসৃণ কাঁহৰ সৰু কাঁহী-বাতি ছেট'
    ],
    weightRangeEn: '2.5kg – 10kg+ (Custom)',
    weightRangeAs: '২.৫ কেজি – ১০ কেজি+ (প্ৰয়োজন অনুসৰি)',
    popularForEn: 'Assamese Wedding Dowry & Baby Rice Feeding',
    popularForAs: 'অসমীয়া বিবাহ আৰু অন্নপ্ৰাশনৰ জোৰোণ'
  },
  {
    id: 'koloh-and-lota',
    nameEn: 'Traditional Koloh & Lota (কলহ আৰু লোটা)',
    nameAs: 'পৰম্পৰাগত পিতলৰ কলহ আৰু লোটা',
    category: 'puja',
    categoryLabelEn: 'Puja & Rituals',
    categoryLabelAs: 'পূজা আৰু ধৰ্মীয়',
    originEn: 'Master Metalsmiths of Hajo',
    originAs: 'হাজোৰ দক্ষ ধাতুশিল্পীৰ দ্বাৰা নিৰ্মিত',
    materialEn: 'Heavy Hajo Brass (পিতল) & Copper highlights',
    materialAs: 'গধুৰ পিতল (হাজো) আৰু বিশুদ্ধ তামৰ কাৰুকাৰ্য',
    image: '/src/assets/images/puja_gosa_lota_rituals_1792933569851.jpg',
    priceNoteEn: 'Price by weight (₹1,500 – ₹4,200)',
    priceNoteAs: 'ওজন অনুসৰি মূল্য (আনুমানিক ₹১,৫০০ – ₹৪,২০০)',
    descriptionEn: 'Hand-shaped ritual water pitchers (Koloh) and spouted holy lotas. Kept in holy prayer rooms and used in traditional Assamese morning rituals and wedding bathing (Pani Tula).',
    descriptionAs: 'পানী তোলা পৰ্ব, পূজা-অৰ্চনা আৰু পবিত্ৰ স্নানৰ বাবে ব্যৱহৃত পিতলৰ কলহ আৰু লোটা। বিশুদ্ধ হাতৰ কাম আৰু পানী শীতল ৰখাৰ প্ৰাকৃতিক গুণ।',
    featuresEn: [
      'Seamless hammer-forged brass body with reinforced rim',
      'Essential for Assamese wedding "Pani Tula" ritual',
      'Stores drinking water naturally cool with mineral preservation',
      'Various capacities: 1L, 2.5L, 5L, and 10L'
    ],
    featuresAs: [
      'অসমীয়া বিয়াৰ "পানী তোলা" নিয়মৰ বাবে অপৰিহাৰ্য',
      'পূজা আৰু পবিত্ৰ জল সংৰক্ষণৰ বাবে বিশুদ্ধ পাত্ৰ',
      '১ লিটাৰৰ পৰা ১০ লিটাৰলৈ বিভিন্ন জোখত উপলব্ধ',
      'মজবুত আৰু উজ্জ্বল পিতলৰ সুন্দৰ গঠন'
    ],
    weightRangeEn: '800g – 3.5kg',
    weightRangeAs: '৮০০ গ্ৰাম – ৩.৫ কেজি',
    popularForEn: 'Wedding Pani-Tula, Puja Bathing & Water Storage',
    popularForAs: 'পানী তোলা নিয়ম, পূজা আৰু জল সংৰক্ষণ'
  },
  {
    id: 'gosa-dhupdhani-bells',
    nameEn: 'Gosa, Dhupdhani & Resonant Bells (গছা, ধূপধানী আৰু ঘণ্টা)',
    nameAs: 'গছা, ধূপধানী আৰু পৱিত্ৰ কাঁহৰ ঘণ্টা',
    category: 'puja',
    categoryLabelEn: 'Puja & Rituals',
    categoryLabelAs: 'পূজা আৰু ধৰ্মীয়',
    originEn: 'Sarthebari Bell Metal & Hajo Brass',
    originAs: 'সৰ্থেবাৰীৰ কাঁহ আৰু হাজোৰ পিতল',
    materialEn: 'High-Tin Bronze & Polished Brass',
    materialAs: 'উচ্চ মানৰ কাঁহ আৰু পিতলৰ মিশ্ৰণ',
    image: '/assets/aistudio/image_29719b92.png',
    priceNoteEn: 'Price by piece & weight (₹650 – ₹3,800)',
    priceNoteAs: 'প্ৰতিপদৰ ওজন অনুসৰি মূল্য (₹৬৫০ – ₹৩,৮০০)',
    descriptionEn: 'Sacred ritual tier oil lamps (Gosa), incense burner with heat-safe grip (Dhupdhani), and high-resonance bell metal Ghanta for daily prayer and evening aarti.',
    descriptionAs: 'নামঘৰ আৰু গোসাঁইঘৰৰ বাবে উপযোগী বহুতলযুক্ত তেলৰ চাকি (গছা), ধূপধানী আৰু সুমধুৰ ধ্বনিযুক্ত কাঁহৰ পূজাৰ ঘণ্টা।',
    featuresEn: [
      'Available in 3-tier, 5-tier, and 7-tier ceremonial Gosa stands',
      'Resonant bell metal clapper bell with long acoustic sustain',
      'Handcrafted heavy brass incense burner for dhup & dhoona',
      'Resistant to high heat and prayer soot'
    ],
    featuresAs: [
      '৩ তৰপ, ৫ তৰপ আৰু ৭ তৰপৰ আকৰ্ষণীয় গছা',
      'দীৰ্ঘস্থায়ী সুমধুৰ ওংকাৰ ধ্বনিযুক্ত বিশুদ্ধ কাঁহৰ ঘণ্টা',
      'ধূপ আৰু ধূনা জ্বলাবলৈ উপযোগী সুৰক্ষিত ধূপধানী',
      'গোসাঁইঘৰৰ পৱিত্ৰ পৰিবেশৰ বাবে অপৰিহাৰ্য'
    ],
    weightRangeEn: '400g – 2.8kg',
    weightRangeAs: '৪০০ গ্ৰাম – ২.৮ কেজি',
    popularForEn: 'Namghar Prayers, Daily Aarti & Devotional Worship',
    popularForAs: 'নামঘৰ, সন্ধ্যা আৰতি আৰু গোসাঁইঘৰ'
  },
  {
    id: 'maihang-royal-kahi',
    nameEn: 'Maihang Kahi & Royal Stemmed Platter (মাইহাং কাঁহী)',
    nameAs: 'ঐতিহাসিক আহোম যুগৰ মাইহাং কাঁহী',
    category: 'dining',
    categoryLabelEn: 'Dining (Kahi-Bati)',
    categoryLabelAs: 'কাঁহী-বাতি (আহাৰ)',
    originEn: 'Sarthebari Traditional Heritage Forge',
    originAs: 'সৰ্থেবাৰীৰ প্ৰাচীন কঁহাৰ শাল',
    materialEn: 'Royal Heavy Bell Metal (কাঁহ)',
    materialAs: 'ৰাজকীয় গধুৰ কাঁহ (সৰ্থেবাৰী)',
    image: '/src/assets/images/sarthebari_kahi_bati_set_1792933569486.jpg',
    priceNoteEn: 'Price by weight (Approx. ₹4,500 – ₹12,000)',
    priceNoteAs: 'ওজন অনুসৰি মূল্য (আনুমানিক ₹৪,৫০০ – ₹১২,০০০)',
    descriptionEn: 'Elevated four-legged royal dining platter historically crafted for Ahom royalty. A monumental centerpiece representing Assam’s glorious metal-smithing heritage.',
    descriptionAs: 'চাৰিটা খুৰাযুক্ত ৰাজকীয় আহাৰৰ থাল, যাৰ ইতিহাস আহোম স্বৰ্গদেউসকলৰ দিনৰে পৰা চলি আহিছে। ঈশ্বৰৰ ভোগ আৰু বিশিষ্ট অতিথিক ভোজন কৰাবলৈ সৰ্বোত্তম।',
    featuresEn: [
      'Four curved sturdy legs forged from single heavy bronze block',
      'Mirrored polished face with hand-turned traditional rim',
      'Used for temple bhog and prestigious ceremonial dining',
      'Collector and heirloom prestige asset'
    ],
    featuresAs: [
      'চাৰিটা সুদৃঢ় খুৰাযুক্ত ঐতিহ্যমণ্ডিত গঠন',
      'ঈশ্বৰৰ ভোগ আগবঢ়োৱা আৰু বিশিষ্ট ব্যক্তিৰ সন্মানাৰ্থে ব্যৱহৃত',
      'উচ্চ মানৰ বিশুদ্ধ কাঁহৰ দীৰ্ঘম্যাদী উজ্জ্বলতা',
      'সংগ্ৰাহক আৰু সংস্কৃতিপ্ৰেমীৰ বাবে অমূল্য সম্পদ'
    ],
    weightRangeEn: '2.0kg – 5.5kg',
    weightRangeAs: '২.০ কেজি – ৫.৫ কেজি',
    popularForEn: 'Royal Ceremonies, Temple Bhog & Heritage Collectors',
    popularForAs: 'ৰাজকীয় ভোজ, ভোগ নিবেদন আৰু সংগ্ৰহ'
  },
  {
    id: 'felicitation-xorai-memento',
    nameEn: 'Institutional Felicitation Xorai (সন্মানীয় শৰাই স্মাৰক)',
    nameAs: 'অনুষ্ঠানিক সন্মানীয় শৰাই আৰু স্মাৰক',
    category: 'cultural',
    categoryLabelEn: 'Cultural & Xorai',
    categoryLabelAs: 'শৰাই আৰু সাংস্কৃতিক',
    originEn: 'Hajo Brass & Custom Engraving Studio',
    originAs: 'হাজো পিতল আৰু নগাঁও কাৰিকৰী খোদাই কেন্দ্ৰ',
    materialEn: 'High-Polish Brass with Velvet Base & Plaque',
    materialAs: 'উচ্চ চিকমিকীয়া পিতল আৰু খোদাই কৰা পিতলৰ ফলক',
    image: '/assets/aistudio/image_803311ff.png',
    priceNoteEn: 'Bulk institutional rates on inquiry',
    priceNoteAs: 'অনুষ্ঠানিক অৰ্ডাৰত পাইকাৰী বিশেষ সুবিধা',
    descriptionEn: 'Specially crafted for colleges, universities, government bodies, cultural committees, and corporate felicitation ceremonies across Assam. Includes personalized brass plaque.',
    descriptionAs: 'বিদ্যালয়, মহাবিদ্যালয়, সাহিত্য সভা, সাংস্কৃতিক সমাৰোহ আৰু চৰকাৰী অনুষ্ঠানৰ সন্মাননা জ্ঞাপনৰ বাবে সাজু কৰা সুন্দৰ পিতলৰ শৰাই।',
    featuresEn: [
      'Ready in custom sizes with quick turnaround for event dates',
      'Computerized & hand-etched Assamese/English text plaques',
      'Available with genuine Assam Gamosa and gift presentation wrap',
      'Special discounted tiered pricing on quantities of 5 to 100+ units'
    ],
    featuresAs: [
      'অনুষ্ঠানৰ তাৰিখ অনুসৰি নিৰ্দিষ্ট সময়ত যোগানৰ নিশ্চিতি',
      'অসমীয়া আৰু ইংৰাজী ভাষাত নাম আৰু প্ৰশস্তি-পত্ৰ খোদাইৰ ব্যৱস্থা',
      'ফুলাম গামোচা আৰু সুন্দৰ পেকেজিঙৰ সুবিধা',
      '৫ টাৰ পৰা ১০০+ লৈকে পাইকাৰী দৰত সুলভ মূল্য'
    ],
    weightRangeEn: '400g – 2.5kg each',
    weightRangeAs: '৪০০ গ্ৰাম – ২.৫ কেজি প্ৰতিটো',
    popularForEn: 'College Events, Literary Conferences & VIP Mementos',
    popularForAs: 'শিক্ষানুষ্ঠানৰ সমাৰোহ, সভা-সমিতি আৰু বিশিষ্ট সম্বৰ্ধনা'
  }
];

export const SERVICES = [
  {
    id: 'exchange',
    number: '01',
    titleEn: 'Old Kanh & Pital Exchange',
    titleAs: 'পুৰণি কাঁহ-পিতলৰ সলনি (Exchange)',
    descriptionEn: 'Bring your ancestral, broken, or disused bell metal and brass utensils. We evaluate exact metal purity and weight to exchange them for brand new handcrafted items or fair credit.',
    descriptionAs: 'আপোনাৰ ঘৰৰ পুৰণি বা ভঙা কাঁহ-পিতলৰ পাত্ৰসমূহ আনি ওজন আৰু বিশুদ্ধতা অনুসৰি নতুন সাজ-বাচনৰ সৈতে সলনি কৰি লওক।',
    tagEn: 'By Weight & Purity',
    tagAs: 'ওজন আৰু বিশুদ্ধতা অনুসৰি'
  },
  {
    id: 'custom-orders',
    number: '02',
    titleEn: 'Custom & Bulk Event Orders',
    titleAs: 'বিশেষ আৰু পাইকাৰী অৰ্ডাৰ',
    descriptionEn: 'Large-scale Xorai orders for academic felicitation, corporate gifting, wedding trousseaus, and Namghar donations with customized name engraving.',
    descriptionAs: 'সভা-সমিতি, শিক্ষানুষ্ঠানৰ সন্মাননা, বিয়াৰ যৌতুক আৰু নামঘৰৰ দানৰ বাবে নাম খোদাইসহ পাইকাৰী যোগান।',
    tagEn: 'Direct Artisan Supply',
    tagAs: 'পোনপটীয়া কাৰিকৰী যোগান'
  },
  {
    id: 'polishing-repair',
    number: '03',
    titleEn: 'Repair & Traditional Mirror Polishing',
    titleAs: 'মেৰামতি আৰু পুৰণি চাফাই-পলিচ',
    descriptionEn: 'Restore heirloom brass and bell metal items that have darkened with age. Our traditional polishing wheel revives the original warm golden radiance.',
    descriptionAs: 'কলা পৰি যোৱা পুৰণি কাঁহ আৰু পিতলৰ পাত্ৰসমূহৰ মূল সোণালী উজ্জ্বলতা ঘূৰাই আনিবলৈ পৰম্পৰাগত ছাফাই আৰু পলিচৰ সুবিধা।',
    tagEn: 'Heritage Restoration',
    tagAs: 'ঐতিহ্য সংৰক্ষণ'
  }
];
