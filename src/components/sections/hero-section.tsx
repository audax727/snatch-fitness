import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'inside-1') || PlaceHolderImages[0];

  return (
    <section id="home" className="relative w-full bg-[#000000] text-[#fffef7] pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      {/* Upper Poster Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Meta Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-xs uppercase font-excon tracking-widest text-[#aaaaaa]">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#ffd001] animate-pulse" />
            SANGAREDDY, TELANGANA // PREMIUM FITNESS DESTINATION
          </span>
          <span className="hidden sm:inline-block font-mono text-[#666666]">
            17.6254° N, 78.0722° E
          </span>
        </div>

        {/* Display Poster Headline */}
        <div className="my-6 sm:my-10">
          <h1 className="font-headline font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] uppercase tracking-tighter leading-none text-[#fffef7] select-none">
            SNATCH <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary to-amber-400">FITNESS</span>
          </h1>
          <p className="mt-4 font-headline text-lg sm:text-2xl md:text-3xl font-light tracking-tight text-[#aaaaaa]">
            TRANSFORM YOUR BODY <span className="text-primary font-normal">//</span> TRANSFORM YOUR LIFE
          </p>
        </div>
      </div>

      {/* Full-Bleed Editorial Hero Image Band */}
      <div className="relative w-full h-[55vh] sm:h-[62vh] lg:h-[68vh] border-y border-neutral-800">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Inside Snatch Fitness Gym"
            fill
            className="object-cover brightness-75 contrast-110"
            priority
            data-ai-hint="gym interior"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/40 to-transparent" />

        {/* Bottom Left Meta Overlay & Pill Actions */}
        <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[1440px] bg-[#ffd001] text-black text-xs font-headline uppercase font-bold tracking-wider mb-3 shadow-md">
              <Sparkles className="h-3.5 w-3.5" />
              State-of-the-Art Equipment & Certified Trainers
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-light text-[#fffef7] leading-tight tracking-tight">
              Sangareddy's premier facility for elite strength, conditioning & transformation.
            </h2>
          </div>

          {/* Action Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-[1440px] px-8 py-6 bg-[#fffef7] text-[#000000] hover:bg-[#ffd001] hover:text-[#000000] font-headline text-base font-bold transition-all duration-300 shadow-xl hover:scale-105"
            >
              <Link href="#contact">Start Your Journey</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-[1440px] px-8 py-6 bg-transparent text-[#fffef7] border-[#fffef7]/40 hover:border-primary hover:bg-primary hover:text-white font-headline text-base transition-all duration-300 hover:scale-105"
            >
              <Link href="#membership">View Membership</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
