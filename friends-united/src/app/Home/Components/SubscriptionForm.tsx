import CustomButton from "@/Components/CustomButton";
import { paddingX } from "@/data/paddingData";
import React from "react";

const SubscriptionForm = () => {
    return (
        <section className={`${paddingX} py-16`}>
            <div className="">
                <div className="subscription-grdient md:p-8 sm:p-7 p-6 lg:p-9 xl:p-10 rounded-[30px]">
                    {/* Section Title */}
                    <div className="text-center mb-8">
                        <h3 className="text-white md:text-sm text-xs lg:text-base font-semibold uppercase inline-block font-lato">Become One of the super powerful voices </h3>
                        <h1 className="text-3xl md:text-4xl mt-4 font-normal lg:text-5xl font-staatliches text-black">
                            Join Us                        </h1>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 tracking-wide md:grid-cols-2 lg:grid-cols-3 font-lato gap-6 lg:text-base md:text-sm text-xs">
                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    First Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    Middle Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Middle Name"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    Last Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    Address*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Street Address"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>

                            <div>
                                <label className="block text-[#212529] font-medium mb-1">City</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    State / Province / Region
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1 text-[#212529]">
                                    ZIP / Postal Code
                                </label>
                                <input
                                    type="text"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 tracking-wide font-lato gap-6 lg:text-base md:text-sm text-xs">
                            <div>
                                <label className="block font-medium mb-2 text-[#212529]">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    defaultValue=""
                                    className="w-full border border-gray-300 px-4 py-2 md:px-5 md:py-3 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                >
                                    <option value="" disabled>
                                        Select a country
                                    </option>
                                    <option>Nepal</option>
                                    <option>Australia</option>

                                </select>
                            </div>

                            <div>
                                <label className="block font-medium mb-[3px] text-[#212529]">
                                    Date of Birth*
                                </label>
                                <input
                                    type="date"
                                    className="w-full mt-1 border border-gray-300 px-4 py-2 md:px-5 md:py-2.5 focus:outline-none bg-white focus:border-[#ca7b28] focus:ring-0"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 pt-2 md:grid-cols-2 gap-6 tracking-wide font-lato lg:text-base md:text-sm text-xs">
                            <div>
                                <label className="block font-medium mb-3 text-[#212529]">
                                    Monthly Support
                                </label>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="monthlySupport" />
                                        <span>$50</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="monthlySupport" />
                                        <span>Other Amount</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block font-medium mb-3 text-[#212529]">
                                    Annual Support
                                </label>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="annualSupport" />
                                        <span>$50</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="annualSupport" />
                                        <span>Other Amount</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="tracking-wide font-lato lg:text-base md:text-sm text-xs">
                            <label className="block font-medium mb-3 text-[#212529] ">
                                Total</label>
                            <p className="text-[#4E4E4E] font-semibold font-lato">$0.00</p>
                        </div>

                        {/* Credit Card */}
                        <div className="lg:text-sm md:text-xs text-[10px] tracking-wide font-lato">
                            <label className="block font-medium">Credit Card</label>
                            <div className="border border-red-500 text-red-500 p-3 mt-5">
                                The credit card field will unhide once the payment condition is
                                met.
                            </div>
                        </div>

                        <CustomButton btnPadding="less" buttonType="filled-outlined" label="Submit" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionForm;
