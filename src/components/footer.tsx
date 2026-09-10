import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold font-headline text-white mb-4">
              SNATCH <span className="text-primary">FITNESS</span>
            </h3>
            <p className="font-body text-sm text-neutral-400">
              STAY FIT WITH SNATCH FITNESS. Sangareddy's premier fitness destination.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#inside-befit" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#membership" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Location</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-bold text-white mb-4">Gym Hours</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><span className="font-semibold text-white">Morning Session:</span> 5:30 AM - 10:00 AM</li>
              <li><span className="font-semibold text-white">Evening Session:</span> 5:00 PM - 10:30 PM</li>
            </ul>
             <h4 className="font-headline text-lg font-bold text-white mt-4 mb-2">Contact</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>+91 9866786782</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500 font-body">
          <p>&copy; {new Date().getFullYear()} Snatch Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
