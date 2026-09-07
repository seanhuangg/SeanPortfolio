"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "./Nav";
export default function MobileNav() {
  const pathname=usePathname();
  const [open,setOpen]=useState(false);
  return <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger className="p-2 text-accent" aria-label="Open navigation"><Menu size={24}/></SheetTrigger>
    <SheetContent className="bg-black border-[#1C3334] p-7 data-[state=open]:animate-none data-[state=closed]:animate-none">
      <SheetTitle className="sr-only">Navigation</SheetTitle>
      <SheetDescription className="sr-only">Main navigation</SheetDescription>
      <nav className="flex flex-col mt-10" aria-label="Mobile navigation">{links.map(link=><Link key={link.path} href={link.path} onClick={()=>setOpen(false)} aria-current={pathname===link.path?"page":undefined} className={`flex items-center justify-between py-5 border-b border-[#1C3334] ${pathname===link.path?"text-accent":"text-white"}`}>{link.name}<ArrowUpRight size={18}/></Link>)}</nav>
    </SheetContent>
  </Sheet>;
}
