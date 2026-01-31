import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type TestimonialAuthor = {
  name: string;
  role: string;
  image: string;
};

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const cardContent = (
    <div className="flex h-full flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground shadow-sm w-[350px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex-grow font-body text-base">
        <p>"{text}"</p>
      </div>
      <div className="flex items-center gap-3 pt-6 mt-auto">
        <Image
          src={author.image}
          alt={author.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="font-headline font-semibold tracking-tight">{author.name}</div>
          <div className="text-sm leading-5 text-muted-foreground">{author.role}</div>
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
