"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-16 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/emil.jpg"
              width="192"
              height="192"
              quality="95"
              alt="Emil Norén portrait"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute text-4xl bottom-0 right-0 text-color fill-blue-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.3,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
          {/* ✌ 🖖 👋 🤘*/}
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, my name is Emil.</span> I am a{" "}
        <span className="font-bold">full-stack developer.</span> My focus is{" "}
        <span className="underline">React (Next.js)</span> and{" "}
        <span className="underline">Java</span>. I also dabble with{" "}
        <span className="italic">mobile app development</span> for both{" "}
        <span className="font-semibold">Android</span> and{" "}
        <span className="font-semibold">iOS </span>
        with <span className="underline">Dart & Flutter.</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition-all "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-focus:translate-x-2 group-focus:opacity-100 group-hover:translate-x-2 group-hover:-rotate-45 group-focus:-rotate-45 group-hover:opacity-100 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105  active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-60 group-focus:translate-y-2 group-focus:opacity-100 group-hover:translate-y-2 group-hover:opacity-100 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/emil-noren/"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none cursor-pointer hover:scale-110 focus:scale-110  scale-105  transition-all borderBlack dark:bg-white/10"
        >
          <BsLinkedin className="group-hover:scale-125  group-focus:scale-125 group-focus:text-black  dark:text-white/60" />
        </a>

        <a
          href="https://github.com/stratosfloor"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer  transition-all borderBlack dark:bg-white/10"
        >
          <FaGithub className="group-hover:scale-125  group-focus:scale-125 group-focus:text-black dark:text-white/60" />
        </a>
      </motion.div>
    </section>
  );
}
