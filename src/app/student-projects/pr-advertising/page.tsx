import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
  {
    id: 'pr1',
    title: 'Brand Launch Campaign: "Aura"',
    description: 'A complete brand identity and launch strategy for a new sustainable fashion label, including social media, print, and video ads.',
    thumbnailUrl: 'https://picsum.photos/seed/pr1/400/300',
    imageHint: 'fashion campaign',
    category: 'Branding',
    link: '#'
  },
  {
    id: 'pr2',
    title: 'Non-Profit PR: "Paws for a Cause"',
    description: 'A public relations campaign to increase adoptions for a local animal shelter, resulting in a 50% increase in placements.',
    thumbnailUrl: 'https://picsum.photos/seed/pr2/400/300',
    imageHint: 'animal shelter',
    category: 'Public Relations',
    link: '#'
  },
  {
    id: 'pr3',
    title: 'Digital Ad Campaign: "ByteSize"',
    description: 'A targeted digital advertising campaign for a new food delivery app, focusing on user acquisition through social media platforms.',
    thumbnailUrl: 'https://picsum.photos/seed/pr3/400/300',
    imageHint: 'food delivery app',
    category: 'Digital Advertising',
    link: '#'
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
        <Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="relative w-full aspect-4/3">
                <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <CardHeader>
                <Badge variant="secondary" className="mb-2 w-fit">{project.category}</Badge>
                <CardTitle className="text-xl font-headline">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground line-clamp-4">{project.description}</p>
            </CardContent>
        </Card>
    </Link>
);


export default function PrAdvertisingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
              Campaigns
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Displaying strategic communication work including campaigns, advertisements, press releases, and brand stories.
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
