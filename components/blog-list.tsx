"use client";

import { useState, useMemo } from "react";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/lib/blog-data";

const POSTS_PER_PAGE = 9;

export function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map((p) => p.category));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safePage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 md:pt-40 text-center">
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

      {/* Controls */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
            {activeCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-medium text-foreground">
                  {activeCategory}
                </span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No articles found. Try a different search or category.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
                className="px-3 py-2 text-sm rounded-lg border border-border bg-card disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary/40 hover:text-primary transition-colors"
                aria-label="Previous page"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {(() => {
                const pages: (number | string)[] = [];
                const maxVisible = 5;
                let start = Math.max(1, safePage - Math.floor(maxVisible / 2));
                let end = Math.min(totalPages, start + maxVisible - 1);
                if (end - start + 1 < maxVisible) {
                  start = Math.max(1, end - maxVisible + 1);
                }

                if (start > 1) {
                  pages.push(1);
                  if (start > 2) pages.push("...");
                }
                for (let i = start; i <= end; i++) {
                  pages.push(i);
                }
                if (end < totalPages) {
                  if (end < totalPages - 1) pages.push("...");
                  pages.push(totalPages);
                }

                return pages.map((p, i) =>
                  typeof p === "number" ? (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(p)}
                      className={`w-9 h-9 text-sm rounded-lg font-medium transition-colors ${
                        safePage === p
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-card hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {p}
                    </button>
                  ) : (
                    <span
                      key={i}
                      className="px-1 text-sm text-muted-foreground"
                    >
                      {p}
                    </span>
                  )
                );
              })()}

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, safePage + 1))
                }
                disabled={safePage === totalPages}
                className="px-3 py-2 text-sm rounded-lg border border-border bg-card disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary/40 hover:text-primary transition-colors"
                aria-label="Next page"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </nav>
          )}

          {totalPages > 1 && (
            <p className="text-center text-xs text-muted-foreground mt-4">
              Page {safePage} of {totalPages}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
