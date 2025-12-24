'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: "Rahul Sharma",
    age: 32,
    transformation: "Lost 18kg in 4 months",
    quote: "Be Fit changed my life completely. The trainers are incredibly supportive and the environment is motivating. I've achieved results I never thought possible.",
    rating: 5,
    imageId: "testimonial-1"
  },
  {
    name: "Priya Reddy",
    age: 28,
    transformation: "Gained strength & confidence",
    quote: "As a woman, I was intimidated by gyms before. Be Fit made me feel welcome from day one. The trainers are professional and the facilities are top-notch.",
    rating: 5,
    imageId: "testimonial-2"
  },
  {
    name: "Vikram Patel",
    age: 45,
    transformation: "Transformed at 45",
    quote: "I thought I was too old to get in shape. Be Fit proved me wrong. Best decision I've made for my health in years.",
    rating: 5,
    imageId: "testimonial-3"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-neutral-100 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-neutral-900 uppercase">
            Real People. <span className="text-primary">Real Results.</span>
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(img => img.id === testimonial.imageId);
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between bg-white text-neutral-900 shadow-lg">
                    <CardContent className="p-6 relative">
                      <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
                       <div className="flex items-center mb-4">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={`Photo of ${testimonial.name}`}
                            width={64}
                            height={64}
                            className="rounded-full mr-4 border-2 border-primary"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                        <div>
                          <p className="font-headline font-bold text-lg">{testimonial.name}</p>
                          <p className="font-body text-sm text-primary">{testimonial.transformation}</p>
                        </div>
                      </div>
                      <p className="font-body italic text-neutral-600">"{testimonial.quote}"</p>
                    </CardContent>
                     <div className="flex items-center justify-between p-6 bg-neutral-50 rounded-b-lg">
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-white" />
          <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}
