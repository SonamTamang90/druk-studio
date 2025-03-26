import AboutSectiion from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSectiion />
      <FeaturedSection />
      <PricingSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default LandingPage;
