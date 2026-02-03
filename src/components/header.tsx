'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#membership', label: 'Membership' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setMobileMenuOpen(false)}
          className="font-body text-sm font-medium text-neutral-300 transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
  
  const MobileMenu = () => {
    return (
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-black/95 p-6 text-white">
          <div className="flex flex-col items-center justify-center h-full">
            <Link href="/" className="mb-12 text-3xl font-bold font-headline text-white">
              BE <span className="text-primary">FIT</span>
            </Link>
            <nav className="flex flex-col items-center gap-8 text-center">
              <NavLinks />
              <Button asChild size="lg" className="mt-8">
                  <Link href="#membership">Join Now</Link>
              </Button>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    );
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold font-headline text-white">
          BE <span className="text-primary">FIT</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#membership">Join Now</Link>
          </Button>
          <div className="md:hidden">
            {isMounted && <MobileMenu />}
          </div>
        </div>
      </div>
    </header>
  );
}
