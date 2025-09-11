"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: 'about', label: 'About Us' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'experience', label: 'Our Work' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);

    const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
    let currentSection = '';
    for (const section of sections) {
        if (section && section.offsetTop <= window.scrollY + 100) {
            currentSection = section.id;
        }
    }
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-card/80 backdrop-blur-lg border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-headline text-2xl font-bold" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <Scissors className="h-6 w-6 text-primary" />
          TailoredIn
        </a>
        <nav className="hidden items-center gap-4 lg:gap-6 md:flex">
          {NAV_ITEMS.map(item => (
            <Button
              key={item.id}
              variant="link"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-base font-medium text-foreground/70 hover:text-primary hover:no-underline",
                activeSection === item.id && "text-primary font-semibold"
              )}
            >
              {item.label}
            </Button>
          ))}
        </nav>
        <Button className="hidden md:flex" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} asChild>
            <a href="tel:+919876543210">Call Now</a>
        </Button>
      </div>
    </header>
  );
}
