import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/landing/booking-modal';
import { LocationDetail } from '@/lib/locations-data';
import {
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Star,
  ChevronRight,
  Phone,
  MessageCircle,
  Truck,
  Scissors,
} from 'lucide-react';

interface LocationHeroProps {
  location: LocationDetail;
}

export function LocationHero({ location }: LocationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-1/3 left-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center space-x-2 text-xs md:text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/#locations" className="hover:text-primary transition-colors">
            Bangalore Tailoring
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-foreground">{location.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Express Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs md:text-sm font-medium text-primary shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {location.isExpressHub ? '⚡ Fast Pickup in ' : '📍 Doorstep Tailoring in '}
                {location.name} ({location.pickupTime})
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight">
              Best Ladies Tailor in{' '}
              <span className="text-primary underline decoration-accent/60 decoration-wavy decoration-2">
                {location.name}, Bangalore
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {location.tagline}. Doorstep fabric pickup, expert measurement consultation, and delivery in 3–5 days with a 100% fit trial guarantee across{' '}
              <strong className="text-foreground">{location.name}</strong> and nearby areas.
            </p>

            {/* Service & Pincode Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs md:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Pincodes: {location.pincodes.join(', ')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" />
                Delivery: {location.deliveryTime}
              </span>
            </div>

            {/* Landmark tags */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Popular Areas & Landmarks Served in {location.name}:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {location.popularLandmarks.map((landmark) => (
                  <span
                    key={landmark}
                    className="rounded-full border border-border bg-card/60 px-2.5 py-0.5 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {landmark}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <BookingModal defaultArea={location.name} className="shadow-lg shadow-primary/20">
                <Button size="lg" className="w-full sm:w-auto text-base font-semibold px-6 py-6 h-auto">
                  <Sparkles className="mr-2 h-5 w-5 text-accent" />
                  Book Fabric Pickup in {location.name}
                </Button>
              </BookingModal>

              <a
                href={`https://wa.me/919590187030?text=${encodeURIComponent(
                  `Hello TailoredIn! I am looking for ladies tailoring service in ${location.name}, Bangalore. Please share stitching details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-base font-medium px-5 py-6 h-auto border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/30"
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  WhatsApp Us
                </Button>
              </a>

              <a href="tel:+919590187030" className="w-full sm:w-auto">
                <Button variant="ghost" size="lg" className="w-full text-base font-medium px-4 py-6 h-auto">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Call: 95901 87030
                </Button>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-border/80 text-xs">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-amber-500/10 p-1.5 text-amber-600">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">4.9 / 5 Rating</p>
                  <p className="text-muted-foreground">120+ Happy Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                  <Truck className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Doorstep Pickup</p>
                  <p className="text-muted-foreground">In {location.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1.5 text-primary">
                  <Scissors className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">20+ Yrs Master</p>
                  <p className="text-muted-foreground">Seamstresses</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-full bg-emerald-500/10 p-1.5 text-emerald-600">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Fit Trial</p>
                  <p className="text-muted-foreground">Free Alterations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Local Verified Review & Quick Booking Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-primary/20 bg-card p-6 md:p-8 shadow-xl shadow-primary/5 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-foreground">Verified Local Review</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {location.name} Client
                </span>
              </div>

              <blockquote className="text-sm md:text-base italic text-foreground leading-relaxed">
                &ldquo;{location.localReview.review}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between border-t border-border/80 pt-4">
                <div>
                  <p className="font-semibold text-foreground">{location.localReview.name}</p>
                  <p className="text-xs text-muted-foreground">{location.localReview.area}, Bangalore</p>
                </div>
                <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-primary">
                  {location.localReview.garment}
                </span>
              </div>

              <div className="rounded-xl bg-muted/50 p-4 text-xs space-y-2">
                <p className="font-medium text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Our Doorstep Promise in {location.name}:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Doorstep fabric collection from your home/apartment</li>
                  <li>Measurements taken or sample garment matched</li>
                  <li>Double-stitched seams with pure cotton lining</li>
                  <li>Delivered ironed and ready-to-wear in 3-5 days</li>
                </ul>
              </div>

              <BookingModal defaultArea={location.name} className="w-full">
                <Button className="w-full py-5 text-sm font-semibold">
                  Schedule Free Pickup in {location.name}
                </Button>
              </BookingModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
