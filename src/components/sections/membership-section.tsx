import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const plans = [
  {
    name: "1 Month",
    price: "₹1,500",
    features: [
      "Gym Access",
      "Basic Equipment",
      "Trainer Consultation"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "3 Months",
    price: "₹4,500",
    original_price: "₹6,000",
    features: [
      "Full Gym Access",
      "All Equipment",
      "Group Classes"
    ],
    cta: "Choose Plan",
    popular: false
  },
  {
    name: "6 Months",
    price: "₹6,500",
    original_price: "₹12,000",
    features: [
      "Full Gym Access",
      "All Equipment",
      "Group Classes",
      "Nutrition Guidance",
      "Progress Tracking"
    ],
    cta: "Choose Plan",
    popular: true
  },
  {
    name: "1 Year",
    price: "₹9,999",
    original_price: "₹24,000",
    features: [
      "Unlimited Gym Access",
      "Priority Equipment",
      "All Group Classes",
      "Customized Diet Plan",
      "Supplement Guidance"
    ],
    cta: "Choose Plan",
    popular: false
  }
];

export default function MembershipSection() {
  const whatsappNumber = "919866786782";
  const getWhatsappUrl = (planName: string) => {
    const message = `Hi, I'm interested in the ${planName} plan at Snatch Fitness. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <section id="membership" className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase">
            MEMBERSHIP <span className="text-primary">PLANS</span>
          </h2>
          <p className="mt-4 font-body text-lg text-neutral-300">
            Flexible membership options designed to fit your fitness goals and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
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
                <CardTitle className="font-accent text-2xl sm:text-3xl font-bold uppercase text-primary">{plan.name}</CardTitle>
                <div className="py-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-accent text-4xl font-extrabold text-white">{plan.price}</span>
                    {plan.original_price && <span className="text-base text-neutral-400 line-through">{plan.original_price}</span>}
                  </div>
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
                <Button asChild className="w-full text-lg" variant={plan.popular ? 'default' : 'secondary'}>
                  <Link href={getWhatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
