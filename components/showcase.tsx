import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Zap, Scissors } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ShowcaseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  href: string;
  external?: boolean;
  thumbnail?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    icon: Globe,
    title: "PepeWebTech",
    description:
      "Complete business platform with modern design, dark/light mode, pricing, and 80+ blog posts.",
    tags: ["Fast Loading", "SEO Optimized", "Responsive"],
    href: "https://www.pepewebtech.com",
    external: true,
    thumbnail: "/images/pepewebtech-thumb.png",
  },
  {
    icon: Zap,
    title: "PepeTech",
    description:
      "Developer tools platform with 12 free utilities. 100% client-side processing, zero tracking.",
    tags: ["SEO Optimized", "Sub-second Load", "Custom SVG Icons"],
    href: "https://pepetech.com",
    external: true,
    thumbnail: "/images/portfolio-thumb.png",
  },
  {
    icon: Scissors,
    title: "The Butchers Barbershop",
    description:
      "Premium barbershop website in Murrieta, CA. Modern design with booking and services showcase.",
    tags: ["Local Business", "Booking", "Mobile Optimized"],
    href: "https://webpage-eight-bice.vercel.app",
    external: true,
    thumbnail: "/images/butchers-thumb.png",
  },
];

export function Showcase() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Recent Projects
          </h2>
          <p className="mt-3 text-muted-foreground">
            Websites and solutions built with modern AI-powered development
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item) => (
            <Card key={item.title} className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <CardHeader className="pb-0 pt-0">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="flex items-center justify-center text-center pt-8 pb-2" aria-hidden="true">
                    <item.icon className="h-12 w-12 text-primary" aria-hidden="true" />
                  </div>
                )}
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View Live Site →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
