import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hero-dandeli.jpg";

import raftingImg from "@/assets/activity-rafting.jpg";
import kayakingImg from "@/assets/activity-kayaking.jpg";
import coracleImg from "@/assets/activity-coracle.jpg";
import safariImg from "@/assets/activity-safari.jpg";
import trekkingImg from "@/assets/activity-trekking.jpg";
import birdImg from "@/assets/activity-birdwatching.jpg";
import crocodileImg from "@/assets/activity-crocodile.jpg";
import campingImg from "@/assets/activity-camping.jpg";
import ziplineImg from "@/assets/activity-zipline.jpg";
import ropeImg from "@/assets/activity-rope.jpg";
import riverImg from "@/assets/activity-rivercrossing.jpg";
import bikingImg from "@/assets/activity-biking.jpg";
import fishingImg from "@/assets/activity-fishing.jpg";
import cavesImg from "@/assets/activity-caves.jpg";
import swimmingImg from "@/assets/activity-swimming.jpg";
import damImg from "@/assets/activity-dam.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const allActivities = [
  { name: "White Water Rafting", img: raftingImg, type: "Water", desc: "Experience the adrenaline rush of conquering the rapids on the mighty Kali River. Navigate through Grade 2 and Grade 3 rapids with expert guides. Note: Rafting is chargeable and takes place only if there’s a high water level released from the Supa Dam." },
  { name: "Kayaking", img: kayakingImg, type: "Water", desc: "Glide through the serene emerald waters of the Kali River on a kayak. Perfect for both beginners and experienced paddlers. Enjoy the tranquility of nature while getting a great workout." },
  { name: "Coracle Ride", img: coracleImg, type: "Water", desc: "Float gently on the river in a traditional round bamboo coracle boat. A unique and peaceful experience that lets you soak in the beauty of Dandeli's waterways." },
  { name: "Jungle Safari", img: safariImg, type: "Wildlife", desc: "Hop aboard an open jeep and venture deep into the Dandeli Wildlife Sanctuary. Spot Black Panthers, elephants, deer, bison, and exotic birds in their natural habitat." },
  { name: "Nature Trekking", img: trekkingImg, type: "Outdoor", desc: "Trek through ancient forests of the Western Ghats with experienced nature guides. Discover hidden waterfalls, unique flora, and breathtaking viewpoints along the way." },
  { name: "Bird Watching", img: birdImg, type: "Wildlife", desc: "Dandeli is home to 300+ bird species including the Great Hornbill, Malabar Pied Hornbill, and Kingfishers. A paradise for birders and nature photographers." },
  { name: "Crocodile Spotting", img: crocodileImg, type: "Wildlife", desc: "Take a boat ride on the Kali River to spot mugger crocodiles sunbathing on the riverbanks. An exciting and safe wildlife viewing experience with expert naturalists." },
  { name: "Night Camping", img: campingImg, type: "Outdoor", desc: "Sleep under a blanket of stars with the sounds of the jungle as your lullaby. Enjoy campfire stories, music, and delicious BBQ in the heart of the forest." },
  { name: "Zip Lining", img: ziplineImg, type: "Adventure", desc: "Soar above the forest canopy on an exhilarating zip line. Feel the rush of flying through the air with stunning views of the river valley below." },
  { name: "Rope Activity", img: ropeImg, type: "Adventure", desc: "Test your balance and courage on aerial rope courses, ladder walks, and obstacle bridges suspended high among the trees. Great for team building!" },
  { name: "River Crossing", img: riverImg, type: "Adventure", desc: "Cross the flowing river on a rope bridge with nothing but your grip and courage. A challenging and rewarding adventure that builds confidence." },
  { name: "Mountain Biking", img: bikingImg, type: "Outdoor", desc: "Ride through rugged forest trails and scenic village paths on a mountain bike. An exciting way to explore the diverse terrain of Dandeli." },
  { name: "Fishing", img: fishingImg, type: "Water", desc: "Cast your line into the Kali River and try your luck at catching Mahseer and other freshwater fish. A relaxing activity amidst stunning natural surroundings." },
  { name: "Syntheri Rocks & Caves", img: cavesImg, type: "Sightseeing", desc: "Visit the magnificent Syntheri Rocks — a massive granite monolith rising 300 feet, surrounded by dense forest. Explore the stunning Kavala Caves nearby." },
  { name: "River Swimming", img: swimmingImg, type: "Water", desc: "Cool off in the crystal-clear natural pools of the Kali River. Swim in safe, supervised areas surrounded by pristine forest — pure refreshment!" },
  { name: "Supa Dam Visit", img: damImg, type: "Sightseeing", desc: "Visit the Supa Dam — one of the largest earthen dams in India, built across the Kali River. The panoramic views of the reservoir and surrounding hills are breathtaking." },
];

const Activities = () => {
  const activitiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Adventure Activities in Dandeli",
    "numberOfItems": 16,
    "itemListElement": allActivities.map((act, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": act.name
    }))
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="14+ Best Activities in Dandeli | Rafting, Safari & Ziplining"
        description="Experience white water rafting, jungle safari, kayaking, and ziplining in Dandeli. Plan your ultimate adventure packages with certified guides. Book now!"
        keywords="Dandeli river rafting, jungle safari in Dandeli, kayaking in Dandeli, adventure activities in Dandeli, river rafting Dandeli resort"
        schema={activitiesSchema}
      />
      <Navbar />
      <FloatingCTA />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img src={heroImg} alt="White Water Rafting and Adventure Activities at Dandeli Wild Adventure" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Thrill & Tranquility</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl font-bold text-cream">Our Activities</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="text-cream/70 mt-4 text-lg max-w-xl mx-auto">16 incredible indoor & outdoor activities to make your Dandeli trip unforgettable</motion.p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {allActivities.map((act, i) => (
              <motion.div
                key={act.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i % 4}
                variants={fadeUp}
                className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-gold transition-all duration-500"
              >
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={act.img} alt={`${act.name} at Dandeli Wild Adventure resort`} loading="lazy" width={800} height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 w-fit">{act.type}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{act.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{act.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
