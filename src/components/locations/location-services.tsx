import { LocationDetail } from '@/lib/locations-data';
import { BookingModal } from '@/components/landing/booking-modal';
import { Button } from '@/components/ui/button';
import { Sparkles, Check, ArrowRight, Scissors } from 'lucide-react';

interface LocationServicesProps {
  location: LocationDetail;
}

export function LocationServices({ location }: LocationServicesProps) {
  const allServices = [
    {
      title: 'Simple & Daily Blouse',
      desc: 'Comfort-fit round neck, square neck, or V-neck simple blouse with fine finish and double interlocking.',
      price: '₹500',
      tag: 'Most Popular',
      features: ['Pure cotton lining', 'High-grade hooks & loops', 'Custom sleeve lengths'],
    },
    {
      title: 'Designer Blouse (Princess Cut / Boat Neck / Padded)',
      desc: 'Cup padded designer blouse, boat neck, backless, potli buttons, and custom designer necklines.',
      price: '₹600',
      tag: 'Bestseller',
      features: ['High-density soft pads', 'Contrast piping & latkans', 'Back cutouts & ties'],
    },
    {
      title: 'Bridal Aari & Maggam Work Blouse',
      desc: 'Intricate wedding zari embroidery, zardosi, antique beads, and cutwork crafted by expert artisans.',
      price: '₹1,500',
      tag: 'Bridal Special',
      features: ['Custom bridal motifs', 'Authentic zari & pearls', 'Pre-embroidery design alignment'],
    },
    {
      title: 'Salwar Kameez & Kurti Stitching',
      desc: 'Custom-fit straight kurtis, Punjabi suits, palazzo sets, cigarette pants, and Patiala salwars.',
      price: '₹800',
      tag: 'Daily & Office',
      features: ['Comfortable armholes', 'Pocket attachments', 'Perfect side slits & hemlines'],
    },
    {
      title: 'Bridal Lehenga Choli & Ethnic Gowns',
      desc: 'Heavy flared bridal lehengas with can-can layering, padded choli blouse, and designer tassels.',
      price: '₹3,000',
      tag: 'Wedding Couture',
      features: ['Multi-layer can-can flare', 'Custom waist drawstring', 'Dupatta border attachment'],
    },
    {
      title: 'Alterations, Restyling & Saree Pico/Fall',
      desc: 'Doorstep resizing, sleeve additions, blouse adjustments, saree fall/pico, and vintage saree upcycling.',
      price: '₹200',
      tag: 'Quick Service',
      features: ['Doorstep trial', 'Same-day alteration pickup', 'Gentle fabric care'],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card/40 border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Scissors className="h-3.5 w-3.5" />
            <span>Tailoring Services in {location.name}</span>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Custom Stitching Services Available in {location.name}
          </h2>
          <p className="text-base text-muted-foreground">
            From simple everyday blouses to intricate bridal lehengas, our seamstresses deliver impeccable craftsmanship right to your doorstep in {location.name}.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {service.tag}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">Starts from</span>
                    <p className="text-xl font-bold text-primary">{service.price}*</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="border-t border-border/70 pt-4 space-y-2">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Included in Service:
                  </p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-border/70">
                <BookingModal
                  defaultArea={location.name}
                  defaultService={service.title}
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all text-xs sm:text-sm font-semibold"
                  >
                    <span>Book in {location.name}</span>
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </BookingModal>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on pricing */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          * Prices are for standard craftsmanship. Additional charges apply for heavy designer necklines, intricate hand embroidery, and premium trims. Doorstep pickup and delivery included for orders above threshold.
        </p>
      </div>
    </section>
  );
}
