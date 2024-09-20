import React from 'react'
import Image from 'next/image'
import Link from "next/link"

import { TextGenerateEffect } from './ui/text-generate-effect'
import {title, testimonials} from '@/data'
import { Button } from './ui/Button'
import {LinkedinIcon, GithubIcon} from "@/config/icons";
import { siteConfig } from "@/config/site";
import { InfiniteMovingCards } from './ui/infinite-moving-cards';



const Hero = () => {
  return (
    <section id='home'>
        <div className="dark:bg-slate-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className='container flex-grow px-4 pt-16 mx-auto'>
                <div className="container flex flex-wrap items-center justify-center mx-auto px-4 md:px-6 mb-5 md:flex-row">
                    <div className="mb-5 lg:mb-0 lg:w-1/2">
                        <h2 className='mt-4 text-xl text-blue-500 border border-blue-500 inline-block p-4 rounded-[100%]'>Data Scientist</h2>
                        <TextGenerateEffect words={title.header}/>
                        <p className='max-w-2xl mt-5 mb-0 text-justify lg:text-lg'>{title.subHeader}</p>
                        <div className="flex justify-center mt-10 items-center gap-4">
                            <a download="cv" href="/pdf/parinkasabiacv.pdf">
                                <Button className='bg-blue-500' type='button'>
                                    Download CV
                                </Button>
                            </a>
                            <Link aria-label="Twitter" href={siteConfig.links.linkedin}>
                                <LinkedinIcon className=" hover:text-blue-500 h-10 w-10 cursor-pointer" />
                            </Link>
                            <Link aria-label="Github" href={siteConfig.links.github}>
                                <GithubIcon className=" hover:text-blue-500 h-10 w-10 cursor-pointer" />
                            </Link>
                            <a href="#contact">
                                <Button className='bg-blue-500' type='button'>
                                    Contact Me
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 justify-center lg:w-1/2 relative md:h-[200px] md:w-[200px]">
                        <Image 
                            alt="Hero Image"
                            height={450}
                            src="/images/hero-image.png"
                            width={450}
                            />
                            
                    </div>
                </div>
                <div className='container mx-auto px-4 md:px-6 mb-12'>
                    <h1 className="text-xl font-bold leading-snug tracking-wide text-slate-900 lg:text-2xl dark:text-white">
                        Kind words from 
                        <span className="text-primary"> some testimonials </span>
                    </h1>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden antialiased rounded-md">
                        <InfiniteMovingCards
                            direction="right"
                            items={testimonials}
                            speed="normal"
                        />
                    </div>      
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Hero