import { paddingX } from '@/data/paddingData'
import React from 'react'


export interface Banner {
    title: string;
    subTitle: string;
}

interface HeroBannerProps {
    bannerData: Banner;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ bannerData }) => {

    console.log("bannerData", bannerData)
    return (
        <div className={`text-center bg-[#ca7b28] py-4 ${paddingX}`}>
            <h3
                className="text-white font-staatliches leading-tight sm:leading-normal text-lg sm:text-xl 
                lg:text-3xl md:text-2xl xl:text-4xl font-normal flex items-center tracking-[0.05em] justify-center gap-2 flex-wrap"
            >
                <img src="/icons/star.svg" className="w-6 h-6 text-white fill-white" />
                <span className="text-yellow-200 font-medium text-3xl sm:text-4xl lg:text-5xl">
                    {bannerData?.title || "Australia"}
                </span>
                — {bannerData?.subTitle || "once upon a time it was the lucky country"}
                <img src="/icons/star.svg" className="w-6 h-6 text-white fill-white" />
            </h3>
        </div>
    )
}

export default HeroBanner

