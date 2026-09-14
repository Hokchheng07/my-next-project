import CategoryListcomponent from "@/components/category/CategoryListcomponent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "M2 - Categories",
  "Browse product categories available in M2.",
);

export default function CategoryPage() {
  const category = fetch(
    `${process.env.NEXT_PUBLIC_FAKESTORE_PLAZI_API}/categories`,
  )
    .then((data) => data.json())
    .then((category) => {
      console.log(category);
      return category;
    });

  return (
    <div>
      <CategoryListcomponent category={category} />
    </div>
  );
}
