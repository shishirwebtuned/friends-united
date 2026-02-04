"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { paddingX } from "@/data/paddingData";
import { IoMenu } from "react-icons/io5";
import Drawer from "./Drawer";
import MobileNavbar from "./MobileNavbar";
import { client } from '@/lib/sanity.client';

interface DropdownItem {
    label: string;
    href: string;
    order: number;
}

interface NavLink {
    title: string;
    href?: string;
    dropdown?: DropdownItem[];
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [navLinksData, setNavLinksData] = useState<NavLink[]>([]);

    useEffect(() => {
        // Fetch services to build dynamic dropdown
        client
            .fetch(`*[_type == "services"]{ title, link, order }`)
            .then((services) => {
                const dynamicNav = [
                    { title: "Our Story", href: "/our-story" },
                    {
                        title: "What We Stand For",
                        dropdown: services.map((s: any) => ({
                            label: s.title,
                            href: s.link,
                            order: s.order,
                        })),
                    },
                    { title: "Friends United 'Friend'", href: "/become-friend" },
                    { title: "Contact Us", href: "/contact-us" },
                ];
                setNavLinksData(dynamicNav);
            })
            .catch((error) => {
                console.error('Failed to load navigation:', error);
                // Fallback to static nav if fetch fails
                setNavLinksData([
                    { title: "Our Story", href: "/our-story" },
                    { title: "Friends United 'Friend'", href: "/become-friend" },
                    { title: "Contact Us", href: "/contact-us" },
                ]);
            });
    }, []);

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
            className={`${paddingX} sticky top-0 left-0 w-full z-50 transition-colors h-full shadow-md duration-300 bg-white }`}
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
                        className="w-[130px] sm:w-[150px] md:w-[170px] lg:w-[190px] xl:w-[200px]"
                    />
                </Link>

                <ul className="hidden md:flex items-center h-full xl:space-x-10 lg:space-x-9 space-x-4">
                    {navLinksData.map((link, index) => (
                        <li
                            key={index}
                            className="relative cursor-pointer flex items-center h-full"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {link.dropdown ? (
                                <>
                                    <button className="flex items-center gap-1 text-[11px] lg:text-[14px] xl:text-[17px] font-medium uppercase text-[#1b1b1b] hover:text-[#D1792C] transition cursor-pointer">
                                        {link.title} <FaAngleDown className="mt-[2px]" />
                                    </button>

                                    {openDropdownIndex === index && (
                                        <div className="absolute left-0 top-full z-50 mt-4 w-56 lg:w-64 xl:w-72 rounded-sm bg-[#D1792C] text-white shadow-lg md:text-xs text-[xs] lg:text-base py-2">
                                            {link.dropdown?.slice().sort((a, b) => a.order - b.order).map((item, idx) => (
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
                                    className="flex items-center h-full text-[11px] lg:text-[14px] xl:text-[17px] font-medium uppercase text-[#1b1b1b] hover:text-[#D1792C] transition"
                                >
                                    {link.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="hidden md:block">
                    <CustomButton btnPadding="more" label="Join Us"
                        capitalize buttonType="filled-outlined" href="/join-us" />
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

