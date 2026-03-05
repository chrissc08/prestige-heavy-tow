import ownerImg from "@/assets/owner.webp";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Prestige <span className="text-primary glow-teal">Towing & Companies</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-lg overflow-hidden border-2 border-primary/20 glow-box">
            <img
              src={ownerImg}
              alt="Sean Brooks, Owner of Prestige Towing & Companies"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-foreground mb-1">Sean Brooks</h3>
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Founder & Owner</span>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Prestige was founded in the early 90's by Sullivan County's own, Sean Brooks. Prestige has since become a multi location, full service towing, recovery & repair company, servicing thousands of commercial companies with its vast line of equipment & strategic locations, to provide dependable & fast service to its clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;