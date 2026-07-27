import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hero-dandeli.jpg";

const Contact = () => {
  const contactSchema = {
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
        "name": "Contact Us",
        "item": "https://dandeliwildadventure.com/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us | Dandeli Wild Adventure | Stays & Bookings"
        description="Get in touch with Dandeli Wild Adventure. Call +91 6362908898 or visit us in Dandeli, Karnataka for direct booking, custom resort packages, and travel guides."
        keywords="contact Dandeli Wild Adventure, Dandeli resort contact number, phone number Dandeli resorts, Dandeli booking office"
        schema={contactSchema}
      />
      <Navbar />
      <FloatingCTA />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img src={heroImg} alt="Contact Dandeli Wild Adventure resort customer support" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl font-bold text-cream">Contact Us</motion.h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: MapPin, title: "Location", lines: ["Dandeli, Uttara Kannada", "Karnataka, India - 581325"] },
              { icon: Phone, title: "Phone", lines: ["+91 6362908898"], link: "tel:+916362908898" },
              { icon: Mail, title: "Email", lines: ["info@dandeliwildadventure.com"], link: "mailto:info@dandeliwildadventure.com" },
              { icon: Clock, title: "Working Hours", lines: ["Mon - Sun: 8AM - 10PM", "365 Days Open"] },
            ].map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-luxury text-center hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-foreground">{c.title}</h3>
                {c.lines.map((line) => (
                  c.link ? (
                    <a key={line} href={c.link} className="block text-muted-foreground text-sm hover:text-accent transition-colors">{line}</a>
                  ) : (
                    <p key={line} className="text-muted-foreground text-sm">{line}</p>
                  )
                ))}
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-luxury"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61562.35!2d74.58!3d15.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf24dca6a2e30b%3A0x5e90eab3afaba10!2sDandeli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dandeli Location"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
