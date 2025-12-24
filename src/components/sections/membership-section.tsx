import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: "STARTER",
    duration: "1 Month",
    price: "₹2,999",
    features: [
      "Gym Access",
      "Basic Equipment",
      "Locker Facility",
      "Trainer Consultation"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "WARRIOR",
    duration: "3 Months",
    price: "₹7,999",
    original_price: "₹8,997",
    features: [
      "Full Gym Access",
      "All Equipment",
      "Group Classes",
      "Personal Training (2 sessions)",
      "Nutrition Guidance",
      "Progress Tracking"
    ],
    cta: "Choose Plan",
    popular: true
  },
  {
    name: "CHAMPION",
    duration: "12 Months",
    price: "₹24,999",
    original_price: "₹35,988",
    features: [
      "Unlimited Gym Access",
      "Priority Equipment",
      "All Group Classes",
      "Personal Training (8 sessions)",
      "Customized Diet Plan",
      "Supplement Guidance",
      "Free Gym Merchandise"
    ],
    cta: "Choose Plan",
    popular: false
  }
];

export default function MembershipSection() {
  return (
    <section id="membership" className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white uppercase">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="mt-4 font-body text-lg text-neutral-300">
            Flexible options to fit your fitness goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'flex flex-col h-full bg-card border-border transition-transform duration-300 hover:scale-105',
                plan.popular ? 'border-2 border-primary shadow-lg shadow-primary/20 scale-105' : 'border'
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold">MOST POPULAR</Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="font-accent text-3xl font-bold uppercase text-primary">{plan.name}</CardTitle>
                <CardDescription className="font-body">{plan.duration}</CardDescription>
                <div className="py-4">
                  <span className="font-accent text-5xl font-extrabold text-white">{plan.price}</span>
                  {plan.original_price && <span className="text-lg text-neutral-400 line-through ml-2">{plan.original_price}</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4 font-body text-neutral-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg" variant={plan.popular ? 'default' : 'secondary'}>{plan.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
