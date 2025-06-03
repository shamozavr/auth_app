import { authApi } from "@/entities/user/api/auth";
import { Button } from "@/shared/ui/button";
import { AxiosError } from "axios";

Button;

export function App() {
  // api.get("/").then((resp) => console.log(resp));
  // signin({ email: "test@mail.ru", password: "123" });
  // authApi
  //   .signin({ email: "test@mail.ru", password: "123" })
  //   .then((resp) => console.log(resp.data));
  authApi
    .signin({ email: "admin@mail.ru", password: "1234" })
    .then((resp) => console.log(resp.data.message))
    .catch((error: AxiosError<{ error: string }>) =>
      console.log(error.response?.data.error),
    );
  return (
    <div>
      <h1>Hello world</h1>
      <Button size={"lg"} className="text-black-800">
        Button
      </Button>
    </div>
  );
}
