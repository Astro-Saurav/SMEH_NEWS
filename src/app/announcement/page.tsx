"use client";

import { studentProjects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Share2, TrendingUp, Bell, Pin, Calendar, ArrowRight } from "lucide-react";

export default function AnnouncementPage() {
  const critical = studentProjects.slice(0, 2);
  const generalBulletin = studentProjects.slice(2, 6);
  const upcomingEvents = studentProjects.slice(1, 5);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Ticker Header */}
      <div className="w-full bg-primary py-2 overflow-hidden relative border-b border-white/10">
          <div className="flex gap-24 items-center text-[11px] font-black uppercase tracking-[0.4em] text-white whitespace-nowrap animate-scroll-x">
             <span>Critical Update: Academic Calendar 2024 Released</span>
             <span>Admin Notice: New Multimedia Studio Access Hours</span>
             <span>Event Alert: National Journalism Summit scheduled for Dec 15</span>
             <span>Critical Update: Registration window closing in 48 hours</span>
          </div>
      </div>

      {/* Official Dispatch Header */}
      <div className="bg-zinc-50 border-b border-zinc-100 py-16 md:py-24 mb-12">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Public Notice Desk</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">
             Official <span className="text-primary">Dispatch</span>
           </h1>
           <p className="text-zinc-500 text-lg md:text-xl font-medium mt-8 max-w-2xl leading-relaxed">
             The authoritative source for all institutional updates, academic shifts, and critical campus notices verified by the MRT network.
           </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Critical Notices */}
          <div className="lg:col-span-8 space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 border-b border-zinc-100 pb-4 mb-8">High Priority Alerts</h3>
            <div className="grid md:grid-cols-2 gap-8">
               {critical.map((item, i) => (
                 <div key={i} className="bg-zinc-950 p-10 relative group border-l-4 border-primary shadow-2xl">
                    <div className="absolute top-8 right-8 text-primary animate-pulse"><Pin className="w-5 h-5" /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-8 block">Urgent Action</span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-white mb-8 group-hover:text-primary transition-colors italic">
                      {item.headline}
                    </h2>
                    <div className="flex items-center gap-4 text-xs font-bold text-zinc-500">
                       <Calendar className="w-4 h-4" />
                       <span className="uppercase tracking-widest">Effective Immediately</span>
                    </div>
                 </div>
               ))}
            </div>

            <div className="pt-20">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 border-b border-zinc-100 pb-4 mb-12">General Bulletin</h3>
              <div className="divide-y divide-zinc-100">
                {generalBulletin.map((item, i) => (
                  <div key={i} className="py-12 flex flex-col md:flex-row gap-10 group">
                    <div className="flex-1">
                       <h4 className="text-3xl font-black tracking-tight group-hover:text-primary transition-colors transition-all mb-4 italic leading-none">{item.headline}</h4>
                       <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">{item.description}</p>
                    </div>
                    <div className="flex items-start">
                       <Link href="#" className="bg-zinc-50 border border-zinc-100 px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-xs">
                         View Details
                       </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-zinc-100 p-8">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-950 mb-8 flex items-center gap-2">
                <Bell className="w-4 h-4" /> Timeline
              </h3>
              <div className="space-y-10">
                {upcomingEvents.map((item, i) => (
                  <div key={i} className="flex gap-6 border-l-2 border-primary pl-6 py-1">
                     <div className="space-y-2">
                        <span className="text-primary font-black uppercase text-[10px] tracking-widest">Week 12</span>
                        <h4 className="text-sm font-bold leading-snug group-hover:text-primary transition-all">{item.headline}</h4>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-24 bg-zinc-950 text-primary p-10 border-t-8 border-primary">
               <h4 className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] mb-6 underline decoration-zinc-800">Support Desk</h4>
               <h3 className="text-2xl font-black tracking-tighter leading-tight mb-8 text-white">Need Clarification?</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-medium">Our administrative support desk is available from 09:00 AM to 05:00 PM for all institutional queries.</p>
               <button className="w-full bg-primary text-white font-black uppercase text-[11px] tracking-widest py-4 hover:bg-white hover:text-zinc-950 transition-all">Submit Query</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
