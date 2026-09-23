import { Phone } from "lucide-react";

const PHONE_NUMBER = "6362908898";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const FloatingCTA = () => {
  const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20Dandeli%20Wild%20Adventure%20packages.`;
  const callUrl = `tel:+91${PHONE_NUMBER}`;

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar: Half Call, Half Send msg */}
      <nav
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-stretch shadow-[0_-4px_20px_rgba(0,0,0,0.18)] border-t border-white/10"
      >
        {/* Left half: Call */}
        <a
          href={callUrl}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 pb-[max(0.875rem,calc(0.875rem+env(safe-area-inset-bottom)))] px-3 bg-primary active:bg-primary/90 text-primary-foreground font-semibold text-base transition-colors border-r border-white/20 select-none"
          aria-label="Call Dandeli Wild Adventure"
        >
          <Phone className="w-5 h-5 shrink-0" />
          <span>Call</span>
        </a>

        {/* Right half: Send msg (WhatsApp) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 pb-[max(0.875rem,calc(0.875rem+env(safe-area-inset-bottom)))] px-3 bg-[#25D366] active:bg-[#20ba59] text-white font-semibold text-base transition-colors select-none"
          aria-label="Send message on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 shrink-0" />
          <span>Send msg</span>
        </a>
      </nav>

      {/* Desktop Floating Action Buttons */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm text-white text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
            Send msg
          </span>
        </a>
        <a
          href={callUrl}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7 text-primary-foreground" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm text-white text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
            Call
          </span>
        </a>
      </div>
    </>
  );
};

export default FloatingCTA;

