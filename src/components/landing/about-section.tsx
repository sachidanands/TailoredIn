import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary order-1">About TailoredIn</h2>
            <div className="order-2 md:hidden my-8">
              {aboutImage && (
                <Card className="overflow-hidden shadow-lg rounded-lg">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </Card>
              )}
            </div>
            <div className="order-3">
              <p className="text-lg text-muted-foreground">
                Welcome to TailoredIn, where tradition meets trend in the heart of Bangalore. Founded by a passionate seamstress with over 20 years of experience, our boutique is dedicated to the art of creating beautiful, bespoke clothing for women.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our mission is to empower women through fashion by providing high-quality, custom tailoring that fits both their body and their personality. We believe that a perfect outfit can boost confidence and make any occasion special. We specialize in a wide range of ladies' wear, from intricate bridal lehengas to chic everyday kurtas, all crafted with precision and love.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:order-2">
            {aboutImage && (
              <Card className="overflow-hidden shadow-lg rounded-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
