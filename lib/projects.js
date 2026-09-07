export const projects = [
  {
    num: "01",
    category: "machine learning",
    title: "Futguessr",
    description:
      "A soccer prediction pipeline built on 13,000+ normalized matches across five major leagues and eight seasons. It combines leakage-resistant feature engineering, chronologically validated probabilistic models, and a 10,000-simulation decision workflow for match and title forecasts.",
    stack: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "PyArrow" },
      { name: "scikit-learn" },
    ],
    image: "/assets/work/futguessr-title-center-small.png",
    github: "https://github.com/seanhuangg/futguessr",
    metrics: [
      { value: "13K+", label: "normalized matches" },
      { value: "5", label: "major leagues" },
      { value: "10K", label: "Monte Carlo simulations" },
    ],
  },
  {
    num: "02",
    category: "frontend",
    title: "SH Landing Page",
    description:
      "SH Landing Page is a customizable and scalable frontend web page dedicated to providing a visually appealing platform to business owners. Its modular and customizable design makes it a perfect fit for companies looking to build their visual brand across the internet.",
    stack: [{ name: "React.js" }],
    image: "/assets/work/sh.png",
    live: "https://shlandingpage.vercel.app/",
    github: "https://github.com/seanhuangg/business-landing-page",
  },
  {
    num: "03",
    category: "fullstack",
    title: "CaseCreations",
    description:
      "CaseCreations is a website where you can create your own custom phone case, customize it, and pay for the order by entering all the necessary details.",
    stack: [
      { name: "Next.js" },
      { name: "Kinde" },
      { name: "Stripe" },
      { name: "Tailwind.css" },
      { name: "Shadcn UI" },
      { name: "Prisma DB" },
    ],
    image: "/assets/work/cc.png",
    live: "https://casecreations.vercel.app/",
    github: "https://github.com/seanhuangg/CaseCreations",
  },
];
