import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { PriceSection } from '@/components/landing/price-section';
import { WhyUsSection } from '@/components/landing/why-us-section';
import { ExperienceSection } from '@/components/landing/experience-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PriceSection />
        <WhyUsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
