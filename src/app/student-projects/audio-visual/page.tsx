import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 'av1',
    title: 'Documentary: "River\'s End"',
    description: 'A powerful look at the environmental impact on our local river system, highlighting community efforts for restoration.',
    thumbnailUrl: 'https://picsum.photos/seed/av1/400/225',
    imageHint: 'river pollution',
    category: 'Documentary',
    link: '#'
  },
  {
    id: 'av2',
    title: 'Short Film: "The Commute"',
    description: 'A silent short film depicting the unspoken connections between daily commuters on a city train.',
    thumbnailUrl: 'https://picsum.photos/seed/av2/400/225',
    imageHint: 'city train',
    category: 'Short Film',
    link: '#'
  },
  {
    id: 'av3',
    title: 'News Package: The Rise of Urban Farming',
    description: 'A broadcast news report on the growing trend of urban farming and its benefits for local communities.',
    thumbnailUrl: 'https://picsum.photos/seed/av3/400/225',
    imageHint: 'urban farming',
    category: 'News Package',
    link: '#'
  },
  {
    id: 'av4',
    title: 'PSA: "Check Before You Share"',
    description: 'A public service announcement about the importance of media literacy and fighting misinformation.',
    thumbnailUrl: 'https://picsum.photos/seed/av4/400/225',
    imageHint: 'misinformation concept',
    category: 'Public Service Video',
    link: '#'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group">
        <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:shadow-lg">
            <div className="relative w-full aspect-video">
                <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                </div>
            </div>
            <CardContent className="p-4 flex-grow">
                <h3 className="font-bold font-headline text-lg leading-snug line-clamp-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mt-2">{project.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Badge variant="outline">{project.category}</Badge>
            </CardFooter>
        </Card>
    </Link>
);

export default function AudioVisualPage() {
  return (
    <div className="bg-background text-foreground">
        <section className="bg-muted dark:bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Audio-Visual Projects
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Student work focused on video storytelling such as news packages, documentaries, short films, and more.
                </p>
            </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    </div>
  );
}
