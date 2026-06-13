import { FeatureCard } from "@/components/feature-card";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { MapPin, Zap, DollarSign, Smartphone, Lock, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "PepeWebTech is a Temecula, CA-based agency helping small businesses with AI employees, websites, and automation. Local, personal, affordable.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | PepeWebTech",
    description: "PepeWebTech is a Temecula, CA-based agency helping small businesses with AI employees, websites, and automation.",
    url: "https://pepewebtech.com/about",
    images: [
      {
        url: "/images/pepewebtech-thumb.png",
        width: 1200,
        height: 630,
        alt: "About PepeWebTech",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 text-center bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            About
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            Your Neighbor. Your AI Partner.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Local, personal, and obsessed with helping Temecula businesses grow
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet Josue</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m <strong className="text-foreground">Josue Zazueta</strong>, and I run PepeWebTech right here in <strong className="text-foreground">Temecula, California</strong>. I built this company because I watched local businesses lose customers to missed calls, slow responses, and outdated websites — while big agencies charged $20,000+ for work that should cost a fraction of that.
            </p>
            <p>
              I work with AI tools every single day. My own operation runs on a fleet of 15 AI agents that handle research, content, monitoring, and automation 24/7. I&apos;m not selling you something I don&apos;t use myself — I&apos;m selling you the same advantage my own business runs on.
            </p>
            <p>
              When you hire PepeWebTech, you&apos;re not getting a faceless agency or a call center. You&apos;re getting me — a neighbor in Temecula who will personally set up your AI employee, train it on your business, and make sure it works. And if something goes wrong, you call or text me directly.
            </p>
            <p>
              I&apos;m currently taking on my first 10 founding clients at special rates. After that, prices go up. If you&apos;ve been thinking about getting an AI employee or a new website, now is the time.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6" aria-hidden="true" />
                <span>Temecula</span>
              </div>
              <div className="text-sm text-muted-foreground">Locally Based</div>
            </div>
            <div>
              <div className="text-2xl font-bold">2026</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="text-2xl font-bold flex items-center justify-center gap-2">
                <Code2 className="h-6 w-6" aria-hidden="true" />
                <span>15</span>
              </div>
              <div className="text-sm text-muted-foreground">AI Agents Running</div>
            </div>
            <div>
              <div className="text-2xl font-bold">1-on-1</div>
              <div className="text-sm text-muted-foreground">Founder Support</div>
            </div>
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
              AI tools let us deliver better results, faster, at lower cost
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            <FeatureCard icon={Zap} title="Live in Days" description="AI-assisted development means we build in days what others take weeks to complete." />
            <FeatureCard icon={DollarSign} title="Half the Price" description="Efficiency savings passed directly to you. Compare our quotes to any agency in the Inland Empire." />
            <FeatureCard icon={Smartphone} title="Mobile-First" description="Every site is built mobile-responsive from day one. No extra cost, no compromises." />
            <FeatureCard icon={Lock} title="Secure Hosting" description="Free SSL, automatic backups, and enterprise-grade security included at no extra charge." />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Stop Losing Customers?"
        description="Free 15-minute strategy call. See our AI live, get your ROI estimate."
        buttonText="Book Your Free Call"
      />
    </>
  );
}
