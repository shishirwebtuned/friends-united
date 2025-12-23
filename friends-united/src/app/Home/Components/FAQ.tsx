"use client";
import SectionHeader from '@/Components/SectionHeader';
import { staticFAQData } from '@/data/data';
import { paddingX } from '@/data/paddingData';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity.client';
import React, { useState, useRef, useEffect } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqDataList: {
        image: string;
        faq: FAQItem[];
    };
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

const FAQ: React.FC<FAQProps> = ({ faqDataList }) => {
    const [openId, setOpenId] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };
console.log('faqDatalist', faqDataList.image);
    console.log('faqDatalist', faqDataList);
    console.log("faqData", staticFAQData);

    const faqData = (faqDataList.faq || staticFAQData).map((item: any, index: number) => ({
        ...item,
        id: item.id ?? item._key ?? index,
    }))
    return (
        <div className={`${paddingX}`}>
            <div className="text-center flex items-center justify-center">
                <SectionHeader
                    subtitle="Explore Faqs"
                    title="Frequently asked questions"
                    align="center"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-10 lg:gap-8 gap-6 items-center mb-12 lg:mt-8 md:mt-7 mt-5">

                <div className="relative flex items-center justify-center">
                    {faqDataList?.image && faqDataList.image.asset ? (
                        <img
                            src={urlFor(faqDataList.image).width(600).height(600).url()}
                            alt="FAQ Banner"
                            width={600}
                            height={600}
                            className="lg:w-full lg:h-[620px] object-cover rounded-3xl md:h-[500px] md:w-auto w-auto h-auto"
                        />
                    ) : null}
                </div>

                <div className="rounded-lg">
                    {faqData.map((faq: any, index: number) => (
                        <div
                            key={faq?.id}
                            className="border-b border-gray-200 md:mb-4 mb-3 overflow-hidden"
                        >
                            <button
                                className={`w-full flex items-center text-left text-gray-700 font-semibold lg:text-lg md:text-base text-sm lg:px-5 md:px-4 px-3 py-3 transition-all cursor-pointer duration-300 font-manrope ${openId === faq.id ? 'bg-gray-100' : 'bg-white'
                                    }`}
                                onClick={() => toggleAccordion(faq.id)}
                            >
                                <span className="mr-3 font-bold text-[var(--primary-color)] lg:text-base md:text-sm font-lato text-xs">
                                    {index + 1}.
                                </span>
                                {faq.question}
                                <span className="ml-auto text-[var(--primary-color)] md:text-xl text-lg lg:text-2xl">
                                    {openId === faq.id ? '-' : '+'}
                                </span>
                            </button>

                            <div
                                ref={(el) => { contentRefs.current[index] = el; }}
                                style={{
                                    maxHeight:
                                        openId === faq.id
                                            ? contentRefs.current[index]?.scrollHeight
                                            : 0,
                                    opacity: openId === faq.id ? 1 : 0,
                                    transition: "max-height 0.5s ease, opacity 0.5s ease",
                                    overflow: "hidden",
                                }}
                                className="xl:px-10 lg:px-8 md:px-6 px-5 text-gray-700 lg:text-base md:text-sm text-xs leading-relaxed bg-white font-manrope"
                            >
                                {faqDataList?.faq ? (
                                    <div className="py-5">
                                        <div className="whitespace-pre-line  leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                ) : (<div
                                    className="py-5"
                                    dangerouslySetInnerHTML={{
                                        __html: typeof faq.answer === 'string' ? faq.answer : ''
                                    }}
                                />
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default FAQ;
