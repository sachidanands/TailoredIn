import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollReveal } from '@/components/scroll-reveal';
import { PriceCalculator } from '@/components/landing/price-calculator';
import { Badge } from '@/components/ui/badge';
import { Tag, Sparkles, CheckCircle2, Truck } from 'lucide-react';

const standardPrices = [
  { service: 'Simple Blouse (Katori / Cross-cut)', price: '₹500 onwards', time: '3-4 Days', notes: 'Daily & regular wear' },
  { service: 'Designer Blouse (Princess Cut / Boat Neck / Padded)', price: '₹600 onwards', time: '3-5 Days', notes: 'Modern cuts with cup pads & dori' },
  { service: 'Aari & Maggam Work Bridal Blouse', price: '₹1,500 onwards', time: '5-7 Days', notes: 'Handcrafted zardosi & stone embroidery' },
];

export function PriceSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <Tag className="h-3.5 w-3.5" />
              <span>Transparent Rates</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Fair & Transparent Pricing
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              No hidden fees or unexpected charges. Quality craftsmanship at accessible prices, tailored to your design preferences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Standard Rates Table */}
          <ScrollReveal className="lg:col-span-6 space-y-6">
            <Card className="shadow-lg rounded-xl overflow-hidden border-border">
              <CardHeader className="bg-muted/40 border-b pb-4">
                <CardTitle className="text-xl font-headline text-foreground flex items-center justify-between">
                  <span>Standard Service Rates</span>
                  <Badge variant="outline" className="text-xs bg-card">INR (₹)</Badge>
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  Prices cover standard master stitching. Add-on embellishments and specialty fabrics quoted transparently.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/20">
                      <TableHead className="text-xs font-bold uppercase">Garment Type</TableHead>
                      <TableHead className="text-right text-xs font-bold uppercase">Starting Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {standardPrices.map((item, idx) => (
                      <TableRow key={idx} className="hover:bg-muted/30">
                        <TableCell className="py-3">
                          <div className="font-medium text-sm text-foreground">{item.service}</div>
                          <div className="text-xs text-muted-foreground">{item.notes} • <span className="text-primary font-medium">{item.time}</span></div>
                        </TableCell>
                        <TableCell className="text-right font-bold text-primary font-price text-sm whitespace-nowrap">
                          {item.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Pickup & Delivery Policy Alert */}
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/30 text-sm text-foreground flex items-start gap-3">
              <Truck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground">Bangalore Pickup & Delivery:</span>
                <p className="text-muted-foreground text-xs mt-1">
                  Convenient doorstep pickup and drop across Bangalore for just ₹100. Complimentary free delivery on orders above ₹1,500!
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Interactive Estimator Tool */}
          <ScrollReveal className="lg:col-span-6">
            <PriceCalculator />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
