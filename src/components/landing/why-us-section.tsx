import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Sparkles, Clock, HeartHandshake, Eye, Scissors } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookingModal } from '@/components/landing/booking-modal';
import { Button } from '@/components/ui/button';

const whyUsPoints = [
  {
    icon: ShieldCheck,
    title: '100% Perfect Fit Guarantee',
    desc: 'If the fit is not 100% flawless upon delivery, we provide free doorstep adjustments with zero hassle.',
  },
  {
    icon: Clock,
    title: 'Fast 3-5 Days Doorstep Delivery',
    desc: 'Reliable timelines delivered directly to your doorstep. Express 24-48h rush stitching available for urgent events.',
  },
  {
    icon: Eye,
    title: 'Pinterest & Celebrity Design Replication',
    desc: 'Share any screenshot or inspiration photo on WhatsApp. Our master pattern-makers replicate the exact cut for your frame.',
  },
  {
    icon: Scissors,
    title: '20+ Years Master Tailoring Craftsmanship',
    desc: 'Experienced women master tailors ensuring perfect armhole contouring, reinforced interlocking seams, and premium linings.',
  },
  {
    icon: HeartHandshake,
    title: 'Empowering Women Artisans',
    desc: 'Every order directly supports experienced independent women seamstresses in Bangalore with dignified livelihood.',
  },
  {
    icon: CheckCircle2,
    title: 'Doorstep Convenience Across Bengaluru',
    desc: 'No Bangalore traffic or repeated boutique visits. We handle fabric pickup, measurement, and delivery at your doorstep.',
  },
];

export function WhyUsSection() {
  const whyUsImage = PlaceHolderImages.find((p) => p.id === 'why-us-image');

  return (
    <section id="why-us" className="bg-card py-16 md:py-24 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Why Choose TailoredIn</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Craftsmanship, Convenience & Trust
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              We are not just a tailoring service; we are your personal fashion partners dedicated to making you feel your absolute best.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyUsPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <ScrollReveal key={index} className="h-full">
                  <div className="p-4 rounded-xl border bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all h-full flex flex-col justify-start space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground pt-1">{point.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              {whyUsImage && (
                <Card className="overflow-hidden shadow-xl rounded-2xl border-2 border-accent/20 relative">
                  <Image
                    src={whyUsImage.imageUrl}
                    alt={whyUsImage.description}
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    data-ai-hint={whyUsImage.imageHint}
                  />
                  <div className="p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent absolute inset-0 flex flex-col justify-end text-white">
                    <div className="font-headline text-2xl font-bold">100% Fit Guarantee</div>
                    <p className="text-xs text-gray-200 mt-1">Free alterations until you are 100% delighted with your fit.</p>
                  </div>
                </Card>
              )}

              <div className="mt-6 text-center">
                <BookingModal>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-base shadow-md">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Book Doorstep Tailoring Today
                  </Button>
                </BookingModal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
