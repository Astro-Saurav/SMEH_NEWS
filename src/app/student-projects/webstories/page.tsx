import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'ws1',
    title: 'Webstory: City After Midnight',
    description: 'A swipe-based visual webstory capturing city life after dark through photo and short text narratives.',
    thumbnailUrl: 'https://picsum.photos/seed/ws1/400/225',
    imageHint: 'night city',
    category: 'Visual Story',
    link: '#'
  },
  {
    id: 'ws2',
    title: 'Webstory: Green Campus Drive',
    description: 'A quick visual explainer highlighting student-led sustainability actions and measurable impact on campus.',
    thumbnailUrl: 'https://picsum.photos/seed/ws2/400/225',
    imageHint: 'green campus',
    category: 'Explainer Story',
    link: '#'
  },
  {
    id: 'ws3',
    title: 'Webstory: Festival in Frames',
    description: 'A compact event story using sequential visuals to present major moments from the annual cultural festival.',
    thumbnailUrl: 'https://picsum.photos/seed/ws3/400/225',
    imageHint: 'festival photos',
    category: 'Event Story',
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
          View Story <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </CardFooter>
    </Card>
  </Link>
);

export default function WebstoriesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Webstories
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing short-form, visual-first web stories designed for mobile and digital audiences.
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
