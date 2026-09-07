import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { ArrowUpRight, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

// Highlights supplied by Sean for the homepage.
const stats = [
  {value:"30%+",label:"Process Efficiency Improved"},
  {value:"5+",label:"AI Agents Built"},
  {value:"5+",label:"Automated AI Evaluations"},
  {value:"10+",label:"Workflows Automated"},
  {value:"6+",label:"AI Platforms & Technologies"},
];
export default function Home() {
  return <div className="container">
    <section className="home-intro" aria-labelledby="intro-title">
      <div><h1 id="intro-title">Sean Huang</h1>
        <p className="identity-line"><span className="identity-role"><span className="square-dot" aria-hidden="true"/>AI @ EQ Bank</span><span className="identity-role"><span className="square-dot" aria-hidden="true"/>Software @ 01 Quantum</span><span className="identity-role"><span className="square-dot" aria-hidden="true"/>Prev. Software @ OTT Financial Group</span></p>
        <p className="intro-copy">I&apos;m a Computer Science student at Toronto Metropolitan University building AI-enabled automation and dependable web applications. My work spans Microsoft Azure, Power Platform, Copilot Studio, Angular, Next.js, RESTful APIs, and automated testing.</p>
        <div className="action-row"><a href="/assets/resume/Sean_Huang_Resume.pdf" target="_blank" rel="noreferrer" className="button button-primary">Download My Resume <Download size={16}/></a><Social/></div>
      </div><Photo/>
    </section>
    <section className="stats" aria-label="Professional highlights">{stats.map(stat=><div className="stat" key={stat.label}><strong>{stat.value}</strong><p>{stat.label}</p></div>)}</section>
    <section className="selected-work" aria-labelledby="selected-title">
      <div className="section-heading"><h2 id="selected-title">Selected work</h2><Link className="text-link" href="/projects">Explore projects <ArrowRight size={16}/></Link></div>
      <div className="project-previews">{projects.map(project=><Link href={`/projects#project-${project.num}`} className="preview-card" key={project.num}><div className="preview-image"><Image src={project.image} fill sizes="(max-width: 600px) 100vw, 33vw" alt={`${project.title} project preview`}/></div><div className="preview-heading"><h3>{project.title}</h3><ArrowUpRight size={18}/></div><p>{project.category}</p></Link>)}</div>
    </section>
  </div>;
}
