import { FormLayout } from "./layout/FormLayout";

export const SigninForm = () => {
  const signIpHandler = () => {
    console.log("signIpHandler");
  };

  return <FormLayout buttonTitle="Sign in" onSubmit={signIpHandler} />;
};
