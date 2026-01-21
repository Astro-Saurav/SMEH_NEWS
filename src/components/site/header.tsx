"use client";

import Link from "next/link";
import {
  BookOpen,
  Menu,
  Newspaper,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import * as React from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#news", label: "News", icon: <Newspaper className="w-4 h-4" /> },
  { href: "/#learning", label: "Learning", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/#competitions", label: "Competitions", icon: <Trophy className="w-4 h-4" /> },
  { href: "/about", label: "About Us" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "w-full z-50 transition-all duration-300",
      scrolled 
        ? "sticky top-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        : "bg-transparent"
    )}>
      <div className={cn(
        "container flex max-w-screen-2xl items-center transition-all duration-300",
        scrolled ? "h-14" : "h-16"
      )}>
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              SMEH – Manav Rachna
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full py-6">
                  <Link href="/" className="mb-8 flex items-center" onClick={() => setIsOpen(false)}>
                    <Sparkles className="h-6 w-6 text-primary" />
                    <span className="ml-2 font-bold font-headline">SMEH</span>
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center space-x-2 text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                         {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
