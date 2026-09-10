"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Must contain @ symbol"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .max(20, { message: "Password cannot exceed 20 characters." })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Must contain at least one uppercase letter.",
    })
    .refine((val) => /[a-z]/.test(val), {
      message: "Must contain at least one lowercase letter.",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Must contain at least one number.",
    })
    .refine((val) => /[^A-Za-z0-9]/.test(val), {
      message: "Must contain at least one special character.",
    }),
});

export function LoginFormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const postData = async() =>{
      const res = await fetch("https://sombobaeb.cheat.casa/auth/login",
      {
        method: "POST",
        headers: {'Content-type' : "application/json"},
        body : JSON.stringify(data)
      });
      if (res.ok) {
        toast.success("Login Succesfully")
        setTimeout(()=>{
          redirect("/Product")
        })
      }
    }
    postData();
    
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className="text-5xl mb-3">Login</CardTitle>
        <CardDescription>
          Login to gain full access to amazing things
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Email</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="koko@gmail.com"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-description"
                    placeholder="I'm having an issue with the login button on mobile."
                    type="password"
                    aria-invalid={fieldState.invalid}
                  />
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          {/* <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button> */}
          <Button type="submit" form="form-rhf-demo">
            Login
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
