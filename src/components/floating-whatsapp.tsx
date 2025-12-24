import Link from 'next/link';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export default function FloatingWhatsapp() {
  const whatsappMessage = "Hi, I'm interested in joining Be Fit Gym. Can you provide more information about membership plans?";
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/919966509990?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-16 w-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
      style={{ animationDuration: '3s' }}
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}
