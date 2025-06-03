import { authApi } from "@/entities/user/api/auth";
import { Button } from "@/shared/ui/button";

Button;

export function App() {
  // api.get("/").then((resp) => console.log(resp));
  // signin({ email: "test@mail.ru", password: "123" });
  authApi
    .signin({ email: "test@mail.ru", password: "123" })
    .then((resp) => console.log(resp.data));
  return (
    <div>
      <h1>Hello world</h1>
      <Button
        onClick={(): void => {
          console.log(123);
        }}
      >
        Add text
      </Button>
    </div>
  );
}
