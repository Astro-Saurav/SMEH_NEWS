"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';

export type NewsCardProps = {
  id: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageHint: string;
  link: string;
};

export default function NewsCard({ category, headline, description, image, imageHint, link }: NewsCardProps) {
  return (
    <BackgroundGradient containerClassName="h-full rounded-3xl" className="p-0 rounded-[22px] overflow-hidden h-full">
      <div className="bg-card text-card-foreground flex flex-col h-full">
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={headline}
            fill
            className="object-cover"
            data-ai-hint={imageHint}
          />
        </div>
        <div className="flex-grow p-6">
          <Badge variant="secondary" className="mb-2">{category}</Badge>
          <h3 className="font-headline text-lg mb-2 leading-tight">{headline}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </div>
        <div className="p-6 pt-0">
          <Button asChild variant="outline" className="w-full">
            <Link href={link}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </BackgroundGradient>
  );
}
