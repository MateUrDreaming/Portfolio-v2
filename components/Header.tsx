"use client"
import Link from "next/link"
import { useState } from "react"


import {PKLogoV2, MenuIcon, LinkedinIcon, GithubIcon} from "@/config/icons";
import { siteConfig } from "@/config/site";

import { ModeToggle } from '@/components/ui/ThemeToggle';
import { Button } from "@/components/ui/Button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet"



const Header = () => {
  const [activeLink, setActiveLink] = useState('#');

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-200/60 dark:bg-slate-900/50 shadow-sm border-b-[1px]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PKLogoV2 className="h-10 w-10" />
          <span className="text-lg font-medium">Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navItems.map((item, index) => (
            <Link 
              href={`${item.href}`} 
              key={index} 
              className={`text-sm font-medium hover:text-muted-foreground hover:underline ${activeLink === item.href ? 'text-blue-500' : ''}`} 
              prefetch={false} 
              onClick={() => handleLinkClick(item.href)}>
              {item.label}
            </Link>

          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTitle className='hidden'>Menu</SheetTitle>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] py-10">
            <SheetHeader className='flex items-center justify-center'>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <PKLogoV2 className="h-10 w-10" />
                <span className="text-lg font-medium">Portfolio</span>
              </Link>
              <SheetDescription className='hidden'>Description goes here</SheetDescription>
            </SheetHeader>
              <div className="flex flex-col gap-10 p-10 text-center">

              {siteConfig.navItems.map((item, index) => (
                <Link 
                  href={`${item.href}`} 
                  key={index} 
                  className={`text-sm font-medium hover:text-muted-foreground hover:underline ${activeLink === item.href ? 'text-blue-500' : ''}`} 
                  prefetch={false} 
                  onClick={() => handleLinkClick(item.href)}>
                  {item.label}
                </Link>
              ))}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Link aria-label="Twitter" href={siteConfig.links.linkedin}>
                  <LinkedinIcon className="hover:text-blue-500" />
                </Link>
                <Link aria-label="Github" href={siteConfig.links.github}>
                  <GithubIcon className="hover:text-blue-500" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
export default Header