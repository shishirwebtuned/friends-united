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
            <div className="flex justify-center items-center bg-[#f59e0b] pt-4 pb-4">
                <h1
                    className="text-4xl sm:text-5xl md:text-[80px] lg:text-[100px] font-broadway uppercase sm:tracking-widest tracking-wide leading-none text-white"
                >
                    {bannerData?.title}
                </h1>
            </div>

            {/* <div className={`bg-[#FFC000] pt-3 pb-10 xl:px-[15%] lg:px-[13%] md:px-[10%] px-[5%]`}>
                <p className="text-black text-xs sm:text-lg md:text-xl lg:text-3xl font-firaSansCondensed font-normal leading-normal tracking-wide">
                    {(() => {
                        const words = bannerData?.subTitle?.split(" ") || [];
                        const firstLine = words.slice(0, 4).join(" ");
                        const restLine = words.slice(4).join(" ");

                        return (
                            <>
                                {firstLine}
                                {restLine && (
                                    <>
                                        <br />
                                        {restLine}
                                    </>
                                )}
                            </>
                        );
                    })()}
                </p>


            </div> */}
        </div>

    )
}

export default HeroBannerNew

