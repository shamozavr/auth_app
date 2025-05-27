import { api } from "@/shared/api/axios-instance";
import { Button } from "@/shared/ui/button";

Button;

export function App() {
  api.get("/").then((resp) => console.log(resp));
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
