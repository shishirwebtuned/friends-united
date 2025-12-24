import CustomButton from "@/Components/CustomButton";
import SectionHeader from "@/Components/SectionHeader";
import { paddingX } from "@/data/paddingData";
import React from "react";
import { client } from "@/lib/sanity.client";
export const revalidate = 60; // seconds
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
        const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
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
        <div className={`${paddingX} bg-gradient-to-b from-white via-[#fff9f3] to-white py-16 mb-8`}>
            {/* Header */}
            <div className="text-center flex items-center justify-center">
                <SectionHeader subtitle="Explore FAQs" title="Our Story" align="center" />
            </div>

            {/* Sections */}
            <div
                className="space-y-12 mt-8 text-[#222]">
                <OurStorySections sections={sections} />

                {/* Final CTA */}
                <div className="text-center pt-16 border-t border-gray-200">
                    <h2 className="md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-4 text-[#ca7b28]">
                        Join FRIENDS UNITED
                    </h2>
                    <p className="mb-8 font-manrope font-medium lg:text-base md:text-sm text-xs text-gray-700">
                        Advocate for changes impacting Australia, Australians, our lifestyle, and the future of our nation.
                    </p>

                    <CustomButton
                        btnPadding="less"
                        label="Join Now"
                        buttonType="filled-outlined"
                        href="/join-us"
                    />
                </div>
            </div>
        </div>

    );
};

export default Page;
