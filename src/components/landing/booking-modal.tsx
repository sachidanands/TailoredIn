"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, MessageCircle, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
  children?: React.ReactNode;
  defaultService?: string;
  defaultArea?: string;
  className?: string;
}

export function BookingModal({ children, defaultService, defaultArea, className }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState(defaultArea || '');
  const [service, setService] = useState(defaultService || 'Designer Blouse Stitching');
  const [measurementType, setMeasurementType] = useState('sample-garment');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !area) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in your Name, Phone Number, and Bangalore Location.",
      });
      return;
    }

    const message = encodeURIComponent(
      `Hello TailoredIn! I'd like to book a doorstep tailoring consultation.\n\n` +
      `*Name*: ${name}\n` +
      `*Phone*: ${phone}\n` +
      `*Location/Area*: ${area}\n` +
      `*Service Required*: ${service}\n` +
      `*Measurement Method*: ${measurementType === 'sample-garment' ? 'I have a best-fitting sample garment' : 'Need home measurement guidance'}\n` +
      (notes ? `*Special Request*: ${notes}\n` : '') +
      `\nPlease let me know when a representative can schedule the fabric pickup.`
    );

    const whatsappUrl = `https://wa.me/919590187030?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);

    toast({
      title: "Booking Request Sent!",
      description: "Redirecting to WhatsApp to finalize your pickup slot.",
    });

    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <Button size="lg" className={className}>
            <Calendar className="mr-2 h-5 w-5" />
            Book Doorstep Consultation
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[540px] max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-primary flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            Book Doorstep Tailoring
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Get expert custom tailoring delivered to your home in 3-5 days. Fill out the details below to schedule your fabric pickup in Bangalore.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-foreground">Thank You, {name}!</h3>
            <p className="text-muted-foreground">
              We have opened WhatsApp with your details. Our master tailor representative will confirm your pickup slot shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="space-y-4 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cust-name">Your Full Name *</Label>
                <Input
                  id="cust-name"
                  placeholder="e.g. Priya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cust-phone">Mobile / WhatsApp Number *</Label>
                <Input
                  id="cust-phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cust-area">Bangalore Locality / Address *</Label>
              <Input
                id="cust-area"
                placeholder="e.g. Jakkur, Hebbal, Koramangala, Indiranagar"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cust-service">Garment Service *</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="cust-service">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Simple Blouse (₹500+)">Simple Blouse (₹500+)</SelectItem>
                    <SelectItem value="Designer Blouse (₹600+)">Designer Blouse (₹600+)</SelectItem>
                    <SelectItem value="Aari & Maggam Work Blouse (₹1500+)">Aari & Maggam Blouse (₹1500+)</SelectItem>
                    <SelectItem value="Salwar Kameez / Suit (₹800+)">Salwar Kameez / Suit (₹800+)</SelectItem>
                    <SelectItem value="Bridal Lehenga Choli (₹3000+)">Bridal Lehenga Choli (₹3000+)</SelectItem>
                    <SelectItem value="Anarkali / Flared Dress (₹1200+)">Anarkali / Flared Dress (₹1200+)</SelectItem>
                    <SelectItem value="Alterations / Restyling (₹200+)">Alterations / Restyling (₹200+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cust-measure">Measurement Preference</Label>
                <Select value={measurementType} onValueChange={setMeasurementType}>
                  <SelectTrigger id="cust-measure">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sample-garment">Giving Best-Fitting Sample Garment</SelectItem>
                    <SelectItem value="home-visit">Take Measurements at Home</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cust-notes">Design Notes / Reference Link (Optional)</Label>
              <Textarea
                id="cust-notes"
                placeholder="Mention neckline, padding, lining preference, or target event date..."
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-base"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 py-6 text-base"
                asChild
              >
                <a href="tel:+919590187030">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Directly
                </a>
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground pt-1">
              ✨ Free measurement guidance • 100% Fit Guarantee • 3-5 Days Doorstep Delivery
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
