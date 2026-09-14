import React from "react";
import { ProductDetail } from "@/components/product/ProductDetailComponent";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const productId = Array.isArray(slug) ? slug.at(-1) : slug;

  try {
    const res = await fetch(`${process.env.FAKESTORE_API}/products/${productId}`);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const product = await res.json();

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        images: [
          {
            url: product.image,
          },
        ],
      },
    };
  } catch (e) {
    console.error("Metadata fetch failed:", e);
    return {
      title: "Product Not Found",
    };
  }
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
