import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Mic, Film, Newspaper, Trophy, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const achievements = [
  {
    icon: <Trophy className="h-10 w-10 text-amber-500" />,
    title: 'Best Student Film Award',
    description: 'Our students won the top prize at the National Student Film Festival for their documentary "City of Dreams."',
    category: 'Film Production',
    year: '2023',
    image: 'https://picsum.photos/seed/award1/800/600',
  },
  {
    icon: <Newspaper className="h-10 w-10 text-sky-500" />,
    title: 'Excellence in Journalism',
    description: 'The "Campus Chronicle" was awarded "Best Student Newspaper" for its investigative reporting on university policies.',
    category: 'Print Media',
    year: '2023',
    image: 'https://picsum.photos/seed/award2/800/600',
  },
  {
    icon: <Mic className="h-10 w-10 text-green-500" />,
    title: 'Top University Podcast',
    description: '"Mind Matters," a podcast on mental health awareness, was ranked #1 among university podcasts in the country.',
    category: 'Audio Podcasts',
    year: '2022',
    image: 'https://picsum.photos/seed/award3/800/600',
  },
  {
    icon: <Award className="h-10 w-10 text-rose-500" />,
    title: 'National Advertising Competition Winner',
    description: 'A team of our PR & Advertising students won first place for their "Drive Safe" campaign.',
    category: 'PR & Advertising',
    year: '2022',
    image: 'https://picsum.photos/seed/award4/800/600',
  },
];

export default function AchievementsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Hero */}
      <section className="bg-zinc-950 pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge className="bg-indigo-600 text-white border-none mb-8 px-6 py-1.5 font-black uppercase tracking-[0.3em] text-[10px] rounded-full">
                Honoring Merit
            </Badge>
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            Achievements
          </h1>
          <p className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
            Celebrating the extraordinary milestones and groundbreaking success stories of our students and faculty across the global stage.
          </p>
        </div>
      </section>

      {/* Modern Grid */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {achievements.map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden shadow-2xl mb-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    {item.icon}
                  </div>
                </div>
                
                <div className="px-4">
                   <div className="flex items-center gap-4 mb-4">
                     <Badge variant="secondary" className="bg-zinc-100 text-zinc-900 border-none font-black uppercase tracking-widest text-[9px] px-3 py-1">
                        {item.category}
                     </Badge>
                     <span className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">{item.year} Edition</span>
                   </div>
                   
                   <h2 className="text-2xl md:text-4xl font-black text-zinc-950 mb-4 group-hover:text-indigo-700 transition-colors leading-tight">
                        {item.title}
                   </h2>
                   
                   <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                        {item.description}
                   </p>
                   
                   <button className="flex items-center gap-3 text-zinc-950 font-black text-xs uppercase tracking-widest group/btn hover:text-indigo-600 transition-colors">
                        View Honors <div className="bg-zinc-950 p-2 rounded-full group-hover/btn:bg-indigo-600 transition-colors">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat Section */}
      <section className="bg-indigo-600 py-24 md:py-32 overflow-hidden relative">
          <div className="container mx-auto px-4 text-center relative z-10">
              <h3 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter mb-12">Building a Legacy of Excellence</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                      <p className="text-4xl md:text-6xl text-white font-black mb-2">50+</p>
                      <p className="text-indigo-100 text-[10px] font-black uppercase tracking-widest">Global Awards</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                      <p className="text-4xl md:text-6xl text-white font-black mb-2">20</p>
                      <p className="text-indigo-100 text-[10px] font-black uppercase tracking-widest">Industry Majors</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                      <p className="text-4xl md:text-6xl text-white font-black mb-2">100%</p>
                      <p className="text-indigo-100 text-[10px] font-black uppercase tracking-widest">Placement Record</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                      <p className="text-4xl md:text-6xl text-white font-black mb-2">10+</p>
                      <p className="text-indigo-100 text-[10px] font-black uppercase tracking-widest">Research Labs</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
