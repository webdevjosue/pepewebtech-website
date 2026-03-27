import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export function BlogCard({ slug, title, excerpt, date, category }: BlogCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {category}
        </span>
      </div>
      <div className="p-5">
        <time className="text-sm text-muted-foreground">{date}</time>
        <h3 className="mt-2 text-lg font-semibold text-foreground leading-snug">
          <Link
            href={`/blog/posts/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
        <Link
          href={`/blog/posts/${slug}`}
          className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read More &rarr;
        </Link>
      </div>
    </article>
  );
}
