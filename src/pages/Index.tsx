import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import OurWork from "@/components/OurWork";
import ServiceArea from "@/components/ServiceArea";
import EmergencyCall from "@/components/EmergencyCall";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <OurWork />
        <ServiceArea />
        <EmergencyCall />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
};

export default Index;
