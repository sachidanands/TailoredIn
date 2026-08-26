"use client";

import { useState } from 'react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/landing/booking-modal';
import { Ruler, CheckCircle2, HelpCircle, Sparkles, Shirt, Sparkle } from 'lucide-react';

const blouseMeasurements = [
  {
    step: '1. Bust / Chest Circumference',
    instruction:
      'Wear a well-fitting non-padded bra. Wrap the measuring tape horizontally around the fullest part of your bust and across your shoulder blades. Keep the tape parallel to the floor without pulling tight.',
    tip: 'Take this measurement 2-3 times to ensure precision.',
  },
  {
    step: '2. Underbust / Waist (Blouse Bottom)',
    instruction:
      'Wrap the measuring tape snugly right below your bust line where the bottom band of your blouse will sit.',
    tip: 'Breathe normally; do not hold your breath.',
  },
  {
    step: '3. Shoulder Width',
    instruction:
      'Measure across your upper back from the tip of one shoulder bone to the tip of the other shoulder bone.',
    tip: 'Keep arms relaxed at your sides.',
  },
  {
    step: '4. Armhole & Sleeve Length / Round',
    instruction:
      'Wrap the tape around the widest part of your armhole. For sleeve length, measure from shoulder tip down to your desired sleeve hem (e.g. elbow or 3/4th length), plus the bicep circumference.',
    tip: 'Add 0.5 inch for comfort ease.',
  },
  {
    step: '5. Blouse Length & Neck Depths',
    instruction:
      'From the high point of your shoulder next to the neck, measure straight down over the bust point to your desired blouse hem length (usually 13-15 inches). Measure front and back neck depths.',
    tip: 'Standard front neck: 6-7 inches; Back neck: 8-11 inches.',
  },
];

const suitMeasurements = [
  {
    step: '1. Kurti Length & Chest',
    instruction:
      'Measure from highest point of shoulder over bust down to knee or calf length. Measure chest at fullest point.',
    tip: 'Straight cut kurtis look flattering at knee or calf length.',
  },
  {
    step: '2. Waist & Hip Circumference',
    instruction:
      'Measure your natural waist (narrowest part) and fullest part of hips for easy sitting comfort.',
    tip: 'Leave 2-3 inches ease for loose comfort.',
  },
  {
    step: '3. Salwar / Pant Length & Inseam',
    instruction:
      'Measure from your waist/navel down to the ankle bone. For cigarette pants or palazzos, specify desired bottom opening width.',
    tip: 'Standard bottom opening is 6-7 inches for pants, 10-12 inches for palazzos.',
  },
];

export function MeasurementGuideSection() {
  const [activeTab, setActiveTab] = useState('blouse');

  return (
    <section id="measurements" className="py-16 md:py-24 bg-card border-t">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Ruler className="h-3.5 w-3.5" />
              <span>Perfect Fit Assurance</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Easy Measurement & Fit Guide
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Getting the perfect fit is simple. You can provide your best-fitting sample garment, or follow our easy guide below.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Options Highlight Box */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Option A: Sample Garment */}
          <Card className="border-2 border-accent/40 bg-accent/5 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg">
              Easiest Method
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="font-headline text-xl text-foreground flex items-center gap-2">
                <Shirt className="h-5 w-5 text-accent" />
                Option 1: Give a Sample Garment
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                No measuring required! Hand over your best-fitting existing blouse or kurti.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground/80">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Our representative collects your sample garment during doorstep fabric pickup.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>We replicate the exact fitting and return your original sample safely with your new outfit.</span>
              </div>
            </CardContent>
          </Card>

          {/* Option B: Tailor Home Visit */}
          <Card className="border-2 border-primary/20 bg-primary/5 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="font-headline text-xl text-foreground flex items-center gap-2">
                <Ruler className="h-5 w-5 text-primary" />
                Option 2: Home Measurement Visit
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Prefer an expert to measure you at home? We&apos;ve got you covered.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground/80">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Our tailoring specialist assists you with body measurements during the doorstep consultation.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Custom necklines, sleeve lengths, and ease preferences recorded on the spot.</span>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Interactive Self-Measurement Steps */}
        <ScrollReveal className="max-w-4xl mx-auto">
          <Card className="shadow-lg border">
            <CardHeader className="border-b bg-muted/20 pb-4">
              <CardTitle className="text-xl font-headline flex items-center justify-between">
                <span>Self-Measurement Step-by-Step</span>
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Follow these instructions if taking measurements yourself using an inch tape.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6">
              <Tabs defaultValue="blouse" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="blouse">Blouse Measurements</TabsTrigger>
                  <TabsTrigger value="suit">Salwar & Kurti Measurements</TabsTrigger>
                </TabsList>

                <TabsContent value="blouse" className="space-y-4">
                  {blouseMeasurements.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-muted/40 border space-y-1.5">
                      <div className="font-semibold text-sm text-primary flex items-center justify-between">
                        <span>{item.step}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.instruction}</p>
                      <div className="text-xs font-medium text-accent flex items-center gap-1.5 pt-1">
                        <Sparkle className="h-3 w-3" />
                        <span>Pro Tip: {item.tip}</span>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="suit" className="space-y-4">
                  {suitMeasurements.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-muted/40 border space-y-1.5">
                      <div className="font-semibold text-sm text-primary flex items-center justify-between">
                        <span>{item.step}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.instruction}</p>
                      <div className="text-xs font-medium text-accent flex items-center gap-1.5 pt-1">
                        <Sparkle className="h-3 w-3" />
                        <span>Pro Tip: {item.tip}</span>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <BookingModal>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base">
                <Sparkles className="mr-2 h-5 w-5 text-accent" />
                Book Measurement & Fabric Pickup
              </Button>
            </BookingModal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
