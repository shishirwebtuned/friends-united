"use client";

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export function PaypalProvider({ children }: { children: React.ReactNode }) {
    return (
        <PayPalScriptProvider
            options={{
                clientId: "AXz60-_W0ewQIZauIpd9TAxq0rr0LOM2LaxZRyqiMC5LbaOs2VppHm42S9xa28Vk_NA-TsXYTUJUoxEa",
                currency: "AUD",
            }}
        >
            {children}
        </PayPalScriptProvider>
    );
}
export default PaypalProvider;