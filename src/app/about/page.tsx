import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Goal, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          About SMEH – Manav Rachna
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your centralized digital hub for news, learning, and opportunities.
        </p>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">
            What is SMEH – Manav Rachna?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            SMEH – Manav Rachna is a comprehensive digital platform designed exclusively for college students. We understand the fast-paced and dynamic nature of student life, and our goal is to streamline access to crucial information. From the latest campus news and global events to high-quality lecture series and study materials, we bring everything you need to succeed into one accessible place.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our platform also serves as a gateway to a world of opportunities, including hackathons, coding contests, scholarships, and competitive exams. We believe in empowering students by providing them with the tools and information necessary to excel both academically and professionally.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
           <Image src="https://picsum.photos/seed/about1/800/600" alt="Students collaborating" layout="fill" objectFit="cover" data-ai-hint="student collaboration" />
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Goal className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="font-headline">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To create a unified and efficient digital ecosystem that empowers every student with easy access to news, high-quality learning resources, and career-defining opportunities, fostering a community of informed, skilled, and successful individuals.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="font-headline">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the indispensable digital companion for every student, transforming the way they consume information, learn new skills, and discover opportunities, ultimately helping them achieve their full potential.
            </p>
          </CardContent>
        </Card>
      </section>

       <section className="mt-20 text-center">
        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
          <Users className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold font-headline">
          How This Platform Helps Students
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We bridge the information gap, helping you stay ahead in your academic and professional journey.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-bold text-lg mb-2">Stay Informed</h3>
            <p className="text-sm text-muted-foreground">Aggregated news from sports, politics, tech, and more, so you never miss an important update.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-bold text-lg mb-2">Learn & Grow</h3>
            <p className="text-sm text-muted-foreground">Access curated lectures, notes, and study materials across various subjects to supplement your learning.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-bold text-lg mb-2">Seize Opportunities</h3>
            <p className="text-sm text-muted-foreground">Discover competitions, scholarships, and exams relevant to you, with all details in one place.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
