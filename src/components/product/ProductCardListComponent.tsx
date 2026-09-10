"use client";

import React from "react";
import { useState, useEffect } from "react";
import { da } from "zod/locales";
import ProductCard from "./ProductCardComponent";
import Link from "next/link";
import useSWR from "swr";
import Loading from "@/app/loading";
export default function ProductCardListComponent() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_FAKESTORE_API}/products`, fetcher);

  if (error) return <div>Loading...</div>;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-4">
      {product?.map(({ id, image, title, description, price }) => (
        <Link key={id} href={`/Product/${id}`}>
          <ProductCard
            image={image}
            title={title}
            description={description}
            price={price}
          />
        </Link>
      ))}
    </div>
  );
}
