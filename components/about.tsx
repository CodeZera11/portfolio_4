"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I'm <span className="font-bold">CodeZera</span> aka <span className="font-bold">Bhavesh Yadav</span>, a passionate, experienced and skilled full-stack web developer with expertise in HTML, CSS, JavaScript, ReactJS,
        Next.js, Node.js, Express, MongoDB, and Git. At 22 years old, I've already gained substantial experience in developing dynamic and user-friendly websites.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">Nestjs</span>. I'm also
        learning how to build CI/CD pipleline.
      </p>
    </motion.section>
  );
}
