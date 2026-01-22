// "use client";

// import SectionHeader from "@/Components/SectionHeader";
// import { paddingX } from "@/data/paddingData";
// import { motion, Variants } from "framer-motion";
// import Link from "next/dist/client/link";
// import React from "react";

// const textVariants: Variants = {
//     hidden: { opacity: 0, y: 24 },
//     show: (delay: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: delay * 0.08,
//             duration: 0.5,
//             ease: [0.25, 0.1, 0.25, 1],
//         },
//     }),
// };

// const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.6,
//             ease: [0.25, 0.1, 0.25, 1],
//         },
//     },
// };

// interface Section {
//     title: string;
//     content: string[];
//     points?: string[];
//     ending?: string;
//     subTitle?: string;
//     subPoints?: string[];
// }

// interface HomeStorySectionsProps {
//     sections: Section[];
// }

// const HomeStorySections: React.FC<HomeStorySectionsProps> = ({ sections }) => {
//     return (
//         <section
//             className={`${paddingX} py-6 md:py-12 lg:py-16 relative overflow-hidden`}
//         >
//             {/* Background */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#fff7ef] via-[#fff3e6] to-white" />
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ca7b2815,transparent_60%)]" />

//             {/* Content */}
//             <div className="relative z-10">
//                 {/* Header */}
//                 <div className="text-center flex items-center justify-center">
//                     <SectionHeader
//                         subtitle="Explore About Us"
//                         title="Our Story"
//                         align="center"
//                     />
//                 </div>

//                 {/* Timeline */}
//                 <div className="relative mt-4 md:mt-14 lg:mt-16">
//                     {/* Center Line */}
//                     <div className="hidden md:block absolute left-[49.9%] top-0 bottom-0 w-[3px] bg-[#ca7b28]/40" />

//                     {sections.map((section, index) => {
//                         const isLeft = index % 2 === 0;

//                         return (
//                             <motion.div
//                                 key={index}
//                                 variants={cardVariants}
//                                 initial="hidden"
//                                 whileInView="show"
//                                 viewport={{ once: true, amount: 0.2 }}
//                                 className={`relative mb-6 md:mb-10 flex flex-col md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"
//                                     }`}
//                             >
//                                 {/* Dot */}
//                                 <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-7 w-4 h-4 rounded-full bg-[#ca7b28]" />

//                                 {/* Section Content */}
//                                 <div
//                                     className={`w-full md:w-[47%] ${isLeft ? " md:text-left" : ""
//                                         }`}
//                                 >
//                                     {/* Title */}
//                                     <motion.h2
//                                         custom={0}
//                                         variants={textVariants}
//                                         initial="hidden"
//                                         whileInView="show"
//                                         viewport={{ once: true }}
//                                         className="text-xl md:text-2xl lg:text-3xl font-staatliches text-[#ca7b28] mb-1.5 md:mb-3"
//                                     >
//                                         {section.title}
//                                     </motion.h2>

//                                     {/* Content */}
//                                     <div className="space-y-1.5 md:space-y-2">
//                                         {section.content?.map((para, i) => (
//                                             <motion.p
//                                                 key={i}
//                                                 custom={i + 1}
//                                                 variants={textVariants}
//                                                 initial="hidden"
//                                                 whileInView="show"
//                                                 viewport={{ once: true }}
//                                                 className="text-xs md:text-sm lg:text-base font-lato leading-relaxed"
//                                                 dangerouslySetInnerHTML={{ __html: para || "" }}
//                                             />
//                                         ))}
//                                     </div>

//                                     {/* Points as Cards */}
//                                     {section.points && (
//                                         <div className="mt-3 md:mt-4 grid gap-2">
//                                             {section.points.map((point, i) => (
//                                                 <motion.div
//                                                     key={i}
//                                                     custom={section.content.length + i + 1}
//                                                     variants={textVariants}
//                                                     initial="hidden"
//                                                     whileInView="show"
//                                                     viewport={{ once: true }}
//                                                     className="bg-white/80 backdrop-blur rounded-xl border border-[#ca7b28]/20 px-2 md:px-3 py-1.5 md:py-2 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
//                                                 >
//                                                     <div className="flex gap-2 items-center">
//                                                         <span className="text-[#ca7b28] text-lg leading-none">•</span>
//                                                         <span
//                                                             className="text-[11px] md:text-[13px] lg:text-[15px] font-lato leading-relaxed"
//                                                             dangerouslySetInnerHTML={{ __html: point || "" }}
//                                                         />
//                                                     </div>
//                                                 </motion.div>
//                                             ))}
//                                         </div>
//                                     )}

