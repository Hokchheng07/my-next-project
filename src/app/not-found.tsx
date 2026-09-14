import AnimatedTypingMotion from "@/components/shadcn-space/animated-text/animated-text-03";
import React from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - Page Not Found",
  "The M2 page you are looking for could not be found.",
);

export default function NotFound() {
  return <AnimatedTypingMotion />;
}
