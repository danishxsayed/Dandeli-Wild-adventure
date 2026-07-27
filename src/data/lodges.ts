export interface LodgePrice {
  category: string;
  price: string;
  note?: string;
}

export interface Lodge {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  heroImage: string;
  collageImages: string[];
  rooms: LodgePrice[];
  commonActivities: string[];
  youtubeUrl?: string;
}

export const lodgesData: Lodge[] = [
  {
    slug: "dandeli-holiday-inn-lodge",
    name: "Dandeli Holiday Inn Lodge",
    tagline: "Convenient City-Center Budget Stay & Homely Comforts",
    location: "J.N. Road, Opposite Sunday Market, Dandeli, Karnataka",
    seoTitle: "Dandeli Holiday Inn Lodge | Room Rates & Booking",
    seoDescription: "Book your budget stay at Dandeli Holiday Inn Lodge. Convenient city-center location, non-AC and AC rooms, free parking, and homely hospitality. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dandeli Holiday Inn Lodge is a budget-friendly homestay and hotel situated on J.N. Road in the heart of Dandeli city center. Positioned conveniently near the bus stand and local markets, this lodge is designed for travelers looking for a comfortable, no-frills stay. Dandeli Holiday Inn features clean, well-furnished non-AC and AC rooms, complete with modern attached bathrooms, flat-screen TVs, and complimentary toiletries. The property offers 24-hour front desk assistance, room service, free Wi-Fi, and private parking. Perfect for budget-conscious families and group stay requirements, the lodge provides easy access to the main forest attractions and local tours of Dandeli.",
    heroImage: "/hotels/Dandeli Holiday Inn lodge/unnamed.webp",
    collageImages: [
      "/hotels/Dandeli Holiday Inn lodge/unnamed.webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (1).webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (2).webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (3).webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (4).webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (5).webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (6).webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (7).webp",
      "/hotels/Dandeli Holiday Inn lodge/unnamed (8).webp"
    ],
    rooms: [
      { category: "Non-AC Standard Room", price: "₹1,500", note: "per night" },
      { category: "AC Standard Room", price: "₹2,000", note: "per night (₹1,500 + ₹500 AC charge)" }
    ],
    commonActivities: [
      "Indoor Sports",
      "Carrom Board",
      "Chess & Board Games",
      "Guided Nature Walks",
      "Bonfire Nights (on request)"
    ]
  },
  {
    slug: "dandeli-river-nest-stay",
    name: "Dandeli River Nest Stay",
    tagline: "Riverside Budget Stay & Quiet Nature Getaway near Kali Bridge",
    location: "Kogilban-Kulgi Road, near Kali River Bridge, Dandeli, Karnataka",
    seoTitle: "Dandeli River Nest Stay | Cozy Budget Rooms & Booking",
    seoDescription: "Book your pocket-friendly stay at Dandeli River Nest Stay. AC and non-AC rooms, riverside views, homely meals, and quick forest access. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dandeli River Nest Stay is a cozy, pocket-friendly nature homestay situated on Kogilban-Kulgi Road, close to the Kali River Bridge. Nestled in a quiet green setting, this property offers a peaceful forest feel just a few minutes away from the main Dandeli attractions and the sanctuary entrance. The homestay features comfortable, well-ventilated non-AC rooms and air-conditioned deluxe rooms with private bathrooms. Guests can enjoy tasty local meals served in the dining hall, complimentary Wi-Fi, and 24-hour hospitality. With its close proximity to the Kali River and the Dandeli Wildlife Sanctuary, it is the perfect base for budget travelers looking to relax in nature.",
    heroImage: "/hotels/dandeli river nest stay/unnamed(15).jpg",
    collageImages: [
      "/hotels/dandeli river nest stay/unnamed(15).jpg",
      "/hotels/dandeli river nest stay/unnamed.jpg",
      "/hotels/dandeli river nest stay/unnamed(5).jpg",
      "/hotels/dandeli river nest stay/unnamed(6).jpg",
      "/hotels/dandeli river nest stay/unnamed(8).jpg",
      "/hotels/dandeli river nest stay/unnamed(13).jpg",
      "/hotels/dandeli river nest stay/unnamed(14).jpg"
    ],
    rooms: [
      { category: "Non-AC Deluxe Room", price: "₹1,500", note: "per night" },
      { category: "AC Deluxe Room", price: "₹2,000", note: "per night (₹1,500 + ₹500 AC charge)" }
    ],
    commonActivities: [
      "Indoor Sports",
      "Carrom Board",
      "Chess & Board Games",
      "Guided Forest Walk",
      "Bonfire Nights (on request)"
    ]
  }
];
