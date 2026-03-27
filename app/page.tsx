import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { FeatureCard } from "@/components/feature-card";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Services Built for Small Business
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to establish your online presence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon="🚀"
              title="Landing Pages"
              description="Single-page sites designed to convert visitors into customers. Perfect for launching new products or services."
              price="From $1,500"
              features={[
                "Custom design",
                "Mobile responsive",
                "SEO optimized",
                "Contact form",
                "Fast delivery",
              ]}
            />
            <ServiceCard
              icon="💼"
              title="Business Websites"
              description="Professional multi-page websites with all the features your business needs. Blog, contact forms, and more."
              price="From $4,000"
              features={[
                "Up to 10 pages",
                "Blog system",
                "CMS integration",
                "Analytics setup",
                "Ongoing support",
              ]}
            />
            <ServiceCard
              icon="🛒"
              title="E-Commerce"
              description="Online stores with payment processing, inventory management, and everything you need to sell online."
              price="From $8,000"
              features={[
                "Shopping cart",
                "Payment processing",
                "Inventory management",
                "Shipping integration",
                "Analytics dashboard",
              ]}
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View All Services &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Why Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Why PepeWebTech
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              The AI Advantage
            </h2>
            <p className="mt-3 text-muted-foreground">
              We use cutting-edge AI tools to deliver better results, faster
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <FeatureCard
              icon="⚡"
              title="4x Faster"
              description="AI-assisted development means we build in days what others take weeks to complete."
            />
            <FeatureCard
              icon="💰"
              title="50% Cheaper"
              description="Efficiency savings passed directly to you. Enterprise quality at small business prices."
            />
            <FeatureCard
              icon="📱"
              title="Mobile-First"
              description="Every site is built mobile-responsive from day one. No extra cost, no compromises."
            />
            <FeatureCard
              icon="🔒"
              title="Secure Hosting"
              description="Free SSL, automatic backups, and enterprise-grade security included at no extra charge."
            />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Blog */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Blog
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Latest Insights
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tips, guides, and industry news for small businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Website?"
        description="Get a free consultation and quote. No commitment required."
      />
    </>
  );
}
