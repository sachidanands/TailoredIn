"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Scissors, Phone, MessageCircle, Menu, X, MapPin, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BookingModal } from '@/components/landing/booking-modal';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'locations', label: 'Service Areas' },
  { id: 'measurements', label: 'Fit Guide' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);

    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
    let currentSection = '';
    for (const section of sections) {
      if (section && section.offsetTop <= window.scrollY + 120) {
        currentSection = section.id;
      }
    }
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-3 sm:px-4 text-xs md:text-sm font-medium tracking-wide overflow-hidden w-full">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left max-w-full">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 max-w-full">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-accent text-accent-foreground flex-shrink-0">
              Express Delivery
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm">
              📍 Doorstep Ladies Tailoring in Bangalore • 3-5 Days Delivery
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-sm">
            <a
              href="https://wa.me/919590187030?text=Hello%20TailoredIn!%20I%20want%20to%20know%20more%20about%20your%20tailoring%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1"
            >
              <MessageCircle className="h-3.5 w-3.5 flex-shrink-0" />
              <span>WhatsApp Us</span>
            </a>
            <span className="opacity-40">|</span>
            <a href="tel:+919590187030" className="hover:text-accent transition-colors font-bold flex items-center gap-1">
              <Phone className="h-3.5 w-3.5 flex-shrink-0" />
              <span>+91 95901 87030</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-sm border-border/80"
            : "bg-card/85 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-headline text-2xl font-bold tracking-tight text-primary hover:opacity-90 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Scissors className="h-5 w-5 rotate-45" />
            </div>
            <span>
              Tailored<span className="text-accent">In</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted/60",
                  activeSection === item.id
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-green-600/30 text-green-700 hover:bg-green-50 hover:text-green-800"
              asChild
            >
              <a
                href="https://wa.me/919590187030?text=Hello%20TailoredIn!%20I'd%20like%20to%20inquire%20about%20blouse/suit%20tailoring."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-1.5 text-green-600" />
                WhatsApp
              </a>
            </Button>

            <BookingModal>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
                <Sparkles className="h-4 w-4 mr-1.5 text-accent" />
                Book Pickup
              </Button>
            </BookingModal>

            <Button
              size="sm"
              className="animate-pulse-cta"
              style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
              asChild
            >
              <a href="tel:+919590187030">
                <Phone className="h-4 w-4 mr-1.5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              size="sm"
              className="text-xs px-2.5 h-8 animate-pulse-cta"
              style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
              asChild
            >
              <a href="tel:+919590187030">
                <Phone className="h-3.5 w-3.5 mr-1" />
                Call
              </a>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
                <div>
                  <SheetHeader className="text-left mb-6 border-b pb-4">
                    <SheetTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                      <Scissors className="h-5 w-5" />
                      Tailored<span className="text-accent">In</span>
                    </SheetTitle>
                    <p className="text-xs text-muted-foreground">Doorstep Ladies Tailoring in Bangalore</p>
                  </SheetHeader>

                  <nav className="flex flex-col space-y-2">
                    {NAV_ITEMS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-left transition-colors",
                          activeSection === item.id
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-foreground/80 hover:bg-muted"
                        )}
                      >
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="space-y-3 pt-6 border-t">
                  <BookingModal className="w-full justify-center">
                    <Button className="w-full bg-primary text-primary-foreground py-5">
                      <Sparkles className="h-4 w-4 mr-2 text-accent" />
                      Book Doorstep Visit
                    </Button>
                  </BookingModal>

                  <Button
                    variant="outline"
                    className="w-full justify-center text-green-700 border-green-600/30 hover:bg-green-50"
                    asChild
                  >
                    <a
                      href="https://wa.me/919590187030?text=Hello%20TailoredIn!%20I'd%20like%20to%20inquire%20about%20blouse/suit%20tailoring."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2 text-green-600" />
                      Chat on WhatsApp
                    </a>
                  </Button>

                  <Button
                    className="w-full justify-center"
                    style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
                    asChild
                  >
                    <a href="tel:+919590187030">
                      <Phone className="h-4 w-4 mr-2" />
                      Call +91 95901 87030
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
