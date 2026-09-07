"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const links = [{name:"Home",path:"/"},{name:"Resume",path:"/resume"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}];
export default function Nav() {
  const pathname=usePathname();
  return <nav className="desktop-nav" aria-label="Main navigation">{links.map(link=><Link className="nav-link" key={link.path} href={link.path} aria-current={pathname===link.path?"page":undefined}>{link.name}</Link>)}</nav>;
}
