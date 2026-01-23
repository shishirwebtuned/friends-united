"use client";
import Link from "next/link";
import { navLinksData } from "@/data/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import CustomButton from "./CustomButton";

interface MobileNavProps {
    onClose: () => void;
}

const MobileNavbar: React.FC<MobileNavProps> = ({ onClose }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col h-full text-black">
            <nav className="flex flex-col justify-between h-full items-center text-base font-manrope pt-2 pb-3">
                <div className="flex flex-col items-start justify-start space-y-1 w-full">
                    {navLinksData.map((link, index) =>
                        link.dropdown ? (
                            <div key={index} className="w-full">
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="w-full flex justify-between px-2 items-center font-medium text-left text-[#1b1b1b] hover:text-[#D1792C] hover:bg-[#D1792C]/15 rounded-md cursor-pointer transition-all ease-in-out duration-300 py-2"
                                >
                                    {link.title}
                                    <span
                                        className={`transform transition-all ease-in-out duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                            }`}
                                    >
                                        <IoIosArrowDown className="text-base" />
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex space-y-2 flex-col pl-4 overflow-hidden"
                                        >
                                            {link.dropdown.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.href}
                                                    onClick={onClose}
                                                    className="py-1 text-sm text-[#1b1b1b] hover:text-[#D1792C] hover:font-medium transition-all ease-in-out duration-300"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                key={index}
                                href={link.href ?? "#"}
                                onClick={onClose}
                                className="w-full px-2 py-2 text-left font-medium text-[#1b1b1b] hover:bg-[#D1792C]/20 hover:text-[#D1792C] rounded-md cursor-pointer transition-all ease-in-out duration-300"
                            >
                                {link.title}
                            </Link>
                        )
                    )}
                </div>
                <Link
                    href="#"
                    onClick={onClose}
                    className="bg-[#ca7b28] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#b85f1f] transition-colors mt-4"
                >
                    Join Us Today
                </Link>

                <div className="p-4 rounded-lg text-center space-y-2 font-lato bg-[#D1792C]/20 w-full">
                    <a href="mailto:hello@friendsunited.com.au" className="block hover:text-[#D1792C] transition-colors">
                        hello@friendsunited.com.au
                    </a>
                    {/* <a href="tel:0404467516" className="block hover:text-[#D1792C] transition-colors">
                        0404 467 516
                    </a> */}
                </div>
            </nav>
        </div>
    );
};

export default MobileNavbar;
