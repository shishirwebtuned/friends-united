"use client";
import { paddingX } from '@/data/paddingData'
import React from 'react'
import { motion } from 'framer-motion'

const HadEnough: React.FC = () => {
    return (

        <section
            className="relative flex items-center justify-center text-center text-white h-[85dvh] bg-cover bg-[red] bg-center overflow-hidden"
            style={{ backgroundImage: "url('images/faq-image.jpg')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className={`relative font-staatliches z-10 py-20 ${paddingX} md:py-24 lg:py-28`}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-[76px] font-normal text-white leading-tight md:leading-[1.1] tracking-[-1px] mb-4">
                    <span>Australians Have Had Enough.</span>
                    <br />

                    "Time for Our Politicians to{" "}
                    <br />
                    <span className="gradient-text-Colorful font-semibold">
                        DELIVER RESULTS
                    </span>{" "}
                    <br />
                    or{" "}
                    <br />
                    <span className="gradient-text-Colorful">
                        GET OUT OF OFFICE
                    </span>{" "}
                    <br />
                    Making Room for Competent Passionate People to lead
                    <span className="gradient-text-Colorful ml-3">
                        Australia"
                    </span>
                </motion.h1>

                {/* <p className="mx-auto text-base md:text-lg font-semibold leading-[170%] text-white max-w-[65%]">
                    We need leadership that prioritizes the people, not just promises.
                </p>

                <div className="flex items-center justify-center gap-5 mt-6">
                    <button className="px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-lg shadow hover:bg-opacity-80 transition">
                        Support the Cause
                    </button>
                    <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition">
                        Learn More
                    </button>
                </div> */}
            </div >
        </section >


    )
}

export default HadEnough
