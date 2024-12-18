"use client"

import CountUp from "react-countup"

const stats = [
    {
        num: 5,
        text: "Years of Coding Experience",
    },
    {
        num: 5,
        text: "Coding Projects Completed",
    },
    {
        num: 6,
        text: "Known Technologies",
    },
    {
        num: 3,
        text: "Programming Languages",
    },
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 text-green-400 items-center justify-center xl:justify-start" key={index}>
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={1}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}leading-snug text-white`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats