import { Truck, HardHat, AlertTriangle, Wrench } from "lucide-react";

import { Car } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Heavy Duty Towing & Recovery",
    badge: "24 Hour Emergency Service",
    desc: "Professional heavy-duty towing and recovery services available around the clock. No job is too big or too complex for our fleet.",
  },
  {
    icon: HardHat,
    title: "Heavy Equipment Hauling",
    badge: "Any Equipment, Any Size",
    desc: "Safe and reliable transport for construction equipment, industrial machinery, and oversized loads throughout Sullivan County and beyond.",
  },
  {
    icon: AlertTriangle,
    title: "24 Hour Towing & Road Service",
    badge: null,
    desc: "Roadside Assistance in Sullivan, Orange, Ulster, and Delaware County.",
  },
  {
    icon: Wrench,
    title: "Complete Autobody, Fabrication, & Mechanical Repair Facilities",
    badge: null,
    desc: "We handle everything. From the initial tow from the accident scene to final repairs. We will work with ALL INSURANCE COMPANIES as well as fleet and private owners.",
  },
  {
    icon: Car,
    title: "Rental & Leasing Services",
    badge: null,
    desc: "Rental vehicles and trailer leasing available while repairs are being made.",
  },
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

        <div className="grid md:grid-cols-2 gap-6 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-[calc(50%-0.75rem)] [&>*:last-child:nth-child(odd)]:md:mx-auto">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-card border border-border rounded-lg p-8 hover:glow-border transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{svc.title}</h3>
                  {svc.badge && (
                    <span className="inline-block text-xs font-bold tracking-wider uppercase bg-primary/15 text-primary px-3 py-1 rounded-full mb-3">
                      {svc.badge}
                    </span>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
