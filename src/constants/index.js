import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer & Front End Developer",
    company_name: "MN Service Providers",
    icon: starbucks, // Replace with an appropriate icon
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Engineered interactive components using advanced state management techniques, reducing page load times by 35% and enhancing user satisfaction by 25%.",
      "Delivered optimized, responsive, and high-performance software solutions within strict deadlines, achieving a 30% increase in client satisfaction ratings.",
      "Developed a comprehensive management platform with RESTful APIs and token-based authentication, ensuring robust security and reducing data breaches by 40%.",
      "Led cross-functional teams, mentoring junior developers and driving a 50% increase in positive feedback while reducing technical errors by 20%.",
      "Utilized Git and GitHub to efficiently manage codebase, improving team productivity by 25%.",
    ],
  },
  {
    title: "Web Developer and Designer",
    company_name: "IIFA Multimedia",
    icon: tesla, // Replace with an appropriate icon
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Oct 2023",
    points: [
      "Developed adaptive web pages using HTML, CSS, JavaScript, and Bootstrap, achieving a 30% increase in cross-device compatibility and responsiveness.",
      "Implemented front-end and back-end integration points focusing on security, efficiency, and usability, resulting in a 25% improvement in data flow speed through AJAX.",
      "Applied best practices using Lighthouse and PageSpeed Insights, improving site performance by 40%.",
    ],
  },
  {
    title: "Programmer (Apprenticeship)",
    company_name: "Advantech Computer Applications",
    icon: shopify, // Replace with an appropriate icon
    iconBg: "#383E56",
    date: "Mar 2021 - Jul 2021",
    points: [
      "Facilitated team knowledge sharing initiatives by conducting workshops, resulting in a 25% increase in overall efficiency across the team.",
      "Drove the adoption of modern development tools, reducing time required for new feature implementation by 20%.",
      "Engaged in customer feedback sessions to implement key UI/UX improvements, leading to a 15% decrease in support inquiries.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Education Website",
    description:
      "Developed a comprehensive educational website utilizing HTML5, CSS3, JavaScript, and Bootstrap, focusing on creating an intuitive and engaging user experience.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with an appropriate image
    source_code_link: "https://eduactionportfoliobygowharyousuf.netlify.app",
  },
  {
    name: "Cric Face Merchandise Application",
    description:
      "Architected a robust e-commerce application for cricket merchandise using React.js, Redux, Tailwind CSS, and React Router, demonstrating advanced front-end engineering skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: jobit, // Replace with an appropriate image
    source_code_link: "https://cricface.netlify.app",
  },
  {
    name: "Personal Portfolio Website",
    description:
      "Built a responsive, modern portfolio website using React, JavaScript, and Bootstrap, showcasing professional web development skills and technical versatility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide, // Replace with an appropriate image
    source_code_link: "https://gowharyousufpersonalportfolio.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
