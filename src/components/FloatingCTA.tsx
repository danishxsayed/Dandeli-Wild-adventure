import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "6362908898";

const FloatingCTA = () => {
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/91${PHONE_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20Dandeli%20Wild%20Adventure%20packages.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>
      <a
        href={`tel:+91${PHONE_NUMBER}`}
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingCTA;
