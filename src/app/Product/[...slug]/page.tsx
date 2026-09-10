import React from 'react'
import { ProductDetail } from '@/components/product/ProductDetailComponent';
export default async function ProductDetailPage({params} : {params : Promise<{slug:string}>}) {
    const {slug} = await params;
  return (
    <div>
      <ProductDetail id={slug}/>
    </div>
  )
}
