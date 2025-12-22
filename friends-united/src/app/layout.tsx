import type { Metadata } from "next";
// @ts-ignore: CSS side-effect import has no type declarations
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { PaypalProvider } from "./provider";


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
      </head>
      <body className="relative"
      >
        <PaypalProvider>
          <Navbar />
          {children}
          <Footer />
        </PaypalProvider>
      </body>
    </html>
  );
}
