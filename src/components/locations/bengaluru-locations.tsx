import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { serviceLocations } from '@/lib/locations';
import { MapPin } from 'lucide-react';

export function BengaluruLocations() {
  // Group locations for better readability if needed, or just display them all
  const mainAreas = serviceLocations.slice(0, 15);
  const jakkurAreas = serviceLocations.filter(loc => loc.includes('Jakkur'));
  const neighboringAreas = serviceLocations.filter(loc => ![...mainAreas, ...jakkurAreas].includes(loc));


  return (
    <section id="locations" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary">
              Our Service Areas in Bengaluru
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We proudly offer personalized tailoring services with convenient pickup and delivery across a wide range of locations in North Bangalore. Find your area below.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle>Locations We Serve</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {serviceLocations.map((location, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                            <MapPin className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                            <span>{location}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
