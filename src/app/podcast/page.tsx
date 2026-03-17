"use client";

import { studentProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Share2, TrendingUp, Mic, Play, Headphones, Clock } from "lucide-react";

export default function PodcastPage() {
  const mainStory = studentProjects[3]; // Podcast story
  const listStories = studentProjects.slice(0, 3);
  const gridStories = studentProjects.slice(2, 8);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Editorial Header */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-12 md:py-20 mb-12">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Audio Originals</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
             The <span className="text-primary">Podcast</span>
           </h1>
           <p className="text-zinc-500 text-lg md:text-xl font-medium mt-6 max-w-2xl leading-relaxed">
             Deep dives into the minds of creators, scholars, and campus leaders. Tune in to the frequency of modern humanities and media.
           </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-16">
            <div className="group block relative cursor-pointer">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-zinc-950 border border-zinc-900 rounded-xs">
                <Image src={mainStory.image} alt="m" fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" sizes="70vw" priority />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                      <Play className="w-8 h-8 text-white fill-white" />
                   </div>
                </div>
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                   <Mic className="w-3 h-3" /> New Release
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                 <span className="flex items-center gap-1.5 text-primary">Hosted by Sarah Khan</span>
                 <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                 <span>45m Episode</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] group-hover:text-zinc-800 mb-6 font-serif">
                {mainStory.headline}
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-3xl">
                {mainStory.description}
              </p>
              <div className="flex items-center gap-6 text-zinc-400">
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Headphones className="w-4 h-4" /> 1.2K Listens</button>
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Share2 className="w-4 h-4" /> Share Audio</button>
              </div>
            </div>

            <div className="h-px bg-zinc-100 w-full" />

            <div className="grid md:grid-cols-2 gap-12">
               {listStories.map((story, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-video mb-6 overflow-hidden bg-zinc-100 border border-zinc-50 relative rounded-xs">
                      <Image src={story.image} alt="s" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="40vw" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                         <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                       <span className="text-[9px] font-black uppercase tracking-widest text-primary">{story.category}</span>
                       <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> 32m</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-primary leading-tight mb-4">{story.headline}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">{story.description}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 border-b-2 border-zinc-950 pb-2 mb-8 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Audio Trending
              </h3>
              <div className="space-y-10">
                {gridStories.map((item, i) => (
                  <Link key={i} href="#" className="block group">
                    <div className="flex gap-6">
                       <span className="text-5xl font-black text-zinc-100 group-hover:text-primary transition-colors shrink-0 tabular-nums">0{i+1}</span>
                       <div className="space-y-2">
                          <h4 className="text-sm font-bold leading-snug group-hover:text-primary group-hover:underline decoration-zinc-200 transition-all">{item.headline}</h4>
                          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600">{item.category}</span>
                       </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sticky top-24 bg-zinc-950 text-white p-10 border-l-4 border-primary shadow-2xl">
               <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-8">Available Platforms</h4>
               <div className="grid grid-cols-2 gap-4 mb-10">
                  {["Spotify", "Apple", "Google", "Amazon"].map((p) => (
                    <div key={p} className="bg-zinc-900 p-4 border border-zinc-800 text-center">
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors cursor-pointer">{p}</span>
                    </div>
                  ))}
               </div>
               <h3 className="text-2xl font-black tracking-tighter leading-tight mb-6 italic underline decoration-primary/30">Never Miss a Frequency</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-medium">Subscribe to our newsletter for exclusive behind-the-scenes content and early access to episodes.</p>
               <button className="w-full bg-primary text-white font-black uppercase text-[11px] tracking-widest py-4 hover:bg-white hover:text-zinc-950 transition-all">Subscribe Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
