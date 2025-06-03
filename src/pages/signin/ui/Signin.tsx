import { authApi } from "@/entities/user/api/auth";
import { AxiosError } from "axios";

export const Signin = () => {
  authApi
    .signin({ email: "admin@mail.ru", password: "1234" })
    .then((resp) => console.log(resp.data.message))
    .catch((error: AxiosError<{ error: string }>) =>
      console.log(error.response?.data.error),
    );
  return <h1>Sign in page</h1>;
};
