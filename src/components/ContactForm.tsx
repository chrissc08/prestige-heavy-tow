import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { z } from "zod";

const PHONE = "(845) 794-8522";
const PHONE_HREF = "tel:8457948522";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  vehicleType: z.string().trim().min(1, "Vehicle type is required").max(100),
  location: z.string().trim().min(1, "Location is required").max(200),
  message: z.string().trim().max(1000).optional(),
});

type ContactData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<ContactData>({
    name: "",
    phone: "",
    vehicleType: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="bg-card border border-primary/30 rounded-lg p-12 glow-box">
            <h3 className="font-display text-2xl font-bold text-primary mb-3">Request Received!</h3>
            <p className="text-muted-foreground">We'll get back to you shortly. For immediate assistance, call us directly.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Contact Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          We're Here <span className="text-primary glow-teal">For You!</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-6">
          Our team is available for you 24 hours a day, 7 days a week!
        </p>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-md font-display font-bold text-xl md:text-2xl tracking-wide hover:bg-primary/90 transition-all glow-box hover:scale-105 mb-8"
        >
          <Phone size={28} />
          CALL {PHONE}!
        </a>

        <p className="text-muted-foreground text-base mb-8">We look forward to helping you.</p>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-5 text-left mt-8">
          {(["name", "phone", "vehicleType", "location"] as const).map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-foreground mb-1.5 capitalize">
                {field === "vehicleType" ? "Vehicle Type" : field}
              </label>
              <input
                id={field}
                name={field}
                type={field === "phone" ? "tel" : "text"}
                value={form[field]}
                onChange={handleChange}
                className="w-full bg-secondary border border-border text-foreground rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-muted-foreground"
                placeholder={
                  field === "name" ? "John Doe" :
                  field === "phone" ? "(845) 000-0000" :
                  field === "vehicleType" ? "e.g., Semi Truck, Box Truck" :
                  "Cross streets or address"
                }
              />
              {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-secondary border border-border text-foreground rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-muted-foreground resize-none"
              placeholder="Describe your situation..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-md font-display font-bold tracking-wide text-base hover:bg-primary/90 transition-colors glow-box"
          >
            <Send size={18} />
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
