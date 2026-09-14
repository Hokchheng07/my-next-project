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
    const res = await fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_API}/products/${productId}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    });
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
