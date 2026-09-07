import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'inside-1') || PlaceHolderImages[0];

  return (
    <section id="home" className="relative w-full bg-[#000000] text-[#fffef7] pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden">
      {/* Top Header Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiet Meta Line */}
        <p className="text-xs uppercase font-excon tracking-widest text-[#aaaaaa] mb-3">
          SANGAREDDY, TELANGANA
        </p>

        {/* Minimalist Poster Headline */}
        <h1 className="font-headline font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[130px] uppercase tracking-tighter leading-none text-[#fffef7]">
          SNATCH <span className="text-primary">FITNESS</span>
        </h1>
      </div>

      {/* Full-Bleed Editorial Photography Band */}
      <div className="relative w-full h-[60vh] sm:h-[65vh] lg:h-[70vh] mt-8 border-y border-neutral-800">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Inside Snatch Fitness Gym"
            fill
            className="object-cover brightness-75 contrast-105"
            priority
            data-ai-hint="gym interior"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/30 to-transparent" />

        {/* Bottom Overlay - Tagline & Actions */}
        <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-headline text-lg sm:text-2xl md:text-3xl font-light tracking-tight text-[#fffef7]">
            Transform Your Body <span className="text-primary font-normal">//</span> Transform Your Life
          </p>

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
