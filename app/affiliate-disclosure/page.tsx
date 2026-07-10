import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "PepeWebTech affiliate disclosure. Transparency about how we earn commissions from recommended tools and services, in compliance with FTC guidelines.",
  alternates: {
    canonical: "/affiliate-disclosure",
  },
  openGraph: {
    title: "Affiliate Disclosure | PepeWebTech",
    description:
      "Transparency about how we earn commissions from recommended tools and services.",
    url: "https://pepewebtech.com/affiliate-disclosure",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="pt-32 pb-16 md:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Legal
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Affiliate Disclosure
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: July 10, 2026
          </p>

          <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                What This Means
              </h2>
              <p>
                PepeWebTech participates in affiliate marketing programs. This
                means we may earn a commission when you click on certain links
                on our website and make a purchase or sign up for a service. You
                pay nothing extra — the commission comes from the company&apos;s
                marketing budget, not from your wallet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Promise
              </h2>
              <p className="mb-3">
                We only recommend tools and services that:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>We have personally used or thoroughly evaluated</li>
                <li>
                  Provide genuine value to small businesses and web developers
                </li>
                <li>Offer fair pricing relative to their capabilities</li>
                <li>
                  Are backed by responsive support teams and active development
                </li>
              </ul>
              <p className="mt-3">
                Affiliate commissions never influence our editorial
                recommendations. If a tool has significant flaws, we say so
                regardless of whether we earn a commission from it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                How Affiliate Links Work
              </h2>
              <p>
                When you click an affiliate link on our site, a tracking cookie
                may be set by the merchant. If you make a purchase within the
                cookie duration (typically 30–90 days, depending on the
                program), we receive a small percentage of the sale. The
                purchase price is identical whether you use our link or go
                directly to the merchant&apos;s site.
              </p>
              <p className="mt-2">
                All affiliate links on PepeWebTech are marked with{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                  rel=&quot;nofollow sponsored&quot;
                </code>{" "}
                and are disclosed inline with a disclosure badge at the top of
                the article.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Current Affiliate Partners
              </h2>
              <p className="mb-3">
                As of July 2026, PepeWebTech participates in the following
                affiliate programs:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>
                  <strong className="text-foreground">Z.AI</strong> — GLM AI
                  models and coding plans. Referral code used in links.
                </li>
              </ul>
              <p className="mt-3">
                This list will be updated as new partnerships are established.
                Approved partners in the application pipeline include Semrush,
                WP Engine, BrightLocal, Cloudways, and Jasper AI.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                FTC Compliance
              </h2>
              <p>
                This disclosure is provided in accordance with the U.S. Federal
                Trade Commission&apos;s guidelines on the use of endorsements
                and testimonials in advertising (16 CFR Part 255). The FTC
                requires that material connections between endorsers and the
                products they recommend be clearly and conspicuously disclosed.
              </p>
              <p className="mt-2">
                Our disclosures appear:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>At the top of every article containing affiliate links</li>
                <li>Before any affiliate link appears in the content</li>
                <li>In a format that is easy to see and understand</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Your Choice
              </h2>
              <p>
                Using our affiliate links is entirely optional. If you prefer
                not to use them, you can search for the product or service
                directly and visit the merchant&apos;s website on your own. The
                price and experience will be the same. We appreciate any support
                — it helps us continue producing free educational content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Questions?
              </h2>
              <p>
                If you have questions about our affiliate relationships or this
                disclosure, email{" "}
                <a
                  href="mailto:info@pepewebtech.com"
                  className="text-primary hover:underline"
                >
                  info@pepewebtech.com
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm">
                PepeWebTech is a service of Josue Zazueta, sole proprietor.
                Based in Temecula, California.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
