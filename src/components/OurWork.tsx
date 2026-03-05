import work1 from "@/assets/work-1.webp";
import work2 from "@/assets/work-2.webp";
import work3 from "@/assets/work-3.webp";
import work4 from "@/assets/work-4.webp";
import work5 from "@/assets/work-5.webp";
import work6 from "@/assets/work-6.webp";
import work7 from "@/assets/work-7.webp";
import work8 from "@/assets/work-8.webp";
import work9 from "@/assets/work-9.webp";
import work10 from "@/assets/work-10.webp";
import work11 from "@/assets/work-11.webp";
import work12 from "@/assets/work-12.webp";
import work13 from "@/assets/work-13.webp";
import work14 from "@/assets/work-14.webp";
import work15 from "@/assets/work-15.webp";

const images = [
  { src: work1, alt: "Prestige Towing recovering an overturned trailer in winter conditions", focus: "object-center" },
  { src: work2, alt: "Prestige Towing heavy-duty recovery on a highway", focus: "object-center" },
  { src: work3, alt: "Prestige Towing truck performing roadside recovery in summer", focus: "object-center" },
  { src: work4, alt: "Prestige Towing heavy wrecker on a rural road", focus: "object-center" },
  { src: work5, alt: "Prestige Towing rotator crane lifting inside a warehouse", focus: "object-[50%_65%]" },
  { src: work6, alt: "Prestige Towing heavy recovery of an overturned dump truck", focus: "object-[50%_48%]" },
  { src: work7, alt: "Prestige Towing highway recovery with crane extended", focus: "object-[50%_55%]" },
  { src: work8, alt: "Prestige Towing roadside recovery with multiple wreckers", focus: "object-[50%_45%]" },
  { src: work9, alt: "Prestige Towing hauling oversized excavator on lowboy trailer", focus: "object-[52%_44%]" },
  { src: work10, alt: "Prestige Towing bridge recovery of an overturned truck", focus: "object-[50%_42%]" },
  { src: work11, alt: "Prestige Towing multi-truck recovery operation on a roadway", focus: "object-[50%_55%]" },
  { src: work12, alt: "Prestige Towing rotator recovering an overturned vehicle in a yard", focus: "object-[48%_46%]" },
  { src: work13, alt: "Prestige Towing dual rotators uprighting a trailer on highway", focus: "object-[50%_55%]" },
  { src: work14, alt: "Prestige Towing rotator recovering an overturned box truck on a country road", focus: "object-[50%_55%]" },
  { src: work15, alt: "Prestige Towing roadside cleanup with loader and excavator", focus: "object-[50%_46%]" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-border group aspect-[4/3] relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover ${img.focus} group-hover:scale-105 transition-transform duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
