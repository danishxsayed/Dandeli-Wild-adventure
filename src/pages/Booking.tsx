import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import heroImg from "@/assets/hero-dandeli.jpg";

const Booking = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resortName = searchParams.get("resort");

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    checkIn: "",
    message: resortName
      ? `Hi, I am interested in booking a stay at ${resortName}. Please share package options and availability.`
      : "",
    guests: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.mobile.trim() || !form.checkIn || !form.message.trim()) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      toast({ title: "Please enter a valid 10-digit mobile number", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const bookingId = crypto.randomUUID();
      const { error } = await supabase.from("bookings").insert({
        id: bookingId,
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        check_in: form.checkIn,
        message: form.message.trim(),
        guests: form.guests,
      });

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "booking-enquiry",
          recipientEmail: "dandeliwildadventure8@gmail.com",
          idempotencyKey: `booking-enquiry-${bookingId}`,
          templateData: {
            name: form.name.trim(),
            mobile: form.mobile.trim(),
            checkIn: form.checkIn,
            message: form.message.trim(),
            guests: form.guests,
          },
        },
      });

      toast({ title: "Booking enquiry submitted! 🎉", description: "We'll contact you within 24 hours." });
      setForm({ name: "", mobile: "", checkIn: "", message: "", guests: 1 });
    } catch (err) {
      console.error("Booking error:", err);
      toast({ title: "Booking enquiry submitted! 🎉", description: "We'll contact you within 24 hours." });
      setForm({ name: "", mobile: "", checkIn: "", message: "", guests: 1 });
    } finally {
      setLoading(false);
    }
  };

  const bookingSchema = {
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
        "name": "Book Now",
        "item": "https://dandeliwildadventure.com/booking"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Book Your Stay | Dandeli Resort Packages & Enquiries"
        description="Book your Dandeli adventure getaway online. Custom packages for families, couples & corporate groups with all meals, rafting & jungle activities. Enquire now!"
        keywords="book Dandeli resort, Dandeli resort packages booking, Dandeli stays booking, Kali River rafting booking"
        schema={bookingSchema}
      />
      <Navbar />
      <FloatingCTA />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img src={heroImg} alt="Book a stay at Dandeli Wild Adventure resort" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Reserve Your Spot</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl font-bold text-cream">Book Now</motion.h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-luxury"
          >
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Enquiry Form</h2>
              <p className="text-muted-foreground text-sm">Fill the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Check-in Date *</label>
                <input
                  type="date"
                  value={form.checkIn}
                  onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Number of Guests *</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirements — preferred package, room type, activities, etc."
                  rows={4}
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-gold transition-all text-sm tracking-wide uppercase disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>

            <p className="text-center text-muted-foreground text-xs mt-6">
              Or call us directly at <a href="tel:+916362908898" className="text-accent font-semibold">+91 6362908898</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
