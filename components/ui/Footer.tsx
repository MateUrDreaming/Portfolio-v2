"use client"
import Link from "next/link"
import React from 'react'

import { ModeToggle } from '@/components/ui/ThemeToggle';
import {PKLogoV2, LinkedinIcon, GithubIcon} from "@/config/icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button"

const Footer = () => {
  return (
    <section id='footer' className='scroll-mt-16'>
        <div className="dark:bg-slate-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className='container mx-auto px-4 md:px-6 py-6 flex items-center justify-between'> 
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <PKLogoV2 className="h-10 w-10" />
                    <span className="text-lg font-medium">Portfolio</span>
                </Link>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold text-center">© 2024 {" "}
                    <Link href="https://www.parinkasabia.com" className="underline">Parin Kasabia</Link>. <br />All rights reserved.
                    </div>

                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                        <Link aria-label="Twitter" href={siteConfig.links.linkedin}>
                            <LinkedinIcon />
                        </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                        <Link aria-label="Github" href={siteConfig.links.github}>
                            <GithubIcon />
                        </Link>
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
