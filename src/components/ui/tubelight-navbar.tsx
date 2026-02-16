
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface NavSubItem {
  name: string
  url: string
  external?: boolean
}

interface NavItem {
  name: string
  url?: string
  icon: LucideIcon
  subItems?: NavSubItem[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items[0]?.name || '')
  const isAboutPage = pathname === '/about';

  useEffect(() => {
    const sortedItems = [...items].sort((a, b) => (b.url?.length || 0) - (a.url?.length || 0));
    const activeItem = sortedItems.find(item => {
        // Exact match for homepage
        if (item.url === '/' && pathname === '/') return true;
        
        // Starts with for other pages, but not for homepage
        if (item.url && item.url !== '/' && pathname.startsWith(item.url)) return true;

        // Check sub-items
        if (item.subItems) {
            return item.subItems.some(subItem => !subItem.external && pathname.startsWith(subItem.url));
        }
        return false;
    });

    if (activeItem) {
        setActiveTab(activeItem.name);
    } else {
        setActiveTab('');
    }
  }, [pathname, items]);

  return (
    <nav
      className={cn(
        "flex items-center gap-1",
        className,
      )}
    >
        {items.map((item) => {
          const isActive = activeTab === item.name

          const NavElementContent = (
            <div
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-2",
                isAboutPage 
                  ? "text-white/90 hover:text-white"
                  : "text-foreground/80 hover:text-primary",
                isActive && (isAboutPage ? "bg-white/10 text-white" : "text-primary"),
              )}
            >
              <span>{item.name}</span>
              {item.subItems && <ChevronDown className="h-4 w-4 opacity-70" />}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className={cn(
                    "absolute inset-0 w-full rounded-full -z-10",
                    isAboutPage ? "bg-white/5" : "bg-primary/5",
                  )}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 35,
                  }}
                >
                  <div className={cn("absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full", isAboutPage ? "bg-white" : "bg-primary")}>
                    <div className={cn("absolute w-12 h-6 rounded-full blur-lg -top-2 -left-2", isAboutPage ? "bg-white/20" : "bg-primary/20")} />
                  </div>
                </motion.div>
              )}
            </div>
          );

          if (item.subItems) {
            return (
              <DropdownMenu key={item.url || item.name}>
                <DropdownMenuTrigger>
                  {NavElementContent}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background/80 backdrop-blur-lg border-border">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild className="cursor-pointer">
                      <Link href={subItem.url} target={subItem.external ? "_blank" : "_self"} rel={subItem.external ? "noopener noreferrer" : ""}>
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          }

          return (
            <Link
              key={item.url || item.name}
              href={item.url!}
            >
              {NavElementContent}
            </Link>
          )
        })}
    </nav>
  )
}
