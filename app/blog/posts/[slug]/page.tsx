import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find the HTML file - slug format: 2026-03-27-title -> 2026-03-27-title.html
  const contentDir = path.join(process.cwd(), "content", "blog");
  const htmlPath = path.join(contentDir, `${slug}.html`);

  let htmlContent = "";
  if (fs.existsSync(htmlPath)) {
    htmlContent = fs.readFileSync(htmlPath, "utf-8");
    // Extract the main article content (between first <article> or the body content)
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      // Remove nav, footer, scripts, style links
      let content = bodyMatch[1]
        .replace(/<nav[\s\S]*?<\/nav>/gi, "")
        .replace(/<footer[\s\S]*?<\/footer>/gi, "")
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<link[^>]*>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "");
      htmlContent = content.trim();
    }
  }

  return (
    <article className="pt-32 pb-16 md:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>
          <time className="block mt-3 text-sm text-muted-foreground">{post.date}</time>
          {post.readTime && (
            <span className="text-sm text-muted-foreground"> · {post.readTime}</span>
          )}
          <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="relative">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        <div className="mt-12 pt-8 border-t">
          <a
            href="/blog"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            &larr; Back to Blog
          </a>
        </div>
      </div>
    </article>
  );
}
