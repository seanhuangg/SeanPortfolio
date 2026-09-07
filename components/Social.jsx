import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Social() {
  return <div className="social-links"><a className="linkedin-link" href="https://www.linkedin.com/in/sean-huang-1b20bb308" target="_blank" rel="noreferrer" aria-label="Sean Huang on LinkedIn"><FaLinkedin size={19}/></a><a className="github-link" href="https://github.com/seanhuangg" target="_blank" rel="noreferrer" aria-label="Sean Huang on GitHub"><FaGithub size={19}/></a></div>;
}
