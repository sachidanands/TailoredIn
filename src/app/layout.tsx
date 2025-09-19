import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'TailoredIn - Ladies Tailor in Bangalore',
  description: 'Exquisite ladies tailoring services in Bangalore. Custom-fit blouses, salwar kameez, lehengas, and more.',
  openGraph: {
    title: 'TailoredIn - Ladies Tailor in Bangalore',
    description: 'Exquisite ladies tailoring services in Bangalore. Custom-fit blouses, salwar kameez, lehengas, and more.',
    images: [
      {
        url: 'https://i.imghippo.com/files/1v3xH1722426369.png',
        width: 800,
        height: 600,
        alt: 'TailoredIn Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TailoredIn',
    description: 'Exquisite ladies tailoring services in Bangalore. Custom-fit blouses, salwar kameez, lehengas, and more.',
    telephone: '+919590187030',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bangalore North',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560077',
      addressCountry: 'IN',
    },
    image: 'https://i.imghippo.com/files/1v3xH1722426369.png',
    url: 'https://www.tailoredin.com/', // Replace with your actual domain
    priceRange: 'Rs',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    "areaServed": [
      "Amarjyothi Extension",
      "Arkavathy Layout",
      "Dynasty Layout",
      "Dr. Shivaram Karanth Nagar",
      "Fortune Valley",
      "Mariyannapalya",
      "Manyata Tech Park",
      "Manyata Residency",
      "P&T Layout",
      "Rachenahalli",
      "Rachenahalli Main Road",
      "Railwaymen Layout",
      "Srirampura Jakkur",
      "Sinthan Nagar",
      "Areas within Jakkur",
      "Jakkur Aerospace Park",
      "Jakkur Garden City",
      "Jakkur Green City",
      "Jakkur Industrial Area",
      "Jakkur Lake View",
      "Jakkur Layout",
      "Jakkur Orchid Meadows",
      "Jakkur Palm Meadows",
      "Jakkur Plantation",
      "Jakkur Tulip Meadows",
      "Jakkur Village",
      "Neighboring areas",
      "Agrahara",
      "Amruthahalli",
      "Geddalahalli",
      "Kothnur Narayanapura",
      "Mesthri Palya",
      "Nagavara",
      "RK Hegde Nagar",
      "Sampangi Rama Nagar"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tailoring Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blouse (Simple)"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "500",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Blouse (Designer)"
          },
           "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "600",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salwar Kameez"
          },
           "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "800",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Alterations"
          },
           "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "200",
            "priceCurrency": "INR"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the best way to contact you for tailoring services in Bangalore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting in touch is easy! Simply click the prominent 'Call Now' button on our website or use the phone number listed in the footer. We're ready to discuss your custom tailoring needs."
        }
      },
      {
        "@type": "Question",
        "name": "How do I schedule a consultation with a tailor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just give us a call. Our representative will ask for your location to confirm service availability. If your area is covered, we will promptly schedule a convenient time for you to speak directly with one of our experienced tailors."
        }
      },
      {
        "@type": "Question",
        "name": "What is your typical turnaround time for tailoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For initial consultations and pickups in our serviced areas, we can typically have a representative with you within the hour. The timeline for completing your garment will be confirmed once we finalize the design and materials."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle measurements and material selection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a perfect fit, we recommend providing a well-fitting existing garment as a measurement sample. If you don't have one, don't worry! We will guide you through taking accurate measurements yourself."
        }
      },
      {
        "@type": "Question",
        "name": "How to Measure Your Bust?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To measure your bust size, you can follow these steps:\n1. Wear a well-fitting or non-padded bra for accurate measurements.\n2. Stand up straight with your arms relaxed at your sides.\n3. Wrap a measuring tape around your back and across the fullest part of your bust.\n4. The tape should be parallel to the floor and not too tight, but snug against your body.\n5. Make sure the tape is positioned around your breasts and back, without compressing your breasts.\n6. Take note of the measurement in inches where the end of the tape meets the rest of the tape measure.\n7. Repeat the measurement a couple of times, and take the average if there are slight variations.\n\nBy measuring around the fullest part of your bust, you can determine your bust size accurately."
        }
      },
      {
        "@type": "Question",
        "name": "What is the process for pickup and delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once we've finalized the design, measurements, and materials, our representative will arrange to pick up the fabric from you. After the tailoring is complete, we'll contact you to schedule a convenient delivery time."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have a physical shop I can visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate as a collective of skilled independent tailors dedicated to empowering women through their craft. We don't have a traditional brick-and-mortar shop, allowing us to focus on providing personalized, at-your-doorstep service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you accept large commercial or bulk orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our focus is on providing bespoke, individual tailoring services. We operate much like a personal tailor you would visit for specialized attention and do not handle commercial invoicing or bulk enterprise orders."
        }
      }
    ]
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="5M8a6xWs3w2DKEKVlZLlC2Wh3tcWa9iOxgo1Qb80m94" />
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
