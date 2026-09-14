import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - Product Data",
  "Review and filter product data in the M2 catalog.",
);

export default function DataTablesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
