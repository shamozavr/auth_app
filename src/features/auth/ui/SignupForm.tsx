import { ROUTES } from "@/shared/router/constants";
import { FormLayout } from "./layout/FormLayout";
import { SignupFormSchema } from "../model/formSchema";
import { ROUTES as ROUTES_VALUES } from "@/shared/api/constants";
import { useAuth } from "../model/useAuth";
// import { useSignup } from "../model/useSignup";

export const SignupForm = () => {
  // const { signupHandler, serverValidationErrors } = useSignup();
  const { authHandler, serverValidationErrors } = useAuth(ROUTES_VALUES.SIGNUP);
  return (
    <FormLayout
      buttonTitle="Sign up"
      onSubmit={authHandler}
      confirmField={true}
      link={{ to: ROUTES.SIGNIN, title: "Sign in" }}
      schema={SignupFormSchema}
      serverValidationErrors={serverValidationErrors}
    />
  );
};
