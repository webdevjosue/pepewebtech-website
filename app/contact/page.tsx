"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@pepewebtech.com", href: "mailto:info@pepewebtech.com" },
  { icon: MapPin, label: "Location", value: "Temecula, California" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const expectations = [
  "Free 15-minute strategy call",
  "See our AI employees working live",
  "Get your personalized ROI estimate",
  "No obligation, no pressure",
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const btn = e.currentTarget.querySelector("button[type=submit]") as HTMLButtonElement;
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;

    // POST directly to CRM — creates lead instantly + email notification
    const CRM_URL = "https://intervals-gather-naturals-stores.trycloudflare.com";
    fetch(`${CRM_URL}/api/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        business_name: formData.get("business_name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        service_interest: formData.get("service"),
        best_time: formData.get("best_time"),
        message: formData.get("message"),
      }),
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res))
      .then(() => {
        e.currentTarget.reset();
        btn.textContent = "Sent! We'll call you within 24 hours.";
        btn.classList.add("bg-green-600", "text-white");
      })
      .catch(() => {
        // Fallback: open mailto with pre-filled subject
        const name = formData.get("name");
        const body = `Name: ${name}%0D%0ABusiness: ${formData.get("business_name")}%0D%0APhone: ${formData.get("phone")}%0D%0AEmail: ${formData.get("email")}%0D%0AService: ${formData.get("service")}%0D%0AMessage: ${formData.get("message")}`;
        window.location.href = `mailto:info@pepewebtech.com?subject=New Lead from ${name}&body=${body}`;
      })
      .finally(() => {
        btn.disabled = false;
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("bg-green-600", "text-white");
        }, 5000);
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
            Book Your Free Strategy Call
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Tell us about your business and we&apos;ll reach out within 24 hours to schedule your free call. We&apos;ll show you exactly how much money you&apos;re losing and how to fix it.
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
                Serving Temecula, Murrieta, and all of Southern California. Fill out the form and we&apos;ll call you back — no pushy sales pitch, just honest advice.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="mt-1"><item.icon className="h-5 w-5 text-primary" aria-hidden="true" /></span>
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
              <Card className="mt-8 border-primary/20">
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
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="business_name" className="block text-sm font-medium mb-1.5">Business Name *</label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    required
                    placeholder="Smith Plumbing"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@smithplumbing.com"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(951) 555-0100"
                      className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5">What are you interested in?</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="ai_chatbot">AI Chatbot Employee — $397/mo</option>
                    <option value="ai_phone">AI Phone Agent — $697/mo</option>
                    <option value="ai_followup">AI Follow-Up System — $397/mo</option>
                    <option value="full_package">Full AI Package — $997/mo</option>
                    <option value="landing">Landing Page — $1,497</option>
                    <option value="business">Business Website — $2,997</option>
                    <option value="ecommerce">E-Commerce Store — $4,997</option>
                    <option value="maintenance">Maintenance Plan — $147/mo</option>
                    <option value="not_sure">Not sure yet — help me decide</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="best_time" className="block text-sm font-medium mb-1.5">Best time to call you?</label>
                  <select
                    id="best_time"
                    name="best_time"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="anytime">Anytime</option>
                    <option value="morning">Morning (8am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-5pm)</option>
                    <option value="evening">Evening (5pm-8pm)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Tell us about your business</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What do you do? How many calls do you miss per week? What's your biggest challenge?"
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Get My Free Strategy Call
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We&apos;ll never share your information. No spam, no pressure.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
