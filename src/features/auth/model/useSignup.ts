// import { authApi } from "@/entities/user";
// import { AxiosError } from "axios";
// import { z } from "zod";
// import { SignupFormSchema } from "./formSchema";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "@/shared/router/constants";
// import { toast } from "sonner";
// import * as Cookies from "js-cookie";
// import type { ValidationFormFieldsTypes } from "../types";
// import { useState } from "react";

// export const useSignup = () => {
//   const [serverValidationErrors, setServerValidationErrors] =
//     useState<ValidationFormFieldsTypes | null>(null);
//   const navigate = useNavigate();

//   const signupHandler = async (data: z.infer<typeof SignupFormSchema>) => {
//     try {
//       const resp = await authApi.signup(data);
//       if (!resp.data.token) throw new Error("token not found");
//       Cookies.default.set("token", resp.data.token, {
//         expires: 1 / 24,
//       });
//       navigate(ROUTES.HOME);
//     } catch (err) {
//       const error = err as AxiosError<{
//         error: string | ValidationFormFieldsTypes;
//       }>;

//       if (error.response?.data.error instanceof Object) {
//         setServerValidationErrors(error.response?.data.error);
//       } else {
//         toast.error(error.response?.data.error);
//       }
//     }
//   };

//   return { signupHandler, serverValidationErrors };
// };
