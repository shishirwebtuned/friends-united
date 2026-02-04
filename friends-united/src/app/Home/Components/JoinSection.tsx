import CustomButton from '@/Components/CustomButton'
import { paddingX } from '@/data/paddingData'
import Link from 'next/link'
import React from 'react'

const JoinSection = () => {
    return (
        <div className={`bg-[#ca7b28]/20 ${paddingX} lg:py-12 md:py-8 py-6`}>
            <div className="text-center">
                <h2 className="md:text-3xl text-2xl lg:text-4xl font-staatliches font-normal mb-3 md:mb-4 lg:mb-5 text-[#ca7b28]">
                    Join FRIENDS UNITED
                </h2>
                <div className="mb-4 md:mb-6 lg:mb-8  font-manrope font-medium lg:text-lg md:text-base space-y-1.5 text-sm text-gray-700">
                    <p>
                        Become a part of the Movement that Advocates for changes that impact
                    </p>
                    <span className='font-bold'>
                        Australia, Australians, our lifestyle, and the future of our Australia.
                    </span>
                </div>

                <Link
                    href="/join-us"
                    className="inline-block bg-[#ca7b28] text-white font-semibold font-manrope px-8 py-3 rounded-full shadow-lg hover:bg-[#b66d22] hover:scale-105 transition-all duration-300 bounce-button"
                >
                    Join Us
                </Link>
            </div>
        </div>
    )
}

export default JoinSection
