import Image from "next/image";
export default function Photo() {
  return <div className="portrait-wrap"><div className="portrait"><Image src="/assets/work/portrait.png" priority fill sizes="264px" alt="Sean Huang" /></div></div>;
}
