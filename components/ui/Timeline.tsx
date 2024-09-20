import React from 'react'
import timelineElements from '@/data/index'
import Image from 'next/image';


interface TimelineProps {
  defaultColor?: string;
}

const Timeline: React.FC<TimelineProps> = ({defaultColor}) => {
  return (
    <div>
        {timelineElements.map((element) => { 
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const colors = [
                    "bg-red-500",
                    "bg-blue-500",
                    "bg-yellow-500",
                    "bg-purple-500",
                    "bg-orange-500",
                  ];
          
                  const color = defaultColor || `bg-${element.color}-500`;

                return (
                    <div key={element.id} className="flex m-5 relative">
                         
                        <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                            <div className="w-4/5 text-blue-500 font-semibold">{element.date}</div>
                            <div className={`${color} w-1 h-full translate-x-5 translate-y-10 opacity-30`}></div>
                    	    <Image src={`/icons/${element.icon}.svg`} alt={element.icon} width={20} height={20} className={`${color} w-10 p-1 rounded-lg z-20`}/>
                            <div className={`${color} h-1 w-8 translate-y-5 opacity-30`}></div>
                        </div>
                            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-card w-full text-center z-10 sm:w-96 md:w-[32rem]">
                            <div className="text-xl font-medium">{element.title}</div>
                            <div className="mb-6 sm:mb-8 sm:text-xs">
                                {element.location}
                                <span className="sm:hidden">| {element.date}</span>
                            </div>
                            <div className="mb-2 text-left">{element.description}</div>
                            <div className="p-4 mb-2">
                                <Image src="/placeholder.svg" alt="Project" width={400} height={225} className="object-cover w-[100%] h-[100%] aspect-video rounded-md"/>
                            </div>
                            <div className="flex flex-wrap mb-6 justify-center">
                                {element.compentencies.map((tech, index) => {
                                return (
                                    <span
                                    key={index}
                                    className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                                    >
                                    {tech}
                                    </span>
                                );
                                })}
                            </div>
                            

                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Timeline