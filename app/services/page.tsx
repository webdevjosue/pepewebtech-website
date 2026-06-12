import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Rocket, Briefcase, ShoppingCart, Wrench, Bot, Phone, MessageSquare, Zap, X, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Web Design & AI Automation",
  description: "PepeWebTech: Web design, AI employees, chatbots, and automation for small businesses. AI agents that answer calls, capture leads, and grow your business 24/7.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | PepeWebTech — Web Design & AI Automation",
    description: "Web design, AI employees, chatbots, and automation for small businesses. AI agents that work 24/7.",
    url: "https://pepewebtech.com/services",
    images: [
      {
        url: "/images/pepewebtech-thumb.png",
        width: 1200,
        height: 630,
        alt: "PepeWebTech Services",
      },
    ],
  },
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
            Websites + AI Employees for Your Business
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Your competitors are still paying humans to answer phones at 2am. You won&apos;t have to.
          </p>
        </div>
      </section>

      {/* AI Employee Services — Top Priority */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              AI Employees
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              AI That Works While You Sleep
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every missed call is a lost customer. Every slow follow-up is lost revenue. Our AI employees answer instantly, capture every lead, and never take a day off.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Bot}
              title="AI Website Chatbot"
              description="A chatbot trained on YOUR business. Answers questions, captures leads, books appointments — 24/7. No more lost website visitors."
              price="$297/mo"
              features={["Custom-trained on your business", "Lead capture & qualification", "Appointment booking", "Works 24/7, instant responses", "Bilingual English/Spanish"]}
            />
            <ServiceCard
              icon={Phone}
              title="AI Phone Agent"
              description="Missed calls = missed money. Our AI answers every call in under 60 seconds, handles booking, and routes emergencies to you."
              price="$597/mo"
              features={["Answers every call, 24/7", "Books appointments automatically", "Handles FAQs and pricing", "Routes urgent calls to your phone", "Call recording & transcripts"]}
            />
            <ServiceCard
              icon={MessageSquare}
              title="AI Follow-Up System"
              description="80% of sales need 5+ follow-ups. Our AI sends personalized texts and emails automatically so no lead goes cold."
              price="$497/mo"
              features={["Automated SMS follow-up", "Email nurture sequences", "Re-engagement campaigns", "Review request automation", "CRM integration"]}
            />
            <ServiceCard
              icon={Zap}
              title="Full AI Employee Package"
              description="Chatbot + Phone Agent + Follow-Up System. Everything working together. One setup, total coverage."
              price="$897/mo"
              features={["All three AI employees", "Unified dashboard", "Priority support", "Monthly performance reports", "Free setup (normally $997)"]}
            />
          </div>
        </div>
      </section>

      {/* Web Design Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Web Design
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Websites That Work for You
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Professional websites that rank on Google, load fast, and turn visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Rocket}
              title="Landing Pages"
              description="Single-page sites designed to convert. Perfect for launching new products, services, or campaigns. Fast delivery, maximum impact."
              price="From $897"
              features={["Single page design", "Mobile responsive", "Contact form", "SEO basics", "Free hosting setup"]}
            />
            <ServiceCard
              icon={Briefcase}
              title="Business Websites"
              description="Professional multi-page websites with blog, contact forms, analytics, and AI-powered auto-updates."
              price="From $2,497"
              features={["Up to 10 pages", "Blog with auto-publishing", "Full SEO setup", "Analytics dashboard", "30-day support"]}
            />
            <ServiceCard
              icon={ShoppingCart}
              title="E-Commerce"
              description="Online stores with payment processing, inventory management, and everything you need to sell online."
              price="From $4,997"
              features={["Unlimited products", "Payment processing", "Inventory management", "Order tracking", "60-day support"]}
            />
            <ServiceCard
              icon={Wrench}
              title="Maintenance + AI Updates"
              description="Keep your site secure and fresh. We handle updates, security, and auto-generate blog content to keep your SEO growing."
              price="From $147/mo"
              features={["Security updates", "Auto blog content", "Performance monitoring", "Backup management", "Priority support"]}
            />
          </div>
        </div>
      </section>

      {/* ROI Proof */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Math Is Simple
          </h2>
          <div className="mt-8 space-y-6 text-left">
            <div className="flex gap-4 items-start">
            <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg p-3 shrink-0">
              <X className="h-5 w-5" strokeWidth={3} />
            </div>
            <div>
              <p className="font-semibold">Without AI: You miss 40% of calls after hours</p>
              <p className="text-muted-foreground">At $200 average job value × 10 missed calls/week = <strong>$104,000/year lost</strong></p>
            </div>
            </div>
            <div className="flex gap-4 items-start">
            <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg p-3 shrink-0">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>
            <div>
              <p className="font-semibold">With AI: Every call answered, every lead followed up</p>
              <p className="text-muted-foreground">AI Employee cost: $597/month = $7,164/year. <strong>ROI: 1,350%</strong></p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Stop Losing Customers?"
        description="Free 15-minute strategy call. We'll show you exactly how much money you're losing and how to fix it."
        buttonText="Get Free Strategy Call"
      />
    </>
  );
}
