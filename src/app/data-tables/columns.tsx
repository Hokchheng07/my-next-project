"use client";

import { createColumnHelper } from "@tanstack/react-table";

import {type DataTableFeatures} from "./data-table-features";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type ratingType = {
    rate:number
    count : number
}

export type ProductType = {
  id: string;
  name : string;
  image : string;
  title : string;
  price: number;
  category : string;
  rate : ratingType;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, ProductType>();

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("image", {
    header: "image",
  }),
  columnHelper.accessor("title", {
    header: "Title",
  }),
  columnHelper.accessor("price", {
    header: "Price",
  }),
  columnHelper.accessor("category", {
    header: "Category",
  }),
  columnHelper.accessor("rate.rate", {
    header: "Rating",
  }),
]);
