import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollReveal } from '@/components/scroll-reveal';
import { DynamicPricingTool } from './dynamic-pricing-tool';

const services = [
  { name: 'Blouse (Simple)', price: 'Rs. 500/- onwards' },
  { name: 'Blouse (Designer)', price: 'Rs. 1200/- onwards' },
  { name: 'Salwar Kameez', price: 'Rs. 800/- onwards' },
  { name: 'Basic Alterations', price: 'Rs. 150/- onwards' },
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
          <div className="text-center mt-12">
            <h3 className="font-headline text-2xl font-bold">Dynamic Pricing & Deals</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We use smart tools to offer competitive pricing and seasonal deals. Try our AI-powered suggestion tool to see how it works!
            </p>
            <DynamicPricingTool />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
