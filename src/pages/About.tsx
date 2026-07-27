import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import aboutImg from "@/assets/about-dandeli.jpg";
import heroImg from "@/assets/hero-dandeli.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const About = () => {
  const aboutSchema = {
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
        "name": "About Us",
        "item": "https://dandeliwildadventure.com/about"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | Dandeli Wild Adventure Resort & Stays"
        description="Discover Dandeli Wild Adventure. Over 10 years of hosting premium jungle stays, Kali River rafting, safaris, and luxury nature getaways in Karnataka."
        keywords="About Dandeli Wild Adventure, Dandeli resorts history, eco-tourism Dandeli, nature resort stay Dandeli"
        schema={aboutSchema}
      />
      <Navbar />
      <FloatingCTA />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img src={heroImg} alt="Dandeli Wild Adventure - Nature & Jungle Holiday Getaway" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Discover Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl font-bold text-cream">About Us</motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="relative">
                <img src={aboutImg} alt="Western Ghats sunset view near Dandeli Wild Adventure resort" loading="lazy" width={800} height={800}
                  className="rounded-2xl shadow-luxury w-full object-cover aspect-square" />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-4 rounded-xl shadow-gold">
                  <span className="block font-heading text-3xl font-bold">10+</span>
                  <span className="text-sm">Years of Adventure</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-6">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase">Our Journey</p>
              <h2 className="font-heading text-4xl font-bold text-foreground">A Passion for <span className="text-gradient-gold">Wild Dandeli</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Dandeli Wild Adventure was born from a deep love for the untamed beauty of the Western Ghats. Nestled along the banks of the majestic Kali River, we have been curating unforgettable wilderness experiences for over a decade.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is simple — to bring you closer to nature while ensuring your comfort, safety, and joy. From heart-pumping white water rafting to serene bird watching, from cozy forest cottages to glamping under the stars — every moment with us is crafted to perfection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in Dandeli, Karnataka — one of India's top eco-tourism destinations — we offer all-inclusive packages that cover stay, food, and a wide range of adventure activities. No hidden costs, no surprises — just pure adventure!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Our Values</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">What Makes Us <span className="text-gradient-gold">Different</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety First", desc: "Certified guides, quality equipment, and strict safety protocols for every adventure." },
              { icon: Heart, title: "Guest Experience", desc: "Your happiness is our priority. Personal attention to every guest's needs." },
              { icon: Leaf, title: "Eco-Friendly", desc: "We are committed to sustainable tourism and preserving Dandeli's natural beauty." },
              { icon: Award, title: "Best in Dandeli", desc: "Rated as one of the top adventure resorts with thousands of happy guests." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="text-center bg-card rounded-2xl p-8 shadow-luxury hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
