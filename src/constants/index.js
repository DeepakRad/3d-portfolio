import {
  backend,
  carrent,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
  yara,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    title: "Full-stack developer & AWS support",
    company_name: "Shopify",
    icon: yara,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Key contributor to the migration of a critical backend service to a new microservice architecture, with seven microservices on AWS EKS, coordinating dependencies across five teams and achieving zero-downtime release.",
      "Optimized OpenSearch queries by using hybrid indexing strategies between ngram and edge_gram, cutting average search latency by 20% and improving query throughput to handle 2× traffic.",
      "Engineered full-stack caching (Redis + React GraphQL) that improved response times by 60% and drove measurable reductions in user drop-offs and latency-related churn.",
      "Implemented CI/CD workflows to automatically pull and push localized translations from Lokalise across multiple micro-frontend applications, each distinguished by namespace.",
      "Led production releases to INT and PROD environments and instituted observability dashboards using Datadog to monitor success metrics in real time.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Yara international",
    icon: yara,
    iconBg: "#E6DEDD",
    date: "August 2022 - August 2024",
    points: [
      "Contributed to the development of a micro-frontend mobile app architecture using React Native, identified issues in the open-source Re.Pack library, and contributed to fixes that improved its stability and usability.",
      "Developed scalable microservices with NestJS, PostgreSQL,GraphQL and improved API reliability significantly.",
      "Integrated analytics & privacy platforms (OneTrust, Segment, CleverTap) successfully, which are operational and used in applications till today",
      "Acted as a dependency librarian, streamlining package management across interdependent projects with Renovate to maintain stability and reduce integration issues.",
      "Redesigned CI/CD pipelines by implementing shared workflows and re-using them across various applications and micro-services, making the codebase cleaned and more understandable.",
      "Developed and maintained comprehensive automated test suites using Jest, React Testing Library, and end-to-end testing frameworks across frontend and backend, ensuring high stability, early bug detection, and production-grade reliability.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Yara international",
    icon: yara,
    iconBg: "#E6DEDD",
    date: "August 2021 - August 2022",
    points: [
      "Built high-performance UI modules for mobile apps in React Native.",
      "Built an A/B testing framework with Clevertap that optimized feature rollout decisions, increasing user engagement and feature adoption by 20%.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Strengthened core expertise in JavaScript, TypeScript, React, React Native, AWS, and modern CI/CD practices.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
