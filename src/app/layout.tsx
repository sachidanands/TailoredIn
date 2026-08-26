import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import { serviceLocations } from '@/lib/locations';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tailoredin.online'),
  title: 'TailoredIn | Best Ladies Tailor in Bangalore - Doorstep Blouse, Salwar & Lehenga Stitching',
  description:
    "Bangalore's trusted online ladies tailor with doorstep measurement & fabric pickup, delivered in 3-5 days. Expert custom designer blouses, Aari work, bridal lehengas, salwar suits, kurtis & alterations across Bengaluru. Call/WhatsApp: +91 95901 87030.",
  keywords: [
    'ladies tailor in bangalore',
    'online ladies tailoring bangalore',
    'doorstep tailoring service bangalore',
    'blouse stitching bangalore',
    'designer blouse tailor bangalore',
    'aari work blouse bangalore',
    'bridal lehenga stitching bangalore',
    'salwar kameez tailor bangalore',
    'ladies tailor in jakkur',
    'ladies tailor in hebbal',
    'ladies tailor in yelahanka',
    'ladies tailor in manyata tech park',
    'dress alteration near me bangalore',
    'custom tailoring for women bangalore',
  ],
  authors: [{ name: 'TailoredIn Seamstress Collective' }],
  creator: 'TailoredIn',
  publisher: 'TailoredIn',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: 'https://www.tailoredin.online',
  },
  openGraph: {
    title: 'TailoredIn | Best Ladies Tailor in Bangalore - Doorstep Stitching & Fitting',
    description:
      'Experience perfect custom fit with Bangalore’s premier doorstep ladies tailoring service. Designer blouses, lehengas, salwar suits & alterations delivered in 3-5 days.',
    url: 'https://www.tailoredin.online',
    siteName: 'TailoredIn',
    images: [
      {
        url: 'https://www.tailoredin.online/Img/tailored-In-image.png',
        width: 1200,
        height: 630,
        alt: 'TailoredIn - Ladies Tailoring Service Bangalore',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TailoredIn | Best Ladies Tailor in Bangalore',
    description:
      'Doorstep measurement, fabric pickup & delivery in 3-5 days across Bengaluru. Custom blouses, suits, lehengas & alterations.',
    images: ['https://www.tailoredin.online/Img/tailored-In-image.png'],
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru, Karnataka, India',
    'geo.position': '13.0768;77.5975',
    'ICBM': '13.0768, 77.5975',
    'format-detection': 'telephone=yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'ClothingStore'],
    '@id': 'https://www.tailoredin.online/#business',
    name: 'TailoredIn',
    legalName: 'TailoredIn Ladies Tailoring Collective',
    alternateName: 'TailoredIn Bangalore',
    description:
      'Premier doorstep ladies tailoring service in Bangalore. Expert custom-fit blouses, Aari embroidery, salwar kameez, bridal lehengas, and alterations delivered to your doorstep in 3-5 days.',
    url: 'https://www.tailoredin.online/',
    telephone: '+919590187030',
    email: 'contact@tailoredin.online',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Google Pay, PhonePe, Paytm, Net Banking',
    logo: 'https://www.tailoredin.online/Img/tailored-In-image.png',
    image: 'https://www.tailoredin.online/Img/tailored-In-image.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bangalore North',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560077',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.07682,
      longitude: 77.59751,
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
      reviewCount: '128',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: serviceLocations.map((loc) => ({
      '@type': 'City',
      name: `${loc}, Bangalore`,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ladies Tailoring Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Simple Blouse Stitching',
            description: 'Custom stitched simple blouse with precision fit and fine finishing.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '500',
            priceCurrency: 'INR',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Designer Blouse Stitching (Princess Cut / Boat Neck / Padded)',
            description: 'Modern designer blouses with cup padding, deep back designs, latkans, and custom piping.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '600',
            priceCurrency: 'INR',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aari & Maggam Work Blouse',
            description: 'Intricate bridal zari embroidery, zardosi, thread work, and cutwork hand embroidery.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '1500',
            priceCurrency: 'INR',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "How does TailoredIn's doorstep ladies tailoring service in Bangalore work?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply call us or message us on WhatsApp (+91 95901 87030) or book a consultation online. Our tailoring representative visits your doorstep to collect your fabric and measurements (or take your best-fitting sample garment). Our master tailors stitch your outfit with precision, and we deliver the finished outfit to your doorstep within 3-5 days with a 100% fit guarantee.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the starting price for blouse stitching in Bangalore?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our simple blouse stitching starts at just ₹500/-, and designer blouses (princess cut, padded, boat neck) start at ₹600/-. Aari and Maggam embroidery blouses start from ₹1,500/- based on embroidery complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is your typical turnaround time for tailoring orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard turnaround time is 3 to 5 business days from the date of fabric pickup. We also offer express 24 to 48 hours delivery for urgent requirements upon request.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you ensure a 100% perfect fit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can provide your best-fitting sample blouse or kurti, or our experienced tailoring expert will guide you through taking precise body measurements. If any slight alteration is needed upon delivery, we provide free doorstep alteration support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which areas in Bangalore do you provide doorstep pickup and delivery?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide doorstep pickup and delivery across Bangalore, including North Bangalore (Jakkur, Hebbal, Yelahanka, Sahakar Nagar, Manyata Tech Park, Thanisandra, Amruthahalli, Hennur), East Bangalore (Indiranagar, Whitefield, Marathahalli, Bellandur), South Bangalore (Koramangala, HSR Layout, Jayanagar, JP Nagar), and Central/West Bangalore (Malleshwaram, Rajajinagar, Sadashivanagar).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you stitch custom designs from Pinterest or Instagram photos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can share reference photos from Pinterest, Instagram, or celebrity outfits on WhatsApp. Our master pattern-makers with 20+ years of experience will customize the design to suit your body shape and fabric.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide lining fabric, pads, and latkans/tassels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide premium quality pure cotton lining, imported bra pads, high-grade zippers, hooks, piping, and handcrafted designer latkans/tassels upon request.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I take bust measurements accurately at home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wear a well-fitting non-padded bra. Stand relaxed with arms at your sides. Wrap a measuring tape around your back and across the fullest part of your bust, keeping the tape parallel to the floor without pulling tight. Note the measurement in inches.',
        },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Book Doorstep Ladies Tailoring in Bangalore',
    description: '4 simple steps to get custom-fit blouses and ethnic wear tailored at your doorstep in Bengaluru.',
    totalTime: 'P4D',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Request Consultation or Call',
        text: 'Click Call Now (+91 95901 87030) or WhatsApp us with your design requirements and location.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Doorstep Pickup & Measurement',
        text: 'Our tailoring representative collects your fabric and reference sample garment or takes custom measurements.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Master Tailor Craftsmanship',
        text: 'Experienced women master tailors craft your garment with double interlocking stitches and premium finishing.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Doorstep Delivery & Trial',
        text: 'Receive your beautifully ironed, custom-fit outfit delivered to your door in 3-5 days with a fit guarantee.',
      },
    ],
  };

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
        name: 'Services',
        item: 'https://www.tailoredin.online/#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pricing',
        item: 'https://www.tailoredin.online/#pricing',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Bangalore Service Locations',
        item: 'https://www.tailoredin.online/#locations',
      },
    ],
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="gtm-init" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M4V26FT4');
        `}</Script>
        <link rel="canonical" href="https://www.tailoredin.online" />
        <meta name="google-site-verification" content="5M8a6xWs3w2DKEKVlZLlC2Wh3tcWa9iOxgo1Qb80m94" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-body antialiased selection:bg-primary/20 selection:text-primary">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4V26FT4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
