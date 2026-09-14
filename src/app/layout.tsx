import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const kantumruy = Kantumruy_Pro({
  variable: "--font-kantumruy-pro--",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "M2 - Next Project",
  description: "M2 Specialized Next Project",
  openGraph: {
    title: "M2 - Next Project",
    description: "M2 Specialized Next Project",
    type: "website",
    images: [
      {
        url: "/assets/image/M2-Streets Streetwear Graphic with Silhouette.png",
        width: 940,
        height: 788,
        alt: "M2 Streets streetwear graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M2 - Next Project",
    description: "M2 Specialized Next Project",
    images: ["/assets/image/M2-Streets Streetwear Graphic with Silhouette.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kantumruy.variable} ${fraunces.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense
          fallback={<h1 className="bg-red-500 text-8xl">Loading....</h1>}
        >
          {children}
        </Suspense>
        <Toaster />
      </body>
    </html>
  );
}
