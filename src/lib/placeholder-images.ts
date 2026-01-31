
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: "hero-background",
    description: "A modern gym interior with various equipment.",
    imageUrl: "https://images.unsplash.com/photo-1597076537061-a6b58163aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxneW0lMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjY1NzQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "gym interior"
  },
  {
    id: "inside-1",
    description: "A wide shot of the gym floor showing various equipment.",
    imageUrl: "https://picsum.photos/seed/inside1/800/500",
    imageHint: "gym floor"
  },
  {
    id: "inside-2",
    description: "Close-up of dumbbells on a rack.",
    imageUrl: "https://picsum.photos/seed/inside2/800/500",
    imageHint: "gym dumbbells"
  },
  {
    id: "inside-3",
    description: "Cardio machines lined up near a window.",
    imageUrl: "https://picsum.photos/seed/inside3/800/500",
    imageHint: "gym cardio"
  },
  {
    id: "inside-4",
    description: "A person doing a workout with a kettlebell.",
    imageUrl: "https://picsum.photos/seed/inside4/800/500",
    imageHint: "kettlebell workout"
  },
  {
    id: "inside-5",
    description: "The reception area of the gym.",
    imageUrl: "https://picsum.photos/seed/inside5/800/500",
    imageHint: "gym reception"
  }
];
