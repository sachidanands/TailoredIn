import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LocationDetail } from '@/lib/locations-data';
import { HelpCircle, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { BookingModal } from '@/components/landing/booking-modal';
import { Button } from '@/components/ui/button';

interface LocationFaqsProps {
  location: LocationDetail;
}

export function LocationFaqs({ location }: LocationFaqsProps) {
  const commonFaqs = [
    {
      q: `What is the delivery timeline for orders in ${location.name}?`,
      a: `Standard delivery across ${location.name} is 3 to 5 business days from fabric collection. Express 24-48 hours delivery is also available upon request for urgent events and weddings.`,
    },
    {
      q: `What happens if a blouse stitched in ${location.name} needs alterations?`,
      a: `We provide a 100% Fit Guarantee. If any tweak is needed after your trial, our team will pick up the garment from your address in ${location.name}, make the adjustments, and deliver it back free of charge.`,
    },
    {
      q: `Do you provide pure cotton lining and accessories in ${location.name}?`,
      a: `Yes, we provide pre-shrunk pure cotton lining, imported bra pads, high quality zippers, hooks, piping, and handcrafted designer latkans/tassels.`,
    },
  ];

  // Combine location specific FAQs + common FAQs
  const allFaqs = [...location.localFaqs, ...commonFaqs];

  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions – {location.name} Tailoring
          </h2>
          <p className="text-base text-muted-foreground">
            Everything you need to know about our doorstep measurement, stitching process, and fitting guarantee in {location.name}, Bangalore.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
            {allFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 py-2 shadow-xs"
              >
                <AccordionTrigger className="text-left font-headline text-base md:text-lg font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Quick Help Card */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center space-y-4">
            <h3 className="font-headline text-xl font-bold text-foreground">
              Have a custom design or question about {location.name}?
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Our master seamstresses are happy to guide you on fabric requirements, neck patterns, and pricing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <BookingModal defaultArea={location.name}>
                <Button className="font-semibold">
                  <Sparkles className="mr-2 h-4 w-4 text-accent" />
                  Book Doorstep Consultation
                </Button>
              </BookingModal>
              <a
                href={`https://wa.me/919590187030?text=${encodeURIComponent(
                  `Hello TailoredIn! I have a question about tailoring in ${location.name}, Bangalore.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400">
                  <MessageCircle className="mr-2 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919590187030">
                <Button variant="ghost">
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  Call: +91 95901 87030
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
