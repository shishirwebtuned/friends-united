import { paddingX } from '@/data/paddingData'
import React from 'react'


export interface BannerNew {
    title: string;
    subTitle: string;
}

interface HeroBannerProps {
    bannerData: BannerNew;
}

const HeroBannerNew: React.FC<HeroBannerProps> = ({ bannerData }) => {

    console.log("bannerData", bannerData)
    return (
        <div className="text-center">
            {/* Top Section - AUSTRALIA */}
            <div className="flex justify-center items-center bg-white pt-4 pb-2">
                <h1
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-broadway uppercase sm:tracking-widest tracking-wide leading-none"
                >
                    <span className="text-[#f9b233]">A</span>
                    <span className="text-[#2e4d1c]">U</span>
                    <span className="text-[#f9b233]">S</span>
                    <span className="text-[#2e4d1c]">T</span>
                    <span className="text-[#f9b233]">R</span>
                    <span className="text-[#2e4d1c]">A</span>
                    <span className="text-[#f9b233]">L</span>
                    <span className="text-[#2e4d1c]">I</span>
                    <span className="text-[#f9b233]">A</span>
                </h1>
            </div>

            <div className={`bg-[#f9b233] py-2 ${paddingX}`}>
                <p
                    className="text-black text-xs sm:text-lg md:text-xl lg:text-2xl uppercase font-arialGreek font-medium"
                >
                    Once Upon a Time It Was the Lucky Country
                </p>
            </div>
        </div>

    )
}

export default HeroBannerNew

