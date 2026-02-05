
import CustomButton from "@/Components/CustomButton";
import SectionHeader from "@/Components/SectionHeader";
import { paddingX } from "@/data/paddingData";
import React from "react";
import { client } from "@/lib/sanity.client";
import { motion } from "framer-motion";
import OurStorySections from "./OurStorySections";

interface Section {
    title: string;
    content: string[];
    points?: string[];
    ending?: string;
    subTitle?: string;
    subPoints?: string[];
}

interface OurStoryData {
    sections: Section[];
}

async function getOurStoryData(): Promise<OurStoryData | null> {
    try {
        const query = `*[_type == "ourstory"][0]{
            sections
        }`;
        const data = await client.fetch(query,
            {},
            { cache: "no-store" });
        return data;
    } catch (error) {
        console.error("Error fetching our story data:", error);
        return null;
    }
}

const Page = async () => {
    const data = await getOurStoryData();
    const sections = data?.sections || [];

    return (
        <div className={`${paddingX} bg-gradient-to-b from-white via-[#fff9f3] to-white py-8 md:py-12 lg:py-16 mb-4 md:mb-6 lg:mb-8`}>
            {/* Header */}
            <div className="text-center flex items-center justify-center">
                <SectionHeader subtitle="Explore About Us" title="Our Story" align="center" />
            </div>

            {/* Sections */}
            <div
                className="space-y-7 md:space-y-10 lg:space-y-12 mt-4 md:mt-6 lg:mt-8 text-[#222]">
                <OurStorySections sections={sections} />

                <div className="text-center pt-8 md:pt-12 lg:pt-16 border-t border-gray-200">
                    <h2 className="md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-2.5 md:mb-3 lg:mb-4 text-[#ca7b28]">
                        Join FRIENDS UNITED
                    </h2>
                    <p className="mb-4 md:mb-6 lg:mb-8  font-manrope font-medium lg:text-base md:text-sm text-xs text-gray-700">
                        Advocate for changes impacting Australia, Australians, our lifestyle, and the future of our Australia.
                    </p>

                    <CustomButton
                        btnPadding="less"
                        label="Join Now"
                        buttonType="filled-outlined"
                        href="/join-us"
                    />
                </div>

                <div
                    // initial={{ opacity: 0, scale: 0.9 }}
                    // whileInView={{ opacity: 1, scale: 1 }}
                    // transition={{ duration: 0.9, ease: "easeOut" }}
                    // viewport={{ once: true }}
                    className="relative w-full mt-3 md:mt-4 lg:mt-8 text-center"
                >
                    {/* highlight panel */}
                    <div className="relative bg-black/90 text-white rounded-[30px] px-4 md:px-7 lg:px-10 py-6 md:py-12 lg:py-16 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ca7b28]/90 to-transparent opacity-60" />

                        <p className="relative text-base md:text-lg lg:text-xl mb-6 md:mb-7 lg:mb-8 flex flex-col gap-3 text-white font-arialGreek">
                            <span>Join Friends United and become a part of the Super Powerful Voice.</span>
                        </p>

                        <h2 className="relative flex flex-col space-x-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white">
                            <span className="text-white tracking-tighter font-medium">POWER OF NUMBERS</span>
                            <span className="text-[#ca7b28] font-medium">can</span>
                            <span className="text-[#ca7b28] tracking-tighter font-medium">INFLUENCE GOVERNMENT POLICIES AND AGENDAS.</span>

                        </h2>
                    </div>
                </div>

                {/* Final CTA */}

            </div>
        </div>

    );
};

export default Page;
