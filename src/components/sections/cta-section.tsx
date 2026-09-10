import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  const whatsappMessage = "Hi, I'm interested in joining Snatch Fitness. Can you provide more information about membership plans?";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/919866786782?text=${encodedMessage}`;
  const phoneUrl = "tel:+919866786782";

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-primary via-orange-700 to-amber-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase">
          Ready to Start Your Transformation?
        </h2>
        <p className="mt-4 font-body text-lg max-w-2xl mx-auto">
          Join Sangareddy's premier fitness community today and take the first step towards a new you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-[#25D366] text-white hover:bg-[#1EBE57] transition-transform hover:scale-105 animate-pulse-glow">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-6 w-6" />
              Chat on WhatsApp
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary transition-transform hover:scale-105">
            <Link href={phoneUrl}>
              <Phone className="mr-2 h-6 w-6" />
              Call Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
