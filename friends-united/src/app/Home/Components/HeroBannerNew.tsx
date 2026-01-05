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
            <div className="flex justify-center items-center bg-[#FFC000] pt-4 pb-4">
                <h1
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-broadway uppercase sm:tracking-widest tracking-wide leading-none text-white"
                >
                    {bannerData?.title}
                </h1>
            </div>

            <div className={`bg-[#FFC000] pt-2 pb-4 ${paddingX}`}>
                <p
                    className="text-black text-xs sm:text-lg md:text-xl lg:text-2xl uppercase font-arialGreek font-medium leading-relaxed"
                >
                    {bannerData?.subTitle}
                </p>
            </div>
        </div>

    )
}

export default HeroBannerNew

