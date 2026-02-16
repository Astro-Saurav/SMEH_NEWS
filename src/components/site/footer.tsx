'use client';

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <footer className={cn(
      "w-full backdrop-blur",
      isAboutPage
        ? "bg-transparent text-white"
        : "border-t border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container max-w-screen-2xl mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="https://manavrachna.edu.in/uploads/school/658c196f918591703680367.webp"
              alt="SMeH Logo"
              width={168}
              height={79}
              className="h-10 w-auto"
            />
          </div>
          <p className={cn("text-sm", isAboutPage ? "text-gray-300" : "text-muted-foreground")}>
            © 2026 Created By Saurav Kumar [SCA] and Aditya Tripathi [SET]
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className={cn(isAboutPage && "text-white hover:bg-white/10 hover:text-white")}>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className={cn(isAboutPage && "text-white hover:bg-white/10 hover:text-white")}>
              <Link href="#" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className={cn(isAboutPage && "text-white hover:bg-white/10 hover:text-white")}>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
