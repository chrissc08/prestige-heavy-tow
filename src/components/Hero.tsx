import { Phone, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const PHONE = "(845) 794-8522";
const PHONE_HREF = "tel:8457948522";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Prestige Towing heavy duty tow truck with company branding"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* No overlays — fully unfiltered photo */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-28 md:pt-36">
        {/* Emergency badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8 animate-slide-up">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            24/7 Emergency Service
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 max-w-5xl mx-auto animate-slide-up [animation-delay:0.1s] opacity-0">
          Sullivan County's Trusted{" "}
          <span className="text-primary glow-teal">Commercial Towing</span>{" "}
          & Recovery Experts
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up [animation-delay:0.2s] opacity-0">
          Fast. Reliable. Heavy-Duty. 24/7 Emergency Service.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:0.3s] opacity-0">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-md font-display font-bold text-lg tracking-wide hover:bg-primary/90 transition-all glow-box hover:scale-105"
          >
            <Phone size={22} />
            CALL NOW – {PHONE}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-md font-display font-semibold text-lg tracking-wide hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Request Service
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
