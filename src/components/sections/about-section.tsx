import { Award, Clock, TrendingUp, Users } from 'lucide-react';
import AnimatedCounter from '@/components/animated-counter';
import { cn } from '@/lib/utils';

const stats = [
  { icon: Users, number: 100, label: 'Active Members', color: 'text-[#FF671F]' },
  { icon: Award, number: 10, label: 'Expert Trainers', color: 'text-white' },
  { icon: TrendingUp, number: 1000, label: 'Transformations', color: 'text-[#048A47]' },
  { icon: Clock, number: 10, label: 'Access Available', color: 'text-[#FF671F]' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase">
            BUILT FOR <span className="text-primary">PERFORMANCE</span>
          </h2>
          <p className="mt-4 font-body text-lg text-neutral-300">
            Snatch Fitness is Sangareddy's premier gym destination, equipped for serious strength, conditioning, and transformation.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className={cn("h-12 w-12", stat.color)} />
              </div>
              <div className={cn(
                "font-accent font-bold text-white",
                stat.icon === Clock ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
              )}>
                <AnimatedCounter target={stat.number} />
                {stat.number === 24 ? '/7' : (stat.icon === Clock ? ' hours/day' : '+')}
              </div>
              <p className="font-body text-neutral-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
