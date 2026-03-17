"use client";

import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const sections = [
    {
      title: "The Network",
      links: [
        { name: "Manav Rachna Home", href: "#" },
        { name: "SMEH Official", href: "#" },
        { name: "Admissions 2024", href: "#" },
        { name: "Student Life", href: "#" },
      ]
    },
    {
      title: "News Sections",
      links: [
        { name: "Campus Buzz", href: "/campus-buzz" },
        { name: "Beyond Campus", href: "/beyond-campus" },
        { name: "Social Buzz", href: "/social-buzz" },
        { name: "Manav Rachna TV", href: "/mr-tv" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Podcasts", href: "/podcast" },
        { name: "Digital Archive", href: "/gallery" },
        { name: "Announcements", href: "/announcement" },
        { name: "Contact Desk", href: "/contact" },
      ]
    }
  ];

  return (
    <footer className="bg-black text-zinc-400 py-20 border-t-[8px] border-primary font-sans">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="col-span-2 space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 bg-white rounded-sm p-1">
                 <Image src="/logo.png" alt="logo" fill className="object-contain" sizes="48px" />
              </div>
              <span className="font-['Playfair_Display',_serif] font-black italic text-3xl tracking-tighter text-white">
                MR <span className="text-primary">TIMES</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm font-medium">
              The authoritative voice of Manav Rachna's School of Media and Humanities. Documenting excellence, innovation, and campus life since inception.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-primary transition-all transform hover:scale-110"><Twitter className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-primary transition-all transform hover:scale-110"><Facebook className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-primary transition-all transform hover:scale-110"><Instagram className="w-6 h-6" /></Link>
              <Link href="#" className="hover:text-primary transition-all transform hover:scale-110"><Youtube className="w-6 h-6" /></Link>
            </div>
          </div>
          
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              <h3 className="text-white text-[11px] font-black uppercase tracking-[0.2em] border-b border-zinc-800 pb-3">
                {section.title}
              </h3>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-xs font-bold hover:text-white transition-colors tracking-wide">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <Link href="#" className="hover:text-zinc-400">Terms of Service</Link>
            <Link href="#" className="hover:text-zinc-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-400">Editorial Standards</Link>
            <Link href="/contact" className="hover:text-zinc-400">Feedback</Link>
          </div>
          <p className="tracking-[0.4em]">© 2026 MANAV RACHNA TIMES. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
