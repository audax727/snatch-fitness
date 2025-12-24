import { Award, Clock, TrendingUp, Users } from 'lucide-react';
import AnimatedCounter from '@/components/animated-counter';

const stats = [
  { icon: Users, number: 500, label: 'Active Members' },
  { icon: Award, number: 10, label: 'Expert Trainers' },
  { icon: TrendingUp, number: 5000, label: 'Transformations' },
  { icon: Clock, number: 24, label: 'Access Available' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white uppercase">
            Where <span className="text-primary">Champions</span> Are Made
          </h2>
          <p className="mt-4 font-body text-lg text-neutral-300">
            Be Fit is Sangareddy's premier fitness destination, offering world-class equipment, certified trainers, and a community dedicated to excellence. We don't just build bodies - we transform lives.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-12 w-12 text-primary" />
              </div>
              <div className="font-accent font-bold text-5xl text-white">
                <AnimatedCounter target={stat.number} />
                {stat.number === 24 ? '/7' : '+'}
              </div>
              <p className="font-body text-neutral-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
