import { FormLayout } from "./layout/FormLayout";

export const SignupForm = () => {
  const signUpHandler = () => {
    console.log("signUpHandler");
  };

  return (
    <FormLayout
      buttonTitle="Sign up"
      onSubmit={signUpHandler}
      confirmField={true}
    />
  );
};
