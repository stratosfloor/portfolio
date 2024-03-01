"use client";
import { motion } from "framer-motion";
import React from "react";

type SectionDividerProps = {
  tailwindCss?: string;
};

export default function SectionDivider({
  tailwindCss = "my-10",
}: SectionDividerProps) {
  return (
    <motion.div
      className={`bg-gray-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20 ${tailwindCss}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    ></motion.div>
  );
}
