
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { competitions } from '@/lib/data';
import { ExpandableCard } from '@/components/ui/expandable-card';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Users, ArrowRight } from 'lucide-react';

export default function CompetitionsPage() {
  const competitionImages = PlaceHolderImages.filter(img => img.id.startsWith('competition-'));

  return (
    <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Competitions & Opportunities
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore various competitions, hackathons, scholarships, and other opportunities.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
      </div>
    </div>
  );
}
