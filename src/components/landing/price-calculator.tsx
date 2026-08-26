"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calculator, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'simple-blouse',
    name: 'Simple Blouse (Katori / Cross-Cut)',
    basePrice: 500,
    description: 'Regular round / square / cross-cut blouse with basic cotton lining',
  },
  {
    id: 'designer-blouse',
    name: 'Designer Blouse (Princess Cut / Boat Neck / Padded)',
    basePrice: 600,
    description: 'Modern cuts with cup padding, deep back designs & custom piping',
  },
  {
    id: 'aari-blouse',
    name: 'Aari & Maggam Work Bridal Blouse',
    basePrice: 1500,
    description: 'Handcrafted bridal embroidery with zardosi, stones, beads & zari',
  },
];

export function PriceCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState('designer-blouse');
  const { toast } = useToast();

  const currentService = SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) || SERVICE_OPTIONS[1];

  const handleBookWithEstimate = () => {
    const message = encodeURIComponent(
      `Hello TailoredIn! I'm interested in booking doorstep tailoring on your website.\n\n` +
      `*Selected Service*: ${currentService.name}\n` +
      `*Starting Price*: ₹${currentService.basePrice}/-\n\n` +
      `Please let me know when you can arrange fabric pickup and measurement at my location in Bangalore.`
    );

    window.open(`https://wa.me/919590187030?text=${message}`, '_blank');
    toast({
      title: "Booking Requested!",
      description: "Redirecting to WhatsApp to schedule your doorstep pickup.",
    });
  };

  return (
    <Card className="border-2 border-primary/20 shadow-xl rounded-xl overflow-hidden bg-card">
      <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-transparent pb-6">
        <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
          <Calculator className="h-4 w-4 text-accent" />
          <span>Instant Cost Estimator</span>
        </div>
        <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">
          Estimate Your Tailoring Cost
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Select your blouse pattern and style to get an instant, transparent price estimate.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Select Garment */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-foreground flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
              1
            </span>
            Choose Blouse Style
          </Label>
          <RadioGroup
            value={selectedServiceId}
            onValueChange={setSelectedServiceId}
            className="grid grid-cols-1 gap-3"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                htmlFor={opt.id}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedServiceId === opt.id
                    ? 'border-primary bg-primary/5 ring-2 ring-primary shadow-sm'
                    : 'border-border hover:bg-muted/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <RadioGroupItem value={opt.id} id={opt.id} className="mt-1" />
                  <div>
                    <span className="text-sm sm:text-base font-semibold text-foreground block">
                      {opt.name}
                    </span>
                    <span className="text-xs text-muted-foreground block mt-0.5">
                      {opt.description}
                    </span>
                  </div>
                </div>
                <span className="text-base sm:text-lg font-bold text-primary font-price whitespace-nowrap pl-3">
                  ₹{opt.basePrice}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Price Output Breakdown Card */}
        <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Selected Service:</span>
            <span className="font-semibold text-foreground text-sm text-right">{currentService.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Base Tailoring:</span>
            <span className="font-semibold text-foreground font-price">₹{currentService.basePrice}</span>
          </div>
          <div className="pt-3 border-t border-primary/20 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold block">
                Estimated Total:
              </span>
              <span className="text-xs text-green-700 font-medium">Doorstep Pickup Available</span>
            </div>
            <div className="text-right">
              <span className="text-3xl sm:text-4xl font-extrabold text-primary font-price">
                ₹{currentService.basePrice}/-
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-muted/30 p-6 pt-4 flex flex-col sm:flex-row items-center gap-4">
        <Button
          onClick={handleBookWithEstimate}
          size="lg"
          className="w-full sm:flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-base shadow-md"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Book with This Estimate on WhatsApp
        </Button>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
          <span>Transparent pricing • Free alteration guarantee</span>
        </div>
      </CardFooter>
    </Card>
  );
}
