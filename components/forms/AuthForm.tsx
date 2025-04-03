import Link from "next/link";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import ROUTES from "@/constants/routes";
import Image from "next/image";

const AuthForm = ({ formType, defaultValues }) => {
  const buttonText = formType === "SIGN_IN" ? "Sign in" : "Sign up";

  return (
    <form className="space-y-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-2.5">
          <h1 className="text-2xl font-bold text-white">{buttonText}</h1>

          {formType === "SIGN_IN" ? (
            <p className="text-white/40">
              Sign into your Druk UI account below.
            </p>
          ) : (
            <p className="text-white/40">Create a Druk UI account below.</p>
          )}
        </div>
        <Image
          width={50}
          height={50}
          src="/images/logo.png"
          alt="Druk Digital Logo"
        />
      </div>
      {Object.keys(defaultValues).map((field) => (
        <div key={field} className="flex flex-col gap-2.5">
          <Label name={field}>
            {field === "email"
              ? "Email Address"
              : field.charAt(0).toUpperCase() + field.slice(1)}
          </Label>
          <Input
            type={field}
            name={field}
            placeholder={
              field === "email"
                ? "Enter your email"
                : `${field.charAt(0).toUpperCase() + field.slice(1)}`
            }
          />
        </div>
      ))}

      <Button className="w-full">{buttonText}</Button>
      {formType === "SIGN_IN" ? (
        <p className="text-white">
          Don&apos;t have an account?{" "}
          <Link
            href={ROUTES.SIGN_UP}
            className="bg-gradient-to-r from-[#D7D794] to-[#F6FF7F] bg-clip-text font-semibold text-transparent"
          >
            Get Full Access
          </Link>
        </p>
      ) : (
        <p className="text-white">
          Already have a account?{" "}
          <Link
            href={ROUTES.SIGN_IN}
            className="bg-gradient-to-r from-[#D7D794] to-[#F6FF7F] bg-clip-text font-semibold text-transparent"
          >
            Sign in
          </Link>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
