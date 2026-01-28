"use client";

import CustomButton from "@/Components/CustomButton";
import { paddingX } from "@/data/paddingData";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Stepper from "@/Components/Stepper";

const JoinUsForm = () => {
    const [step, setStep] = useState(1);
    const [monthlySupport, setMonthlySupport] = useState(0);
    const [annualSupport, setAnnualSupport] = useState(0);
    // const [monthlySupportCustom, setMonthlySupportCustom] = useState(0);
    // const [annualSupportCustom, setAnnualSupportCustom] = useState(0);
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    const total = (monthlySupport) + (annualSupport);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
    const progress = (step / 4) * 100;

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
                        {/* <h1 className="text-3xl md:text-4xl mt-3 font-normal lg:text-5xl font-staatliches text-black">
                            Join Us
                        </h1> */}
                        <div className="flex flex-col items-center justify-center w-full">
                            <h2 className="text-xl md:text-2xl mt-4 font-semibold text-[#212529] font-manrope pb-1">
                                Personal Details
                            </h2>
                            <div className="w-[15%] mb-1 h-[2px] rounded-full bg-[#ca7b28]/80"></div>
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
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form values:", values);
                            console.log("Support amounts:", { monthlySupport, annualSupport, });
                            alert("Form submitted successfully!");

                            resetForm();
                            setMonthlySupport(0);
                            setAnnualSupport(0);
                            // setMonthlySupportCustom(0);
                            // setAnnualSupportCustom(0);
                            setPaymentCompleted(false);
                            setStep(1);
                        }}
                    >
                        {({ isValid, validateForm, setTouched }) => (
                            <Form className="space-y-6 font-manrope">

                                {/* Step 1 */}
                                {step === 1 && (
                                    <div className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">First Name*</label>
                                                <Field name="firstName" placeholder="First Name" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">Middle Name</label>
                                                <Field name="middleName" placeholder="Middle Name" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                                <ErrorMessage name="middleName" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">Last Name*</label>
                                                <Field name="lastName" placeholder="Last Name" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">Email*</label>
                                                <Field name="email" type="email" placeholder="Email" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">Phone Number*</label>
                                                <Field name="phoneNumber" type="tel" placeholder="Phone Number" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <label className="block font-medium mb-1 text-[#212529]">Date of Birth*</label>
                                                <Field name="dateOfBirth" type="date" placeholder="Date Of Birth" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                                <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>

                                        </div>
                                    </div>
                                )}

                                {/* Step 2 */}
                                {step === 2 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">Street Address*</label>
                                            <Field name="streetAddress" placeholder="Street Address" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                            <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">Suburb</label>
                                            <Field name="suburb" placeholder="Suburb" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">State</label>
                                            <Field name="state" placeholder="State" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">ZIP / Postal Code</label>
                                            <Field name="zip" placeholder="ZIP / Postal Code" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                        </div>
                                        <div>
                                            <label className="block font-medium mb-1 text-[#212529]">Country</label>
                                            <Field name="country" placeholder="Country" className="w-full mt-1 border border-gray-300 px-4 py-2 focus:outline-none bg-white focus:border-[#ca7b28]" />
                                        </div>
                                    </div>
                                )}

                                {/* Step 3 */}
                                {step === 3 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block font-medium mb-3 text-[#212529]">Monthly Support</label>
                                            <div className="space-y-4">
                                                <label className="flex items-center gap-2">
                                                    <input type="radio" name="monthlySupport" value="2.75" checked={monthlySupport === 2.75} onChange={(e) => {
                                                        setMonthlySupport(Number(e.target.value));
                                                        setAnnualSupport(0);
                                                    }} />
                                                    <span>$ 2.75</span>
                                                </label>
                                                {/* <label className="flex items-center gap-2">
                                                    <input type="radio" name="monthlySupport" value="100" checked={monthlySupport === 100} onChange={(e) => setMonthlySupport(Number(e.target.value))} />
                                                    <span>$ 5.00</span>
                                                </label> */}
                                                {/* <label className="flex items-center gap-2">
                                                    <input type="radio" name="monthlySupport" value="custom" checked={monthlySupportCustom > 0} onChange={() => setMonthlySupportCustom(0)} />
                                                    <span>Custom:</span>
                                                    <input type="number" placeholder="Enter amount" className="border border-gray-300 px-2 py-1 w-auto sm:w-36 focus:outline-none bg-white rounded-sm focus:border-[#ca7b28] pl-3" value={monthlySupportCustom > 0 ? monthlySupportCustom : ""} onChange={(e) => setMonthlySupportCustom(Number(e.target.value))} />
                                                </label> */}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block font-medium mb-3 text-[#212529]">Annual Support</label>
                                            <div className="space-y-4">
                                                <label className="flex items-center gap-2">
                                                    <input type="radio" name="annualSupport" value="33" checked={annualSupport === 33} onChange={(e) => {
                                                        setAnnualSupport(Number(e.target.value));
                                                        setMonthlySupport(0);
                                                    }} />
                                                    <span>$ 33</span>
                                                </label>
                                                {/* <label className="flex items-center gap-2">
                                                    <input type="radio" name="annualSupport" value="1000" checked={annualSupport === 1000} onChange={(e) => setAnnualSupport(Number(e.target.value))} />
                                                    <span>$ 60</span>
                                                </label> */}
                                                {/* <label className="flex items-center gap-2">
                                                    <input type="radio" name="annualSupport" value="custom" checked={annualSupportCustom > 0} onChange={() => setAnnualSupportCustom(0)} />
                                                    <span>Custom:</span>
                                                    <input type="number" placeholder="Enter amount" className="border border-gray-300 px-2 py-1 w-auto sm:w-36 focus:outline-none bg-white rounded-sm focus:border-[#ca7b28] pl-3" value={annualSupportCustom > 0 ? annualSupportCustom : ""} onChange={(e) => setAnnualSupportCustom(Number(e.target.value))} />
                                                </label> */}
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <p className="font-semibold text-[#212529]">
                                                Total: ${total}
                                            </p>

                                            {total > 0 && (
                                                <div className="mt-6 bg-[white] p-6 rounded-xl shadow-lg flex flex-col items-center">
                                                    <p className="text-[#212529] font-semibold mb-4 text-lg">Proceed to pay ${total}</p>
                                                    <PayPalButtons
                                                        style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay", tagline: false }}
                                                        createOrder={(data, actions) => {
                                                            if (!actions?.order) return Promise.reject("PayPal actions.order undefined");
                                                            return actions.order.create({
                                                                intent: "CAPTURE",
                                                                purchase_units: [{ amount: { currency_code: "AUD", value: total.toString() } }],
                                                            });
                                                        }}
                                                        onApprove={async (data, actions) => {
                                                            if (actions?.order) {
                                                                await actions.order.capture();
                                                                setPaymentCompleted(true);
                                                                alert("Payment successful!");
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Step 4 */}
                                {step === 4 && (
                                    <div className="text-center space-y-4">
                                        <p className="text-[#212529] font-semibold">Please review your information before submitting.</p>
                                        <CustomButton
                                            btnPadding="less"
                                            buttonType="filled-outlined"
                                            label="Submit"
                                            type="submit"
                                            disabled={!isValid || !paymentCompleted}
                                        />

                                        {(!isValid || !paymentCompleted) && (
                                            <p className="text-red-600 text-sm mt-2">
                                                {!paymentCompleted
                                                    ? "Please complete your payment before submitting."
                                                    : "Some fields are invalid or missing. Please check your information."}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex mt-6">
                                    {step > 1 ? (
                                        <button
                                            type="button"
                                            className="text-gray-700 cursor-pointer hover:text-[#ca7b28]"
                                            onClick={prevStep}
                                        >
                                            Back
                                        </button>
                                    ) : (
                                        <div className="w-24" />
                                    )}

                                    <div className="ml-auto">
                                        {step < 4 && (
                                            <button
                                                type="button"
                                                className="text-white cursor-pointer bg-[#ca7b28] px-6 py-2 rounded-full hover:bg-[#d4861f]"
                                                onClick={async () => {
                                                    const errors = await validateForm();


                                                    let touchedFields: { [key: string]: boolean } = {};
                                                    if (step === 1) {
                                                        touchedFields = { firstName: true, lastName: true, email: true };
                                                    } else if (step === 2) {
                                                        touchedFields = { streetAddress: true };
                                                    }

                                                    setTouched(touchedFields, true);

                                                    let stepHasError = false;

                                                    if (step === 1) {
                                                        stepHasError = !!errors.firstName || !!errors.lastName || !!errors.email;
                                                    }
                                                    if (step === 2) {
                                                        stepHasError = !!errors.streetAddress;
                                                    }
                                                    if (step === 3) {
                                                        stepHasError = total <= 0;
                                                    }

                                                    if (!stepHasError) nextStep();
                                                }}
                                            >
                                                Next
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                {/* <div className="w-full bg-[#ca7b28]/30 h-2 rounded-full mt-6">
                                    <motion.div className="bg-[#ca7b28] h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 100, damping: 20 }} />
                                </div> */}
                                <div className="relative">
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
