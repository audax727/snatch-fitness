import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

const testimonials: Array<{
  author: TestimonialAuthor
  text: string
  href?: string
}> = [
  {
    author: {
      name: "Shaik Mazher Ali",
      role: "Member",
    },
    text: "It's the best gym in Sangareddy, that's worth its value, spacious and clean. The vibe is fantastic. Perfect place to workout."
  },
  {
    author: {
      name: "Rahul Adyanthaya",
      role: "Member",
    },
    text: "Be Fit stands out as one of the best gyms in the area, offering top-notch equipment and a well-maintained workout environment."
  },
  {
    author: {
      name: "Rishit Karia",
      role: "Member",
    },
    text: "One of the best gyms I have been to. Well-maintained equipment, great trainers, friendly staff and at a reasonable price. 10/10 recommended!"
  },
  {
    author: {
      name: "Gym Member",
      role: "Member",
    },
    text: "The best place to workout with all high-class facilities and equipment!"
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
          <p className="mt-4 font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden [--gap:1rem] sm:[--gap:1.5rem] [--duration:20s]">
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
