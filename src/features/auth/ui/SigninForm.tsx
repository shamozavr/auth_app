import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form.tsx";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailMin = 8;
const passwordMin = 4;
const passwordMax = 20;

const FormSchema = z.object({
  email: z
    .string()
    .email()
    .min(emailMin, {
      message: `Email must be at least ${emailMin} characters.`,
    }),
  password: z
    .string()
    .min(4, `Password must not be less than ${passwordMin} characters`)
    .max(10, `Password must not be more than ${passwordMax} characters`)
    .regex(/[A-Z]/, "Password must contain capital letters")
    .regex(/[a-z]/, "Password must contain lowercase letters")
    .regex(/[0-9]/, "Password must contain numeric characters"),
});

export const SigninForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = () => {
    console.log("Submit");
  };

  return (
    <div>
      <label htmlFor="">SigninForm</label>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn@mail.ru" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input placeholder="Shadcn1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
