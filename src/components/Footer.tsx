import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Dandeli Wild Adventure" className="h-14" />
            <p className="text-cream/70 text-sm leading-relaxed">
              Your gateway to the ultimate Dandeli adventure. Experience the wild beauty of Western Ghats with luxury stays, thrilling activities, and unforgettable memories.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-accent hover:text-forest flex items-center justify-center transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 hover:bg-accent hover:text-forest flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/resorts", label: "Our Resorts" },
                { to: "/lodges", label: "Our Lodges" },
                { to: "/homestays", label: "Our Homestays" },
                { to: "/activities", label: "Activities" },
                { to: "/rooms", label: "Rooms" },
                { to: "/booking", label: "Book Now" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-cream/70 hover:text-accent transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Adventures</h4>
            <div className="space-y-2 text-sm text-cream/70">
              <p>White Water Rafting</p>
              <p>Jungle Safari</p>
              <p>Zip Lining</p>
              <p>Night Camping</p>
              <p>Kayaking</p>
              <p>Bird Watching</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Contact Us</h4>
            <div className="space-y-3 text-sm text-cream/70">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <p>Dandeli, Uttara Kannada, Karnataka, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+916362908898" className="hover:text-accent transition-colors">+91 6362908898</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:info@dandeliwildadventure.com" className="hover:text-accent transition-colors">info@dandeliwildadventure.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Dandeli Wild Adventure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
