"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+1) 647 631 0882",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "sean.huang16@hotmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Located In",
        description: "Toronto, Ontario, Canada",
    },
]

const Contact = () => {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        const formData = new FormData(event.target); // Collect form data

        try {
            const response = await fetch('https://formspree.io/f/mjkblnwj', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: formData,
            });

            if (response.ok) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email.');
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        {/* form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <h3 className="text-4xl text-accent">Let's work!</h3>
                            <p className="text-white/60">Feel free to contact me and leave a message.</p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="First Name" required />
                                <Input type="text" name="lastname" placeholder="Last Name" required />
                                <Input type="email" name="email" placeholder="Email" required />
                                <Input type="text" name="phone" placeholder="Phone Number" />
                            </div>

                            {/* select */}
                            <Select name="service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Portfolio Development">Portfolio Development</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* text area */}
                            <Textarea className="h-[200px]" name="message" placeholder="Type your message here..." required />

                            {/* submit button */}
                            <Button size="md" className="text-white/80 bg-primary max-w-40" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-white/80 rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
