import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Megaphone, Calendar, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const announcements = [
  {
    id: 1,
    title: 'Admission Open for 2024-25 Session',
    date: 'March 20, 2024',
    description: 'Manav Rachna University is now accepting applications for various undergraduate and postgraduate programs. Early bird scholarships available.',
    category: 'Admissions',
    image: 'https://picsum.photos/seed/ann1/800/400',
  },
  {
    id: 2,
    title: 'Upcoming University Convocation 2024',
    date: 'April 15, 2024',
    description: 'The annual convocation ceremony for the graduating class of 2023-24 will be held in the main auditorium. Chief Guest to be announced soon.',
    category: 'Events',
    image: 'https://picsum.photos/seed/ann2/800/400',
  },
  {
    id: 3,
    title: 'New Research Center for AI Innovation',
    date: 'March 10, 2024',
    description: 'A state-of-the-art research facility dedicated to Artificial Intelligence and Machine Learning has been inaugurated by the Vice Chancellor.',
    category: 'Academic',
    image: 'https://picsum.photos/seed/ann3/800/400',
  },
];

export default function AnnouncementPage() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* Header Section */}
      <section className="bg-zinc-950 py-16 md:py-32 px-4 shadow-inner">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="bg-indigo-600 text-white mb-6 px-4 py-1 uppercase tracking-widest text-[9px] md:text-[10px] font-black border-none">
            Official Notices
          </Badge>
          <h1 className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Announcements
          </h1>
          <p className="mt-6 md:mt-8 text-zinc-400 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Stay updated with the latest official news, deadlines, and events from across the campus.
          </p>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-12 md:py-24 px-4 bg-zinc-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-10 md:gap-12">
            {announcements.map((ann) => (
              <Card key={ann.id} className="overflow-hidden border-none shadow-xl md:shadow-2xl rounded-[1.5rem] md:rounded-3xl group bg-white">
                <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                  <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
                    <Image 
                      src={ann.image} 
                      alt={ann.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                  </div>
                  <CardContent className="md:col-span-3 p-6 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-indigo-50 p-3 rounded-xl md:rounded-2xl">
                        <Megaphone className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="bg-zinc-100 text-zinc-600 border-none uppercase text-[8px] md:text-[10px] font-black tracking-widest px-3">
                          {ann.category}
                        </Badge>
                        <p className="text-zinc-400 text-[10px] md:text-xs font-bold mt-1 uppercase flex items-center gap-2">
                           <Calendar className="w-3 h-3" /> {ann.date}
                        </p>
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-3xl font-black text-zinc-950 leading-tight mb-4 group-hover:text-indigo-700 transition-colors">
                      {ann.title}
                    </CardTitle>
                    <p className="text-zinc-600 leading-relaxed text-sm md:text-base mb-8 line-clamp-3">
                      {ann.description}
                    </p>
                    <Link href={`/announcement/${ann.id}`} className="inline-flex items-center text-indigo-600 font-black text-[10px] md:text-xs uppercase tracking-widest group/link">
                      Read Full Notice <ChevronRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
