"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "@/Components/CustomButton";
import { paddingX } from "@/data/paddingData";
import SectionHeader from "@/Components/SectionHeader";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
    return (
        <section className={` ${paddingX} py-20 md:py-[5.5rem]`}>
            <div className="">
                <div className="flex flex-col lg:flex-row lg:gap-8">
                    {/* Text Column */}
                    <div className="lg:w-1/2 flex flex-col">
                        <SectionHeader
                            subtitle="Raising a Fierce Force of Change-Makers"
                            title="United Voices, Unstoppable Revolution"
                            align="left"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-sm md:text-[15px] lg:text-base font-manrope leading-relaxed mb-8 text-[#4e4e4e]">
                            Friends United turns everyday Australians’ frustrations into a
                            thunderous force that demands politicians stop ignoring us. Together,
                            we battle for affordable living, the right to own a home, and a future
                            that’s fair and just. When over 100,000 voices roar as one, our leaders
                            will have no choice but to act—or be swept away.
                        </motion.p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                            <motion.div
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="flex gap-3 items-start">
                                <div className="flex-shrink-0">
                                    <img
                                        src="icons/relationship.png"
                                        alt="Stronger Together"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1">Stronger Together</h4>
                                    <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">Collective action to create lasting political impact.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: "easeOut" }} className="flex gap-3 items-start">
                                <div className="flex-shrink-0">
                                    <img
                                        src="icons/voice.png"
                                        alt="Making Voices Heard"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1">Making Voices Heard</h4>
                                    <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">Turning voter concerns into undeniable demands for change.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: "easeOut" }} className="flex gap-3 items-start">
                                <div className="flex-shrink-0">
                                    <img
                                        src="icons/team.png"
                                        alt="Standing Strong"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1">Standing Strong</h4>
                                    <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">Building solidarity to protect our rights and future.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="flex gap-3 items-start">
                                <div className="flex-shrink-0">
                                    <img
                                        src="icons/change.png"
                                        alt="Drive Change Forward"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1">Drive Change Forward</h4>
                                    <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">
                                        Empowering communities to turn ideas into policies that matter.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div>
                            <CustomButton btnPadding="more" label="Explore Our Story" buttonType="filled-outlined" href="/our-story" />

                        </div>
                    </div>

                    <div className="lg:w-1/2 mt-12 lg:mt-0 w-full relative flex justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="relative w-full h-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] md:px-0 px-2">
                            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
                                <img
                                    src="images/united_hands.jpg"
                                    alt="Main"

                                    className="object-cover w-full h-full rounded-xl z-10"
                                />
                            </div>

                            <div className="absolute bottom-4 lg:bottom-8 right-2 md:right-0 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
                                <img
                                    src="images/about-us.jpg"
                                    alt="Overlay"

                                    className="object-cover w-full h-full rounded-xl shadow-lg z-20"
                                />
                            </div>
                        </motion.div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutUs;
