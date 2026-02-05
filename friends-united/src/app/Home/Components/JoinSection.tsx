"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, Variants, useMotionValue, useSpring } from "framer-motion"
import { paddingX } from "@/data/paddingData"

const containerVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: 60
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.15
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const JoinSection = () => {

    // magnetic button motion
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x, { stiffness: 150, damping: 15 })
    const springY = useSpring(y, { stiffness: 150, damping: 15 })

    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return

        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const offsetX = (e.clientX - centerX) * 0.1
        const offsetY = (e.clientY - centerY) * 0.1

        x.set(offsetX)
        y.set(offsetY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <section className={`${paddingX} lg:py-20 md:py-16 py-12 relative overflow-hidden bg-[#ca7b28]/2`}>

            {/* floating ambient background */}
            {/* <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 w-80 h-80 bg-[#ca7b28]/10 blur-3xl rounded-full"
            /> */}

            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ca7b28]/10 blur-3xl rounded-full"
            />

            {/* main card */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="
                    relative
                    max-w-5xl mx-auto
                    bg-[#ca7b28]/20
                    rounded-3xl
                    border border-[#ca7b28]/30
                    backdrop-blur-md
                    shadow-xl
                    text-center
                    px-8 md:px-10 lg:px-12
                    py-8 md:py-10 lg:py-12
                "
            >

                {/* title */}
                <motion.h2
                    variants={itemVariants}
                    className="
                        md:text-5xl text-3xl lg:text-6xl
                        font-staatliches
                        text-[#ca7b28]
                        tracking-wide
                        mb-6
                    "
                >
                    Join FRIENDS UNITED
                </motion.h2>

                {/* text */}
                <motion.div
                    variants={itemVariants}
                    className="
                        font-manrope font-medium
                        lg:text-lg md:text-base text-sm
                        text-gray-700 space-y-2 mb-10
                    "
                >
                    <p>
                        Become a part of the Movement that Advocates for changes that impact
                    </p>

                    <p className="font-bold text-gray-900">
                        Australia, Australians, our lifestyle, and the future of our Australia.
                    </p>
                </motion.div>

                {/* magnetic button */}
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ x: springX, y: springY }}
                    variants={itemVariants}
                    className="inline-block"
                >
                    <Link
                        href="/join-us"
                        className="
                            inline-flex items-center gap-3
                            bg-[#ca7b28]
                            text-white
                            font-semibold font-manrope
                            px-10 py-3.5
                            rounded-full
                            shadow-lg
                            transition-all duration-300
                            hover:bg-[#b66d22]
                            hover:shadow-2xl
                            group bounce-button
                        "
                    >
                        Join Us

                        <motion.span
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>

                    </Link>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default JoinSection
