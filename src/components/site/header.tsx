"use client";

import {
  Menu,
  ChevronRight,
  X,
  Globe,
  Radio,
  BookOpen,
  Camera,
  Award,
  Bell,
  MapPin,
  Newspaper,
  LayoutGrid,
  Mail
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [currentDate, setCurrentDate] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  const [showNav, setShowNav] = useState(!isHome);

  useEffect(() => {
    const date = new Date();
    const dateOpts: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', dateOpts));
  }, []);

  useEffect(() => {
    if (!isHome) {
      setShowNav(true);
      return;
    }

    const updateNav = () => {
      if (window.scrollY > 400) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
    return () => window.removeEventListener("scroll", updateNav);
  }, [isHome]);

  const topCategories = [
    { name: "Campus Buzz", url: "/explore/print-media", icon: <Newspaper className="w-4 h-4" /> },
    { name: "Social Buzz", url: "/explore/web-journalism", icon: <Globe className="w-4 h-4" /> },
    { name: "Blog", url: "/explore/blog", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Manav Rachna TV", url: "/explore/audio-visual", icon: <Radio className="w-4 h-4" /> },
    { name: "Achievements", url: "/achievements", icon: <Award className="w-4 h-4" /> },
    { name: "Announcement", url: "/announcement", icon: <Bell className="w-4 h-4" /> },
    { name: "Beyond Campus", url: "/beyond-campus", icon: <MapPin className="w-4 h-4" /> },
    { name: "Current Affairs", url: "/current-affairs", icon: <LayoutGrid className="w-4 h-4" /> },
    { name: "Gallery", url: "/gallery", icon: <Camera className="w-4 h-4" /> },
    { name: "Contact", url: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const splashOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const splashScale = useTransform(scrollY, [0, 400], [1, 0.9]);

  // Framer Motion Variants for Staggered Menu
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <>
      {isHome && (
        <header className="w-full flex flex-col font-body bg-white text-zinc-950">
          <div className="w-full bg-slate-900 text-slate-300 py-2.5 px-4 md:px-8 text-xs font-semibold flex justify-between items-center relative z-40">
            <div className="flex items-center gap-4 text-[10px] md:text-xs">
              <span className="hidden sm:inline-block tracking-wider">{currentDate}</span>
              <span className="sm:hidden tracking-wider font-bold">MANAV RACHNA TIMES</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="hidden md:inline-block text-zinc-500">SMEH Student Initiative</span>
            </div>
          </div>

          <div className="bg-white relative z-30 flex items-center justify-center min-h-[70vh] md:min-h-[85vh] py-12 md:py-20 overflow-hidden">
            <motion.div 
              style={{ opacity: splashOpacity, scale: splashScale }}
              className="container mx-auto px-4 flex flex-col items-center justify-center relative w-full"
            >
              <Link href="/" className="flex flex-col items-center group w-full relative z-10 max-w-6xl mx-auto">
                <div className="relative w-32 h-24 md:w-64 md:h-48 mb-6 md:mb-10 group-hover:scale-105 transition-transform duration-1000 ease-out">
                  <Image src="/logo.png" alt="Manav Rachna Logo" fill className="object-contain" priority />
                </div>
                
                <div className="text-center px-4 w-full">
                  <h1 className="text-4xl md:text-7xl lg:text-[7.5rem] font-black uppercase tracking-tighter text-zinc-950 leading-[0.95] md:leading-[0.9] text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Manav Rachna <br className="sm:hidden" /> 
                    <span className="text-indigo-700 xl:inline-block">Times</span>
                  </h1>
                  
                  <div className="flex items-center justify-center gap-2 md:gap-8 mt-8 md:mt-12 w-full max-w-3xl mx-auto">
                    <div className="h-[1px] bg-zinc-300 flex-1 hidden md:block" />
                    <p className="text-black text-[8px] md:text-[11px] lg:text-sm tracking-[0.15em] md:tracking-[0.3em] uppercase font-black text-center whitespace-normal md:whitespace-nowrap px-2">
                      An initiative led by SMEH students at Manav Rachna
                    </p>
                    <div className="h-[1px] bg-zinc-300 flex-1 hidden md:block" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </header>
      )}

      <AnimatePresence mode="wait">
        {showNav && (
          <motion.nav 
            initial={isHome ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`w-full z-[100] bg-white/95 backdrop-blur-xl shadow-lg border-y border-zinc-100 py-1 ${isHome ? 'fixed top-0' : 'sticky top-0'}`}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between min-h-[56px] md:min-h-[64px] gap-4">
                <div className="flex items-center gap-3">
                  <Link href="/" className="flex items-center gap-2 shrink-0">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                      <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="hidden sm:block font-black uppercase tracking-tighter text-sm md:text-base text-zinc-950">
                      MR <span className="text-indigo-700">Times</span>
                    </span>
                  </Link>
                </div>

                <div className="hidden lg:flex flex-1 justify-center overflow-x-auto no-scrollbar">
                  <div className="flex items-center space-x-1 xl:space-x-4 px-2">
                    {topCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.url}
                        className="text-[9px] xl:text-[10px] uppercase tracking-[0.1em] xl:tracking-[0.15em] font-black text-zinc-500 hover:text-indigo-700 transition-all relative group py-2 whitespace-nowrap px-2"
                      >
                        {cat.name}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-700 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="lg:hidden">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-zinc-900 hover:bg-zinc-100 rounded-full">
                          <Menu className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-[85vw] max-w-[340px] bg-white border-none p-0 flex flex-col shadow-2xl">
                        <SheetTitle className="sr-only">Main Menu</SheetTitle>
                        <SheetDescription className="sr-only">Navigation for Manav Rachna Times</SheetDescription>
                        
                        <div className="flex flex-col flex-1 overflow-y-auto pt-12 pb-10">
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="px-8 mb-12"
                          >
                             <Link href="/" className="inline-block">
                                <div className="relative w-16 h-16 mb-4">
                                   <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                                </div>
                                <h2 className="font-black uppercase tracking-tighter text-2xl text-zinc-950 leading-none">
                                   Manav Rachna <br />
                                   <span className="text-indigo-700">Times</span>
                                </h2>
                             </Link>
                          </motion.div>
                          
                          <motion.nav 
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col"
                          >
                            {topCategories.map((item) => (
                              <motion.div key={item.name} variants={itemVariants}>
                                <SheetClose asChild>
                                  <Link 
                                    href={item.url} 
                                    className={`px-8 py-5 text-sm md:text-base uppercase tracking-widest font-black text-zinc-600 hover:text-indigo-600 hover:bg-zinc-50 flex items-center justify-between transition-all border-l-4 ${pathname === item.url ? 'text-indigo-700 bg-indigo-50/40 border-indigo-600' : 'border-transparent'}`}
                                  >
                                    <div className="flex items-center gap-4">
                                      <span className={`${pathname === item.url ? 'text-indigo-600' : 'text-zinc-300'}`}>
                                        {item.icon}
                                      </span>
                                      {item.name}
                                    </div>
                                    <ChevronRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${pathname === item.url ? 'text-indigo-600' : 'opacity-20'}`} />
                                  </Link>
                                </SheetClose>
                              </motion.div>
                            ))}
                          </motion.nav>
                          
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="px-8 mt-auto pt-12 text-center"
                          >
                             <div className="h-[1px] bg-zinc-100 w-full mb-8" />
                             <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">
                                SMEH Student Initiative
                             </p>
                             <p className="text-[9px] text-zinc-300 mt-2 font-medium uppercase tracking-widest">
                                Manav Rachna International Institute of Research and Studies
                             </p>
                          </motion.div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                  <div className="flex items-center w-2 md:w-4 lg:w-0" />
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
