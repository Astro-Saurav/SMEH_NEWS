"use client";

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  studentProjects,
  documentaryAndShortFilms
} from '@/lib/data';
import { PlayCircle, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  const heroImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('hero-')
  );

  const mainArticle = studentProjects[0];
  const topStories = studentProjects.slice(1, 5); 
  const exploreMore = studentProjects.slice(2, 6);

  // Reusable animation configuration
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col bg-[#fafafa] text-zinc-900 font-body min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Top Story & Trending Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          {/* Main Featured Article (Left 8 cols) */}
          <div className="lg:col-span-8 group cursor-pointer">
             <Link href={mainArticle.link} className="flex flex-col">
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900 overflow-hidden rounded-xl shadow-sm mb-6 mask-video">
                   <iframe
                     src="https://www.youtube.com/embed/CV08TgRVNT8?autoplay=1&mute=1&loop=1&playlist=CV08TgRVNT8&controls=0&modestbranding=1&rel=0&disablekb=1"
                     className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                     allow="autoplay; encrypted-media"
                     title="Hero Background Video"
                   />
                   <div className="absolute inset-0 bg-transparent group-hover:bg-indigo-900/10 transition-colors pointer-events-none" />
                   <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full z-10 shadow-md">
                      Editor's Pick
                   </div>
                </div>
                <div className="max-w-3xl flex-1 relative z-20">
                   <span className="text-indigo-700 font-bold text-xs uppercase tracking-widest mb-3 block">
                     {mainArticle.category}
                   </span>
                   <h2 className="font-headline text-3xl md:text-5xl font-black leading-tight text-zinc-900 mb-4 group-hover:text-indigo-800 transition-colors">
                     {mainArticle.headline}
                   </h2>
                   <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-4 line-clamp-3 font-light">
                     {mainArticle.description}
                   </p>
                   <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">
                     By Editorial Board • 2 hours ago
                   </span>
                </div>
             </Link>
          </div>

          {/* Trending Panel (Right 4 cols) */}
          <div className="lg:col-span-4 flex flex-col bg-white p-6 rounded-xl shadow-sm border border-zinc-100 relative z-20">
             <div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <h3 className="font-headline text-2xl font-bold text-zinc-900">Trending Now</h3>
             </div>
             <div className="flex flex-col gap-6">
                {topStories.map((item, index) => (
                  <motion.div key={item.id} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                    <Link href={item.link} className="group flex gap-4 items-start">
                       <span className="text-4xl font-headline font-black text-zinc-200 mt-[-6px]">
                          {index + 1}
                       </span>
                       <div className="flex-1">
                          <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-wider mb-1 block">
                            {item.category}
                          </span>
                          <h4 className="text-base font-bold leading-snug text-zinc-800 group-hover:text-indigo-700 transition-colors">
                             {item.headline}
                          </h4>
                       </div>
                    </Link>
                  </motion.div>
                ))}
             </div>
          </div>
        </motion.section>

        {/* Visual Journalism Showcase (Full width stylized) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-20"
        >
           <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-10 border-b border-slate-700 pb-4">
                 <div>
                   <h2 className="font-headline text-3xl md:text-4xl font-black mb-2">Visual Journalism</h2>
                   <p className="text-slate-400 text-sm md:text-base font-medium">Stories told through motion and frame.</p>
                 </div>
                 <Link href="/explore/audio-visual" className="mt-4 md:mt-0 text-sm font-bold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                    Watch All <TrendingUp className="w-4 h-4" />
                 </Link>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {documentaryAndShortFilms.slice(0, 4).map((item, i) => (
                    <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.6 }}>
                      <Link href="/explore/audio-visual" className="group flex flex-col">
                         <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-xl bg-slate-800 border border-slate-700/50">
                            <Image src={item.thumbnailUrl} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                            <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:scale-110 transition-all">
                               <PlayCircle className="w-5 h-5 text-white ml-0.5" />
                            </div>
                         </div>
                         <span className="text-indigo-400 font-bold text-[10px] uppercase tracking-wider mb-2 block">
                           {item.subject}
                         </span>
                         <h4 className="text-lg font-bold leading-tight group-hover:text-indigo-300 transition-colors">
                           {item.title}
                         </h4>
                      </Link>
                    </motion.div>
                 ))}
              </div>
           </div>
        </motion.section>

        {/* Modular Grid: More Sections */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16"
        >
           {/* Section 1 */}
           <div className="flex flex-col">
              <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-2 mb-6">
                 <h2 className="font-headline text-2xl font-black uppercase">Campus Buzz</h2>
              </div>
              <div className="flex flex-col gap-6">
                 {exploreMore.map((item, i) => (
                   <motion.div key={`buzz-${item.id}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                     <Link href={item.link} className="group grid grid-cols-3 gap-4">
                        <div className="col-span-1 relative aspect-square rounded-lg overflow-hidden bg-zinc-200">
                           <Image src={item.image} alt={item.headline} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="col-span-2 flex flex-col justify-center">
                           <h4 className="text-[15px] font-bold leading-snug text-zinc-900 group-hover:text-indigo-700 transition-colors line-clamp-3">
                              {item.headline}
                           </h4>
                           <span className="text-[10px] text-zinc-500 font-medium uppercase mt-2">12 hours ago</span>
                        </div>
                     </Link>
                   </motion.div>
                 ))}
              </div>
           </div>

           {/* Section 2 */}
           <div className="flex flex-col">
              <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-2 mb-6">
                 <h2 className="font-headline text-2xl font-black uppercase">Blog</h2>
              </div>
              <div className="flex flex-col gap-6">
                 {exploreMore.map((item, i) => (
                   <motion.div key={`feat-${item.id}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                     <Link href={item.link} className="group grid grid-cols-3 gap-4">
                        <div className="col-span-1 relative aspect-square rounded-lg overflow-hidden bg-zinc-200">
                           <Image src={item.image} alt={item.headline} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="col-span-2 flex flex-col justify-center">
                           <h4 className="text-[15px] font-bold leading-snug text-zinc-900 group-hover:text-indigo-700 transition-colors line-clamp-3">
                              {item.headline}
                           </h4>
                           <span className="text-[10px] text-zinc-500 font-medium uppercase mt-2">18 hours ago</span>
                        </div>
                     </Link>
                   </motion.div>
                 ))}
              </div>
           </div>

           {/* Section 3 (Highlight Box) */}
           <div className="flex flex-col bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center gap-2 mb-6">
                 <Award className="w-6 h-6 text-indigo-600" />
                 <h2 className="font-headline text-2xl font-black text-indigo-950 uppercase">Competitions</h2>
              </div>
              <p className="text-sm text-indigo-800/80 mb-6 font-medium">Discover the latest opportunities, hackathons, and literary competitions for MRU students.</p>
              
              <div className="flex flex-col gap-4 flex-1">
                 {studentProjects.slice(0, 3).map((item, i) => (
                   <motion.div key={`comp-${item.id}`} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15, duration: 0.4 }}>
                     <Link href="/competitions" className="group bg-white p-4 rounded-xl shadow-sm border border-indigo-50 hover:shadow-md transition-shadow block">
                        <h4 className="text-sm font-bold text-indigo-950 group-hover:text-indigo-600 mb-1">Upcoming Campus Hackathon</h4>
                        <div className="flex justify-between items-center mt-2 text-[10px] uppercase font-bold text-indigo-400">
                           <span>Ends in {i+2} days</span>
                           <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">Apply</span>
                        </div>
                     </Link>
                   </motion.div>
                 ))}
                 <Button className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">View All Opportunities</Button>
              </div>
           </div>
        </motion.section>

      </div>
    </div>
  );
}
