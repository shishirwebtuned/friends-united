import { paddingX } from "@/data/paddingData";
import Link from "next/link";
import React from "react";

const JoinUs = () => {
    return (
        <section className={`relative py-20 md:py-28 giveaway-gradient overflow-hidden ${paddingX}`}>
            {/* Gradient Accent Background */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1b120a] via-[#2b1a0f] to-[#3b2313] opacity-95 -z-10"></div> */}
            {/* <div className="absolute -top-20 -right-32 w-[500px] h-[500px] bg-[#ca7b28]/20 rounded-full blur-3xl -z-10"></div> */}

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
                {/* Left Text Section */}
                <div className="flex-1 text-left text-white">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-staatliches mb-5 tracking-wide leading-tight">
                        Join the <span className="text-[#ca7b28]">Movement</span>
                    </h2>

                    <p className="font-lato text-base md:text-lg lg:text-xl mb-5 text-[#e5e5e5]/90 leading-relaxed">
                        Stand with us and amplify the voice of millions. Together, we can influence change and shape the future of Australia.
                    </p>

                    {/* <p className="font-lato text-base md:text-lg mb-10 text-[#e5e5e5]/80">
                        Your support matters. Join the movement and make a real impact today.
                    </p> */}

                    <p className="font-lato text-base md:text-lg mb-10 text-[#e5e5e5]/80">
                        Become a Voice of One of the Super Powerfuls
                    </p>

                    <Link
                        href="/join-us"
                        className="inline-block bg-[#ca7b28] text-white font-semibold font-manrope px-8 py-3 rounded-full shadow-lg hover:bg-[#b66d22] hover:scale-105 transition-all duration-300 bounce-button"
                    >
                        Join Us
                    </Link>
                </div>

                {/* Right Visual Accent */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <Link
                        href="/join-us"
                        className="relative w-[230px] h-[230px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] border border-[#ca7b28]/30 backdrop-blur-md rounded-[32px] flex items-center justify-center shadow-2xl cursor-pointer overflow-hidden"
                    >
                        {/* Rotating gradient background */}
                        <div
                            className="absolute inset-0 rounded-full opacity-40 animate-[spin_10s_linear_infinite]"
                            style={{
                                background: "conic-gradient(from 0deg, #ca7b28, transparent 70%)",
                                transformOrigin: "center",
                            }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-br from-[#ca7b28]/20 to-transparent rounded-[32px]" />

                        {/* Static Text (does NOT rotate) */}
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-staatliches text-white/90 tracking-wider relative z-10">
                            JOIN US
                        </h3>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default JoinUs;
