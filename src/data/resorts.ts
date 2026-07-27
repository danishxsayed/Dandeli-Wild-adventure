import heroImg from "@/assets/hero-dandeli.jpg";
import raftingImg from "@/assets/activity-rafting.jpg";
import safariImg from "@/assets/activity-safari.jpg";
import kayakingImg from "@/assets/activity-kayaking.jpg";
import campingImg from "@/assets/activity-camping.jpg";
import ziplineImg from "@/assets/activity-zipline.jpg";
import trekkingImg from "@/assets/activity-trekking.jpg";
import cottageImg from "@/assets/room-cottage.jpg";
import tentImg from "@/assets/room-tent.jpg";
import treehouseImg from "@/assets/room-treehouse.jpg";
import swimmingImg from "@/assets/activity-swimming.jpg";

export interface RoomPrice {
  category: string;
  price: string;
  note?: string;
}

export interface Resort {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  heroImage: string;
  collageImages: string[];
  rooms: RoomPrice[];
  riverActivities: string[];
  commonActivities: string[];
  youtubeUrl?: string;
}

export const resortsData: Resort[] = [
  {
    "slug": "fortune-woods-river-resorts",
    "name": "Fortune Woods River Resorts",
    "tagline": "Eco-Friendly Nature Retreat Along the Scenic Kali River",
    "location": "Mainal Village, near Kariampalli, Dandeli, Karnataka",
    "seoTitle": "Fortune Woods River Resorts Dandeli | Booking & Activities",
    "seoDescription": "Book your stay at Fortune Woods River Resorts in Dandeli. Enjoy premium river-view cottages, Maharaja tents, kayaking, boating, and archery. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Fortune Woods River Resort is a tranquil eco-retreat located in Mainal Village, Dandeli, nestled along the beautiful banks of the Kali River. Set in the heart of dense, verdant forests, the resort offers guests a perfect escape into nature's lap, combined with comfortable amenities and warm hospitality. The property is designed to be a quiet and secluded destination, making it highly favored by families, couples, and groups seeking peace and rejuvenation. With dedicated cottages, luxury safari tents, group dorms, a refreshing swimming pool, and an array of exciting river and indoor adventure activities right at your doorstep, Fortune Woods provides an authentic and unforgettable Dandeli experience.",
    "heroImage": "/resort photos/Fortune Woods River Resorts/hero-image-wrapper.jpg",
    "collageImages": [
      "/resort photos/Fortune Woods River Resorts/hero-image-wrapper.jpg",
      "/resort photos/Fortune Woods River Resorts/about-image-wrapper-1.jpg",
      "/resort photos/Fortune Woods River Resorts/fortunewoods-river-resort-dandeli-resorts-82bizhtymv.avif",
      "/resort photos/Fortune Woods River Resorts/unnamed (1).webp",
      "/resort photos/Fortune Woods River Resorts/unnamed (2).webp",
      "/resort photos/Fortune Woods River Resorts/unnamed.webp",
      "/resort photos/Fortune Woods River Resorts/WhatsApp-Image-2023-05-01-at-5.47.26-PM-1.jpeg"
    ],
    "rooms": [
      {
        "category": "Double Sharing Cottage",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Triple & Quad Sharing Cottage",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Maharaja Tent (Double Sharing)",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Maharaja Tent (Triple & Quad Sharing)",
        "price": "₹2,300",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Boating",
      "Kayaking",
      "Zorbing",
      "Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "laguna-river-resort",
    "name": "Laguna River Resort",
    "tagline": "Riverside Adventure & Nature Lodge in the Heart of Dandeli",
    "location": "Banks of the Kali River, Dandeli, Karnataka",
    "seoTitle": "Laguna River Resort Dandeli | Rooms, Booking & Prices",
    "seoDescription": "Book your stay at Laguna River Resort in Dandeli. Enjoy premium rooms, rustic bamboo cottages, kayaking, boating, and a swimming pool. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Laguna River Resort is a premium nature getaway nestled directly on the scenic banks of the Kali River in Dandeli. Surrounded by towering trees and lush tropical gardens, the resort is designed to offer a perfect balance of exhilarating adventure and peaceful relaxation. Guests can choose from elegant premium river-view rooms with private balconies, rustic and eco-friendly bamboo cottages that blend seamlessly with nature, and group dormitories. Laguna River Resort is widely known for its warm hospitality, excellent buffet meals featuring local flavors, and a beautiful swimming pool. Whether you want to enjoy a calming campfire, walk along guided nature trails, or experience thrilling water sports right at your doorstep, Laguna River Resort provides an enchanting jungle experience.",
    "heroImage": "/resort photos/Laguna River Resort/lawn2.jpg",
    "collageImages": [
      "/resort photos/Laguna River Resort/lawn2.jpg",
      "/resort photos/Laguna River Resort/bamboo4.jpg",
      "/resort photos/Laguna River Resort/img1-1024x683.jpg",
      "/resort photos/Laguna River Resort/lawn2-1024x682.jpg",
      "/resort photos/Laguna River Resort/lawn3-1024x681.jpg.bv.webp",
      "/resort photos/Laguna River Resort/premium2-1024x683.jpg.bv.webp",
      "/resort photos/Laguna River Resort/premium5-1024x682.jpg"
    ],
    "rooms": [
      {
        "category": "Premium Room (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Room (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Bamboo Cottage (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Bamboo Cottage (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Dormitory Group Stay",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "silver-bill-resorts-dandeli",
    "name": "Silver Bill Resorts Dandeli",
    "youtubeUrl": "https://www.youtube.com/watch?v=AeeeRQRnByo",
    "tagline": "Luxury Riverside Escape & Adventure Sanctuary on the Kali River",
    "location": "Ganeshgudi, on the banks of the Kali River, Dandeli, Karnataka",
    "seoTitle": "Silver Bill Resorts Dandeli | VIP Suites, Tents & River Views",
    "seoDescription": "Book your stay at Silver Bill Resorts in Dandeli. Enjoy VIP suites, wooden cottages, dome AC rooms, kayaking, boating, and a swimming pool. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Silverbill Resorts is a premium nature retreat beautifully situated on the banks of the Kali River in Ganeshgudi, Dandeli. Positioned amidst the scenic Western Ghats, the resort is designed to offer a spectacular blend of luxury, natural beauty, and thrilling adventure. Guests can choose from a range of luxurious options including spacious VIP Suites, rustic Wooden Cottages, Premium River-Facing Rooms (AC and Non-AC with coolers), and modern, river-facing Dome AC rooms for a unique experience. Silverbill Resorts is famous for its gorgeous infinity swimming pool overlooking the jungle, lively bonfire nights with music, and a multi-cuisine restaurant serving local delicacies. With immediate access to water sports like kayaking, boating, and river rafting, Silverbill Resorts is the ultimate luxury sanctuary in Dandeli.",
    "heroImage": "/resort photos/Silver Bill Resorts Dandeli/unnamed (7).webp",
    "collageImages": [
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (7).webp",
      "/resort photos/Silver Bill Resorts Dandeli/a1e158_2696255bd9a84021b84805098e22997c~mv2.avif",
      "/resort photos/Silver Bill Resorts Dandeli/a1e158_a6cebbbcaed54b50a6c94ff0abd5db7e~mv2.avif",
      "/resort photos/Silver Bill Resorts Dandeli/silverbill resorts.avif",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (1).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (2).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (3).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (4).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (5).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (6).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (8).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed (9).webp",
      "/resort photos/Silver Bill Resorts Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "VIP Suite",
        "price": "₹5,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Wooden Cottage",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Non-AC Room facing River (with Cooler)",
        "price": "₹3,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Room AC facing River",
        "price": "₹4,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Suite Room AC",
        "price": "₹3,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Dome AC facing River",
        "price": "₹5,500",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Boating",
      "Kayaking",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming Pool",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek",
      "Rain Dance",
      "Rope Activities"
    ]
  },
  {
    "slug": "bison-river-resort-dandeli",
    "name": "Bison River Resort Dandeli",
    "tagline": "Riverside Wilderness Lodge & Adventure Gateway on the Kali River",
    "location": "Ganeshgudi, near Dandeli, Karnataka",
    "seoTitle": "Bison River Resort Dandeli | Packages, Stays & Water Sports",
    "seoDescription": "Book your stay at Bison River Resort in Dandeli. Enjoy budget packages, family stays, jumbo group packages, kayaking, rafting, and wildlife tours. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Bison River Resort is a premier, well-established wilderness lodge situated in Ganeshgudi, Dandeli, along the majestic banks of the Kali River. Spread across a sprawling 5-acre estate, the resort offers 33 beautifully designed cottages with private balconies overlooking the flowing river and the surrounding lush forest canopy. Ideal for nature lovers, families, and large groups, Bison River Resort provides the perfect base to explore the rich biodiversity of the Dandeli Wildlife Sanctuary. Guests can enjoy a wide array of activities including professional white water rafting, kayaking, bird watching, and guided jungle treks. With its cozy accommodations, multi-cuisine restaurant, swimming pool, and relaxing bonfire nights, Bison River Resort guarantees a memorable forest getaway.",
    "heroImage": "/resort photos/Bison River Resort Dandeli/unnamed.webp",
    "collageImages": [
      "/resort photos/Bison River Resort Dandeli/unnamed (1).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (2).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (3).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (4).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (5).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (6).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (7).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (8).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (9).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (10).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (11).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed (12).webp",
      "/resort photos/Bison River Resort Dandeli/unnamed.jpg",
      "/resort photos/Bison River Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Budget Package",
        "price": "₹2,700",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Family Package",
        "price": "₹3,500",
        "note": "per person per night"
      },
      {
        "category": "Jumbo Package (Min. 6 People) - 2 Nights Stay",
        "price": "₹6,750",
        "note": "per person total"
      },
      {
        "category": "Jumbo Package (Min. 6 People) - 3 Nights Stay",
        "price": "₹9,750",
        "note": "per person total"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming",
      "River Rafting"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "white-water-resort-dandeli",
    "name": "White Water Resort Dandeli",
    "tagline": "The Ultimate Water Sports Hub & Forest Escape on the Kali River",
    "location": "Ganeshgudi area near Supa Dam, Dandeli, Karnataka",
    "seoTitle": "White Water Resort Dandeli | Stays, Prices & River Rafting",
    "seoDescription": "Book your stay at White Water Resort in Dandeli. Premium river view rooms, family rooms, dormitories, white water rafting, and outdoor adventure. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "White Water Resort in Dandeli is a premier eco-destination and adventure hub nestled in the Ganeshgudi region near Supa Dam. Framed by the magnificent forests of the Western Ghats and located right beside the roaring Kali River, the resort is a haven for water sports enthusiasts and nature lovers. Guests can choose from comfortable premium river-view rooms, spacious premium family rooms, and group dormitories. Highly acclaimed for its adventure offerings, White Water Resort provides guests with direct access to white-water rafting, kayaking, natural jacuzzi baths, and coracle rides. With an on-site aqua park, vibrant evening bonfires, and a multi-cuisine restaurant serving local buffet meals, it promises a perfect mix of excitement and tranquility.",
    "heroImage": "/resort photos/White Water Resort Dandeli/unnamed.webp",
    "collageImages": [
      "/resort photos/White Water Resort Dandeli/unnamed (1).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (2).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (3).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (4).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (5).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (6).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (7).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (8).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (9).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (10).webp",
      "/resort photos/White Water Resort Dandeli/unnamed (11).webp",
      "/resort photos/White Water Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium River View Room",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Family Room",
        "price": "₹2,200",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹1,800",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "White-Water Rafting",
      "Kayaking",
      "Natural Jacuzzi Bath",
      "Coracle Rides",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "century-resort-dandeli",
    "name": "Century Resort Dandeli",
    "tagline": "Premium Nature Retreat & Swiss Camp Stay in the Western Ghats",
    "location": "Kogilban Village, Dandeli, Karnataka",
    "seoTitle": "Century Resort Dandeli | Rooms, Prices & Swiss Tents",
    "seoDescription": "Book your stay at Century Resort in Dandeli. Enjoy premium wooden cottages, Maharaja tents, AC dormitories, kayaking, and a swimming pool. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Century Resort in Dandeli is a tranquil, forest-themed getaway located in the quiet Kogilban village area, close to the banks of the Kali River. Tucked deep within the rich ecosystems of the Western Ghats, the resort provides an idyllic retreat for families, couples, and corporate groups looking to experience nature in comfort. The resort features premium wooden cottages, luxurious Maharaja tents, and spacious group dormitories. Guests can enjoy a wide range of on-site amenities including a beautiful swimming pool, children's play area, guided nature walks, and evening campfires. Century Resort is also perfectly situated for exploring local attractions like the Kali Tiger Reserve, Kavala Caves, and Supa Dam, and offers easy booking for river rafting, kayaking, and jeep safaris.",
    "heroImage": "/resort photos/Century Resort Dandeli/unnamed (6).webp",
    "collageImages": [
      "/resort photos/Century Resort Dandeli/unnamed (1).webp",
      "/resort photos/Century Resort Dandeli/unnamed (2).webp",
      "/resort photos/Century Resort Dandeli/unnamed (3).webp",
      "/resort photos/Century Resort Dandeli/unnamed (4).webp",
      "/resort photos/Century Resort Dandeli/unnamed (5).webp",
      "/resort photos/Century Resort Dandeli/unnamed (6).webp",
      "/resort photos/Century Resort Dandeli/unnamed (7).webp",
      "/resort photos/Century Resort Dandeli/unnamed (8).webp",
      "/resort photos/Century Resort Dandeli/unnamed (9).webp",
      "/resort photos/Century Resort Dandeli/unnamed (10).webp",
      "/resort photos/Century Resort Dandeli/unnamed (11).webp",
      "/resort photos/Century Resort Dandeli/unnamed (12).webp",
      "/resort photos/Century Resort Dandeli/unnamed (13).webp",
      "/resort photos/Century Resort Dandeli/unnamed (14).webp",
      "/resort photos/Century Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Double Sharing Cottage",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Triple & Quad Sharing Cottage",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Maharaja Tent (Double Sharing)",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Maharaja Tent (Triple & Quad Sharing)",
        "price": "₹2,300",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Coracle Ride"
    ],
    "commonActivities": [
      "Swimming Pool",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek",
      "Zipline",
      "Burma Bridge"
    ]
  },
  {
    "slug": "starling-river-resort-dandeli",
    "name": "Starling River Resort Dandeli",
    "tagline": "Elegant 3-Star Jungle Lodge & Riverside Sanctuary",
    "location": "Sakshalli Village, Harnoda Gram, Dandeli, Karnataka",
    "seoTitle": "Starling River Resort Dandeli | Booking, Rooms & Tariff",
    "seoDescription": "Book your stay at Starling River Resort in Dandeli. Premium AC rooms, luxury AC cottages, river view safari tents, and a swimming pool. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Starling River Resort is an elegant 3-star forest retreat situated in Sakshalli Village, Dandeli, along the peaceful banks of the Kali River. Nestled in a lush, green woodland, this resort offers a perfect escape for travelers wanting comfort in the wilderness. Starling River Resort features well-appointed premium AC rooms, luxury AC cottages, scenic river-view safari tents, and spacious group AC dormitories. The resort offers an on-site swimming pool, garden space, a multi-cuisine restaurant, and a dedicated river dock for fishing. Guests can enjoy a wide array of activities including archery, table tennis, volleyball, and guided nature trails, or experience river rafting and ziplining nearby. Starling River Resort provides a scenic, comfortable base for an unforgettable jungle adventure.",
    "heroImage": "/resort photos/Starling River Resort Dandeli/unnamed (1).webp",
    "collageImages": [
      "/resort photos/Starling River Resort Dandeli/unnamed (1).webp",
      "/resort photos/Starling River Resort Dandeli/unnamed (2).webp",
      "/resort photos/Starling River Resort Dandeli/unnamed (3).webp",
      "/resort photos/Starling River Resort Dandeli/unnamed (4).webp",
      "/resort photos/Starling River Resort Dandeli/unnamed (5).webp",
      "/resort photos/Starling River Resort Dandeli/unnamed (6).webp",
      "/resort photos/Starling River Resort Dandeli/unnamed (7).webp",
      "/resort photos/Starling River Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium AC Room (Double Sharing)",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium AC Room (Triple & Quad Sharing)",
        "price": "₹2,400",
        "note": "per person per night"
      },
      {
        "category": "Luxury AC Cottage (Double Sharing)",
        "price": "₹2,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Luxury AC Cottage (Triple & Quad Sharing)",
        "price": "₹2,200",
        "note": "per person per night"
      },
      {
        "category": "River View Safari Tent (Double Sharing)",
        "price": "₹2,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "River View Safari Tent (Triple & Quad Sharing)",
        "price": "₹2,200",
        "note": "per person per night"
      },
      {
        "category": "AC Dormitory Group Stay",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Coracle Ride"
    ],
    "commonActivities": [
      "Swimming Pool",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek",
      "Zipline",
      "Rope Activities"
    ]
  },
  {
    "slug": "woodpecker-resort-dandeli",
    "name": "Woodpecker Resort Dandeli",
    "tagline": "Luxury Eco-Resort & Spa Nestled in the Ganeshgudi Forests",
    "location": "Ganeshgudi forest region, Dandeli, Karnataka",
    "seoTitle": "Woodpecker Resort Dandeli | Premium Rooms & Booking",
    "seoDescription": "Book your luxury stay at Woodpecker Resort in Dandeli. Enjoy premium riverside rooms, pool view AC cottages, AC dormitories, adventure rides, and river sports. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Woodpecker Resort Dandeli (also known as Woodpecker Exotica) is a luxury, eco-friendly retreat located in the lush, green Ganeshgudi forest area. Designed to blend high-end comfort with raw nature, the resort offers an extraordinary escape for families, couples, and adventure lovers. The property features premium riverside view rooms, double cottages, 3-4 sharing rooms, triple & quad cottages, and spacious group dormitories. In addition to a beautiful outdoor swimming pool, jacuzzi, and spa, Woodpecker features exclusive adventure rides including a 360-cycle ride, gyro rides, and a bungee ejector. With quick access to guided jungle treks, bird watching, and river rafting on the Kali River, Woodpecker Resort offers a truly exotic and memorable jungle stay in Dandeli.",
    "heroImage": "/resort photos/Woodpecker Resort Dandeli/unnamed (2).webp",
    "collageImages": [
      "/resort photos/Woodpecker Resort Dandeli/unnamed (1).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (2).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (3).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (4).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (5).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (6).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (7).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (8).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (9).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (10).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (11).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (12).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (13).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (14).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (15).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (16).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed (17).webp",
      "/resort photos/Woodpecker Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "River Side Room",
        "price": "₹4,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "3-4 Sharing Room",
        "price": "₹3,800",
        "note": "per person per night"
      },
      {
        "category": "Double Sharing Room",
        "price": "₹3,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Triple & Quad Sharing Room",
        "price": "₹3,000",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹2,500",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "aarkay-resort-dandeli",
    "name": "Aarkay Resort Dandeli",
    "tagline": "Luxury Infinity Stay & Jungle Streams in Gavegali Forests",
    "location": "Joida Road near Gavegali, Dandeli, Karnataka",
    "seoTitle": "Aarkay Resort Dandeli | Rooms, Prices & Infinity Pool",
    "seoDescription": "Book your stay at Aarkay Resort in Dandeli. Enjoy premium river view rooms, family rooms, dormitories, an infinity swimming pool, and kayaking. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Aarkay Resort is a premier, luxury-themed nature destination located on Joida Road near Gavegali in Dandeli. Set in the heart of dense forest ecosystems, the resort features a spectacular infinity swimming pool overlooking the lush canopy and direct access to natural jungle streams. Guests can choose from a range of high-end rooms including Premium River View Rooms, Premium Family Rooms, and AC Dormitories. Famous for its soulful jungle atmosphere and exceptional hospitality, Aarkay Resort offers guests comprehensive packages covering meals, pool access, bonfire evenings, rain dance, and exciting river activities like kayaking and boating.",
    "heroImage": "/resort photos/Aarkay Resort Dandeli/unnamed (14).webp",
    "collageImages": [
      "/resort photos/Aarkay Resort Dandeli/unnamed (1).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (2).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (3).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (4).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (5).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (6).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (7).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (8).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (9).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (10).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (11).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (12).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (13).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (14).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (15).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed (16).webp",
      "/resort photos/Aarkay Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium River View Room",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Family Room",
        "price": "₹2,200",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹1,800",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "dew-drop-resort-dandeli",
    "name": "Dew Drop Resort Dandeli",
    "tagline": "Soulful Forest-Edge Lodge & Affordable Camp Stay in Dandeli",
    "location": "Kogilban Road, near Kali River Bridge, Dandeli, Karnataka",
    "seoTitle": "Dew Drop Resort Dandeli | Rooms, Packages & Prices",
    "seoDescription": "Book your budget stay at Dew Drop Resort in Dandeli. AC deluxe rooms, commando cottages, camping tents, kayaking, and campfires. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Dew Drops Jungle Resort is a popular, budget-friendly forest getaway situated on Kogilban Road in Dandeli, near the Kali River. Famous for its soulful forest-edge location and vibrant atmosphere, the resort is a favorite choice for students, corporate teams, and families seeking an affordable jungle experience without compromising on adventure. The resort offers comfortable AC Deluxe Rooms, rustic Commando Cottages, and adventure-themed Camping Tents. Guests can enjoy a wide array of activities including an outdoor swimming pool, rain dance with DJ music, archery, cycling, and exciting river activities like kayaking and zorbing. Offering full-board packages that include delicious local buffet meals and bonfire setups, Dew Drop Resort ensures a memorable and fun-filled holiday.",
    "heroImage": "/resort photos/Dew Drop Resort Dandeli/unnamed.webp",
    "collageImages": [
      "/resort photos/Dew Drop Resort Dandeli/unnamed (1).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed (2).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed (3).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed (4).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed (5).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed (6).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed (7).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed (8).webp",
      "/resort photos/Dew Drop Resort Dandeli/unnamed.jpg",
      "/resort photos/Dew Drop Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "AC Deluxe Room",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Commando Cottage",
        "price": "₹2,200",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Camping Tent",
        "price": "₹1,800",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming",
      "Natural Jacuzzi Bath"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "ansh-river-resort-dandeli",
    "name": "Ansh River Resort Dandeli",
    "tagline": "Tranquil Riverside Retreat & Adventure Park on the Kali River",
    "location": "Banks of the Kali River, Dandeli, Karnataka",
    "seoTitle": "Ansh River Resort Dandeli | Stays, Booking & Prices",
    "seoDescription": "Book your jungle getaway at Ansh River Resort in Dandeli. Premium rooms, bamboo cottages, AC dormitories, kayaking, and safaris. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Ansh River Resort is a serene nature retreat set along the picturesque banks of the Kali River in Dandeli. Located amidst the lush greenery of the Western Ghats forest, this resort is designed to provide guests with a perfect mix of peaceful relaxation and outdoor adventure. Guests can choose from comfortable premium rooms, eco-friendly bamboo cottages, and group dormitories. Ansh River Resort features a beautiful outdoor swimming pool, a restaurant serving home-style vegetarian and non-vegetarian food, bonfire areas, and a variety of indoor and outdoor games. With excellent access to river activities like kayaking, boating, and white-water rafting, it offers a complete and refreshing Dandeli wilderness experience.",
    "heroImage": "/resort photos/Ansh River Resort Dandeli/unnamed.webp",
    "collageImages": [
      "/resort photos/Ansh River Resort Dandeli/unnamed (1).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (2).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (3).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (4).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (5).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (6).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (7).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (8).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (9).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (10).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (11).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (12).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (13).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (14).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (15).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed (16).webp",
      "/resort photos/Ansh River Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium Room (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Room (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Bamboo Cottage (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Bamboo Cottage (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "parampara-resort-dandeli",
    "name": "Parampara Resort Dandeli",
    "tagline": "Traditional Heritage-Inspired Cottages & Adventure Resort",
    "location": "Ganeshgudi Forest Area, Dandeli, Karnataka",
    "seoTitle": "Parampara Resort Dandeli | Rooms, Heritage Stays & Booking",
    "seoDescription": "Book your stay at Parampara Resort in Dandeli. Premium view cottages, family rooms, dormitories, ziplining, go-karting, and swimming pool. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Parampara Cottages (Parampara Resort) is a unique, heritage-inspired jungle getaway in Dandeli. Meaning 'tradition,' the resort honors its name through its charming traditional architecture, warm local hospitality, and a welcoming atmosphere that makes it highly popular among multi-generational families. The resort features premium view rooms, spacious family rooms, and group dormitories. Guests can enjoy a wide array of activities including a scenic swimming pool, an open-air bath, a children's club, and a multi-cuisine restaurant serving authentic regional flavors. For adventure seekers, Parampara offers a comprehensive package with ziplining, river crossing, jungle trekking, and river activities like kayaking and boating.",
    "heroImage": "/resort photos/Parampara Resort Dandeli/unnamed (13).webp",
    "collageImages": [
      "/resort photos/Parampara Resort Dandeli/unnamed (1).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (2).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (3).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (4).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (5).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (6).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (7).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (8).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (9).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (10).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (11).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (12).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed (13).webp",
      "/resort photos/Parampara Resort Dandeli/unnamed.jpg",
      "/resort photos/Parampara Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium View Room",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Family Room",
        "price": "₹2,200",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹1,800",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "nadimane-resort-dandeli",
    "name": "Nadimane Resort Dandeli",
    "tagline": "Eco-Friendly Jungle Retreat & Riverside Cottages in Dandeli",
    "location": "Joida Road near Gavegali, Dandeli, Karnataka",
    "seoTitle": "Nadimane Resort Dandeli | Booking, Cottages & Prices",
    "seoDescription": "Book your eco-stay at Nadimane Resort in Dandeli. Enjoy premium rooms, bamboo cottages, dormitories, Burma bridge, and kayaking. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Nadimane Resort (also known as Nadi Mane Cottages) is an eco-friendly jungle retreat nestled in the dense forests of Dandeli, offering guests a direct connection to nature. The resort features rustic river view deluxe cottages, eco-friendly bamboo cottages, and spacious dormitories designed to blend comfort with nature. Known for its genuine hospitality and peaceful surroundings, Nadimane Resort is a haven for nature lovers and families seeking peace. The property features natural forest walk trails, bird-watching, cycling, and campfires. Guests can participate in a range of adventures including kayaking, boating, ziplining, and Burma bridge.",
    "heroImage": "/resort photos/Nadimane Resort Dandeli/unnamed (1).webp",
    "collageImages": [
      "/resort photos/Nadimane Resort Dandeli/unnamed (1).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (2).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (3).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (4).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (5).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (6).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (7).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (8).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (9).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (10).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (11).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (12).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (13).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (14).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed (15).webp",
      "/resort photos/Nadimane Resort Dandeli/unnamed.jpg",
      "/resort photos/Nadimane Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium Room (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Room (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Bamboo Cottage (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Bamboo Cottage (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "river-edge-resort-dandeli",
    "name": "River Edge Resort Dandeli",
    "tagline": "High-Energy Riverfront Adventure Lodge & Group Stays",
    "location": "Banks of the Kali River, Dandeli, Karnataka",
    "seoTitle": "River Edge Resort Dandeli | Rooms, Rafting & Booking",
    "seoDescription": "Book your adventure stay at River Edge Resort in Dandeli. Premium rooms, bamboo cottages, dormitories, white water rafting, and DJ rain dance. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "River Edge Resort is a vibrant, adventure-centric lodge situated directly on the banks of the Kali River in Dandeli. Regarded as a popular choice for youth groups, corporate getaways, and thrill-seekers, the resort combines high-energy adventure sports with fun relaxation. The resort offers premium rooms, eco-friendly bamboo cottages, and group dormitories. Guests can enjoy panoramic river views, a lively rain dance setup with DJ music, and an outdoor campfire area. River Edge is famous for its comprehensive adventure offerings including white-water rafting, kayaking, coracle rides, rappelling, and night trekking, ensuring an active and exciting jungle vacation.",
    "heroImage": "/resort photos/River Edge Resort Dandeli/unnamed.webp",
    "collageImages": [
      "/resort photos/River Edge Resort Dandeli/unnamed (1).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (2).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (3).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (4).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (5).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (6).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (7).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (8).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (9).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (10).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed (11).webp",
      "/resort photos/River Edge Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium Room (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Room (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Bamboo Cottage (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Bamboo Cottage (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming",
      "Natural Jacuzzi Bath"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "rain-forest-resort-dandeli",
    "name": "Rain Forest Resort Dandeli",
    "tagline": "Immersive Jungle Stay & Monsoon Nature Experience in Ganeshgudi",
    "location": "Ganeshgudi Forest Area, Dandeli, Karnataka",
    "seoTitle": "Rain Forest Resort Dandeli | Rooms, Cottages & Tents",
    "seoDescription": "Book your forest adventure stay at Rain Forest Resort in Dandeli. Enjoy budget cottages, tent stays, deluxe & AC cottages, swimming pool, and rain dance. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Rain Forest Jungle Stay (Rain Forest Resort Dandeli) is a scenic, budget-friendly forest getaway located near the Ganeshgudi water activities area. Surrounded by lush, towering trees, the resort offers an immersive jungle experience that becomes incredibly vibrant during the monsoon season. Guests can choose from a range of comfortable accommodations including standard cottages, adventure-themed camping tents, deluxe cottages, and air-conditioned cottages. The resort features a beautiful swimming pool, a fun-filled rain dance setup, and an on-site restaurant serving hearty buffet meals. Guests can participate in on-site activities like cycling, archery, badminton, and bonfire nights, or venture out to experience white-water rafting, ziplining, and wildlife safaris.",
    "heroImage": "/resort photos/Rain Forest Resort Dandeli/shared-image-5.jpeg",
    "collageImages": [
      "/resort photos/Rain Forest Resort Dandeli/campfire-scaled-1.jpg",
      "/resort photos/Rain Forest Resort Dandeli/Kayaking.webp",
      "/resort photos/Rain Forest Resort Dandeli/shared-image-2.jpeg",
      "/resort photos/Rain Forest Resort Dandeli/shared-image-3.jpeg",
      "/resort photos/Rain Forest Resort Dandeli/shared-image-4.jpeg",
      "/resort photos/Rain Forest Resort Dandeli/shared-image-5.jpeg"
    ],
    "rooms": [
      {
        "category": "Cottage Stay",
        "price": "₹1,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Tent Stay",
        "price": "₹1,400",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Deluxe Cottage Stay",
        "price": "₹2,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "AC Cottage Stay",
        "price": "₹2,200",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "jungle-resort-dandeli",
    "name": "Jungle Resort Dandeli",
    "tagline": "Authentic Eco-Friendly Jungle Stay & Wildlife Adventure Lodge",
    "location": "Deep Forest region, Dandeli, Karnataka",
    "seoTitle": "Jungle Resort Dandeli | Rooms, Cottages & Eco Stays",
    "seoDescription": "Book your forest retreat at Jungle Resort in Dandeli. Enjoy deluxe AC cottages, standard AC cottages, rustic jungle stays, kayaking, and safaris. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Jungle Resort Dandeli is an authentic, eco-friendly nature retreat located deep within the vibrant forests of the Western Ghats. Designed to offer a true jungle experience, the resort helps guests unplug from the modern digital world and reconnect with nature. The resort features comfortable Deluxe AC Cottages, standard AC Cottages, and rustic forest Jungle Stays. Guests can enjoy access to a refreshing outdoor swimming pool, an on-site buffet restaurant serving local multi-cuisine options, and lively evening bonfires. Positioned near the Kali River, the resort acts as a gateway for river activities like kayaking, boating, and white-water rafting, as well as jeep safaris inside the Dandeli Wildlife Sanctuary.",
    "heroImage": "/resort photos/Jungle Resort Dandeli/unnamed (1).webp",
    "collageImages": [
      "/resort photos/Jungle Resort Dandeli/unnamed (1) copy.webp",
      "/resort photos/Jungle Resort Dandeli/unnamed (1).jpg",
      "/resort photos/Jungle Resort Dandeli/unnamed (1).webp",
      "/resort photos/Jungle Resort Dandeli/unnamed (2).webp",
      "/resort photos/Jungle Resort Dandeli/unnamed (3).webp",
      "/resort photos/Jungle Resort Dandeli/unnamed (4).webp",
      "/resort photos/Jungle Resort Dandeli/unnamed (5).webp",
      "/resort photos/Jungle Resort Dandeli/unnamed (6).webp",
      "/resort photos/Jungle Resort Dandeli/unnamed copy.webp",
      "/resort photos/Jungle Resort Dandeli/unnamed.jpg",
      "/resort photos/Jungle Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Deluxe AC Cottage",
        "price": "₹1,900",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "AC Cottage",
        "price": "₹1,700",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Jungle Stay",
        "price": "₹2,100",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "dream-flower-resort-dandeli",
    "name": "Dream Flower Resort Dandeli",
    "tagline": "Luxury Valley Stay & Exquisite Rosewood Cottages in Ganeshgudi",
    "location": "Haregali Village, near Ganeshgudi road, Dandeli, Karnataka",
    "seoTitle": "Dream Flower Resort Dandeli | Rooms, Suites & Booking",
    "seoDescription": "Book your nature getaway at Dream Flower Resort in Dandeli. Enjoy premium rooms, luxury wooden cottages, AC dormitories, swimming pool, and rain dance. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Dream Flower Resort is a premium forest retreat nestled in a lush green valley in Haregali Village, along the Ganeshgudi road in Dandeli. Designed for comfort and immersive nature therapy, the resort is famous for its luxurious teak and rosewood cottages, featuring beautifully detailed local wood craftsmanship. Guests can choose from comfortable premium rooms, scenic bamboo cottages, and spacious group dormitories. The resort features a large outdoor swimming pool, a fun-filled rain dance setup, and an on-site restaurant serving local vegetarian and non-vegetarian cuisines. With guided nature walks, ziplining, campfire nights, and close proximity to Kali River water activities (kayaking, boating, rafting), Dream Flower Resort promises a magical forest stay.",
    "heroImage": "/resort photos/Dream Flower Resort Dandeli/unnamed (5).webp",
    "collageImages": [
      "/resort photos/Dream Flower Resort Dandeli/unnamed (2).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (3).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (4).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (5).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (6).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (7).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (8).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (9).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (10).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (11).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (12).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed (13).webp",
      "/resort photos/Dream Flower Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Premium Room (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Room (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Bamboo Cottage (Double Sharing)",
        "price": "₹3,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Bamboo Cottage (Triple & Quad Sharing)",
        "price": "₹2,600",
        "note": "per person per night"
      },
      {
        "category": "Dormitory Group Stay",
        "price": "₹2,000",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "kings-resort-dandeli",
    "name": "Kings Resort Dandeli",
    "tagline": "Luxury Stone Cottages & Infinity Pool Sanctuary near Dandeli Sanctuary",
    "location": "Dandeli Wildlife Sanctuary area, Dandeli, Karnataka",
    "seoTitle": "Kings Resort Dandeli | Rooms, Stone Cottages & Booking",
    "seoDescription": "Book your luxury stay at Kings Resort in Dandeli. Enjoy pool view cottages, deluxe AC cottages, jungle stays, infinity pool, and rafting. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Kings Resort in Dandeli is a premium, nature-themed getaway located near the majestic Dandeli Wildlife Sanctuary. Artistically constructed using local laterite stone and eco-friendly materials, the resort is designed to blend seamlessly with the surrounding forest ecosystem. Guests can choose from a range of high-end accommodations including pool-view cottages, deluxe AC cottages, standard AC cottages, and immersive jungle stays. The resort features a spectacular infinity swimming pool, a dedicated baby pool, a relaxing jacuzzi, and an open-air restaurant serving fresh regional buffet dishes. With quick access to white-water rafting on the Kali River, kayaking, and guided wildlife safaris, Kings Resort offers a truly royal wilderness experience.",
    "heroImage": "/resort photos/Kings Resort Dandeli/unnamed (6).webp",
    "collageImages": [
      "/resort photos/Kings Resort Dandeli/unnamed (2).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (3).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (4).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (5).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (6).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (7).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (8).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (9).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (10).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (11).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (12).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (13).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (14).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (15).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (16).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (17).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (18).webp",
      "/resort photos/Kings Resort Dandeli/unnamed (19).webp",
      "/resort photos/Kings Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Jungle Stay",
        "price": "₹1,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Deluxe AC Cottage",
        "price": "₹1,700",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "AC Cottage",
        "price": "₹1,500",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "wildernest-jungle-resort",
    "name": "Wildernest Jungle Resort",
    "tagline": "Authentic Group Getaway & Budget Jungle Stay in Hassanmaad",
    "location": "Hassanmaad, Ambewadigram, near Dandeli, Karnataka",
    "seoTitle": "Wildernest Jungle Resort Dandeli | Rooms, Tents & Prices",
    "seoDescription": "Book your budget stay at Wildernest Jungle Resort in Dandeli. Enjoy red stone cottages, commando cottages, camping tents, kayaking, and safaris. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Wildernest Jungle Resort is a budget-friendly, forest-integrated property situated in the Hassanmaad area near Ambewadigram, Dandeli. Located just a short distance from the main town, the resort provides an authentic jungle vibe where spotted deer are frequently seen wandering through the property grounds. Designed specifically for budget travelers, student groups, and corporate getaways, Wildernest offers spacious Red Stone Cottages (ideal for large group sharing up to 11 people), rustic Commando Cottages, and adventure-themed Jungle Camping Tents. The resort features a swimming pool, open campfire areas, and an on-site restaurant serving homely local food. Guests can easily access river activities like kayaking, boating, and white-water rafting, as well as guided night forest trails.",
    "heroImage": "/resort photos/wildernest jungle resort/unnamed (2).webp",
    "collageImages": [
      "/resort photos/wildernest jungle resort/unnamed (2).webp",
      "/resort photos/wildernest jungle resort/unnamed (3).webp",
      "/resort photos/wildernest jungle resort/unnamed (4).webp",
      "/resort photos/wildernest jungle resort/unnamed (5).webp",
      "/resort photos/wildernest jungle resort/unnamed (6).webp",
      "/resort photos/wildernest jungle resort/unnamed (7).webp",
      "/resort photos/wildernest jungle resort/unnamed (8).webp",
      "/resort photos/wildernest jungle resort/unnamed (9).webp",
      "/resort photos/wildernest jungle resort/unnamed (10).webp",
      "/resort photos/wildernest jungle resort/unnamed (11).webp",
      "/resort photos/wildernest jungle resort/unnamed (12).webp",
      "/resort photos/wildernest jungle resort/unnamed (13).webp",
      "/resort photos/wildernest jungle resort/unnamed (14).webp",
      "/resort photos/wildernest jungle resort/unnamed (15).webp",
      "/resort photos/wildernest jungle resort/unnamed (16).webp",
      "/resort photos/wildernest jungle resort/unnamed.jpg",
      "/resort photos/wildernest jungle resort/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Red Stone Cottages (11 Sharing)",
        "price": "₹999",
        "note": "per person per night"
      },
      {
        "category": "Commando Cottages",
        "price": "₹999",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Jungle Camping Tents",
        "price": "₹999",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "tusker-trails-resort-dandeli",
    "name": "Tusker Trails Resort Dandeli",
    "tagline": "Scenic Lakeside Escape & Luxury Infinity Pool Stay in Usoda",
    "location": "Usoda area, Dandeli, Karnataka",
    "seoTitle": "Tusker Trails Resort Dandeli | Rooms, Cottages & Booking",
    "seoDescription": "Book your lakeside getaway at Tusker Trails Resort in Dandeli. Enjoy AC Deluxe Rooms, Maharaja & Wooden Cottages, an infinity swimming pool, and water sports. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Tusker Trails Resort is a premier, lakeside getaway nestled in the scenic Usoda region of Dandeli. Surrounded by dense teak-wood plantations and beautiful forest valleys, the resort is designed to offer a peaceful wilderness sanctuary with top-tier comforts. The resort features a spectacular infinity swimming pool offering panoramic mountain views, a fun rain dance arena with DJ music, and an open campfire area. Guests can choose from high-end accommodations including AC Deluxe Rooms, Maharaja Cottages, and rustic Wooden Cottages. Tusker Trails serves as an active hub for nature adventures, offering guided jungle trekking, ziplining, archery, and lake sports like kayaking, boating, and zorbing.",
    "heroImage": "/resort photos/Tusker Trails Resort Dandeli/unnamed (17).webp",
    "collageImages": [
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (2).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (3).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (4).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (5).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (6).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (7).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (8).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (9).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (10).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (11).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (12).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (13).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (14).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (15).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (16).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed (17).webp",
      "/resort photos/Tusker Trails Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "AC Deluxe Room",
        "price": "₹2,200",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Wooden Cottage",
        "price": "₹2,000",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Maharaja Cottage",
        "price": "₹1,800",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "hornbill-river-resort-dandeli",
    "name": "Hornbill River Resort Dandeli",
    "tagline": "Rustic Riverside Wildlife Lodge & Natural Jacuzzi Haven in Ganeshgudi",
    "location": "Ganeshgudi forest area, near Kali River, Dandeli, Karnataka",
    "seoTitle": "Hornbill River Resort Dandeli | Riverside Rooms & Tariff",
    "seoDescription": "Book your stay at Hornbill River Resort in Dandeli. Premium river side rooms, multi-sharing cottages, natural jacuzzi, white water rafting, and birdwatching. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Hornbill River Resort is a world-renowned, nature-centric lodge situated along the roaring banks of the Kali River in Ganeshgudi, Dandeli. Named after the magnificent Hornbills that flock to the surrounding jungle canopy, the resort is a sanctuary for birdwatchers, nature enthusiasts, and adventure seekers. The resort offers rustic riverside cottages, cozy multi-sharing rooms, double suites, and large group dormitories. Highly acclaimed for its immediate river access, Hornbill features its own 'natural jacuzzi' lagoon with gentle rapids, a dedicated bonfire arena, and open-air dining. Guests can experience professional white-water rafting, kayaking, coracle rides, rappelling, and guided forest safaris in the Kali Tiger Reserve.",
    "heroImage": "/resort photos/Hornbill River Resort Dandeli/unnamed.webp",
    "collageImages": [
      "/resort photos/Hornbill River Resort Dandeli/unnamed (2).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (3).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (4).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (5).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (6).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (7).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (8).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (9).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (10).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed (11).webp",
      "/resort photos/Hornbill River Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "River Side Room",
        "price": "₹4,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "3-4 Sharing Room",
        "price": "₹3,800",
        "note": "per person per night"
      },
      {
        "category": "Double Sharing Room",
        "price": "₹3,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Triple & Quad Sharing Room",
        "price": "₹3,000",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹2,500",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Natural Jacuzzi Rapid Bath",
      "White-Water Rafting",
      "Kayaking",
      "Boating",
      "Coracle Rides",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "mantra-jungle-resort-dandeli",
    "name": "Mantra Jungle Resort Dandeli",
    "tagline": "Eco-Luxury Wellness Sanctuary & Rainforest Retreat",
    "location": "Dandeli Rainforest Area, Karnataka",
    "seoTitle": "Mantra Jungle Resort Dandeli | Rooms, Packages & Booking",
    "seoDescription": "Book your eco-luxury stay at Mantra Jungle Resort in Dandeli. Enjoy premium view rooms, family rooms, dormitories, meditation sessions, and safaris. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Mantra Jungle Resort (also known as Mantraa Jungle Resort) is an eco-luxury, wellness-oriented sanctuary nestled in the heart of the dense Dandeli rainforest. Committed to sustainable living and zero-waste operations, the resort offers a mindful escape designed for rest, reflection, and rejuvenation. The resort features premium view rooms, spacious family rooms, and group dormitories. Guests can enjoy a tranquil, meditative environment complete with guided jungle trekking, on-site yoga and meditation sessions, and healthy chef-prepared buffet meals. For those seeking adventure, Mantra serves as a perfect base for white-water rafting, kayaking, and open-top 4x4 jungle safaris in the Kali Tiger Reserve.",
    "heroImage": "/resort photos/Mantra Jungle Resort Dandeli/overview3.jpg.bv.webp",
    "collageImages": [
      "/resort photos/Mantra Jungle Resort Dandeli/bathroom1.jpg.bv.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/dinning1.jpg.bv.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/jungle-path.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/outing2.jpg.bv.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/overview3.jpg.bv.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/pool1.jpg.bv.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/pool2.jpg.bv.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/room2.jpg.bv.webp",
      "/resort photos/Mantra Jungle Resort Dandeli/room4.jpg.bv.webp"
    ],
    "rooms": [
      {
        "category": "Premium View Room",
        "price": "₹2,800",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Premium Family Room",
        "price": "₹2,200",
        "note": "per person per night"
      },
      {
        "category": "Dormitory",
        "price": "₹1,800",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "whistling-woodzs-jungle-resort-in-dandeli",
    "name": "Whistling Woodzs Jungle Resort in Dandeli",
    "tagline": "Premier 7-Acre Riverside Wilderness & Adventure Resort in Ganeshgudi",
    "location": "Badgund Village, Ganeshgudi, Dandeli, Karnataka",
    "seoTitle": "Whistling Woodzs Jungle Resort | Executive Stays & Suites",
    "seoDescription": "Book your luxury stay at Whistling Woodzs Jungle Resort in Dandeli. Enjoy Executive Premium Cottages, Executive Rooms, Penthouse Suites, and Executive Suites with Terraces. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Whistling Woodzs Jungle Resort (also known as Whistling Woodzs Wilderness Resort) is a premier 7-acre nature destination situated along the beautiful banks of the Kali River in Ganeshgudi, Dandeli. Framed by the majestic peaks and lush forests of the Western Ghats, this high-end resort is designed to provide guests with a perfect blend of high-energy adventure and deep forest relaxation. Guests can choose from a range of luxury accommodations including Executive Premium Cottages, Executive Rooms, Penthouse Suites, and Executive Suites with Terraces. The resort features a swimming pool, a central food court serving local delicacies, indoor and outdoor game arenas, and a dedicated spa. Highly acclaimed for its direct access to white-water rafting, kayaking, and guided jungle safaris, it ensures an unforgettable forest experience.",
    "heroImage": "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (9).webp",
    "collageImages": [
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (2).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (3).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (4).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (5).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (6).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (7).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (8).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (9).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (10).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (11).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (12).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (13).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (14).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (15).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (16).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (17).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (18).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (19).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (20).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (21).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (22).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed (23).webp",
      "/resort photos/Whistling Woodzs Jungle Resort in Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Executive Premium Cottage",
        "price": "₹22,500 + GST",
        "note": "per night (double occupancy)"
      },
      {
        "category": "Executive Room",
        "price": "₹12,600",
        "note": "per night (double occupancy)"
      },
      {
        "category": "Penthouse Suite",
        "price": "₹17,550 + GST",
        "note": "per night (double occupancy)"
      },
      {
        "category": "Executive Suite with Terrace",
        "price": "₹18,500 + GST",
        "note": "per night (double occupancy)"
      }
    ],
    "riverActivities": [
      "White-Water Rafting",
      "Kayaking",
      "Boating",
      "Coracle Rides",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "rajhans-retreat-resort-dandeli",
    "name": "Rajhans Retreat Resort Dandeli",
    "tagline": "Eco-Adventure Getaway & Luxury Glass House Stays in the Western Ghats",
    "location": "Haliyal Road, Dandeli, Karnataka",
    "seoTitle": "Rajhans Retreat Resort Dandeli | Glass Houses & Cottages",
    "seoDescription": "Book your luxury forest stay at Rajhans Retreat in Dandeli. Enjoy glass house couple rooms, triangle wooden cottages, AC deluxe cottages, pool, and safaris. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Rajhans Retreat is a popular, high-end adventure resort located along Haliyal Road in Dandeli. Encircled by the pristine forests and scenic landscapes of the Western Ghats, the resort provides an outstanding sanctuary for families, couples, and nature lovers. Rajhans Retreat is famous for its innovative accommodations, including Glass House Couple Rooms, Glass Houses for 4-Sharing, AC Triangle Wooden Cottages, A-Frame Wooden Cottages, AC Deluxe Cottages, and Maharaja Cottages. Guests can unwind in the resort's swimming pool, enjoy lively campfire evenings with music, and dine on local delicacies at the buffet restaurant. Offering excellent access to white-water rafting, kayaking, birdwatching, and jungle safaris, Rajhans Retreat guarantees a spectacular forest holiday.",
    "heroImage": "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (20).webp",
    "collageImages": [
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (2).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (3).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (4).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (5).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (6).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (7).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (8).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (9).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (10).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (11).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (12).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (13).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (14).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (15).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (16).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (17).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (18).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (19).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed (20).webp",
      "/resort photos/Rajhans Retreat Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "Glass House Couple Room",
        "price": "₹2,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Glass House for 4 Sharing",
        "price": "₹2,500",
        "note": "per person per night"
      },
      {
        "category": "AC Wooden Hut Cottage",
        "price": "₹2,700",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "A Frame Wooden Cottage",
        "price": "₹2,600",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "AC Deluxe Cottage",
        "price": "₹2,500",
        "note": "per person per night (2 sharing)"
      },
      {
        "category": "Maharaja Cottage",
        "price": "₹1,800",
        "note": "per person per night (2 sharing)"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  },
  {
    "slug": "parijat-resort-dandeli",
    "name": "Parijat Resort Dandeli",
    "tagline": "Peaceful Forest Retreat & Organic Countryside Homestay",
    "location": "Outskirts of Dandeli (approx. 7 km from town), Karnataka",
    "seoTitle": "Parijat Resort Dandeli | Cottages, Stays & Booking",
    "seoDescription": "Book your stay at Parijat Resort in Dandeli. Enjoy cozy AC cottages, group dormitories, organic farm views, a swimming pool, and nature walks. 11:30 AM - 10:30 AM (23 Hours).",
    "description": "Parijat Cottages (Parijat Resort Dandeli) is a nature-focused 10-acre estate that beautifully integrates dense forest landscapes with organic rice fields. Located on the outskirts of Dandeli (around 7 km from town), the resort offers a peaceful countryside ambiance and a warm, homely atmosphere. Guests can choose from cozy, soundproofed AC cottages and spacious group dormitories. The resort features a seasonal outdoor swimming pool, archery setups, hiking paths, and an on-site restaurant serving delicious local cuisines. With custom bonfire nights, karaoke, and direct bookings for river adventures like rafting and kayaking, Parijat Resort is an excellent pick for families and couples wanting to unplug in comfort.",
    "heroImage": "/resort photos/Parijat Resort Dandeli/unnamed (13).webp",
    "collageImages": [
      "/resort photos/Parijat Resort Dandeli/unnamed (2).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (3).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (4).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (5).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (6).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (7).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (8).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (9).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (10).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (11).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (12).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (13).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (14).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (15).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (16).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed (17).webp",
      "/resort photos/Parijat Resort Dandeli/unnamed.webp"
    ],
    "rooms": [
      {
        "category": "AC Private Cottage",
        "price": "₹4,499 + GST",
        "note": "per night"
      },
      {
        "category": "Dormitory Group Stay",
        "price": "₹3,499 + GST",
        "note": "per person per night"
      }
    ],
    "riverActivities": [
      "Kayaking",
      "Boating",
      "Zorbing",
      "River Swimming"
    ],
    "commonActivities": [
      "Swimming",
      "Archery",
      "Indoor Sports",
      "Bonfire",
      "Jungle Trek"
    ]
  }
];
