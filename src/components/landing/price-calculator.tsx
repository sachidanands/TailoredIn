"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Calculator, Sparkles, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: 'simple-blouse', name: 'Simple Blouse', basePrice: 500 },
  { id: 'designer-blouse', name: 'Designer Blouse (Princess Cut / Boat Neck)', basePrice: 600 },
  { id: 'aari-blouse', name: 'Aari & Maggam Work Blouse', basePrice: 1500 },
  { id: 'salwar-suit', name: 'Salwar Kameez / Suit', basePrice: 800 },
  { id: 'anarkali', name: 'Anarkali / Flared Ethnic Gown', basePrice: 1200 },
  { id: 'bridal-lehenga', name: 'Bridal Lehenga Choli', basePrice: 3000 },
  { id: 'alteration', name: 'Garment Alteration / Re-fit', basePrice: 200 },
];

const LINING_OPTIONS = [
  { id: 'customer-lining', name: 'I will provide lining fabric', price: 0 },
  { id: 'cotton-lining', name: 'Pure Cotton Breathable Lining', price: 150 },
  { id: 'crepe-lining', name: 'Soft Butter Crepe / Satin Lining', price: 250 },
];

const ADDONS = [
  { id: 'cups', name: 'High-Grade Bra Cup Padding', price: 150 },
  { id: 'latkans', name: 'Designer Dori & Handcrafted Latkans', price: 150 },
  { id: 'potli-buttons', name: 'Potli Buttons / Custom Piping Detail', price: 100 },
  { id: 'cancan', name: 'Can-Can Netting Flare (For Lehengas/Gowns)', price: 600 },
  { id: 'express', name: 'Express Rush Delivery (24-48 Hours)', price: 300 },
];

export function PriceCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState('designer-blouse');
  const [selectedLiningId, setSelectedLiningId] = useState('cotton-lining');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cups', 'latkans']);
  const { toast } = useToast();

  const currentService = SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) || SERVICE_OPTIONS[1];
  const currentLining = LINING_OPTIONS.find((l) => l.id === selectedLiningId) || LINING_OPTIONS[1];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = ADDONS.find((a) => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const estimatedTotal = currentService.basePrice + currentLining.price + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookWithEstimate = () => {
    const chosenAddonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = encodeURIComponent(
      `Hello TailoredIn! I calculated an estimate on your website and want to book doorstep tailoring.\n\n` +
      `*Service*: ${currentService.name} (₹${currentService.basePrice})\n` +
      `*Lining*: ${currentLining.name} (₹${currentLining.price})\n` +
      (chosenAddonNames ? `*Add-ons*: ${chosenAddonNames} (₹${addonsTotal})\n` : '') +
      `*Estimated Total*: ₹${estimatedTotal}/-\n\n` +
      `Please let me know when you can pick up the fabric from my location in Bangalore.`
    );

    window.open(`https://wa.me/919590187030?text=${message}`, '_blank');
    toast({
      title: "Estimate Saved!",
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
          Select your garment and custom styling preferences to get an instant, transparent price estimate.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Step 1: Select Garment */}
        <div className="space-y-3">
          <Label className="text-base font-semibold text-foreground flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
              1
            </span>
            Choose Garment Type
          </Label>
          <RadioGroup
            value={selectedServiceId}
            onValueChange={setSelectedServiceId}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                htmlFor={opt.id}
                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedServiceId === opt.id
                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                    : 'border-border hover:bg-muted/40'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <RadioGroupItem value={opt.id} id={opt.id} />
                  <span className="text-sm font-medium">{opt.name}</span>
                </div>
                <span className="text-sm font-bold text-primary font-price">
                  ₹{opt.basePrice}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Step 2: Lining Option */}
        <div className="space-y-3 pt-2 border-t">
          <Label className="text-base font-semibold text-foreground flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
              2
            </span>
            Lining & Material
          </Label>
          <RadioGroup
            value={selectedLiningId}
            onValueChange={setSelectedLiningId}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
          >
            {LINING_OPTIONS.map((opt) => (
              <label
                key={opt.id}
                htmlFor={opt.id}
                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedLiningId === opt.id
                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                    : 'border-border hover:bg-muted/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value={opt.id} id={opt.id} />
                  <span className="text-xs sm:text-sm font-medium">{opt.name}</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-muted-foreground font-price">
                  {opt.price === 0 ? 'Free' : `+₹${opt.price}`}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Step 3: Add-ons & Customizations */}
        <div className="space-y-3 pt-2 border-t">
          <Label className="text-base font-semibold text-foreground flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs">
              3
            </span>
            Add-on Customizations (Optional)
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {ADDONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <label
                  key={addon.id}
                  htmlFor={addon.id}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                    isChecked
                      ? 'border-accent bg-accent/5 ring-1 ring-accent'
                      : 'border-border hover:bg-muted/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Checkbox
                      id={addon.id}
                      checked={isChecked}
                      onCheckedChange={() => toggleAddon(addon.id)}
                    />
                    <span className="text-xs sm:text-sm font-medium">{addon.name}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-accent font-price">
                    +₹{addon.price}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Price Output Breakdown Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Base Tailoring ({currentService.name}):</span>
            <span className="font-semibold text-foreground font-price">₹{currentService.basePrice}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Lining ({currentLining.name}):</span>
            <span className="font-semibold text-foreground font-price">₹{currentLining.price}</span>
          </div>
          {addonsTotal > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Selected Add-ons:</span>
              <span className="font-semibold text-foreground font-price">+₹{addonsTotal}</span>
            </div>
          )}
          <div className="pt-3 border-t border-primary/20 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold block">
                Estimated Total:
              </span>
              <span className="text-xs text-green-700 font-medium">Doorstep Pickup Available</span>
            </div>
            <div className="text-right">
              <span className="text-3xl sm:text-4xl font-extrabold text-primary font-price">
                ₹{estimatedTotal}/-
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
