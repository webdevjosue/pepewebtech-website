"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient" />
      <div
        className="mesh-orb animate-float"
        style={{
          top: "15%",
          left: "55%",
          width: "500px",
          height: "500px",
          background: "hsl(265 85% 60%)",
          opacity: 0.15,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="reveal">
          <Badge className="mb-8 inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 transition-colors">
            <Sparkles className="h-3.5 w-3.5" />
            AI Employees for Your Business
          </Badge>
        </div>

        <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          Stop Losing Customers.
          <br />
          <span className="gradient-text">Hire AI.</span>
        </h1>

        <p className="reveal reveal-delay-2 mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          AI employees that answer every call, capture every lead, and book
          appointments 24/7. Never miss a customer again.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="btn-primary-premium group h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/contact">
              Book Your Free Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
            <Link href="/pricing">See Pricing</Link>
          </Button>
        </div>

        <div className="reveal reveal-delay-4 mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span>Serving Temecula, Murrieta &amp; Southern California</span>
        </div>

        {/* Premium stats bar */}
        <div className="reveal reveal-delay-4 mt-14 flex justify-center">
          <div className="grid grid-cols-3 gap-8 sm:gap-14 max-w-2xl mx-auto">
            <div className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text counter">
                24/7
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">
                Always On
              </div>
            </div>
            <div className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text counter">
                <AnimatedCounter target={0} suffix="" />
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">
                Missed Calls
              </div>
            </div>
            <div className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text counter">
                $<AnimatedCounter target={397} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">
                /Month Starting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1200;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = current.toString() + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
