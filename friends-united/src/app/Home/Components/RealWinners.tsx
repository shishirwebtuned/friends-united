"use client";
import SectionHeader from '@/Components/SectionHeader'
import { paddingX } from '@/data/paddingData'
import React from 'react';
import { motion } from "framer-motion";
import { client } from '@/lib/sanity.client';
export const revalidate = 60; // seconds
import * as FaIcons from 'react-icons/fa';
import * as FaIcons6 from 'react-icons/fa6';
import * as TiIcons from 'react-icons/ti';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';



type WinnerItem = {
    icon: string;
    title: string;
    description: string;
};

type RealWinnersDoc = {
    sectionTitle: string;
    sectionDescription: string;
    winnersList: WinnerItem[];
};

const RealWinners = () => {
    const [data, setData] = React.useState<RealWinnersDoc | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        let isMounted = true;

        client
            .fetch<RealWinnersDoc>(
                `*[_type == "realWinners"][0]{
                    sectionTitle,
                    sectionDescription,
                    winnersList[]{
                        icon,
                        title,
                        description
                    }
                }`,
                {},
                { cache: "no-store" }
            )
            .then((res) => {
                if (!isMounted) return;
                setData(res);
                setLoading(false);
            })
            .catch(() => {
                if (!isMounted) return;
                setError("Failed to load winners.");
                setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const renderIcon = (iconName: string) => {
        if (!iconName) return null;

        // Combine all icon libraries
        const allIcons = {
            ...FaIcons,
            ...FaIcons6,
            ...TiIcons,
            ...MdIcons,
            ...GiIcons,
        };

        const IconComponent = allIcons[iconName as keyof typeof allIcons];

        // Check if it's a valid React component
        if (!IconComponent || typeof IconComponent !== 'function') {
            console.warn(`Icon "${iconName}" not found in react-icons`);
            return null;
        }

        return <IconComponent className="w-7 h-7" />;
    };

    console.log("winnerData", data);

    return (
        <div className={` ${paddingX} py-16`}>
            <div className='text-center flex flex-col items-center justify-center'>
                <SectionHeader
                    title={data?.sectionTitle || 'THE REAL WINNERS'}
                    align="center"
                />

                <p className='md:text-lg text-base lg:text-xl mt-5 font-manrope font-medium'>
                    {data?.sectionDescription || 'Australians, who can once again comfortably afford :'}
                </p>
            </div>

            {loading && (
                <p className="mt-8 text-center text-sm md:text-base text-gray-500">Loading winners...</p>
            )}

            {error && !loading && (
                <p className="mt-8 text-center text-sm md:text-base text-red-500">{error}</p>
            )}

            {!loading && !error && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid mt-10 lg:grid-cols-3 w-full md:grid-cols-2 grid-cols-1 gap-6 justify-center"
                >
                    {data?.winnersList?.map((winner, idx) => (
                        <div
                            key={idx}
                            className="relative bg-[#f5f6f8] backdrop-blur-lg border border-[#ffffff33] rounded-2xl lg:p-7 md:p-6 p-5 hover:-translate-y-1 overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:border-[var(--primary-color)]  transition-all duration-300 group"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[#d4861f] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                            <div>
                                <div className="flex items-center mb-4 gap-4">
                                    <div className="bg-gradient-to-br from-[#ca7b28] to-[#d4861f] w-14 h-14 flex items-center justify-center rounded-xl text-white lg:text-3xl md:text-2xl text-xl shadow-[0_8px_20px_rgba(202,123,40,0.3)] transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-110 group-hover:shadow-[0_12px_30px_rgba(202,123,40,0.4)]">
                                        {renderIcon(winner.icon)}
                                    </div>
                                    <h3 className="lg:text-xl md:text-lg text-base font-medium text-[#1b1b1b] font-staatliches">{winner.title}</h3>
                                </div>
                                <p className="text-[#4e4e4e] leading-relaxed text-xs md:text-sm lg:text-base font-manrope mb-4">{winner.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default RealWinners
