import Link from 'next/link';
import { Scissors, Phone, MessageCircle, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { BookingModal } from '@/components/landing/booking-modal';
import { Button } from '@/components/ui/button';
import { locationDetailsList } from '@/lib/locations-data';

export function Footer() {
  return (
    <footer className="bg-card border-t text-foreground pb-20 md:pb-0">
      {/* Top CTA Banner */}
      <div className="bg-primary text-primary-foreground py-10 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold">
              Ready for the Perfect Fit?
            </h3>
            <p className="text-sm text-primary-foreground/80 mt-1 max-w-xl">
              Experience hassle-free doorstep ladies tailoring with Bangalore&apos;s master seamstresses. Free measurement guidance and 3-5 days delivery.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <BookingModal>
              <Button
                size="lg"
                style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
                className="font-bold shadow-lg"
              >
                Book Doorstep Pickup
              </Button>
            </BookingModal>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              asChild
            >
              <a href="tel:+919590187030">
                <Phone className="h-4 w-4 mr-2" />
                +91 95901 87030
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
              <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                <Scissors className="h-5 w-5 rotate-45" />
              </div>
              <span>
                Tailored<span className="text-accent">In</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bangalore&apos;s trusted doorstep ladies tailoring collective. Empowering skilled women artisans and crafting exquisite bespoke fits for modern women.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <span>Made with</span>
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 inline" />
              <span>in Bengaluru, Karnataka</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-base text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#services" className="hover:text-primary transition-colors">Our Tailoring Services</Link></li>
              <li><Link href="/#pricing" className="hover:text-primary transition-colors">Pricing & Rate Card</Link></li>
              <li><Link href="/pricing.md" target="_blank" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">Official Rate Card (.md)</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-primary transition-colors">How Doorstep Service Works</Link></li>
              <li><Link href="/#measurements" className="hover:text-primary transition-colors">Fit & Measurement Guide</Link></li>
              <li><Link href="/#why-us" className="hover:text-primary transition-colors">Why Choose TailoredIn</Link></li>
              <li><Link href="/#locations" className="hover:text-primary transition-colors">Bangalore Service Areas</Link></li>
              <li><Link href="/#reviews" className="hover:text-primary transition-colors">Customer Testimonials</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-base text-foreground">Specializations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#services" className="hover:text-primary transition-colors">Simple Katori & Cross-Cut Blouses</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Designer Princess Cut Blouses</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Boat Neck & Sweetheart Blouses</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Cup-Padded & Backless Blouses</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Aari & Maggam Bridal Work</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Zardosi & Hand Embroidery</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Custom Dori, Latkans & Piping</Link></li>
            </ul>
          </div>

          {/* Contact & NAP (Local SEO) */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-base text-foreground">Contact & Service Hub</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <span>Bangalore North, Karnataka 560077, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="tel:+919590187030" className="hover:text-primary font-semibold text-foreground">
                  +91 95901 87030
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                <a
                  href="https://wa.me/919590187030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-700"
                >
                  WhatsApp: +91 95901 87030
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="font-medium text-foreground block">Mon – Sat: 10:00 AM – 8:00 PM</span>
                  <span className="text-xs">Doorstep pickup scheduled 7 days/week</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Top Localities SEO Keywords & Deep Link Directory */}
        <div className="mt-10 pt-6 border-t space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Doorstep Ladies Tailoring Across Bangalore Localities:
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
            {locationDetailsList.map((loc, idx) => (
              <span key={loc.slug} className="inline-flex items-center">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="hover:text-primary hover:underline transition-colors"
                >
                  Ladies Tailor in {loc.name}
                </Link>
                {idx < locationDetailsList.length - 1 && (
                  <span className="ml-3 text-border select-none">•</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TailoredIn. All rights reserved. Bespoke ladies tailor in Bangalore.</p>
          <div className="flex items-center gap-4">
            <Link href="/#services" className="hover:text-primary">Services</Link>
            <Link href="/#pricing" className="hover:text-primary">Pricing</Link>
            <Link href="/#locations" className="hover:text-primary">Locations</Link>
            <Link href="/#faq" className="hover:text-primary">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
