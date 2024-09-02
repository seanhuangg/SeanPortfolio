"use client"

import { AnimatePresence, delay } from "framer-motion"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";


const PageTransition = ({ children }) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    inital={{ opacity: 1 }}
                    animate={{
                        opacity: 0, transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" },
                    }} className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
            </div>

            {children}
        </AnimatePresence>
    )
}

export default PageTransition