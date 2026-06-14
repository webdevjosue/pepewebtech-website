import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

export function BlogCard({ slug, title, excerpt, date, category, image }: BlogCardProps) {
  return (
    <article className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-200 flex flex-col">
      <div className="h-40 sm:h-44 relative overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {category}
            </span>
          </div>
        )}
        {/* Category badge overlay */}
        {image && (
          <span className="absolute top-2 left-2 inline-flex items-center rounded-full bg-background/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wide">
            {category}
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <time className="text-xs text-muted-foreground">{date}</time>
        <h3 className="mt-1.5 text-base sm:text-lg font-semibold text-foreground leading-snug line-clamp-2">
          <Link
            href={`/blog/posts/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3 flex-1">
          {excerpt}
        </p>
        <Link
          href={`/blog/posts/${slug}`}
          className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read More &rarr;
        </Link>
      </div>
    </article>
  );
}
