'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  competitions,
  documentaryAndShortFilms,
  studentProjects,
} from '@/lib/data';
import NewsCard from '@/components/site/news-card';
import {
  ArrowRight,
  BookOpen,
  Trophy,
  PlayCircle,
  Calendar,
  Users,
  Briefcase,
  Film,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { ExpandableCard } from '@/components/ui/expandable-card';
import { format } from 'date-fns';
import VideoCard from '@/components/site/video-card';

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
                School of Media Studies & Humanities
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                News, Learning & Opportunities for Every Student
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 pointer-events-auto justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                >
                  <Link href="#student-projects">
                    Explore Projects <ArrowRight />
                  </Link>
                </Button>
              </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        {/* Student Projects Section */}
        <section id="student-projects" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-headline font-bold">Student Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentProjects.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Documentary and Short Films Section */}
        <section id="documentary-and-short-films" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-8">
            <Film className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-headline font-bold">
              Documentary and Short Films
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {documentaryAndShortFilms.map((item) => (
              <VideoCard key={item.id} {...item} />
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
