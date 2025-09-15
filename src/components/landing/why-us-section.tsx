import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const whyUsPoints = [
  "Master Tailors with 20+ years of experience.",
  "Precision fitting for unparalleled comfort and style.",
  "Use of premium quality fabrics and materials.",
  "Timely delivery, always.",
  "Personalized design consultation for every client.",
];

export function WhyUsSection() {
  const whyUsImage = PlaceHolderImages.find(p => p.id === 'why-us-image');

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
            <p className="mt-6 text-sm italic text-muted-foreground">
              *Pickup and delivery within Bangalore limit is Rs.100.
            </p>
          </div>
          <div>
            {whyUsImage && (
              <Card className="overflow-hidden shadow-lg rounded-lg">
                 <Image
                    src={whyUsImage.imageUrl}
                    alt={whyUsImage.description}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={whyUsImage.imageHint}
                  />
              </Card>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
