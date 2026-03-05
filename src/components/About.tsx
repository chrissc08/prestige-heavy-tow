const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-8">
          Prestige <span className="text-primary glow-teal">Towing & Companies</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Prestige was founded in the early 90's by Sullivan County's own, Sean Brooks. Prestige has since become a multi location, full service towing, recovery & repair company, servicing thousands of commercial companies with its vast line of equipment & strategic locations, to provide dependable & fast service to its clients.
        </p>
      </div>
    </section>
  );
};

export default About;
