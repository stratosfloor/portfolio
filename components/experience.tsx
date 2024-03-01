"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import ExperienceElement from "./experience-element";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="mb-16 sm:mb-0 scroll-mt-28">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((item, index) => (
          <ExperienceElement key={index} item={item} index={index} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
