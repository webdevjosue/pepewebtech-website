import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        <Badge className="mb-6">AI-Powered Development</Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Build Your Website{" "}
          <span className="gradient-text">4x Faster</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Modern websites for small businesses. Powered by AI, delivered in
          days, not weeks. Starting at $1,500.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <div className="text-3xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">4x</div>
            <div className="text-sm text-muted-foreground">Faster Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground">50%</div>
            <div className="text-sm text-muted-foreground">Lower Cost</div>
          </div>
        </div>
      </div>
    </section>
  );
}
