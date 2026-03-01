import { Phone } from "lucide-react";

const PHONE = "(845) 794-8522";
const PHONE_HREF = "tel:8457948522";

const EmergencyCall = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Need <span className="text-primary glow-teal">Immediate</span> Towing?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg mx-auto">
          Don't wait. Our team is standing by 24/7 for emergency towing and recovery.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-md font-display font-bold text-xl md:text-2xl tracking-wide hover:bg-primary/90 transition-all glow-box hover:scale-105"
        >
          <Phone size={28} />
          {PHONE}
        </a>
      </div>
    </section>
  );
};

export default EmergencyCall;
