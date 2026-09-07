import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";
export const metadata={title:"Projects"};

export default function Projects() {
  return <div className="container page">
    <div className="page-heading"><h1>Projects<span className="text-accent">.</span></h1><span className="text-sm text-white">{String(projects.length).padStart(2,"0")} selected projects</span></div>
    {projects.map(project=><Reveal key={project.num} id={`project-${project.num}`} className="project-detail">
      <div><div className="project-number"><span>{project.num}</span>{project.category}</div><h2>{project.title}</h2><p className="project-description">{project.description}</p>
        <ul className="stack-list" aria-label="Technologies">{project.stack.map(item=><li key={item.name}>{item.name}</li>)}</ul>
        <div className="project-links">{project.live&&<a href={project.live} target="_blank" rel="noreferrer" className="text-link">Live Project <ArrowUpRight size={16}/></a>}{project.github&&<a href={project.github} target="_blank" rel="noreferrer" className="text-link">GitHub Repository <FaGithub size={16}/></a>}</div>
      </div>
      <div><div className="project-image"><Image src={project.image} fill priority={project.num==="01"} sizes="(max-width: 600px) 100vw, 50vw" alt={`${project.title} project preview`}/></div>
      {project.metrics&&<><p className="project-visual-caption">Predictive analytics · Football forecasting at scale.</p><div className="project-metrics">{project.metrics.map(metric=><div key={metric.label}><strong>{metric.value}</strong><p>{metric.label}</p></div>)}</div></>}
      </div>
    </Reveal>)}
  </div>;
}
