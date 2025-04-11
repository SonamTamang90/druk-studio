"use client";
import Footer from "@/components/website/shared/Footer";
import Header from "@/components/website/shared/Header";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      <main className="prose-h1:text-white prose-h1:text-2xl prose-headings:text-white prose-p:text-white prose-p:max-w-2xl prose-p:mt-6 mx-auto mt-32 max-w-7xl px-8 lg:px-11">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
