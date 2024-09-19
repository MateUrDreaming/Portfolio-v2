import React from 'react'
import { Project } from '@/data';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter, 
} from "@/components/ui/card";


interface ProjectCardsProps {
  projects: Project[]; 
}

const ProjectCards: React.FC<ProjectCardsProps> = ({projects}) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full mx-auto'>
      { 
        projects.map((project, index) => (
          <div key={index} className="flex flex-col h-full">
            <Card className="flex flex-col h-full">
              <CardHeader className="p-4">
                  {/*<Image src={project.image} alt={project.title} width={400} height={225} className="object-cover w-[100%] h-[100%] aspect-video"/>8?*/}
                  <Image src="/placeholder.svg" alt="Project" width={400} height={225} className="object-cover w-[100%] h-[100%] aspect-video rounded-md"/>
                </CardHeader>
                <CardContent className="p-4 items-start">
                  <div className="text-xl font-bold">{project.title}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{project.description}</div>
                  <div className="flex space-x-5 my-2">
                    {project.technologies.map((Icon, idx) => (
                      <Icon key={idx} className="text-2xl text-blue-500" />
                    ))}
                  </div>
                  
                </CardContent>
                <CardFooter className="p-4 place-items-end h-full relative">
                  <div className="text-sm text-gray-500 dark:text-gray-400 bottom-3 absolute">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
                  </div>
                </CardFooter>
            </Card>

          </div>
        ))
      }

      
    </div>

    
  )
}

export default ProjectCards