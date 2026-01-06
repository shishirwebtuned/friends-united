"use client";

import React from "react";
import { paddingX } from "@/data/paddingData";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection: React.FC = () => {


    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 400], [0, 80]);

    return (
        <section className={`relative overflow-hidden h-[68dvh] md:h-[55dvh] ${paddingX}`}>
            {/* <MotionImage
                src="/images/sydneyBanner3.webp"
                alt="Friends United"
                loading="lazy"
                style={{ y }}
                initial={{ opacity: 0.8, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                fill
                quality={90}
                placeholder="blur"
                blurDataURL="/images/sydneyBanner3.webp"
                className="absolute top-0 left-0 w-full h-full object-cover z-0 hero-image"
            /> */}
            <motion.img
                src="images/sydneyBanner3.webp"
                alt="Friends United"
                loading="lazy"
                style={{ y }}
                initial={{ opacity: 0.8, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 hero-image"

            />


            <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>

            <div className="relative z-20 h-full flex items-start">
                <div className="">
                    {/* <div className="max-w-4xl md:py-36 py-32 lg:py-40">
                        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-staatliches font-normal leading-[1.1em] gradient-text  text-transparent">
                            AUSTRALIANS UNITING TOGETHER <br></br> as ONE SUPER POWERFUL VOICE
                        </h1>
                        <p className="mt-2 mb-5 max-w-3xl tracking-wide xl:text-lg lg:text-[17px] md:text-base sm:text-sm text-[13px] text-white">
                            Demanding change from our Politicians on issues that affect
                            Australia, Australians and our Lifestyle
                        </p>
                        <div className="flex gap-3 md:gap-4 lg:gap-5 ">
                            <CustomButton btnPadding="more" label="Explore Our Story" buttonType="filled-nonoutlined" />
                            <CustomButton btnPadding="more" label="Connect With Us" buttonType="outlined" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
