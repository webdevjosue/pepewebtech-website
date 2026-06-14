import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog — PepeWebTech",
  description:
    "Tips, guides, and industry news for small businesses. AI trends, web development, and digital marketing insights.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | PepeWebTech",
    description:
      "Tips, guides, and industry news for small businesses. AI trends, web development, and digital marketing insights.",
    url: "https://pepewebtech.com/blog",
    images: [
      {
        url: "/images/pepewebtech-thumb.png",
        width: 1200,
        height: 630,
        alt: "PepeWebTech Blog",
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogList />;
}
