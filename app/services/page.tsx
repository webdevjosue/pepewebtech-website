import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "PepeWebTech services: Landing pages, business websites, e-commerce stores, and maintenance plans for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 text-center bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            What We Do
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Services Built for Small Business
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Everything you need to establish and grow your online presence
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon="🚀"
              title="Landing Pages"
              description="Single-page sites designed to convert visitors into customers. Perfect for launching new products, services, or campaigns. Fast delivery, maximum impact."
              price="From $1,500"
              features={["Single page design", "Mobile responsive", "Contact form", "SEO basics", "Free hosting setup"]}
            />
            <ServiceCard
              icon="💼"
              title="Business Websites"
              description="Professional multi-page websites with all the features your business needs. Blog integration, contact forms, analytics, and more."
              price="From $4,000"
              features={["Up to 10 pages", "Blog integration", "Full SEO setup", "Analytics dashboard", "30-day support"]}
            />
            <ServiceCard
              icon="🛒"
              title="E-Commerce"
              description="Online stores with payment processing, inventory management, and everything you need to sell online. Scale-ready from day one."
              price="From $8,000"
              features={["Unlimited products", "Payment processing", "Inventory management", "Order tracking", "60-day support"]}
            />
            <ServiceCard
              icon="🔧"
              title="Maintenance Plans"
              description="Keep your site secure, updated, and running smoothly. We handle everything so you can focus on what matters—your business."
              price="From $200/mo"
              features={["Security updates", "Performance monitoring", "Content updates", "Backup management", "Priority support"]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Get a free consultation. We'll help you figure out the best approach for your business."
        buttonText="Get Free Consultation"
      />
    </>
  );
}
