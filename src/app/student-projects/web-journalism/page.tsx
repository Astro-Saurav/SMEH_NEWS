import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'web1',
    title: 'Interactive Feature: "A City Divided"',
    description: 'An in-depth multimedia story about gentrification, using interactive maps, audio interviews, and photo galleries.',
    thumbnailUrl: 'https://picsum.photos/seed/web1/400/225',
    imageHint: 'city map interactive',
    category: 'Multimedia Story',
    link: '#'
  },
  {
    id: 'web2',
    title: 'Data Journalism: Local Election Trends',
    description: 'An analysis of voting patterns over the last 20 years in our city, presented with interactive charts and graphs.',
    thumbnailUrl: 'https://picsum.photos/seed/web2/400/225',
    imageHint: 'data visualization chart',
    category: 'Data Journalism',
    link: '#'
  },
  {
    id: 'web3',
    title: 'Photo Story: "24 Hours at the Market"',
    description: 'A day in the life of a bustling city market, told through a series of compelling photographs and captions.',
    thumbnailUrl: 'https://picsum.photos/seed/web3/400/225',
    imageHint: 'city market',
    category: 'Photo Story',
    link: '#'
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl">
        <div className="relative w-full aspect-video bg-muted">
            <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover"
            />
        </div>
        <CardHeader>
            <Badge variant="default" className="w-fit">{project.category}</Badge>
            <CardTitle className="text-xl font-headline">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="text-muted-foreground line-clamp-3">{project.description}</p>
        </CardContent>
        <CardFooter>
             <div className="text-primary font-semibold text-sm flex items-center gap-2">
                View Project <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
             </div>
        </CardFooter>
      </Card>
    </Link>
);

export default function WebJournalismPage() {
  return (
     <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Web Stories
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing digital stories for online platforms including news reports, feature articles, and multimedia content.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </div>
  );
}
