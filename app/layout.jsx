import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: { default: "Sean Huang | Software Developer", template: "%s | Sean Huang" },
  description: "Sean Huang is a Computer Science student at Toronto Metropolitan University building AI-enabled automation and dependable web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>Sean Huang <span aria-hidden="true">|</span> Toronto, ON, Canada</span>
            <Link href="mailto:sean.huang16@hotmail.com">Get in touch <ArrowUpRight size={14} /></Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
