import { TestimonialsColumn } from "@/components/testimonials-column";
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

const testimonials1: Testimonial[] = [
  {
    text: "This gym changed my life! The trainers are so supportive and the community is amazing.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-1')?.imageUrl || "https://picsum.photos/seed/t1/100/100",
    name: "Aarav Sharma",
    role: "Software Engineer",
  },
  {
    text: "I've never felt stronger or more confident. The personalized training plans are a game-changer.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-2')?.imageUrl || "https://picsum.photos/seed/t2/100/100",
    name: "Priya Patel",
    role: "Doctor",
  },
];

const testimonials2: Testimonial[] = [
  {
    text: "The group classes are so much fun and keep me motivated every single day.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-5')?.imageUrl || "https://picsum.photos/seed/t5/100/100",
    name: "Vikram Singh",
    role: "College Student",
  },
  {
    text: "As a professional athlete, I need the best. Be Fit provides exactly that. Highly recommended.",
    image: PlaceHolderImages.find(img => img.id === 'testimonial-6')?.imageUrl || "https://picsum.photos/seed/t6/100/100",
    name: "Anjali Rao",
    role: "Cricketer",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 sm:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-foreground uppercase">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            See what our members are saying about their transformations at Be Fit.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]">
        <TestimonialsColumn testimonials={testimonials1} duration={25} />
        <TestimonialsColumn testimonials={testimonials2} className="hidden md:flex" duration={30} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
    </section>
  );
}
