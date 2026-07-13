import { CTASection } from "@/components/cta-section";
import { PricingGrid, FAQAccordion } from "@/components/pricing-interactive";
import type { Metadata } from "next";
import { ShieldCheck, Lock, Clock, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — AI Employees & Web Design",
  description: "AI Employees from $397/mo. AI chatbots, phone agents, and follow-up systems that work 24/7. Web design from $1,497. Transparent pricing, no hidden fees.",
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
    price: "$1,497",
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
    name: "E-Commerce Store",
    price: "$4,997",
    period: "one-time",
    description: "Sell online with everything included",
    featured: false,
    features: [
      "Unlimited products",
      "Payment processing (Stripe)",
      "Inventory management",
      "Order tracking & emails",
      "Mobile responsive design",
      "Full SEO setup",
      "2 revision rounds",
      "60-day support",
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

const trustItems = [
  { icon: ShieldCheck, text: "30-Day Money-Back" },
  { icon: Lock, text: "No Contract" },
  { icon: Clock, text: "Month-to-Month" },
  { icon: Gift, text: "Free Setup (First 10)" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative pt-36 pb-16 md:pt-44 text-center overflow-hidden">
        <div className="mesh-gradient" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
            Pricing
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto">
            No hidden fees. No contracts. Cancel anytime.
          </p>
          {/* Premium trust bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border/60 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Employee Plans */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              AI Employees
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">AI That Works 24/7</h2>
          </div>
          <PricingGrid plans={aiPlans} badgeText="Most Popular" />
        </div>
      </section>

      {/* Web Design Plans */}
      <div className="section-divider pricing-divider max-w-5xl mx-auto" />
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Web Design
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">Professional Websites</h2>
          </div>
          <PricingGrid plans={webPlans} badgeText="Best Value" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Common Questions</h2>
          </div>
          <FAQAccordion faqs={faqs} />
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
