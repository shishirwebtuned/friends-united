"use client";
import { motion } from "framer-motion";


interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  align: "left" | "center";
}

export default function SectionHeader({
  subtitle,
  title,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center"
      : "text-left";

  const underlinePosition =
    align === "center"
      ? "before:left-0"
      : "before:left-0";

  if (!title && !subtitle) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative mb-6 ${alignment}`}>
      {subtitle ? (
        // <h3
        //   className="text-sm md:text-base lg:text-lg font-medium font-staatliches inline-block uppercase text-[#ca7b28] tracking-wider relative pl-5 before:content-[''] before:absolute before:top-1/3 before:left-0 before:w-2 before:h-2 before:bg-[#ca7b28] before:rounded-full"
        // >
        //   {subtitle}
        // </h3>
        <div></div>
      ) : (
        <div></div>
      )}


      <h2 className={`relative lg:text-[39px] md:text-3xl text-2xl leading-[120%] md:leading-[135%] md:mt-2 mt-3 font-medium lg:leading-[150%] font-staatliches text-[var(--secondary-color)] mb-3 before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-[105px] before:h-[3px] before:bg-[var(--primary-color)] before:rounded-full ${underlinePosition}`}
      >
        {title}
      </h2>
    </motion.div>
  );
}
