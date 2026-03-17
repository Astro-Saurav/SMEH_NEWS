"use client";

import { studentProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Share2, TrendingUp, Hash, Heart } from "lucide-react";

export default function SocialBuzzPage() {
  // Use unique data slices for Social Buzz
  const mainStory = studentProjects[2]; 
  const listStories = studentProjects.slice(3, 6);
  const gridStories = studentProjects.slice(1, 7);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Editorial Header */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-12 md:py-20 mb-12">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Viral & Trending</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
             Social <span className="text-primary">Buzz</span>
           </h1>
           <p className="text-zinc-500 text-lg md:text-xl font-medium mt-6 max-w-2xl leading-relaxed">
             The pulse of the digital campus. Real-time updates, viral trends, and interactive community engagement across all platforms.
           </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-16">
            <Link href="#" className="group block">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-zinc-100 border border-zinc-100">
                <Image src={mainStory.image} alt="m" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="70vw" priority />
                <div className="absolute top-6 left-6 bg-zinc-950 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                   <Hash className="w-3 h-3 text-primary" /> Trending Now
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 text-[11px] font-black uppercase tracking-widest text-zinc-400">
                 <span className="flex items-center gap-1.5 text-primary">@manav_rachna_times</span>
                 <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                 <span>Viral Content</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] group-hover:text-zinc-800 mb-6 font-serif">
                {mainStory.headline}
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-3xl">
                {mainStory.description}
              </p>
              <div className="flex items-center gap-6 text-zinc-400">
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Heart className="w-4 h-4" /> 1.2K Likes</button>
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Share2 className="w-4 h-4" /> Share Post</button>
              </div>
            </Link>

            <div className="h-px bg-zinc-100 w-full" />

            <div className="grid md:grid-cols-2 gap-12">
               {listStories.map((story, i) => (
                 <Link key={i} href="#" className="group">
                    <div className="relative aspect-square mb-6 overflow-hidden bg-zinc-100 border border-zinc-50 rounded-xs">
                      <Image src={story.image} alt="s" fill className="object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700" sizes="40vw" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                       <span className="text-[9px] font-black uppercase tracking-widest text-primary">{story.category}</span>
                       <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest">#SMEHBuzz</span>
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
                <TrendingUp className="w-4 h-4" /> Digital Impressions
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
               <h4 className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-6">Digital Reach</h4>
               <div className="space-y-8 mb-10">
                  <div>
                    <div className="text-3xl font-black italic">25K+</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Active Followers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black italic">1.2M</div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Monthly Impressions</div>
                  </div>
               </div>
               <button className="w-full bg-primary text-white font-black uppercase text-[11px] tracking-widest py-4 hover:bg-white hover:text-zinc-950 transition-all shadow-2xl">Follow the Buzz</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
