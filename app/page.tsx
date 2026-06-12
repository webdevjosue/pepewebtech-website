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
    addressLocality: "Southern California",
    addressRegion: "CA",
    addressCountry: "US",
  },
  priceRange: "$497-$1,497/mo (AI) | $1,500-$8,000 (Web)",
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
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              AI Employees + Websites
            </h2>
            <p className="mt-3 text-muted-foreground">
              Your business never sleeps. Neither do our AI agents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon={Bot}
              title="AI Chatbot Employee"
              description="A chatbot trained on YOUR business that answers questions, captures leads, and books appointments — 24/7."
              price="From $497/mo"
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
              price="From $997/mo"
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
              price="From $1,500"
              features={[
                "Custom design",
                "Mobile responsive",
                "SEO optimized",
                "AI auto-blog included",
                "Fast delivery",
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
              icon={Zap}
              title="4x Faster"
              description="AI-assisted development means we build in days what others take weeks to complete."
            />
            <FeatureCard
              icon={DollarSign}
              title="50% Cheaper"
              description="Efficiency savings passed directly to you. Enterprise quality at small business prices."
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile-First"
              description="Every site is built mobile-responsive from day one. No extra cost, no compromises."
            />
            <FeatureCard
              icon={Lock}
              title="Secure Hosting"
              description="Free SSL, automatic backups, and enterprise-grade security included at no extra charge."
            />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Portfolio */}
      <Showcase />

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

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Website?"
        description="Get a free consultation and quote. No commitment required."
      />
    </>
  );
}
