"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaBitbucket,
  FaGitAlt,
  FaDatabase,
  FaRobot,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiAtlassian,
  SiC,
  SiGnubash,
  SiGithubcopilot,
  SiSanity,
  SiPostman,
  SiJira,
} from "react-icons/si";
import { VscCopilot, VscOpenai, VscVscode } from "react-icons/vsc";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";

const about = {
  title: "Personal Information",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sean Huang",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 647-631-0882",
    },
    {
      fieldName: "Education",
      fieldValue: "B.Sc. Computer Science, Toronto Metropolitan University",
    },
    {
      fieldName: "Expected graduation",
      fieldValue: "December 2027",
    },
    {
      fieldName: "Email",
      fieldValue: "sean.huang16@hotmail.com",
      href: "mailto:sean.huang16@hotmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/logo.svg",
  title: "Work Experience",
  items: [
    {
      company: "EQ Bank",
      position: "AI Software Developer Intern",
      duration: "May 2026 - Present",
    },
    {
      company: "OTT Financial Group",
      position: "Software Developer Intern",
      duration: "May 2025 - Aug 2025",
    },
    {
      company: "01 Quantum Inc.",
      position: "Web Developer",
      duration: "Jun 2025 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/logo.svg",
  title: "My Education",
  description: "Computer Science studies with a foundation in software engineering and systems.",
  items: [
    {
      institution: "Toronto Metropolitan University",
      degree: "Bachelor of Science in Computer Science",
      duration: "Expected Dec. 2027",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "A focused toolkit for AI automation, cloud-enabled applications, and modern web development.",
  skillList: [
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiReact />,
      name: "React",
    },
    {
      icon: <SiAngular />,
      name: "Angular",
    },
    {
      icon: <Image className="skill-logo" src="/assets/icons/azure.png" alt="" width={21} height={21} />,
      name: "Microsoft Azure",
    },
    {
      icon: <Image className="skill-logo" src="/assets/icons/microsoft-foundry.png" alt="" width={21} height={21} />,
      name: "Azure AI Foundry",
    },
    {
      icon: <VscOpenai />,
      name: "Azure OpenAI",
    },
    {
      icon: <Image className="skill-logo" src="/assets/icons/microsoft-copilot-studio.svg" alt="" width={21} height={21} />,
      name: "Microsoft Copilot Studio",
    },
    {
      icon: <Image className="skill-logo" src="/assets/icons/microsoft-power-automate.svg" alt="" width={21} height={21} />,
      name: "Microsoft Power Automate",
    },
    {
      icon: <Image className="skill-logo" src="/assets/icons/microsoft-power-platform.svg" alt="" width={21} height={21} />,
      name: "Microsoft Power Platform",
    },
    {
      icon: <VscCopilot />,
      name: "Microsoft 365 Copilot",
    },
    {
      icon: <SiGithubcopilot />,
      name: "GitHub Copilot",
    },
    {
      icon: <FaRobot />,
      name: "Agentic AI",
    },
    {
      icon: <SiGnubash />,
      name: "Bash",
    },
    {
      icon: <SiAtlassian />,
      name: "Atlassian",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaBitbucket />,
      name: "Bitbucket",
    },
    {
      icon: <Image className="skill-logo" src="/assets/icons/jenkins.png" alt="" width={21} height={21} />,
      name: "Jenkins",
    },
    {
      icon: <SiJira />,
      name: "Jira",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiSanity />,
      name: "Sanity Studio",
    },
    {
      icon: <VscVscode />,
      name: "Visual Studio Code",
    },
    {
      icon: <Image className="skill-logo" src="/assets/icons/figma.png" alt="" width={21} height={21} />,
      name: "Figma",
    },
  ],
  categories: [
    {
      name: "Cloud & AI",
      skillNames: ["Microsoft Azure", "Azure AI Foundry", "Azure OpenAI", "Microsoft Copilot Studio", "Microsoft Power Automate", "Microsoft Power Platform", "Microsoft 365 Copilot", "GitHub Copilot", "Agentic AI"],
    },
    {
      name: "Programming Languages",
      skillNames: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL", "Bash"],
    },
    {
      name: "Web Technologies",
      skillNames: ["HTML", "CSS", "Next.js", "React", "Angular", "Sanity Studio"],
    },
    {
      name: "Development Tools",
      skillNames: ["Atlassian", "Git", "Bitbucket", "Jenkins", "Jira", "Postman", "Visual Studio Code", "Figma"],
    },
  ],
};

const skillLogoColors = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  Java: "#007396",
  C: "#A8B9CC",
  SQL: "#4479A1",
  HTML: "#E34F26",
  CSS: "#1572B6",
  "Next.js": "#FFFFFF",
  React: "#61DAFB",
  Angular: "#DD0031",
  "Microsoft Azure": "#0078D4",
  "Azure AI Foundry": "#0078D4",
  "Azure OpenAI": "#10A37F",
  "Microsoft Copilot Studio": "#0078D4",
  "Microsoft Power Automate": "#0066FF",
  "Microsoft Power Platform": "#742774",
  "Microsoft 365 Copilot": "#6264A7",
  "GitHub Copilot": "#FFFFFF",
  "Agentic AI": "#8B5CF6",
  Bash: "#4EAA25",
  Atlassian: "#1868DB",
  Git: "#F05032",
  Bitbucket: "#2684FF",
  Jenkins: "#D24939",
  Jira: "#2684FF",
  Postman: "#FF6C37",
  "Sanity Studio": "#F03E2F",
  "Visual Studio Code": "#007ACC",
  Figma: "#F24E1E",
};


const details = {
  "EQ Bank": "Automated internal business processes with Microsoft Power Automate, reducing manual effort by 30%. Built internal AI agents and automated evaluation workflows.",
  "OTT Financial Group": "Developed Angular features for fintech operations and merchant management. Integrated RESTful APIs and contributed to automated testing.",
  "01 Quantum Inc.": "Built reusable Next.js components from Figma designs. Automated Sanity CMS publishing with a webhook-driven build pipeline.",
};

const resumeTabs = ["experience", "education", "skills", "about"];
const resumeTabStorageKey = "sean-portfolio:resume-active-tab";

export default function Resume() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === "undefined") return "experience";
    const savedTab = window.localStorage.getItem(resumeTabStorageKey);
    return resumeTabs.includes(savedTab) ? savedTab : "experience";
  });

  const handleTabChange = (value) => {
    setActiveTab(value);
    window.localStorage.setItem(resumeTabStorageKey, value);
  };

  return <div className="container page resume-page">
    <div className="page-heading"><h1>Resume<span className="text-accent">.</span></h1><a href="/assets/resume/Sean_Huang_Resume.pdf" target="_blank" rel="noreferrer" className="button">Download My Resume <Download size={16}/></a></div>
    <Tabs value={activeTab} onValueChange={handleTabChange} className="resume-tabs">
      <TabsList className="resume-tablist" aria-label="Resume sections">
        <TabsTrigger className="resume-tab" value="experience">Experience</TabsTrigger>
        <TabsTrigger className="resume-tab" value="education">Education</TabsTrigger>
        <TabsTrigger className="resume-tab" value="skills">Skills</TabsTrigger>
        <TabsTrigger className="resume-tab" value="about">About me</TabsTrigger>
      </TabsList>
      <div>
        <TabsContent value="experience" className="resume-content">
          <h2 className="resume-section-heading">{experience.title}</h2>
          {experience.items.map(item=><article key={item.company} className="experience-item"><div className="experience-meta"><p>{item.company}</p><span>{item.duration}</span></div><h3>{item.position}</h3><p className="experience-detail">{details[item.company]}</p></article>)}
        </TabsContent>
        <TabsContent value="education" className="resume-content"><h2 className="resume-section-heading">{education.title}</h2><p className="section-description">{education.description}</p>
          {education.items.map(item=><article className="experience-item" key={item.institution}><div className="experience-meta"><p>{item.institution}</p><span>{item.duration}</span></div><h3>{item.degree}</h3></article>)}
        </TabsContent>
        <TabsContent value="skills" className="resume-content"><h2 className="resume-section-heading">{skills.title}</h2><p className="section-description">{skills.description}</p>
          <div className="skill-categories">{skills.categories.map(category=><section className="skill-category" key={category.name}><h3>{category.name}</h3><ul className="skill-grid">{category.skillNames.map(name=>{const skill=skills.skillList.find(item=>item.name===name); return <li className="skill-item" style={{"--skill-color":skillLogoColors[skill.name]}} key={skill.name}><span aria-hidden="true">{skill.icon}</span><span>{skill.name}</span></li>;})}</ul></section>)}</div>
        </TabsContent>
        <TabsContent value="about" className="resume-content"><h2 className="resume-section-heading">{about.title}</h2>{about.description&&<p className="section-description">{about.description}</p>}
          <dl className="about-list mt-7">{about.info.map(item=><div key={item.fieldName}><dt>{item.fieldName}</dt><dd>{item.href ? <a href={item.href}>{item.fieldValue}</a> : item.fieldValue}</dd></div>)}</dl>
        </TabsContent>
      </div>
    </Tabs>
  </div>;
}
