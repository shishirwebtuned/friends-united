import type { Metadata } from "next";
// @ts-ignore: CSS side-effect import has no type declarations
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PaypalProvider from "./provider";
import { Fira_Sans_Extra_Condensed, Manrope, Staatliches, Lato } from 'next/font/google';
import FooterNew from "@/Components/FooterNew";
import { Toaster } from "react-hot-toast";

const firaSansCondensed = Fira_Sans_Extra_Condensed({
  variable: "--font-firaSansCondensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const staatliches = Staatliches({
  variable: "--font-staatliches",
  subsets: ["latin"],
  weight: ["400"]
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
})


export const metadata: Metadata = {
  title: "Friends United",
  description: "Friends United are ordinary Australians citizens passionate about restoring Australia to its former glory of being once again the ‘Lucky Country’ and the ‘Envy of World’.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />

        <title>Friends United</title>

        <script
          type="text/javascript"
          src="https://sandbox.web.squarecdn.com/v1/square.js"
        ></script>

      </head>
      <body className={` ${firaSansCondensed.variable} ${manrope.variable} ${staatliches.variable} ${lato.variable}`}
      >

        <Navbar />
        <PaypalProvider>
          {children}
        </PaypalProvider>
        <FooterNew />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '8px',
              padding: '12px 16px',
              fontWeight: '500',
            },

            success: {
              style: {
                background: '#d1fae5',
                color: '#065f46',
              },
              iconTheme: {
                primary: '#10b981',
                secondary: '#ecfdf5',
              },
            },

            error: {
              style: {
                background: '#fee2e2',
                color: '#991b1b',
              },
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fef2f2',
              },
            },
          }}
        />

      </body>
    </html>
  );
}
