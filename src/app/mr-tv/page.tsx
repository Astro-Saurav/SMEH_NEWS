"use client";

import { studentProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Share2, TrendingUp, Play, Tv } from "lucide-react";

export default function MRTVPage() {
  // Use specific data for MR TV
  const mainStory = studentProjects[0]; 
  const listStories = studentProjects.slice(3, 6);
  const gridStories = studentProjects.slice(1, 7);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Editorial Header */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-12 md:py-20 mb-12">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-[2px] bg-primary" />
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Channel 04 • Live</span>
                 </div>
                 <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                   Manav Rachna <span className="text-primary">TV</span>
                 </h1>
                 <p className="text-zinc-500 text-lg md:text-xl font-medium mt-6 max-w-2xl leading-relaxed">
                   The premier digital broadcast network. News documentaries, student-led programming, and creative visuals streaming 24/7.
                 </p>
              </div>
              <button className="bg-primary hover:bg-zinc-950 text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-4 transition-all duration-500 shadow-2xl mb-2">
                 <Tv className="w-6 h-6" /> Watch Live Now
              </button>
           </div>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-16">
            <div className="group block relative cursor-pointer">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-zinc-950 border border-zinc-900">
                <Image src={mainStory.image} alt="m" fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" sizes="70vw" priority />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                      <Play className="w-10 h-10 text-white fill-white" />
                   </div>
                </div>
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-xl">
                   Featured Broadcast
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                 <span className="flex items-center gap-1.5 text-primary">Now Playing</span>
                 <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                 <span>2.4K Watching</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] group-hover:text-zinc-800 mb-6">
                {mainStory.headline}
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-3xl">
                {mainStory.description}
              </p>
              <div className="flex items-center gap-6 text-zinc-400">
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><MessageSquare className="w-4 h-4" /> Join Live Chat</button>
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Share2 className="w-4 h-4" /> Share Stream</button>
              </div>
            </div>

            <div className="h-px bg-zinc-100 w-full" />

            <div className="grid md:grid-cols-2 gap-12">
               {listStories.map((story, i) => (
                 <Link key={i} href="#" className="group">
                    <div className="relative aspect-video mb-6 overflow-hidden bg-zinc-100 border border-zinc-50 relative">
                      <Image src={story.image} alt="s" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="40vw" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                         <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                       <span className="text-[9px] font-black uppercase tracking-widest text-primary">{story.category}</span>
                       <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest">Episode 12</span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-primary leading-tight mb-4">{story.headline}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">{story.description}</p>
                 </Link>
               ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 border-b-2 border-zinc-950 pb-2 mb-8 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Global Trending
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

            <div className="sticky top-24 bg-zinc-950 text-white p-10 border-l-4 border-primary">
               <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 border-b border-zinc-900 pb-4">Programming Guide</h3>
               <div className="space-y-8 mb-12">
                  {[
                    { time: "09:00 AM", show: "Morning Buzz" },
                    { time: "01:00 PM", show: "SMEH Lunch Hour" },
                    { time: "06:00 PM", show: "News Wrap" },
                    { time: "09:00 PM", show: "Documentary Hour" }
                  ].map((schedule, i) => (
                    <div key={i} className="flex flex-col gap-1 border-l border-zinc-800 pl-4 py-1">
                       <span className="text-primary text-[9px] font-black uppercase tracking-widest">{schedule.time}</span>
                       <span className="text-white text-[13px] font-black uppercase tracking-tight">{schedule.show}</span>
                    </div>
                  ))}
               </div>
               <button className="w-full bg-primary text-white font-black uppercase text-[11px] tracking-widest py-4 hover:bg-white hover:text-zinc-950 transition-all shadow-2xl">Full Schedule</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
