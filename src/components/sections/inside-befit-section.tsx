import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function InsideBefitSection() {
  const images = PlaceHolderImages.filter((img) => img.id.startsWith('inside-'));

  const galleryImages = images.slice(0, 5);
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section id="inside-befit" className="bg-black py-20 sm:py-28 relative overflow-x-hidden">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase">
                Inside <span className="text-primary">Snatch Fitness</span>
            </h2>
            <p className="mt-4 font-body text-lg text-neutral-300">
                A glimpse into where you'll transform.
            </p>
            </div>
        </div>

        <div className="scroll-container w-full">
            <div className="animate-infinite-scroll flex w-max gap-6">
            {duplicatedImages.map((image, index) => (
                <div
                    key={`${image.id}-${index}`}
                    className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30"
                >
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={400}
                        height={400}
                        className={cn(
                            "w-full h-full",
                            (image.id === 'inside-4' || image.id === 'inside-5') ? 'object-contain bg-black' : 'object-cover'
                        )}
                        data-ai-hint={image.imageHint}
                        loading="lazy"
                    />
                </div>
            ))}
            </div>
      </div>
    </section>
  );
}
