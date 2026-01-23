"use client";

import { paddingX } from "@/data/paddingData";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface FriendPoint {
    title: string;
    pointsTitle: string;
    points: string[];
}

interface PropTypes {
    friendData: FriendPoint;
}

const fade = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const BecomeFriend = ({ friendData }: PropTypes) => {
    return (
        <section className={`${paddingX} bg-white py-10`}>
            <div className="">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

                    {/* LEFT SIDE – Context */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fade}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-4 md:space-y-5 lg:space-y-7 relative md:sticky md:top-20 -top-5"
                    >
                        {/* <SectionHeader
                            subtitle="Friends United"
                            title="Becoming a Friends United 'Friend'"
                            align="left"
                        /> */}
                        <h1 className="relative z-10 md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-5 text-[#ca7b28] text-left" dangerouslySetInnerHTML={{ __html: friendData.title }} />

                        <div
                            className="md:text-base text-sm lg:text-lg font-manrope text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: friendData.pointsTitle }}
                        />
                        <Link href="/join-us">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                className="
                inline-flex items-center gap-2
                rounded-full bg-[#D1792C] border-2 border-[#D1792C] hover:bg-white hover:text-[#D1792C] 
                px-6 md:px-8 py-2.5 md:py-3 text-white font-medium
                shadow-md hover:shadow-lg ease-in-out duration-300 transition-all cursor-pointer font-lato tracking-wider lg:text-base md:text-sm text-sm"
                            >
                                Become a Friend
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* RIGHT SIDE – Points */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.15 }}
                        className="space-y-6 md:space-y-7 lg:space-y-8 relative md:px-0 px-2"
                    >

                        {friendData.points.map((point, index) => (
                            <motion.div
                                key={index}
                                variants={fade}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                whileHover={{ x: 6 }}
                                className="
                  relative pl-8 md:pl-10 
                  border-l-2 border-[#ca7b28]/50
                "
                            >
                                {/* Step Indicator */}
                                <span
                                    className="
                    absolute -left-2.5 md:-left-3 top-[40%]
                    md:w-6 md:h-6 w-5 h-5 rounded-full
                    bg-[#ca7b28] text-white
                    text-xs md:text-sm font-semibold
                    flex items-center justify-center
                  "
                                >
                                    {index + 1}
                                </span>

                                {/* Content */}
                                <div
                                    className="
    content-html
    text-gray-700
    leading-relaxed
    space-y-3 bg-[#ca7b28]/10 lg:text-base md:text-sm text-xs font-manrope font-medium tracking-wide p-3 md:p-4 rounded-md shadow-md border border-[#ca7b28]"
                                    dangerouslySetInnerHTML={{ __html: point }}
                                />




                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BecomeFriend;
