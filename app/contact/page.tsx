"use client";

import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  { icon: "📧", label: "Email", value: "info@pepewebtech.com", href: "mailto:info@pepewebtech.com" },
  { icon: "📍", label: "Location", value: "Southern California" },
  { icon: "⏰", label: "Response Time", value: "Within 24 hours" },
];

const expectations = [
  "Free project consultation",
  "Detailed quote within 24 hours",
  "No obligation or pressure",
  "Clear timeline and deliverables",
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const btn = e.currentTarget.querySelector("button[type=submit]") as HTMLButtonElement;
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;

    fetch("https://formspree.io/f/NEEDS_REAL_ID", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          e.currentTarget.reset();
          alert("Thank you! We'll get back to you within 24 hours.");
        } else {
          alert("Something went wrong. Please email info@pepewebtech.com");
        }
      })
      .catch(() => {
        alert("Something went wrong. Please email info@pepewebtech.com");
      })
      .finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      });
  };

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 text-center bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Contact
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Ready to Start?
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Get a free consultation and quote for your project. No commitment required.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                We&apos;d love to hear about your project. Fill out the form or reach out directly.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-foreground">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Card className="mt-8">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">What to Expect</h4>
                  <ul className="space-y-2">
                    {expectations.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-1.5">Project Type</label>
                  <select
                    id="project"
                    name="project"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="landing">Landing Page ($1,500+)</option>
                    <option value="business">Business Website ($4,000+)</option>
                    <option value="ecommerce">E-Commerce Store ($8,000+)</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
