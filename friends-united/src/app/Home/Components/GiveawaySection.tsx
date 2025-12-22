'use client';
import { featuresData, giveawayMilestones, progressData } from "@/data/data";
import { paddingX } from "@/data/paddingData";
import { FaGift, FaTshirt, FaEye, FaVideo, FaUserSecret, FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { motion } from "framer-motion";
import Counter from "@/Components/Counter";
import ProgressBar from "./ProgressBar";

const GiveawaySection = () => {

    return (
        <section className={`giveaway-gradient py-20 ${paddingX}`}>
            <div className="">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium font-staatliches giveaway-text-gradient mb-6">
                        MILESTONE CASH GIVEAWAYS
                    </h1>
                    <p className="text-white max-w-6xl font-manrope lg:text-base md:text-sm text-xs">
                        Friends United is committed to enforcing that our extremely well-paid politicians deliver a much better ‘Standard of Living’ for all Australians — but we need <strong>YOU</strong> to make it happen.
                    </p>
                </div>

                <div className="text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#ca7b28] to-[#f59e0b] font-manrope px-6 py-[6px] rounded-[50px] font-semibold md:text-xs text-[10px] lg:text-sm mb-6 animate-pulse-custom text-white">
                        <FaGift /> $10,000 MILESTONE CASH GIVEAWAYS
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-semibold font-staatliches giveaway-text-gradient mb-7 mt-4">
                        2,550 UNITED FRIENDS WILL WIN $10,000
                    </h1>

                    <p className="text-white text-center max-w-[600px] md:max-w-[800px] font-manrope md:text-sm text-xs lg:text-base mb-6">
                        Chances of Winning: <strong>1 in 10,000</strong> <br />
                        (Far Better than Instant Scratchie $10,000 Jackpot Prize — <strong>1 in 600,000</strong>)
                    </p>

                    <p className="text-white text-center max-w-[800px] font-manrope md:text-sm text-xs lg:text-base">
                        Thus, Friends United is conducting <strong>‘Milestone Giveaway Draws’</strong> for all its members — boosting excitement, engagement, and the rise of our new ‘Political Force.’
                    </p>
                </div>

                <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-[24px] p-10 mt-14 text-center">
                    <h2 className="lg:text-4xl md:text-3xl text-2xl font-medium mb-4 font-staatliches giveaway-text-gradient">
                        Current Milestone Progress
                    </h2>
                    <div className="flex justify-between flex-wrap gap-8 mb-8">
                        <div className="text-center flex flex-col gap-[6px]">
                            <Counter
                                to={7350}
                                className="md:text-[34px] text-[28px] lg:text-[40px] font-extrabold text-[#ca7b28] font-manrope leading-none"
                            />
                            <span className="text-white text-[10px] font-manrope md:text-xs lg:text-sm text-center leading-none">Current Members</span>
                        </div>
                        <div className="text-center flex flex-col gap-[6px]">
                            <Counter to={2650} className="md:text-[34px] text-[28px] lg:text-[40px] font-extrabold text-[#ca7b28] font-manrope leading-none" />
                            <span className="text-white text-[10px] font-manrope md:text-xs lg:text-sm text-center leading-none">Members to Go</span>
                        </div>
                        <div className="text-center flex flex-col gap-[6px]">
                            <span className="md:text-[34px] text-[28px] lg:text-[40px] font-extrabold text-[#ca7b28] font-manrope leading-none">$
                                <Counter to={10000} className="md:text-[34px] text-[28px] lg:text-[40px] font-extrabold text-[#ca7b28] font-manrope leading-none" />
                            </span>
                            <span className="text-white text-[10px] font-manrope md:text-xs lg:text-sm text-center leading-none">Prize Pool</span>
                        </div>
                    </div>

                    <ProgressBar target={80} />
                    <p className="text-white lg:text-base md:text-sm text-xs font-manrope">
                        Next giveaway at <span className="text-[#ca7b28] font-bold">10,000 members</span>
                    </p>
                </div>

                <div className="flex flex-row flex-wrap lg:gap-9 md:gap-8 gap-6 justify-center items-center lg:mt-12 md:mt-10 mt-8">
                    {giveawayMilestones.map((milestone) => (
                        <div
                            key={milestone.id}
                            className="bg-[#ffffff0d] backdrop-blur-lg border border-[#ffffff33] rounded-2xl hover:-translate-y-2 overflow-hidden hover:shadow-[0_20px_40px_#CA7B284D] transition-all duration-300 w-[94%] sm:w-[300px] md:w-[320px] lg:w-[400px]"
                        >
                            <div className="h-1 bg-[#ca7b28] rounded-2xl" />
                            <div className="lg:p-7 md:p-6 p-5">
                                <div className="bg-gradient-to-br from-orange-500 to-yellow-400 lg:w-14 lg:h-14 md:w-12 md:h-12 h-10 w-10 flex items-center justify-center rounded-xl text-white md:text-xl text-lg lg:text-2xl md:mb-5 mb-4 lg:mb-6 font-staatliches">
                                    {milestone.id}
                                </div>
                                <h3 className="lg:text-xl md:text-lg text-base font-medium text-white font-staatliches">
                                    {milestone.title}
                                </h3>
                                <p className="text-white text-xs md:text-sm lg:text-base font-manrope lg:mb-4 md:mb-3 mb-2 lg:mt-3 md:mt-[10px] mt-2">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center items-center gap-8">
                    <div className="grid lg:grid-cols-3 w-full md:grid-cols-2 grid-cols-1 gap-6 justify-center">
                        {featuresData.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-[#FFFFFF1A] backdrop-blur-lg border border-[#ffffff33] rounded-2xl  hover:-translate-y-2 overflow-hidden hover:shadow-[0_20px_40px_#CA7B284D]  transition-all duration-300"
                            >
                                <div className="h-1 bg-[#ca7b28] rounded-2xl">

                                </div>
                                <div className="lg:p-7 md:p-6 p-5">
                                    <div className="flex items-center mb-4 gap-4">
                                        <div className="bg-gradient-to-br from-orange-500 to-yellow-400 w-14 h-14 flex items-center justify-center rounded-xl text-white text-2xl">
                                            <feature.icon />
                                        </div>
                                        <h3 className="lg:text-xl md:text-lg text-base font-medium text-white font-staatliches">{feature.title}</h3>
                                    </div>
                                    <p className="text-white text-xs md:text-sm lg:text-base font-manrope mb-4">{feature.description}</p>
                                    <div className="text-[#dd9c56] bg-[#ca7b2833] border border-[#ca7b284d] text-[11px] md:text-[13px] lg:text-[15px] font-manrope leading-relaxed font-medium rounded-[10px] px-4 py-3">{feature.highlight}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center gap-6">
                        <div
                            className="bg-[#FFFFFF1A] backdrop-blur-lg border border-[#ffffff33] rounded-2xl  hover:-translate-y-2 overflow-hidden hover:shadow-[0_20px_40px_#CA7B284D] w-full transition-all duration-300 md:max-w-md"
                        >
                            <div className="h-1 bg-[#ca7b28] rounded-2xl">

                            </div>
                            <div className="lg:p-7 md:p-6 p-5">
                                <div className="flex items-center mb-4 gap-4">
                                    <div className="bg-gradient-to-br from-orange-500 to-yellow-400 w-14 h-14 flex items-center justify-center rounded-xl text-white text-2xl">
                                        <FaTrophy />
                                    </div>
                                    <h3 className="lg:text-xl md:text-lg text-base font-medium text-white font-staatliches">Public Milestone Leaderboard</h3>
                                </div>
                                <p className="text-white text-xs md:text-sm lg:text-base font-manrope mb-4">Gamifies involvement and encourages loyalty by showcasing top contributors and longest-supporting members.</p>
                                <div className="bg-[#0000004d] rounded-[10px] p-4 space-y-3">
                                    {[
                                        "Top Referrer",
                                        "Longest Supporter",
                                        "Most Active",
                                    ].map((item, index, arr) => (
                                        <div
                                            key={index}
                                            className={`flex font-manrope items-center pb-1 gap-3 ${index === arr.length - 1 ? "" : "border-b border-[#ffffff1a]"
                                                }`}
                                        >
                                            <div className="w-6 h-6 p-4 flex items-center justify-center rounded-full bg-[#ca7b28] text-white text-[9px] md:text-[11px] lg:text-[13px] font-semibold">
                                                <span>{index + 1}</span>
                                            </div>
                                            <span className="text-white text-xs md:text-sm lg:text-base font-manrope">{item}</span>
                                        </div>
                                    ))}
                                </div>


                            </div>

                        </div>
                        <div
                            className="bg-[#FFFFFF1A] backdrop-blur-lg border border-[#ffffff33] rounded-2xl w-full hover:-translate-y-2 overflow-hidden hover:shadow-[0_20px_40px_#CA7B284D] transition-all duration-300 md:max-w-md"
                        >
                            <div className="h-1 bg-[#ca7b28] rounded-2xl">

                            </div>
                            <div className="lg:p-7 md:p-6 p-5">
                                <div className="flex items-center mb-4 gap-4">
                                    <div className="bg-gradient-to-br from-orange-500 to-yellow-400 w-14 h-14 flex items-center justify-center rounded-xl text-white text-2xl">
                                        <FaTshirt />
                                    </div>
                                    <h3 className="lg:text-xl md:text-lg text-base font-medium text-white font-staatliches">Merchandise Drops</h3>
                                </div>
                                <p className="text-white text-xs md:text-sm lg:text-base font-manrope ">Limited edition shirts, hoodies, or stickers at every 10k milestone. Use as part of prize or store credit.</p>

                                <div className="grid grid-cols-3 items-center w-full justify-evenly gap-4 py-4 flex-wrap">
                                    {[
                                        { id: 1, icon: FaTshirt, title: "T-Shirts" },
                                        { id: 2, icon: FaUserSecret, title: "Hoodies" },
                                        { id: 3, icon: FaStar, title: "Stickers" },

                                    ].map((content, index) => (


                                        <div key={content.id || index} className="bg-[#ffffff1a] rounded-[10px] px-3 py-4 text-center text-white flex w-full flex-col items-center justify-center gap-2">
                                            <content.icon className="lg:text-2xl md:text-xl text-lg" />
                                            <span className="text-[11px] font-manrope font-medium md:text-xs lg:text-[13px]">{content.title}</span>

                                        </div>
                                    ))
                                    }
                                </div>

                                <div className="text-[#dd9c56] bg-[#ca7b2833] border border-[#ca7b284d] text-[11px] md:text-[13px] lg:text-[15px] font-manrope leading-relaxed font-medium rounded-[10px] px-4 py-3">Limited edition drops every 10,000 members milestone
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div> */}
                {/* <div className="mt-16 text-center flex flex-col items-center"> */}




                {/* <div className="grid lg:grid-cols-3 w-full md:grid-cols-2 grid-cols-1 lg:gap-9 md:gap-8 gap-6 justify-center lg:mt-12 md:mt-10 mt-8">
                    {progressData.map((progress) => {
                        const Icon = progress.icon;
                        return (
                            <div
                                key={progress.id}
                                className="bg-[#ffffff0d] backdrop-blur-lg border border-[#ffffff33] rounded-2xl  hover:-translate-y-2 overflow-hidden hover:shadow-[0_20px_40px_#CA7B284D]  transition-all duration-300"
                            >
                                <div className="h-1 bg-[#ca7b28] rounded-2xl">

                                </div>
                                <div className="lg:p-7 md:p-6 p-5">
                                    <div className="bg-gradient-to-br from-orange-500 to-yellow-400 w-14 h-14 flex items-center justify-center rounded-xl text-white text-2xl mb-6">
                                        <Icon />
                                    </div>
                                    <h3 className="lg:text-xl md:text-lg text-base font-medium text-white font-staatliches">
                                        {progress.title}
                                    </h3>
                                    <p className="text-white text-xs md:text-sm lg:text-base font-manrope mb-4 mt-3">
                                        {progress.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div> */}

                {/* Transparency Section */}
                {/* <div className="mt-16">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-center text-white mb-6 font-staatliches">Complete Transparency</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 gap-5 lg:gap-8">

                        <div className="bg-[#ffffff0d] hover:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
                            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 w-12 h-12 flex items-center justify-center rounded-lg text-white md:text-lg text-md lg:text-xl mb-4 mx-auto">
                                <FaEye />
                            </div>
                            <p className="text-white lg:text-base md:text-sm text-xs font-manrope">Live progress tracking with real-time member count updates</p>
                        </div>

                        <div className="bg-[#ffffff0d] hover:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
                            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 w-12 h-12 flex items-center justify-center rounded-lg text-white md:text-lg text-md lg:text-xl mb-4 mx-auto">
                                <FaVideo />
                            </div>
                            <p className="text-white lg:text-base md:text-sm text-xs font-manrope">Video proof of winner selection and automated draw screenshots</p>
                        </div>

                        <div className="bg-[#ffffff0d] hover:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
                            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 w-12 h-12 flex items-center justify-center rounded-lg text-white md:text-lg text-md lg:text-xl mb-4 mx-auto">
                                <FaTrophy />
                            </div>
                            <p className="text-white lg:text-base md:text-sm text-xs font-manrope">Public winner announcements with member consent</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default GiveawaySection;
