import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials: Array<{
  author: TestimonialAuthor
  text: string
  href?: string
}> = [
  {
    author: {
      name: "Aarav Sharma",
      role: "Software Engineer",
      image: PlaceHolderImages.find(img => img.id === 'testimonial-1')?.imageUrl || "https://picsum.photos/seed/t1/100/100",
    },
    text: "This gym changed my life! The trainers are so supportive and the community is amazing."
  },
  {
    author: {
      name: "Priya Patel",
      role: "Doctor",
      image: PlaceHolderImages.find(img => img.id === 'testimonial-2')?.imageUrl || "https://picsum.photos/seed/t2/100/100",
    },
    text: "I've never felt stronger or more confident. The personalized training plans are a game-changer."
  },
  {
    author: {
      name: "Vikram Singh",
      role: "College Student",
      image: PlaceHolderImages.find(img => img.id === 'testimonial-5')?.imageUrl || "https://picsum.photos/seed/t5/100/100",
    },
    text: "The group classes are so much fun and keep me motivated every single day."
  },
  {
    author: {
      name: "Anjali Rao",
      role: "Cricketer",
      image: PlaceHolderImages.find(img => img.id === 'testimonial-6')?.imageUrl || "https://picsum.photos/seed/t6/100/100",
    },
    text: "As a professional athlete, I need the best. Be Fit provides exactly that. Highly recommended."
  },
];

export default function TestimonialsSection() {
  const title = "Success Stories";
  const description = "See what our members are saying about their transformations at Be Fit.";

  return (
    <section id="testimonials" className={cn(
      "bg-background text-foreground",
      "py-20 sm:py-28"
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 text-center">
        <div className="flex flex-col items-center gap-4 px-4">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden [--gap:1.5rem] [--duration:60s]">
            <div className="flex shrink-0 animate-marquee [gap:var(--gap)] group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`testimonial-a-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee [gap:var(--gap)] group-hover:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`testimonial-b-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}
