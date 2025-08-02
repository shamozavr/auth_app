import { authApi } from "@/entities/user/api/auth";
import { SigninForm, withCheckAuth } from "@/features/auth";

import { Button } from "@/shared/ui/button";
import { FormPageLayout } from "@/shared/ui/layouts/FormPageLayout";
import { AxiosError } from "axios";

// export const Signin = () => {
//   return <FormPageLayout title="Sign in" form={<SigninForm />} />;
// };

export const Signin = withCheckAuth(() => {
  return <FormPageLayout title="Sign in" form={<SigninForm />} />;
});

// const Signin = () => {
//   return <FormPageLayout title="Sign in" form={<SigninForm />} />;
// };

// export const ProtecedSignin = withCheckAuth(SigninComp);
