import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
  {
    id: 'print1',
    title: 'University Magazine: "The Lens"',
    description: 'A full-length feature magazine covering campus culture, arts, and student life. Responsible for layout, photography, and editorial content.',
    thumbnailUrl: 'https://picsum.photos/seed/print1/600/800',
    imageHint: 'magazine cover',
    category: 'Magazine Design',
    link: '#'
  },
  {
    id: 'print2',
    title: 'Investigative Report: Campus Food Waste',
    description: 'A multi-page newspaper spread on food waste in campus dining halls, including data visualizations and interviews.',
    thumbnailUrl: 'https://picsum.photos/seed/print2/600/800',
    imageHint: 'newspaper article',
    category: 'Newspaper Layout',
    link: '#'
  },
  {
    id: 'print3',
    title: 'Event Poster Series: "Film Fest 2023"',
    description: 'A series of promotional posters for the annual student film festival, utilizing bold typography and graphic design.',
    thumbnailUrl: 'https://picsum.photos/seed/print3/600/800',
    imageHint: 'event poster',
    category: 'Poster Design',
    link: '#'
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
        <Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl">
             <div className="relative w-full aspect-[3/4] bg-muted">
                <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <Badge variant="outline" className="mb-2">{project.category}</Badge>
                <h3 className="font-bold font-headline text-lg leading-snug">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{project.description}</p>
            </div>
        </Card>
    </Link>
);


export default function PrintMediaPage() {
  return (
     <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            News Letter
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Presenting traditional journalism work such as newspapers, magazines, newsletters, and posters.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </div>
  );
}
