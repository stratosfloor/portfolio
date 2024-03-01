"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 mb-16 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working in warehouse for a couple of years I decided to pursue my
        passion for programming. I enrolled in a 2-year
        <span className="font-bold"> Vocational Education </span> in{" "}
        <span className="font-medium">full-stack development</span> and
        graduated this spring.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React and Next.js with TypeScript, Java, Spring Boot, MySQL.
        </span>{" "}
        I am also familiar with Dart & Flutter. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">junior position</span> as a software
        developer, java developer, web developer or app developer for mobile
        devices. I am intrested in both remote and on-site work. I am currently
        based in Umeå, Sweden.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        watch to many youtube videos about{" "}
        <span className="font-medium">Space and Physics.</span>
      </p>
    </motion.section>
  );
}
