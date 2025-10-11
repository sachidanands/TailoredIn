import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { BengaluruLocations } from '@/components/locations/bengaluru-locations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Locations in Bengaluru - TailoredIn',
    description: 'Find all the areas we serve in Bengaluru for our ladies tailoring services. We offer pickup and delivery across multiple locations.',
    openGraph: {
      title: 'Service Locations in Bengaluru - TailoredIn',
      description: 'Find all the areas we serve in Bengaluru for our ladies tailoring services.',
      url: 'https://www.tailoredin.online/locations/bengaluru',
    },
    alternates: {
        canonical: '/locations/bengaluru',
    },
};

export default function LocationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <BengaluruLocations />
      </main>
      <Footer />
    </div>
  );
}
