import work1 from "@/assets/work-1.webp";
import work2 from "@/assets/work-2.webp";
import work3 from "@/assets/work-3.webp";
import work4 from "@/assets/work-4.webp";

const images = [
  { src: work1, alt: "Prestige Towing recovering an overturned trailer in winter conditions" },
  { src: work2, alt: "Prestige Towing heavy-duty recovery on a highway" },
  { src: work3, alt: "Prestige Towing truck performing roadside recovery in summer" },
  { src: work4, alt: "Prestige Towing heavy wrecker on a rural road" },
];

const OurWork = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">See Us In Action</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Our <span className="text-primary glow-teal">Work</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-border group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
