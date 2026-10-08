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
    iconBg: "#E6DEDD",
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
    description:
      "Full-stack task and team management app with role-based administration, team assignments, task search and filters, dashboard charts, and light/dark themes.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "FastAPI", "PostgreSQL"],
    image: taskInventoryPreview,
    source_code_link: "https://github.com/GowharYousuf/task-inventory",
    live_demo_link: "https://task-inventory-theta.vercel.app/",
  },
  {
    name: "Subscribly",
    description:
      "Cross-platform subscription management app with Expo Router navigation, reusable mobile UI, protected routes, and persistent Clerk authentication.",
    tags: ["React Native", "Expo", "Clerk", "NativeWind"],
    image: subscriblyPreview,
    source_code_link: "https://github.com/GowharYousuf/Subscribly",
  },
  {
    name: "Cric Face Merchandise",
    description:
      "Responsive cricket merchandise storefront with product listings, cart and checkout workflows, API-powered product data, and optimized Redux state updates.",
    tags: ["React", "Redux Toolkit", "REST APIs"],
    image: cricFacePreview,
    source_code_link: "https://github.com/GowharYousuf/CricFace",
  },
];
