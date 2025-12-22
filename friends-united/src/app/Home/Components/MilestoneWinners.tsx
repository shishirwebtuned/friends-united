"use client";
import SectionHeader from "@/Components/SectionHeader";
import React from "react";
import { motion } from "framer-motion";

const milestoneWinners = [
    { id: 1, name: "James Wilson", location: "Melbourne, VIC", image: "/images/winner1.jpg", milestone: "1st Giveaway-20,000 Members" },
    { id: 2, name: "Olivia Martin", location: "Sydney, NSW", image: "/images/winner2.jpg", milestone: "1st Giveaway-20,000 Members" },
    { id: 3, name: "James Wilson", location: "Melbourne, VIC", image: "/images/winner3.jpg", milestone: "2nd Giveaway-40,000 Members" },
];

const MilestoneWinners = () => {
    return (
        <div className="pt-16 pb-10 bg-white px-4 md:px-8 lg:px-16 text-center text-white">
            {/* Header */}
            <div className="mb-12 text-center flex items-center flex-col justify-center">
                <SectionHeader
                    subtitle="Celebrating the lucky members"
                    title="OUR MILESTONE WINNERS"
                    align="center"
                />

                <motion.p
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], }}
                    viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mx-auto font-manrope md:text-sm text-xs lg:text-base font-medium text-gray-800">
                    Meet the lucky members who have won our milestone cash giveaways — a
                    celebration of unity and dedication from the Friends United community.
                </motion.p>
            </div>

            {/* Winners Grid */}
            <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center items-start md:px-4 px-2 lg:px-6">
                {milestoneWinners.map((winner, idx) => (
                    <motion.div
                        key={winner.id || idx}
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-[#ca7b28] backdrop-blur-lg border border-[#ffffff33] border-t-0 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_#CA7B284D] transition-all duration-300 w-full overflow-hidden"
                    >
                        <div className="h-[6px] bg-[#facc15] rounded-2xl" />
                        <div className="lg:px-7 lg:py-12 md:px-6 md:py-8 px-4 py-3">
                            <h3 className="lg:text-2xl md:text-lg text-base font-medium font-staatliches text-white mb-4">
                                {winner.milestone}
                            </h3>
                            <div className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 font-manrope text-xs md:text-sm lg:text-base hover:bg-white/20 transition-all duration-300 shadow-sm">
                                <img
                                    src={winner.image}
                                    alt={winner.name}
                                    className="lg:w-14 lg:h-14 md:w-13 md:h-13 w-12 h-12 rounded-full object-cover border-2 border-[#facc15]"
                                />
                                <div className="flex flex-col text-left">
                                    <span className="font-semibold text-[#facc15] lg:text-lg md:text-base text-sm">
                                        {winner.name}
                                    </span>
                                    <span className="text-gray-100 lg:text-sm md:text-xs text-[10px]">
                                        {winner.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MilestoneWinners;
