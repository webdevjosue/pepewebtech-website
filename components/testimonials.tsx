import { ShieldCheck, Gift, Users, Sparkles } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "30-Day Money-Back Guarantee",
    description: "Not happy in the first 30 days? You get every dollar back. No questions, no arguments, no awkward conversations.",
  },
  {
    icon: Gift,
    title: "Free Setup — $497 Value",
    description: "We waive the setup fee for our first 10 founding clients. Your AI employee is configured, trained, and deployed at no extra cost.",
  },
  {
    icon: Users,
    title: "Work Directly With the Founder",
    description: "No account managers, no call centers, no runaround. You deal with Josue directly — the person who builds and maintains your AI system.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
            <Sparkles className="h-3.5 w-3.5" />
            Founding Client Program
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Be One of Our First 10 Clients
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re a new agency in Temecula building our portfolio. That means you get founding-client rates, free setup, and our full attention — plus a money-back guarantee that removes all risk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {promises.map((p, i) => (
            <div key={p.title} className="premium-card text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 mb-6 border border-primary/10">
                <p.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg tracking-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary pulse-glow" />
            <p className="text-sm font-medium text-foreground">
              <strong>3 founding client spots remaining</strong> — prices increase after the first 10 clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
