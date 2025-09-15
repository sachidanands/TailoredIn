import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollReveal } from '@/components/scroll-reveal';

const services = [
  { name: 'Blouse (Simple)', price: 'Rs. 500/- onwards' },
  { name: 'Blouse (Designer)', price: 'Rs. 600/- onwards' },
  { name: 'Salwar Kameez', price: 'Rs. 800/- onwards' },
  { name: 'Basic Alterations', price: 'Rs. 200/- onwards' },
];

export function PriceSection() {
  return (
    <section id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Pricing</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for quality craftsmanship. Prices may vary based on fabric and complexity.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle>Standard Service Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-base">Service</TableHead>
                    <TableHead className="text-right text-base">Starting Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.name}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell className="text-right font-price">{service.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
           <p className="text-center text-sm text-muted-foreground mt-4 max-w-4xl mx-auto">
              *Pickup and delivery within Bangalore limit is Rs.100.
            </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
