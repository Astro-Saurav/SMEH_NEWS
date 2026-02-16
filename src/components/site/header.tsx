
"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import {
  Home,
  Info,
  Briefcase,
  GalleryVertical,
  Mail,
  Trophy,
  Menu,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SiteHeader() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    {
      name: "About",
      url: "/about",
      icon: Info,
      subItems: [
        { name: "About SMeH", url: "/about" },
        { name: "Dean's Message", url: "/dean-message" },
        {
          name: "Faculty Mentors",
          url: "https://manavrachna.edu.in/mriirs/school-of-media-studies-humanities/faculty/teaching-faculty",
          external: true,
        },
      ],
    },
    {
      name: "Projects",
      url: "/student-projects",
      icon: Briefcase,
      subItems: [
        { name: "Audio-Visual", url: "/student-projects/audio-visual" },
        { name: "Web Stories", url: "/student-projects/web-journalism" },
        { name: "News Letter", url: "/student-projects/print-media" },
        { name: "Audio Podcasts", url: "/student-projects/audio-podcasts" },
        { name: "Campaigns", url: "/student-projects/pr-advertising" },
      ],
    },
    { name: "Achievements", url: "/achievements", icon: Trophy },
    { name: "Competitions", url: "/competitions", icon: Award },
    { name: "Gallery", url: "/gallery", icon: GalleryVertical },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isAboutPage
          ? "bg-black/20 backdrop-blur-sm"
          : "border-b border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://manavrachna.edu.in/uploads/school/658c196f918591703680367.webp"
            alt="SMeH Logo"
            width={168}
            height={79}
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:block">
          <NavBar items={navItems} />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isAboutPage && "text-white hover:bg-white/10 hover:text-white"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm bg-background/95 p-0 backdrop-blur-sm"
            >
              <div className="flex h-full flex-col">
                <div className="p-6 border-b">
                  <Link href="/">
                    <Image
                      src="https://manavrachna.edu.in/uploads/school/658c196f918591703680367.webp"
                      alt="SMeH Logo"
                      width={168}
                      height={79}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
                <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                  <Accordion type="multiple" className="w-full">
                    {navItems.map((item, index) =>
                      item.subItems ? (
                        <AccordionItem
                          key={item.name}
                          value={`item-${index}`}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="py-3 text-base hover:no-underline rounded-md px-3">
                            <span className="flex items-center gap-3">
                              <item.icon className="h-5 w-5 text-muted-foreground" />
                              {item.name}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pl-8 pb-1">
                            <div className="mt-2 flex flex-col space-y-3">
                              {item.subItems.map((sub) => (
                                <SheetClose key={sub.name} asChild>
                                  <Link
                                    href={sub.url}
                                    target={
                                      sub.external ? "_blank" : "_self"
                                    }
                                    className="text-muted-foreground hover:text-foreground"
                                  >
                                    {sub.name}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <SheetClose key={item.name} asChild>
                          <Link
                            href={item.url!}
                            className="flex items-center gap-3 rounded-md px-3 py-3 text-base"
                          >
                            <item.icon className="h-5 w-5 text-muted-foreground" />
                            {item.name}
                          </Link>
                        </SheetClose>
                      )
                    )}
                  </Accordion>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
