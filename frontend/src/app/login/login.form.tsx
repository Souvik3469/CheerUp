"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { loginUser } from "@/api";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be long",
  }),
});
function LoginForm() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    setButtonDisabled(true);
    try {
      const response = await loginUser(formData);
      const { data } = response;
      if (response.status === 200) {
        localStorage.setItem("token", data.message.accessToken);
        //  showToast("Login Successful", "success");
        router.push("/");
      }
      form.reset();
      //setApiError(null);
    } catch (err) {
      //setApiError("Please verify your credentials");
      // showToast("Invalid Credentials", "error");
      setButtonDisabled(false);
    }
  };
  return (
    <div className="w-1/2 my-auto mx-auto flex flex-col gap-10">
      <div className="text-4xl font-semibold">Welcome Back</div>
      <div className="flex flex-col font-semibold">
        <div className="text-blue-600 text-2xl font-bold">Sign In</div>
        <div>
          Don't have an account ? <Link href="/login">Register</Link>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="flex justify-between">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage>
                  <FormDescription>
                    Please provide a strong password.
                    <br />
                  </FormDescription>
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" disabled={buttonDisabled}>
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
