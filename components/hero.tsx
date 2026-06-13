import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at top, hsl(var(--primary) / 0.3), transparent 60%), radial-gradient(ellipse at bottom right, hsl(var(--accent) / 0.2), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6">AI Employees for Your Business</Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Stop Losing Customers.{" "}
          <span className="gradient-text">Hire AI.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          AI employees that answer every call, capture every lead, and book appointments 24/7. Never miss a customer again. From $397/month.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Book Your Free Call</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/pricing">See Pricing</Link>
          </Button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span>Serving Temecula, Murrieta &amp; Southern California</span>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <div className="text-3xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Always On</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">0</div>
            <div className="text-sm text-muted-foreground">Missed Calls</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">$397</div>
            <div className="text-sm text-muted-foreground">/Month Starting</div>
          </div>
        </div>
      </div>
    </section>
  );
}
