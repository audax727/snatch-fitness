import Link from "next/link";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export type TestimonialAuthor = {
  name: string;
  role: string;
  rating?: number;
};

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const rating = author.rating ?? 5;

  const cardContent = (
    <div className="flex h-full flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/90 p-6 text-white shadow-md w-[320px] sm:w-[380px] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50">
      <div>
        <div className="flex items-center gap-1 mb-3 text-amber-400">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="font-body text-sm sm:text-base text-neutral-300 leading-relaxed italic">"{text}"</p>
      </div>
      <div className="flex items-center gap-3 pt-6 mt-4 border-t border-neutral-800">
        <div className="flex flex-col text-left">
          <div className="font-headline font-bold text-white text-base">{author.name}</div>
          <div className="text-xs text-neutral-400 font-body">{author.role}</div>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className={cn("block", className)} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </Link>
  ) : (
    <div className={cn(className)}>
      {cardContent}
    </div>
  );
}
