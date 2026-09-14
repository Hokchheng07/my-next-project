import type { Metadata } from "next";

const ogImage =
  "/assets/image/M2-Streets Streetwear Graphic with Silhouette.png";

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 940,
          height: 788,
          alt: "M2 Streets streetwear graphic",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
