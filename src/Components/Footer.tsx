import { paddingX } from "@/data/paddingData";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className={`bg-[#1d1d1d] text-white md:py-12 py-10 lg:py-14 ${paddingX}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                        <div className="footer-newsletter">
                            <h4 className="text-xl md:text-2xl lg:text-3xl md:mb-4 mb-3 lg:mb-6 font-staatliches font-normal">Stay Connected</h4>
                            <p className="mb-4 text-white/90 w-[90%] lg:text-base md:text-sm text-xs font-manrope">
                                Get the latest updates, events, and ways to take action — straight to your inbox.
                            </p>
                            <div className="flex gap-2">
                                <div className="xl:w-[70%] lg:w-[65%] w-[70%]">
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        className="w-full px-3 py-2 md:px-4 md:py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-0 focus:border-[#ca7b28] transition-all ease-in-out duration-300 text-white placeholder:text-white lg:text-base md:text-sm text-xs"
                                    />
                                </div>
                                <button className="lg:px-3 px-4 xl:px-4 py-2 w-fit cursor-pointer bg-[#ca7b28] font-manrope text-[10px] md:text-[12px] lg:text-[13px] xl:text-[15px] uppercase text-white font-bold rounded-md hover:bg-[#b17021] transition-colors">
                                    SIGN UP
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-xl md:text-2xl lg:text-3xl md:mb-4 mb-3 lg:mb-6 font-staatliches font-normal">GET INVOLVED</h4>
                        <div className="flex flex-col gap-2 text-white/90 w-[90%] lg:text-lg md:text-base text-sm font-manrope">
                            <a href="/join-us" className="hover:text-[#ca7b28] transition-colors">
                                Make it happen
                            </a>
                            <a href="/contact-us" className="hover:text-[#ca7b28] transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl md:text-2xl lg:text-3xl md:mb-4 mb-3 lg:mb-6 font-staatliches font-normal">Quick Links</h4>
                        <div className="flex flex-col gap-2 text-white/90 w-[90%] lg:text-lg md:text-base text-sm font-manrope">
                            <a href="#" className="hover:text-[#ca7b28] transition-colors">
                                Home
                            </a>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 flex items-center justify-center border border-white rounded-full text-white hover:bg-[#ca7b28] hover:border-[#ca7b28] transition-all duration-300 ease-in-out text-xs md:text-sm lg:text-base">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 flex items-center justify-center border border-white rounded-full text-white hover:bg-[#ca7b28] hover:border-[#ca7b28] transition-all duration-300 ease-in-out text-xs md:text-sm lg:text-base">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xl md:text-2xl lg:text-3xl md:mb-4 mb-3 lg:mb-6 font-staatliches font-normal">Friends United</h4>
                        <div className="flex flex-col gap-2 text-white/90 w-[90%] lg:text-lg md:text-base text-sm font-manrope">
                            <a href="/our-story" className=" hover:text-[#ca7b28] transition-colors">
                                What We Stand For
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                <div className="flex flex-col md:flex-row items-center font-manrope lg:text-base md:text-sm text-xs justify-between gap-2 md:gap-0">
                    <p className="text-white">
                        &copy; {new Date().getFullYear()} Friends United. All rights reserved.
                    </p>
                    <p className="flex gap-2 text-white">
                        <a href="#" className="hover:text-[#ca7b28] transition-all duration-300 ease-in-out">Terms of Service</a>|
                        <a href="#" className="hover:text-[#ca7b28] transition-all duration-300 ease-in-out">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
