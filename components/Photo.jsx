"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/* Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.2, ease: "easeInOut" } }}
                className="flex justify-center items-center"
            >
                <div className="relative w-[198px] h-[198px] xl:w-[398px] xl:h-[398px] mix-blend-lighten">
                    <Image
                        src="/assets/work/portrait.png"
                        priority
                        quality={100}
                        fill
                        alt="photo"
                        className="object-contain"
                    />
                </div>

            </motion.div>
        </div>
    )
}

export default Photo
