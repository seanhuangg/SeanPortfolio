"use client"

import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

import { motion } from "framer-motion"

const Home = () => {
  return (
    <section className="h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
        className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Computer Science Student
            </span>

            {/* intro */}
            <h1 className="h1 mb-6">Hi, my name is <br />
              <span className="text-accent">Sean Huang</span>
            </h1>

            {/* description */}
            <p className="max-w-[600px] mb-9 text-white/80">
              I make visually appealing web pages and I am proficient in
              various front-end and back-end languages and technologies. I am currently studying Computer Science
              at Toronto Metropolitan University and currently looking for internship/co-op oppourtnities.
            </p>

            {/* button for socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* download button */}
              <a href="/Sean_Huang_Resume.pdf" download="Sean_Huang_Resume.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:bg-portfolio hover:text-primary">
                  <span>
                    Download My Resume
                  </span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-tertiary rounded-full flex justify-center items-center
                text-tertiary text-base hover:bg-portfolio hover:text-primary hover:transition-all duration-300" />
              </div>
            </div>

          </div>
          {/* photo */}
          <div className="order-1 xl;order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </motion.div>
      <Stats />
    </section>
  )
}

export default Home

