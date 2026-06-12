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
  const images = post.image
    ? [{ url: post.image, width: 1536, height: 1024, alt: post.title }]
    : [{ url: "/images/pepewebtech-thumb.png", width: 1200, height: 630, alt: post.title }];
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/posts/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pepewebtech.com/blog/posts/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["PepeWebTech"],
      tags: [post.category],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : ["/images/pepewebtech-thumb.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://pepewebtech.com${post.image}` : "https://pepewebtech.com/images/pepewebtech-thumb.png",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "PepeWebTech",
      url: "https://pepewebtech.com",
    },
    publisher: {
      "@type": "Organization",
      name: "PepeWebTech",
      logo: {
        "@type": "ImageObject",
        url: "https://pepewebtech.com/images/pepewebtech-thumb.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pepewebtech.com/blog/posts/${slug}`,
    },
  };

  // Read the HTML file for this slug
  const contentDir = path.join(process.cwd(), "content", "blog");
  const htmlPath = path.join(contentDir, `${slug}.html`);

  let htmlContent = "";
  if (fs.existsSync(htmlPath)) {
    htmlContent = fs.readFileSync(htmlPath, "utf-8");
    // Extract body content, strip nav/footer/script/style/link, render as-is
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      htmlContent = bodyMatch[1]
        .replace(/<nav[\s\S]*?<\/nav>/gi, "")
        .replace(/<footer[\s\S]*?<\/footer>/gi, "")
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<link[^>]*>/gi, "")
        .trim();
    }
  }

  return (
    <article className="pt-32 pb-16 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header className="mb-8">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>
          <div className="mt-3">
            <time className="text-sm text-muted-foreground" dateTime={post.slug.substring(0, 10)}>{post.date}</time>
            {post.readTime && (
              <span className="text-sm text-muted-foreground"> · {post.readTime}</span>
            )}
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="relative">
          <div
            className="blog-content"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        <nav className="mt-12 pt-8 border-t" aria-label="Blog navigation">
          <a
            href="/blog"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            &larr; Back to Blog
          </a>
        </nav>
      </div>
    </article>
  );
}