//                                     {/* SubTitle */}
//                                     {section.subTitle && (
//                                         <motion.p
//                                             custom={section.content.length + 20}
//                                             variants={textVariants}
//                                             initial="hidden"
//                                             whileInView="show"
//                                             viewport={{ once: true }}
//                                             className="mt-3 md:mt-4 font-semibold text-[11px] md:text-[13px] lg:text-[15px] font-lato"
//                                         >
//                                             {section.subTitle}
//                                         </motion.p>
//                                     )}

//                                     {/* SubPoints as Cards */}
//                                     {section.subPoints && (
//                                         <div className="mt-3 md:mt-4 grid gap-2 md:gap-3">
//                                             {section.subPoints.map((point, i) => (
//                                                 <motion.div
//                                                     key={i}
//                                                     variants={textVariants}
//                                                     initial="hidden"
//                                                     whileInView="show"
//                                                     viewport={{ once: true }}
//                                                     className="bg-[#fff3e6] rounded-xl px-2 md:px-3 py-1.5 md:py-2 border border-[#ca7b28]/20"
//                                                 >
//                                                     <div className="flex gap-2 items-center">
//                                                         <span className="text-[#ca7b28] text-lg">•</span>
//                                                         <span className="text-[10px] md:text-xs lg:text-sm font-lato leading-relaxed">
//                                                             {point}
//                                                         </span>
//                                                     </div>
//                                                 </motion.div>
//                                             ))}
//                                         </div>
//                                     )}

//                                     {/* Ending */}
//                                     {section.ending && (
//                                         <motion.p
//                                             custom={section.content.length + 30}
//                                             variants={textVariants}
//                                             initial="hidden"
//                                             whileInView="show"
//                                             viewport={{ once: true }}
//                                             className="mt-2 md:mt-3 text-[11px] md:text-[13px] lg:text-[15px] font-lato leading-relaxed"
//                                             dangerouslySetInnerHTML={{ __html: section.ending || "" }}
//                                         />
//                                     )}
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//                 <div className="flex flex-col items-center justify-center">
//                     <h2 className="md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-4 text-[#ca7b28]">
//                         Join FRIENDS UNITED
//                     </h2>
//                     <p className="mb-8 font-manrope font-medium lg:text-base md:text-sm text-xs text-gray-700">
//                         Advocate for changes impacting Australia, Australians, our lifestyle, and the future of our Australia.
//                     </p>
//                     <Link
//                         href="/join-us"
//                         className="inline-block bg-[#ca7b28] text-white font-semibold font-manrope px-8 py-3 rounded-full shadow-lg hover:bg-[#b66d22] hover:scale-105 transition-all duration-300 bounce-button"
//                     >
//                         Join Us Now
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HomeStorySections;

"use client";

import CustomButton from "@/Components/CustomButton";
import SectionHeader from "@/Components/SectionHeader";
import { paddingX } from "@/data/paddingData";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
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
        <div className={`${paddingX} bg-gradient-to-b from-[#ca7b28]/10 to-white py-16 mb-8`}>
            {/* Header */}
            <div className="text-center flex items-center justify-center">
                <SectionHeader subtitle="Explore About Us" title="Our Story" align="center" />
            </div>

            <div
                className="space-y-12 mt-8 text-[#222]">
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
                <div className="text-center pt-16 border-t border-gray-200">
                    <h2 className="md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-4 text-[#ca7b28]">
                        Join FRIENDS UNITED
                    </h2>
                    <p className="mb-8 font-manrope font-medium lg:text-base md:text-sm text-xs text-gray-700">
                        Advocate for changes impacting Australia, Australians, our lifestyle, and the future of our Australia.
                    </p>

                    <Link
                        href="/join-us"
                        className="inline-block bg-[#ca7b28] text-white font-semibold font-manrope px-8 py-3 rounded-full shadow-lg hover:bg-[#b66d22] hover:scale-105 transition-all duration-300 bounce-button"
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </div>);
};

export default OurStorySections;

