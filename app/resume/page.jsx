"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaPython } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
  title: 'About me',
  description: 'this is the decription',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sean Huang",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 647-631-0882",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Education",
      fieldValue: "Toronto Metropolitan University",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Chinese Canadian",
    },
    {
      fieldName: "Email",
      fieldValue: "sean.huang16@hotmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Chinese(Mandarin)",
    },
  ]
}

const experience = {
  icon: '/assets/resume/logo.svg',
  title: "My experience",
  description: "No experience yet! Looking for new oppourtunities.",
  items: []
}

const education = {
  icon: '/assets/resume/logo.svg',
  title: "My education",
  description: "description of my experiences in coding...",
  items: [
    {
      institution: "Carleton University",
      degree: "Bachelor's in Computer Science",
      duration: "2022-2023",
    },
    {
      institution: "Toronto Metropolitan University",
      degree: "Computer Science Honors",
      duration: "2023-Present",
    },
  ]
}

const skills = {
  title: "my skills",
  description: "skills description",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaCss3 />,
      name: "Css"
    },
    {
      icon: <FaJava />,
      name: "Java"
    },
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <FaJs />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTypescript />,
      name: "Typescript"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Edcuation</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-ecneter xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center
                      lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center
                        lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>




            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-ecneter xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center
                      lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center
                        lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-autp xl:mx-0">{skills.description}</p>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>


            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pb-8">{about.description}</p>
              </div>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume