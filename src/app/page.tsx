import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { PriceSection } from '@/components/landing/price-section';
import { WhyUsSection } from '@/components/landing/why-us-section';
import { ExperienceSection } from '@/components/landing/experience-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { GoogleTagManager } from '@/components/google-tag-manager';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <GoogleTagManager gtmId="GTM-M4V26FT4" />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PriceSection />
        <WhyUsSection />
        <ExperienceSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
