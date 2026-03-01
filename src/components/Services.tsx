import { Truck, Shield, Construction, Package, AlertTriangle, Wrench } from "lucide-react";

const services = [
  { icon: Truck, title: "Commercial Towing", desc: "Full-service commercial vehicle towing for trucks, vans, and fleet vehicles." },
  { icon: Shield, title: "Heavy-Duty Recovery", desc: "Specialized recovery for overturned, stuck, or damaged heavy vehicles." },
  { icon: Construction, title: "Tractor Trailer Towing", desc: "Expert towing for semi-trucks, trailers, and 18-wheelers." },
  { icon: Package, title: "Equipment Transport", desc: "Safe transport for construction equipment and heavy machinery." },
  { icon: AlertTriangle, title: "Accident Recovery", desc: "Fast response for accident scenes with professional cleanup." },
  { icon: Wrench, title: "Commercial Roadside", desc: "On-the-spot roadside assistance for commercial vehicles." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Our <span className="text-primary glow-teal">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-card border border-border rounded-lg p-8 hover:glow-border transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <svc.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
