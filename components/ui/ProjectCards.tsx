import React from 'react'
import { Project } from '@/data';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"



interface ProjectCardsProps {
  projects: Project[]; 
}

const ProjectCards: React.FC<ProjectCardsProps> = ({projects}) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full mx-auto'>
      { 
        projects.map((project, index) => (
          <div key={index}>
            <Card>
              <CardHeader className="p-4">
                <Image src="/placeholder.svg" alt="Project" width={400} height={225} className="object-cover aspect-video"/>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-xl font-bold">Next.js App</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Created 2 days ago</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Modified 1 day ago</div>
              </CardContent>
            </Card>

          </div>
        ))
      }

      
    </div>

    
  )
}

export default ProjectCards