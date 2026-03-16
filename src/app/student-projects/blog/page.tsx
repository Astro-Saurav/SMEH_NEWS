import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 'blog1',
    title: 'The Future of Campus Storytelling',
    excerpt:
      'How student journalists are blending long-form writing, short video, and data visuals to create impactful stories.',
    category: 'Media Trends',
    image: 'https://picsum.photos/seed/blog1/600/360',
    link: '#',
  },
  {
    id: 'blog2',
    title: 'Inside the Newsroom: A Student Perspective',
    excerpt:
      'An on-ground reflection on editorial workflows, deadlines, and collaboration in a modern campus newsroom.',
    category: 'Campus Journalism',
    image: 'https://picsum.photos/seed/blog2/600/360',
    link: '#',
  },
  {
    id: 'blog3',
    title: '5 Tools Every Media Student Should Learn',
    excerpt:
      'A practical list of writing, design, and production tools that help students build strong portfolios faster.',
    category: 'Skills',
    image: 'https://picsum.photos/seed/blog3/600/360',
    link: '#',
  },
];

const BlogCard = ({ blog }: { blog: (typeof blogs)[0] }) => (
  <Link href={blog.link} target="_blank" rel="noopener noreferrer" className="group block">
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl">
      <div className="relative w-full aspect-video bg-muted">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          {blog.category}
        </Badge>
        <CardTitle className="text-xl font-headline">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
      </CardContent>
      <CardFooter>
        <div className="text-primary font-semibold text-sm flex items-center gap-2">
          Read Blog
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </CardFooter>
    </Card>
  </Link>
);

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">Blog</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore student-written media stories, commentary, and behind-the-scenes insights.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
