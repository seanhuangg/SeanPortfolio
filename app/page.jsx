"use client"

import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Computer Science Student/Intern
            </span>

            {/* intro */}
            <h1 className="h1 mb-6">Hi, my name is <br />
              <span className="text-accent">Sean Huang</span>
            </h1>

            {/* description */}
            <p className="max-w-[600px] mb-9 text-white/80">
              Hello, my name is Sean Huang and I am in my third year of studying Computer Science
              at Toronto Metropolitan University. I make visually appealing and functional frontend web pages,
              in addition to experience in automation testing, fetching backend APIs, and CI/CD. My experiences
              as a Software Developer Intern at OTT Financial and 01 Quantum Inc. equip me with all the necessary
              skills to succeed in future roles.
            </p>

            {/* button for socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:bg-portfolio hover:text-primary"
                onClick={() => window.open("/assets/resume/Sean_Huang_Resume.pdf", "_blank")}>
                <span>
                  Download My Resume
                </span>
                <FiDownload className="text-xl" />
              </Button>

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
      </div>
    </section>
  )
}

export default Home

