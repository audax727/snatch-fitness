import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingWhatsapp from '@/components/floating-whatsapp';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import FacilitiesSection from '@/components/sections/facilities-section';
import MembershipSection from '@/components/sections/membership-section';
// import TestimonialsSection from '@/components/sections/testimonials-section';
import TrainersSection from '@/components/sections/trainers-section';
import LocationSection from '@/components/sections/location-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <MembershipSection />
        {/* <TestimonialsSection /> */}
        <TrainersSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
