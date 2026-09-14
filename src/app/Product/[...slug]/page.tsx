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

  const product = await fetch(`${process.env.NEXT_PUBLIC_FAKESTORE_API}/products/${productId}`).then(
    (res) => res.json(),
  );

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
