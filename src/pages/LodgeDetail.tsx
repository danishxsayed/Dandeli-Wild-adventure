import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, Gamepad2, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import { lodgesData } from "@/data/lodges";

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

const LodgeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const lodge = lodgesData.find((l) => l.slug === slug);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handlePrev = () => {
    if (lodge) {
      setActiveImgIndex((prev) =>
        prev === 0 ? lodge.collageImages.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (lodge) {
      setActiveImgIndex((prev) =>
        prev === lodge.collageImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (!lodge) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center p-8 bg-card rounded-2xl shadow-luxury">
          <h2 className="text-2xl font-bold mb-4 font-heading">Lodge Not Found</h2>
          <p className="text-muted-foreground mb-6">The lodge you are looking for does not exist.</p>
          <Link to="/lodges" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg">
            Back to Lodges
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
        "name": "Lodges",
        "item": "https://dandeliwildadventure.com/lodges"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": lodge.name,
        "item": `https://dandeliwildadventure.com/lodges/${lodge.slug}`
      }
    ]
  };

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": lodge.name,
    "description": lodge.description,
    "url": `https://dandeliwildadventure.com/lodges/${lodge.slug}`,
    "telephone": "+916362908898",
    "email": "info@dandeliwildadventure.com",
    "priceRange": lodge.rooms && lodge.rooms.length > 0 ? `${lodge.rooms[0].price} per night` : "INR 1,500 - INR 2,000 per night",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": lodge.location,
      "addressLocality": "Dandeli",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.0"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "23-Hour Checkout",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Indoor Games",
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
        "name": `What is the check-in and check-out time at ${lodge.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a flexible check-in check-out policy (11:30 AM - 10:30 AM) giving you a full 23-hour stay to maximize your holiday."
        }
      },
      {
        "@type": "Question",
        "name": "What activities are available at this lodge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This lodge is stay-focused and budget-friendly. It includes indoor board games (carrom, chess) and guided nature walks. Note: It does not include on-site water sports."
        }
      }
    ]
  };

  // Pre-fill booking message link
  const bookingUrl = `/booking?resort=${encodeURIComponent(lodge.name)}`;
  const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20stay%20at%20${encodeURIComponent(lodge.name)}%20Dandeli.%20Please%20share%20availability%20and%20packages.`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={lodge.seoTitle}
        description={lodge.seoDescription}
        keywords={`${lodge.name}, lodges in Dandeli, budget stay in Dandeli, hotel booking Dandeli, ${lodge.name} room rates`}
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
                <span>{lodge.location}</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
                {lodge.name}
              </h1>
              <p className="text-lg text-muted-foreground font-body italic max-w-3xl">
                "{lodge.tagline}"
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <Link
                to={bookingUrl}
                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-forest transition-all text-sm tracking-wider uppercase shadow-md"
              >
                <MessageSquare size={18} /> Book Now
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20ba5a] transition-all text-sm tracking-wider uppercase shadow-md"
              >
                <Phone size={18} /> WhatsApp Enquiry
              </a>
            </div>
          </div>

          {/* Dynamic Image Slideshow & Thumbnails Container */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Vertical thumbnails for Desktop */}
            <div className="hidden lg:flex flex-col gap-3 w-32 h-[450px] overflow-y-auto pr-2 custom-scrollbar shrink-0">
              {lodge.collageImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`aspect-[4/3] w-full rounded-lg overflow-hidden border-2 transition-all ${
                    idx === activeImgIndex ? "border-accent scale-95 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`${lodge.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Slideshow Frame */}
            <div className="relative flex-1 h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-luxury bg-black group-slideshow">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImgIndex}
                  src={lodge.collageImages[activeImgIndex]}
                  alt={`${lodge.name} gallery image ${activeImgIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Prev / Next Chevrons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:outline-none"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all focus:outline-none"
              >
                <ChevronRight size={24} />
              </button>

              {/* Position indicator */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm font-semibold tracking-wider">
                {activeImgIndex + 1} / {lodge.collageImages.length}
              </div>
            </div>

            {/* Horizontal thumbnail track for Mobile */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 custom-scrollbar">
              {lodge.collageImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`aspect-[4/3] w-24 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    idx === activeImgIndex ? "border-accent scale-95" : "border-transparent opacity-75"
                  }`}
                >
                  <img src={img} alt={`${lodge.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              About The Lodge
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6 whitespace-pre-line font-body">
              {lodge.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border/60">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Clean & Safe Stays</h4>
                  <p className="text-xs text-muted-foreground">We ensure top-notch cleanliness, privacy, and safety standards.</p>
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
      {lodge.youtubeUrl && (
        <section className="py-16 bg-background border-t border-border/60">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Video Tour</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Experience {lodge.name} <span className="text-gradient-gold">In Motion</span>
              </h2>
            </div>
            
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-luxury border border-border/80 bg-black">
              {getYoutubeId(lodge.youtubeUrl) ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${getYoutubeId(lodge.youtubeUrl)}`}
                  title={`${lodge.name} Video Tour`}
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

      {/* Activities Section (Stay & Indoor Fun Only - No Water Activities) */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Recreation & Relaxation</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Indoor Sports & <span className="text-gradient-gold">Stay Activities</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
              Enjoy peaceful, relaxing stays with standard indoor sports. Note: This lodge is stay-focused and does not include on-site water adventure activities.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-luxury">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Gamepad2 size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Lodge Indoor & Board Games</h3>
                <p className="text-xs text-muted-foreground">Recreation and stay fun included with your package</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lodge.commonActivities.map((act) => (
                <div key={act} className="flex items-center gap-2.5 bg-background p-4 rounded-xl border border-border/60">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span className="font-medium text-sm text-foreground">{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-2">Affordable Comfort</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Room Categories & <span className="text-gradient-gold">Stay Pricing</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Every stay package includes clean rooms, comfort stays, all 3 buffet meals (breakfast, lunch, dinner), snacks, and access to all standard indoor sports.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-luxury border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="py-4 px-6 font-heading font-semibold text-sm tracking-wider uppercase">Room Category</th>
                    <th className="py-4 px-6 font-heading font-semibold text-sm tracking-wider uppercase text-right">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {lodge.rooms.map((room, index) => (
                    <tr key={index} className="hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-6 font-medium text-foreground">
                        <div>
                          <p className="font-semibold text-base">{room.category}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-xl font-bold text-primary">{room.price}</span>
                        {room.note && (
                          <span className="block text-xs text-muted-foreground mt-0.5">{room.note}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to={bookingUrl}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:shadow-gold transition-all uppercase tracking-wider text-sm"
            >
              Request Booking For {lodge.name}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LodgeDetail;
