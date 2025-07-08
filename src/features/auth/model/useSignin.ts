import { authApi } from "@/entities/user";
import type { AxiosError } from "axios";
import { z } from "zod";
import { SigninFormSchema } from "./formSchema";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/router/constants";
import { toast } from "sonner";

export const useSignin = () => {
  const navigate = useNavigate();
  const signinHandler = async (data: z.infer<typeof SigninFormSchema>) => {
    console.log("signinHandler", data);
    try {
      throw new Error();
      await authApi.signin(data);
      navigate(ROUTES.HOME);
    } catch (error) {
      toast.error("Signin failed");
    }
    //   authApi
    // .signup({ email: "admin@mail.ru", password: "1234" })
    // .then((resp) => console.log(resp.data))
    // .catch((error: AxiosError<{ error: string }>) => {
    //   console.log(error.response?.data.error);
    // });
  };
  return { signinHandler };
};
