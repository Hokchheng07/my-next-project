import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { CardDemo } from "@/components/Cards/CardDemoComponent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - About Us",
  "Learn more about the team and project behind M2.",
);

export default function about() {
  return (
    <div>
      <p>សួរស្តី</p>
      <p> Hello Friends f</p>
      <Button>Button</Button>
      <Card>
        <CardHeader>Hello this is header inside card</CardHeader>
      </Card>
      <CardDemo />
    </div>
  );
}
