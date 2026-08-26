import Link from 'next/link';
import { LocationDetail, locationDetailsList } from '@/lib/locations-data';
import { MapPin, ArrowRight, Compass } from 'lucide-react';

interface LocationCrosslinksProps {
  currentLocation: LocationDetail;
}

export function LocationCrosslinks({ currentLocation }: LocationCrosslinksProps) {
  // Group all locations by zone
  const northBangalore = locationDetailsList.filter((l) => l.zoneSlug === 'north-bangalore');
  const eastBangalore = locationDetailsList.filter((l) => l.zoneSlug === 'east-bangalore');
  const southBangalore = locationDetailsList.filter((l) => l.zoneSlug === 'south-bangalore');
  const centralWestBangalore = locationDetailsList.filter((l) => l.zoneSlug === 'central-west-bangalore');

  return (
    <section className="py-16 md:py-20 bg-background border-t border-border/70">
      <div className="container mx-auto px-4 space-y-12">
        {/* Nearby Neighborhoods Section */}
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-card to-background p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
              <Compass className="h-4 w-4" />
              <span>Local Service Network</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground">
              Doorstep Tailoring in Areas Surrounding {currentLocation.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              We also provide rapid fabric pickup and doorstep fitting in neighboring localities near {currentLocation.name}:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {currentLocation.nearbyAreas.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/locations/${nearby.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-3 text-xs font-medium text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-200"
              >
                <div className="flex items-center gap-2 truncate">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="truncate">{nearby.name}</span>
                </div>
                <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Complete Bangalore Localities Directory */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-headline text-2xl font-bold text-foreground">
              All Bangalore Doorstep Tailoring Locations
            </h3>
            <p className="text-sm text-muted-foreground">
              TailoredIn serves residents across all major residential and commercial hubs in Bengaluru.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* North Bangalore */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <h4 className="text-sm font-bold text-primary flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                North Bangalore (Hub)
              </h4>
              <ul className="space-y-1.5 text-xs">
                {northBangalore.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className={`block py-1 px-2 rounded-md transition-colors ${
                        loc.slug === currentLocation.slug
                          ? 'bg-primary/10 font-bold text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Ladies Tailor in {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* East Bangalore */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <h4 className="text-sm font-bold text-primary flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                East Bangalore (IT Corridors)
              </h4>
              <ul className="space-y-1.5 text-xs">
                {eastBangalore.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className={`block py-1 px-2 rounded-md transition-colors ${
                        loc.slug === currentLocation.slug
                          ? 'bg-primary/10 font-bold text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Ladies Tailor in {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* South Bangalore */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <h4 className="text-sm font-bold text-primary flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                South Bangalore (Fashion & Silk)
              </h4>
              <ul className="space-y-1.5 text-xs">
                {southBangalore.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className={`block py-1 px-2 rounded-md transition-colors ${
                        loc.slug === currentLocation.slug
                          ? 'bg-primary/10 font-bold text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Ladies Tailor in {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Central & West Bangalore */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <h4 className="text-sm font-bold text-primary flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Central & West Bangalore
              </h4>
              <ul className="space-y-1.5 text-xs">
                {centralWestBangalore.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className={`block py-1 px-2 rounded-md transition-colors ${
                        loc.slug === currentLocation.slug
                          ? 'bg-primary/10 font-bold text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      Ladies Tailor in {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
