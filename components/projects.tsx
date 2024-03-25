"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import clsx from "clsx";

const tags = ["Java", "React", "Flutter"] as const;
type tag = (typeof tags)[number];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);
  const [activeTag, setActiveTag] = useState<tag | null>(null);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-16">
      <SectionHeading>My projects</SectionHeading>
      <div>
        <ul className="flex justify-center mt-4 my-4 gap-2 sm:mt-auto">
          {tags.map((t: tag, index) => (
            <li
              key={index}
              className={clsx(
                "bg-white/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black/[70] rounded-full dark:bg-white/10 dark:text-white/70 cursor-pointer ",
                {
                  "text-white/70 bg-slate-500 dark:text-gray-950 dark:bg-white/70":
                    activeTag === t,
                }
              )}
              onClick={() => {
                activeTag === t ? setActiveTag(null) : setActiveTag(t);
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {projectsData
          .filter((project) =>
            activeTag
              ? project.tags.some((tag) => activeTag.includes(tag))
              : true
          )
          .map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}
