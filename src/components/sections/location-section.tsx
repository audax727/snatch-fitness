import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function LocationSection() {
  const gmapsUrl = "https://maps.google.com/maps?q=17.6254461,78.0722742&t=&z=17&ie=UTF8&iwloc=&output=embed";
  const gmapsPlaceUrl = "https://www.google.com/maps/place/SNATCH+FITNESS/@17.6254512,78.0696993,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbf9005dec1b9b:0x89aa50b76e1d229e!8m2!3d17.6254461!4d78.0722742!16s%2Fg%2F11nq8vv3vb?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="bg-[#050A14] py-20 sm:py-28 border-t border-[#1B2945]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase">
            OUR <span className="text-primary">LOCATION</span>
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
                title="Snatch Fitness Location"
              ></iframe>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="h-full flex flex-col justify-between">
              <div className="space-y-6 font-body text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-[#FF671F] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-white">Address</h3>
                    <p className="text-neutral-300">Sangareddy, Telangana 502001, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                   <Phone className="h-6 w-6 text-[#048A47] mt-1 flex-shrink-0" />
                   <div>
                      <h3 className="font-headline text-xl font-semibold text-white">Phone</h3>
                      <p className="text-neutral-300">+91 9866786782</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="h-6 w-6 text-[#FF671F] mt-1 flex-shrink-0 font-bold text-center">⏰</div>
                   <div>
                      <h3 className="font-headline text-xl font-semibold text-white">Gym Timings</h3>
                      <p><span className="font-semibold text-white">Morning:</span> 5:30 AM - 10:00 AM</p>
                      <p><span className="font-semibold text-white">Evening:</span> 5:00 PM - 10:30 PM</p>
                   </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 w-full bg-[#FF671F] hover:bg-[#E55610] text-white">
                <Link href={gmapsPlaceUrl} target="_blank" rel="noopener noreferrer">
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
