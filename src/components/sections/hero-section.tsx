import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background') || PlaceHolderImages[0];

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen w-full bg-[#000000] text-[#fffef7] flex flex-col justify-between pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
      {/* Background Image with Subtle Dark Overlay */}
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Snatch Fitness Gym"
          fill
          className="object-cover opacity-35 filter brightness-75"
          priority
          data-ai-hint="gym interior"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#000000]/80 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center max-w-5xl">
        {/* Eyebrow */}
        <div className="mb-4 text-xs sm:text-sm font-excon uppercase tracking-[0.25em] text-[#aaaaaa]">
          SANGAREDDY, TELANGANA
        </div>

        {/* Minimal Display Headline */}
        <h1 className="font-headline font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-none text-[#fffef7]">
          SNATCH <span className="text-primary">FITNESS</span>
        </h1>

        {/* Concise Subtitle */}
        <p className="mt-6 font-excon text-lg sm:text-xl md:text-2xl text-[#aaaaaa] font-light max-w-xl">
          Transform Your Body. Transform Your Life.
        </p>

        {/* Action Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-[1440px] px-8 py-6 bg-[#fffef7] text-[#000000] hover:bg-primary hover:text-white font-headline text-base font-semibold transition-all duration-300 shadow-lg"
          >
            <Link href="#contact">Start Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-[1440px] px-8 py-6 bg-transparent text-[#fffef7] border-[#fffef7]/30 hover:border-primary hover:bg-primary/20 font-headline text-base transition-all duration-300"
          >
            <Link href="#membership">View Membership</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
