"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",phone:"",service:"",message:""});
  const [status,setStatus]=useState("");
  const [pending,setPending]=useState(false);
  const isEmailValid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isFormComplete=[formData.firstName,formData.message].every(value=>value.trim())&&isEmailValid;
  async function handleSubmit(e) {
    e.preventDefault();
    if(pending) return;
    setPending(true); setStatus("");
    try {
      const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formData)});
      const data=await res.json();
      setStatus(res.ok&&data.success?"Your message has been sent!":"Something went wrong. Please try again later.");
    } catch { setStatus("Something went wrong. Please try again later."); }
    finally { setPending(false); }
  }
  const update=(e)=>setFormData({...formData,[e.target.name]:e.target.value});
  return <div className="container page contact-page">
    <div className="page-heading"><h1>Contact<span className="text-accent">.</span></h1></div>
    <div className="contact-grid">
      <form onSubmit={handleSubmit} className="contact-form" aria-busy={pending}>
        <h2>Let&apos;s work!</h2><p>Please enter your contact information below!</p>
        <div className="form-fields">
          <label className="form-field" htmlFor="firstName"><span>First Name <span className="required-mark" aria-hidden="true">*</span></span><Input id="firstName" name="firstName" autoComplete="given-name" placeholder="First Name" required value={formData.firstName} onChange={update}/></label>
          <label className="form-field" htmlFor="lastName">Last Name<Input id="lastName" name="lastName" autoComplete="family-name" placeholder="Last Name" value={formData.lastName} onChange={update}/></label>
          <label className="form-field" htmlFor="email"><span>Email <span className="required-mark" aria-hidden="true">*</span></span><Input id="email" name="email" autoComplete="email" type="email" placeholder="Email" required value={formData.email} onChange={update}/></label>
          <label className="form-field" htmlFor="phone">Phone Number<Input id="phone" name="phone" autoComplete="tel" type="tel" placeholder="Phone Number" value={formData.phone} onChange={update}/></label>
        </div>
        <label className="form-field message-field" htmlFor="message"><span>Message <span className="required-mark" aria-hidden="true">*</span></span><Textarea id="message" name="message" placeholder="Type your message here..." required value={formData.message} onChange={update}/></label>
        <button type="submit" className="button button-primary" disabled={pending||!isFormComplete}>{pending?"Sending...":"Submit"}<ArrowUpRight size={16}/></button>
        <div role="status" className="form-status">{status}</div>
      </form>
      <ul className="contact-info">
        <li><Phone size={20}/><div><p>Phone</p><a href="tel:+16476310882">647-631-0882</a></div></li>
        <li><Mail size={20}/><div><p>Email</p><a href="mailto:sean.huang16@hotmail.com">sean.huang16@hotmail.com</a></div></li>
        <li><MapPin size={20}/><div><p>Located In</p><span>Toronto, Ontario, Canada</span></div></li>
      </ul>
    </div>
  </div>;
}
