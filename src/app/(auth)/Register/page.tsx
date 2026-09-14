import React from "react";
import { RegisterFormComponent } from "@/components/auth/RegisterFormComponent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - Register",
  "Create an account to get started with M2.",
);

export default function RegisterPage() {
  return (
    <div>
      <RegisterFormComponent />
    </div>
  );
}
