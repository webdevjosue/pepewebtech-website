"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ChevronDown, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  featured: boolean;
  features: string[];
}

interface FAQ {
  q: string;
  a: string;
}

export function PricingGrid({ plans, badgeText = "Most Popular" }: { plans: Plan[]; badgeText?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
      {plans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} badgeText={badgeText} />
      ))}
    </div>
  );
}

function PricingCard({ plan, badgeText }: { plan: Plan; badgeText: string }) {
  return (
    <div
      className={`flex flex-col h-full relative transition-all duration-400 ${
        plan.featured ? "pricing-featured rounded-2xl p-8" : "premium-card p-8"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-bold shadow-lg whitespace-nowrap">
            <Star className="h-3 w-3 fill-current" />
            {badgeText}
          </span>
        </div>
      )}

      <div className="text-center pb-6 border-b border-border/40">
        <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
        <div className="mt-4 flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
          <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
        </div>
        <p className={`text-sm mt-2 ${plan.featured ? "opacity-90" : "text-muted-foreground"}`}>
          {plan.description}
        </p>
      </div>

      <div className="pt-6 flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className={`text-sm flex items-start gap-3 ${plan.featured ? "text-white/90" : "text-muted-foreground"}`}
            >
              <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${plan.featured ? "bg-white/20" : "bg-primary/10"}`}>
                <Check className={`h-3 w-3 ${plan.featured ? "text-white" : "text-primary"}`} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <Button
            asChild
            className={`w-full h-12 text-base group ${plan.featured ? "bg-white text-primary hover:bg-white/90 shadow-lg" : ""}`}
            variant={plan.featured ? "default" : "outline"}
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, i) => (
        <FAQItem key={i} faq={faq} />
      ))}
    </div>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accordion-item ${open ? "open" : ""}`}>
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <ChevronDown className="accordion-chevron h-5 w-5 flex-shrink-0" />
      </button>
      <div className="accordion-content">
        <div className="accordion-content-inner">
          {faq.a}
        </div>
      </div>
    </div>
  );
}
