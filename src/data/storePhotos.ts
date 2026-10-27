export interface StorePhoto {
  id: string;
  src: string;
  altEn: string;
  altAs: string;
}

export const AUTHENTIC_STORE_PHOTOS: StorePhoto[] = [
  {
    id: 'storefront',
    src: '/assets/aistudio/image_d39fed26.png',
    altEn: 'Physical storefront on M.B. Road with historic 1979 signboard',
    altAs: 'এম.বি. ৰোডৰ মূল বিপণি আৰু ১৯৭৯ চনৰ ফলক',
  },
  {
    id: 'xorai',
    src: '/assets/aistudio/image_803311ff.png',
    altEn: 'Handcrafted Hajo pure brass Xorai counter display',
    altAs: 'দোকানৰ কাউন্টাৰত সজোৱা পিতলৰ শৰাই',
  },
  {
    id: 'puja',
    src: '/assets/aistudio/image_29719b92.png',
    altEn: 'Glass cabinet showcasing sacred ritual bells and gosa lamps',
    altAs: 'গোসাঁইঘৰৰ পূজাৰ ঘণ্টা আৰু গছাৰ সংগ্ৰহ',
  },
  {
    id: 'utensils',
    src: '/assets/aistudio/image_ad4266df.png',
    altEn: 'Authentic Sarthebari bell metal dinner plates and utensils stock',
    altAs: 'সৰ্থেবাৰীৰ কাঁহৰ কাঁহী-বাতিৰ মজুত',
  },
];
