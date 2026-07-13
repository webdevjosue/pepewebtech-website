"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title,
  description,
  buttonText = "Book Your Free Call",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
      <div
        className="mesh-orb"
        style={{
          top: "-50%",
          left: "30%",
          width: "500px",
          height: "500px",
          background: "hsl(239 84% 60%)",
          opacity: 0.08,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight max-w-2xl mx-auto">
          {title}
        </h2>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-10">
          <Button asChild size="lg" className="btn-primary-premium group h-14 px-10 text-base shadow-xl hover:shadow-2xl transition-all duration-300">
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
