import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya S.",
    location: "Koramangala, Bangalore",
    rating: 5,
    comment: "Absolutely phenomenal work on my wedding lehenga! The fit was perfect, and the attention to detail was incredible. I received so many compliments. Highly recommended!",
  },
  {
    name: "Anjali M.",
    location: "Indiranagar, Bangalore",
    rating: 5,
    comment: "I've been a regular customer for years. They always understand my vision and deliver beyond expectations. My go-to place for all my designer blouses.",
  },
  {
    name: "Deepa K.",
    location: "Jayanagar, Bangalore",
    rating: 4,
    comment: "Great service and quality stitching. They transformed an old saree of my mother's into a beautiful modern Anarkali dress. The delivery was on time as promised.",
  }
];

export function ExperienceSection() {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('experience-'));

  return (
    <section id="experience">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Craft & Happy Clients</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Decades of experience in creating masterpieces and smiles.
          </p>
        </ScrollReveal>
        
        <ScrollReveal className="mb-16">
          <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-lg">
                      <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={400}
                          height={600}
                          className="w-full h-full object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>&ldquo;{testimonial.comment}&rdquo;</p>
              </CardContent>
              <CardFooter>
                <div className="flex gap-1">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
