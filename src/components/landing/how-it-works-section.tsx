"use client";

import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/landing/booking-modal';
import { PhoneCall, Ruler, Scissors, PackageCheck, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Book or Call Us',
    subtitle: 'Share your design & address',
    description:
      'Fill out our quick booking form, WhatsApp us your Pinterest/Instagram inspiration photo, or call +91 95901 87030 to schedule your pickup.',
  },
  {
    step: '02',
    icon: Ruler,
    title: 'Doorstep Pickup & Measurement',
    subtitle: 'At your convenience in Bangalore',
    description:
      'Our tailoring executive visits your home. Provide your best-fitting sample blouse/kurti, or let our specialist assist you with accurate body measurements.',
  },
  {
    step: '03',
    icon: Scissors,
    title: 'Master Seamstress Crafting',
    subtitle: '20+ years of tailored precision',
    description:
      'Expert women master tailors cut patterns, insert seamless paddings/linings, and handcraft Aari/Maggam embroidery with double reinforced stitching.',
  },
  {
    step: '04',
    icon: PackageCheck,
    title: 'Doorstep Delivery & Trial',
    subtitle: 'Delivered in 3-5 days',
    description:
      'Your perfectly ironed, bespoke outfit is delivered directly to your doorstep. Enjoy the perfect fit, backed by our 100% free alteration guarantee.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/40 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Simple 4-Step Process</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              How Doorstep Tailoring Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              No more navigating Bangalore traffic or waiting in tailor shops. Experience effortless bespoke fashion from the comfort of your home.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} className="h-full">
                <Card className="h-full border-border/80 shadow-md hover:shadow-xl transition-all duration-300 relative bg-card overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                    <div>
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-headline text-3xl font-extrabold text-muted-foreground/30 group-hover:text-accent transition-colors">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="font-headline text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <div className="text-xs font-semibold text-accent uppercase tracking-wider mt-1 mb-2">
                        {item.subtitle}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t text-xs font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Step {index + 1} of 4</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Guarantee Strip & CTA */}
        <ScrollReveal className="mt-14 max-w-3xl mx-auto text-center space-y-6">
          <div className="p-4 rounded-xl bg-card border shadow-sm flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-foreground">
            <ShieldCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
            <span>
              <strong>100% Fit Guarantee:</strong> If the fit isn&apos;t 100% perfect on your first trial, we re-alter it at zero additional cost!
            </span>
          </div>

          <div>
            <BookingModal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base shadow-lg">
                <Sparkles className="mr-2 h-5 w-5 text-accent" />
                Schedule Your Doorstep Pickup
              </Button>
            </BookingModal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
