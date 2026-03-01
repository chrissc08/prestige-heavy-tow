const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-8">
          Prestige <span className="text-primary glow-teal">Towing & Recovery</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Prestige Towing & Recovery proudly serves Sullivan County with dependable commercial towing and recovery services. Our team is equipped to handle heavy-duty jobs safely and efficiently. When you need reliable service, we respond fast.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Based at 7 Sullivan Ave, Liberty, NY 12754, we've built our reputation on fast response times, professional operators, and the heavy-duty equipment needed to get any job done right.
        </p>
      </div>
    </section>
  );
};

export default About;
