import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Bed, Home, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import { lodgesData } from "@/data/lodges";
import heroImg from "@/assets/hero-dandeli.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Lodges = () => {
  const lodgesSchema = {
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
        "name": "Lodges",
        "item": "https://dandeliwildadventure.com/lodges"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Lodges in Dandeli | Budget Hotel Stays & Room Bookings"
        description="Explore and book budget-friendly lodges in Dandeli. Clean AC & Non-AC rooms near Kali River and local markets. Best options for family & group stays."
        keywords="Lodges in Dandeli, budget stay in Dandeli, Dandeli hotel booking, cheap stays in Dandeli, rooms in Dandeli"
        schema={lodgesSchema}
      />
      <Navbar />
      <FloatingCTA />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img src={heroImg} alt="Budget Lodges in Dandeli - Dandeli Wild Adventure" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/75" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3"
          >
            Stay Only Options
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl font-bold text-cream"
          >
            Our Lodges
          </motion.h1>
        </div>
      </section>

      {/* Lodges Catalog */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Budget Stays & Comfort</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Choose Your <span className="text-gradient-gold">Comfortable Stay</span>
              <span className="block text-sm font-semibold tracking-widest text-muted-foreground uppercase mt-2">
                (Indoor Sports & Lodging Only - No Water Activities)
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Looking for a peaceful, budget-friendly stay without active water sports? Explore our handpicked lodges offering comfortable rooms and indoor recreation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lodgesData.map((lodge, i) => {
              // Find the lowest room price
              let minPrice = Infinity;
              let startingPrice = "";
              if (lodge.rooms && lodge.rooms.length > 0) {
                lodge.rooms.forEach(room => {
                  const digits = room.price.replace(/[^\d]/g, '');
                  const priceVal = parseInt(digits, 10);
                  if (!isNaN(priceVal) && priceVal < minPrice) {
                    minPrice = priceVal;
                    startingPrice = room.price;
                  }
                });
                if (!startingPrice) {
                  startingPrice = lodge.rooms[0].price;
                }
              }

              return (
                <motion.div
                  key={lodge.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-luxury hover:-translate-y-2 transition-all duration-500 border border-border"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={lodge.heroImage}
                      alt={lodge.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-cream text-xs bg-forest/80 backdrop-blur-md px-3 py-1.5 rounded-full font-medium">
                      <MapPin size={12} className="text-accent" />
                      <span>{lodge.location.split(",")[0] || "Dandeli"}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {lodge.name}
                      </h3>
                      {startingPrice && (
                        <div className="text-right flex-shrink-0 bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-1">
                          <p className="text-muted-foreground text-[9px] font-semibold uppercase tracking-wider">Starts From</p>
                          <p className="text-primary font-heading text-lg font-bold leading-tight">{startingPrice}</p>
                        </div>
                      )}
                    </div>
                    <p className="text-accent font-medium text-xs tracking-wider uppercase mb-3">
                      ⚡ 11:30 AM - 10:30 AM (23 Hours)
                    </p>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                      {lodge.description}
                    </p>

                    {/* Highlights Icons */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border/60 mb-6 text-center text-xs text-foreground">
                      <div className="flex flex-col items-center gap-1">
                        <Bed size={16} className="text-primary" />
                        <span>Cozy Stays</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Gamepad2 size={16} className="text-primary" />
                        <span>Indoor Fun</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Home size={16} className="text-primary" />
                        <span>Quiet Retreat</span>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-auto">
                      <Link
                        to={`/lodges/${lodge.slug}`}
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground hover:shadow-luxury transition-all text-sm tracking-wide uppercase"
                      >
                        Explore Lodge <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lodges;
