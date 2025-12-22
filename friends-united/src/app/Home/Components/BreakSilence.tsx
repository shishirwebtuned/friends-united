"use client";
import SectionHeader from '@/Components/SectionHeader'
import { demandsData } from '@/data/data'
import { paddingX } from '@/data/paddingData'
import React from 'react';
import { motion } from "framer-motion";

const BreakSilence = () => {
    return (
        <div className={` ${paddingX} py-16`}>
            <div className='text-center flex items-center justify-center'>
                <SectionHeader
                    subtitle="Break the Silence. Demand Change Now."
                    title="DEMANDING OUR GOVERNMENTS TO TAKE IMMEDIATE ACTION THAT:"
                    align="center"
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid mt-8 lg:grid-cols-3 w-full md:grid-cols-2 grid-cols-1 gap-6 justify-center">
                {demandsData.map((demand) => (
                    <div
                        key={demand.id}
                        className="relative bg-[#f5f6f8] backdrop-blur-lg border border-[#ffffff33] rounded-2xl lg:p-7 md:p-6 p-5 hover:-translate-y-1 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:border-[var(--primary-color)]  transition-all duration-300 group"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[#d4861f] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                        <div className="">
                            <div className="flex items-center mb-4 gap-4">
                                <div className="bg-gradient-to-br from-[#ca7b28] to-[#d4861f] w-14 h-14 flex items-center justify-center rounded-xl text-white lg:text-3xl md:text-2xl text-xl shadow-[0_8px_20px_rgba(202,123,40,0.3)] transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-110 group-hover:shadow-[0_12px_30px_rgba(202,123,40,0.4)]">
                                    <demand.icon />
                                </div>
                                <h3 className="lg:text-xl md:text-lg text-base font-medium text-[#1b1b1b] font-staatliches">{demand.title}</h3>
                            </div>
                            <p className="text-[#4e4e4e] leading-relaxed text-xs md:text-sm lg:text-base font-manrope mb-4">{demand.description}</p>
                        </div>

                    </div>
                ))}
            </motion.div>

        </div>
    )
}

export default BreakSilence
