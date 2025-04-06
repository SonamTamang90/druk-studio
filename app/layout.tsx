import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Druk Digital Studio",
  description: "We create ui and templates to ship your idea faster",
  icons: {
    icon: "/images/logo.png",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-dark-900 text-sm antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
