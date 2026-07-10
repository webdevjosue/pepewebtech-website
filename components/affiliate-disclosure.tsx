import Link from "next/link";

/**
 * Reusable affiliate disclosure snippet.
 * Injected at the top of blog posts that contain affiliate links.
 * FTC-compliant: clear, conspicuous, and unambiguous.
 */
export function AffiliateDisclosureBadge() {
  return (
    <div
      className="affiliate-disclosure-badge my-6 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground"
      role="note"
      aria-label="Affiliate disclosure"
    >
      <details>
        <summary className="cursor-pointer font-medium text-foreground">
          Affiliate Disclosure
        </summary>
        <p className="mt-2">
          Some links on this page may be affiliate links. If you click and make
          a purchase, PepeWebTech may earn a commission at no additional cost to
          you. We only recommend tools and services we genuinely believe in. See
          our full{" "}
          <Link
            href="/affiliate-disclosure"
            className="text-primary hover:underline"
          >
            Affiliate Disclosure
          </Link>{" "}
          for details.
        </p>
      </details>
    </div>
  );
}
