import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for AI-powered web development. Landing pages from $1,500, business websites from $4,000.",
};

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Landing Page",
    featured: false,
    features: [
      "Single page design",
      "Mobile responsive",
      "Contact form",
      "SEO basics",
      "Free hosting setup",
      "1 revision round",
    ],
  },
  {
    name: "Business",
    price: "$4,000",
    description: "Full Website",
    featured: true,
    features: [
      "Up to 10 pages",
      "Mobile responsive",
      "Blog integration",
      "Full SEO setup",
      "Analytics dashboard",
      "2 revision rounds",
      "30-day support",
    ],
  },
  {
    name: "E-Commerce",
    price: "$8,000",
    description: "Online Store",
    featured: false,
    features: [
      "Unlimited products",
      "Payment processing",
      "Inventory management",
      "Order tracking",
      "Full SEO setup",
      "3 revision rounds",
      "60-day support",
    ],
  },
];

const faqs = [
  {
    q: "Do you offer payment plans?",
    a: "Yes! We offer flexible payment plans. Typically 50% upfront and 50% on delivery. We can work with your budget.",
  },
  {
    q: "How long does a project take?",
    a: "Landing pages: 3-5 business days. Business websites: 1-2 weeks. E-commerce: 2-4 weeks. AI-powered = faster delivery.",
  },
  {
    q: "What's included in hosting?",
    a: "Free SSL, automatic backups, CDN for fast loading, 99.9% uptime, and analytics. No hidden hosting fees.",
  },
  {
    q: "Can I make changes after launch?",
    a: "Absolutely. Each plan includes revision rounds. We also offer maintenance plans for ongoing updates and support.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Pricing
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            No hidden fees. No surprises. Choose the plan that fits your needs.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.featured
                    ? "border-primary shadow-lg relative"
                    : ""
                }
              >
                {plan.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4 border-b">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.featured ? "default" : "outline"}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold">Common Questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-0 divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h4 className="font-semibold text-foreground">{faq.q}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        description="Get a free consultation and quote for your project."
      />
    </>
  );
}
