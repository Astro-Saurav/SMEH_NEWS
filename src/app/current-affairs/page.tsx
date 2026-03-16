import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, TrendingUp, Clock, Bookmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const currentAffairs = [
  {
    id: 1,
    title: 'New Education Policy: Impact on Media Studies',
    date: 'March 18, 2024',
    excerpt: 'An analysis of how the latest national education policy shifts are reshaping the curriculum for aspiring journalists.',
    category: 'Analysis',
    image: 'https://picsum.photos/seed/aff1/800/500',
    readTime: '6 min'
  },
  {
    id: 2,
    title: 'The Rise of Generative AI in Local Newsrooms',
    date: 'March 16, 2024',
    excerpt: 'Exploring how regional media outlets are integrating AI tools to optimize their reporting workflows without losing the human touch.',
    category: 'Technology',
    image: 'https://picsum.photos/seed/aff2/800/500',
    readTime: '8 min'
  },
  {
    id: 3,
    title: 'State of Mental Health in Educational Institutions',
    date: 'March 15, 2024',
    excerpt: 'A deep dive into the growing mental health challenges faced by students and the steps being taken by universities to address them.',
    category: 'Society',
    image: 'https://picsum.photos/seed/aff3/800/500',
    readTime: '10 min'
  },
];

export default function CurrentAffairsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="container mx-auto max-w-7xl pt-16 md:pt-20 pb-12 px-4 border-b border-zinc-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
                <Badge className="bg-indigo-50 text-indigo-700 border-none mb-4 uppercase tracking-[0.2em] font-black py-1 px-4 text-[10px]">
                    In-Depth Reporting
                </Badge>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-950 uppercase tracking-tighter leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Current <br /> Affairs
                </h1>
            </div>
            <div className="flex flex-col gap-4 text-zinc-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-600" /> Currently Trending
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" /> Updated Daily
                </div>
            </div>
        </div>
      </div>

      {/* Main Feed */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Featured Post */}
            <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl mb-8">
                    <Image src={currentAffairs[0].image} alt={currentAffairs[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                        <Badge className="bg-indigo-600 text-white border-none py-1.5 px-3 md:px-4 font-black uppercase tracking-widest rounded-lg text-[9px] md:text-[10px]">
                            Featured Analysis
                        </Badge>
                    </div>
                </div>
                <div className="px-2">
                    <p className="text-zinc-400 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] mb-4 flex items-center gap-2">
                        {currentAffairs[0].category} <span className="w-1 h-1 bg-zinc-300 rounded-full" /> {currentAffairs[0].date}
                    </p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-zinc-950 leading-tight mb-6 group-hover:text-indigo-700 transition-colors">
                        {currentAffairs[0].title}
                    </h2>
                    <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                        {currentAffairs[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between py-6 border-t border-zinc-100">
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-950">Read Post</span>
                        <span className="text-zinc-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2">
                           <Clock className="w-3 h-3" /> {currentAffairs[0].readTime} read
                        </span>
                    </div>
                </div>
            </div>

            {/* Sidebar Feed */}
            <div className="flex flex-col gap-10 md:gap-12">
                {currentAffairs.slice(1).map((item) => (
                    <Link key={item.id} href={`/current-affairs/${item.id}`} className="group grid grid-cols-1 sm:grid-cols-5 gap-6 md:gap-8 items-start">
                        <div className="sm:col-span-2 relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="sm:col-span-3 pt-2">
                            <Badge className="bg-zinc-100 text-zinc-500 border-none mb-3 font-black uppercase tracking-widest text-[8px] md:text-[9px]">
                                {item.category}
                            </Badge>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-black text-zinc-950 mb-3 group-hover:text-indigo-700 transition-colors leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed mb-4 font-medium">
                                {item.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-zinc-400 font-bold text-[8px] md:text-[9px] uppercase tracking-widest">
                                <span>{item.date}</span>
                                <span className="w-1 h-1 bg-zinc-200 rounded-full" />
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                            </div>
                        </div>
                    </Link>
                ))}
                
                {/* Newsletter Box */}
                <div className="bg-zinc-950 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 mt-6 md:mt-8 flex flex-col justify-center items-center text-center shadow-xl">
                    <Bookmark className="w-6 h-6 md:w-8 md:h-8 text-indigo-500 mb-6" />
                    <h4 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-4">Daily Briefings</h4>
                    <p className="text-zinc-500 text-xs md:text-sm mb-8 max-w-xs leading-relaxed">Get the most important news analysis delivered straight to your inbox daily.</p>
                    <div className="w-full flex bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-1 focus-within:border-indigo-500 transition-colors">
                        <input type="email" placeholder="Email address" className="bg-transparent border-none focus:ring-0 text-white text-xs md:text-sm px-4 flex-1 font-medium" />
                        <button className="bg-white text-zinc-950 font-black text-[9px] md:text-[10px] uppercase tracking-widest px-4 md:px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">Sign Up</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
