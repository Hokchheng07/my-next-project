import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { CardDemo } from '@/components/Cards/CardDemoComponent';
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
