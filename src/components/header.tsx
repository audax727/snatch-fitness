'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#membership', label: 'Membership' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const NavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <>
    {navItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        onClick={onLinkClick}
        className="font-body text-sm font-medium text-neutral-300 transition-colors hover:text-primary"
      >
        {item.label}
      </Link>
    ))}
  </>
);


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold font-headline text-white">
          SNATCH <span className="text-primary">FITNESS</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#membership">Join Now</Link>
          </Button>
          <div className="md:hidden">
            {isMounted && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-black/95 p-6 text-white">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col items-center justify-center h-full">
                    <Link href="/" className="mb-12 text-3xl font-bold font-headline text-white" onClick={() => setMobileMenuOpen(false)}>
                      SNATCH <span className="text-primary">FITNESS</span>
                    </Link>
                    <nav className="flex flex-col items-center gap-8 text-center">
                      <NavLinks onLinkClick={() => setMobileMenuOpen(false)} />
                      <Button asChild size="lg" className="mt-8" onClick={() => setMobileMenuOpen(false)}>
                          <Link href="#membership">Join Now</Link>
                      </Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
