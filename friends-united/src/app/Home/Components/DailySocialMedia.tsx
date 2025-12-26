"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/Components/SectionHeader";

export default function DailySocialMedia() {
    return (
        <section className="relative bg-white text-black px-6 md:px-16 py-16 md:py-20 lg:py-24 flex flex-col gap-10 md:gap-12 lg:gap-16 overflow-hidden">

            {/* subtle background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ca7b28]/10 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl z-0" />

            {/* HEADER */}
            <div className="text-center flex items-center justify-center">
                <SectionHeader
                    subtitle="FRIENDS UNITED"
                    title="THE NEW WAY TO PROTEST"
                    align="center"
                />
            </div>


            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 max-w-6xl mx-auto"
            >
                {/* OLD WAY CARD */}
                <div className="relative bg-gray-50 border border-gray-300 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <span className="absolute -top-3 left-10 bg-gray-200 text-gray-600 text-[8px] md:text-[10px] lg:text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
                        OLD WAY
                    </span>

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-staatliches mb-6 text-gray-400">
                        THE OLD WAY
                    </h2>

                    <p className="text-gray-700 leading-relaxed tracking-wide text-sm md:text-base lg:text-lg font-lato">
                        Forget about marching the streets trying to get our governments to listen to us —
                        <span className="text-gray-500"> that’s old school.</span>
                        <br /><br />
                        Even with a purported{" "}
                        <span className="text-black font-semibold">100,000 people</span>{" "}
                        marching across the Sydney Harbour Bridge and making international news, there was no change.
                    </p>
                </div>

                {/* NEW WAY CARD */}
                <div className="relative bg-[#ca7b28]/10 border border-[#ca7b28]/40 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <span className="absolute -top-3 left-10 bg-[#ca7b28] text-white text-[8px] md:text-[10px] lg:text-xs font-semibold px-4 py-1 rounded-full tracking-widest">
                        NEW WAY
                    </span>

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-staatliches mb-6 text-[#ca7b28]">
                        THE NEW WAY
                    </h2>

                    <p className="text-gray-800 leading-relaxed text-lg tracking-wide text-sm md:text-base lg:text-lg font-lato">
                        What Friends United will achieve will make street marches look insignificant.
                    </p>
                </div>
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
                <div className="relative bg-black/90 text-white rounded-[30px] px-4 nmd:px-7 lg:px-10 py-6 md:py-12 lg:py-16 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ca7b28]/90 to-transparent opacity-60" />

                    <p className="relative text-base md:text-lg lg:text-xl mb-6 md:mb-7 lg:mb-8 flex flex-col gap-3 text-white font-arialGreek">
                        <span>Join Friends United and become a Voice.</span>
                        <span className="font-medium text-white -mt-2">See how the</span>
                    </p>

                    <h2 className="relative space-x-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-staatliches text-white">
                        <span>THE</span>
                        <span className="text-[#ca7b28]">POWER OF NUMBERS</span>
                        <span>CAN</span>
                        <span className="text-[#ca7b28]">INFLUENCE GOVERNMENT POLICIES AND AGENDAS.</span>
                    </h2>
                </div>
            </motion.div>

        </section>

    );
}
