import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and industry news for small businesses. AI trends, web development, and digital marketing insights.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Blog
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Latest Insights
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Tips, guides, and industry news for small businesses
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
