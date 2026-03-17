"use client";

import { studentProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Share2, TrendingUp, PenTool, ArrowRight, User } from "lucide-react";

export default function BlogPage() {
  const mainStory = studentProjects[4]; // Blog-like content
  const listStories = studentProjects.slice(1, 4);
  const gridStories = studentProjects.slice(0, 6);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Content Header */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-12 md:py-20 mb-12">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Thought Leadership</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
             The <span className="text-primary">Blog</span>
           </h1>
           <p className="text-zinc-500 text-lg md:text-xl font-medium mt-6 max-w-2xl leading-relaxed">
             Insights, perspectives, and critical discourse from the School of Media and Humanities. Exploring the intersection of culture, technology, and society.
           </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-16">
            <Link href="#" className="group block">
              <div className="relative aspect-[16/8] mb-8 overflow-hidden bg-zinc-100 border border-zinc-100">
                <Image src={mainStory.image} alt="m" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="70vw" priority />
                <div className="absolute top-6 left-6 bg-zinc-950 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                   <PenTool className="w-3 h-3 text-primary" /> Long Read
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                 <span className="flex items-center gap-1.5 text-primary">Analysis by Editorial Team</span>
                 <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                 <span>12 min read</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] group-hover:text-zinc-800 mb-6 font-serif">
                {mainStory.headline}
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-3xl">
                {mainStory.description}
              </p>
              <div className="flex items-center gap-6 text-zinc-400">
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><MessageSquare className="w-4 h-4" /> 42 Discussions</button>
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Share2 className="w-4 h-4" /> Share Article</button>
              </div>
            </Link>

            <div className="h-px bg-zinc-100 w-full" />

            {/* List Feed */}
            <div className="divide-y divide-zinc-100">
               {listStories.map((story, i) => (
                 <Link key={i} href="#" className="py-12 group flex flex-col md:flex-row gap-10 first:pt-0">
                    <div className="relative w-full md:w-64 aspect-square md:aspect-video overflow-hidden bg-zinc-100 shrink-0">
                      <Image src={story.image} alt="s" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="30vw" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                           <span className="text-[10px] font-black uppercase tracking-widest text-primary">{story.category}</span>
                           <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-1">8 Min Read</span>
                        </div>
                        <h3 className="text-2xl font-black tracking-tight group-hover:text-primary leading-tight mb-4 italic">{story.headline}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 max-w-xl">{story.description}</p>
                    </div>
                 </Link>
               ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 border-b-2 border-zinc-950 pb-2 mb-8 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Most Read
              </h3>
              <div className="space-y-10">
                {gridStories.map((item, i) => (
                  <Link key={i} href="#" className="block group">
                    <div className="flex gap-6">
                       <span className="text-5xl font-black text-zinc-100 group-hover:text-primary transition-colors shrink-0 tabular-nums">0{i+1}</span>
                       <div className="space-y-2">
                          <h4 className="text-sm font-bold leading-snug group-hover:text-primary group-hover:underline underline-offset-4 decoration-zinc-200 transition-all">{item.headline}</h4>
                          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600">
                             <User className="w-3 h-3" /> Staff Writer
                          </div>
                       </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sticky top-24 bg-zinc-950 text-white p-10 border-l-4 border-primary shadow-2xl">
               <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-6">Contributors</h4>
               <h3 className="text-2xl font-black tracking-tighter leading-tight mb-8">Write for the School of Media</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-medium">Have a perspective to share? We are always looking for student contributors and scholarly insights.</p>
               <button className="w-full bg-primary text-white font-black uppercase text-[11px] tracking-widest py-4 hover:bg-white hover:text-zinc-950 transition-all flex items-center justify-center gap-2">
                  Submit Pitch <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
