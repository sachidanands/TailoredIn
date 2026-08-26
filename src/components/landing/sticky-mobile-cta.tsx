"use client";

import { Button } from '@/components/ui/button';
import { Phone, Sparkles } from 'lucide-react';
import { BookingModal } from '@/components/landing/booking-modal';

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-lg border-t border-border/80 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-2 gap-2.5 w-full">
        <BookingModal>
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-11 text-xs sm:text-sm shadow-sm"
          >
            <Sparkles className="h-4 w-4 mr-1.5 text-accent flex-shrink-0" />
            Book Visit
          </Button>
        </BookingModal>

        <Button
          size="sm"
          className="w-full font-bold h-11 text-xs sm:text-sm shadow-sm"
          style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
          asChild
        >
          <a href="tel:+919590187030" className="w-full flex items-center justify-center">
            <Phone className="h-4 w-4 mr-1.5 flex-shrink-0" />
            Call
          </a>
        </Button>
      </div>
    </div>
  );
}
