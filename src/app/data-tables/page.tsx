"use client";

import useSWR from "swr";

import { columns, type ProductType } from "./columns";
import { DataTable } from "./data-table";

const fetcher = async (url: string): Promise<ProductType[]> => {
  const response = await fetch(url);
  return response.json();
};

export default function ProductDataTable() {
  const { data } = useSWR<ProductType[]>(
    `${process.env.NEXT_PUBLIC_FAKESTORE_API}/products`,
    fetcher,
  );
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
