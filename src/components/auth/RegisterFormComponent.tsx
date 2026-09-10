"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "next/navigation";
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
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters long.")
    .max(30, "Username cannot exceed 30 characters.")
    .regex(/^[a-zA-Z0-9_]+$/, "Use only letters, numbers, and underscores."),
  fullname: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters long.")
    .max(100, "Full name cannot exceed 100 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(20, "Password cannot exceed 20 characters.")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Must contain at least one number.")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character."),
});

type RegisterFormValues = z.infer<typeof formSchema>;

const fields = [
  { name: "fullname" as const, label: "Full name", type: "text", placeholder: "Koko Smith", autoComplete: "name" },
  { name: "username" as const, label: "Username", type: "text", placeholder: "koko_smith", autoComplete: "username" },
  { name: "email" as const, label: "Email", type: "email", placeholder: "koko@example.com", autoComplete: "email" },
  { name: "password" as const, label: "Password", type: "password", placeholder: "Create a strong password", autoComplete: "new-password" },
];

export function RegisterFormComponent() {
  const router = useRouter();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", fullname: "", email: "", password: "" },
  });

  async function onSubmit(data: RegisterFormValues) {
    try {
      const response = await fetch("https://sombobaeb.cheat.casa/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok){
        toast.success("Register succesfully !!! ")
        setTimeout(()=>{
          redirect("/Login")
        },4000)
      }
    } catch {
      toast.error("Unable to register. Please try again.");
    }
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className="mb-3 text-5xl">Register</CardTitle>
        <CardDescription>Create an account to gain full access to amazing things.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="register-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {fields.map(({ name, label, ...inputProps }) => (
              <Controller
                key={name}
                name={name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`register-${name}`}>{label}</FieldLabel>
                    <Input
                      {...field}
                      {...inputProps}
                      id={`register-${name}`}
                      aria-invalid={fieldState.invalid}
                      aria-describedby={fieldState.invalid ? `register-${name}-error` : undefined}
                    />
                    {fieldState.invalid && (
                      <FieldError id={`register-${name}-error`} errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            ))}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="register-form" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Creating account..." : "Register"}
        </Button>
      </CardFooter>
    </Card>
  );
}
