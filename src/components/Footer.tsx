import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE = "(845) 794-8522";
const PHONE_HREF = "tel:8457948522";

const Footer = () => {
  return (
    <footer className="bg-surface-dark border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Prestige Towing" className="h-10 w-auto opacity-80" />
              <div>
                <span className="font-display text-lg font-bold text-foreground">PRESTIGE</span>
                <span className="block text-[10px] tracking-[0.2em] text-primary -mt-1">TOWING & RECOVERY</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sullivan County's trusted commercial towing and heavy-duty recovery service. Available 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 tracking-wide">Quick Links</h4>
            <div className="space-y-2">
              {["Services", "Why Us", "Service Area", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-primary font-semibold hover:underline">
                <Phone size={16} />
                {PHONE}
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>7 Sullivan Ave<br />Liberty, NY 12754</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Serving Liberty, Monticello, Fallsburg, Rock Hill, Woodridge & surrounding areas.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Prestige Towing & Recovery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
