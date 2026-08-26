"use client";

import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BookingModal } from '@/components/landing/booking-modal';

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-lg border-t border-border/80 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold h-11 text-xs sm:text-sm shadow-sm"
          asChild
        >
          <a
            href="https://wa.me/919590187030?text=Hello%20TailoredIn!%20I'd%20like%20to%20book%20a%20doorstep%20tailoring%20consultation."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4 mr-1.5 flex-shrink-0" />
            WhatsApp
          </a>
        </Button>

        <BookingModal className="flex-1">
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-11 text-xs sm:text-sm shadow-sm"
          >
            <Sparkles className="h-4 w-4 mr-1 text-accent flex-shrink-0" />
            Book Visit
          </Button>
        </BookingModal>

        <Button
          size="sm"
          className="flex-1 font-bold h-11 text-xs sm:text-sm shadow-sm"
          style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
          asChild
        >
          <a href="tel:+919590187030">
            <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
            Call
          </a>
        </Button>
      </div>
    </div>
  );
}
