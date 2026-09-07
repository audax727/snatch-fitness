import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

const testimonials: Array<{
  author: TestimonialAuthor
  text: string
  href?: string
}> = [
  {
    author: {
      name: "Harish Hari",
      role: "3 reviews · 2 months ago",
      rating: 5
    },
    text: "Gym located in calm and peaceful environment. Trainer is very professional and friendly, understands every client’s body and designs workouts accordingly."
  },
  {
    author: {
      name: "Âravind Ãru",
      role: "2 reviews · 2 months ago",
      rating: 5
    },
    text: "Clean, well-equipped gym with a positive environment. The trainer provides excellent guidance and motivation."
  },
  {
    author: {
      name: "Mounika Pilli",
      role: "1 review · 2 months ago",
      rating: 5
    },
    text: "Proper guidance by trainer, clean and friendly atmosphere,well equipped gym,,👍"
  },
  {
    author: {
      name: "SUDEEP SAGAR BUKKINENI",
      role: "1 review · 2 weeks ago",
      rating: 5
    },
    text: "I’ve had a great experience training here. My trainer (Satish Anna) is very supportive, knowledgeable, and gives proper attention to technique and form. He understands individual goals and guides me accordingly."
  },
  {
    author: {
      name: "Krishnakant Kishlay",
      role: "1 review · 5 photos · 4 weeks ago",
      rating: 5
    },
    text: "One of the best gym🏋️‍♂️ in sangareddy👍 Instructor has a lot of experience and is very humble Gym is well equiped"
  },
  {
    author: {
      name: "Venkat goud",
      role: "1 review · 4 weeks ago",
      rating: 5
    },
    text: "Trainer is so friendly"
  },
  {
    author: {
      name: "SRINIVAS SALLAWAR",
      role: "4 reviews · 3 photos · a month ago",
      rating: 5
    },
    text: "I highly recommend this gym. Trainer Satish is very professional, friendly, and provides excellent training guidance. He pays close attention to each member and motivates everyone to achieve their fitness goals."
  },
];

export default function TestimonialsSection() {
  const gmapsPlaceUrl = "https://www.google.com/maps/place/SNATCH+FITNESS/@17.6254512,78.0696993,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbf9005dec1b9b:0x89aa50b76e1d229e!8m2!3d17.6254461!4d78.0722742!16s%2Fg%2F11nq8vv3vb?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";
  const title = "Google Reviews";
  const description = "See what our members are saying about their experiences at Snatch Fitness.";

  return (
    <section id="testimonials" className={cn(
      "bg-black text-white",
      "py-20 sm:py-28"
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 text-center">
        <div className="flex flex-col items-center gap-4 px-4">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase">
            Member <span className="text-primary">Reviews</span>
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden [--gap:1rem] sm:[--gap:1.5rem] [--duration:30s]">
            <div className="flex shrink-0 animate-marquee [gap:var(--gap)] group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`testimonial-a-${i}`}
                  href={gmapsPlaceUrl}
                  {...testimonial}
                />
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee [gap:var(--gap)] group-hover:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`testimonial-b-${i}`}
                  href={gmapsPlaceUrl}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-black sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-black sm:block z-10" />
        </div>
      </div>
    </section>
  );
}
