

import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sean-huang-1b20bb308" },
    { icon: <FaGithub />, path: "https://github.com/seanhuangg" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social