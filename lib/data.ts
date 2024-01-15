import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import ecommerce from "@/public/ecommerce.png";
import netinfo from "@/public/netinfo.png";
import ytclone from "@/public/ytclone.png";
import meta from "@/public/meta_front_end_developer.png";
import ibm from "@/public/ibm_backend_developer.png";
import mongodb from "@/public/mongodb.png";
import aiImage from "@/public/ai-image.png";

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
    name: "Certificates",
    hash: "#certificates",
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
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I worked as a front-end developer for 2 months at recipto. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 23 - Oct 23",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "I'm now a full stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Nestjs, Prisma and PostgreSQL. I'm open to part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Nov 23 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Image Generator",
    description:
      "An AI powered image generator which takes text prompts and generates images with the help of AI.",
    tags: ["TS", "Next.js", "Prisma", "Tailwind", "Stripe"],
    imageUrl: aiImage,
    link: "https://ai-image-rose.vercel.app/",
  },
  {
    title: "Ecommerce Store",
    description:
      "eCommerce website project which is a modern and user-friendly platform that allows customers to browse and purchase products of their choice.",
    tags: ["TS", "Next.js", "Prisma", "Tailwind"],
    imageUrl: ecommerce,
    link: "https://ecommerce-project-dj7m.vercel.app/",
  },
  {
    title: "Youtube Clone",
    description:
      "A youtube clone built with React 18, Material UI, and powered by Rapid API!.",
    tags: ["React", "Material UI", "Rapid API"],
    imageUrl: ytclone,
    link: "https://verdant-marshmallow-2ad20e.netlify.app/",
  },
] as const;

export const certificatesData = [
  {
    title: "META | META FRONT-END DEVELOPER",
    description:
      "eCommerce website project which is a modern and user-friendly platform that allows customers to browse and purchase products of their choice.",
    imageUrl: meta,
    link: "https://coursera.org/share/676cd873403cf5995dea600cc4b55ceb",
  },
  {
    title: "IBM | BACKEND DEVELOPER",
    description:
      "A place where you can discover and explore a vast collection of movies and shows available on Netflix!",
    imageUrl: ibm,
    link: "https://www.coursera.org/account/accomplishments/verify/3PVFSKW489HQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
  },
  {
    title: "MongoDB",
    description:
      "A youtube clone built with React 18, Material UI, and powered by Rapid API!.",
    imageUrl: mongodb,
    link: "https://coursera.org/share/12dccdc5b13a2c335d948245915135db",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
