import { useState } from "react";
import { Phone, Menu, X, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE = "(845) 794-8522";
const PHONE_HREF = "tel:8457948522";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Area", href: "#service-area" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Prestige Towing" className="h-14 md:h-16 w-auto" />
          <div className="hidden sm:block">
            <span className="font-display text-lg md:text-xl font-bold text-foreground tracking-wide">
              PRESTIGE
            </span>
            <span className="block text-[10px] md:text-xs tracking-[0.2em] text-primary font-medium -mt-1">
              TOWING & RECOVERY
            </span>
          </div>
        </a>

        {/* Emergency Badge */}
        <div className="hidden lg:flex items-center gap-2 text-primary text-sm font-semibold">
          <Clock size={16} className="animate-pulse-glow" />
          <span>24/7 EMERGENCY SERVICE</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={PHONE_HREF}
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-display font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors glow-box"
        >
          <Phone size={16} />
          {PHONE}
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface-dark border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-display font-bold tracking-wide mt-2"
            >
              <Phone size={18} />
              CALL NOW – {PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
