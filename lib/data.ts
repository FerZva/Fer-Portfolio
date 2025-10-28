import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import uruzai from "@/public/EasyBank.jpg";
import rmtdevImg from "@/public/URUZAI.png";
import uruzpos from "@/public/preview.png";
import worldbushidoImg from "@/public/worldbushidofederation.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bentobox",
    location: "Remote",
    description:
      "I primarily work at Bentobox with the design team through tickets to resolve in-production website bugs, enhance appearance, and improve their CRM, which manages their website's backend using tools such as Asana, Jira, and Slack.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Freelance",
    location: "Remote",
    description:
      "I worked as a Full Stack developer freelancer. My stack includes React, Next.js, Angular, TypeScript, Tailwind, NodeJS, MongoDB. Working in platform such as Workana and Upwork.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Software Developer",
    location: "Honduras",
    description:
      "During my time at Flores Group as a Full Stack Developer, I had the opportunity to contribute to a meaningful campaign supporting startups, restaurants, and other businesses. I crafted mobile apps with React Native, Expo, and Firebase.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Software Developer",
    location: "Honduras",
    description:
      "I worked as a software developer for 2 years on Emanú International a Security Company.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Graduated Full Stack Web Developer Carrier",
    location: "Udemy",
    description:
      "I graduated after 1 year of studying. I immediately started to look for a job as a Full Stack Web Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  }
  
  
  
] as const;

export const projectsData = [
  {
    title: "URUZ POS SAAS",
    description:
      "Software As A Service point of sale with human resources integrated system",
    tags: [
      "NextJS",
      "Typescript",
      "PostgreSQL",
      "Stripe",
      "TailwindCSS",
      "ShadCN",
    ],
    imageUrl: uruzpos,
    liveView: "https://uruzpos.vercel.app",
  },
  {
    title: "World Bushido Federation",
    description:
      "A martial artist academy which trust on me to create from scratch their website which include suscriptions and other products. Payments are powered by stripe",
    tags: ["Next.js", "Tailwind", "Typescript", "NodeJS", "Stripe"],
    imageUrl: worldbushidoImg,
    liveView: "https://worldbushidofederation.com",
  },
  {
    title: "URUZ AI",
    description:
      "This is one of my favorite projects because the challenge of integrating artificial intelligence was amazing, and the results are unbelievable.",
    tags: [
      "NextJS",
      "TypeScript",
      "Tailwind",
      "NodeJS",
      "Prisma",
      "Open AI",
      "Stripe",
      "Clerk",
    ],
    imageUrl: rmtdevImg,
    liveView: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Git",
  "SASS",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "MS SQL SERVER",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
