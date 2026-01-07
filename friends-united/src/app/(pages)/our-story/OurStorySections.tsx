"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const textVariants: Variants = {
    hidden: (custom: { direction: "left" | "right"; delay: number }) => ({
        opacity: 0,
        x: custom.direction === "left" ? -80 : 80,
    }),
    show: (custom: { direction: "left" | "right"; delay: number }) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: custom.delay * 0.15,
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
}

interface Section {
    title: string;
    content: string[];
    points?: string[];
    ending?: string;
    subTitle?: string;
    subPoints?: string[];
}

interface OurStorySectionsProps {
    sections: Section[];
}

const OurStorySections: React.FC<OurStorySectionsProps> = ({ sections }) => {
    return (
        <>
            {sections.map((section, index) => {
                // const direction = index % 2 === 0 ? "left" : "right";

                const direction = "left";


                return (
                    <div
                        key={index}
                        className={`relative group p-6 md:p-10 rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] overflow-hidden bg-white backdrop-blur-md border-l-4 border-[#ca7b28] `}
                    // ${index % 2 === 0
                    //     ? "border-l-4 border-[#ca7b28]"
                    //     : "border-r-4 border-[#ca7b28]"
                    //     }
                    >
                        {/* Accent Gradient */}
                        <div
                            className={`absolute inset-0 opacity-100 transition-opacity duration-500 rounded-2xl left-0 bg-gradient-to-r from-[#ca7b28]/40 to-[#fff6ea]`}

                        // ${index % 2 === 0
                        //     ? "left-0 bg-gradient-to-r from-[#ca7b28]/30 to-transparent"
                        //     : "right-0 bg-gradient-to-r from-transparent to-[#ca7b28]/30"
                        //     }
                        ></div>

                        {/* Title */}
                        <motion.h2
                            custom={{ direction, delay: 0 }}
                            variants={textVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className={`relative z-10 md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-5 text-[#ca7b28] text-left `}
                        // ${index % 2 === 0 ? "text-left" : "text-right"}
                        >
                            {section.title}
                        </motion.h2>

                        {/* Content Paragraphs */}
                        {section.content?.map((para, i) => (
                            <motion.p
                                key={i}
                                custom={{ direction, delay: i + 1 }}
                                variants={textVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative z-10 mb-3 text-[13px] md:text-[15px] lg:text-[17px] font-lato leading-relaxed text-left`}
                                // ${index % 2 === 0 ? "text-left" : "text-right"}
                                dangerouslySetInnerHTML={{
                                    __html: para || "",
                                }}
                            />

                        ))}

                        {/* Points */}
                        {section.points && (
                            <motion.ul
                                custom={{ direction, delay: 2 }}
                                variants={textVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative z-10 space-y-1 pl-5 text-left list-disc mb-3 text-[13px] md:text-[15px] lg:text-[17px] font-lato leading-relaxed`}
                            // ${index % 2 === 0
                            //     ? "pl-5 text-left list-disc"
                            //     : "pr-5 text-right list-inside md:list-outside list-none"
                            //     }
                            >
                                {section.points.map((point, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{
                                        __html: point || "",
                                    }} />
                                ))}
                            </motion.ul>
                        )}

                        {/* SubTitle */}
                        {section.subTitle && (
                            <motion.p
                                custom={{ direction, delay: 3 }}
                                variants={textVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative z-10 mt-4 mb-3 font-semibold text-[13px] md:text-[15px] lg:text-[17px] font-lato leading-relaxed text-left`}
                            // ${index % 2 === 0 ? "text-left" : "text-right"}
                            >
                                {section.subTitle}
                            </motion.p>
                        )}

                        {/* SubPoints */}
                        {section.subPoints && (
                            <motion.ul
                                custom={{ direction, delay: 4 }}
                                variants={textVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative z-10 list-disc space-y-1 pl-5 mb-3 text-[13px] md:text-[15px] lg:text-[17px] font-lato leading-relaxed text-left`}
                            >
                                {/* ${index % 2 === 0
                                    ? "pl-5 text-left"
                                    : "pr-5 text-right list-inside md:list-outside"
                                    } */}

                                {section.subPoints.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </motion.ul>
                        )}

                        {/* Ending */}
                        {section.ending && (
                            <motion.p
                                custom={{ direction, delay: 5 }}
                                variants={textVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative z-10 mt-3 text-[13px] md:text-[15px] lg:text-[17px] font-lato leading-relaxed text-left`}
                                // ${index % 2 === 0 ? "text-left" : "text-right"
                                //     }
                                dangerouslySetInnerHTML={{
                                    __html: section.ending || "",
                                }}
                            />
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default OurStorySections;
