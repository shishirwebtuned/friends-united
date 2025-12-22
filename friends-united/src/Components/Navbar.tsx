"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { navLinksData } from "@/data/data";
import { paddingX } from "@/data/paddingData";
import { IoMenu } from "react-icons/io5";
import Drawer from "./Drawer";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // useEffect(() => {
    //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const handleMouseEnter = (index: number) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        setOpenDropdownIndex(index);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setOpenDropdownIndex(null);
        }, 150);
    };

    return (
        // <nav
        //     className={` ${paddingX} relative top-0 left-0 w-full z-50 transition-colors h-full duration-300 ${isScrolled ? "bg-black/70" : "bg-[white]"
        //         }`}
        // >

        <nav
            className={` ${paddingX} relative top-0 left-0 w-full z-50 transition-colors h-full duration-300 bg-[white]}`}
        >

            <div className="flex items-center w-full h-full justify-between py-1 px-0">
                <Link href="/" className="">
                    {/* <Image
                        src="images/logo.svg"
                        alt="Logo"
                        width={220}
                        height={70}
                        className="w-[140px] sm:w-[160px] md:w-[170px] lg:w-[200px] xl:w-[240px]"
                    /> */}
                    <img
                        src="images/logo.svg"
                        alt="Logo"
                        width={220}
                        height={70}
                        className="w-[140px] sm:w-[160px] md:w-[170px] lg:w-[200px] xl:w-[210px]"
                    />
                </Link>

                <ul className="hidden md:flex items-center h-full xl:space-x-12 lg:space-x-10 space-x-5">
                    {navLinksData.map((link, index) => (
                        <li
                            key={index}
                            className="relative cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {link.dropdown ? (
                                <>
                                    <button className="flex items-center gap-1 text-xs lg:text-sm xl:text-[17px] font-medium uppercase text-[#1b1b1b] hover:text-[#D1792C] transition cursor-pointer">
                                        {link.title} <FaAngleDown className="mt-[2px]" />
                                    </button>

                                    {openDropdownIndex === index && (
                                        <div className="absolute left-0 mt-7 w-64 xl:w-72 rounded-sm bg-[#D1792C] text-white shadow-lg md:text-sm text-xs lg:text-base py-2">
                                            {link.dropdown.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.href}
                                                    className="block px-4 py-1 hover:translate-x-2 transition"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.href ?? "#"}
                                    className="text-xs lg:text-sm xl:text-[17px] font-medium uppercase text-[#1b1b1b] hover:text-[#D1792C] transition"
                                >
                                    {link.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <CustomButton btnPadding="more" label="Join Us Today" buttonType="filled-outlined" href="/join-us" />
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <IoMenu className="sm:w-7 sm:h-7 h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </div>

            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} width="w-[70%]">
                <MobileNavbar onClose={() => setIsOpen(false)} />
            </Drawer>
        </nav>
    );
}

