import { LoginFormComponent } from "@/components/auth/LoginFormComponent";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - Login",
  "Sign in to access your M2 account.",
);

export default function LoginPage() {
  return (
    <div>
      <LoginFormComponent />
    </div>
  );
}
