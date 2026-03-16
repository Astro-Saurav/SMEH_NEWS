'use client';

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer
      className={cn(
        "w-full backdrop-blur border-t border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container max-w-screen-2xl mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Manav Rachna Times Logo"
              width={240}
              height={113}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Created By Saurav Kumar [SCA] and Aditya Tripathi [SET]
          </p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
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
