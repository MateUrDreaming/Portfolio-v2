import { IconType } from "react-icons/lib";
import { 
  RiNextjsFill,
  RiTailwindCssFill,
  RiReactjsFill,
  RiBootstrapFill,

 } from "react-icons/ri";

 import { 
  SiFlask,
  SiJinja,
  SiOpenai,
  SiSqlalchemy 
 } from "react-icons/si";


export const title = {
    header: `Welcome to Parin's professional portfolio.`,
    subHeader: `I'm a aspiring data scientist who is passionate about leveraging data to drive insights, solve complex problems, and create innovative solutions. I am eager to apply my skills in machine learning, statistical analysis, and data visualization to real-world challenges and contribute to projects.`,
  };
  
  
  export const testimonials = [
    { 
      quote: `Thank you so much for all your hardwork and fitting into our team so seamlessly. Truly appreciate everything and wishing you all the best with your studies.`,
      name: `PMV TEAM`,
      date: "25/02/2022",
    }, 
    { 
      quote: `Parin is a valuable team member with excellent organisational and technical skills. He has been a pleasure to work with not only because he is always on time and on task but because of his positive attitude in every situation and overall great work ethic.`,
      name: `Kevin Zeng`,
      date: "19/04/2023",
    }, 
    { 
      quote: `Parin has consistently demonstrated outstanding technical abilities and a strong commitment to teamwork. His proactive approach and attention to detail have made him an invaluable part of our team. He not only meets deadlines but does so with a positive attitude and a high level of professionalism.`,
      name: `Hugo Hine`,
      date: "31/03/2024",
    }, 
  ];
  


  export type Project = {
    image: string;
    category: string;
    title: string;
    description: string;
    demo: string;
    github: string;
    technologies: IconType[];
  };
  
  export const projectsList: Project[] = [
    { 
      image: '',
      category: 'Web Development',
      title: 'Parin\'s Portfolio',
      description: 'A professional portfolio website showcasing my skills, projects, and experiences. The website is built using React, Next.js, and Tailwind CSS using shadcn and aceternity UI.',
      demo: "https://wwww.parinkasabia.com",
      github: "",
      technologies: [RiReactjsFill, RiNextjsFill, RiTailwindCssFill],
    },
    { 
      image: '',
      category: 'Full Stack',
      title: 'Signature Sounds',
      description: 'A simple music library website that allows users to search for songs, view song details, and play songs. The website is built using flask and bootstrap.',
      demo: "",
      github: "",
      technologies: [SiFlask, SiSqlalchemy, RiBootstrapFill, SiJinja],
    },
    { 
      image: '',
      category: 'Web Development',
      title: 'Changing times',
      description: 'A single page website which using Dall E 2 model to generate images based on user input. The website is built using React, Next.js, and Tailwind CSS.',
      demo: "",
      github: "",
      technologies: [SiOpenai, RiReactjsFill, RiNextjsFill, RiTailwindCssFill],
    },
  ];

  interface ITimelineElement {
    id: number;
    title: string;
    location: string;
    description: string;
    startDate: string;
    endDate: string;
    icon: string;
    color: string;
    compentencies: string[];
  }

  const timelineElements: ITimelineElement[] = [
    {
      id: 1,
      title: "Graduated from High School",
      location: "Auckland, New Zealand",
      description: "Achieved NCEA Level 1, 2 and 3 at Orewa College with excellence endorsement. Gained awards for Statistics, Digital Technologies and History. I was also a prefect for Nepia House.",
      compentencies: ["Digital Technologies", "Calculus", "Statisitcs", "Physics", "English", "Business Studies", "History"],
      startDate: "2014",
      endDate: "2020",
      icon: "school",
      color: "blue",
    },
    {
      id: 2,
      title: "Entered University",
      location: "Auckland, New Zealand",
      description: "Enrolled in the Bachelor of Science and Bachelor of Commerce conjoint at the University of Auckland. I am currently majoring in Computer Science and Information Systems.",
      compentencies: ["Programming", "Soft Skills", "Communication", "Team Work", "Problem Solving", "Time Management", "Analytical Skills"],
      startDate: "2014",
      endDate: "PRESENT",
      icon: "school",
      color: "blue",
    },
    {
      id: 3,
      title: "Summer job at Provident Insurance",
      location: "Auckland, New Zealand",
      description: "I worked at Provident Insurance as a administrative assistant. Here I queried and amended policies, processed upcoming renewals and wrote documentation.",
      compentencies: ["Details"],
      startDate: "NOV 2021",
      endDate: "MAR 2022",
      icon: "work",
      color: "blue",
    },
    {
      id: 4,
      title: "Joined WDCC at University of Auckland",
      location: "Auckland, New Zealand",
      description: "I joined the Web Development and Consulting Club at the University of Auckland. Here I have been able to learn more about web development and work on projects.",
      compentencies: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "APIs", "Git", "Vercel"],
      startDate: "2023",
      endDate: "PRESENT",
      icon: "school",
      color: "blue",
    },
    {
      id: 5,
      title: "Cisco Cyber Threat Management Certificate",
      location: "Auckland, New Zealand",
      description: "In 2023, I completed the Cisco Cyber Threat Management Certificate. This certificate has given me a better understanding of cyber security and how to protect against cyber threats.",
      compentencies: ["Cyber Security", "Networking", "Cisco", "Security"],
      startDate: "AUG 2023",
      endDate: "DEC 2023",
      icon: "school",
      color: "blue",
    },
    {
      id: 6,
      title: "Attended Akkidos AI-900 Bootcamp",
      location: "Auckland, New Zealand",
      description: "I attended the Akkidos AI-900 Bootcamp where I learnt about the fundamentals of AI and Machine Learning. I also gained a certification in AI-900.",
      compentencies: ["Azure", "Machine Learning", "AI", "Python"],
      startDate: "JUN 2024",
      endDate: "JUL 2024",
      icon: "school",
      color: "blue",
    },
  ];
  
  export default timelineElements.reverse();