import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Mic, Film, Newspaper, Trophy } from 'lucide-react';
import Image from 'next/image';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-amber-500" />,
    title: 'Best Student Film Award',
    description: 'Our students won the top prize at the National Student Film Festival for their documentary "City of Dreams."',
    category: 'Film Production',
    year: '2023',
    image: 'https://picsum.photos/seed/award1/400/300',
    imageHint: 'film award trophy'
  },
  {
    icon: <Newspaper className="h-8 w-8 text-sky-500" />,
    title: 'Excellence in Journalism',
    description: 'The "Campus Chronicle" was awarded "Best Student Newspaper" for its investigative reporting on university policies.',
    category: 'Print Media',
    year: '2023',
    image: 'https://picsum.photos/seed/award2/400/300',
    imageHint: 'student newspaper'
  },
  {
    icon: <Mic className="h-8 w-8 text-green-500" />,
    title: 'Top University Podcast',
    description: '"Mind Matters," a podcast on mental health awareness, was ranked #1 among university podcasts in the country.',
    category: 'Audio Podcasts',
    year: '2022',
    image: 'https://picsum.photos/seed/award3/400/300',
    imageHint: 'podcast recording'
  },
  {
    icon: <Award className="h-8 w-8 text-rose-500" />,
    title: 'National Advertising Competition Winner',
    description: 'A team of our PR & Advertising students won first place for their "Drive Safe" campaign.',
    category: 'PR & Advertising',
    year: '2022',
    image: 'https://picsum.photos/seed/award4/400/300',
    imageHint: 'advertising award'
  },
];


export default function AchievementsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Achievements
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the outstanding accomplishments of our students and faculty in various competitions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-12 md:gap-16">
          {achievements.map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`relative h-80 w-full rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm font-semibold text-muted-foreground">{item.year}</span>
                  </div>
                  <h2 className="text-3xl font-bold font-headline">{item.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
