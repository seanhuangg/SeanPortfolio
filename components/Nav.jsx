"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && " border-b-2 border-accent"}
                        capitalize font-medium hover:text-portfolio transition-all`}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav