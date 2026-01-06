"use client";

import React, { use } from "react";
import SectionHeader from "@/Components/SectionHeader";
import { paddingX } from "@/data/paddingData";
import { motion } from "framer-motion";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axiosinstance";
import { client } from "@/lib/sanity.client";
// export const revalidate = 60; // seconds

const Page = () => {
    const [contactInfo, setContactInfo] = React.useState<{ email?: string; phone?: string; address?: string }>({});

    React.useEffect(() => {
        client.fetch(`*[_type == "setting"][0]{
            email,
            phone,
            address
        }`).then((data) => {
            setContactInfo(data || {});
        });
    }, []);

    const [submitSuccess, setSubmitSuccess] = React.useState<boolean | null>(null);
    const [message, setMessage] = React.useState<string>('');
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
    const inationitialValues = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
    };
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });
    const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
        setIsSubmitting(true);
        setSubmitSuccess(null);
        setMessage("");
        try {
            await axiosInstance.post('/contacts', values);
            setSubmitSuccess(true);
            setMessage('Your message has been sent successfully.');
            resetForm();
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setSubmitSuccess(false);
            setMessage('Failed to send your message. Please try again.');
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
            setTimeout(() => {
                setSubmitSuccess(null);
                setMessage('');
            }, 3000);
        }
    };

    return (
        <div className={`${paddingX} py-10 md:py-12 w-full md:gap-4 gap-7 flex md:flex-row flex-col items-center`}>
            {/* Section Header */}
            <div className="w-full md:w-[42%] flex flex-col md:items-start items-center justify-center text-center md:text-start px-2 md:px-0">
                <div>
                    <SectionHeader
                        title="Contact Us"
                        align="left"
                    />

                    <motion.p initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-staatliches font-medium lg:text-2xl md:text-xl text-lg text-[#ca7b28] md:-mt-1 -mt-1">
                        We’d love to hear from you
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="md:mt-4 mt-4 md:text-base lg:text-lg text-left text-black space-y-1 md:space-y-1.5 leading-relaxed">
                            <p className="font-lato text-sm md:text-base lg:text-lg">
                                Email:
                                <a
                                    href="mailto:support@friendsunited.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 font-manrope font-semibold text-[#ca7b28] hover:underline hover:text-[#b56d21] transition-colors "
                                >
                                    {contactInfo.email || ''}
                                </a>
                            </p>
                            {contactInfo?.phone &&
                                <p className="font-lato text-sm md:text-base lg:text-lg">
                                    Phone:
                                    <a
                                        href="tel:+61400123456"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-1 font-manrope font-semibold text-[#ca7b28] hover:underline hover:text-[#b56d21] transition-colors"
                                    >
                                        {contactInfo.phone || ''}
                                    </a>
                                </p>
                            }
                            {contactInfo?.address &&
                                <p className="font-lato text-sm md:text-base lg:text-lg">
                                    Address:
                                    <a
                                        href="https://www.google.com/maps?q=123+Friends+United+Street,+Sydney,+Australia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-1 font-manrope font-semibold text-[#ca7b28] hover:underline hover:text-[#b56d21] transition-colors"
                                    >
                                        {contactInfo.address || ''}
                                    </a>
                                </p>
                            }
                        </motion.div>
                    </div>

                    <div className="flex pr-0 md:pr-4 py-2 md:py-4 mt-4 rounded-xl h-[310px] md:h-[360px] w-full overflow-hidden">
                        <video
                            src="/videos/contactus.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="object-cover h-full w-[95%] rounded-xl"
                        />

                    </div>
                </div>

            </div>


            {/* Contact Form */}
            <div className="md:w-[58%] w-full contactus-gradient backdrop-blur-lg rounded-2xl py-6 px-5 md:py-8 md:px-8 shadow-lg">
                <Formik

                    initialValues={inationitialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >

                    <Form className="md:space-y-5 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                            <div>
                                <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">First Name*</label>
                                <Field
                                    as="input"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] focus:ring-0 lg:text-base md:text-sm text-xs bg-white"
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
                            </div>

                            <div>
                                <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Last Name*</label>
                                <Field
                                    as="input"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] focus:ring-0 lg:text-base md:text-sm text-xs bg-white"
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
                            </div>
                        </div>

                        <div>
                            <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Phone Number*</label>
                            <Field
                                as="input"
                                name="phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                                className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] focus:ring-0 bg-white lg:text-base md:text-sm text-xs"
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <div>
                            <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Email*</label>
                            <Field
                                as="input"
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] bg-white focus:ring-0 lg:text-base md:text-sm text-xs"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <div>
                            <label className="block md:mb-2 mb-1.5 font-medium text-white lg:text-base md:text-sm text-xs">Message*</label>
                            <Field
                                as="textarea"
                                name="message"
                                placeholder="Your Message"
                                className="w-full px-3 py-2 md:px-4 md:py-[10px] rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca7b28] bg-white focus:ring-0 lg:text-base md:text-sm text-xs resize-none h-32"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <div className="flex  flex-col gap-3 items-center justify-end">
                            <button
                                type="submit"
                                className={`bg-[#d4861f] hover:bg-[#ca7b28] text-white font-semibold px-4 py-2  md:py-[10px] md:px-5 lg:px-6 shadow-xl lg:py-3 rounded-full lg:text-base md:text-sm text-xs transition-all duration-300 cursor-pointer ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Send Message'}
                            </button>

                            {submitSuccess !== null && (
                                <div className={`ml-4 text-sm ${submitSuccess ? 'text-green-500' : 'text-red-500'}`}>
                                    {message}
                                </div>
                            )}
                        </div>
                    </Form>
                </Formik>



            </div>

            {/* Optional Contact Info */}
        </div>


    );
};
export default Page;