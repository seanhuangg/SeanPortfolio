"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "", id }) {
  const ref=useRef(null);
  useEffect(()=>{
    const element=ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    // Keep content already in view visible, including direct project anchor links.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.dataset.pending="true";
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting) { delete element.dataset.pending; observer.disconnect(); }
    },{threshold:0,rootMargin:"0px 0px -20px 0px"});
    observer.observe(element);
    return ()=>{observer.disconnect(); delete element.dataset.pending;};
  },[]);
  return <section ref={ref} id={id} className={`reveal ${className}`}>{children}</section>;
}
