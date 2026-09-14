import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { CardDemo } from '@/components/Cards/CardDemoComponent';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "M2 - About Us",
  description: "About the team behind M2",
};

export default function about() {

  return (
    <div>
      <p>សួរស្តី</p>
      <p> Hello Friends f</p>
      <Button>Button</Button>
      <Card>
        <CardHeader>Hello this is header inside card</CardHeader>
      </Card>
      <CardDemo/>
    </div>
  );
}
