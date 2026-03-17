"use client";

import { studentProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Clock, MessageSquare, Share2, TrendingUp } from "lucide-react";

export default function CampusBuzzPage() {
  const mainStory = studentProjects[0];
  const listStories = studentProjects.slice(1, 4);
  const gridStories = studentProjects.slice(4, 10);

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="bg-zinc-50 border-b border-zinc-100 py-10 mb-12">
        <div className="container mx-auto px-4 md:px-8">
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
             Campus <span className="text-primary">Buzz</span>
           </h1>
           <p className="text-zinc-500 text-lg font-medium mt-4 max-w-2xl">
             The latest updates from the heart of Manav Rachna. From strategic academic shifts to student-led innovations.
           </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-16">
            <Link href="#" className="group block">
              <div className="relative aspect-[16/8] mb-8 overflow-hidden bg-zinc-100">
                <Image src={mainStory.image} alt="m" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="70vw" priority />
              </div>
              <div className="flex items-center gap-4 mb-4 text-[11px] font-black uppercase tracking-widest text-primary">
                 <span className="bg-primary text-white px-2 py-0.5">Top Feature</span>
                 <span className="text-zinc-400">Published 2h ago</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none group-hover:text-zinc-800 mb-6">
                {mainStory.headline}
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                {mainStory.description}
              </p>
              <div className="flex items-center gap-6 text-zinc-400">
                 <button className="flex items-center gap-2 hover:text-primary transition-colors"><MessageSquare className="w-4 h-4" /> 24</button>
                 <button className="flex items-center gap-2 hover:text-primary transition-colors"><Share2 className="w-4 h-4" /> Share</button>
              </div>
            </Link>

            <div className="h-px bg-zinc-100 w-full" />

            <div className="grid md:grid-cols-2 gap-12">
               {listStories.map((story, i) => (
                 <Link key={i} href="#" className="group">
                    <div className="relative aspect-video mb-6 overflow-hidden bg-zinc-100">
                      <Image src={story.image} alt="s" fill className="object-cover" sizes="40vw" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-primary leading-tight mb-4">{story.headline}</h3>
                    <p className="text-zinc-500 text-sm line-clamp-3">{story.description}</p>
                 </Link>
               ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 border-b-2 border-zinc-950 pb-2 mb-6 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Most Read
              </h3>
              <div className="space-y-8 divide-y divide-zinc-100">
                {gridStories.map((item, i) => (
                  <Link key={i} href="#" className="block pt-8 first:pt-0 group">
                    <div className="flex gap-4">
                       <span className="text-4xl font-black text-zinc-100 group-hover:text-primary/10 transition-colors shrink-0">0{i+1}</span>
                       <h4 className="text-sm font-bold leading-tight group-hover:text-primary group-hover:underline decoration-zinc-100">{item.headline}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sticky top-24 bg-zinc-950 text-white p-8">
               <h4 className="text-primary font-black uppercase text-[10px] tracking-widest mb-4">Admissions 2024</h4>
               <h3 className="text-xl font-black tracking-tight mb-6">Join the School of Media and Humanities</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-8">Be part of India's most innovative media program. Applications are now live.</p>
               <button className="w-full bg-primary text-white font-black uppercase text-[11px] py-3 hover:bg-white hover:text-zinc-950 transition-all">Apply Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
