"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { newservicesData } from "@/data/data";
import { paddingX } from "@/data/paddingData";
import { motion } from "framer-motion";
import SectionHeader from "@/Components/SectionHeader";


const OurFight = () => {
    return (
        <section className={`relative py-10 ${paddingX}`}>
            <div className="absolute top-0 left-[-50px] opacity-20">
                <img
                    src="images/unity_hands.png"
                    alt="unity"
                    width={200}
                    height={200}
                    className="object-cover w-[200px] h-[200px]"
                />
            </div>
            <div className="absolute bottom-0 right-[50px] opacity-20">
                <img
                    src="images/diversity.png"
                    alt="diversity"
                    width={200}
                    height={200}
                    className="object-cover w-[200px] h-auto"
                />
            </div>

            <div className="">
                <div className="text-center mb-8 w-full flex flex-col items-center justify-center relative">
                    <SectionHeader
                        subtitle="The Fight We’re Taking On"
                        title="One Nation, One Voice, One Unstoppable Movement"
                        align="center"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{

                            568: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="pb-10 overflow-hidden"
                    >
                        {newservicesData.map((service) => (
                            <SwiperSlide key={service.id}>
                                <motion.div
                                    className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer h-72 md:h-100"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="object-cover w-full h-full"
                                    />

                                    <motion.div
                                        variants={{
                                            rest: { backgroundColor: "rgba(0,0,0,0.2)" },
                                            hover: { backgroundColor: "rgba(202, 123, 40, 0.4)" },
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 flex flex-col justify-between text-center text-white p-6 overflow-hidden"
                                    >
                                        <motion.p
                                            variants={{
                                                rest: { opacity: 0 },
                                                hover: { opacity: 1 },
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="lg:text-sm md:text-xs text-[10px] text-white font-manrope font-medium"
                                        >
                                            {service.description}
                                        </motion.p>

                                        <motion.div
                                            variants={{
                                                rest: { y: 50 },
                                                hover: { y: 0 },
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col items-center "
                                        >
                                            <h3 className="text-lg md:text-xl lg:text-2xl font-staatliches font-medium drop-shadow-md mb-2">
                                                {service.title}
                                            </h3>

                                            <motion.div
                                                variants={{
                                                    rest: { y: 50, opacity: 1 },
                                                    hover: { y: 0, opacity: 1 },
                                                }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                className="w-full flex justify-center"
                                            >
                                                <Link
                                                    href={service.link}
                                                    className="bg-white text-black font-manrope font-medium px-4 py-[10px] md:text-xs text-[10px] lg:text-sm w-full rounded-md shadow hover:bg-[#CA7B28] hover:text-white transition-all ease-in-out duration-300"
                                                >
                                                    Read More
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </motion.div>

            </div>
        </section>
    );
}

export default OurFight;