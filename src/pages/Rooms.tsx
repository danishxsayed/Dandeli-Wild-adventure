import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wifi, ShowerHead, Wind, Coffee, TreePine, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hero-dandeli.jpg";
import cottageImg from "@/assets/room-cottage.jpg";
import tentImg from "@/assets/room-tent.jpg";
import treehouseImg from "@/assets/room-treehouse.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const rooms = [
  {
    name: "Forest Cottage",
    img: cottageImg,
    desc: "Spacious wooden cottages with modern amenities, nestled deep in the forest. Each cottage features a private sit-out area overlooking lush greenery, attached bathroom, comfortable beds, and 24/7 hot water. Perfect for families and couples seeking comfort in the wild.",
    amenities: ["Attached Bathroom", "Hot Water", "Fan & Ventilation", "Forest View Sit-Out", "Room Service", "Parking"],
    capacity: "2-4 Guests",
  },
  {
    name: "Luxury Safari Tent",
    img: tentImg,
    desc: "Experience glamping at its finest in our luxury safari tents. Equipped with real beds, wooden flooring, and ambient lighting — it's camping without compromising comfort. Fall asleep to the sounds of the jungle and wake up to birdsong.",
    amenities: ["Comfortable Beds", "Wooden Flooring", "Ambient Lighting", "Common Washroom", "Campfire Access", "Nature Trails"],
    capacity: "2-3 Guests",
  },
  {
    name: "Tree House",
    img: treehouseImg,
    desc: "Our signature elevated retreats offer a truly unique experience. Perched among the treetops, these beautiful wooden tree houses offer panoramic views of the jungle canopy. A romantic and adventurous stay you'll never forget.",
    amenities: ["Elevated Structure", "Panoramic Views", "Private Balcony", "Attached Bathroom", "Unique Experience", "Photo-worthy"],
    capacity: "2 Guests",
  },
];

const Rooms = () => {
  const roomsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dandeliwildadventure.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Rooms",
        "item": "https://dandeliwildadventure.com/rooms"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Dandeli Stay Packages | Forest Cottages & Luxury Glamping"
        description="Explore our stay categories in Dandeli. Forest wooden cottages, luxury glamping tents, and elevated tree houses. All meals & activities included. Book now!"
        keywords="stay in Dandeli, best stay in Dandeli, forest cottage Dandeli, glamping tent Dandeli, tree house stay Dandeli"
        schema={roomsSchema}
      />
      <Navbar />
      <FloatingCTA />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img src={heroImg} alt="Jungle Stays and Rooms at Dandeli Wild Adventure Resort" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Luxury in Nature</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl font-bold text-cream">Our Rooms</motion.h1>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-20">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-luxury">
                  <img src={room.img} alt={`${room.name} room stay at Dandeli Wild Adventure resort`} loading="lazy" width={800} height={600}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">{room.capacity}</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{room.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{room.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {a}
                    </div>
                  ))}
                </div>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-luxury transition-all text-sm tracking-wide uppercase"
                >
                  Book This Room <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Common Amenities</p>
            <h2 className="font-heading text-4xl font-bold text-foreground">Everything You <span className="text-gradient-gold">Need</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: ShowerHead, label: "Hot Water" },
              { icon: Wind, label: "Fresh Air" },
              { icon: Coffee, label: "All Meals" },
              { icon: TreePine, label: "Nature Trails" },
              { icon: ShowerHead, label: "Clean Washrooms" },
            ].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-3 bg-card rounded-xl p-6 shadow-luxury text-center">
                <a.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
