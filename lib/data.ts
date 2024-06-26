import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import youtubeclone from "@/public/youtube-clone.png";
import shoppingcart from "@/public/shoppingcart.png";
import mypage from "@/public/mypage.png";
import place from "@/public/place.png";
import chat from "@/public/chat.png";
import meals from "@/public/meals.png";
import gradproj from "@/public/gradproject.png";
import parking from "@/public/parking.png";
import wordle from "@/public/wordle.png";
import kino from "@/public/kino.png";
import hacker from "@/public/hacker.png";
import workout from "@/public/workout.png";
import pixelart from "@/public/pixelart.png";
import issues from "@/public/issues.png";
import snake from "@/public/snake.png";
import jwt from "@/public/jwt.png";

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
    title: "Cloud development",
    location: "Online",
    description:
      "Online course in cloud development with AWS. IAM, containerization, serverless...",
    icon: React.createElement(LuGraduationCap),
    date: "Ongoing",
  },
  {
    title: "Cross-plattform development with Flutter",
    location: "Online",
    description:
      "14 weeks course in cross-plattform development for mobile devices using Dart & Flutter.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Graduated 2-year vocational education",
    location: "Umeå, SWE",
    description:
      "I graduated vocational education called System developer in Java and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Warehouse worker",
    location: "Umeå SWE",
    description:
      "Handle incoming and outgoing deliveries. Loading and unloading using forklift. ",
    icon: React.createElement(FaReact),
    date: "2017-2023",
  },
  {
    title: "Mathematics",
    location: "Umeå Universitet, Umeå, SWE",
    description: "37,5 hp mathematics courses at Umeå University.",
    icon: React.createElement(CgWorkAlt),
    date: "2014-2015",
  },
] as const;

export const projectsData = [
  {
    title: "Jwt authentication",
    description: "Backend for Jwt security authentication",
    tags: ["Java", "Spring boot", "PostgreSQL", "JSON Web Token", "Docker"],
    imageUrl: jwt,
    link: "https://github.com/stratosfloor/jwt-security",
    demo: "",
  },
  {
    title: "Issue tracker",
    description: "Fullstack application for issue handling",
    tags: [
      "Next.js",
      "React",
      "Prisma",
      "MySQL",
      "Typescript",
      "Tailwindcss",
      "Zod",
      "Docker",
    ],
    imageUrl: issues,
    link: "https://github.com/stratosfloor/issue-tracker",
    demo: "", //TODO:
  },
  {
    title: "Snake game",
    description: "Snakw game built with Java Swing.",
    tags: ["Java", "Swing"],
    imageUrl: snake,
    link: "https://github.com/stratosfloor/snake",
    demo: "",
  },
  {
    title: "Youtube clone frontend",
    description: "Frontend clone of youtube",
    tags: ["React", "Typescript", "Tailwindcss"],
    imageUrl: youtubeclone,
    link: "https://github.com/stratosfloor/youtube-clone",
    demo: "https://youtube-clone-kkyj.vercel.app/",
  },
  {
    title: "Shopping cart example",
    description: "A simple shoppingar cart built with React & TypeScript",
    tags: ["React", "Typescript", "Bootstrap"],
    imageUrl: shoppingcart,
    link: "https://github.com/stratosfloor/shopping-cart",
    demo: "https://shopping-cart-two-ochre.vercel.app",
  },
  {
    title: "Workout app",
    description:
      "Workout app for mobile devices. Create exercieses och workouts, register performance.",
    tags: ["Dart", "Flutter", "Hive"],
    imageUrl: workout,
    link: "https://github.com/stratosfloor/workout-app",
    demo: "",
  },
  {
    title: "Pixelart app",
    description:
      "Create and edit pixelarts. Multiple people can connect and edit pixelart at the same time.",
    tags: ["Dart", "Flutter", "Hive", "Dart_Frog"],
    imageUrl: pixelart,
    link: "https://github.com/stratosfloor/pixel-art",
    demo: "",
  },
  {
    title: "This page",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer motion"],
    imageUrl: mypage,
    link: "https://github.com/stratosfloor/portfolio",
    demo: "",
  },
  {
    title: "Favourite places",
    description:
      "Mobile app for saving pictures and locations of favorite places. Built with Dart and Flutter.",
    tags: ["Dart", "Flutter", "Google Maps", "Riverpod", "SQFLite"],
    imageUrl: place,
    link: "https://github.com/stratosfloor/favorite-places",
    demo: "",
  },
  {
    title: "Flutter chat app",
    description: "Chat app, built with Dart and Flutter using Firebase.",
    tags: ["Dart", "Flutter", "Firebase", "Firestore"],
    imageUrl: chat,
    link: "https://github.com/stratosfloor/chat-app",
    demo: "",
  },
  {
    title: "Meals-app",
    description: "Meals app, built with dart & flutter",
    tags: ["Dart", "Flutter", "Firebase", "Firestore"],
    imageUrl: meals,
    link: "https://github.com/stratosfloor/meals-app",
    demo: "",
  },
  {
    title: "Graduate project - frontend",
    description:
      "Read geodata from backend and visualize on map. Click markers on map to load more information.",
    tags: ["React", "Google Maps", "CSS"],
    imageUrl: gradproj,
    link: "https://github.com/stratosfloor/ex-jobb-frontend",
    demo: "",
  },
  {
    title: "Graduate project - backend",
    description:
      "Read geodata from backend and visualize on map. Click markers on map to load more information.",
    tags: ["Java", "Spring boot", "MySQL", "Hibernate"],
    imageUrl: gradproj,
    link: "https://github.com/stratosfloor/ex-jobb-backend",
    demo: "",
  },
  {
    title: "Parkingapp fullstack",
    description: "Fullstack parking app.",
    tags: ["Java", "Spring boot", "MySQL", "Hibernate", "React", "Docker"],
    imageUrl: parking,
    link: "https://github.com/stratosfloor/bravo-parking",
    demo: "",
  },
  {
    title: "Wordle Clone",
    description: "Backend for a parking app.",
    tags: ["NodeJS", "Express", "MongoDB", "React", "CSS"],
    imageUrl: wordle,
    link: "https://github.com/stratosfloor/worlde-project",
    demo: "",
  },
  {
    title: "Parkingapp backend",
    description: "Backend for a parking app.",
    tags: ["Java", "Spring boot", "MySQL", "Hibernate", "Geolatte"],
    imageUrl: parking,
    link: "https://github.com/stratosfloor/Parkingapp-backend",
    demo: "",
  },
  {
    title: "Next Kino",
    description: "Group project to build a kino website using NextJS",
    tags: ["React", "NextJS", "MongoDB", "Mongoose", "CSS"],
    imageUrl: kino,
    link: "https://github.com/stratosfloor/TB-NextKino",
    demo: "",
  },
  {
    title: "Hacker Escape Room",
    description:
      "Scool assignment to build a website exactly like design from Figma",
    tags: ["HTML", "CSS", "SCSS", "CSS"],
    imageUrl: hacker,
    link: "https://github.com/stratosfloor/Esc-Hacker-Escape-Rooms",
    demo: "",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Docker",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MongoDB",
  "mySQL",
  "PostgreSQL",
  "Java",
  "Spring Framework",
  "Framer Motion",
  "Agile development",
  "Scrum",
  "System design",
  "Object-oriented programming",
  "OOAD",
  "UML",
  "WCAG",
] as const;
