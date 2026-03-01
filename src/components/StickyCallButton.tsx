import { Phone } from "lucide-react";

const PHONE_HREF = "tel:8457948522";

const StickyCallButton = () => {
  return (
    <a
      href={PHONE_HREF}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-full font-display font-bold text-sm tracking-wide shadow-lg glow-box animate-pulse-glow"
      aria-label="Call Prestige Towing"
    >
      <Phone size={20} />
      CALL NOW
    </a>
  );
};

export default StickyCallButton;
