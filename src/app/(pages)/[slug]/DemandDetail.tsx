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
    details: string;
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
            <div className="flex flex-col md:flex-row items-start md:items-end gap-10 mb-12 mt-3 md:mt-5 w-full h-full">
                {/* Left Column */}
                <div className="md:flex-1 w-full flex flex-col gap-4 md:gap-6 px-2 md:px-0">
                    <SectionHeader
                        key={service?.title}
                        subtitle={service?.description}
                        title={service?.title}
                        align="left"
                    />

                    {service.demands && service.demands.length > 0 && (
                        <div className="bg-[#FFF7E6] p-4 md:p-5 lg:p-8 rounded-xl shadow-lg">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-staatliches mb-4 text-[#CA7B28]">
                                Key Demands
                            </h3>

                            <ul className="list-disc list-outside ml-4 md:ml-6 space-y-2 text-gray-800 lg:text-base md:text-sm text-xs font-lato">
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
                {/* Details */}
                <div className="subscription-grdient  rounded-xl shadow-lg p-4 md:p-6 lg:p-8 text-black mb-8">
                    <p className="font-manrope text-sm md:text-base lg:text-lg leading-relaxed whitespace-pre-line">
                        {service.details}
                    </p>
                </div>

                {/* References */}
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
