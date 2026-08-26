"use client";

import { useState, useMemo } from 'react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { bangaloreZones, serviceLocations } from '@/lib/locations';
import { BookingModal } from '@/components/landing/booking-modal';
import { MapPin, Search, CheckCircle2, Sparkles, Navigation, Clock, Truck } from 'lucide-react';

export function LocationsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');

  const filteredData = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return bangaloreZones.map((zoneObj) => {
      // Filter areas within this zone based on query
      const matchingAreas = zoneObj.areas.filter((area) =>
        area.toLowerCase().includes(query) ||
        zoneObj.pincodes.some((pin) => pin.includes(query)) ||
        zoneObj.zone.toLowerCase().includes(query)
      );

      return {
        ...zoneObj,
        areas: matchingAreas,
        matchesQuery: matchingAreas.length > 0,
      };
    }).filter((zoneObj) => {
      if (selectedZone !== 'all' && !zoneObj.zone.toLowerCase().includes(selectedZone.toLowerCase())) {
        return false;
      }
      return query === '' ? true : zoneObj.matchesQuery;
    });
  }, [searchTerm, selectedZone]);

  const totalMatchingCount = useMemo(() => {
    return filteredData.reduce((acc, curr) => acc + curr.areas.length, 0);
  }, [filteredData]);

  return (
    <section id="locations" className="py-16 md:py-24 bg-muted/30 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="h-3.5 w-3.5" />
              <span>Bangalore Service Coverage</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              Doorstep Tailoring Across Bangalore
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              We offer doorstep measurement, fabric pickup, and delivery across Bengaluru. Search your locality below to confirm service availability.
            </p>
          </div>
        </ScrollReveal>

        {/* Search & Zone Filter Bar */}
        <ScrollReveal className="max-w-4xl mx-auto mb-10">
          <Card className="p-4 shadow-md border-border/80 bg-card">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search your area (e.g. Jakkur, Hebbal, Whitefield, Koramangala, 560077)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-sm md:text-base bg-background"
                />
              </div>

              {/* Zone Filter Chips */}
              <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start w-full sm:w-auto">
                {[
                  { id: 'all', label: 'All Zones' },
                  { id: 'north', label: 'North' },
                  { id: 'east', label: 'East' },
                  { id: 'south', label: 'South' },
                  { id: 'west', label: 'West/Central' },
                ].map((tab) => (
                  <Button
                    key={tab.id}
                    variant={selectedZone === tab.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedZone(tab.id)}
                    className="text-xs h-9"
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results count & express badge */}
            <div className="mt-3 pt-3 border-t flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>
                  Showing <strong>{totalMatchingCount}</strong> verified service areas in Bengaluru
                </span>
              </div>
              <div className="flex items-center gap-1 text-primary font-medium">
                <Truck className="h-3.5 w-3.5 text-accent" />
                <span>Doorstep pickup within 1-2 hours in North Bangalore</span>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Zones and Localities Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((zoneObj, idx) => (
              <ScrollReveal key={idx} className="h-full">
                <Card className="h-full shadow-md border hover:border-primary/40 transition-all bg-card flex flex-col justify-between">
                  <CardHeader className="bg-muted/20 border-b pb-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
                          <Navigation className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{zoneObj.zone}</span>
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground mt-1">
                          {zoneObj.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-[10px] font-mono whitespace-nowrap bg-primary/10 text-primary">
                        {zoneObj.areas.length} Areas
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 flex-1">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/80">
                      {zoneObj.areas.map((area, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 p-1.5 rounded hover:bg-muted/60 transition-colors"
                        >
                          <MapPin className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                          <span className="truncate font-medium">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <div className="p-4 pt-0 border-t bg-muted/10 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">
                      Pincodes: {zoneObj.pincodes.slice(0, 4).join(', ')}...
                    </span>
                    <BookingModal defaultService="Designer Blouse Stitching">
                      <Button size="sm" variant="ghost" className="text-xs text-primary hover:text-accent font-semibold p-0 h-auto">
                        Book in this Zone →
                      </Button>
                    </BookingModal>
                  </div>
                </Card>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-card rounded-xl border p-8">
              <MapPin className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground">Locality Not Found?</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mt-1 mb-4">
                Don&apos;t worry! We cover almost all areas in Greater Bengaluru. Call or WhatsApp us to arrange custom pickup for your address.
              </p>
              <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                <a href="tel:+919590187030">Call +91 95901 87030</a>
              </Button>
            </div>
          )}
        </div>

        {/* Direct Booking Strip */}
        <ScrollReveal className="mt-12 text-center">
          <BookingModal>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base shadow-md">
              <Sparkles className="mr-2 h-5 w-5 text-accent" />
              Schedule Fabric Pickup for Your Location
            </Button>
          </BookingModal>
        </ScrollReveal>
      </div>
    </section>
  );
}
