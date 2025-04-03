import AuthForm from "@/components/forms/AuthForm";
import React from "react";

const SignUp = () => {
  return (
    <AuthForm
      defaultValues={{
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
      }}
    />
  );
};

export default SignUp;
