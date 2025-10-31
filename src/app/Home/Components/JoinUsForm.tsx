"use client";

import CustomButton from "@/Components/CustomButton";
import { paddingX } from "@/data/paddingData";
import React, { useState } from "react";
import { motion } from "framer-motion";


const JoinUsForm = () => {
    const [step, setStep] = useState(1);
    const [monthlySupport, setMonthlySupport] = useState(0);
    const [annualSupport, setAnnualSupport] = useState(0);

    const total = monthlySupport + annualSupport;

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const progress = (step / 4) * 100;
    return (
        <section className={`${paddingX} py-16`}>
            <div className="">
                <div className="joinus-gradient md:p-8 sm:p-7 p-6 lg:p-9 xl:p-10 rounded-[30px]">
                    {/* Section Title */}
                    <div className="text-center mb-8">
                        <h3 className="text-white md:text-sm text-xs lg:text-base font-semibold uppercase inline-block font-lato">Become One of the super powerful voices </h3>
                        <h1 className="text-3xl md:text-4xl mt-4 font-normal lg:text-5xl font-staatliches text-black">
                            Join Us                        </h1>
                    </div>

                    <form className="space-y-6">
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block font-medium mb-1 text-[#212529]">
                                        First Name*
                                    </label>
                                    <input type="text" placeholder="First Name" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-1 text-[#212529]">
                                        Last Name*
                                    </label>
                                    <input type="text" placeholder="Last Name" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-1 text-[#212529]">
                                        Email*
                                    </label>
                                    <input type="email" placeholder="Email" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Address Info */}
                        {step === 2 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-1 text-[#212529]">
                                        Street Address*
                                    </label>
                                    <input type="text" placeholder="Street Address" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-1 text-[#212529]">
                                        City
                                    </label>
                                    <input type="text" placeholder="City" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                </div>
                                <div>
                                    <label className="block font-medium mb-1 text-[#212529]">
                                        ZIP / Postal Code
                                    </label>
                                    <input type="text" placeholder="ZIP / Postal Code" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Support Options */}
                        {step === 3 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-medium mb-3 text-[#212529]">Monthly Support</label>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="monthlySupport" value="50" onChange={(e) => setMonthlySupport(Number(e.target.value))} />
                                            <span>$50</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="monthlySupport" value="100" onChange={(e) => setMonthlySupport(Number(e.target.value))} />
                                            <span>$100</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium mb-3 text-[#212529]">Annual Support</label>
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="annualSupport" value="500" onChange={(e) => setAnnualSupport(Number(e.target.value))} />
                                            <span>$500</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" name="annualSupport" value="1000" onChange={(e) => setAnnualSupport(Number(e.target.value))} />
                                            <span>$1000</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <p className="font-semibold text-[#212529]">Total: ${total}</p>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Review & Submit */}
                        {step === 4 && (
                            <div className="text-center space-y-4">
                                <p className="text-[#212529] font-semibold">Please review your information before submitting.</p>
                                <CustomButton btnPadding="less" buttonType="filled-outlined" label="Submit" type="submit" />
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-6">
                            {step > 1 ?
                                (<button
                                    type="button" className="text-gray-700 hover:text-[#ca7b28] cursor-pointer"
                                    onClick={prevStep}>
                                    Back
                                </button>
                                ) : (
                                    <div />
                                )}

                            {step < 4 && (
                                <button
                                    type="button" className="text-white bg-[#ca7b28] px-6 py-2 rounded-full hover:bg-[#d4861f] cursor-pointer" onClick={nextStep}>
                                    Next
                                </button>
                            )}
                        </div>

                        {/* Progress */}
                        <div className="w-full bg-gray-200 h-2 rounded-full mt-6">
                            <motion.div className="bg-[#ca7b28] h-2 rounded-full" initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            ></motion.div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default JoinUsForm
