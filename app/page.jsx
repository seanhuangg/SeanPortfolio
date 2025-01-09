import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
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
              I make visually appealing web pages and I am proficient in
              various front-end technologies, along with possessing many soft skills that
              enable me to work well in a team setting. I am currently studying Computer Science
              at Toronto Metropolitan University and currently looking for internship/co-op opportunities.
            </p>

            {/* button for socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:bg-portfolio hover:text-primary">
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
      <Stats />
    </section>
  )
}

export default Home

