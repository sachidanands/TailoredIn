import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { ServicesSection } from '@/components/landing/services-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { PriceSection } from '@/components/landing/price-section';
import { MeasurementGuideSection } from '@/components/landing/measurement-guide-section';
import { WhyUsSection } from '@/components/landing/why-us-section';
import { LocationsSection } from '@/components/landing/locations-section';
import { ExperienceSection } from '@/components/landing/experience-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { StickyMobileCTA } from '@/components/landing/sticky-mobile-cta';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden w-full max-w-full">
      <Header />
      <main className="flex-1 overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <PriceSection />
        <MeasurementGuideSection />
        <WhyUsSection />
        <LocationsSection />
        <ExperienceSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
