import SectionHeader from '@/Components/SectionHeader'
import { paddingX } from '@/data/paddingData'
import Link from 'next/link'
import React from 'react'

const ContactBanner = () => {
    return (
        <div className={`${paddingX} bg-[#ca7b28] py-16 `}>
            <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-[24px] p-10 md:p-16 text-center text-white max-w-4xl mx-auto shadow-xl">

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-staatliches mb-4 tracking-wide">
                    Let's Work Together
                </h2>

                <p className="font-lato md:text-lg text-base lg:text-xl mb-6 opacity-90">
                    Have a question, feedback, or want to get involved? <br className="hidden md:block" />
                    We’d love to hear from you.
                </p>

                <p className="font-lato text-base md:text-lg lg:text-xl mt-4 mb-8 opacity-90">
                    Reach out to our team and we’ll get back to you as soon as possible.
                </p>

                <Link
                    href="/contact-us"
                    className="inline-block bg-white text-[#ca7b28] font-semibold font-manrope px-8 py-3 rounded-full shadow-lg hover:bg-[#f5f5f5] hover:scale-[1.05] transition-all duration-300 lg:text-base md:text-sm text-xs bounce-button"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

export default ContactBanner
