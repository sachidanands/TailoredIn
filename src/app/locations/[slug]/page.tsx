import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { StickyMobileCTA } from '@/components/landing/sticky-mobile-cta';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { MeasurementGuideSection } from '@/components/landing/measurement-guide-section';
import { WhyUsSection } from '@/components/landing/why-us-section';
import { PriceCalculator } from '@/components/landing/price-calculator';
import { LocationHero } from '@/components/locations/location-hero';
import { LocationServices } from '@/components/locations/location-services';
import { LocationFaqs } from '@/components/locations/location-faqs';
import { LocationCrosslinks } from '@/components/locations/location-crosslinks';
import {
  locationDetailsList,
  getLocationBySlug,
  getAllLocationSlugs,
} from '@/lib/locations-data';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: 'Location Not Found | TailoredIn Bangalore',
    };
  }

  const pageUrl = `https://www.tailoredin.online/locations/${location.slug}`;

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: [
      `ladies tailor in ${location.name.toLowerCase()}`,
      `blouse stitching in ${location.name.toLowerCase()} bangalore`,
      `online ladies tailor ${location.name.toLowerCase()}`,
      `doorstep tailoring ${location.name.toLowerCase()}`,
      `designer blouse tailor ${location.name.toLowerCase()}`,
      `aari work blouse ${location.name.toLowerCase()}`,
      `salwar suit stitching ${location.name.toLowerCase()}`,
      `ladies tailor near me ${location.name.toLowerCase()}`,
      ...location.popularLandmarks.map((l) => `tailor near ${l.toLowerCase()}`),
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: pageUrl,
      siteName: 'TailoredIn',
      images: [
        {
          url: 'https://www.tailoredin.online/Img/tailored-In-image.png',
          width: 1200,
          height: 630,
          alt: `TailoredIn Ladies Tailoring Service in ${location.name}, Bangalore`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: location.metaTitle,
      description: location.metaDescription,
      images: ['https://www.tailoredin.online/Img/tailored-In-image.png'],
    },
    other: {
      'geo.region': 'IN-KA',
      'geo.placename': `${location.name}, Bengaluru, Karnataka, India`,
      'geo.position': `${location.coordinates.latitude};${location.coordinates.longitude}`,
      ICBM: `${location.coordinates.latitude}, ${location.coordinates.longitude}`,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Location-specific LocalBusiness / TailorShop schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ClothingStore', 'ProfessionalService'],
    '@id': `https://www.tailoredin.online/locations/${location.slug}/#business`,
    name: `TailoredIn Ladies Tailoring - ${location.name}, Bangalore`,
    legalName: 'TailoredIn Seamstress Collective',
    description: location.metaDescription,
    url: `https://www.tailoredin.online/locations/${location.slug}`,
    telephone: '+919590187030',
    email: 'contact@tailoredin.online',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Google Pay, PhonePe, Paytm, Net Banking',
    logo: 'https://www.tailoredin.online/Img/tailored-In-image.png',
    image: 'https://www.tailoredin.online/Img/tailored-In-image.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.popularLandmarks[0] || `${location.name} Main Road`,
      addressLocality: location.name,
      addressRegion: 'Karnataka',
      postalCode: location.pincodes[0],
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: `${location.name}, Bangalore`,
      },
      ...location.popularLandmarks.map((landmark) => ({
        '@type': 'Place',
        name: `${landmark}, Bangalore`,
      })),
    ],
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.tailoredin.online',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bangalore Locations',
        item: 'https://www.tailoredin.online/#locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${location.name} Ladies Tailor`,
        item: `https://www.tailoredin.online/locations/${location.slug}`,
      },
    ],
  };

  // Local FAQs schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.localFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* Dynamic SEO Schemas */}
      <Script
        id={`schema-local-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id={`schema-breadcrumb-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`schema-faq-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="flex-1">
          {/* Localized Hero with local reviews & pickup badge */}
          <LocationHero location={location} />

          {/* Localized Tailoring Services with Starting Prices */}
          <LocationServices location={location} />

          {/* 4-Step Doorstep Stitching Process */}
          <HowItWorksSection />

          {/* Interactive Pricing Estimation Tool */}
          <section className="py-16 md:py-20 bg-background border-t border-border/70">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center space-y-3 mb-10">
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                  Estimate Your Tailoring Cost for {location.name}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Select your desired garments and add-ons to get a transparent instant quote with free doorstep trial.
                </p>
              </div>
              <PriceCalculator />
            </div>
          </section>

          {/* Step-by-Step Measurement Guide */}
          <MeasurementGuideSection />

          {/* Why Choose Us Trust Pillars */}
          <WhyUsSection />

          {/* Localized FAQs */}
          <LocationFaqs location={location} />

          {/* Neighborhoods & Bangalore Network Internal Linking */}
          <LocationCrosslinks currentLocation={location} />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </>
  );
}
