import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UserStoriesSection from "@/components/UserStoriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <UserStoriesSection />
      <HowItWorksSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTAFooter />
      <Footer />
    </div>
  );
};

export default Index;
