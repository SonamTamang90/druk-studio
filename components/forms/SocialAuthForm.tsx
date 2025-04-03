"use client";

import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";
import toast from "react-hot-toast";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    const loadingToast = toast.loading(`Signing in with ${provider}`);
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
      toast.dismiss(loadingToast);
      toast.success("Successfully signed in");
    } catch (error) {
      console.log(error);

      toast.error(`Failed to sign in with ${provider}. Please try again.`);
    }
  };

  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      <Button
        variant="secondary"
        size="lg"
        className="flex flex-1 items-center gap-2"
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="Github logo"
          width={20}
          height={20}
          className="invert"
        />
        <span>Sign in with Github</span>
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="flex flex-1 items-center justify-center gap-2"
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="Github logo"
          width={20}
          height={20}
          className=""
        />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
