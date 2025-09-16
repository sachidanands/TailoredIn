import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'TailoredIn - Ladies Tailor in Bangalore',
  description: 'Exquisite ladies tailoring services in Bangalore. Custom-fit blouses, salwar kameez, lehengas, and more.',
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
    image: 'https://i.imghippo.com/files/lWI3994nAk.jpeg',
    url: 'https://www.tailoredin.com/', // Replace with your actual domain
    priceRange: '$$',
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
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
