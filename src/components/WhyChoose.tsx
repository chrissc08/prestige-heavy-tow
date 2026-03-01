import { MapPin, Zap, Cog, Users, Globe, ThumbsUp } from "lucide-react";

const points = [
  { icon: MapPin, title: "Locally Owned & Operated", desc: "We know Sullivan County because we're from Sullivan County." },
  { icon: Zap, title: "Fast Response Times", desc: "When you call, we're already on our way." },
  { icon: Cog, title: "Heavy-Duty Equipment", desc: "Built to handle the toughest recovery jobs." },
  { icon: Users, title: "Experienced Operators", desc: "Skilled professionals with years of towing expertise." },
  { icon: Globe, title: "Serving All of Sullivan County", desc: "From Liberty to Monticello and everywhere in between." },
  { icon: ThumbsUp, title: "Reliable & Professional", desc: "Count on us to get the job done right, every time." },
];

const WhyChoose = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Prestige Difference</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Why Choose <span className="text-primary glow-teal">Prestige</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-box">
                <p.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
