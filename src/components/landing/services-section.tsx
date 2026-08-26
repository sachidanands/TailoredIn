"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/scroll-reveal';
import { BookingModal } from '@/components/landing/booking-modal';
import { Scissors, Sparkles, Check, Clock, MessageCircle } from 'lucide-react';

export interface TailoringService {
  id: string;
  name: string;
  category: string;
  startingPrice: string;
  turnaround: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const servicesData: TailoringService[] = [
  {
    id: 'simple-blouse',
    name: 'Simple Blouse Stitching',
    category: 'Blouse Tailoring',
    startingPrice: '₹500',
    turnaround: '3 - 4 Days',
    description: 'Precision stitched daily and festive wear blouses with flawless seams, neckline finishing, and comfortable fit.',
    features: [
      'Single/Double Katori or Cross-Cut pattern',
      'Cotton / semi-silk fabric handling',
      'Seamless hook and eye placket',
      'Extra seam allowance for future adjustments',
    ],
  },
  {
    id: 'designer-blouse',
    name: 'Designer Blouse Stitching',
    category: 'Blouse Tailoring',
    startingPrice: '₹600',
    turnaround: '3 - 5 Days',
    popular: true,
    description: 'Modern statement blouses tailored to your unique style. Bring any Pinterest or celebrity design to life.',
    features: [
      'Princess cut, Boat neck, Sweetheart & High neck',
      'Padded cup insertion with concealed seams',
      'Designer back cuts, Dori & Potli button styling',
      'Matching piping & premium inner lining',
    ],
  },
  {
    id: 'aari-work-blouse',
    name: 'Aari & Maggam Work Blouse',
    category: 'Bridal & Handwork',
    startingPrice: '₹1,500',
    turnaround: '5 - 7 Days',
    popular: true,
    description: 'Breathtaking handcrafted bridal embroidery with antique zardosi, pearl, stone, cutwork, and thread embroidery.',
    features: [
      'Custom bridal necklines, back motifs & sleeve borders',
      'Zardosi, beadwork, mirror work & silk thread',
      'Precise neckline framing for bridal jewellery',
      'Stiffened canvas backing & comfortable pure cotton lining',
    ],
  },
  {
    id: 'salwar-kameez',
    name: 'Salwar Suits, Kurtis & Anarkalis',
    category: 'Ethnic Wear',
    startingPrice: '₹800',
    turnaround: '3 - 5 Days',
    description: 'Custom tailored ethnic wear designed for elegance and comfort, from everyday cotton suits to regal festive Anarkalis.',
    features: [
      'Straight cut, Punjabi Patiala, Pakistani & Palazzo suits',
      'Flared floor-length Anarkalis & Angrakha styles',
      'Neckline embroidery placement & custom slit lengths',
      'Pant/trouser with pockets and elasticated/drawstring waist',
    ],
  },
  {
    id: 'bridal-lehenga',
    name: 'Bridal Lehenga Choli & Gowns',
    category: 'Bridal & Occasion',
    startingPrice: '₹3,000',
    turnaround: '5 - 8 Days',
    popular: true,
    description: 'Royal wedding wear tailoring with heavy kali panels, multi-tier can-can flairs, padded cholis, and custom latkans.',
    features: [
      'Multi-layer can-can attachment for voluminous flare',
      'Padded choli with designer neck & back styling',
      'Heavy border matching & waist belt attachment',
      'Dupatta border finishing, piping & corner tassels',
    ],
  },
  {
    id: 'alterations-restyling',
    name: 'Alterations & Saree Upcycling',
    category: 'Alterations & Restyling',
    startingPrice: '₹200',
    turnaround: '2 - 3 Days',
    description: 'Breathe new life into your wardrobe. Downsize, loosen, re-fit, or transform your vintage sarees into modern Anarkalis or lehengas.',
    features: [
      'Blouse, dress, suit & gown size adjustments',
      'Sleeve attachment & armhole reshaping',
      'Vintage saree conversion into designer kurtis/lehengas',
      'Zipper repair, hook replacement & hem shortening',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/30 border-t border-b py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Scissors className="h-3.5 w-3.5" />
              <span>What We Stitch</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Bespoke Ladies Tailoring Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              From everyday essentials to dream wedding outfits, our master seamstresses craft every stitch to perfection with doorstep service across Bangalore.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} className="h-full">
              <Card className="h-full flex flex-col justify-between border-border/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden bg-card">
                {service.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-bl-lg shadow-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {service.category}
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2 text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  {/* Pricing & Timeline Badges */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border">
                    <div>
                      <span className="text-xs text-muted-foreground block">Starting at</span>
                      <span className="text-xl font-bold text-primary font-price">
                        {service.startingPrice}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground block">Delivery in</span>
                      <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
                        <Clock className="h-3.5 w-3.5 text-accent" />
                        <span>{service.turnaround}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                      Includes & Highlights:
                    </span>
                    <ul className="space-y-1.5 text-sm text-foreground/80">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 flex flex-col gap-2">
                  <BookingModal defaultService={service.name} className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Sparkles className="mr-2 h-4 w-4 text-accent" />
                      Book This Service
                    </Button>
                  </BookingModal>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs text-muted-foreground hover:text-green-700 hover:bg-green-50"
                    asChild
                  >
                    <a
                      href={`https://wa.me/919590187030?text=Hello%20TailoredIn!%20I'm%20interested%20in%20${encodeURIComponent(service.name)}.%20Can%20you%20share%20more%20details%3F`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-1.5 h-3.5 w-3.5 text-green-600" />
                      Inquire on WhatsApp
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
