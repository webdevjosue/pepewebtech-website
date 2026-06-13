import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Gift, Users } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Founding Client Program
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Be One of Our First 10 Clients
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We&apos;re a new agency in Temecula building our portfolio. That means you get founding-client rates, free setup, and our full attention — plus a money-back guarantee that removes all risk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {promises.map((p) => (
            <Card key={p.title} className="text-center">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <p.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">3 founding client spots remaining</strong> at current rates. Prices increase after the first 10 clients.
          </p>
        </div>
      </div>
    </section>
  );
}
