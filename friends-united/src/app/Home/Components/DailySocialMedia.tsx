'use client'

import { motion } from "framer-motion";
import SectionHeader from "@/Components/SectionHeader";
import { client } from "../../../lib/sanity.client";
import { useEffect, useState } from "react";

interface WayCard {
  subHeader: string;
  header: string;
  description: string[];
}

interface WayCardsData {
  oldWay: WayCard;
  newWay: WayCard;
}

export default function DailySocialMedia() {
  const [data, setData] = useState<WayCardsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "wayCards"][0]`;
      const result = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="relative bg-white text-black px-6 md:px-16 py-12 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-10 lg:gap-12 overflow-hidden items-center">
      {/* subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ca7b28]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl z-0" />

      {/* HEADER */}
      <div className="text-center flex items-center justify-center">
        <SectionHeader
          subtitle="Daily Social Media Posts"
          title="FRIENDS UNITED"
          align="center"
        />
      </div>

      <div className="flex -mt-9 w-full mb-2 items-start justify-center text-center">
        <p className="uppercase font-manrope font-semibold text-gray-600 text-lg md:text-xl lg:text-2xl">The New Way to Protest</p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid md:grid-cols-1 w-full max-w-6xl"
      >
        {/* OLD WAY CARD */}
        <div className="relative bg-[#ca7b28]/10 border border-[#ca7b28]/40 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
          {/* <span className="absolute -top-3 left-[46%] bg-[#ca7b28] text-white text-[8px] md:text-[10px] lg:text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
            {data.oldWay.subHeader}
          </span> */}
          <div className="w-full h-auto flex justify-center items-center">
            <h2 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl font-staatliches mb-6 bg-[#ca7b28] text-white w-fit inline-block px-6 md:px-7 lg:px-8 py-2 md:py-3 rounded-full shadow-lg hover:scale-[1.05] transition-all duration-300 bounce-button">
              {data.oldWay.header}
            </h2>
          </div>

          <div className="text-gray-800 text-center leading-relaxed tracking-wide text-sm md:text-base lg:text-lg font-lato space-y-4">
            {data.oldWay.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* NEW WAY CARD */}
        {/* <div className="relative bg-[#ca7b28]/10 border border-[#ca7b28]/40 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <span className="absolute -top-3 left-10 bg-[#ca7b28] text-white text-[8px] md:text-[10px] lg:text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
            {data.newWay.subHeader}
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-staatliches mb-6 text-[#ca7b28]">
            {data.newWay.header}
          </h2>

          <div className="text-gray-800 leading-relaxed text-lg tracking-wide text-sm md:text-base lg:text-lg font-lato space-y-4">
            {data.newWay.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div> */}
      </motion.div>

      {/* POWER OF NUMBERS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full mt-2 md:mt-4 max-w-6xl mx-auto text-center"
      >
        {/* highlight panel */}
        <div className="relative bg-black/90 text-white rounded-[30px] px-4 md:px-7 lg:px-10 py-6 md:py-12 lg:py-16 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ca7b28]/90 to-transparent opacity-60" />

          <p className="relative text-base md:text-lg lg:text-xl mb-6 md:mb-7 lg:mb-8 flex flex-col gap-3 text-white font-arialGreek">
            <span>Join Friends United and become a part of the Super Powerful Voice.</span>
            {/* <span className="font-medium text-white -mt-2">See how the</span> */}
          </p>

          <h2 className="relative space-x-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-staatliches text-white">
            <span className="text-[#ca7b28]">THE</span>
            <span className="text-white">POWER OF NUMBERS</span>
            <span className="text-[#ca7b28]">CAN</span>
            <span className="text-[#ca7b28]">INFLUENCE GOVERNMENT POLICIES AND AGENDAS.</span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
