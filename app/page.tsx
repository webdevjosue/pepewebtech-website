import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { FeatureCard } from "@/components/feature-card";
import { BlogCard } from "@/components/blog-card";
import { Showcase } from "@/components/showcase";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Rocket, Briefcase, ShoppingCart, Zap, DollarSign, Smartphone, Lock, Bot, Phone } from "lucide-react";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PepeWebTech",
  image: "https://pepewebtech.com/images/pepewebtech-thumb.png",
  url: "https://pepewebtech.com",
  telephone: "",
  email: "info@pepewebtech.com",
  description: "AI-powered web development for small businesses. Fast, affordable, modern websites.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Temecula",
    addressRegion: "CA",
    addressCountry: "US",
  },
  priceRange: "$397-$997/mo (AI) | $1,497-$4,997 (Web)",
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [],
  areaServed: {
    "@type": "Place",
    name: "United States",
  },
  serviceType: ["AI Employees", "AI Chatbots", "AI Phone Agents", "Website Design", "Web Development", "E-Commerce Development", "SEO", "Web Maintenance"],
};

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Hero />

      {/* Services */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Never Miss Another Customer
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Your business never sleeps. Neither do our AI agents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon={Bot}
              title="AI Chatbot Employee"
              description="A chatbot trained on YOUR business that answers questions, captures leads, and books appointments — 24/7."
              price="From $397/mo"
              features={[
                "Custom-trained on your business",
                "Lead capture & booking",
                "Bilingual English/Spanish",
                "Works 24/7, instant replies",
                "Monthly performance report",
              ]}
            />
            <ServiceCard
              icon={Phone}
              title="AI Phone Agent"
              description="Every missed call is lost revenue. Our AI answers every call, books appointments, and routes emergencies to you."
              price="From $697/mo"
              features={[
                "Answers every call 24/7",
                "Books appointments automatically",
                "Handles FAQs and pricing",
                "Routes urgent calls to you",
                "Call recording & transcripts",
              ]}
            />
            <ServiceCard
              icon={Rocket}
              title="Professional Websites"
              description="Websites that rank on Google, load fast, and convert visitors into customers. From landing pages to full stores."
              price="From $1,497"
              features={[
                "Custom design",
                "Mobile responsive",
                "SEO optimized",
                "AI auto-blog included",
                "Fast delivery",
              ]}
            />
          </div>
          <div className="mt-8 trust-badges">
            <span className="trust-badge">
              <Zap className="h-3.5 w-3.5" />
              Built in Days, Not Months
            </span>
            <span className="trust-badge">
              <Smartphone className="h-3.5 w-3.5" />
              Mobile-First Design
            </span>
            <span className="trust-badge">
              <Lock className="h-3.5 w-3.5" />
              Free SSL &amp; Hosting
            </span>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View All Services &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <Showcase />

      {/* Blog */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Blog
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Latest Insights
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
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

      {/* Founding Client Program */}
      <Testimonials />

      {/* CTA */}
      <CTASection
        title="Ready to Stop Losing Customers?"
        description="Free 15-minute strategy call. See our AI live, get your ROI estimate."
        buttonText="Book Your Free Call"
      />
    </>
  );
}
