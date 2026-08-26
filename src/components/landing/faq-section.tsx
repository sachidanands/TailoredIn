import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { HelpCircle, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BookingModal } from '@/components/landing/booking-modal';

const faqItems = [
  {
    question: "How does TailoredIn's doorstep ladies tailoring service in Bangalore work?",
    answer:
      "It is simple and hassle-free!\n\n1. Book online, call +91 95901 87030, or message us on WhatsApp with your location.\n2. Our tailoring executive visits your home to collect your fabric and take measurements (or collect your best-fitting sample blouse/kurti).\n3. Our master seamstresses craft your outfit with precision pattern-cutting, premium lining, and reinforced double stitches.\n4. We deliver your ready-to-wear outfit to your doorstep within 3-5 days with a 100% fit guarantee.",
  },
  {
    question: "What are the starting prices for blouse stitching in Bangalore?",
    answer:
      "Our pricing is transparent with no hidden charges:\n• Simple Blouse (Katori / Cross-Cut): ₹500 onwards\n• Designer Blouse (Princess Cut, Boat Neck, Sweetheart, Padded): ₹600 onwards\n• Aari & Maggam Work Bridal Blouse: ₹1,500 onwards\n\nFabric add-ons (pure cotton lining, bra padding, latkans, custom piping) are itemized clearly before stitching.",
  },
  {
    question: "What is your turnaround delivery timeline?",
    answer:
      "Standard orders are completed and delivered to your doorstep in 3 to 5 business days from the date of fabric pickup. For urgent events, weddings, or festivals, we offer Express 24-48 hours rush delivery service upon request.",
  },
  {
    question: "How do you guarantee a 100% perfect fit?",
    answer:
      "We have a 2-pronged approach for a flawless fit:\n1. We replicate the exact fit of your best-fitting existing garment (recommended), or our specialist takes personalized body measurements.\n2. In the rare case where a minor adjustment is needed upon delivery, we provide free doorstep alteration support at zero extra charge.",
  },
  {
    question: "Which areas in Bangalore do you provide doorstep pickup and delivery?",
    answer:
      "We serve all major localities across Bengaluru, including North Bangalore (Jakkur, Hebbal, Yelahanka, Sahakar Nagar, Manyata Tech Park, Thanisandra, Amruthahalli, Hennur), East Bangalore (Indiranagar, Whitefield, Marathahalli, Bellandur, KR Puram), South Bangalore (Koramangala, HSR Layout, Jayanagar, JP Nagar, BTM Layout), and Central/West Bangalore (Malleshwaram, Sadashivanagar, Rajajinagar). Doorstep pickup is ₹100 or FREE on orders over ₹1,500.",
  },
  {
    question: "Can you stitch custom designs from Pinterest or Instagram photos?",
    answer:
      "Yes! You can share screenshots of any designer blouse, celebrity lehenga, or Pinterest style on WhatsApp. Our master pattern-makers with 20+ years of expertise will analyze the pattern and craft an exact customized replica to fit your body frame.",
  },
  {
    question: "Do you supply lining fabric, padding, and latkans/tassels?",
    answer:
      "Yes! We stock pure breathable cotton lining (preshrunk), soft butter crepe/satin lining, high-grade bra cup pads, concealable invisible zippers, matching piping, and handcrafted designer latkans/tassels so you don't need to shop for tailoring accessories separately.",
  },
  {
    question: "How do I take bust measurements accurately at home?",
    answer:
      "To measure your bust size:\n1. Wear a well-fitting or non-padded bra.\n2. Stand upright with arms relaxed at your sides.\n3. Wrap a measuring tape around your back and across the fullest part of your bust, keeping the tape parallel to the floor without pulling too tight.\n4. Take the reading in inches where the tape meets.\n5. Alternatively, just give us a sample blouse and we will match the fit perfectly!",
  },
  {
    question: "Do you have a physical shop I can visit?",
    answer:
      "TailoredIn operates as a collective of independent master seamstresses and pattern-makers dedicated to empowering women artisans across Bangalore. By operating as a direct doorstep model, we eliminate high boutique overheads and pass the savings on to you with lower prices and maximum convenience.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card border-t">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Got Questions? We Have Answers
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Everything you need to know about our doorstep ladies tailoring, pricing, measurements, and delivery in Bangalore.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-xl px-4 py-1 bg-muted/20 data-[state=open]:bg-muted/40 transition-colors"
                >
                  <AccordionTrigger className="text-base sm:text-lg font-semibold text-left text-foreground hover:text-primary hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4 pt-1">
                    <p className="whitespace-pre-line">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          {/* Quick Help Card */}
          <ScrollReveal className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border border-primary/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="font-headline text-lg font-bold text-foreground">Have a specific question or urgent requirement?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Our tailoring consultant in Bangalore is just a call or WhatsApp away.</p>
            </div>
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-semibold" asChild>
                <a
                  href="https://wa.me/919590187030?text=Hello%20TailoredIn!%20I%20have%20a%20question%20about%20your%20tailoring%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="tel:+919590187030">
                  <Phone className="mr-1.5 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
