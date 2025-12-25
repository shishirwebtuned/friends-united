"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/Components/SectionHeader";

export default function DailySocialMedia() {
    return (
        <section className={`bg-white text-black px-6 md:px-16 py-20 flex flex-col gap-28 overflow-hidden`}>

            <div className="text-center flex items-center justify-center">
                <SectionHeader
                    subtitle="FRIENDS UNITED"
                    title="THE NEW WAY TO PROTEST"
                    align="center"
                />
            </div>

            {/* OLD WAY */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-staatliches mb-4 text-gray-400">
                        THE OLD SCHOOL WAY
                    </h2>

                    <p className="text-gray-300 leading-relaxed">
                        Forget about marching the streets trying to get our governments to listen.
                        <br />
                        <br />
                        Even with a purported <span className="text-white font-semibold">100,000 people</span> marching across
                        the Sydney Harbour Bridge — making international news —
                        <span className="text-red-400 font-semibold"> nothing changed.</span>
                    </p>
                </div>

                <div className="border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-md">
                    <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
                        Reality
                    </p>
                    <p className="text-lg font-medium text-white">
                        Street marches are loud —
                        <br />
                        but easily ignored.
                    </p>
                </div>
            </motion.div>

            {/* NEW WAY */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            >
                <div className="border border-[#ca7b28]/30 rounded-2xl p-10 bg-[#ca7b28]/10 backdrop-blur-md order-2 md:order-1">
                    <p className="text-sm uppercase tracking-widest text-[#ca7b28] mb-2">
                        Friends United
                    </p>
                    <p className="text-lg font-medium">
                        A system governments
                        <br />
                        cannot ignore.
                    </p>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-staatliches mb-4 text-[#ca7b28]">
                        THE NEW WAY
                    </h2>

                    <p className="text-gray-300 leading-relaxed">
                        What <span className="text-white font-semibold">Friends United</span> can achieve
                        will make street marches look insignificant.
                        <br />
                        <br />
                        No noise.
                        <br />
                        No chaos.
                        <br />
                        Just <span className="text-white font-semibold">numbers, unity, and influence.</span>
                    </p>
                </div>
            </motion.div>

            {/* POWER OF NUMBERS */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-staatliches text-white mb-6">
                    THE <span className="text-[#ca7b28]">POWER OF NUMBERS</span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                    When enough voices move together,
                    governments are forced to listen.
                    <br />
                    <br />
                    Friends United turns people into
                    <span className="text-white font-semibold"> measurable influence</span>
                    over government policies and agendas.
                </p>
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <Link
                    href="/join-us"
                    className="inline-block bg-[#ca7b28] text-black font-semibold px-10 py-4 rounded-full text-lg hover:bg-[#d4861f] transition-all duration-300 shadow-lg"
                >
                    Join Friends United
                </Link>

                <p className="mt-4 text-sm text-gray-400">
                    Become a Voice.
                </p>
            </motion.div>

        </section>
    );
}

