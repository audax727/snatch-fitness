import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function LocationSection() {
  const gmapsUrl = "https://maps.google.com/maps?q=17.5913423,78.0754515&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="bg-neutral-100 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 uppercase">
            <span className="text-primary">Find</span> Us
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-lg shadow-xl border border-neutral-200">
               <iframe
                src={gmapsUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Be Fit Gym Location"
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="h-full flex flex-col">
              <div className="space-y-4 font-body text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-neutral-800">Address</h3>
                    <p>Sangareddy, Telangana 502001, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                   <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                   <div>
                      <h3 className="font-headline text-xl font-semibold text-neutral-800">Phone</h3>
                      <p>+91 9966509990</p>
                      <p>+91 7644019999</p>
                   </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 w-full">
                <Link href="https://www.google.com/maps/dir/?api=1&destination=17.5913423,78.0754515" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
