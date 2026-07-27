import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, Waves, Users, CheckCircle, ChevronLeft, ChevronRight, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import { homestaysData } from "@/data/homestays";

const PHONE_NUMBER = "6362908898";

const getYoutubeId = (url?: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const HomestayDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const homestay = homestaysData.find((h) => h.slug === slug);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handlePrev = () => {
    if (homestay) {
      setActiveImgIndex((prev) =>
        prev === 0 ? homestay.collageImages.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (homestay) {
      setActiveImgIndex((prev) =>
        prev === homestay.collageImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (!homestay) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center p-8 bg-card rounded-2xl shadow-luxury">
          <h2 className="text-2xl font-bold mb-4 font-heading">Homestay Not Found</h2>
          <p className="text-muted-foreground mb-6">The homestay you are looking for does not exist.</p>
          <Link to="/homestays" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg">
            Back to Homestays
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = {
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
        "name": "Homestays",
        "item": "https://dandeliwildadventure.com/homestays"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": homestay.name,
        "item": `https://dandeliwildadventure.com/homestays/${homestay.slug}`
      }
    ]
  };

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": homestay.name,
    "description": homestay.description,
    "url": `https://dandeliwildadventure.com/homestays/${homestay.slug}`,
    "telephone": "+916362908898",
    "email": "info@dandeliwildadventure.com",
    "priceRange": homestay.rooms && homestay.rooms.length > 0 ? `${homestay.rooms[0].price} per person/night` : "INR 1,300 - INR 2,800 per person/night",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": homestay.location,
      "addressLocality": "Dandeli",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.2"
    },
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
        "name": "23-Hour Checkout",
        "value": "true"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the check-in and check-out time at ${homestay.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a flexible check-in check-out policy (11:30 AM - 10:30 AM) giving you a full 23-hour stay to maximize your nature stay."
        }
      },
      {
        "@type": "Question",
        "name": "Are meals included in the homestay packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our packages are all-inclusive of stay, all 3 home-style meals (breakfast, lunch, dinner), snacks, and selected activities."
        }
      },
      {
        "@type": "Question",
        "name": "What activities are offered at this homestay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer outdoor rope activities ( Burma bridge, commando walk, ziplining, river crossing), pool access, and indoor games (chess, carrom, badminton) based on availability."
        }
      }
    ]
  };

  // Pre-fill booking message link
  const bookingUrl = `/booking?resort=${encodeURIComponent(homestay.name)}`;
  const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20stay%20at%20${encodeURIComponent(homestay.name)}%20Dandeli.%20Please%20share%20availability%20and%20packages.`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={homestay.seoTitle}
        description={homestay.seoDescription}
        keywords={`${homestay.name}, homestay in Dandeli, best stay in Dandeli, pool stay Dandeli, ${homestay.name} Dandeli`}
        schema={[breadcrumbSchema, hotelSchema, faqSchema]}
      />
      <Navbar solid />
      <FloatingCTA />

      {/* 23 Hours Checkout Banner */}
      <div className="pt-20 md:pt-24">
        <div className="bg-accent text-accent-foreground py-3 px-4 text-center font-semibold text-xs md:text-sm tracking-widest uppercase shadow-md flex items-center justify-center gap-2">
          <Clock size={16} className="animate-pulse text-accent-foreground" />
          <span>⚡ Premium Benefit: Flexible Check-in (11:30 AM - 10:30 AM) 23 Hours Stay!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-accent font-medium text-sm mb-2">
                <MapPin size={16} />
                <span>{homestay.location}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                {homestay.name}
              </h1>
              <p className="text-lg text-muted-foreground font-body italic max-w-3xl">
                "{homestay.tagline}"
              </p>
            </div>
            
            {/* Quick Action Button */}
            <div className="flex gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:shadow-lg transition-all text-sm tracking-wider uppercase"
              >
                <MessageSquare size={18} /> WhatsApp
              </a>
              <Link
                to={bookingUrl}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-gold transition-all text-sm tracking-wider uppercase"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Interactive Image Slider Collage */}
          {homestay.collageImages && homestay.collageImages.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
              {/* Main Viewer */}
              <div className="lg:col-span-4 relative aspect-[16/10] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-luxury group bg-black flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImgIndex}
                    src={homestay.collageImages[activeImgIndex]}
                    alt={`${homestay.name} view ${activeImgIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Overlay gradients for better aesthetics */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                {/* Left/Right Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-primary/95 text-white backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-primary/95 text-white backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Indicators Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white tracking-widest border border-white/10">
                  {activeImgIndex + 1} / {homestay.collageImages.length}
                </div>
              </div>

              {/* Thumbnails Sidebar */}
              <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-primary pb-2 lg:pb-0 pr-1 select-none">
                {homestay.collageImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative flex-shrink-0 w-24 h-16 lg:w-full lg:h-[76px] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImgIndex === idx
                        ? "border-accent scale-[1.02] shadow-gold opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100 hover:scale-[1.01]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${homestay.name} gallery image ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="aspect-[16/6] w-full overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src={homestay.heroImage}
                alt={`${homestay.name} - Premium Nature Stay in Dandeli`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-luxury border border-border">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground">
              About the Homestay
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6 whitespace-pre-line font-body">
              {homestay.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border/60">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Authentic Local Hospitality</h4>
                  <p className="text-xs text-muted-foreground">Enjoy clean, cozy accommodations and home-style nutritious food prepared locally.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Flexible Checkin & Checkout</h4>
                  <p className="text-xs text-muted-foreground">Enjoy a flexible 23-hour stay with check-in at 11:30 AM and check-out at 10:30 AM.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      {homestay.youtubeUrl && (
        <section className="py-16 bg-background border-t border-border/60">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Video Tour</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Experience {homestay.name} <span className="text-gradient-gold">In Motion</span>
              </h2>
            </div>
            
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-luxury border border-border/80 bg-black">
              {getYoutubeId(homestay.youtubeUrl) ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYoutubeId(homestay.youtubeUrl)}`}
                  title={`${homestay.name} Video Tour`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Invalid Video URL
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Activities Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Things To Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Adventure & <span className="text-gradient-gold">Recreation Activities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Water Activities */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-luxury">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Waves size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">River Water Sports</h3>
                  <p className="text-xs text-muted-foreground">Water adventures organized in the Kali River waters</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {homestay.riverActivities.map((act) => (
                  <div key={act} className="flex items-center gap-2.5 bg-background p-4 rounded-xl border border-border/60">
                    <CheckCircle size={16} className="text-blue-500 shrink-0" />
                    <span className="font-medium text-sm text-foreground">{act}</span>
                  </div>
                ))}
              </div>
              {homestay.riverActivities.some(act => act.toLowerCase().includes("rafting")) && (
                <p className="mt-4 text-xs text-muted-foreground bg-blue-500/5 p-3 rounded-lg border border-blue-500/10 leading-relaxed">
                  <strong>* Note on Rafting:</strong> Rafting is chargeable and takes place only if there’s a high water level released from the Supa Dam.
                </p>
              )}
            </div>

            {/* Standard Common Activities */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-luxury">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Gamepad2 size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Jungle Activities & Games</h3>
                  <p className="text-xs text-muted-foreground">Outdoor rope activities and indoor games at the stay</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {homestay.commonActivities.map((act) => (
                  <div key={act} className="flex items-center gap-2.5 bg-background p-4 rounded-xl border border-border/60">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                    <span className="font-medium text-sm text-foreground">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Homestay Tariff</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Room Categories & <span className="text-gradient-gold">Package Rates</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Every stay package includes spacious accommodation, all 3 buffet meals (breakfast, lunch, dinner), snacks, swimming pool usage, and selected activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-luxury border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/70 text-foreground border-b border-border">
                    <th className="px-6 py-4 font-heading font-semibold text-sm tracking-wider uppercase">Room Category</th>
                    <th className="px-6 py-4 font-heading font-semibold text-sm tracking-wider uppercase">Price (INR)</th>
                    <th className="px-6 py-4 font-heading font-semibold text-sm tracking-wider uppercase">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {homestay.rooms.map((room, idx) => (
                    <tr key={idx} className="border-b border-border/60 hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-5 text-sm font-semibold text-foreground">{room.category}</td>
                      <td className="px-6 py-5 text-sm text-accent font-bold text-base">{room.price}</td>
                      <td className="px-6 py-5 text-xs text-muted-foreground italic">{room.note || "per person per night"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="mt-14 max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">Ready to Plan Your Escape?</h3>
            <p className="text-muted-foreground text-sm">
              {homestay.name} fills up quickly due to its premium pool amenities and adventure activities. Get in touch with us to book today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-luxury transition-all text-sm tracking-wide uppercase"
              >
                <Phone size={16} /> Call: +91 {PHONE_NUMBER}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:shadow-lg transition-all text-sm tracking-wide uppercase"
              >
                <MessageSquare size={16} /> WhatsApp Us
              </a>
              <Link
                to={bookingUrl}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-gold transition-all text-sm tracking-wide uppercase"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomestayDetail;
