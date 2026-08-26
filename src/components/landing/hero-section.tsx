import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookingModal } from '@/components/landing/booking-modal';
import { Phone, MessageCircle, Sparkles, CheckCircle2, Star, Clock, ShieldCheck, MapPin } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-banner');

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] w-full flex items-center justify-start text-white overflow-hidden py-12 md:py-20">
      {/* Background Image with Overlay */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />

      {/* Subtle Background Pattern Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium text-white mb-6 shadow-inner">
            <Sparkles className="h-4 w-4 text-accent animate-pulse" />
            <span>Bangalore&apos;s #1 Doorstep Ladies Tailoring Service</span>
          </div>

          {/* H1 Heading */}
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
            Exquisite Ladies Tailor in Bangalore <br className="hidden sm:inline" />
            <span className="text-accent underline decoration-accent/40 decoration-wavy decoration-2 underline-offset-8">
              At Your Doorstep
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light">
            Bespoke designer blouses, intricate Aari/Maggam handwork, bridal lehengas, salwar suits, and precision alterations. Master women tailors with 20+ years of expertise deliver perfection to your home in <strong>3-5 days</strong>.
          </p>

          {/* Key Value Propositions */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
              <span>Doorstep Pickup & Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0" />
              <span>100% Perfect Fit Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent flex-shrink-0" />
              <span>3-5 Days Fast Delivery</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <BookingModal>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-6 text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Book Doorstep Visit
              </Button>
            </BookingModal>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-6 text-base shadow-lg"
              asChild
            >
              <a
                href="https://wa.me/919590187030?text=Hello%20TailoredIn!%20I%20want%20to%20get%20a%20garment%20stitched%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md px-5 py-6 text-base"
              asChild
            >
              <a href="tel:+919590187030">
                <Phone className="mr-2 h-4 w-4" />
                Call +91 95901 87030
              </a>
            </Button>
          </div>

          {/* Trust Metrics Strip */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span>(128+ Verified Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-base">10,000+</span>
              <span>Custom Stitches</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Serving All Bengaluru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
