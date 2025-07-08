import { ROUTES } from "@/shared/router/constants";
import { FormLayout } from "./layout/FormLayout";
import { SignupFormSchema } from "../model/formSchema";
import { useSignup } from "../model/useSignup";

export const SignupForm = () => {
  const { signupHandler } = useSignup();
  return (
    <FormLayout
      buttonTitle="Sign up"
      onSubmit={signupHandler}
      confirmField={true}
      link={{ to: ROUTES.SIGNIN, title: "Sign in" }}
      schema={SignupFormSchema}
    />
  );
};
