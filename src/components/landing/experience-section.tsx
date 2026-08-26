import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, MapPin, CheckCircle2, Heart, Sparkles } from 'lucide-react';
import { BookingModal } from '@/components/landing/booking-modal';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "Priya Sundaram",
    location: "Koramangala 4th Block, Bangalore",
    outfit: "Bridal Lehenga & Maggam Blouse",
    rating: 5,
    comment: "Phenomenal craftsmanship on my wedding lehenga! The fit was 100% spot-on on the very first trial. The doorstep pickup and delivery made my wedding preparations so stress-free. Highly recommended to every bride in Bangalore!",
  },
  {
    name: "Anjali Mukhopadhyay",
    location: "Indiranagar 100ft Road, Bangalore",
    outfit: "3 Designer Padded Blouses",
    rating: 5,
    comment: "I shared a Pinterest reference photo for boat-neck and sweetheart blouses. They replicated the exact neckline and the fit is far better than boutique stores charging 3x more. Best ladies tailor in Bangalore!",
  },
  {
    name: "Deepa Krishnan",
    location: "Jakkur Layout, North Bangalore",
    outfit: "Saree Upcycling to Anarkali",
    rating: 5,
    comment: "They transformed my mother's vintage Kanjeevaram silk saree into a breathtaking royal Anarkali dress. The representative came within 2 hours of my call. Exceptional doorstep service and double stitching quality.",
  },
  {
    name: "Meera Ranganathan",
    location: "Whitefield, Bangalore",
    outfit: "Salwar Suits & Daily Blouses",
    rating: 5,
    comment: "Living in Whitefield, finding time to visit tailor shops was impossible. TailoredIn collected my fabric from my apartment and delivered within 4 days. The fit is super comfortable with great seam finishing.",
  },
  {
    name: "Swathi Reddy",
    location: "Sahakar Nagar, Bangalore",
    outfit: "Aari Hand Embroidery Blouse",
    rating: 5,
    comment: "The antique zardosi and beadwork on my blouse looks like pure luxury! Even my friends asked where I got it stitched. Great customer support on WhatsApp throughout the process.",
  },
  {
    name: "Lavanya Patel",
    location: "HSR Layout Sector 2, Bangalore",
    outfit: "Western Gown Alterations & Kurtis",
    rating: 5,
    comment: "Super prompt alteration service. They altered my designer gown and stitched 2 office-wear kurtis with pockets. Everything fits like a dream!",
  },
];

export function ExperienceSection() {
  const galleryImages = PlaceHolderImages.filter((p) => p.id.startsWith('experience-'));

  return (
    <section id="reviews" className="py-16 md:py-24 bg-card border-t">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Real Customer Stories</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Our Master Craft & Happy Clients
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Over 10,000+ custom outfits stitched for wonderful women across Bengaluru. Here is what they have to say.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Carousel */}
        <ScrollReveal className="mb-16">
          <div className="max-w-5xl mx-auto px-6">
            <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
              <CarouselContent className="-ml-3 md:-ml-4">
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id} className="pl-3 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="flex aspect-[3/4] items-center justify-center p-0 relative overflow-hidden bg-muted">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={450}
                          height={600}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          data-ai-hint={image.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-xs text-white font-medium">{image.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3 md:-left-5 bg-card border shadow-md" />
              <CarouselNext className="-right-3 md:-right-5 bg-card border shadow-md" />
            </Carousel>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <ScrollReveal key={index} className="h-full">
              <Card className="h-full flex flex-col justify-between shadow-md border hover:border-primary/40 transition-all duration-300 bg-card rounded-xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                      <CheckCircle2 className="h-3 w-3" />
                      Verified Client
                    </span>
                  </div>
                  <CardTitle className="text-lg font-headline text-foreground">
                    {item.name}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 text-accent flex-shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 py-1">
                  <div className="text-xs font-semibold text-primary mb-2 inline-block bg-primary/5 px-2 py-0.5 rounded">
                    Stitched: {item.outfit}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </CardContent>

                <CardFooter className="pt-3 border-t text-xs text-muted-foreground flex items-center justify-between">
                  <span>100% Fit Guarantee</span>
                  <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Action Button */}
        <ScrollReveal className="mt-14 text-center">
          <BookingModal>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base shadow-lg">
              <Sparkles className="mr-2 h-5 w-5 text-accent" />
              Join Thousands of Happy Customers in Bangalore
            </Button>
          </BookingModal>
        </ScrollReveal>
      </div>
    </section>
  );
}
