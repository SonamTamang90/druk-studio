import AuthForm from "@/components/forms/AuthForm";

const SignIn = () => {
  return (
    <AuthForm formType="SIGN_IN" defaultValues={{ email: "", password: "" }} />
  );
};

export default SignIn;
