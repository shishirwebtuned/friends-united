"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "@/Components/CustomButton";
import { paddingX } from "@/data/paddingData";
import SectionHeader from "@/Components/SectionHeader";
import { motion } from "framer-motion";
import { client } from '@/lib/sanity.client';
import imageUrlBuilder from '@sanity/image-url';
import Link from "next/link";
import { HeroBannerProps } from "./HeroBannerNew";

export interface Voice {
    heading: string;
    subHeading: string;
}

export interface AboutUs {
    title: string;
    subTitle: string;
    description: string;
    frontimage: any;
    backimage: any;
    voices: Voice[];
    revival: {
        title: string;
        description: string;
        pointList: string[];
    }
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

const AboutUs: React.FC<HeroBannerProps> = ({ bannerData }) => {
    const [aboutUsData, setAboutUsData] = React.useState<AboutUs | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        let isMounted = true;

        client
            .fetch<AboutUs>(
                `*[_type == "unitedVoices"][0]{
                    title,
                    subTitle,
                    description,
                    frontimage,
                    backimage,
                    revival{
                        title,
                        description,
                        pointList[]
                    },
                    voices[]{
                        heading,
                        subHeading
                    }

                }`
            )
            .then((res) => {
                if (!isMounted) return;
                setAboutUsData(res);
                setLoading(false);
            })
            .catch((error) => {
                if (!isMounted) return;
                console.error('Failed to load About Us data:', error);
                setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    console.log("aboutUS Data", aboutUsData);
    console.log("banner Data", bannerData);

    return (
        <section className={` ${paddingX} py-12 md:py-[5.5rem]`}>
            <div className="">
                <div className="flex flex-col lg:flex-row lg:gap-6">
                    {/* Text Column */}
                    <div className="lg:w-[60%] flex flex-col">
                        {/* <SectionHeader
                            // subtitle={`${aboutUsData?.subTitle || "Raising a Fierce Force of Change-Makers"}`}
                            title={`${aboutUsData?.title}`}
                            align="left"
                        /> */}
                        <p className="text-lg md:text-xl lg:text-xl font-firaSansCondensed font-medium tracking-wide text-[#ca7b28] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: bannerData.subTitle || "" }} />

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-sm md:text-[15px] lg:text-base font-manrope leading-relaxed mb-4 md:mb-5 lg:mb-6 text-[#4e4e4e]">{`${aboutUsData?.description}`}

                        </motion.p>

                        {/* Features Grid */}
                        {/* {aboutUsData?.voices.length !== 0 && (
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
                                        <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1">{`${aboutUsData?.voices?.[0]?.heading}`}</h4>
                                        <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">  {aboutUsData?.voices?.[0]?.subHeading}
                                        </p>
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
                                        <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1">{`${aboutUsData?.voices?.[1]?.heading}`}</h4>
                                        <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">{aboutUsData?.voices?.[1]?.subHeading}</p>
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
                                        <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1">{`${aboutUsData?.voices?.[2]?.heading}`}</h4>
                                        <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">
                                            {aboutUsData?.voices?.[2]?.subHeading}</p>
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
                                        <h4 className="lg:text-xl md:text-lg text-base font-staatliches font-medium tracking-wide mb-1"> {`${aboutUsData?.voices?.[3]?.heading || "Drive Change Forward"}`} </h4>
                                        <p className="lg:text-sm md:text-xs text-[10px] font-manrope text-[#4e4e4e] leading-loose font-medium">
                                            {aboutUsData?.voices?.[3]?.subHeading || "Empowering communities to turn ideas into policies that matter."}

                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        )} */}
                        <div className="flex flex-col gap-3 md:gap-3 lg:gap-5 mt-2">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-staatliches text-[#ca7b28]">
                                {aboutUsData?.revival?.title}
                            </h2>

                            <p
                                className="text-gray-800 leading-relaxed tracking-wide text-xs md:text-sm lg:text-base font-manrope max-w-2xl"
                                dangerouslySetInnerHTML={{
                                    __html: aboutUsData?.revival?.description || "",
                                }}
                            />


                            <div className="flex flex-col gap-1">
                                {aboutUsData?.revival?.pointList.map((item: any, index: number) => (
                                    <div
                                        key={index}
                                        className="flex flex-row flex-wrap md:justify-start justify-center items-center gap-y-4 gap-x-2"
                                    >
                                        {/* <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#ca7b28] flex-shrink-0" /> */}

                                        <p className="text-[#ca7b28] text-xs md:text-sm lg:text-base leading-relaxed font-manrope font-medium bg-[#ca7b28]/20 rounded-xl px-3 md:px-4 py-1.5"
                                            dangerouslySetInnerHTML={{
                                                __html: item || "",
                                            }}
                                        />

                                        {index === 0 && (
                                            <Link href="/join-us" className="bg-white cursor-pointer text-[#D1792C] border-2 border-[#D1792C] rounded-4xl px-3 py-1.5 font-semibold text-sm md:text-base lg:text-[17px] font-lato bounce-button">Join us</Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <div className="mt-5 md:mt-6 flex sm:justify-start justify-center">
                            <CustomButton btnPadding="more" label="Explore Our Story" buttonType="filled-outlined" href="/our-story" />

                        </div> */}
                    </div>

                    <div className="lg:w-[40%] mt-12 lg:mt-0 w-full relative flex justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="relative w-full h-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] flex justify-center md:px-0 px-2">
                            {/* <div className="relative w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
                                {aboutUsData?.frontimage ? (
                                    <img
                                        src={urlFor(aboutUsData.frontimage).width(400).height(400).url()}
                                        alt="Main"
                                        className="object-cover w-full h-full rounded-xl z-10"
                                    />
                                ) : (
                                    <img
                                        src="images/united_hands.jpg"
                                        alt="Main"
                                        className="object-cover w-full h-full rounded-xl z-10"
                                    />
                                )}
                            </div> */}

                            <div className="relative w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px]">
                                {aboutUsData?.frontimage ? (
                                    <img
                                        src={urlFor(aboutUsData.frontimage).width(400).height(400).url()}
                                        alt="Main"
                                        className="object-cover w-full h-full rounded-xl z-10"
                                    />
                                ) : (
                                    <img
                                        src="images/united_hands.jpg"
                                        alt="Main"
                                        className="object-cover w-full h-full rounded-xl z-10"
                                    />
                                )}
                            </div>



                            {/* <div className="absolute bottom-6 lg:bottom-7.5 right-2 md:right-0 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[290px] md:h-[290px] lg:w-[340px] lg:h-[340px]">
                                {aboutUsData?.backimage ? (
                                    <img
                                        src={urlFor(aboutUsData.backimage).width(400).height(400).url()}
                                        alt="Overlay"
                                        className="object-cover w-full h-full rounded-xl shadow-lg z-20"
                                    />
                                ) : (
                                    <img
                                        src="images/about-us.jpg"
                                        alt="Overlay"
                                        className="object-cover w-full h-full rounded-xl shadow-lg z-20"
                                    />
                                )}
                            </div> */}
                        </motion.div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutUs;
