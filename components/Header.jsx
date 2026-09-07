import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return <header className="site-header"><div className="container header-inner">
    <div className="desktop-nav"><Nav /></div>
    <div className="mobile-nav"><MobileNav /></div>
  </div></header>;
}
