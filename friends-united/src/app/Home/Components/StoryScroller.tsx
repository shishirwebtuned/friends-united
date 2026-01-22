"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const StoryScroller = ({
    section,
    index,
}: {
    section: any;
    index: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const steps = section.points?.length || 1;

    return (
        <div
            ref={ref}
            className="relative h-[300vh]" // controls scroll length
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                    {/* Left – Title & Intro */}
                    <div>
                        <span className="text-7xl font-bold text-[#ca7b28]/10">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <h2 className="text-3xl md:text-4xl font-staatliches text-[#ca7b28] mb-6">
                            {section.title}
                        </h2>

                        {section.content?.map((para: string, i: number) => (
                            <p
                                key={i}
                                className="text-gray-700 text-[15px] leading-relaxed mb-4"
                                dangerouslySetInnerHTML={{ __html: para }}
                            />
                        ))}
                    </div>

                    {/* Right – Scroll-Driven Points */}
                    <div className="relative h-[280px] overflow-hidden">
                        {section.points?.map((point: string, i: number) => {
                            const start = i / steps;
                            const end = (i + 1) / steps;

                            const opacity = useTransform(
                                scrollYProgress,
                                [start, end],
                                [0, 1]
                            );

                            const y = useTransform(
                                scrollYProgress,
                                [start, end],
                                [40, 0]
                            );

                            return (
                                <motion.div
                                    key={i}
                                    style={{ opacity, y }}
                                    className="absolute inset-0"
                                >
                                    <div
                                        className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6 prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: point }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
