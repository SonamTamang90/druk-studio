import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import GridLines from "@/components/layouts/GridLines";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${inter.variable} bg-dark-900 relative min-h-screen text-sm antialiased`}
        >
          <GridLines />
          {children}
          <Toaster position="top-right" />
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
