import React from "react";
import ProductCard from "@/components/product/ProductCardComponent";
import ProductCardListComponent from "@/components/product/ProductCardListComponent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - Products",
  "Browse the complete M2 product catalog.",
);

export default function ProductPage() {
  return (
    <div>
      <ProductCardListComponent />
    </div>
  );
}
