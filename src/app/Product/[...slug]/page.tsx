import React from "react";
import { ProductDetail } from "@/components/product/ProductDetailComponent";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const productName = slug.at(-1)?.replace(/[-_]+/g, " ") ?? "Product";
  const formattedName = productName.replace(/\b\w/g, (character) =>
    character.toUpperCase(),
  );

  return createPageMetadata(
    `M2 - ${formattedName}`,
    `View details and availability for ${formattedName} from M2.`,
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <ProductDetail id={slug.at(-1) ?? "1"} />
    </div>
  );
}
