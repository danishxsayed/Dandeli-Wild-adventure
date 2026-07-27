export interface HomestayPrice {
  category: string;
  price: string;
  note?: string;
}

export interface Homestay {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  heroImage: string;
  collageImages: string[];
  rooms: HomestayPrice[];
  riverActivities: string[];
  commonActivities: string[];
  youtubeUrl?: string;
}

export const homestaysData: Homestay[] = [
  {
    slug: "shikra-jungle-resort-dandeli",
    name: "Shikra Jungle Resort Dandeli | Dandeli Jungle Resort",
    tagline: "Eco-Adventure Wilderness Retreat & Premium Tree House Homestay",
    location: "Gobral Village, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Shikra Jungle Resort Dandeli | Dandeli Jungle Resort Booking & Packages",
    seoDescription: "Book your stay at Shikra Jungle Resort in Dandeli. Enjoy premium tree houses, tented cottages, deluxe rooms, adventure rope activities, and swimming pool. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Shikra Jungle Resort is a premier eco-adventure retreat and homestay located in Gobral Village, near the Dandeli Wildlife Sanctuary. Spread across beautiful jungle terrains, the resort is designed to offer an authentic nature experience combined with modern comforts and exhilarating adventure. It is highly favored by nature lovers, groups, and families seeking an active and rejuvenating forest stay.\n\nThe resort features a refreshing outdoor swimming pool (fully confirmed and available for guests), and offers a wide array of activities, including adventure rope activities (Burma bridge, commando walk, zip-lining, river crossing) and on-site indoor and outdoor games (badminton, chess, carom, volleyball, and soft-ball cricket). Guests can choose from a range of rustic yet comfortable accommodations: unique Tree Houses, cozy Tented Cottages, Premium Regular Rooms, Deluxe Tents, and budget-friendly Dormitories. With all buffet meals included in the stay, Shikra Jungle Resort provides a perfect nature-filled escape in Dandeli.",
    heroImage: "/homestay/Shikra Jungle Resort Dandeli/unnamed (9).webp",
    collageImages: [
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (9).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed.webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (1).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (2).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (3).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (4).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (5).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (6).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (7).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (8).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (10).webp",
      "/homestay/Shikra Jungle Resort Dandeli/unnamed (11).webp"
    ],
    rooms: [
      {
        category: "Tree House (Double Sharing)",
        price: "₹2,700",
        note: "per person per night (2 sharing) (American Plan - All Meals Included)"
      },
      {
        category: "Tented Cottage",
        price: "₹2,200",
        note: "per person per night (2 sharing) (American Plan - All Meals Included)"
      },
      {
        category: "Deluxe Regular Room",
        price: "₹1,700",
        note: "per person per night (2 sharing) (Regular Plan - Stay & Food)"
      },
      {
        category: "Dormitory Group Stay",
        price: "₹1,500",
        note: "per person per night (Adventure Plan)"
      },
      {
        category: "Adventure Pitch Tent",
        price: "₹1,350",
        note: "per person per night (2 sharing) (Adventure Plan)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "Boating",
      "River Swimming",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Swimming Pool Access",
      "Burma Bridge",
      "Commando Walk",
      "Zip Lining (Zoom Ring)",
      "River Crossing",
      "Chess & Carrom",
      "Badminton & Volleyball",
      "Soft-ball Cricket",
      "Nature Walks",
      "Night Trekking",
      "Campfire with Music",
      "Bird Watching"
    ]
  },
  {
    slug: "panther-stay-dandeli",
    name: "Panther Stay Dandeli",
    tagline: "Adventure Jungle Lodge & Premium Poolside Forest Homestay",
    location: "Kogilban, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Panther Stay Dandeli | Pool, Booking, Rates & Packages",
    seoDescription: "Book your adventure stay at Panther Stay Dandeli. Enjoy outdoor swimming pool, deluxe cottages, group dormitories, ziplining, kayaking, and rain dance. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Panther Stay Dandeli (Panther Jungle Stay) is a premier adventure-oriented forest homestay located in the serene jungle outskirts of Dandeli. Set amidst a lush green canopy, the property is designed to offer a thrilling nature experience combined with comfort and friendly hospitality. It is highly favored by adventure seekers, families, and group travelers looking to experience the wild beauty of Dandeli.\n\nThe homestay features a well-maintained outdoor swimming pool and a separate kids' pool, ideal for relaxation. Guests can enjoy a wide array of adventure activities directly on the property, including ziplining, Burma bridge crossing, archery, pond boating, and pond kayaking. With comfortable deluxe AC/Non-AC cottages, spacious group dormitories, and adventure camping tents, Panther Stay provides the perfect base for your jungle getaway, complete with delicious local buffet meals and campfire nights.",
    heroImage: "/homestay/Panther Stay Dandeli/unnamed.webp",
    collageImages: [
      "/homestay/Panther Stay Dandeli/unnamed.webp",
      "/homestay/Panther Stay Dandeli/unnamed (1).webp",
      "/homestay/Panther Stay Dandeli/unnamed (2).webp",
      "/homestay/Panther Stay Dandeli/unnamed (3).webp",
      "/homestay/Panther Stay Dandeli/unnamed (4).webp",
      "/homestay/Panther Stay Dandeli/unnamed (5).webp",
      "/homestay/Panther Stay Dandeli/unnamed (6).webp",
      "/homestay/Panther Stay Dandeli/unnamed (7).webp",
      "/homestay/Panther Stay Dandeli/unnamed (8).webp"
    ],
    rooms: [
      {
        category: "Deluxe Cottage (AC Room)",
        price: "₹2,200",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Cottage (Non-AC Room)",
        price: "₹1,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Group Stay",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Adventure Pitch Tent",
        price: "₹1,300",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Pond Boating",
      "Pond Kayaking",
      "Pond Paddle Boating",
      "Swimming Pool Access"
    ],
    commonActivities: [
      "Swimming Pool & Kids Pool",
      "Ziplining",
      "Burma Bridge",
      "Archery",
      "Zorbing",
      "Rain Dance with DJ",
      "Morning Jungle Trekking",
      "Campfire with Music",
      "Badminton & Carrom"
    ]
  },
  {
    slug: "lake-valley-dandeli-homestay",
    name: "Lake Valley Dandeli Homestay",
    tagline: "Serene Lakeside Retreat & Premium Maharaja Cottage Stay",
    location: "Ganeshgudi Road, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Lake Valley Dandeli Homestay | Pool, Rooms & Packages",
    seoDescription: "Book your stay at Lake Valley Dandeli Homestay. Enjoy outdoor swimming pool, luxury Maharaja cottages, boating, kayaking, rain dance, and jungle trekking. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Lake Valley Dandeli Homestay is a serene lakeside nature retreat situated in the scenic woodlands of Dandeli. Overlooking beautiful valleys and lush greenery, this resort is designed to combine eco-adventure with home-style comfort. It is highly popular among groups, families, and nature lovers seeking a refreshing escape.\n\nThe homestay features an on-site outdoor swimming pool and hosts a variety of resort-style recreational activities, including rain dance with music, campfire nights, archery, badminton, and volleyball. Guests can also enjoy water sports like kayaking, boating, and zorbing, alongside guided jungle trekking and bird watching. Lake Valley features comfortable Maharaja Cottages with private sit-outs, Deluxe Rooms, and rustic Camping Tents, with all-inclusive packages that cover delicious buffet meals (breakfast, lunch, dinner) and daily activities.",
    heroImage: "/homestay/Lake Valley Dandeli/unnamed (14).webp",
    collageImages: [
      "/homestay/Lake Valley Dandeli/unnamed (14).webp",
      "/homestay/Lake Valley Dandeli/unnamed.webp",
      "/homestay/Lake Valley Dandeli/unnamed (1).webp",
      "/homestay/Lake Valley Dandeli/unnamed (2).webp",
      "/homestay/Lake Valley Dandeli/unnamed (3).webp",
      "/homestay/Lake Valley Dandeli/unnamed (4).webp",
      "/homestay/Lake Valley Dandeli/unnamed (5).webp",
      "/homestay/Lake Valley Dandeli/unnamed (6).webp",
      "/homestay/Lake Valley Dandeli/unnamed (7).webp",
      "/homestay/Lake Valley Dandeli/unnamed (8).webp",
      "/homestay/Lake Valley Dandeli/unnamed (9).webp",
      "/homestay/Lake Valley Dandeli/unnamed (10).webp",
      "/homestay/Lake Valley Dandeli/unnamed (11).webp",
      "/homestay/Lake Valley Dandeli/unnamed (12).webp",
      "/homestay/Lake Valley Dandeli/unnamed (13).webp",
      "/homestay/Lake Valley Dandeli/unnamed (15).webp",
      "/homestay/Lake Valley Dandeli/unnamed (16).webp",
      "/homestay/Lake Valley Dandeli/unnamed (17).webp",
      "/homestay/Lake Valley Dandeli/unnamed (18).webp",
      "/homestay/Lake Valley Dandeli/unnamed (19).webp"
    ],
    rooms: [
      {
        category: "Maharaja Cottage (AC Room)",
        price: "₹2,500",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Room (Non-AC Room)",
        price: "₹1,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Group Room",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Camping Tent Stay",
        price: "₹1,300",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Lakeside Boating",
      "Kayaking",
      "Zorbing",
      "River Swimming",
      "Swimming Pool Access"
    ],
    commonActivities: [
      "Outdoor Swimming Pool",
      "Rain Dance with Music",
      "Campfire Nights",
      "Archery & Darts",
      "Badminton & Volleyball",
      "Jungle Trekking",
      "Bird Watching",
      "Chess & Carrom"
    ]
  },
  {
    slug: "green-valley-jungle-stay",
    name: "Green Valley Jungle Stay",
    tagline: "Lush Five-Acre Forest Haven & Premium Resort-Style Cottages",
    location: "Ganeshgudi, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Green Valley Jungle Stay Dandeli | Booking, Rates & Pool",
    seoDescription: "Book your stay at Green Valley Jungle Stay in Dandeli. Enjoy premium rooms, deluxe cottages, outdoor swimming pool, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Green Valley Jungle Stay is a serene, nature-focused retreat situated across five acres of lush, park-like grounds in the scenic Ganeshgudi area of Dandeli. Surrounded by thick green canopy and forest hills, the homestay offers a peaceful environment designed for families, couples, and groups of friends seeking a relaxing escape from the city.\n\nThe property features a stylish outdoor swimming pool, beautiful gardens, and host of modern amenities. Guests can enjoy various resort-style experiences, including indoor games, outdoor badminton and volleyball, morning jungle trekking, and evening campfires. The homestay offers a range of comfortable accommodations: Premium Rooms (2/4 sharing) with modern amenities, cozy Deluxe Cottages, spacious Dormitories / Commando Cottages for large groups, and authentic Camping Tents. With delicious home-cooked local buffet meals included, Green Valley provides the perfect nature-filled getaway in Dandeli.",
    heroImage: "/homestay/Green Valley Jungle Stay/unnamed.webp",
    collageImages: [
      "/homestay/Green Valley Jungle Stay/unnamed.webp",
      "/homestay/Green Valley Jungle Stay/unnamed (1).webp",
      "/homestay/Green Valley Jungle Stay/unnamed (2).webp",
      "/homestay/Green Valley Jungle Stay/unnamed (3).webp",
      "/homestay/Green Valley Jungle Stay/unnamed (4).webp",
      "/homestay/Green Valley Jungle Stay/unnamed (5).webp",
      "/homestay/Green Valley Jungle Stay/unnamed (6).webp"
    ],
    rooms: [
      {
        category: "Premium Room (AC - 2/4 Sharing)",
        price: "₹2,200",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Cottage (Non-AC)",
        price: "₹1,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Dormitory / Commando Cottage",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Camping Tent Stay",
        price: "₹1,300",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "River Swimming",
      "Pond Boating",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Stylish Swimming Pool Access",
      "Ziplining & Burma Bridge",
      "Rain Dance with Music",
      "Morning Jungle Trekking",
      "Campfire with Music",
      "Badminton & Volleyball",
      "Archery & Darts",
      "Chess & Carrom",
      "Bird Watching"
    ]
  },
  {
    slug: "wildwest-resort-and-cottages",
    name: "WildWest Resort and Cottages",
    tagline: "Eco-Friendly Wilderness Retreat & Luxury Cottages in Joida Valley",
    location: "Joida, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "WildWest Resort and Cottages Dandeli | Booking, Rates & Pool",
    seoDescription: "Book your getaway at WildWest Resort and Cottages in Dandeli. Enjoy premium jungle cottages, swimming pool access, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "WildWest Resort and Cottages is an eco-friendly jungle resort situated in the scenic woodlands of Joida, Dandeli. Tucked away in a tranquil forest setting, the property offers a rustic charm combined with modern comforts. It is highly favored by nature lovers, adventure enthusiasts, and families looking to experience the wild beauty of Dandeli.\n\nThe resort features a refreshing outdoor swimming pool (fully confirmed for guests), and provides a range of activities, including zip-lining, Burma bridge crossing, morning trekking, and campfire nights. Guests can choose from comfortable Deluxe AC/Non-AC Cottages, Maharaja Suite Cottages, and budget-friendly Dormitories. With all buffet meals included in the package, WildWest Resort provides the perfect wilderness experience in Dandeli.",
    heroImage: "/homestay/WildWest Resort and Cottages/unnamed.webp",
    collageImages: [
      "/homestay/WildWest Resort and Cottages/unnamed.webp",
      "/homestay/WildWest Resort and Cottages/unnamed (1).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (2).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (3).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (4).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (5).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (6).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (7).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (8).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (9).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (10).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (11).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (12).webp",
      "/homestay/WildWest Resort and Cottages/unnamed (13).webp"
    ],
    rooms: [
      {
        category: "Maharaja Suite Cottage",
        price: "₹2,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Cottage (AC Room)",
        price: "₹2,400",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Cottage (Non-AC Room)",
        price: "₹2,000",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Group Room",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "River Swimming",
      "River Crossing",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Outdoor Swimming Pool",
      "Ziplining",
      "Burma Bridge Crossing",
      "Morning Jungle Trekking",
      "Campfire with Music",
      "Rain Dance with Music",
      "Badminton & Volleyball",
      "Chess & Carrom",
      "Bird Watching"
    ]
  },
  {
    slug: "dark-forest-jungle-stay-dandeli",
    name: "Dark Forest Jungle Stay Dandeli",
    tagline: "Infinity Pool Mountainside Haven & Premium Bamboo Cottages",
    location: "Badgund, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Dark Forest Jungle Stay Dandeli | Booking, Rates & Infinity Pool",
    seoDescription: "Book your stay at Dark Forest Jungle Stay in Dandeli. Enjoy premium rooms, eco-friendly bamboo cottages, infinity swimming pool, and jungle activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dark Forest Jungle Stay Dandeli is a premium nature retreat nestled in the lush forest landscapes of Dandeli. Overlooking beautiful mountain ranges and dense jungle foliage, the property offers a perfect blend of modern comfort and rustic wilderness adventure. It is highly popular among couples, families, and solo nature travelers seeking a peaceful forest getaway.\n\nThe homestay features a stunning outdoor infinity swimming pool with panoramic views of the hills, an on-site multi-cuisine restaurant, and well-maintained grounds. Guests can enjoy a wide array of activities, including morning jungle walks, evening campfires, ziplining, river swimming, and trekking. Accommodations include well-appointed Deluxe Rooms with modern amenities, eco-friendly Bamboo Cottages for an authentic forest vibe, and Commando Tents for adventure enthusiasts. All stays include delicious local home-cooked buffet meals (breakfast, lunch, dinner).",
    heroImage: "/homestay/dark forest jungle stay dandeli/unnamed.webp",
    collageImages: [
      "/homestay/dark forest jungle stay dandeli/unnamed.webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (1).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (2).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (3).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (4).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (5).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (6).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (7).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (8).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (9).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (10).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (11).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (12).webp",
      "/homestay/dark forest jungle stay dandeli/unnamed (13).webp"
    ],
    rooms: [
      {
        category: "Eco-Friendly Bamboo Cottage",
        price: "₹2,500",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Regular Room",
        price: "₹2,200",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Commando Tent Stay",
        price: "₹1,500",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "River Swimming",
      "River Crossing",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Infinity Swimming Pool Access",
      "Jungle Safari (Government Counter)",
      "Morning Jungle Walks",
      "Ziplining & Burma Bridge",
      "Rain Dance with DJ",
      "Campfire with Music",
      "Badminton & Volleyball",
      "Chess & Carrom",
      "Bird Watching"
    ]
  },
  {
    slug: "verdant-cottages",
    name: "Verdant Cottages",
    tagline: "Scenic Forest Valley Stay & Premium Eco-Friendly Cottages",
    location: "Jagalbet, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Verdant Cottages Dandeli | Booking, Rates & Pool",
    seoDescription: "Book your getaway at Verdant Cottages in Dandeli. Enjoy premium cottages, swimming pool access, early morning trekking, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Verdant Cottages is a popular jungle-stay option nestled in the lush forests of Jagalbet, Dandeli. Surrounded by thick green canopy and forest valleys, the resort is designed to offer a peaceful environment for nature lovers, families, and group travelers seeking a refreshing holiday.\n\nThe property features a well-maintained outdoor swimming pool, rain dance setup, and bonfire nights. Guests can enjoy a wide array of activities, including archery, cycling, table tennis, badminton, morning trekking, and water sports like kayaking, boating, and zip-lining. The resort offers various accommodation options: cozy Deluxe Cottages with attached washrooms and 24/7 hot water, spacious Dormitories for larger groups, and Premium Family Rooms. With delicious buffet meals and local home-style hospitality included, Verdant Cottages provides a perfect forest stay experience in Dandeli.",
    heroImage: "/homestay/Verdant Cottages/images (4).jpeg",
    collageImages: [
      "/homestay/Verdant Cottages/images (4).jpeg",
      "/homestay/Verdant Cottages/18e3cb36-869c-4712-9cf6-c34428a1000c.avif",
      "/homestay/Verdant Cottages/310820db-c115-4563-893b-4c5076ca7ac3.jpg",
      "/homestay/Verdant Cottages/93b2acc4-afc4-47a6-b932-f5f253a5c7e8.jpg",
      "/homestay/Verdant Cottages/c07f7372-90f3-422c-a55a-de6ea77bba18.jpg",
      "/homestay/Verdant Cottages/images.jpeg",
      "/homestay/Verdant Cottages/images (1).jpeg",
      "/homestay/Verdant Cottages/images (2).jpeg",
      "/homestay/Verdant Cottages/images (3).jpeg"
    ],
    rooms: [
      {
        category: "Premium Family Room",
        price: "₹2,200",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Cottage (AC Room)",
        price: "₹2,000",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Cottage (Non-AC Room)",
        price: "₹1,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Cozy Dormitory Room",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "River Swimming",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Morning Jungle Trekking",
      "Ziplining & Burma Bridge",
      "Rain Dance with Music",
      "Campfire with Music",
      "Archery & Cycling",
      "Table Tennis & Badminton",
      "Chess & Carrom Board",
      "Bird Watching"
    ]
  },
  {
    slug: "kali-home-stay-dandeli",
    name: "Kali Home Stay Dandeli",
    tagline: "A Scenic Riverside Haven & Comfortable Forest Executive Rooms",
    location: "Bhamanagi, near Kali River, Dandeli, Karnataka",
    seoTitle: "Kali Home Stay Dandeli | Booking, Rates & River Activities",
    seoDescription: "Book your stay at Kali Home Stay in Dandeli. Enjoy premium executive rooms, forest views, river swimming, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Kali Home Stay Dandeli is a quiet, forest-side nature retreat situated in the peaceful Bhamanagi region, just a short distance from the Kali River. Designed to provide a comfortable 'home away from home' experience, the property is highly favored by nature lovers, groups, and families seeking a serene getaway.\n\nWhile the property does not feature an on-site swimming pool (verified), guests can enjoy river swimming and other Kali River water sports just minutes away. The homestay features comfortable Executive Rooms with attached washrooms, forest-facing views, a small library, and an in-built restaurant serving delicious home-cooked local meals. Outdoor sports like volleyball and cricket are available on-site, alongside indoor games like carom and chess. Stays include all buffet meals and assistance with booking white-water rafting, safaris, and Syntheri Rocks excursions.",
    heroImage: "/homestay/Kali Home stay Dandeli/unnamed.webp",
    collageImages: [
      "/homestay/Kali Home stay Dandeli/unnamed.webp",
      "/homestay/Kali Home stay Dandeli/unnamed.jpg",
      "/homestay/Kali Home stay Dandeli/unnamed (1).webp",
      "/homestay/Kali Home stay Dandeli/unnamed (2).webp",
      "/homestay/Kali Home stay Dandeli/unnamed (3).webp",
      "/homestay/Kali Home stay Dandeli/unnamed (4).webp",
      "/homestay/Kali Home stay Dandeli/unnamed (5).webp",
      "/homestay/Kali Home stay Dandeli/unnamed (6).webp",
      "/homestay/Kali Home stay Dandeli/unnamed (7).webp",
      "/homestay/Kali Home stay Dandeli/unnamed (8).webp"
    ],
    rooms: [
      {
        category: "Executive Forest View Room",
        price: "₹1,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Regular Room",
        price: "₹1,500",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Group Sharing Room",
        price: "₹1,350",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "White-Water Rafting",
      "Kayaking",
      "Coracle Rides",
      "River Swimming"
    ],
    commonActivities: [
      "Morning Jungle Trekking",
      "Syntheri Rocks Excursion",
      "Mountain Biking",
      "Campfire with Music",
      "Badminton & Volleyball",
      "Cricket & Archery",
      "Chess & Carrom Board",
      "Bird Watching in Forest"
    ]
  },
  {
    slug: "dandeli-kingfisher-jungle-stay",
    name: "Dandeli Kingfisher Jungle Stay",
    tagline: "Scenic Forest Infinity Pool Escape & Premium Jungle Cottages",
    location: "Bamangi, near Joida Taluk, Dandeli, Karnataka",
    seoTitle: "Dandeli Kingfisher Jungle Stay | Booking, Rates & Infinity Pool",
    seoDescription: "Book your stay at Dandeli Kingfisher Jungle Stay. Enjoy premium cottages, outdoor infinity pool, river rafting, kayaking, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dandeli Kingfisher Jungle Stay is a premier eco-adventure retreat located in the serene forest outskirts of Bamangi, Joida. Spread across lush green landscapes, the property offers a refreshing forest-living experience coupled with modern comforts and thrilling resort activities. It is highly popular among adventure seekers, families, and groups looking to explore the wild beauty of Dandeli.\n\nThe resort features a beautiful outdoor infinity swimming pool with panoramic views of the jungle canopy. Guests can participate in a wide array of activities, including free-fall water zip-lining, Burma bridge crossing, archery, and jungle trekking. Stays include cozy Premium Cottages, Deluxe Rooms, and spacious group Dormitories, complete with buffet-style meals (South Indian/Maharashtrian cuisine) and nightly campfires with music.",
    heroImage: "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (7).webp",
    collageImages: [
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (7).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed.webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (1).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (2).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (3).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (4).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (5).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (6).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (8).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (9).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (10).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (11).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (12).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (13).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (14).webp",
      "/homestay/Dandeli Kingfisher Jungle Stay/unnamed (15).webp"
    ],
    rooms: [
      {
        category: "Premium Jungle Cottage",
        price: "₹2,200",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Regular Room",
        price: "₹1,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Spacious Dormitory Stay",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Adventure Camping Tent",
        price: "₹1,300",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "White-Water Rafting",
      "Kayaking",
      "Coracle Rides",
      "Natural Jacuzzi Bath",
      "Water Slides"
    ],
    commonActivities: [
      "Infinity Swimming Pool Access",
      "Free-Fall Water Zipline",
      "Burma Bridge Crossing",
      "Morning Jungle Trekking",
      "Evening Campfire with Music",
      "Archery & Volleyball",
      "Badminton & Chess",
      "Bird Watching & Nature Walks"
    ]
  },
  {
    slug: "dandeli-jungle-nest",
    name: "Dandeli - Jungle Nest",
    tagline: "Premium Forest Cottages, Tents & Seasonal Outdoor Pool",
    location: "Patoli Village, SH 46, Dandeli-Karwar Road, Dandeli, Karnataka",
    seoTitle: "Dandeli - Jungle Nest | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Dandeli - Jungle Nest. Enjoy premium cottages, comfortable tents, outdoor pool, safari access, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dandeli - Jungle Nest is a peaceful forest-living retreat located in Patoli Village along the Dandeli-Karwar road. Being just 1 km from the Dandeli Wildlife Sanctuary's main safari point, the resort is a favorite choice for wildlife enthusiasts and nature lovers who want to experience the wilderness at close quarters.\n\nThe property features a beautiful seasonal outdoor swimming pool, a cozy lobby with a fireplace, and manicured forest gardens. Guests can rent bicycles to explore the forest trails or engage in a range of activities like trekking, bird watching, and campfires. Accommodations include individual Premium Forest Cottages with attached washrooms and private balconies, comfortable deluxe room units, and outdoor Camping Tents for a rustic experience. High-quality local meals and guided tour assistance are provided as part of standard packages.",
    heroImage: "/homestay/Dandeli - Jungle Nest/unnamed (8).webp",
    collageImages: [
      "/homestay/Dandeli - Jungle Nest/unnamed (8).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed.webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (1).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (2).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (3).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (4).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (5).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (6).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (7).webp",
      "/homestay/Dandeli - Jungle Nest/unnamed (9).webp"
    ],
    rooms: [
      {
        category: "Premium Forest Cottage",
        price: "₹2,400",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Regular Room",
        price: "₹2,000",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Cozy Adventure Tent",
        price: "₹1,500",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "River Swimming",
      "River Crossing",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Seasonal Outdoor Pool Access",
      "Wildlife Safari (1km away)",
      "Forest Bicycle Rides",
      "Morning Jungle Trekking",
      "Lobby Fireplace & Campfire",
      "Badminton & Volleyball",
      "Chess & Carrom Board",
      "Bird Watching & Hiking"
    ]
  },
  {
    slug: "vanatara-inn",
    name: "Vanatara Inn",
    tagline: "Premium Pool View Cottages & Thrilling Zorbing Adventures",
    location: "Pradhani, Dandeli, Karnataka",
    seoTitle: "Vanatara Inn Dandeli | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Vanatara Inn in Dandeli. Enjoy premium pool view cottages, cozy poolside rooms, swimming pool access, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Vanatara Inn is an oasis of comfort and adventure situated in the tranquil forest area of Pradhani, Dandeli. Embraced by dense woodland greenery, the resort provides a peaceful escape where guests can relax by the poolside or partake in action-packed adventure activities.\n\nThe resort features a premium outdoor swimming pool, and accommodation options built around it. Guests can choose from Premium Pool View Cottages (complete with private pool-facing sit-outs, ideal for families and couples) or budget-friendly Comfort Poolside Rooms close to the food court and activities. Stays include buffet-style dining with local recipes, evening campfires, and assistance with booking river rafting, kayaking, zorbing, and nature walks.",
    heroImage: "/homestay/vanatara inn/unnamed (1).webp",
    collageImages: [
      "/homestay/vanatara inn/unnamed (1).webp",
      "/homestay/vanatara inn/unnamed.webp",
      "/homestay/vanatara inn/unnamed (2).webp",
      "/homestay/vanatara inn/unnamed (3).webp",
      "/homestay/vanatara inn/unnamed (4).webp",
      "/homestay/vanatara inn/unnamed (5).webp",
      "/homestay/vanatara inn/unnamed (6).webp",
      "/homestay/vanatara inn/unnamed (7).webp",
      "/homestay/vanatara inn/unnamed (8).webp",
      "/homestay/vanatara inn/unnamed (9).webp",
      "/homestay/vanatara inn/unnamed (10).webp",
      "/homestay/vanatara inn/unnamed (11).webp"
    ],
    rooms: [
      {
        category: "Premium Pool View Cottage",
        price: "₹2,500",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Comfort Poolside Room",
        price: "₹2,000",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Group Room",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "River Swimming",
      "River Crossing",
      "Water Zorbing",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Morning Jungle Walks",
      "Ziplining & Burma Bridge",
      "Campfire with Music",
      "Rain Dance with Music",
      "Archery & Cycling",
      "Badminton & Volleyball",
      "Chess & Carrom Board",
      "Bird Watching in Pradhani"
    ]
  },
  {
    slug: "wild-wings-dandeli",
    name: "Wild Wings Dandeli",
    tagline: "Premium AC Deluxe Cottages & Thrilling Rain Dance Pool Experience",
    location: "Phansoli Village, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Wild Wings Dandeli | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Wild Wings Dandeli. Enjoy premium AC deluxe cottages, outdoor swimming pool, rain dance, and jungle adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Wild Wings Dandeli is a nature-focused jungle resort located in the scenic Phansoli village, near the core area of the Dandeli Wildlife Sanctuary. Designed as a haven for birdwatchers and adventure seekers, the resort provides a rustic, forest-dwelling experience combined with modern amenities.\n\nThe resort features an outdoor swimming pool, a lively rain dance area with music, and a dedicated campfire site. Accommodations include comfortable AC Deluxe Cottages, family-friendly Commando Cottages, and budget-friendly Dormitories. Guests can enjoy a wide array of activities, including zip-lining, Burma bridge crossing, archery, table tennis, and guided morning jungle trekking. Delicious home-cooked buffet meals (breakfast, lunch, and dinner) are included in all packages.",
    heroImage: "/homestay/Wild Wings Dandeli/unnamed (18).webp",
    collageImages: [
      "/homestay/Wild Wings Dandeli/unnamed (18).webp",
      "/homestay/Wild Wings Dandeli/unnamed.webp",
      "/homestay/Wild Wings Dandeli/unnamed (1).webp",
      "/homestay/Wild Wings Dandeli/unnamed (2).webp",
      "/homestay/Wild Wings Dandeli/unnamed (3).webp",
      "/homestay/Wild Wings Dandeli/unnamed (4).webp",
      "/homestay/Wild Wings Dandeli/unnamed (5).webp",
      "/homestay/Wild Wings Dandeli/unnamed (6).webp",
      "/homestay/Wild Wings Dandeli/unnamed (7).webp",
      "/homestay/Wild Wings Dandeli/unnamed (8).webp",
      "/homestay/Wild Wings Dandeli/unnamed (9).webp",
      "/homestay/Wild Wings Dandeli/unnamed (10).webp",
      "/homestay/Wild Wings Dandeli/unnamed (11).webp",
      "/homestay/Wild Wings Dandeli/unnamed (12).webp",
      "/homestay/Wild Wings Dandeli/unnamed (13).webp",
      "/homestay/Wild Wings Dandeli/unnamed (14).webp",
      "/homestay/Wild Wings Dandeli/unnamed (15).webp",
      "/homestay/Wild Wings Dandeli/unnamed (16).webp",
      "/homestay/Wild Wings Dandeli/unnamed (17).webp"
    ],
    rooms: [
      {
        category: "AC Deluxe Cottage",
        price: "₹2,400",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Family Deluxe Cottage",
        price: "₹2,000",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Commando Cottage (Group Share)",
        price: "₹1,700",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Stay",
        price: "₹1,400",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "White-Water Rafting",
      "Kayaking",
      "Coracle Rides",
      "Water Zorbing",
      "River Crossing"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Rain Dance with Music",
      "Ziplining & Burma Bridge",
      "Morning Jungle Trekking",
      "Campfire with Music",
      "Archery & Table Tennis",
      "Badminton & Chess",
      "Carrom Board & Darts",
      "Bird Watching in Phansoli"
    ]
  },
  {
    slug: "dandeli-nature-mist",
    name: "Dandeli Nature Mist",
    tagline: "Kerawad Canopy Cottages & Sparkling Outdoor Swimming Pool",
    location: "Kerawad, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Dandeli Nature Mist | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Dandeli Nature Mist. Enjoy premium wooden cottages, outdoor pool, river rafting, kayaking, and jungle activities in Kerawad. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dandeli Nature Mist is a scenic jungle retreat located in the tranquil Kerawad area, close to the Dandeli Wildlife Sanctuary. Nestled amid thick forest trees and green plantations, the resort offers an authentic, serene experience for nature enthusiasts, couples, and family groups looking to unwind.\n\nThe resort features a sparkling outdoor swimming pool with a sun deck, a beautifully manicured garden, and indoor recreational rooms. Guests can choose from comfortable Deluxe Wooden Cottages with private sit-outs, Maharaja Suites, and budget-friendly Dormitories. All packages include three delicious local home-cooked buffet meals daily. Activities available include kayaking, coracle rides, early morning jungle trekking, night campfires with music, archery, badminton, snooker, and carrom.",
    heroImage: "/homestay/Dandeli Nature Mist/unnamed (7).webp",
    collageImages: [
      "/homestay/Dandeli Nature Mist/unnamed (7).webp",
      "/homestay/Dandeli Nature Mist/unnamed.webp",
      "/homestay/Dandeli Nature Mist/unnamed (1).webp",
      "/homestay/Dandeli Nature Mist/unnamed (2).webp",
      "/homestay/Dandeli Nature Mist/unnamed (3).webp",
      "/homestay/Dandeli Nature Mist/unnamed (4).webp",
      "/homestay/Dandeli Nature Mist/unnamed (5).webp",
      "/homestay/Dandeli Nature Mist/unnamed (6).webp",
      "/homestay/Dandeli Nature Mist/unnamed (8).webp",
      "/homestay/Dandeli Nature Mist/unnamed (9).webp",
      "/homestay/Dandeli Nature Mist/unnamed (10).webp",
      "/homestay/Dandeli Nature Mist/unnamed (11).webp",
      "/homestay/Dandeli Nature Mist/unnamed (12).webp",
      "/homestay/Dandeli Nature Mist/unnamed (13).webp"
    ],
    rooms: [
      {
        category: "Deluxe Wooden Cottage",
        price: "₹2,400",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Maharaja Suite Room",
        price: "₹2,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Comfort Group Room",
        price: "₹1,600",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Stay",
        price: "₹1,300",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "River Swimming",
      "River Crossing",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Morning Jungle Trekking",
      "Ziplining & Burma Bridge",
      "Evening Campfire with Music",
      "Archery & Snooker",
      "Badminton & Basketball",
      "Chess & Carrom Board",
      "Bird Watching in Kerawad"
    ]
  },
  {
    slug: "dandeli-rangers-camp",
    name: "Dandeli Rangers Camp",
    tagline: "Premium Deluxe Tents, Cozy Cottages & Scenic Forest Pool Stay",
    location: "Bamanagi Village, near Dandeli, Karnataka",
    seoTitle: "Dandeli Rangers Camp | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Dandeli Rangers Camp in Bamanagi. Enjoy cozy forest cottages, deluxe tents, swimming pool access, and adventure activities. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dandeli Rangers Camp is a peaceful forest-living eco-camp located in the tranquil village of Bamanagi, near Dandeli. Designed to offer a true jungle experience without compromising on comfort, the resort is popular among family groups, corporate teams, and nature lovers who enjoy a quiet forest stay.\n\nThe property features a clean outdoor swimming pool, a fun rain dance zone, and an open campfire area. Guests can stay in independent Deluxe Cottages, Suite Tents, and group Dormitories, with all meals served buffet-style. The camp features activities like cycling, archery, table tennis, darts, and carrom, and can help arrange river rafting, kayaking, coracle rides, and jungle safaris. Note that because of its close proximity to the forest reserve, loud music is restricted at night to respect the local wildlife.",
    heroImage: "/homestay/Dandeli Rangers Camp/unnamed (1).webp",
    collageImages: [
      "/homestay/Dandeli Rangers Camp/unnamed (1).webp",
      "/homestay/Dandeli Rangers Camp/unnamed.webp",
      "/homestay/Dandeli Rangers Camp/unnamed (2).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (3).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (4).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (5).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (6).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (7).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (8).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (9).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (10).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (11).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (12).webp",
      "/homestay/Dandeli Rangers Camp/unnamed (13).webp"
    ],
    rooms: [
      {
        category: "Deluxe Cottage Stay",
        price: "₹2,200",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Suite Tent",
        price: "₹2,000",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Camp Stay",
        price: "₹1,500",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "White-Water Rafting",
      "Kayaking",
      "Coracle Rides",
      "Jacuzzi Bath",
      "River Crossing"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Rain Dance Zone",
      "Morning Jungle Trekking",
      "Campfire (Nature Friendly)",
      "Forest Cycling & Archery",
      "Table Tennis & Badminton",
      "Chess & Carrom Board",
      "Bird Watching & Safaris"
    ]
  },
  {
    slug: "dandeli-signature-jungle-resort",
    name: "Dandeli Signature Jungle Resort",
    tagline: "Premium Gobral Cottages & Luxury Outdoor Swimming Pool",
    location: "Gobral, near Barchi/Haliyal Road, Dandeli, Karnataka",
    seoTitle: "Dandeli Signature Jungle Resort | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Dandeli Signature Jungle Resort in Gobral. Enjoy premium cottages, luxury swimming pool access, and white-water rafting. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Dandeli Signature Jungle Resort is a premium leisure retreat situated in the scenic Gobral region near Barchi-Haliyal Road. The resort is designed to combine the rugged thrill of jungle adventure with upscale comfort. Surrounded by dense trees and private plantations, it is an ideal destination for family vacations, romantic getaways, and team retreats.\n\nThe resort features a premium outdoor swimming pool, beautifully detailed cottages, and an in-built restaurant serving exceptional local cuisine. Accommodation choices include Premium Air-Conditioned Cottages, Deluxe Rooms, and spacious Group sharing cottages. Standard stay packages include all meals and select activities like kayaking, coracle rides, nature walks, ziplining, cycling, archery, and night campfires.",
    heroImage: "/homestay/Dandeli Signature Jungle Resort/dandeli-signature-jungle-resort-dandeli-resorts-4fa0r3kvjx.avif",
    collageImages: [
      "/homestay/Dandeli Signature Jungle Resort/dandeli-signature-jungle-resort-dandeli-resorts-4fa0r3kvjx.avif",
      "/homestay/Dandeli Signature Jungle Resort/unnamed.webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (1).webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (2).webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (3).webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (4).webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (5).webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (6).webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (7).webp",
      "/homestay/Dandeli Signature Jungle Resort/unnamed (8).webp"
    ],
    rooms: [
      {
        category: "Premium AC Cottage",
        price: "₹2,600",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Regular Room",
        price: "₹2,100",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Group Sharing Cottage",
        price: "₹1,700",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "White-Water Rafting",
      "Kayaking",
      "Coracle Rides",
      "Water Zorbing",
      "River Crossing"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Ziplining & Burma Bridge",
      "Jungle Jeep Safari",
      "Morning Jungle Trekking",
      "Campfire with Music",
      "Cycling & Archery",
      "Badminton & Volleyball",
      "Chess & Carrom Board",
      "Bird Watching in Gobral"
    ]
  },
  {
    slug: "fireflies-by-flycatcher-adventures-resorts",
    name: "FireFlies by Flycatcher Adventures and Resorts",
    tagline: "Premium Commando Cottages, Adventure Tents & Swimming Pool",
    location: "Patoli Village, Joida Road, Dandeli, Karnataka",
    seoTitle: "FireFlies by Flycatcher Adventures and Resorts | Booking, Rates & Pool",
    seoDescription: "Book your stay at FireFlies by Flycatcher in Dandeli. Enjoy premium Commando cottages, adventure tents, swimming pool access, and white-water rafting. 11:30 AM - 10:30 AM (23 Hours).",
    description: "FireFlies by Flycatcher Adventures and Resorts is a premier jungle stay located in the heart of Dandeli's forest region. Designed for active adventure lovers and groups seeking an escape into nature, the resort offers an action-packed getaway with comfortable, high-quality amenities.\n\nThe property features a clean on-site outdoor swimming pool, a lively rain dance floor, and a dedicated campfire circle with music. Accommodation styles include cozy Commando Cottages, comfortable Deluxe Rooms, and traditional Camping Tents. Stays include all buffet meals (breakfast, lunch, and dinner) and access to resort facilities like archery, cycling, and indoor board games. Water sports such as white-water rafting, kayaking, and boating can also be arranged directly.",
    heroImage: "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (14).webp",
    collageImages: [
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (14).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed.webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (1).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (2).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (3).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (4).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (5).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (6).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (7).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (8).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (9).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (10).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (11).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (12).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (13).webp",
      "/homestay/FireFlies by Flycatcher Adventures and Resorts/unnamed (15).webp"
    ],
    rooms: [
      {
        category: "Commando Cottage Stay",
        price: "₹2,200",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Deluxe Regular Room",
        price: "₹1,800",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Adventure Camping Tent",
        price: "₹1,300",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "White-Water Rafting",
      "Kayaking",
      "Coracle Rides",
      "River Crossing",
      "Water Zorbing"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Rain Dance Floor",
      "Evening Campfire with Music",
      "Ziplining & Burma Bridge Crossing",
      "Archery & Dart Games",
      "Forest Cycling & Trekking",
      "Badminton & Volleyball",
      "Chess & Carrom Board"
    ]
  },
  {
    slug: "wildwoods-resort-dandeli",
    name: "Wildwoods Resort Dandeli",
    tagline: "Scenic Pansoli Wooded Stays & Sparkling Outdoor Pool",
    location: "Pansoli Village, near Dandeli Wildlife Sanctuary, Dandeli, Karnataka",
    seoTitle: "Wildwoods Resort Dandeli | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Wildwoods Resort Dandeli in Pansoli. Enjoy deluxe rooms, commando tents, outdoor swimming pool, and backwater excursions. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Wildwoods Resort Dandeli is a serene, nature-integrated resort nestled in the lush, green woodlands of Pansoli village, roughly 15 km from the main town of Dandeli. Known for its quiet, jungle-themed accommodations, it offers guests an authentic forest retreat away from the crowds, while staying close to the area's main wildlife hotspots.\n\nThe resort features an outdoor swimming pool, a spacious garden area, and a bonfire zone. Accommodations consist of comfortable Deluxe Rooms, adventure-oriented Commando Tents, and shared group Dormitories. Standard packages include three buffet meals daily (breakfast, lunch, and dinner). Guests can enjoy activities such as kayaking, coracle rides, water zorbing, cycling, archery, and guided sightseeing trips to Supa Dam, backwaters, Disney Park, and the nearby Crocodile Park.",
    heroImage: "/homestay/Wildwoods Resort Dandeli/wildwoods-resort-dandeli2.webp",
    collageImages: [
      "/homestay/Wildwoods Resort Dandeli/wildwoods-resort-dandeli2.webp",
      "/homestay/Wildwoods Resort Dandeli/unnamed.webp",
      "/homestay/Wildwoods Resort Dandeli/unnamed (1).webp",
      "/homestay/Wildwoods Resort Dandeli/unnamed (2).webp",
      "/homestay/Wildwoods Resort Dandeli/wildwoods-resort-dandeli-deluxe-room.webp",
      "/homestay/Wildwoods Resort Dandeli/wildwoods-resort-dandeli3.webp",
      "/homestay/Wildwoods Resort Dandeli/wildwoods-resort-dandeli4.webp"
    ],
    rooms: [
      {
        category: "Deluxe Regular Room",
        price: "₹2,100",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Dormitory Stay",
        price: "₹1,800",
        note: "per person per night (All Meals & Activities Included)"
      },
      {
        category: "Commando Tent Stay",
        price: "₹1,700",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "Kayaking",
      "Coracle Rides",
      "Water Zorbing",
      "Boating",
      "White-Water Rafting (on request)"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Supa Dam Backwater Visit",
      "Crocodile Park Sightseeing",
      "Morning Jungle Walks",
      "Evening Campfire",
      "Forest Cycling & Archery",
      "Badminton & Volleyball",
      "Chess & Carrom Board",
      "Bird Watching in Pansoli"
    ]
  },
  {
    slug: "riverfront-resort-dandeli",
    name: "Riverfront Resort Dandeli",
    tagline: "Premium Pool View Cottages, Rain Dance & Riverfront Escapes",
    location: "Near Crocodile Park, Halmaddi, Dandeli, Karnataka",
    seoTitle: "Riverfront Resort Dandeli | Booking, Rates & Swimming Pool",
    seoDescription: "Book your stay at Riverfront Resort Dandeli near Halmaddi. Enjoy pool view cottages, outdoor swimming pool, rain dance, and water sports. 11:30 AM - 10:30 AM (23 Hours).",
    description: "Riverfront Resort Dandeli is a premier adventure retreat located in Halmaddi, right near the famous Dandeli Crocodile Park. Strategically situated to provide scenic riverfront views and easy access to local sightseeing, this resort is ideal for families, corporate teams, and groups seeking a memorable vacation.\n\nThe resort features an outdoor swimming pool, a rain dance area with DJ music, and beautiful garden lawns. Accommodations include Premium Pool View Cottages, spacious Family Rooms, and cozy Riverview Deluxe Rooms. Standard stay packages are all-inclusive, featuring three buffet-style meals (veg and non-veg options), night campfires, and standard resort activities like kayaking, coracle rides, water zorbing, archery, badminton, volleyball, and guided morning forest trekking.",
    heroImage: "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (12).webp",
    collageImages: [
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (12).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed.webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (1).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (2).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (3).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (4).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (5).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (6).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (7).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (8).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (9).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (10).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (11).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (13).webp",
      "/homestay/Riverfront Resort Dandeli | Resorts in Dandeli/unnamed (14).webp"
    ],
    rooms: [
      {
        category: "Premium Pool View Cottage",
        price: "₹2,400",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Riverview Deluxe Room",
        price: "₹2,000",
        note: "per person per night (2 sharing) (All Meals & Activities Included)"
      },
      {
        category: "Comfort Family Room",
        price: "₹1,700",
        note: "per person per night (All Meals & Activities Included)"
      }
    ],
    riverActivities: [
      "White-Water Rafting",
      "Kayaking",
      "Coracle Rides",
      "Water Zorbing",
      "River Boating"
    ],
    commonActivities: [
      "Outdoor Swimming Pool Access",
      "Rain Dance with DJ Music",
      "Trekking & Bird Watching",
      "Evening Campfire",
      "Archery & Volleyball",
      "Badminton & Darts",
      "Chess & Carrom Board",
      "Crocodile Park Sightseeing"
    ]
  }
];
