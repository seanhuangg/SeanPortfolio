"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "front-end",
        title: "SH Landing Page",
        description: "A visually appealing template intended for a company's landing page. Individual client needs may vary.",
        stack: [{ name: "React.js" }, { name: "JavaScript" }, { name: "Tailwind.css" }],
        image: "/assets/work/shlanding.png",
        live: "https://shlandingpage.vercel.app",
        github: "https://github.com/seanhuangg/business-landing-page/",
    },
    {
        num: '02',
        category: 'fullstack',
        title: "CaseCreations",
        description: "A functioning e-commerce platform complete with encrypted user data processing, eye-catching design and user-friendly interface.",
        stack: [{ name: "Next.js" }, { name: "React.js" }, { name: "Tailwind.css" }],
        image: "/assets/work/cc.png",
        live: "https://casecreations.vercel.app/",
        github: "https://github.com/seanhuangg/casecreation",
    },
    {
        num: '03',
        category: 'frontend',
        title: "BettrYou",
        description: "Simple front-end website equipped with 3 quizzes dedicated to helping those in undesirable situations get the help they require.",
        stack: [{ name: "HTML 5" }, { name: "CSS" }],
        image: "/assets/work/by.png",
        live: "https://bettr-you.vercel.app/",
        github: "https://github.com/seanhuangg/BettrYou",
    },
    {
        num: '04',
        category: 'frontend',
        title: "React-to-do",
        description: "Simple to-do list launched on the Chrome Web Store for convenience in monitoring daily tasks.",
        stack: [{ name: "React.js" }],
        image: "/assets/work/rtd.png",
        live: "https://chromewebstore.google.com/detail/react-to-do-manage-your-d/ignhlaopnhfoeibehahcjamalaloolpo",
        github: "https://github.com/seanhuangg/To-do-list",
    },


]

const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex

        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className=" flex flex-col gap-[30px] h-[50%]">
                            {/* outline number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent
                            text-outline">{project.num}</div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                            transition-all duration-500 capitalize">{project.category} project</h2>

                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* Github repo */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12">
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                            </div>

                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt="image" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                            xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-white text-primary text-[22px] w-[44px] h-[44px] flex 
                            justify-center items-center transition-all"/>

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work