import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Flame } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'inside-1') || PlaceHolderImages[0];

  return (
    <section id="home" className="relative w-full bg-[#823513] text-[#faae33] pt-24 pb-0 overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        {/* Eyebrow Label */}
        <div className="flex items-center justify-between gap-4 mb-4 text-xs font-excon uppercase tracking-[0.02em] text-[#faae33]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-[#d1255c] text-white">
              <Flame className="h-3.5 w-3.5 fill-current" />
            </span>
            <span>SANGAREDDY, TELANGANA // EST. PREMIUM FITNESS FACILITY</span>
          </div>
          <span className="hidden sm:inline-block text-[#9f531b] font-mono text-[11px]">
            17.6254° N, 78.0722° E
          </span>
        </div>

        {/* Display Poster Headline */}
        <div className="my-6 sm:my-8">
          <h1 className="font-headline font-bold text-6xl sm:text-8xl md:text-[110px] lg:text-[140px] xl:text-[175px] uppercase tracking-[-0.02em] leading-[0.85] text-[#faae33] select-none">
            SNATCH <span className="text-[#fffef7]">FITNESS</span>
          </h1>
          <p className="mt-4 font-headline text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-[#9f531b]">
            PURE POWER <span className="text-[#faae33]">//</span> UNSTOPPABLE TRANSFORMATION
          </p>
        </div>

        {/* Action Pills & Heat Badge */}
        <div className="flex flex-wrap items-center gap-4 mt-8 mb-10">
          {/* Heat Level Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d1255c] text-white text-xs font-headline uppercase font-bold tracking-wider shadow-sm">
            <Flame className="h-3.5 w-3.5 fill-current" />
            HIGH INTENSITY // CERTIFIED COACHES
          </div>

          {/* Filled Primary Pill CTA */}
          <Button
            asChild
            size="lg"
            className="rounded-[9999px] px-8 py-6 bg-[#faae33] text-[#281006] hover:bg-[#ffd001] font-headline text-base font-bold transition-all duration-300 shadow-none border-none hover:scale-105"
          >
            <Link href="#contact">START YOUR JOURNEY</Link>
          </Button>

          {/* Ghost Outline Pill Button */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-[9999px] px-8 py-6 bg-transparent text-[#faae33] border-[#faae33] hover:bg-[#faae33] hover:text-[#281006] font-headline text-base font-medium transition-all duration-300 hover:scale-105"
          >
            <Link href="#membership">VIEW MEMBERSHIP</Link>
          </Button>
        </div>
      </div>

      {/* Dotted Gold Divider Line */}
      <div className="w-full border-t border-dotted border-[#faae33]" />

      {/* Editorial Image Showcase Band */}
      <div className="relative w-full h-[52vh] sm:h-[60vh] lg:h-[65vh] bg-[#402011] overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Inside Snatch Fitness Gym"
            fill
            className="object-cover brightness-90 contrast-110 mix-blend-luminosity opacity-85"
            priority
            data-ai-hint="gym interior"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#281006] via-[#823513]/40 to-transparent" />

        {/* Bottom Overlay Annotation */}
        <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl bg-[#281006]/95 p-5 sm:p-6 rounded-[6px] border border-[#6b2e12]">
            <p className="font-excon text-xs uppercase text-[#faae33] font-semibold tracking-wider mb-1">
              WORLD-CLASS TRAINING DESTINATION
            </p>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#fffef7] leading-tight">
              Sangareddy's premier facility for elite strength, conditioning & transformation.
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Dotted Divider Line */}
      <div className="w-full border-t border-dotted border-[#faae33]" />
    </section>
  );
}
