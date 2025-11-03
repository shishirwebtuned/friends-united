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
    id: number;
    title: string;
    description: string;
    details: any;
    image: string;
    link: string;
    demands?: string[];
    references?: Reference[];
    demandtext?: string;
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

                            <ul className="list-disc list-outside ml-3 md:ml-4 space-y-2 text-gray-700 lg:text-base md:text-sm text-xs font-manrope font-medium">
                                {service.demands.map((demand, idx) => (
                                    <li key={idx}>{demand}</li>
                                ))}
                            </ul>

                            {service.demandtext && (
                                <p className="font-manrope text-xs md:text-sm lg:text-base mt-3 ml-4 md:ml-6 text-gray-700">
                                    {service.demandtext}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Column: Image */}
                <div className="flex-1 relative flex  w-full items-center justify-center h-full">
                    {/* <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#CA7B2877] rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FFD96655] rounded-full blur-3xl"></div> */}
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-[95%] sm:w-[90%] md:w-[90%] rounded-xl shadow-2xl object-cover relative z-10"
                    />
                </div>
            </div>

            <div className="px-2 md:px-0">

                <div className="subscription-grdient rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] p-6 md:p-8 lg:p-10 text-gray-800 backdrop-blur-sm mb-10">
                    {typeof service.details === "string" ? (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-manrope text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line"
                        >
                            {service.details}
                        </motion.p>
                    ) : (
                        <div className="space-y-6">
                            {Object.entries(service.details).map(([key, rawValue], index) => {
                                const value = rawValue as
                                    | string
                                    | { title?: string; list?: string[] }
                                    | Record<string, any>;

                                const MotionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                    >
                                        {children}
                                    </motion.div>
                                );

                                if (typeof value === "string") {
                                    return (
                                        <MotionWrapper key={index}>
                                            <p className="font-manrope font-medium text-sm md:text-base lg:text-lg leading-relaxed text-gray-800">
                                                {value}
                                            </p>
                                        </MotionWrapper>
                                    );
                                }

                                if ("title" in value && "list" in value) {
                                    return (
                                        <MotionWrapper key={index}>
                                            <div className="space-y-2 p-4 md:p-6 bg-white/60 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                                {value.title && (
                                                    <h4 className="text-[#CA7B28] font-staatliches text-lg md:text-xl lg:text-2xl capitalize mb-3 tracking-wide border-b-2 border-[#CA7B28]/30 pb-1">
                                                        {value.title}
                                                    </h4>
                                                )}
                                                {value.list && (
                                                    <ul className="list-disc ml-6 space-y-1 font-lato md:text-[15px] text-[13px] lg:text-[17px] text-gray-700">
                                                        {value.list.map((item: any, i: number) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </MotionWrapper>
                                    );
                                }

                                if (typeof value === "object" && value !== null) {
                                    return (
                                        <MotionWrapper key={index}>
                                            <div className="space-y-4 p-4 md:p-6 bg-white/60 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                                                <h4 className="text-[#CA7B28] font-staatliches text-lg md:text-xl lg:text-2xl capitalize tracking-wide border-b-2 border-[#CA7B28]/30 pb-2">
                                                    {key.replace(/([A-Z])/g, " $1")}
                                                </h4>

                                                <div className="space-y-3 text-gray-700">
                                                    {("note" in value && value.note) && (
                                                        <p className="italic text-sm md:text-base text-gray-800 border-l-2 border-[#CA7B28]/50 pl-3">
                                                            {value.note}
                                                        </p>
                                                    )}
                                                    {("description" in value && value.description) && (
                                                        <p className="md:text-base text-sm lg:text-lg leading-relaxed font-lato italic">
                                                            {value.description}
                                                        </p>
                                                    )}
                                                    {("summary" in value && value.summary) && (
                                                        <p className="font-semibold md:text-base text-sm lg:text-lg text-gray-800 font-manrope">
                                                            {value.summary}
                                                        </p>
                                                    )}
                                                    {("source" in value && value.source) && (
                                                        <p className="text-[13px] md:text-[15px] lg:text-[17px] font-manrope text-gray-700">
                                                            <span className="font-semibold">Source:</span> {value.source}
                                                        </p>
                                                    )}

                                                    {Object.entries(value).map(([listKey, listVal]) => {
                                                        if (Array.isArray(listVal)) {
                                                            return (
                                                                <div key={listKey}>
                                                                    <p className="font-semibold text-[#CA7B28] mb-2 font-manrope md:text-base text-sm lg:text-lg capitalize">
                                                                        {listKey}:
                                                                    </p>
                                                                    <ul className="list-disc ml-5 space-y-2 font-manrope font-medium md:text-sm text-xs lg:text-base">
                                                                        {listVal.map((item: string, i: number) => (
                                                                            <li key={i}>{item}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </div>
                                            </div>
                                        </MotionWrapper>
                                    );
                                }

                                return null;
                            })}
                        </div>
                    )}
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
