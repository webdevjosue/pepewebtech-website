import { FeatureCard } from "@/components/feature-card";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "PepeWebTech is a Southern California-based digital agency. AI-powered web development for small businesses.",
};

const stats = [
  { label: "SoCal", value: "📍", caption: "Based" },
  { label: "2026", value: "2026", caption: "Founded" },
  { label: "AI", value: "⚡", caption: "Powered" },
  { label: "50+", value: "50+", caption: "Projects" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 text-center bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            About
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Built by Developers, for Businesses
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            We make professional web development accessible to every small business
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              PepeWebTech is a service of <strong className="text-foreground">Josue Zazueta LLC</strong>, a Southern California-based digital agency. We combine cutting-edge AI tools with years of development experience to deliver websites that work.
            </p>
            <p>
              Our mission is simple: make professional web development accessible to every small business. No more $20,000 quotes. No more 3-month timelines. Just fast, affordable, quality work.
            </p>
            <p>
              We believe that small businesses deserve the same quality web presence as large corporations—without the enterprise price tag. By leveraging AI-powered development tools, we&apos;re able to deliver professional results at a fraction of the traditional cost and time.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              The AI Advantage
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Why PepeWebTech?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We use cutting-edge AI tools to deliver better results, faster
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            <FeatureCard icon="⚡" title="4x Faster" description="AI-assisted development means we build in days what others take weeks to complete." />
            <FeatureCard icon="💰" title="50% Cheaper" description="Efficiency savings passed directly to you. Enterprise quality at small business prices." />
            <FeatureCard icon="📱" title="Mobile-First" description="Every site is built mobile-responsive from day one. No extra cost, no compromises." />
            <FeatureCard icon="🔒" title="Secure Hosting" description="Free SSL, automatic backups, and enterprise-grade security included at no extra charge." />
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        description="Let's build something great together."
      />
    </>
  );
}
