import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const beyondCampusNews = [
  {
    id: 1,
    title: 'Industry Visit: Tech Summit 2024 at Cyber Hub',
    location: 'Gurugram',
    description: 'SMEH students recently visited the Regional Tech Summit to engage with industry leaders and explore the future of digital media.',
    category: 'Industry Visit',
    image: 'https://picsum.photos/seed/bc1/800/600',
  },
  {
    id: 2,
    title: 'Collaborative Project with International University',
    location: 'London / Faridabad',
    description: 'A new partnership has been established for a semester-long exchange program focused on sustainable journalism.',
    category: 'International',
    image: 'https://picsum.photos/seed/bc2/800/600',
  },
  {
    id: 3,
    title: 'Community Outreach: Literacy Drive in Local Schools',
    location: 'Faridabad',
    description: 'Student volunteers spent the weekend conducting workshops on basic communication skills for underprivileged children.',
    category: 'Community',
    image: 'https://picsum.photos/seed/bc3/800/600',
  },
];

export default function BeyondCampusPage() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://picsum.photos/seed/beyond/1920/1080" 
          alt="Beyond Campus" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="container mx-auto relative z-10 px-4 text-center">
          <Badge className="bg-white text-zinc-950 mb-4 md:mb-6 font-black tracking-widest px-3 md:px-4 py-1 uppercase rounded-sm text-[9px] md:text-[10px]">
            Global Impact
          </Badge>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Beyond Campus
          </h1>
          <p className="mt-4 md:mt-6 text-zinc-300 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed">
            Exploring opportunities, collaborations, and impacts that ripple far beyond the university walls.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {beyondCampusNews.map((news) => (
              <Card key={news.id} className="group border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image 
                    src={news.image} 
                    alt={news.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-zinc-950 text-white border-none py-1 px-3 text-[9px] font-black uppercase tracking-widest rounded-sm">
                      {news.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-zinc-400 text-[9px] font-bold uppercase tracking-widest mb-4">
                    <MapPin className="w-3 h-3 text-indigo-600" /> {news.location}
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-black text-zinc-950 mb-4 leading-tight group-hover:text-indigo-700 transition-colors">
                    {news.title}
                  </CardTitle>
                  <p className="text-zinc-500 line-clamp-3 text-sm leading-relaxed mb-8">
                    {news.description}
                  </p>
                  <Link href={`/beyond-campus/${news.id}`} className="group/btn flex items-center justify-between w-full pt-4 md:pt-6 border-t border-zinc-50">
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-950 group-hover/btn:text-indigo-600 transition-colors">Learn More</span>
                    <div className="bg-zinc-50 group-hover/btn:bg-indigo-600 p-2 rounded-full transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-white" />
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
