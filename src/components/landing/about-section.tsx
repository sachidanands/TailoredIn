import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card } from '@/components/ui/card';
import { BookingModal } from '@/components/landing/booking-modal';
import { Button } from '@/components/ui/button';
import { Scissors, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-us');

  return (
    <section id="about" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit">
              <Heart className="h-3.5 w-3.5 text-accent" />
              <span>Our Story & Mission</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Bespoke Elegance Meets Doorstep Ease
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Welcome to <strong>TailoredIn</strong>, Bangalore&apos;s premier ladies tailoring collective. Founded by passionate master seamstresses with over 20 years of bespoke couture experience, we bridge traditional tailoring artistry with modern doorstep convenience.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our mission is twofold: <strong>empower women</strong> through perfectly fitted clothing that elevates confidence, and <strong>empower skilled women artisans</strong> by providing dignified livelihood opportunities directly from their craft.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-muted/40 border">
                <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">20+ Years Mastery</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Master pattern-cutters ensuring zero armhole gaping or shoulder slipping.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-muted/40 border">
                <Scissors className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Couture Perfection</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Custom neckline shaping, padded cup concealment, and double interlocking seams.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <BookingModal>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Sparkles className="mr-2 h-4 w-4 text-accent" />
                  Experience TailoredIn
                </Button>
              </BookingModal>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">Explore Services & Rates</a>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            {aboutImage && (
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <Card className="overflow-hidden shadow-2xl rounded-2xl border-2 border-primary/20 relative z-10">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </Card>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/20 rounded-xl p-4 shadow-xl z-20 hidden sm:flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-primary font-price">10,000+</div>
                    <div className="text-xs text-muted-foreground font-medium">Custom Fits in Bangalore</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
