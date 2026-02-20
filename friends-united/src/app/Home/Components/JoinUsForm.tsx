"use client";

import { paddingX } from "@/data/paddingData";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Stepper from "@/Components/Stepper";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";



const JoinUsForm = () => {
    const [step, setStep] = useState(1);
    const [monthlySupport, setMonthlySupport] = useState(2.75);
    const [annualSupport, setAnnualSupport] = useState(0);
    const [memberEmail, setMemberEmail] = useState("");
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

    const router = useRouter();
    const total = monthlySupport + annualSupport;

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => {
        setStep((prev) => Math.max(prev - 1, 1));
        setMemberEmail("");
        setPaymentCompleted(false);
    }

    const monthlyUrl = process.env.NEXT_PUBLIC_SQUARE_MONTHLY_URL || "https://square.link/u/VesqyMYH?src=embed";

    const annualUrl = process.env.NEXT_PUBLIC_SQUARE_ANNUAL_URL || "https://square.link/u/FuVO4Em2?src=embed";

    useEffect(() => {
        if (step !== 3 || !memberEmail) return;

        let interval: number;
        let retries = 0;
        const MAX_RETRIES = 30;
        const checkPaymentStatus = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/payments/member/status`, {
                    params: { email: memberEmail },
                });

                if (response.data.success && response.data.data.paymentStatus === "completed") {
                    setPaymentCompleted(true);
                    setStep(4);
                    clearInterval(interval);
                    toast.success("Payment completed! Welcome aboard.");
                } else {
                    retries++;
                    if (retries >= MAX_RETRIES) {
                        clearInterval(interval);
                        toast.error("Payment not completed after maximum retries.");
                    }
                }
            } catch (err) {
                console.error(err);
                retries++;
                if (retries >= MAX_RETRIES) clearInterval(interval);
            }
        };

        interval = window.setInterval(checkPaymentStatus, 4000);
        return () => clearInterval(interval);
    }, [step, memberEmail]);


    const handlePaymentClick = async (values: any) => {

        try {

            setIsPaymentProcessing(true);

            const response = await axios.post(
                `${API_BASE_URL}/payments/member`,
                {
                    ...values,
                    supportType: monthlySupport > 0 ? "monthly" : "annual",
                    amount: total
                }
            );

            if (!response.data.success) {
                console.error("Failed to start membership");
                setIsPaymentProcessing(false);
                return;
            }

            const url =
                monthlySupport === 2.75
                    ? monthlyUrl : annualUrl;

            window.open(url, "_blank");
            setMemberEmail(values.email);
            setIsPaymentProcessing(false);

        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again.");
            setIsPaymentProcessing(false);
        }
    };

    const getValidationSchema = (step: number) => {
        return Yup.object({
            firstName: Yup.string().required("First name is required"),
            middleName: Yup.string(),
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phoneNumber: Yup.string().required("Phone Number is required"),
            streetAddress:
                step === 2
                    ? Yup.string().required("Street address is required")
                    : Yup.string(),
            suburb: Yup.string(),
            state: Yup.string(),
            zip: Yup.string(),
            country: Yup.string(),
            dateOfBirth: Yup.string().required("Date of Birth is required"),
        });
    };







    return (
        <section className={`${paddingX} py-12`}>
            <div>
                <div className="joinus-gradient md:p-6 sm:p-6 p-5 lg:p-7 xl:p-8 rounded-[30px]">
                    <div className="text-center mb-6">
                        <h3 className="text-white md:text-sm text-xs lg:text-base font-semibold uppercase inline-block font-lato">
                            Become One of the super powerful voices demanding change
                        </h3>
                        <div className="flex flex-col items-center justify-center w-full">
                            <h2 className="text-xl md:text-2xl mt-4 font-semibold text-[#212529] font-manrope pb-1">
                                {step === 1 && "Personal Details"}
                                {step === 2 && "Address Information"}
                                {step === 3 && "Payment"}
                                {step === 4 && "Success"}
                            </h2>
                            <div className="w-[15%] mb-1 h-0.5 rounded-full bg-[#ca7b28]/80"></div>
                        </div>
                    </div>

                    <Formik
                        initialValues={{
                            firstName: "",
                            middleName: "",
                            lastName: "",
                            email: "",
                            phoneNumber: "",
                            streetAddress: "",
                            suburb: "",
                            state: "",
                            zip: "",
                            country: "",
                            dateOfBirth: "",
                        }}
                        validationSchema={getValidationSchema(step)}
                        onSubmit={() => { }}
                    >
                        {({ validateForm, setTouched, values, isSubmitting }) => (
                            <Form className="space-y-6 font-manrope">
                                {/* Step 1 - Personal Details */}
                                {step === 1 && (
                                    <div className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">
                                                    First Name*
                                                </label>
                                                <Field
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                                />
                                                <ErrorMessage
                                                    name="firstName"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">
                                                    Middle Name
                                                </label>
                                                <Field
                                                    name="middleName"
                                                    placeholder="Middle Name"
                                                    className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">
                                                    Last Name*
                                                </label>
                                                <Field
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                                />
                                                <ErrorMessage
                                                    name="lastName"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">
                                                    Email*
                                                </label>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">
                                                    Phone Number*
                                                </label>
                                                <Field
                                                    name="phoneNumber"
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                                />
                                                <ErrorMessage
                                                    name="phoneNumber"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">
                                                    Date of Birth*
                                                </label>
                                                <Field
                                                    name="dateOfBirth"
                                                    type="date"
                                                    className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                                />
                                                <ErrorMessage
                                                    name="dateOfBirth"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2 - Address */}
                                {step === 2 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">
                                                Street Address*
                                            </label>
                                            <Field
                                                name="streetAddress"
                                                placeholder="Street Address"
                                                className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                            />
                                            <ErrorMessage
                                                name="streetAddress"
                                                component="div"
                                                className="text-red-500 text-sm mt-1"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">
                                                Suburb
                                            </label>
                                            <Field
                                                name="suburb"
                                                placeholder="Suburb"
                                                className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">
                                                State
                                            </label>
                                            <Field
                                                name="state"
                                                placeholder="State"
                                                className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">
                                                ZIP / Postal Code
                                            </label>
                                            <Field
                                                name="zip"
                                                placeholder="ZIP / Postal Code"
                                                className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">
                                                Country
                                            </label>
                                            <Field
                                                name="country"
                                                placeholder="Country"
                                                className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Step 3 - Payment */}
                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="border border-gray-300 p-6 rounded-lg hover:border-[#ca7b28] transition-colors">
                                                <label className="flex items-center space-x-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={monthlySupport === 2.75}
                                                        onChange={() => {
                                                            setMonthlySupport(2.75);
                                                            setAnnualSupport(0);
                                                            setPaymentCompleted(false);
                                                        }}
                                                        className="w-5 h-5 text-[#ca7b28]"
                                                    />
                                                    <div>
                                                        <div className="font-semibold text-lg">Monthly Support</div>
                                                        <div className="text-2xl font-bold text-[#ca7b28]">$2.75</div>
                                                        <div className="text-sm text-gray-600">Billed monthly</div>
                                                    </div>
                                                </label>
                                            </div>

                                            <div className="border border-gray-300 p-6 rounded-lg hover:border-[#ca7b28] transition-colors">
                                                <label className="flex items-center space-x-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        checked={annualSupport === 33}
                                                        onChange={() => {
                                                            setAnnualSupport(33);
                                                            setMonthlySupport(0);
                                                            setPaymentCompleted(false);
                                                        }}
                                                        className="w-5 h-5 text-[#ca7b28]"
                                                    />
                                                    <div>
                                                        <div className="font-semibold text-lg">Annual Support</div>
                                                        <div className="text-2xl font-bold text-[#ca7b28]">$33</div>
                                                        <div className="text-sm text-gray-600">Billed annually</div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        {total > 0 && (
                                            <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-lg font-semibold">Total Amount:</span>
                                                    <span className="text-2xl font-bold text-[#ca7b28]">
                                                        ${total.toFixed(2)}
                                                    </span>
                                                </div>

                                                {!paymentCompleted && (
                                                    <button
                                                        type="button"
                                                        className={`w-full text-white px-6 py-3 rounded-md font-semibold transition-colors 
                    ${isPaymentProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-[#006aff] hover:bg-[#0056cc]"}`}
                                                        onClick={() => handlePaymentClick(values)}
                                                        disabled={isPaymentProcessing}
                                                    >
                                                        {isPaymentProcessing ? "Processing..." : `Pay $${total.toFixed(2)} Now`}
                                                    </button>
                                                )}

                                                {memberEmail && !paymentCompleted && (
                                                    <p className="text-center text-sm text-gray-500 animate-pulse mt-3">
                                                        ⏳ Waiting for payment confirmation...
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Step 4 - Success */}
                                {step === 4 && (
                                    <div className="text-center space-y-4 py-8">
                                        <div className="text-6xl">🎉</div>
                                        <h3 className="text-2xl font-bold text-[#212529]">
                                            Welcome Aboard!
                                        </h3>
                                        <p className="text-lg text-gray-600">
                                            You've successfully joined as a member.
                                        </p>
                                        <button
                                            type="button"
                                            className="mt-6 text-white bg-[#ca7b28] px-8 py-3 rounded-full hover:bg-[#d4861f] font-semibold transition-colors"
                                            onClick={() => router.push("/")}
                                        >
                                            Go to Homepage
                                        </button>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                {step < 4 && (
                                    <div className="flex mt-8 items-center">
                                        {step > 1 ? (
                                            <button
                                                type="button"
                                                className="text-gray-700 hover:text-[#ca7b28] font-medium transition-colors"
                                                onClick={prevStep}
                                            >
                                                ← Back
                                            </button>
                                        ) : (
                                            <div />
                                        )}

                                        <div className="ml-auto">

                                            {step < 3 ? (
                                                <button
                                                    type="button"
                                                    className="text-white bg-[#ca7b28] hover:bg-[#d4861f] px-8 py-2 rounded-full font-semibold transition-colors"
                                                    onClick={async () => {
                                                        const errors = await validateForm();
                                                        let touchedFields: { [key: string]: boolean } = {};

                                                        if (step === 1) {
                                                            touchedFields = {
                                                                firstName: true,
                                                                lastName: true,
                                                                email: true,
                                                                phoneNumber: true,
                                                                dateOfBirth: true,
                                                            };
                                                        } else if (step === 2) {
                                                            touchedFields = { streetAddress: true };
                                                        }

                                                        setTouched(touchedFields, true);

                                                        let stepHasError = false;
                                                        if (step === 1) {
                                                            stepHasError =
                                                                !!errors.firstName ||
                                                                !!errors.lastName ||
                                                                !!errors.email ||
                                                                !!errors.phoneNumber ||
                                                                !!errors.dateOfBirth;
                                                        }
                                                        if (step === 2) {
                                                            stepHasError = !!errors.streetAddress;
                                                        }

                                                        if (!stepHasError) nextStep();
                                                    }}
                                                >
                                                    Next →
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                )}

                                <div className="relative mt-6">
                                    <Stepper currentStep={step} totalSteps={4} />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default JoinUsForm;