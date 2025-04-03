import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-hero flex min-h-screen items-center justify-center bg-cover bg-center">
      <section className="rounded-md border border-white/5 bg-zinc-900 px-8 py-10 shadow sm:min-w-[520px]">
        {children}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-white/15" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-zinc-900 px-2 text-sm text-white/40">or</span>
          </div>
        </div>
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
