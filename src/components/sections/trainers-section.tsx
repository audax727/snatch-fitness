import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const trainers = [
  {
    name: 'Rohan Verma',
    specialization: 'Strength & Conditioning',
    imageId: 'trainer-1'
  },
  {
    name: 'Anjali Desai',
    specialization: 'HIIT & Functional Fitness',
    imageId: 'trainer-2'
  },
  {
    name: 'Sandeep Kumar',
    specialization: 'Bodybuilding & Nutrition',
    imageId: 'trainer-3'
  },
  {
    name: 'Meera Singh',
    specialization: 'Yoga & Flexibility',
    imageId: 'trainer-4'
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white uppercase">
            Meet Your <span className="text-primary">Coaches</span>
          </h2>
          <p className="mt-4 font-body text-lg text-neutral-300">
            Certified professionals dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => {
            const image = PlaceHolderImages.find(img => img.id === trainer.imageId);
            return (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={`Photo of trainer ${trainer.name}`}
                  width={500}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-1/4 group-hover:translate-y-0 transition-transform duration-500 text-white">
                 <div className="h-1 w-16 bg-primary mb-2 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0" />
                 <h3 className="font-headline text-2xl font-bold">{trainer.name}</h3>
                 <p className="font-body text-primary">{trainer.specialization}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
