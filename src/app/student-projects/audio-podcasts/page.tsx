import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

const podcasts = [
  {
    id: 'pod1',
    title: 'Tech Forward: The Ethics of Emerging Tech',
    description: 'An in-depth discussion with Dr. Anya Sharma on the ethical implications of new technologies.',
    thumbnailUrl: 'https://picsum.photos/seed/pod1/400/400',
    imageHint: 'tech ethics',
    category: 'Interview',
    duration: '45min',
    link: '#'
  },
  {
    id: 'pod2',
    title: 'History Uncovered: The Indus Valley Civilization',
    description: 'Explore the mysteries of one of the world\'s oldest urban civilizations in this narrative-driven episode.',
    thumbnailUrl: 'https://picsum.photos/seed/pod2/400/400',
    imageHint: 'ancient civilization',
    category: 'Narrative',
    duration: '30min',
    link: '#'
  },
  {
    id: 'pod3',
    title: 'The Round Table: 2024 Election Analysis',
    description: 'Our student panel breaks down the recent election results and what they mean for the future.',
    thumbnailUrl: 'https://picsum.photos/seed/pod3/400/400',
    imageHint: 'election analysis',
    category: 'Discussion',
    duration: '60min',
    link: '#'
  },
  {
    id: 'pod4',
    title: 'The Explainer: Quantum Computing',
    description: 'A beginner-friendly guide to understanding the complex world of quantum computing.',
    thumbnailUrl: 'https://picsum.photos/seed/pod4/400/400',
    imageHint: 'quantum computing',
    category: 'Explainer',
    duration: '20min',
    link: '#'
  }
];

const ProjectCard = ({ project }: { project: typeof podcasts[0] }) => (
    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group">
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:shadow-lg">
            <div className="relative w-full aspect-square">
            <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="w-16 h-16 text-white" />
            </div>
            </div>
            <CardContent className="p-4 flex-grow">
            <h3 className="font-bold font-headline text-lg leading-snug line-clamp-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mt-2">{project.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Badge variant="secondary">{project.category}</Badge>
                <span className="text-xs text-muted-foreground">{project.duration}</span>
            </CardFooter>
        </Card>
    </Link>
);

export default function AudioPodcastsPage() {
  return (
    <div className="bg-background text-foreground">
        <section className="bg-muted dark:bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Audio Podcasts
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Featuring audio storytelling projects like interviews, discussions, explainers, and narrative podcasts.
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {podcasts.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    </div>
  );
}
