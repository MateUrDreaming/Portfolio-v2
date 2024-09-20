import React from 'react'
import Timeline from './ui/Timeline'


const Experience = () => {
  return (
    <section id='experience'>
        <div className="dark:bg-slate-950 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className='container mx-auto px-4 md:px-6 py-6'>
                <h1 className="text-xl text-center font-bold leading-snug tracking-wide text-slate-900 lg:text-3xl dark:text-white">
                    <div className="text-blue-500"> Experience </div>
                </h1>
                <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
                    Here is some of the education and work experience I have gained over the years. 
                </p>
                <div className="container py-2 flex flex-col justify-center items-center">
                    <Timeline defaultColor="bg-blue-500" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience