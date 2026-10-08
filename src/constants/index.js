import taskInventoryPreview from "../assets/projects/task-inventory.svg";
import subscriblyPreview from "../assets/projects/subscribly.svg";
import cricFacePreview from "../assets/projects/cric-face.svg";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "work", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Expo", "Redux Toolkit", "Zustand", "Context API", "Tailwind CSS", "Material UI", "Kendo UI", "Storybook"],
  },
  {
    title: "Backend & data",
    skills: ["FastAPI", "Express.js", "REST APIs", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "JWT"],
  },
  {
    title: "Testing & tools",
    skills: ["Jest", "React Testing Library", "Git", "GitHub", "Postman", "Docker", "Vite", "Webpack", "CI/CD", "Firebase", "Clerk"],
  },
  {
    title: "Practices",
    skills: ["Responsive design", "Accessibility (WCAG)", "SSR", "Code splitting", "Lazy loading", "SEO", "Core Web Vitals", "Cross-browser testing", "Agile"],
  },
];

export const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Mimsys Technologies",
    companyMark: "M",
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Built 50+ reusable React, Next.js, and TypeScript components, data grids, and dashboards across 3+ healthcare and ERP modules, reducing UI development time by 40%.",
      "Integrated REST APIs and .NET services with JWT authentication and role-based access control for secure clinical workflows.",
      "Implemented Redux Toolkit and Context API state, form validation, and error boundaries, reducing production runtime errors by 30%.",
      "Improved load times by 20-30% through code splitting, lazy loading, and memoization while targeting Core Web Vitals.",
      "Delivered accessible appointment, medication, and patient-management interfaces, reducing reported UI bugs by 25%.",
    ],
  },
  {
    title: "Software Engineer & Frontend Developer",
    company_name: "MN Service Providers",
    companyMark: "MN",
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2025",
    points: [
      "Delivered 5+ internal and client-facing platforms using React, TypeScript, and Tailwind CSS, cutting delivery time by 20%.",
      "Built reusable UI libraries, API-driven dashboards, and dynamic forms integrated with token-based authentication.",
      "Maintained Git branching, pull requests, and code reviews while collaborating with backend and QA teams in Agile sprints.",
      "Resolved performance bottlenecks, UI regressions, and cross-browser issues, reducing bug turnaround time by 35%.",
    ],
  },
  {
    title: "Web Developer & Designer",
    company_name: "IIFA Multimedia",
    companyMark: "IIFA",
    iconBg: "#383E56",
    date: "Oct 2022 - Oct 2023",
    points: [
      "Designed and developed responsive, mobile-first websites using HTML5, CSS3, JavaScript, Bootstrap, and REST APIs.",
      "Improved page load times by 30-40% and SEO scores through Lighthouse and PageSpeed Insights optimization.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh University",
    date: "Aug 2025 - Aug 2027",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "University of Kashmir",
    date: "Apr 2019 - Dec 2022",
  },
];

