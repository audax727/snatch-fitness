import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="home" className="relative h-screen w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-red-900/40" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-tight">
          Transform Your Body,
          <br />
          Transform Your <span className="text-primary">Life</span>
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg md:text-xl text-neutral-300">
          Premium fitness facility in Sangareddy with state-of-the-art equipment and expert trainers.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-lg px-8 py-6 transition-transform hover:scale-105">
            <Link href="#contact">Start Your Journey</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-primary hover:bg-primary hover:text-white transition-transform hover:scale-105">
            <Link href="#membership">View Membership</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white animate-bounce" />
        </a>
      </div>
    </section>
  );
}
