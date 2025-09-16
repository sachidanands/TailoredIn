import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-start text-left text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 max-w-4xl px-4 md:px-6 lg:px-8">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
          Exquisite Ladies Tailoring in Bangalore
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-sm">
          Crafting perfectly-fitted, stylish attire for the modern woman. From traditional wear to contemporary designs, we bring your vision to life.
        </p>
        <Button size="lg" className="mt-8 animate-pulse-cta" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} asChild>
          <a href="tel:+919590187030">Call Now</a>
        </Button>
      </div>
    </section>
  );
}
