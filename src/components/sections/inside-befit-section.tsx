"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function InsideBefitSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const insideImages = PlaceHolderImages.filter(img => img.id.startsWith('inside-'));

  return (
    <section id="inside-befit" className="bg-neutral-100 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-neutral-900 uppercase">
            Inside <span className="text-primary">Be-Fit</span>
          </h2>
          <p className="mt-4 font-body text-lg text-neutral-600">
            Take a sneak peek at our state-of-the-art facility.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {insideImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden rounded-lg shadow-md">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={800}
                          height={500}
                          className="object-cover w-full h-full"
                          data-ai-hint={image.imageHint}
                        />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
