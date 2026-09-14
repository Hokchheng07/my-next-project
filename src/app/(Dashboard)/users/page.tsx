import AnimatedTextGradientMotion from "@/components/shadcn-space/animated-text/animated-text-02";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - Users",
  "View and manage users in the M2 dashboard.",
);

export default function UserPage() {
  return (
    <div>
      User page in dashboard
      <AnimatedTextGradientMotion />
    </div>
  );
}
