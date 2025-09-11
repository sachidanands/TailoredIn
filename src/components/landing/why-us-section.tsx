import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent } from '@/components/ui/card';
import { WhyUsGenerator } from './why-us-generator';

const whyUsPoints = [
  "Master Tailors with 20+ years of experience.",
  "Precision fitting for unparalleled comfort and style.",
  "Use of premium quality fabrics and materials.",
  "Timely delivery, always.",
  "Personalized design consultation for every client.",
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're not just tailors; we are fashion partners dedicated to making you look and feel your absolute best.
            </p>
            <ul className="mt-6 space-y-4">
              {whyUsPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="shadow-lg rounded-lg">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold">See Our AI in Action</h3>
                <p className="mt-2 text-muted-foreground">
                  Our marketing descriptions are enhanced with AI to be clear and compelling. Enter some raw notes about a business and see what our AI writer suggests!
                </p>
                <WhyUsGenerator />
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
