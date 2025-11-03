"use client";

import CustomButton from "@/Components/CustomButton";
import SectionHeader from "@/Components/SectionHeader";
import { paddingX } from "@/data/paddingData";
import React from "react";
import { motion, Variants } from "framer-motion";


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

const sections = [
    {
        title: "WHO ARE FRIENDS UNITED?",
        content: [
            "Infuriated Australians who believe that the country has strayed from its golden era, when:",
        ],
        points: [
            "owning your own home was a reality for all,",
            "cost of living was manageable and did not create impoverishment,",
            "enjoying a cigarette or a drink didn’t break the budget,",
            "the streets were safe, and",
            "personal freedoms were so much less restricted.",
        ],
        ending:
            "Friends United are ordinary Australian citizens passionate about restoring Australia to its former glory — being once again the ‘Lucky Country’ and the ‘Envy of the World’.",
    },
    {
        title: "WHAT DOES FRIENDS UNITED WANT TO ACCOMPLISH?",
        content: [
            "To form a political union of over 1 million voters that emphasises ‘Strength in Numbers’ — a mass movement that speaks with ‘One Super Powerful Voice’ to ‘Pressure Political Leaders’ to act on major key issues like:",
        ],
        points: [
            "Cost of Living,",
            "Housing Affordability,",
            "Cost of Electricity,",
            "Cigarette and Alcohol Taxes,",
            "Illicit Drugs,",
            "Immigration, and",
            "Government Accountability.",
        ],
    },
    {
        title: "WHAT HAPPENS IF POLITICIANS DON’T LISTEN?",
        content: [
            "Friends United will mobilise its members to remove the useless politicians from office and replace them with competent, enthusiastic leaders come the next election.",
        ],
    },
    {
        title: "WHY FORM THIS UNION?",
        content: [
            "Australian voters have lost faith in our political leadership:",
        ],
        points: [
            "The 2025 Federal Election cited an increase in ‘donkey and informal’ votes,",
            "Approximately 1 million votes were deemed informal — marking a missed opportunity for change,",
            "Our political leadership is not listening to the needs of the electorate, enforcing their own agendas upon the Australian people.",
        ],
        ending: "However, a united front cannot be ignored.",
    },
    {
        title: "WHY JOIN FRIENDS UNITED AND BECOME A VOICE?",
        content: [
            "For Australia to become the ‘lucky country’ once again, we require leadership that:",
        ],
        points: [
            "Prioritises Australia and its citizens at the forefront, and",
            "Ensures voters identify politicians who have those qualities.",
        ],
        subTitle: "Friends United team will:",
        subPoints: [
            "Separate political parties and their members like ‘Wheat from the Chaff’.",
            "Make known our demands to all registered political parties and their members.",
            "Evaluate their responses, views and stance on all the issues raised.",
            "Evaluate their actions, and",
            "Provide regular updates to all Friends United members.",
        ],
    },
    {
        title: "FRIENDS UNITED strength lies in the numbers",
        content: [
            "As our members grow, so does our collective voice and influence.",
        ],
    },
];

const Page = () => {
    return (
        <div className={`${paddingX} bg-gradient-to-b from-white via-[#fff9f3] to-white py-16 mb-8`}>
            {/* Header */}
            <div className="text-center flex items-center justify-center">
                <SectionHeader subtitle="Explore FAQs" title="Our Story" align="center" />
            </div>

            {/* Sections */}
            <div
                className="space-y-12 mt-8 text-[#222]">
                {sections.map((section, index) => {
                    const direction = index % 2 === 0 ? "left" : "right";

                    return (
                        <div
                            key={index}
                            className={`relative group p-6 md:p-10 rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] overflow-hidden bg-white backdrop-blur-md ${index % 2 === 0
                                ? "border-l-4 border-[#ca7b28]"
                                : "border-r-4 border-[#ca7b28]"
                                }`}
                        >
                            {/* Accent Gradient */}
                            <div
                                className={`absolute inset-0 opacity-100 transition-opacity duration-500 rounded-2xl ${index % 2 === 0
                                    ? "left-0 bg-gradient-to-r from-[#ca7b28]/30 to-transparent"
                                    : "right-0 bg-gradient-to-r from-transparent to-[#ca7b28]/30"
                                    }`}
                            ></div>

                            {/* Title */}
                            <motion.h2
                                custom={{ direction, delay: 0 }}
                                variants={textVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className={`relative z-10 md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-5 text-[#ca7b28] ${index % 2 === 0 ? "text-left" : "text-right"
                                    }`}
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
                                    className={`relative z-10 mb-3 text-[13px] md:text-[15px] lg:text-[17px] font-lato leading-relaxed ${index % 2 === 0 ? "text-left" : "text-right"
                                        }`}
                                >
                                    {para}
                                </motion.p>
                            ))}

                            {/* Points */}
                            {section.points && (
                                <motion.ul
                                    custom={{ direction, delay: 2 }}
                                    variants={textVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className={`relative z-10 font-manrope text-gray-700 space-y-1 text-sm md:text-base ${index % 2 === 0
                                        ? "pl-5 text-left list-disc"
                                        : "pr-5 text-right list-inside md:list-outside list-none"
                                        }`}
                                >
                                    {section.points.map((point, i) => (
                                        <li key={i}>{point}</li>
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
                                    className={`relative z-10 mt-4 mb-3 font-manrope font-semibold lg:text-base md:text-sm text-xs ${index % 2 === 0 ? "text-left" : "text-right"
                                        }`}
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
                                    className={`relative z-10 list-disc font-manrope text-gray-700 space-y-1 lg:text-base md:text-sm text-xs ${index % 2 === 0
                                        ? "pl-5 text-left"
                                        : "pr-5 text-right list-inside md:list-outside"
                                        }`}
                                >
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
                                    className={`relative z-10 mt-3 font-lato lg:text-base md:text-sm text-xs ${index % 2 === 0 ? "text-left" : "text-right"
                                        }`}
                                >
                                    {section.ending}
                                </motion.p>
                            )}
                        </div>
                    );
                })}

                {/* Final CTA */}
                <div className="text-center pt-16 border-t border-gray-200">
                    <h2 className="md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-4 text-[#ca7b28]">
                        Join FRIENDS UNITED
                    </h2>
                    <p className="mb-8 font-manrope font-medium lg:text-base md:text-sm text-xs text-gray-700">
                        Advocate for changes impacting Australia, Australians, our lifestyle, and the future of our nation.
                    </p>

                    <CustomButton
                        btnPadding="less"
                        label="Join Now"
                        buttonType="filled-outlined"
                        href="/join-us"
                    />
                </div>
            </div>
        </div>

    );
};

export default Page;
