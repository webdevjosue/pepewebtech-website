import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CTASection } from "@/components/cta-section";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — AI Employees & Web Design",
  description: "AI Employees from $397/mo. AI chatbots, phone agents, and follow-up systems that work 24/7. Web design from $897. Transparent pricing, no hidden fees.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | PepeWebTech — AI Employees & Web Design",
    description: "AI Employees from $397/mo. Chatbots, phone agents, follow-up systems. Web design from $1,497.",
    url: "https://pepewebtech.com/pricing",
    images: [
      {
        url: "/images/pepewebtech-thumb.png",
        width: 1200,
        height: 630,
        alt: "PepeWebTech Pricing",
      },
    ],
  },
};

const aiPlans = [
  {
    name: "AI Chatbot",
    price: "$397",
    period: "/mo",
    description: "Website AI Employee",
    featured: false,
    features: [
      "Custom-trained on your business",
      "Lead capture & qualification",
      "Appointment booking",
      "24/7 instant responses",
      "Bilingual English/Spanish",
      "Monthly performance report",
    ],
  },
  {
    name: "AI Phone Agent",
    price: "$697",
    period: "/mo",
    description: "Never miss a call again",
    featured: true,
    features: [
      "Answers every call, 24/7",
      "Books appointments automatically",
      "Handles FAQs and pricing",
      "Routes urgent calls to you",
      "Call recording & transcripts",
      "SMS follow-up included",
      "Setup included (normally $497)",
    ],
  },
  {
    name: "Full AI Package",
    price: "$997",
    period: "/mo",
    description: "Chatbot + Phone + Follow-Up",
    featured: false,
    features: [
      "AI Website Chatbot",
      "AI Phone Agent",
      "AI Follow-Up System (SMS + Email)",
      "Unified dashboard",
      "Priority support",
      "Monthly performance reports",
      "Free setup (save $497)",
      "Google Review automation",
    ],
  },
];

const webPlans = [
  {
    name: "Landing Page",
    price: "$997",
    period: "one-time",
    description: "High-converting single page",
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
    name: "Business Website",
    price: "$2,997",
    period: "one-time",
    description: "Full site + AI auto-blog",
    featured: true,
    features: [
      "Up to 10 pages",
      "Mobile responsive",
      "Blog with AI auto-publishing",
      "Full SEO setup",
      "Analytics dashboard",
      "2 revision rounds",
      "30-day support",
    ],
  },
  {
    name: "Website + AI Employee",
    price: "$3,997",
    period: "+ $697/mo",
    description: "The full package",
    featured: false,
    features: [
      "Business website (10+ pages)",
      "AI Phone Agent included",
      "AI Chatbot on site",
      "Auto blog + SEO",
      "SMS follow-up system",
      "3 revision rounds",
      "60-day support",
      "Save $1,000 vs buying separate",
    ],
  },
];

const faqs = [
  {
    q: "How fast can you set up an AI Employee?",
    a: "5-7 business days for the AI Chatbot. 7-10 days for the AI Phone Agent. Full package: 10-14 days. We train the AI on your specific business, test it, and go live.",
  },
  {
    q: "Do I need to change my phone system?",
    a: "No. We forward your missed calls or after-hours calls to our AI. Your current setup stays the same. When the AI can't handle something, it transfers to you.",
  },
  {
    q: "What happens if the AI can't answer a question?",
    a: "It collects the caller's info and sends you a notification immediately. You call them back. It also learns from every interaction and gets smarter over time.",
  },
  {
    q: "Is there a contract?",
    a: "Month-to-month. No long-term contracts. We earn your business every month. Cancel anytime with 30 days notice.",
  },
  {
    q: "Do you offer payment plans for websites?",
    a: "Yes. 50% upfront, 50% on delivery. We can also work with your budget — just ask.",
  },
  {
    q: "Can I see it working before I buy?",
    a: "Absolutely. Book a free 15-minute strategy call and we'll demo our AI live on the call. You'll see exactly what your customers will experience.",
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
            No hidden fees. No contracts. Cancel anytime.
          </p>
          <div className="trust-badges">
            <span className="trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.22.45 4.56 1.24"/></svg>
              30-Day Money-Back
            </span>
            <span className="trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              No Contract
            </span>
            <span className="trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Month-to-Month
            </span>
            <span className="trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
              Free Setup (First 10 Clients)
            </span>
          </div>
        </div>
      </section>

      {/* AI Employee Plans */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              AI Employees
            </span>
            <h2 className="mt-2 text-2xl font-bold">AI That Works 24/7</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {aiPlans.map((plan) => (
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
                    <span className="text-muted-foreground">{plan.period}</span>
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
                        <span className="text-primary mt-0.5" aria-hidden="true">&#10003;</span>
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

      {/* Web Design Plans */}
      <hr className="section-divider pricing-divider" />
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Web Design
            </span>
            <h2 className="mt-2 text-2xl font-bold">Professional Websites</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {webPlans.map((plan) => (
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
                    Best Value
                  </Badge>
                )}
                <CardHeader className="text-center pb-4 border-b">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> {plan.period}</span>
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
                        <span className="text-primary mt-0.5" aria-hidden="true">&#10003;</span>
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
      <section className="py-16 md:py-24">
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
        title="Ready to Stop Losing Customers?"
        description="Free 15-minute strategy call. See our AI live, get your ROI estimate."
        buttonText="Book Free Strategy Call"
      />
    </>
  );
}
