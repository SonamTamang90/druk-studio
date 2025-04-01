import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Druk Digital Web Studio",
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
        className={`${inter.variable} ${geistMono.variable} relative min-h-screen bg-zinc-950 antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
