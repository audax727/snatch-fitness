import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users, Target, Lock, ShoppingBag, Weight } from 'lucide-react';

const facilities = [
  {
    title: "Cardio Zone",
    description: "Latest treadmills, ellipticals, and bikes with entertainment systems.",
    icon: Activity
  },
  {
    title: "Strength Training",
    description: "Premium free weights, machines, and functional training equipment.",
    icon: Weight
  },
  {
    title: "Group Classes",
    description: "HIIT, Yoga, Zumba, and specialized training sessions.",
    icon: Users
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching with certified professionals.",
    icon: Target
  },
  {
    title: "Modern Locker Rooms",
    description: "Clean, spacious facilities with modern amenities.",
    icon: Lock
  },
  {
    title: "Supplement Store",
    description: "Premium nutrition products and expert guidance.",
    icon: ShoppingBag
  }
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-neutral-100 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-neutral-900 uppercase">
            World-Class <span className="text-primary">Facilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="bg-white text-neutral-900 border border-neutral-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <CardHeader className="items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                   <facility.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center font-body text-neutral-600">
                <p>{facility.description}</p>
              </CardContent>
              <div className="w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
