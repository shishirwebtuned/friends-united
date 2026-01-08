"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/Components/SectionHeader";
import { paddingX } from "@/data/paddingData";
import { FaArrowLeft } from "react-icons/fa";

interface Reference {
    label: string;
    link: string;
}

interface Service {
    title: string;
    description: string;
    details: any;
    image: string | null;
    link: string;
    demands?: string[];
    demandTitle?: string;
    references?: Reference[];
    demandText?: string;
}

interface DemandDetailProps {
    service: Service;
}

const DemandDetail: React.FC<DemandDetailProps> = ({ service }) => {

    if (!service?.title) return null;

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`py-12 ${paddingX}`}
        >
            {/* Top Row: SectionHeader + Demands | Image */}
            <div className="flex flex-col md:flex-row items-start md:items-end md:gap-5 gap-6 mb-12 mt-3 md:mt-5 w-full h-full">
                {/* Left Column */}
                <div className="md:flex-1 w-full flex flex-col gap-2 md:gap-6 px-2 md:px-0">
                    <SectionHeader
                        key={service?.title}
                        subtitle={service?.description}
                        title={service?.title}
                        align="left"
                    />

                    {service.demands && service.demands.length > 0 && (
                        <div className="bg-[#FFF7E6] p-4 md:p-5 lg:p-8 rounded-xl shadow-lg">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-staatliches mb-4 text-[#CA7B28] capitalize tracking-wide border-b-2 border-[#CA7B28]/30 pb-2">
                                Key Demands
                            </h3>

                            <h3 className="text-sm md:text-base lg:text-lg font-manrope mb-1 text-[#CA7B28] tracking-wide pb-1" dangerouslySetInnerHTML={{ __html: service?.demandTitle || "" }} />

                            <ul className="list-disc list-outside ml-3 md:ml-4 space-y-2 text-[#CA7B28] lg:text-base md:text-sm text-xs font-manrope font-medium">
                                {service.demands.map((demand, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{ __html: demand }} />
                                ))}
                            </ul>

                            {service.demandText && (
                                <p className="font-manrope text-xs md:text-sm lg:text-base mt-3 ml-4 md:ml-6 text-gray-700" dangerouslySetInnerHTML={{ __html: service.demandText }} />
                            )}
                        </div>
                    )}
                </div>

                {/* Right Column: Image */}
                <div className="flex-1 relative flex  w-full items-center justify-center h-full">
                    {/* <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#CA7B2877] rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFD96655] rounded-full blur-3xl"></div> */}
                    {service.image && (
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-[95%] sm:w-[90%] md:w-[90%] rounded-xl shadow-2xl object-cover relative z-10"
                        />
                    )}
                </div>
            </div>

            <div className="px-2 md:px-0">

                <div className="subscription-grdient rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] p-6 md:p-8 lg:p-10 text-gray-800 backdrop-blur-sm mb-10">

                    {/* INTRO */}
                    {service.details.intro && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-manrope text-sm md:text-base lg:text-lg leading-relaxed text-gray-900 whitespace-pre-line mb-6 font-medium"
                            dangerouslySetInnerHTML={{
                                __html: service.details.intro || "",
                            }}

                        />
                    )}

                    {/* SECTIONS */}
                    <div className="space-y-6">
                        {service.details.sections.map((section: any, index: number) => {
                            const hasList = Array.isArray(section.list) && section.list.length > 0;

                            return (
                                <motion.div
                                    key={section.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                >
                                    {!hasList && (
                                        <div>
                                            {section.title && (
                                                <h4 className="text-[#CA7B28] font-staatliches text-lg md:text-xl lg:text-2xl capitalize mb-3 tracking-wide">
                                                    {section.title}
                                                </h4>
                                            )}

                                            {section.text && (
                                                <p className="font-manrope text-sm md:text-base lg:text-lg leading-relaxed text-gray-800 font-medium"
                                                    dangerouslySetInnerHTML={{
                                                        __html: section.text || "",
                                                    }}
                                                />
                                            )}
                                        </div>
                                    )}

                                    {hasList && (
                                        <div className="space-y-2 p-3 md:p-4 lg:p-6 bg-white/60 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                            {section.title && (
                                                <h4 className="text-[#CA7B28] font-staatliches text-lg md:text-xl lg:text-2xl capitalize mb-3 tracking-wide border-b-2 border-[#CA7B28]/30 pb-1"
                                                    dangerouslySetInnerHTML={{
                                                        __html: section.title || "",
                                                    }}
                                                />
                                            )}

                                            {section.text && (
                                                <p className="text-xs md:text-sm lg:text-base leading-relaxed text-gray-800 italic" dangerouslySetInnerHTML={{
                                                    __html: section.text || "",
                                                }}
                                                />
                                            )}

                                            <ul className="list-disc lg:ml-6 md:ml-5 ml-4 space-y-1 font-lato md:text-[15px] text-[13px] lg:text-[17px] text-gray-700">
                                                {section.list.map((item: any, i: number) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                </div>




                {service.references && service.references.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-staatliches mb-4 text-[#CA7B28]">
                            References
                        </h3>
                        <ul className="list-disc list-outside ml-4 md:ml-6 space-y-2 font-manrope text-gray-800 lg:text-base md:text-sm text-xs">
                            {service.references.map((ref, idx) => (
                                <li key={idx}>
                                    <a
                                        href={ref.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline hover:text-[#CA7B28] transition-colors"
                                    >
                                        {ref.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Back Button */}
                <div className="flex justify-center mt-8">
                    <Link
                        href="/"
                        className="bg-[#CA7B28] text-white font-manrope px-4 md:px-6 py-2 border-2 border-[#CA7B28] rounded-md shadow hover:bg-transparent hover:text-[#CA7B28] transition-all duration-300 ease-in-out"
                    ><span className="flex flex-row items-center gap-3 lg:text-base md:text-sm text-xs">
                            <FaArrowLeft />
                            <p>
                                Back to Home
                            </p>
                        </span>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

export default DemandDetail;
