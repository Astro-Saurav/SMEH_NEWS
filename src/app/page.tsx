'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  competitions,
  lectureItems,
  newsItems,
  studyMaterials,
} from '@/lib/data';
import NewsCard from '@/components/site/news-card';
import MaterialCard from '@/components/site/material-card';
import {
  ArrowRight,
  BookOpen,
  Newspaper,
  Trophy,
  PlayCircle,
  Calendar,
  Users,
} from 'lucide-react';
import { FlippingCard } from '@/components/ui/flipping-card';
import { Badge } from '@/components/ui/badge';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { ExpandableCard } from '@/components/ui/expandable-card';
import { format } from 'date-fns';

const LectureCardFront = ({ item }: { item: (typeof lectureItems)[0] }) => (
  <div className="flex flex-col h-full w-full rounded-xl overflow-hidden bg-card text-card-foreground">
    <div className="relative w-full aspect-video flex-shrink-0">
      <Image
        src={item.thumbnailUrl}
        alt={item.title}
        fill
        className="object-cover"
        data-ai-hint={item.imageHint}
      />
    </div>
    <div className="p-4 flex-grow flex flex-col">
      <h3 className="font-bold font-headline text-sm leading-snug line-clamp-2 flex-grow">{item.title}</h3>
      <div className="mt-2">
         <Badge variant="outline">{item.subject}</Badge>
      </div>
    </div>
  </div>
);

const LectureCardBack = ({ item }: { item: (typeof lectureItems)[0] }) => (
  <div className="flex flex-col items-center justify-center h-full w-full p-6 text-center bg-card text-card-foreground rounded-xl">
    <PlayCircle className="w-12 h-12 text-primary mb-4" />
    <h3 className="font-bold font-headline text-base mb-4 line-clamp-3">{item.title}</h3>
    <p className="text-sm text-muted-foreground mb-6">
      Click the button below to watch this lecture on YouTube.
    </p>
    <Button asChild>
        <Link href={item.videoUrl} target="_blank" rel="noopener noreferrer">
        Watch Now
        </Link>
    </Button>
  </div>
);


export default function Home() {
  const heroImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('hero-')
  );
  
  const parallaxImages = heroImages.map(img => ({ src: img.imageUrl, alt: img.description }));
  const competitionImages = PlaceHolderImages.filter(img => img.id.startsWith('competition-'));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <ZoomParallax images={parallaxImages} />
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center text-white p-4 -mt-[300vh] pointer-events-none">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
              <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
                SMEH – Manav Rachna
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
                News, Learning & Opportunities for Every Student
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                >
                  <Link href="#news">
                    Explore News <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#learning">
                    Start Learning <BookOpen />
                  </Link>
                </Button>
              </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        {/* News Section */}
        <section id="news" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <Newspaper className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-headline font-bold">Latest News</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Lectures & Learning Section */}
        <section id="learning" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-headline font-bold">
              Lectures & Learning
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {lectureItems.map((item) => (
              <FlippingCard
                key={item.id}
                width={280}
                height={340}
                frontContent={<LectureCardFront item={item} />}
                backContent={<LectureCardBack item={item} />}
              />
            ))}
          </div>
        </section>
        
        {/* Study Materials Section */}
        <section id="materials" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <h2 className="text-3xl font-headline font-bold">Study Materials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyMaterials.map((item) => (
              <MaterialCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Competitions & Opportunities Section */}
        <section id="competitions" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-headline font-bold">
              Competitions & Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((item, index) => (
              <ExpandableCard
                key={item.id}
                title={item.name}
                description={item.organizer}
                src={competitionImages[index % competitionImages.length]?.imageUrl || `https://picsum.photos/seed/${item.id}/800/600`}
                className="w-full"
                 classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 mt-1 text-destructive flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Deadline</h4>
                      <p className="text-sm text-muted-foreground">{format(new Date(item.deadline), 'MMMM d, yyyy')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Eligibility</h4>
                      <p className="text-sm text-muted-foreground">{item.eligibility}</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      Apply / Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </ExpandableCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
