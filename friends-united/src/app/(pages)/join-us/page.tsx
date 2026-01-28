import JoinUsForm from '@/app/Home/Components/JoinUsForm'
import { paddingX } from '@/data/paddingData'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import React from 'react'

const page = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Header Section */}
            <section className={`pt-10 md:pt-10 text-center ${paddingX}`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-staatliches text-[#ca7b28] mb-4">
                    Join The Movement
                </h1>
                {/* <p className="font-manrope font-medium text-sm md:text-base text-[black]/90 max-w-4xl mx-auto">
                    Be a part of something bigger. Fill out the form below to get involved and help us drive meaningful change together.
                </p> */}
            </section>

            {/* Form Section */}
            <div className='-mt-1'>
                <JoinUsForm />
            </div>

        </div>
    )
}

export default page
