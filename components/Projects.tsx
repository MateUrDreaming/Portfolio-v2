"use client"

import React, {useState} from 'react'
import {projectsList} from '@/data/index'
import CategoryButton from './ui/CategoryButton';
import ProjectCards from './ui/ProjectCards';

const Projects = () => {

    const [projects, setProjects] = useState(projectsList);
    const categories = projectsList.map(project => project.category);
    const uniqueCategories = ['All', ...new Set(categories)];


    const filterProjects = (category: string) => {
        if (category === 'All') {
            setProjects(projectsList);
            return;
        }
        const filteredProjects = projectsList.filter(project => project.category === category);
        setProjects(filteredProjects);
    }

    return (
        <section id='projects'>
           <div className='relative flex items-center justify-center' >
                <div className="container flex-grow px-4 py-5 mx-auto ">
                    <div className="container mx-auto px-4 md:px-6 py-5"> 
                        <h1 className="text-xl text-center font-bold leading-snug tracking-wide text-slate-900 lg:text-3xl dark:text-white">
                            <span className="text-blue-500 pt-10"> Projects </span>
                        </h1>
                        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
                            Here are some of the projects I have worked on, showcasing my skills and experiences.
                        </p>
                        <div className="flex justify-center items-center">
                            <CategoryButton categories={uniqueCategories} onFilterProjects={filterProjects} />
                        </div>
                        <ProjectCards projects={projects} />
                    </div>
                </div>
            </div>     
        </section>
    )
}

export default Projects