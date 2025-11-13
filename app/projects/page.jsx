"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "SH Landing Page",
    description:
      "SH Landing Page is a customizable and scalable frontend web page dedicated to providing a visually appealing platform to business owners. Its modular and customizable design makes it a perfect fit for companies looking to build their visual brand across the internet.",
    stack: [{ name: "React.js" }],
    image: "/assets/work/sh.png",
    live: "https://shlandingpage.vercel.app/",
    github: "https://github.com/seanhuangg/business-landing-page",
  },
  {
    num: "02",
    category: "fullstack",
    title: "CaseCreations",
    description:
      "CaseCreations is a website where you can create your own custom phone case, customize it, and pay for the order by entering all the necessary details. This project involves using Next.js as the ",
    stack: [
      { name: "Next.js" },
      { name: "Kinde" },
      { name: "Stripe" },
      { name: "Tailwind.css" },
      { name: "Shadcn UI" },
      { name: "Prisma DB" },
    ],
    image: "/assets/work/cc.png",
    live: "https://casecreations.vercel.app/",
    github: "https://github.com/seanhuangg/CaseCreations",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col gap-[30px] h-[50%]">
              {/* outline number */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent
                            text-outline"
              >
                {project.num}
              </div>

              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                            transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="px-3 py-1 bg-accent/10 rounded-md text-accent text-sm">
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.live} target="_blank"> 
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
                <Link href={project.github} target="_blank">
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
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                            xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-white text-primary text-[22px] w-[44px] h-[44px] flex 
                            justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
