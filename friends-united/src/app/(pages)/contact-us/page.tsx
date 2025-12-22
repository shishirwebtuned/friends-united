"use client";

import React from "react";
import SectionHeader from "@/Components/SectionHeader";
import { paddingX } from "@/data/paddingData";
import { motion } from "framer-motion";

const page = () => {
    return (
        <div className={`${paddingX} py-10 md:py-12 w-full md:gap-4 gap-7 flex md:flex-row flex-col items-center`}>
            {/* Section Header */}
            <div className="w-full md:w-[42%] flex flex-col md:items-start items-center justify-center text-center md:text-start px-2 md:px-0">
                <SectionHeader
                    title="Contact Us"
                    align="center"
                />

                <motion.p initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-staatliches font-medium lg:text-2xl md:text-xl text-lg text-[#ca7b28] md:-mt-1 -mt-1">
                    We’d love to hear from you
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:mt-4 mt-4 md:text-base lg:text-lg text-left text-black space-y-1 md:space-y-1.5 leading-relaxed">
                    <p className="font-lato text-sm md:text-base lg:text-lg">
                        Email:
                        <a
                            href="mailto:support@friendsunited.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 font-manrope font-semibold text-[#ca7b28] hover:underline hover:text-[#b56d21] transition-colors "
                        >
                            support@friendsunited.com
                        </a>
                    </p>

                    <p className="font-lato text-sm md:text-base lg:text-lg">
                        Phone:
                        <a
                            href="tel:+61400123456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 font-manrope font-semibold text-[#ca7b28] hover:underline hover:text-[#b56d21] transition-colors"
                        >
                            +61 400 123 456
                        </a>
                    </p>

                    <p className="font-lato text-sm md:text-base lg:text-lg">
                        Address:
                        <a
                            href="https://www.google.com/maps?q=123+Friends+United+Street,+Sydney,+Australia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 font-manrope font-semibold text-[#ca7b28] hover:underline hover:text-[#b56d21] transition-colors"
                        >
                            123 Friends United Street, Sydney, Australia
                        </a>
                    </p>
                </motion.div>

                <div className="flex pr-0 md:pr-4 py-2 md:py-4 mt-4 rounded-xl h-[310px] md:h-[360px] w-full overflow-hidden">
                    <video
                        src="/videos/contactus.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-cover h-full w-[95%] rounded-xl"
                    />
                    {/* <img src="/images/contactUs3.jpg" alt="friend united" className="object-cover h-full w-full rounded-xl" /> */}
                </div>


            </div>


            {/* Contact Form */}
            <div className="md:w-[58%] w-full contactus-gradient backdrop-blur-lg rounded-2xl py-6 px-5 md:py-8 md:px-8 shadow-lg">
                <form className="md:space-y-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        <div>
                            <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">First Name*</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] focus:ring-0 lg:text-base md:text-sm text-xs bg-white"
                            />
                        </div>
                        <div>
                            <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Last Name*</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] focus:ring-0 lg:text-base md:text-sm text-xs bg-white"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Phone Number*</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] focus:ring-0 bg-white lg:text-base md:text-sm text-xs"
                        />
                    </div>
                    <div>
                        <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Email*</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] bg-white focus:ring-0 lg:text-base md:text-sm text-xs"
                        />
                    </div>

                    <div>
                        <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Message*</label>
                        <textarea
                            placeholder="Your Message"
                            className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] bg-white focus:ring-0 lg:text-base md:text-sm text-xs resize-none h-32"
                        />
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="bg-[#d4861f] hover:bg-[#ca7b28] text-white font-semibold px-4 py-2  md:py-[10px] md:px-5 lg:px-6 shadow-xl lg:py-3 rounded-full lg:text-base md:text-sm text-xs transition-all duration-300 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Optional Contact Info */}

        </div>
    );
};

export default page;

