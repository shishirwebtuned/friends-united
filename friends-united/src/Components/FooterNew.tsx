'use client';

import React from "react";
import { client } from "@/lib/sanity.client";
export const revalidate = 60; // seconds
import { paddingX } from "@/data/paddingData";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa";


const FooterNew = () => {

    const [contactInfo, setContactInfo] = React.useState<{ socialLinks?: any[] }>({});

    React.useEffect(() => {
        client.fetch(`*[_type == "setting"][0]{
              socialLinks []
            }`).then((data) => {
            setContactInfo(data || {});
        });
    }, []);

    const socialIconMap: Record<string, React.ReactNode> = {
        FaFacebook: <FaFacebookF />,
        FaInstagram: <FaInstagram />,
        FaTwitter: <FaTwitter />,
        FaLinkedin: <FaLinkedin />,
        FaYoutube: <FaYoutube />,
        FaWhatsapp: <FaWhatsapp />,
        FaTiktok: <FaTiktok />,
    };

    return (
        <footer className={`bg-[#1d1d1d] text-white md:py-5 py-4 lg:py-6 ${paddingX}`}>
            <div className="px-4">

                <div className="w-full flex justify-center">
                    <div className="flex flex-row gap-8 max-w-5xl mx-auto text-left">

                        {/* <div className="">
                            <h4 className="text-xl md:text-2xl lg:text-3xl md:mb-4 mb-3 lg:mb-6 font-staatliches font-normal">
                                GET INVOLVED
                            </h4>

                            <div className="flex flex-col gap-2 text-white/90 w-[90%] lg:text-lg md:text-base text-sm font-manrope">
                                <a href="/our-story" className="hover:text-[#ca7b28] transition-colors">
                                    Our Story
                                </a>
                                <a href="/join-us" className="hover:text-[#ca7b28] transition-colors">
                                    Join Us
                                </a>
                                <a href="/contact-us" className="hover:text-[#ca7b28] transition-colors">
                                    Contact Us
                                </a>
                            </div>
                        </div> */}

                        <div className="flex flex-col
                        items-center">
                            <h4 className="text-xl md:text-2xl lg:text-3xl md:mb-3 mb-2 lg:mb-4 font-staatliches font-normal">
                                Quick Links
                            </h4>

                            <div className="flex gap-4 mt-2">
                                {contactInfo.socialLinks?.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6 flex items-center justify-center border border-white rounded-full text-white hover:bg-[#ca7b28] hover:border-[#ca7b28] transition-all duration-300 ease-in-out text-xs md:text-sm lg:text-base"
                                    >
                                        {socialIconMap[item.icon]}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                <hr className="my-5 border-gray-700" />

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 text-white font-manrope lg:text-base md:text-sm text-xs">
                    <div className="text-center md:text-left">
                        <p>
                            &copy; {new Date().getFullYear()} Friends United. All rights reserved.
                        </p>
                        <p className="text-white/70 mt-1">
                            Friends United Pty Ltd · ABN 73 686 033 223
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default FooterNew;
