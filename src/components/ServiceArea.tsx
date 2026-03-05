const areas = ["Roscoe", "Liberty", "North Branch", "Fallsburg", "Harris", "Bethel", "Cochecton", "Monticello", "Wurtsboro", "Chester", "Monroe"];

const ServiceArea = () => {
  return (
    <section id="service-area" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Coverage</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Serving <span className="text-primary glow-teal">Sullivan County, NY</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Proudly providing commercial towing and recovery services throughout Sullivan County and the surrounding areas.
          </p>
        </div>

        {/* Area tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-primary/10 border border-primary/30 text-primary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Google Map */}
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-border glow-box">
          <iframe
            title="Prestige Towing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.8!2d-74.7462!3d41.8014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0e1c7e7d1b1f%3A0x0!2s7+Sullivan+Ave%2C+Liberty%2C+NY+12754!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
