import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import GridLines from "@/components/layouts/GridLines";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Druk Digital Studio",
  description: "We create ui and templates to ship your idea faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} relative min-h-screen bg-zinc-950 text-sm antialiased`}
      >
        <GridLines />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
