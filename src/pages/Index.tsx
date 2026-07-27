import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Utensils, Bed, TreePine, Users, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const activities = [
  { name: "White Water Rafting", img: raftingImg, desc: "Conquer the thrilling rapids of the Kali River" },
  { name: "Jungle Safari", img: safariImg, desc: "Explore the wild heart of Dandeli forests" },
  { name: "Kayaking", img: kayakingImg, desc: "Paddle through serene emerald waters" },
  { name: "Night Camping", img: campingImg, desc: "Sleep under a blanket of stars" },
  { name: "Zip Lining", img: ziplineImg, desc: "Soar above the forest canopy" },
  { name: "Nature Trekking", img: trekkingImg, desc: "Walk through ancient woodland trails" },
];

const packages = [
  {
    title: "Weekend Getaway",
    duration: "2 Days / 1 Night",
    highlights: ["Comfortable Stay", "All Meals Included", "4 Adventure Activities", "Campfire & Music", "Guided Nature Walk"],
    popular: false,
  },
  {
    title: "Adventure Explorer",
    duration: "3 Days / 2 Nights",
    highlights: ["Premium Accommodation", "All Meals Included", "8 Adventure Activities", "Jungle Safari", "Night Camping", "Bonfire"],
    popular: true,
  },
  {
    title: "Ultimate Wild Experience",
    duration: "4 Days / 3 Nights",
    highlights: ["Luxury Cottage Stay", "All Meals Included", "All 14 Activities", "Private Safari", "Bird Watching Tour", "Campfire & BBQ"],
    popular: false,
  },
];

const Index = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Dandeli Wild Adventure",
    "description": "Your ultimate jungle resort and adventure destination in Dandeli, Karnataka. Offering white water rafting, jungle safari, luxury cottage stays, all meals and adventure activities.",
    "url": "https://dandeliwildadventure.com",
    "telephone": "+916362908898",
    "email": "info@dandeliwildadventure.com",
    "priceRange": "INR 1,500 - INR 5,500 per person/night",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "J.N. Road, Opposite Sunday Market, and surrounding forest regions",
      "addressLocality": "Dandeli",
      "addressRegion": "Karnataka",
      "postalCode": "581325",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "15.2427",
      "longitude": "74.6200"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.5"
    },
    "hasMap": "https://www.google.com/maps/place/Dandeli,+Karnataka/@15.2427218,74.5802271,13z",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Swimming Pool",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "All Meals Included",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Wi-Fi",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "White Water Rafting",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Jungle Safari",
        "value": "true"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Best Resort in Dandeli | Dandeli Wild Adventure Stays & Packages"
        description="Book the best resort in Dandeli for river rafting, jungle safari, and luxury stays. All meals & 14+ activities included with 11:30 AM - 10:30 AM (23-hour) stay. Book direct!"
        keywords="Resort in Dandeli, Best Resort in Dandeli, Luxury Resort in Dandeli, Jungle Resort in Dandeli, Dandeli Resort, Dandeli Resorts, Stay in Dandeli, Dandeli River Rafting Resort"
        schema={homeSchema}
      />
      <Navbar />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Dandeli Wild Adventure - Best Resort in Dandeli" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sand font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Welcome to the Wild
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight"
          >
            Dandeli Wild
            <span className="block text-gradient-gold">Adventure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-body"
          >
            Immerse yourself in the untamed beauty of Western Ghats. Luxury stays, thrilling adventures, and unforgettable moments await.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/booking"
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-gold transition-all duration-300 text-sm tracking-wide uppercase"
            >
              Book Your Adventure
            </Link>
            <Link
              to="/activities"
              className="px-8 py-4 border-2 border-cream/30 text-cream font-semibold rounded-lg hover:bg-cream/10 transition-all duration-300 text-sm tracking-wide uppercase"
            >
              Explore Activities
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-forest text-cream py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Mountain, num: "14+", label: "Adventures" },
              { icon: Users, num: "10,000+", label: "Happy Guests" },
              { icon: TreePine, num: "500+", label: "Acres of Forest" },
              { icon: Shield, num: "100%", label: "Safe & Secure" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center gap-2"
              >
                <stat.icon className="w-8 h-8 text-accent" />
                <span className="text-3xl font-heading font-bold">{stat.num}</span>
                <span className="text-cream/70 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">The Complete<br /><span className="text-gradient-gold">Dandeli Experience</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Bed, title: "Luxury Stays", desc: "From cozy cottages to glamping tents and tree houses — wake up to the sound of nature in absolute comfort." },
              { icon: Utensils, title: "All Meals Included", desc: "Savor delicious local and continental cuisine. Breakfast, lunch, dinner & evening snacks — all included." },
              { icon: Mountain, title: "14+ Activities", desc: "White water rafting, jungle safari, zip lining, kayaking, and more — every adventure you can dream of." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-card rounded-2xl p-8 shadow-luxury hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Thrilling Adventures</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Unforgettable<br /><span className="text-gradient-gold">Experiences Await</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, i) => (
              <motion.div
                key={act.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-luxury"
              >
                <img src={act.img} alt={`${act.name} at Dandeli Wild Adventure jungle resort`} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-semibold text-cream mb-1">{act.name}</h3>
                  <p className="text-cream/70 text-sm">{act.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-luxury transition-all text-sm tracking-wide uppercase"
            >
              View All 14 Activities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Our Packages</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">All-Inclusive<br /><span className="text-gradient-gold">Adventure Packages</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Every package includes comfortable stay, all meals, and exciting activities. No hidden costs — just pure adventure!</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular
                    ? "bg-gradient-forest text-cream border-accent shadow-gold"
                    : "bg-card border-border shadow-luxury"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl font-bold mb-1">{pkg.title}</h3>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-cream/70" : "text-muted-foreground"}`}>{pkg.duration}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${pkg.popular ? "bg-accent" : "bg-primary"}`} />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all ${
                    pkg.popular
                      ? "bg-accent text-accent-foreground hover:shadow-gold"
                      : "bg-primary text-primary-foreground hover:shadow-luxury"
                  }`}
                >
                  Enquire Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Luxury Stays</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Stay in<br /><span className="text-gradient-gold">Nature's Lap</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Forest Cottage", img: cottageImg, desc: "Spacious wooden cottages nestled in the forest with modern amenities" },
              { name: "Safari Tent", img: tentImg, desc: "Luxury glamping tents for an authentic wilderness experience" },
              { name: "Tree House", img: treehouseImg, desc: "Elevated retreats with panoramic views of the jungle canopy" },
            ].map((room, i) => (
              <motion.div
                key={room.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group rounded-2xl overflow-hidden shadow-luxury bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={room.img} alt={`${room.name} room stay at Dandeli Wild Adventure resort`} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{room.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{room.desc}</p>
                  <Link to="/rooms" className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/85" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready for Your <span className="text-gradient-gold">Wild Adventure?</span>
            </h2>
            <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto">
              Don't just dream about it. Book your Dandeli adventure today and create memories that last a lifetime!
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-gold transition-all text-sm tracking-wide uppercase"
            >
              Book Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
