"use client";

import { studentProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Share2, TrendingUp, Award, Star } from "lucide-react";

export default function AchievementsPage() {
  const mainStory = studentProjects[0]; 
  const highlights = studentProjects.slice(1, 4);
  const wallOfFame = studentProjects.slice(4, 10);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hall of Fame Header - Updated to Light Professional Style */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-20 md:py-32 mb-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
           <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Excellence Documented</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
             Hall of <span className="text-primary">Fame</span>
           </h1>
           <p className="text-zinc-600 text-lg md:text-xl font-medium mt-8 max-w-2xl leading-relaxed">
             Celebrating the landmark achievements of our students and faculty. From national awards to global recognition in media and journalism.
           </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Achievement Feed */}
          <div className="lg:col-span-8 space-y-20">
            <div className="group block relative">
              <div className="relative aspect-[16/9] mb-8 overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
                <Image src={mainStory.image} alt="m" fill className="object-cover group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0" sizes="70vw" priority />
                <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-8 shadow-2xl max-w-lg border-l-4 border-primary">
                   <Award className="w-8 h-8 text-primary mb-6" />
                   <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight uppercase group-hover:text-primary transition-colors">
                     {mainStory.headline}
                   </h2>
                </div>
              </div>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mb-10">
                {mainStory.description}
              </p>
              <div className="flex items-center gap-6 text-zinc-400">
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Star className="w-4 h-4" /> Top Honor</button>
                 <button className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-black uppercase tracking-wider"><Share2 className="w-4 h-4" /> Share Success</button>
              </div>
            </div>

            <div className="h-px bg-zinc-100 w-full" />

            {/* List View */}
            <div className="grid md:grid-cols-3 gap-10">
               {highlights.map((item, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-[3/4] relative mb-6 overflow-hidden bg-zinc-100 border border-zinc-200">
                       <Image src={item.image} alt="a" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0" sizes="30vw" />
                       <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur flex items-center justify-center rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <Award className="w-4 h-4 text-primary" />
                       </div>
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">{item.headline}</h3>
                 </div>
               ))}
            </div>
          </div>

          {/* Wall of Recognition Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="border-t-2 border-zinc-950 pt-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 mb-10 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Recent Citations
              </h3>
              <div className="space-y-12">
                {wallOfFame.map((item, i) => (
                  <Link key={i} href="#" className="block group border-b border-zinc-100 pb-8 last:border-0 last:pb-0">
                    <div className="flex items-baseline gap-4 mb-3">
                       <span className="text-primary font-black italic text-xs tracking-widest">2024</span>
                       <div className="h-px flex-grow bg-zinc-100" />
                    </div>
                    <h4 className="text-md font-bold leading-tight text-zinc-900 group-hover:text-primary group-hover:underline underline-offset-4 transition-all">
                      {item.headline}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sticky top-24 bg-zinc-950 text-white p-10 shadow-2xl border-l-4 border-primary">
               <h4 className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] mb-6">Alumni Network</h4>
               <h3 className="text-2xl font-black tracking-tighter leading-tight mb-8">Join the Ranks of Industry Leaders</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-medium italic underline decoration-zinc-800">The School of Media and Humanities has produced visionary storytellers for over two decades.</p>
               <button className="w-full bg-primary text-white font-black uppercase text-[11px] tracking-widest py-4 hover:bg-white hover:text-zinc-950 transition-all shadow-xl">Contact Success Hub</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