export const projects = [
  {
    name: "Task Inventory",
    featured: true,
    description:
      "Full-stack task and team management app with role-based administration, team assignments, task search and filters, dashboard charts, and light/dark themes.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "FastAPI", "PostgreSQL"],
    image: taskInventoryPreview,
    source_code_link: "https://github.com/GowharYousuf/task-inventory",
    live_demo_link: "https://task-inventory-theta.vercel.app/",
  },
  {
    name: "Subscribly",
    featured: true,
    description:
      "Cross-platform subscription management app with Expo Router navigation, reusable mobile UI, protected routes, and persistent Clerk authentication.",
    tags: ["React Native", "Expo", "Clerk", "NativeWind"],
    image: subscriblyPreview,
    source_code_link: "https://github.com/GowharYousuf/Subscribly",
  },
  {
    name: "Cric Face Merchandise",
    featured: true,
    description:
      "Responsive cricket merchandise storefront with product listings, cart and checkout workflows, API-powered product data, and optimized Redux state updates.",
    tags: ["React", "Redux Toolkit", "REST APIs"],
    image: cricFacePreview,
    source_code_link: "https://github.com/GowharYousuf/CricFace",
  },
  {
    name: "Apple Website",
    description: "A polished Apple-inspired product experience with cinematic interactions.",
    category: "Website",
    tags: ["Website", "Animation"],
    live_demo_link: "https://apple-website-yy5f.vercel.app/",
  },
  {
    name: "Admin Folio",
    description: "A modern admin dashboard interface.",
    category: "Dashboard",
    tags: ["Dashboard"],
    image: "https://d33wubrfki0l68.cloudfront.net/6aae95694eab6fedd23bd1b3/screenshot_2026-09-19-14-00-25-0000.webp",
    source_code_link: "https://github.com/GowharYousuf/admin-dashboard",
  },
  {
    name: "Portfolio 3D",
    description: "An immersive three-dimensional developer portfolio.",
    category: "Portfolio",
    tags: ["Portfolio", "Three.js"],
    source_code_link: "https://github.com/GowharYousuf/Portfolio-3D",
  },
  {
    name: "Gowhar 3D",
    description: "An interactive React portfolio with a 3D experience.",
    category: "Portfolio",
    tags: ["Portfolio", "React", "Three.js"],
    image: "https://d33wubrfki0l68.cloudfront.net/6a5a1f9a9a7e1f542e0e9363/screenshot_2026-07-17-12-27-14-0000.webp",
    source_code_link: "https://github.com/GowharYousuf/3d_Portfolio_website_React",
  },
  {
    name: "Alliance Assessment",
    description: "A focused front-end assessment project.",
    category: "Web App",
    tags: ["Web App"],
    source_code_link: "https://github.com/GowharYousuf/Assesment-Alliance",
  },
  {
    name: "Monthly Planner",
    description: "A simple workspace for planning the month.",
    category: "Productivity",
    tags: ["Productivity"],
    image: "https://d33wubrfki0l68.cloudfront.net/692da5bb9a66bbb52fb37691/screenshot_2025-12-01-14-27-23-0000.webp",
    source_code_link: "https://github.com/GowharYousuf/monthly-planner-assesment",
  },
  {
    name: "Chipper Truffle",
    description: "A compact web experiment hosted on Netlify.",
    category: "Experiment",
    tags: ["Experiment"],
    image: "https://d33wubrfki0l68.cloudfront.net/676788b16ec7d821b2806511/screenshot_2024-12-22-03-34-13-0000.webp",
  },
  {
    name: "Assistant Box",
    description: "A helpful assistant interface in a clean web app.",
    category: "Web App",
    tags: ["Web App"],
    image: "https://d33wubrfki0l68.cloudfront.net/67512f026e19bba98f09ca41/screenshot_2024-12-05-04-42-05-0000.webp",
    source_code_link: "https://github.com/GowharYousuf/Assistant-Box",
  },
  {
    name: "Personal Portfolio",
    description: "A personal showcase of work and experience.",
    category: "Portfolio",
    tags: ["Portfolio"],
    image: "https://d33wubrfki0l68.cloudfront.net/67442438c795fbac4b34137f/screenshot_2024-11-25-07-16-09-0000.webp",
  },
  {
    name: "Tangerine Pony",
    description: "A bright, experimental website build.",
    category: "Experiment",
    tags: ["Experiment"],
    image: "https://d33wubrfki0l68.cloudfront.net/6701504119eada13d35f1d64/screenshot_2024-10-05-14-42-14-0000.webp",
  },
  {
    name: "Education Portfolio",
    description: "A portfolio centered on education and learning.",
    category: "Portfolio",
    tags: ["Portfolio"],
    image: "https://d33wubrfki0l68.cloudfront.net/67014eeff9b53319f818d2fc/screenshot_2024-10-05-14-36-37-0000.webp",
  },
  {
    name: "Sura Website Demo",
    description: "A public-facing website demo with updated content.",
    category: "Website",
    tags: ["Website"],
    image: "https://d33wubrfki0l68.cloudfront.net/66239954710073ad14914659/screenshot_2024-04-20-10-31-11-0000.webp",
    source_code_link: "https://github.com/GowharYousuf/sura-wbsite-updated-content",
  },
  {
    name: "Portfolio Website",
    description: "A classic portfolio for projects and skills.",
    category: "Portfolio",
    tags: ["Portfolio"],
    image: "https://d33wubrfki0l68.cloudfront.net/662398e76fb671c2be3c6a18/screenshot_2024-04-20-10-29-18-0000.webp",
    source_code_link: "https://github.com/GowharYousuf/Portfolio-Website",
  },
  {
    name: "Melodic Banoffee",
    description: "An early creative web experiment.",
    category: "Experiment",
    tags: ["Experiment"],
    image: "https://d33wubrfki0l68.cloudfront.net/650ffc48b7080339c9340559/screenshot_2023-09-24-09-07-21-0000.png",
  },
  {
    name: "Login Form",
    description: "A polished login and authentication interface.",
    category: "UI Study",
    tags: ["UI Study"],
    image: "https://d33wubrfki0l68.cloudfront.net/64cdd9fe17e8c40adf48a144/screenshot_2023-08-05-05-12-11-0000.png",
    source_code_link: "https://github.com/GowharYousuf/Login-form",
  },
  {
    name: "Resume Builder",
    description: "A web tool for putting together a resume.",
    category: "Productivity",
    tags: ["Productivity"],
    image: "https://d33wubrfki0l68.cloudfront.net/64cdd97cdad64a0cba2bab4d/screenshot_2023-08-05-05-10-08-0000.png",
    source_code_link: "https://github.com/GowharYousuf/ResumeBuilder-website",
  },
];
